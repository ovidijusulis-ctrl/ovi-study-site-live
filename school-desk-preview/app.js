const ownerScreens = new Set([
  "today",
  "request",
  "people",
  "person",
  "calendar",
  "session",
  "more",
]);

const navParent = {
  request: "today",
  session: "today",
  person: "people",
};

let requestConfirmed = false;

function validScreen(value) {
  const screen = value.replace(/^#/, "");
  return document.querySelector(`[data-screen="${screen}"]`) ? screen : "today";
}

function showScreen(nextScreen, options = {}) {
  const screen = validScreen(nextScreen);
  document.querySelectorAll("[data-screen]").forEach((section) => {
    section.hidden = section.dataset.screen !== screen;
  });

  const isStudent = screen === "student";
  document.querySelectorAll("[data-owner-shell]").forEach((node) => {
    node.hidden = isStudent;
  });
  document.querySelectorAll("[data-student-shell]").forEach((node) => {
    node.hidden = !isStudent;
  });
  const decisionDock = document.querySelector("[data-mobile-decision-dock]");
  decisionDock.hidden = screen !== "request" || requestConfirmed;
  document.body.classList.toggle("request-screen-active", screen === "request");

  const activeNav = navParent[screen] || screen;
  document.querySelectorAll("[data-go]").forEach((button) => {
    const isCurrent = button.dataset.go === activeNav && ownerScreens.has(screen);
    if (isCurrent) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (!options.fromHash) {
    history.replaceState(null, "", `#${screen}`);
  }
  window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
  document.title =
    screen === "student"
      ? "Student Home — Ovi English School"
      : `${screen[0].toUpperCase()}${screen.slice(1)} — School Desk`;
}

document.addEventListener("click", (event) => {
  const destination = event.target.closest("[data-go]");
  if (destination) {
    showScreen(destination.dataset.go);
    return;
  }

  if (event.target.closest("[data-confirm-open]")) {
    if (window.matchMedia("(max-width: 720px)").matches) {
      document.querySelector("[data-mobile-confirm-dialog]").showModal();
      return;
    }
    document.querySelector("[data-decision-actions]").hidden = true;
    document.querySelector("[data-confirm-box]").hidden = false;
    document.querySelector("[data-mobile-decision-dock]").hidden = true;
    return;
  }

  if (event.target.closest("[data-proposal-open]")) {
    document.querySelector("[data-decision-actions]").hidden = true;
    document.querySelector("[data-proposal-box]").hidden = false;
    document.querySelector("[data-mobile-decision-dock]").hidden = true;
    if (window.matchMedia("(max-width: 720px)").matches) {
      document
        .querySelector(".decision-panel")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  if (event.target.closest("[data-decision-cancel]")) {
    document.querySelector("[data-confirm-box]").hidden = true;
    document.querySelector("[data-proposal-box]").hidden = true;
    document.querySelector("[data-decision-actions]").hidden = false;
    document.querySelector("[data-mobile-decision-dock]").hidden = false;
    return;
  }

  if (event.target.closest("[data-confirm-commit]")) {
    requestConfirmed = true;
    const mobileConfirmDialog = document.querySelector("[data-mobile-confirm-dialog]");
    if (mobileConfirmDialog.open) mobileConfirmDialog.close();
    document.querySelector("[data-mobile-decision-dock]").hidden = true;
    const requestStatus = document.querySelector(
      '[data-screen="request"] .page-heading .chip',
    );
    requestStatus.className = "chip chip-confirmed";
    requestStatus.textContent = "Confirmed · session scheduled";
    const timeStatus = document.querySelector('[data-screen="request"] .inline-warning');
    timeStatus.className = "inline-warning inline-confirmed";
    timeStatus.textContent = "Confirmed · JST";
    document.querySelector('[data-screen="request"] .page-heading .lede').textContent =
      "Akira’s lesson is scheduled. The confirmation email is ready for review.";
    const panel = document.querySelector(".decision-panel");
    panel.innerHTML = `
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Confirmed</p>
          <h2>Akira’s lesson is scheduled</h2>
        </div>
        <span class="chip chip-confirmed">Scheduled</span>
      </div>
      <p>The person and session are linked. The confirmation email is ready for your review.</p>
      <div class="button-row-group">
        <button class="button button-primary" type="button" data-go="calendar">View session</button>
        <button class="button button-secondary" type="button" data-go="people">View person</button>
      </div>
    `;
    showToast("Request confirmed. Email prepared for review.");
    return;
  }

  if (event.target.closest("[data-decline-open]")) {
    openDangerDialog({
      eyebrow: "Decline request",
      title: "Decline Akira’s request?",
      description:
        "The request will close without creating a lesson. No message will be sent until you prepare and approve one.",
      cancel: "Keep request",
      confirm: "Decline request",
      toast: "Akira’s request was declined.",
    });
    return;
  }

  if (event.target.closest("[data-cancel-open]")) {
    openDangerDialog({
      eyebrow: "Cancel lesson",
      title: "Cancel Hana’s lesson?",
      description:
        "This removes the lesson from the active calendar and records the cancellation in Hana’s activity. No message will be sent until you prepare and approve one.",
      cancel: "Keep lesson",
      confirm: "Cancel lesson",
      toast: "Hana’s lesson was cancelled.",
    });
    return;
  }

  if (event.target.closest("[data-no-show-open]")) {
    openDangerDialog({
      eyebrow: "Mark no-show",
      title: "Mark Hana as a no-show?",
      description:
        "This closes the session as a no-show and records the change in Hana’s activity. No message will be sent automatically.",
      cancel: "Keep scheduled",
      confirm: "Mark no-show",
      toast: "Hana was marked as a no-show.",
    });
    return;
  }

  if (event.target.closest("[data-finish]")) {
    showToast("Lesson with Hana marked complete.");
    setTimeout(() => showScreen("today"), 950);
  }
});

document.querySelectorAll('input[name="attendance"]').forEach((input) => {
  input.addEventListener("change", () => {
    const attended = input.value === "attended";
    document.querySelector("[data-attended-fields]").hidden = !attended;
    const submit = document.querySelector("[data-finish]");
    submit.textContent =
      input.value === "cancelled"
        ? "Save as cancelled"
        : input.value === "no-show"
          ? "Save as no-show"
          : "Finish lesson";
  });
});

document.querySelectorAll(".role-filter button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".role-filter button").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-checked", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-checked", "true");
  });
});

document.querySelectorAll(".mobile-day-picker button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mobile-day-picker button").forEach((item) => {
      item.setAttribute("aria-selected", "false");
    });
    button.setAttribute("aria-selected", "true");
  });
});

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(window.schoolDeskToastTimer);
  window.schoolDeskToastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 4000);
}

function openDangerDialog({ eyebrow, title, description, cancel, confirm, toast }) {
  const dialog = document.querySelector("[data-danger-dialog]");
  dialog.querySelector("[data-danger-eyebrow]").textContent = eyebrow;
  dialog.querySelector("[data-danger-title]").textContent = title;
  dialog.querySelector("[data-danger-description]").textContent = description;
  dialog.querySelector("[data-danger-cancel]").textContent = cancel;
  dialog.querySelector("[data-danger-confirm]").textContent = confirm;
  dialog.dataset.confirmToast = toast;
  dialog.showModal();
}

document.querySelector("[data-danger-dialog]").addEventListener("close", (event) => {
  if (event.currentTarget.returnValue === "confirm") {
    showToast(event.currentTarget.dataset.confirmToast);
  }
});

window.addEventListener("hashchange", () => showScreen(location.hash, { fromHash: true }));
showScreen(location.hash || "today", { fromHash: true, instant: true });
