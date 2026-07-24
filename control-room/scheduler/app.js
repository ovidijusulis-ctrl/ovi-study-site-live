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

const calendarEvents = {
  "2026-07-24": [
    { time: "16:00", name: "Noa Yamamoto", place: "Online", status: "completed" },
  ],
  "2026-07-27": [
    { time: "17:30", name: "Kenji Watanabe", place: "Online", status: "confirmed" },
  ],
  "2026-07-28": [
    { time: "11:00", name: "Emi Kobayashi", place: "Kofu", status: "completed" },
  ],
  "2026-07-29": [
    { time: "18:00", name: "Hana Sato", place: "Online", status: "confirmed" },
  ],
  "2026-08-01": [
    { time: "10:00", name: "Akira Tanaka", place: "Online", status: "requested" },
    { time: "11:30", name: "Mia & Yuki Sato", place: "Kofu", status: "confirmed" },
  ],
  "2026-08-03": [
    { time: "17:30", name: "Kenji Watanabe", place: "Online", status: "confirmed" },
  ],
  "2026-08-04": [
    { time: "11:00", name: "Emi Kobayashi", place: "Kofu", status: "confirmed" },
  ],
  "2026-08-05": [
    { time: "18:00", name: "Hana Sato", place: "Online", status: "confirmed" },
  ],
  "2026-08-06": [
    { time: "16:00", name: "Noa Yamamoto", place: "Online", status: "confirmed" },
  ],
  "2026-08-08": [
    { time: "10:00", name: "Akira Tanaka", place: "Online", status: "confirmed" },
    { time: "11:30", name: "Mia & Yuki Sato", place: "Kofu", status: "confirmed" },
  ],
  "2026-08-10": [
    { time: "17:30", name: "Kenji Watanabe", place: "Online", status: "confirmed" },
  ],
  "2026-08-11": [
    { time: "11:00", name: "Emi Kobayashi", place: "Kofu", status: "confirmed" },
  ],
  "2026-08-12": [
    { time: "16:30", name: "Noa Yamamoto", place: "Online", status: "requested" },
    { time: "18:00", name: "Hana Sato", place: "Online", status: "confirmed" },
  ],
  "2026-08-15": [
    { time: "11:30", name: "Mia & Yuki Sato", place: "Kofu", status: "confirmed" },
  ],
  "2026-08-17": [
    { time: "17:30", name: "Kenji Watanabe", place: "Online", status: "confirmed" },
  ],
  "2026-08-19": [
    { time: "18:00", name: "Hana Sato", place: "Online", status: "confirmed" },
  ],
  "2026-08-22": [
    { time: "10:00", name: "Akira Tanaka", place: "Online", status: "confirmed" },
  ],
  "2026-08-26": [
    { time: "16:00", name: "Noa Yamamoto", place: "Online", status: "confirmed" },
  ],
  "2026-09-02": [
    { time: "18:00", name: "Hana Sato", place: "Online", status: "confirmed" },
  ],
  "2026-09-05": [
    { time: "10:00", name: "Akira Tanaka", place: "Online", status: "confirmed" },
    { time: "11:30", name: "Mia & Yuki Sato", place: "Kofu", status: "confirmed" },
  ],
};

const prototypeToday = "2026-07-24";
let calendarView = "week";
let monthCursor = new Date(Date.UTC(2026, 7, 1));
let selectedMonthDate = "2026-08-01";

const monthTitleFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const longDateFormatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

function lessonCountLabel(count) {
  return `${count} ${count === 1 ? "lesson" : "lessons"}`;
}

function monthGridDates(cursor) {
  const firstOfMonth = new Date(
    Date.UTC(cursor.getUTCFullYear(), cursor.getUTCMonth(), 1),
  );
  const mondayOffset = (firstOfMonth.getUTCDay() + 6) % 7;
  const firstGridDate = new Date(firstOfMonth);
  firstGridDate.setUTCDate(firstGridDate.getUTCDate() - mondayOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(firstGridDate);
    date.setUTCDate(firstGridDate.getUTCDate() + index);
    return date;
  });
}

