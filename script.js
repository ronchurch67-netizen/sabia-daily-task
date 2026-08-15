// ===== Nou pran eleman HTML yo nou bezwen =====
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDaySelect = document.getElementById("task-day");
const taskTime = document.getElementById("task-time");
const micBtn = document.getElementById("mic-btn");
const notifyBtn = document.getElementById("notify-btn");
const weekView = document.getElementById("week-view");
const taskCount = document.getElementById("task-count");
const filterBtns = document.querySelectorAll(".filter-btn");
const reportModal = document.getElementById("report-modal");
const reportBody = document.getElementById("report-body");
const reportTitle = document.getElementById("report-title");
const reportCloseBtn = document.getElementById("report-close-btn");
const liveClock = document.getElementById("live-clock");
const langSelect = document.getElementById("app-lang");
const appTitleEl = document.getElementById("app-title");

// ===== Tradiksyon (chwa lang lan chanje ni vwa a, ni tout tèks ki nan app la) =====
const translations = {
  "fr-FR": {
    langLabel: "Français",
    appTitle: "Mes Tâches",
    inputPlaceholder: "Écrivez vos tâches (séparez par , si plusieurs)",
    micTitle: "Parlez pour écrire la tâche",
    dayTitle: "Quel jour",
    timeTitle: "Quelle heure",
    addBtn: "Ajouter",
    filterAll: "Tout",
    filterActive: "Actif",
    filterCompleted: "Terminé",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    today: "Aujourd'hui",
    emptyDay: "Aucune tâche.",
    taskCount: (n) => `${n} tâche(s) restante(s)`,
    notifyOff: "🔔 Activer les rappels",
    notifyOn: "🔔 Rappels activés",
    notifyUnsupported: "🔔 Rappels non supportés",
    reminderNotifTitle: "Rappel de tâche",
    reportTitle: "Rapport de la semaine",
    reportSummary: (done, total) => `<strong>${done} sur ${total}</strong> tâches accomplies la semaine dernière.`,
    reportIncompleteLabel: "Tâches non terminées :",
    reportAllDone: "Bravo ! Vous avez terminé toutes vos tâches. 🎉",
    reportFooter: "C'est une nouvelle semaine — replanifiez vos tâches ci-dessous.",
    reportCloseBtn: "Replanifier",
    micUnsupportedAlert: "Désolé, votre navigateur ne supporte pas la saisie vocale. Essayez Chrome ou Edge.",
  },
  "en-US": {
    langLabel: "English",
    appTitle: "My Tasks",
    inputPlaceholder: "Write your tasks (separate with , if several)",
    micTitle: "Speak to write the task",
    dayTitle: "Which day",
    timeTitle: "What time",
    addBtn: "Add",
    filterAll: "All",
    filterActive: "Active",
    filterCompleted: "Completed",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    today: "Today",
    emptyDay: "No tasks.",
    taskCount: (n) => `${n} task(s) remaining`,
    notifyOff: "🔔 Enable reminders",
    notifyOn: "🔔 Reminders on",
    notifyUnsupported: "🔔 Reminders unsupported",
    reminderNotifTitle: "Task reminder",
    reportTitle: "Weekly Report",
    reportSummary: (done, total) => `<strong>${done} of ${total}</strong> tasks completed last week.`,
    reportIncompleteLabel: "Unfinished tasks:",
    reportAllDone: "Great! You finished all your tasks. 🎉",
    reportFooter: "It's a new week — replan your tasks below.",
    reportCloseBtn: "Replan",
    micUnsupportedAlert: "Sorry, your browser doesn't support voice input. Try Chrome or Edge.",
  },
  "es-ES": {
    langLabel: "Español",
    appTitle: "Mis Tareas",
    inputPlaceholder: "Escriba sus tareas (separe con , si son varias)",
    micTitle: "Hable para escribir la tarea",
    dayTitle: "Qué día",
    timeTitle: "A qué hora",
    addBtn: "Añadir",
    filterAll: "Todas",
    filterActive: "Activas",
    filterCompleted: "Completadas",
    days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    today: "Hoy",
    emptyDay: "Sin tareas.",
    taskCount: (n) => `${n} tarea(s) pendiente(s)`,
    notifyOff: "🔔 Activar recordatorios",
    notifyOn: "🔔 Recordatorios activos",
    notifyUnsupported: "🔔 Recordatorios no compatibles",
    reminderNotifTitle: "Recordatorio de tarea",
    reportTitle: "Informe semanal",
    reportSummary: (done, total) => `<strong>${done} de ${total}</strong> tareas completadas la semana pasada.`,
    reportIncompleteLabel: "Tareas sin terminar:",
    reportAllDone: "¡Bien hecho! Terminaste todas tus tareas. 🎉",
    reportFooter: "Es una nueva semana — replanifique sus tareas abajo.",
    reportCloseBtn: "Replanificar",
    micUnsupportedAlert: "Lo sentimos, su navegador no admite la entrada de voz. Pruebe Chrome o Edge.",
  },
  "pt-BR": {
    langLabel: "Português",
    appTitle: "Minhas Tarefas",
    inputPlaceholder: "Escreva suas tarefas (separe com , se houver várias)",
    micTitle: "Fale para escrever a tarefa",
    dayTitle: "Qual dia",
    timeTitle: "Que horas",
    addBtn: "Adicionar",
    filterAll: "Todas",
    filterActive: "Ativas",
    filterCompleted: "Concluídas",
    days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    today: "Hoje",
    emptyDay: "Nenhuma tarefa.",
    taskCount: (n) => `${n} tarefa(s) restante(s)`,
    notifyOff: "🔔 Ativar lembretes",
    notifyOn: "🔔 Lembretes ativos",
    notifyUnsupported: "🔔 Lembretes não suportados",
    reminderNotifTitle: "Lembrete de tarefa",
    reportTitle: "Relatório semanal",
    reportSummary: (done, total) => `<strong>${done} de ${total}</strong> tarefas concluídas na semana passada.`,
    reportIncompleteLabel: "Tarefas não concluídas:",
    reportAllDone: "Parabéns! Você concluiu todas as tarefas. 🎉",
    reportFooter: "É uma nova semana — replaneje suas tarefas abaixo.",
    reportCloseBtn: "Replanejar",
    micUnsupportedAlert: "Desculpe, seu navegador não suporta entrada de voz. Tente Chrome ou Edge.",
  },
  "ht-HT": {
    langLabel: "Kreyòl ayisyen",
    appTitle: "Tach Mwen",
    inputPlaceholder: "Ekri tach ou yo (separe ak , si gen plizyè)",
    micTitle: "Pale pou ekri tach la",
    dayTitle: "Ki jou",
    timeTitle: "Ki lè",
    addBtn: "Ajoute",
    filterAll: "Tout",
    filterActive: "Aktif",
    filterCompleted: "Fini",
    days: ["Lendi", "Madi", "Mèkredi", "Jedi", "Vandredi", "Samdi", "Dimanch"],
    today: "Jodi a",
    emptyDay: "Pa gen tach.",
    taskCount: (n) => `${n} tach ki rete`,
    notifyOff: "🔔 Aktive rapèl",
    notifyOn: "🔔 Rapèl aktive",
    notifyUnsupported: "🔔 Rapèl pa sipòte",
    reminderNotifTitle: "Rapèl tach",
    reportTitle: "Rapò Semèn nan",
    reportSummary: (done, total) => `<strong>${done} sou ${total}</strong> tach ou te fè semèn pase a.`,
    reportIncompleteLabel: "Tach ki pa t fini:",
    reportAllDone: "Bravo! Ou te fini tout tach ou yo. 🎉",
    reportFooter: "Kounye a se yon nouvo semèn — replanifye tach ou yo pi ba a.",
    reportCloseBtn: "Replanifye",
    micUnsupportedAlert: "Malerezman, navigatè ou a pa sipòte antre pa vwa. Eseye Chrome oswa Edge.",
  },
};

