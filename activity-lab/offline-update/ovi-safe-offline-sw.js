const POLICY = "hash_assets_only_network_first_lessons_truth_network_only_opt_in_update";
const CACHE_NAME = "ovi-safe-offline-preview-v1";
const SCOPE_PATH = "/activity-lab/offline-update/";

const PRIVATE_ROUTE_PREFIXES = [
  "/api/",
  "/profile/",
  "/school/",
  "/classroom/",
  "/student/",
  "/admin/",
];
const PRIVATE_QUERY_KEYS = [
  "access",
  "answer",
  "email",
  "pin",
  "rawAnswer",
  "room",
  "studentEmail",
  "token",
];
const AUDIO_EXTENSIONS = new Set([".aac", ".m4a", ".mp3", ".oga", ".ogg", ".wav", ".webm"]);
const PUBLIC_IMAGE_EXTENSIONS = new Set([".avif", ".gif", ".jpg", ".jpeg", ".png", ".webp"]);

function pathnameExtension(pathname = "") {
  const match = pathname.toLowerCase().match(/(\.[a-z0-9]+)$/);
  return match ? match[1] : "";
}

function isHashVersionedBuildAsset(pathname = "") {
  return /^\/_astro\/[^/?#]+\.[A-Za-z0-9_-]{8,}\.(?:css|js|mjs|woff2?)$/.test(String(pathname));
}

function hasPrivateState(url) {
  return PRIVATE_QUERY_KEYS.some((key) => url.searchParams.has(key));
}

function classify(input, options = {}) {
  const requestUrl = new URL(String(input), self.location.origin);
  const method = String(options.method || "GET").toUpperCase();
  const sameOrigin = requestUrl.origin === self.location.origin;
  const pathname = requestUrl.pathname;
  const extension = pathnameExtension(pathname);

  if (!sameOrigin) return { strategy: "network-only", cacheable: false, reason: "external_origin", offlineFallback: false };
  if (method !== "GET") return { strategy: "network-only", cacheable: false, reason: "non_get_request", offlineFallback: false };
  if (PRIVATE_ROUTE_PREFIXES.some((prefix) => pathname === prefix.slice(0, -1) || pathname.startsWith(prefix)) || hasPrivateState(requestUrl)) {
    return { strategy: "network-only", cacheable: false, reason: "private_or_stateful_route", offlineFallback: false };
  }
  if (pathname.startsWith("/data/episodes/") || pathname.startsWith("/popup-data/") || /popup.*\.json$/i.test(pathname)) {
    return { strategy: "network-only", cacheable: false, reason: "lesson_truth_sidecar", offlineFallback: false };
  }
  if (pathname.startsWith("/audio/") || AUDIO_EXTENSIONS.has(extension)) {
    return { strategy: "network-only", cacheable: false, reason: "large_audio_or_recording", offlineFallback: false };
  }
  if (pathname === "/" || pathname === "/index.html" || pathname === "/manifest.webmanifest" || pathname.endsWith("/sw.js") || pathname.endsWith("/ovi-safe-offline-sw.js")) {
    return { strategy: "network-only", cacheable: false, reason: "unversioned_shell_or_worker", offlineFallback: false };
  }
  if (isHashVersionedBuildAsset(pathname)) {
    return { strategy: "cache-first", cacheable: true, reason: "hash_versioned_build_asset", offlineFallback: false };
  }
  if (pathname.startsWith("/episodes/") && pathname.endsWith("/")) {
    return { strategy: "network-first", cacheable: false, reason: "public_lesson_document", offlineFallback: true };
  }
  if (pathname.startsWith(SCOPE_PATH) && pathname.endsWith("/")) {
    return { strategy: "network-first", cacheable: false, reason: "scoped_preview_document", offlineFallback: true };
  }
  if ((pathname.startsWith("/images/") || pathname.startsWith("/kids-reading/")) && PUBLIC_IMAGE_EXTENSIONS.has(extension)) {
    return { strategy: "stale-while-revalidate-quota", cacheable: true, reason: "public_image_quota_cache", offlineFallback: false };
  }
  return { strategy: "network-only", cacheable: false, reason: "default_network_only", offlineFallback: false };
}

function buildProbe(urls = []) {
  const rows = urls.map((url) => ({ url, ...classify(url) }));
  return {
    policy: POLICY,
    rows,
    cacheFirstCount: rows.filter((row) => row.strategy === "cache-first").length,
    networkFirstCount: rows.filter((row) => row.strategy === "network-first").length,
    networkOnlyCount: rows.filter((row) => row.strategy === "network-only").length,
    offlineFallbackCount: rows.filter((row) => row.offlineFallback).length,
    truthSidecarBlockedCount: rows.filter((row) => row.reason === "lesson_truth_sidecar").length,
    privateBlockedCount: rows.filter((row) => row.reason === "private_or_stateful_route").length,
    audioBlockedCount: rows.filter((row) => row.reason === "large_audio_or_recording").length,
  };
}

function filterPrecache(urls = []) {
  const accepted = [];
  const rejected = [];
  for (const candidate of urls) {
    const url = new URL(String(candidate), self.location.origin);
    const allowed = url.origin === self.location.origin && isHashVersionedBuildAsset(url.pathname);
    const row = {
      url: candidate,
      reason: allowed ? "hash_versioned_build_asset" : classify(candidate).reason,
    };
    if (allowed) accepted.push(row);
    else rejected.push(row);
  }
  return {
    policy: POLICY,
    accepted,
    rejected,
    acceptedCount: accepted.length,
    rejectedCount: rejected.length,
  };
}

function fallbackResponse() {
  return new Response("<!doctype html><title>Offline</title><main><h1>Offline</h1><p>This hidden preview keeps lesson truth network-first.</p></main>", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Ovi-Offline-Fallback": "scoped-preview",
    },
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME));
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith("ovi-safe-offline-preview-") && key !== CACHE_NAME).map((key) => caches.delete(key)));
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable();
    }
  })());
});

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "OVI_SAFE_OFFLINE_SKIP_WAITING") {
    event.waitUntil(self.skipWaiting());
    return;
  }
  if (data.type === "OVI_SAFE_OFFLINE_POLICY_PROBE") {
    const payload = {
      ok: true,
      policy: POLICY,
      probe: buildProbe(data.urls || []),
      precache: filterPrecache(data.precacheUrls || []),
      autoSkipWaiting: false,
      clientsClaim: false,
    };
    event.ports?.[0]?.postMessage(payload);
  }
});

self.addEventListener("fetch", (event) => {
  const policy = classify(event.request.url, { method: event.request.method });
  if (policy.strategy === "network-only") return;

  if (policy.strategy === "cache-first") {
    event.respondWith((async () => {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      const response = await fetch(event.request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, response.clone());
      }
      return response;
    })());
    return;
  }

  if (policy.strategy === "network-first") {
    event.respondWith((async () => {
      try {
        return await event.preloadResponse || await fetch(event.request);
      } catch {
        return fallbackResponse();
      }
    })());
    return;
  }

  if (policy.strategy === "stale-while-revalidate-quota") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(event.request);
      const fresh = fetch(event.request).then((response) => {
        if (response.ok) cache.put(event.request, response.clone());
        return response;
      });
      return cached || fresh;
    })());
  }
});