function statusLabel(status) {
  if (status === "requested") return "Requested";
  if (status === "completed") return "Completed";
  return "Scheduled";
}

function renderMonthAgenda() {
  const agendaTitle = document.querySelector("[data-month-agenda-title]");
  const agendaCount = document.querySelector("[data-month-agenda-count]");
  const agendaList = document.querySelector("[data-month-agenda-list]");
  const selectedDate = new Date(`${selectedMonthDate}T00:00:00Z`);
  const events = calendarEvents[selectedMonthDate] || [];

  agendaTitle.textContent = longDateFormatter.format(selectedDate);
  agendaCount.textContent = lessonCountLabel(events.length);
  agendaList.replaceChildren();

  if (events.length === 0) {
    const empty = document.createElement("p");
    empty.className = "month-agenda-empty";
    empty.textContent = "No lessons — this day is open.";
    agendaList.append(empty);
    return;
  }

  events.forEach((lesson) => {
    const row = document.createElement("div");
    row.className = "month-agenda-row";

    const status = document.createElement("span");
    status.className = `month-agenda-status ${lesson.status}`;
    status.setAttribute("aria-label", statusLabel(lesson.status));

    const time = document.createElement("time");
    time.textContent = lesson.time;

    const details = document.createElement("span");
    const name = document.createElement("strong");
    const meta = document.createElement("small");
    name.textContent = lesson.name;
    meta.textContent = `${lesson.place} · ${statusLabel(lesson.status)}`;
    details.append(name, meta);

    row.append(status, time, details);
    agendaList.append(row);
  });
}