let currentLangCode = localStorage.getItem("appLang") || "ht-HT";
let t = translations[currentLangCode] || translations["ht-HT"];

// "tasks" se yon lis (array) k ap kenbe tout task yo an memwa
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// "currentFilter" di nou ki filtè ki aktif kounye a: all, active, oswa completed
let currentFilter = "all";

// ===== Fonksyon ki bay endèks jou jodi a (0=premye jou semèn nan ... 6=dènye) =====
function getTodayIndex() {
  return (new Date().getDay() + 6) % 7;
}

// ===== Fonksyon ki sove tasks yo nan localStorage =====
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Fonksyon senp pou anpeche moun ekri kòd HTML danjere nan yon task
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Yon task an reta si jou li deja pase nan semèn nan, oswa lè li deja pase jodi a
function isOverdue(task) {
  if (task.completed) return false;
  const todayIndex = getTodayIndex();
  if (task.day < todayIndex) return true;
  if (task.day === todayIndex && task.time) {
    const now = new Date();
    const nowHM = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    return task.time < nowHM;
  }
  return false;
}

// ===== Aplike lang chwazi a sou tout tèks ki nan app la =====
function applyLanguage(langCode) {
  currentLangCode = translations[langCode] ? langCode : "ht-HT";
  t = translations[currentLangCode];
  localStorage.setItem("appLang", currentLangCode);

  document.documentElement.lang = currentLangCode.split("-")[0];
  document.title = `SABIA ${t.appTitle}`;
  appTitleEl.textContent = `SABIA ${t.appTitle}`;

  taskInput.placeholder = t.inputPlaceholder;
  micBtn.title = t.micTitle;
  taskDaySelect.title = t.dayTitle;
  taskTime.title = t.timeTitle;
  taskForm.querySelector('button[type="submit"]').textContent = t.addBtn;

  Array.from(taskDaySelect.options).forEach((option, index) => {
    option.textContent = t.days[index];
  });

  filterBtns.forEach((btn) => {
    if (btn.dataset.filter === "all") btn.textContent = t.filterAll;
    if (btn.dataset.filter === "active") btn.textContent = t.filterActive;
    if (btn.dataset.filter === "completed") btn.textContent = t.filterCompleted;
  });

  reportTitle.textContent = t.reportTitle;
  reportCloseBtn.textContent = t.reportCloseBtn;

  if (recognition) recognition.lang = currentLangCode;

  updateNotifyBtnLabel();
  updateLiveClock();
  renderTasks();
}

