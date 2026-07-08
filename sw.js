const VERSION = "2026-07-08";
const CACHE_PREFIX = "ovi-pwa-";
const STATIC_CACHE = `${CACHE_PREFIX}static-${VERSION}`;
const DOCUMENT_CACHE = `${CACHE_PREFIX}documents-${VERSION}`;
const ASSET_CACHE = `${CACHE_PREFIX}assets-${VERSION}`;
const IMAGE_CACHE = `${CACHE_PREFIX}images-${VERSION}`;
const OFFLINE_URL = "/offline.html";
const PRECACHE_URLS = [
  OFFLINE_URL,
  "/manifest.webmanifest",
  "/favicon.svg",
  "/podcast-cover.png",
  "/icons/ovi-icon-192.png",
  "/icons/ovi-icon-512.png",
  "/icons/ovi-maskable-512.png",
];

const PRIVATE_PATH_PREFIXES = [
  "/admin",
  "/api",
  "/classroom",
  "/profile",
  "/school",
  "/student",
];
const PRIVATE_QUERY_KEYS = [
  "access",
  "email",
  "pin",
  "room",
  "studentEmail",
  "token",
];
const AUDIO_EXTENSIONS = /\.(?:aac|m4a|mp3|ogg|opus|wav|weba)$/iu;
const IMAGE_EXTENSIONS = /\.(?:avif|gif|jpeg|jpg|png|svg|webp)$/iu;
const STATIC_EXTENSIONS = /\.(?:css|js|json|mjs|txt|vtt|woff2?)$/iu;

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

function isPrivateUrl(url) {
  const pathname = url.pathname.replace(/\/+$/u, "") || "/";
  if (PRIVATE_PATH_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return true;
  }
  return PRIVATE_QUERY_KEYS.some((key) => url.searchParams.has(key));
}

function shouldHandle(request, url) {
  return request.method === "GET" && isSameOrigin(url) && !isPrivateUrl(url);
}

function isCacheableResponse(response) {
  return response && response.ok && (response.type === "basic" || response.type === "cors");
}

async function putCache(cacheName, request, response) {
  if (!isCacheableResponse(response)) return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  await putCache(cacheName, request, response);
  return response;
}

async function networkFirst(request, cacheName, fallbackUrl = "") {
  try {
    const response = await fetch(request);
    await putCache(cacheName, request, response);
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (fallbackUrl) {
      const fallback = await caches.match(fallbackUrl);
      if (fallback) return fallback;
    }
    throw error;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);
  const refresh = fetch(request)
    .then((response) => {
      putCache(cacheName, request, response).catch(() => {});
      return response;
    })
    .catch((error) => {
      if (cached) return cached;
      throw error;
    });
  return cached || refresh;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && ![STATIC_CACHE, DOCUMENT_CACHE, ASSET_CACHE, IMAGE_CACHE].includes(key))
          .map((key) => caches.delete(key)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "OVI_PWA_SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (!shouldHandle(request, url)) return;

  if (AUDIO_EXTENSIONS.test(url.pathname) || request.destination === "audio") {
    return;
  }

  if (url.pathname === "/sw.js" || url.pathname.endsWith("/sw.js")) {
    return;
  }

  if (request.mode === "navigate" || request.destination === "document") {
    event.respondWith(networkFirst(request, DOCUMENT_CACHE, OFFLINE_URL));
    return;
  }

  if (url.pathname.startsWith("/_astro/") || STATIC_EXTENSIONS.test(url.pathname)) {
    event.respondWith(cacheFirst(request, ASSET_CACHE));
    return;
  }

  if (request.destination === "image" || IMAGE_EXTENSIONS.test(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
    return;
  }

  if (url.pathname.startsWith("/data/episodes/")) {
    event.respondWith(networkFirst(request, ASSET_CACHE));
  }
});