function renderMonthCalendar() {
  const monthDays = document.querySelector("[data-month-days]");
  const currentMonth = monthCursor.getUTCMonth();
  const currentYear = monthCursor.getUTCFullYear();
  const monthPrefix = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}`;
  const currentMonthEvents = Object.entries(calendarEvents).filter(([key]) =>
    key.startsWith(monthPrefix),
  );
  const lessonTotal = currentMonthEvents.reduce(
    (total, [, lessons]) => total + lessons.length,
    0,
  );
  const requestTotal = currentMonthEvents.reduce(
    (total, [, lessons]) =>
      total + lessons.filter(({ status }) => status === "requested").length,
    0,
  );

  document.querySelector("[data-calendar-title]").textContent =
    monthTitleFormatter.format(monthCursor);
  document.querySelector("[data-calendar-summary]").textContent =
    `${lessonCountLabel(lessonTotal)} · ${requestTotal} ${
      requestTotal === 1 ? "request" : "requests"
    }`;

  const fragment = document.createDocumentFragment();
  monthGridDates(monthCursor).forEach((date) => {
    const key = dateKey(date);
    const events = calendarEvents[key] || [];
    const button = document.createElement("button");
    const dateRow = document.createElement("span");
    const dateNumber = document.createElement("span");
    const count = document.createElement("span");
    const eventLines = document.createElement("span");

    button.type = "button";
    button.className = "month-day";
    button.dataset.monthDay = key;
    button.setAttribute(
      "aria-label",
      `${longDateFormatter.format(date)}, ${lessonCountLabel(events.length)}`,
    );
    button.setAttribute("aria-pressed", String(key === selectedMonthDate));
    if (date.getUTCMonth() !== currentMonth) button.classList.add("is-outside");
    if (key === prototypeToday) button.classList.add("is-today");

    dateRow.className = "month-date-row";
    dateNumber.className = "month-date";
    dateNumber.textContent = String(date.getUTCDate());
    count.className = `month-count${events.length === 0 ? " is-zero" : ""}`;
    count.textContent = String(events.length);
    count.setAttribute("aria-hidden", "true");
    dateRow.append(dateNumber, count);

    eventLines.className = "month-event-lines";
    events.slice(0, 2).forEach((lesson) => {
      const eventLine = document.createElement("span");
      const eventName = document.createElement("span");
      eventLine.className = `month-event ${lesson.status}`;
      eventName.textContent = `${lesson.time} ${lesson.name}`;
      eventLine.append(eventName);
      eventLines.append(eventLine);
    });
    if (events.length > 2) {
      const more = document.createElement("span");
      more.className = "month-more";
      more.textContent = `+${events.length - 2} more`;
      eventLines.append(more);
    }

    button.append(dateRow, eventLines);
    fragment.append(button);
  });

  monthDays.replaceChildren(fragment);
  renderMonthAgenda();
}

function selectFirstDayInMonth() {
  const prefix = `${monthCursor.getUTCFullYear()}-${String(
    monthCursor.getUTCMonth() + 1,
  ).padStart(2, "0")}`;
  selectedMonthDate =
    Object.keys(calendarEvents)
      .sort()
      .find((key) => key.startsWith(prefix)) || `${prefix}-01`;
}

function setCalendarView(nextView) {
  calendarView = nextView;
  const isMonth = calendarView === "month";

  document.querySelectorAll("[data-calendar-view]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.calendarView === calendarView));
  });
  document.querySelectorAll("[data-week-view]").forEach((element) => {
    element.hidden = isMonth;
  });
  document.querySelector("[data-month-calendar]").hidden = !isMonth;
  document.querySelector("[data-calendar-previous]").setAttribute(
    "aria-label",
    isMonth ? "Previous month" : "Previous week",
  );
  document.querySelector("[data-calendar-next]").setAttribute(
    "aria-label",
    isMonth ? "Next month" : "Next week",
  );

  if (isMonth) {
    renderMonthCalendar();
  } else {
    document.querySelector("[data-calendar-title]").textContent = "27 July – 2 August";
    document.querySelector("[data-calendar-summary]").textContent = "5 lessons this week";
  }
}

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
  const studentName = document.querySelector("[data-student-name]")?.textContent?.trim();
  document.title =
    screen === "student"
      ? "Student Home — Ovi English School"
      : screen === "people"
        ? "Students — Scheduler"
        : screen === "person" && studentName && studentName !== "Choose a student"
          ? `${studentName} — Scheduler`
          : `${screen[0].toUpperCase()}${screen.slice(1)} — Scheduler`;
}

document.addEventListener("click", (event) => {
  const unavailable = event.target.closest("[data-not-ready]");
  if (unavailable) {
    showToast(
      unavailable.dataset.notReady
        || "This part will be connected in the next Scheduler release.",
    );
    return;
  }

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

document.querySelectorAll("[data-calendar-view]").forEach((button) => {
  button.addEventListener("click", () => setCalendarView(button.dataset.calendarView));
});

document.querySelector("[data-month-days]").addEventListener("click", (event) => {
  const day = event.target.closest("[data-month-day]");
  if (!day) return;
  selectedMonthDate = day.dataset.monthDay;
  renderMonthCalendar();
});

document.querySelector("[data-calendar-previous]").addEventListener("click", () => {
  if (calendarView !== "month") return;
  monthCursor = new Date(
    Date.UTC(monthCursor.getUTCFullYear(), monthCursor.getUTCMonth() - 1, 1),
  );
  selectFirstDayInMonth();
  renderMonthCalendar();
});

document.querySelector("[data-calendar-next]").addEventListener("click", () => {
  if (calendarView !== "month") return;
  monthCursor = new Date(
    Date.UTC(monthCursor.getUTCFullYear(), monthCursor.getUTCMonth() + 1, 1),
  );
  selectFirstDayInMonth();
  renderMonthCalendar();
});

document.querySelector("[data-calendar-today]").addEventListener("click", () => {
  if (calendarView !== "month") return;
  monthCursor = new Date(`${prototypeToday.slice(0, 7)}-01T00:00:00Z`);
  selectedMonthDate = prototypeToday;
  renderMonthCalendar();
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
window.schedulerUi = Object.freeze({
  showScreen,
  showToast,
});
setCalendarView("week");
showScreen(location.hash || "people", { fromHash: true, instant: true });