// ===== Fonksyon ki afiche tasks yo, gwoupe pa jou =====
function renderTasks() {
  weekView.innerHTML = "";
  const todayIndex = getTodayIndex();

  t.days.forEach((dayName, dayIndex) => {
    const dayTasks = tasks
      .filter((task) => task.day === dayIndex)
      .filter((task) => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
      })
      .sort((a, b) => (a.time || "99:99").localeCompare(b.time || "99:99"));

    const section = document.createElement("section");
    section.className = "day-section" + (dayIndex === todayIndex ? " today" : "");

    const header = document.createElement("h2");
    header.className = "day-header";
    header.textContent = dayName + (dayIndex === todayIndex ? ` · ${t.today}` : "");
    section.appendChild(header);

    const list = document.createElement("ul");
    list.className = "task-list";

    if (dayTasks.length === 0) {
      const empty = document.createElement("li");
      empty.className = "empty-day";
      empty.textContent = t.emptyDay;
      list.appendChild(empty);
    } else {
      dayTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className =
          "task-item" +
          (task.completed ? " completed" : "") +
          (isOverdue(task) ? " overdue-item" : "");

        li.innerHTML = `
          <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}" />
          <span class="task-main">
            <span class="task-text">${escapeHtml(task.text)}</span>
            ${task.time ? `<span class="task-time${isOverdue(task) ? " overdue" : ""}">🕒 ${task.time}</span>` : ""}
          </span>
          <button class="delete-btn" data-id="${task.id}">✕</button>
        `;

        list.appendChild(li);
      });
    }

    section.appendChild(list);
    weekView.appendChild(section);
  });

  // Nou mete ajou kantite tasks ki poko fini
  const activeCount = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = t.taskCount(activeCount);
}

// Kase yon tèks an plizyè aktivite si gen vigil (,) oswa pwenvigil (;) ladan l,
// epi chèche yon lè pou chak aktivite; si yon aktivite pa gen lè pa l, li itilize "fallbackTime" a
function parseActivities(rawText, fallbackTime) {
  return rawText
    .split(/[,;]/)
    .map((segment) => segment.trim())
    .filter((segment) => segment !== "")
    .map((segment) => {
      const parsed = extractTimeFromSpeech(segment);
      if (parsed && parsed.cleanedText) {
        return { text: parsed.cleanedText, time: parsed.time };
      }
      return { text: segment, time: fallbackTime || null };
    });
}

