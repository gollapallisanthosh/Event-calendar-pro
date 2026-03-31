const daysContainer = document.querySelector(".days");
const date = document.querySelector(".date");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const todayBtn = document.querySelector(".today-btn");

const addEventBtn = document.querySelector(".add-event");
const addEventWrapper = document.querySelector(".add-event-wrapper");
const addEventClose = document.querySelector(".close");
const addEventSubmit = document.querySelector(".add-event-btn");

const eventName = document.querySelector(".event-name");
const eventTimeFrom = document.querySelector(".event-time-from");
const eventTimeTo = document.querySelector(".event-time-to");

const eventsContainer = document.querySelector(".events");
const themeToggle = document.querySelector(".theme-toggle");

let today = new Date();
let activeDay = today.getDate();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let eventsArr = JSON.parse(localStorage.getItem("events")) || [
  {
    id: 1,
    day: 1,
    month: 2,
    year: 2026,
    title: "Team Standup",
    time: "09:00 - 09:30"
  },
  {
    id: 2,
    day: 2,
    month: 2,
    year: 2026,
    title: "Design Review",
    time: "10:00 - 11:00"
  },
  {
    id: 3,
    day: 3,
    month: 2,
    year: 2026,
    title: "Client Call",
    time: "14:00 - 15:00"
  },
  {
    id: 4,
    day: 4,
    month: 2,
    year: 2026,
    title: "Code Review",
    time: "11:00 - 12:00"
  },
  {
    id: 5,
    day: 5,
    month: 2,
    year: 2026,
    title: "Project Meeting",
    time: "10:00 - 11:30"
  },
  {
    id: 6,
    day: 6,
    month: 2,
    year: 2026,
    title: "Budget Review",
    time: "13:00 - 14:00"
  },
  {
    id: 7,
    day: 7,
    month: 2,
    year: 2026,
    title: "Team Lunch",
    time: "12:00 - 13:00"
  },
  {
    id: 8,
    day: 8,
    month: 2,
    year: 2026,
    title: "Marketing Workshop",
    time: "09:00 - 10:30"
  },
  {
    id: 9,
    day: 9,
    month: 2,
    year: 2026,
    title: "Product Demo",
    time: "15:00 - 16:00"
  },
  {
    id: 10,
    day: 10,
    month: 2,
    year: 2026,
    title: "Quarterly Planning",
    time: "10:00 - 12:00"
  },
  {
    id: 11,
    day: 11,
    month: 2,
    year: 2026,
    title: "HR Meeting",
    time: "14:00 - 15:00"
  },
  {
    id: 12,
    day: 12,
    month: 2,
    year: 2026,
    title: "Department Sync",
    time: "10:00 - 11:00"
  },
  {
    id: 13,
    day: 13,
    month: 2,
    year: 2026,
    title: "Training Session",
    time: "13:00 - 14:30"
  },
  {
    id: 14,
    day: 14,
    month: 2,
    year: 2026,
    title: "Client Presentation",
    time: "11:00 - 12:00"
  },
  {
    id: 15,
    day: 15,
    month: 2,
    year: 2026,
    title: "Retrospective",
    time: "15:00 - 16:00"
  },
  {
    id: 16,
    day: 16,
    month: 2,
    year: 2026,
    title: "Strategy Meeting",
    time: "09:00 - 10:00"
  },
  {
    id: 17,
    day: 17,
    month: 2,
    year: 2026,
    title: "API Development",
    time: "10:00 - 12:00"
  },
  {
    id: 18,
    day: 18,
    month: 2,
    year: 2026,
    title: "Testing Sprint",
    time: "13:00 - 15:00"
  },
  {
    id: 19,
    day: 19,
    month: 2,
    year: 2026,
    title: "UI/UX Workshop",
    time: "10:00 - 11:30"
  },
  {
    id: 20,
    day: 20,
    month: 2,
    year: 2026,
    title: "Client Feedback",
    time: "14:00 - 15:00"
  },
  {
    id: 21,
    day: 21,
    month: 2,
    year: 2026,
    title: "Release Planning",
    time: "09:00 - 10:30"
  },
  {
    id: 22,
    day: 22,
    month: 2,
    year: 2026,
    title: "Team Building",
    time: "12:00 - 13:30"
  },
  {
    id: 23,
    day: 23,
    month: 2,
    year: 2026,
    title: "Doc Review",
    time: "10:00 - 11:00"
  },
  {
    id: 24,
    day: 24,
    month: 2,
    year: 2026,
    title: "Performance Review",
    time: "14:00 - 15:00"
  },
  {
    id: 25,
    day: 25,
    month: 2,
    year: 2026,
    title: "Sprint Review",
    time: "15:00 - 16:00"
  },
  {
    id: 26,
    day: 26,
    month: 2,
    year: 2026,
    title: "Security Audit",
    time: "10:00 - 11:30"
  },
  {
    id: 27,
    day: 27,
    month: 2,
    year: 2026,
    title: "Database Optimization",
    time: "13:00 - 14:00"
  },
  {
    id: 28,
    day: 28,
    month: 2,
    year: 2026,
    title: "Analytics Review",
    time: "11:00 - 12:00"
  },
  {
    id: 29,
    day: 29,
    month: 2,
    year: 2026,
    title: "Final Presentation",
    time: "09:00 - 10:00"
  },
  {
    id: 30,
    day: 30,
    month: 2,
    year: 2026,
    title: "Sprint Planning",
    time: "10:00 - 12:00"
  },
  {
    id: 31,
    day: 31,
    month: 2,
    year: 2026,
    title: "Month Wrap-up",
    time: "14:00 - 15:00"
  }
];

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function initCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const prevLastDay = new Date(currentYear, currentMonth, 0);

  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();
  const lastDate = lastDay.getDate();
  const prevLastDate = prevLastDay.getDate();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="day prev-date">${prevLastDate - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {

    const hasEvent = eventsArr.some(e =>
      e.day === i &&
      e.month === currentMonth &&
      e.year === currentYear
    );

    let classList = "day";
    if (i === activeDay) classList += " active";
    if (hasEvent) classList += " event";

    days += `<div class="${classList}">${i}</div>`;
  }

  for (let j = 1; j <= 6 - lastDayIndex; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }

  date.innerHTML = `${months[currentMonth]} ${currentYear}`;
  daysContainer.innerHTML = days;

  addDayClick();
  updateEvents();
}