// Ajoute yon oswa plizyè aktivite, youn apre lòt, pou menm jou a
function addActivities(activities, day) {
  const base = Date.now();
  activities.forEach((activity, index) => {
    tasks.push({
      id: base + index,
      text: activity.text,
      completed: false,
      day: day,
      time: activity.time || null,
      remindedDate: null,
    });
  });
  saveTasks();
  renderTasks();
}

// ===== Ajoute yon nouvo task (oswa plizyè, si separe ak vigil) =====
taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Anpeche paj la reload

  const rawText = taskInput.value.trim();
  if (rawText === "") return; // Pa ajoute task vid

  const activities = parseActivities(rawText, taskTime.value);
  if (activities.length === 0) return;

  addActivities(activities, Number(taskDaySelect.value));

  taskInput.value = "";
  taskTime.value = "";
  taskInput.focus();
});

// ===== Make yon task kòm fini, oswa efase l =====
// "event delegation": yon sèl "listener" sou tout semèn nan
weekView.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);

  if (e.target.matches('input[type="checkbox"]')) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
  }

  if (e.target.matches(".delete-btn")) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    renderTasks();
  }
});

// ===== Chanje filtè (All / Active / Completed) =====
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// ===== Chanje lang (vwa + tout tèks nan app la) =====
langSelect.addEventListener("change", () => {
  applyLanguage(langSelect.value);
});

// ===== Antre pa vwa (mikwo) =====
const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (SpeechRecognitionCtor) {
  recognition = new SpeechRecognitionCtor();
  recognition.lang = currentLangCode;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.addEventListener("result", (e) => {
    const transcript = e.results[0][0].transcript;
    const activities = parseActivities(transcript, taskTime.value);

    if (activities.length > 1) {
      // Plizyè aktivite nan menm fraz la: ajoute yo dirèkteman, youn apre lòt
      addActivities(activities, Number(taskDaySelect.value));
      taskInput.value = "";
      taskTime.value = "";
    } else if (activities.length === 1) {
      // Yon sèl aktivite: ranpli chan yo pou moun nan ka verifye anvan l ajoute l
      taskInput.value = activities[0].text;
      if (activities[0].time) taskTime.value = activities[0].time;
    }
  });
  recognition.addEventListener("end", () => micBtn.classList.remove("listening"));
  recognition.addEventListener("error", () => micBtn.classList.remove("listening"));
}

// Chèche yon lè (egzanp: "14h30", "14:30", "à 9h", "midi") nan sa moun nan te pale a,
// epi retire l nan tèks la pou l pa rete kole nan non tach la
function pad2(n) {
  return String(n).padStart(2, "0");
}

function removeMatch(text, m) {
  return (text.slice(0, m.index) + text.slice(m.index + m[0].length))
    .replace(/\s{2,}/g, " ")
    .trim();
}

function extractTimeFromSpeech(text) {
  let m = text.match(/(?:\b(?:à|a|pou|nan)\b\s*)?(\d{1,2})\s*[:h.]\s*(\d{2})\b/i);
  if (m) {
    const h = parseInt(m[1], 10);
    const min = parseInt(m[2], 10);
    if (h >= 0 && h < 24 && min >= 0 && min < 60) {
      return { time: `${pad2(h)}:${pad2(min)}`, cleanedText: removeMatch(text, m) };
    }
  }

  m = text.match(/(?:\b(?:à|a|pou|nan)\b\s*)?(\d{1,2})\s*(?:h\b|heures?\b)/i);
  if (m) {
    const h = parseInt(m[1], 10);
    if (h >= 0 && h < 24) {
      return { time: `${pad2(h)}:00`, cleanedText: removeMatch(text, m) };
    }
  }

  m = text.match(/\bmidi\b/i);
  if (m) return { time: "12:00", cleanedText: removeMatch(text, m) };

  m = text.match(/\bminuit\b/i);
  if (m) return { time: "00:00", cleanedText: removeMatch(text, m) };

  return null;
}

micBtn.addEventListener("click", () => {
  if (!recognition) {
    alert(t.micUnsupportedAlert);
    return;
  }
  micBtn.classList.add("listening");
  recognition.start();
});