initCalendar();

function addDayClick() {
  document.querySelectorAll(".day").forEach(day => {
    day.onclick = () => {
      activeDay = Number(day.innerHTML);
      initCalendar();
    };
  });
}

prev.onclick = () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  initCalendar();
};

next.onclick = () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  initCalendar();
};

todayBtn.onclick = () => {
  today = new Date();
  currentMonth = today.getMonth();
  currentYear = today.getFullYear();
  activeDay = today.getDate();
  initCalendar();
};

addEventBtn.onclick = () => {
  addEventWrapper.classList.toggle("active");
};

addEventClose.onclick = () => {
  addEventWrapper.classList.remove("active");
};

addEventSubmit.onclick = () => {
  if (!eventName.value) return;

  const newEvent = {
    id: Date.now(),
    day: activeDay,
    month: currentMonth,
    year: currentYear,
    title: eventName.value,
    time: `${eventTimeFrom.value} - ${eventTimeTo.value}`
  };

  eventsArr.push(newEvent);
  saveEvents();

  alert("✅ Event Added");

  eventName.value = "";
  eventTimeFrom.value = "";
  eventTimeTo.value = "";

  initCalendar();
};

function updateEvents() {
  eventsContainer.innerHTML = "";

  const dayEvents = eventsArr.filter(e =>
    e.day === activeDay &&
    e.month === currentMonth &&
    e.year === currentYear
  );

  if (!dayEvents.length) {
    eventsContainer.innerHTML = `<div class="no-event">No Events</div>`;
    return;
  }

  dayEvents.forEach(event => {
    eventsContainer.innerHTML += `
      <div class="event" draggable="true" data-id="${event.id}">
        <div class="title">${event.title}</div>
        <div class="event-time">${event.time}</div>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      </div>
    `;
  });

  addEventActions();
}

function addEventActions() {
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.onclick = e => {
      const id = Number(e.target.parentElement.dataset.id);
      eventsArr = eventsArr.filter(ev => ev.id !== id);
      saveEvents();
      initCalendar();
    };
  });

  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.onclick = e => {
      const id = Number(e.target.parentElement.dataset.id);
      const event = eventsArr.find(ev => ev.id === id);

      const newTitle = prompt("Edit title", event.title);
      if (newTitle) event.title = newTitle;

      saveEvents();
      initCalendar();
    };
  });
}

function saveEvents() {
  localStorage.setItem("events", JSON.stringify(eventsArr));
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

document.addEventListener("dragstart", e => {
  if (e.target.classList.contains("event")) {
    e.dataTransfer.setData("id", e.target.dataset.id);
    e.target.classList.add("dragging");
  }
});

document.addEventListener("dragend", e => {
  if (e.target.classList.contains("event")) {
    e.target.classList.remove("dragging");
  }
});

document.querySelector(".days").addEventListener("dragover", e => {
  e.preventDefault();
  if (e.target.classList.contains("day")) {
    e.target.classList.add("drag-over");
  }
});

document.querySelector(".days").addEventListener("drop", e => {
  e.preventDefault();

  if (e.target.classList.contains("day")) {
    const id = Number(e.dataTransfer.getData("id"));
    const newDay = Number(e.target.innerText);

    const event = eventsArr.find(ev => ev.id === id);
    event.day = newDay;

    saveEvents();
    initCalendar();
  }

  e.target.classList.remove("drag-over");
});