// ===== Rapèl (notifikasyon navigatè) =====
function updateNotifyBtnLabel() {
  if (!("Notification" in window)) {
    notifyBtn.textContent = t.notifyUnsupported;
    notifyBtn.disabled = true;
    return;
  }
  notifyBtn.textContent = Notification.permission === "granted" ? t.notifyOn : t.notifyOff;
}

// Jwe yon sèl "bip" (de ti son youn apre lòt)
let audioCtx = null;
function playBeep() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    [880, 1320].forEach((freq, i) => {
      const oscillator = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      oscillator.connect(gain);
      gain.connect(audioCtx.destination);
      oscillator.type = "sine";
      oscillator.frequency.value = freq;

      const start = now + i * 0.18;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.3, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.3);

      oscillator.start(start);
      oscillator.stop(start + 0.3);
    });
  } catch (e) {
    // Aparèy la pa sipòte son — pa gen anyen nou ka fè
  }
}

// Rapèl konplè: bipe AK vibre, 3 fwa youn apre lòt
function playReminderAlert() {
  const repeatCount = 3;
  const gapMs = 550;

  for (let i = 0; i < repeatCount; i++) {
    setTimeout(() => {
      playBeep();
      if (navigator.vibrate) navigator.vibrate(300);
    }, i * gapMs);
  }
}

notifyBtn.addEventListener("click", () => {
  // Kreye/debloke "audio context" la pandan n gen yon klik moun nan,
  // pou son rapèl la ka jwe pita menm si moun nan pa klike ankò
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();

  if (!("Notification" in window)) return;
  Notification.requestPermission().then(() => updateNotifyBtnLabel());
});

function checkReminders() {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  const now = new Date();
  const todayIndex = getTodayIndex();
  const todayStr = now.toISOString().slice(0, 10);
  const nowHM = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  let changed = false;
  tasks.forEach((task) => {
    if (
      !task.completed &&
      task.day === todayIndex &&
      task.time === nowHM &&
      task.remindedDate !== todayStr
    ) {
      new Notification(t.reminderNotifTitle, { body: task.text });
      playReminderAlert();
      task.remindedDate = todayStr;
      changed = true;
    }
  });
  if (changed) saveTasks();
}

setInterval(checkReminders, 20000);

// ===== Òlòj an dirèk, senkwonize ak lè aparèy la =====
function updateLiveClock() {
  const now = new Date();
  const dayName = t.days[getTodayIndex()];
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  liveClock.textContent = `${dayName} · ${hh}:${mm}:${ss}`;
}

setInterval(updateLiveClock, 1000);

// ===== Rapò chak fen semèn =====
function getWeekKey(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
}

function showWeeklyReport() {
  const total = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const incomplete = tasks.filter((task) => !task.completed);

  let html = `<p>${t.reportSummary(completedCount, total)}</p>`;

  if (incomplete.length > 0) {
    html += `<p>${t.reportIncompleteLabel}</p><ul class="report-list">`;
    incomplete.forEach((task) => {
      html += `<li>${escapeHtml(task.text)} <span class="report-day">(${t.days[task.day]})</span></li>`;
    });
    html += `</ul>`;
  } else if (total > 0) {
    html += `<p>${t.reportAllDone}</p>`;
  }

  html += `<p>${t.reportFooter}</p>`;

  reportBody.innerHTML = html;
  reportModal.classList.remove("hidden");
}

function checkWeeklyReport() {
  const currentWeekKey = getWeekKey(new Date());
  const lastWeekKey = localStorage.getItem("lastWeekKey");

  if (lastWeekKey && lastWeekKey !== currentWeekKey) {
    showWeeklyReport();
    tasks = tasks.map((task) => ({ ...task, completed: false, remindedDate: null }));
    saveTasks();
  }

  localStorage.setItem("lastWeekKey", currentWeekKey);
}

reportCloseBtn.addEventListener("click", () => {
  reportModal.classList.add("hidden");
  renderTasks();
});

// ===== Enskri "service worker" a pou app la mache tankou yon vrè app (enstalab, ofline) =====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Si sa echwe (pa egzanp lè paj la louvri dirèkteman ak "file://"), pa gen konsekans grav
    });
  });
}

// ===== Premye afichaj lè paj la louvri =====
taskDaySelect.value = String(getTodayIndex());
langSelect.value = currentLangCode;
applyLanguage(currentLangCode);
checkWeeklyReport();
