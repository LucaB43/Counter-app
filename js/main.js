/**
 * main.js
 * Costruisce l'interfaccia dinamicamente via DOM manipulation
 * e collega la logica del counter agli elementi UI.
 */

// ── Creazione elementi DOM ────────────────────────────────────────────────

function createDisplay() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("counter__display");

  const label = document.createElement("span");
  label.classList.add("counter__label");
  label.textContent = "COUNTER";

  const valueEl = document.createElement("span");
  valueEl.classList.add("counter__value");
  valueEl.id = "counter-value";
  valueEl.textContent = "0";

  wrapper.appendChild(label);
  wrapper.appendChild(valueEl);
  return wrapper;
}

function createButton(symbol, id, ariaLabel) {
  const btn = document.createElement("button");
  btn.classList.add("counter__btn");
  btn.id = id;
  btn.setAttribute("aria-label", ariaLabel);
  btn.textContent = symbol;
  return btn;
}

function createControls() {
  const controls = document.createElement("div");
  controls.classList.add("counter__controls");

  const btnDecrement = createButton("−", "btn-decrement", "Decrementa il counter");
  const btnReset = createButton("⟳", "btn-reset", "Azzera il counter");
  const btnIncrement = createButton("+", "btn-increment", "Incrementa il counter");

  controls.appendChild(btnDecrement);
  controls.appendChild(btnReset);
  controls.appendChild(btnIncrement);
  return controls;
}

function createStatusBar() {
  const bar = document.createElement("div");
  bar.classList.add("counter__status");

  const sessionLabel = document.createElement("span");
  sessionLabel.textContent = "sessione:";

  const sessionCount = document.createElement("span");
  sessionCount.id = "session-ops";
  sessionCount.textContent = "0 operazioni";

  const savedLabel = document.createElement("span");
  savedLabel.id = "saved-indicator";
  savedLabel.textContent = "";

  bar.appendChild(sessionLabel);
  bar.appendChild(sessionCount);
  bar.appendChild(savedLabel);
  return bar;
}

function buildUI(root) {
  const card = document.createElement("div");
  card.classList.add("counter");

  const header = document.createElement("div");
  header.classList.add("counter__header");
  header.innerHTML = `<span class="blink">▮</span> counter_app <span class="counter__version">v1.0</span>`;

  card.appendChild(header);
  card.appendChild(createDisplay());
  card.appendChild(createControls());
  card.appendChild(createStatusBar());

  root.appendChild(card);
}

// ── Aggiornamento UI ──────────────────────────────────────────────────────

function updateDisplay(newValue) {
  const el = document.getElementById("counter-value");

  // Colore dinamico in base al valore
  el.classList.remove("positive", "negative", "zero");
  if (newValue > 0) el.classList.add("positive");
  else if (newValue < 0) el.classList.add("negative");
  else el.classList.add("zero");

  // Animazione "pulse"
  el.classList.remove("pulse");
  void el.offsetWidth; // reflow per rilanciare l'animazione
  el.classList.add("pulse");

  el.textContent = newValue;
}

function updateSessionOps(count) {
  const el = document.getElementById("session-ops");
  el.textContent = `${count} ${count === 1 ? "operazione" : "operazioni"}`;
}

function showSaved() {
  const el = document.getElementById("saved-indicator");
  el.textContent = "✔ salvato";
  el.classList.add("visible");
  setTimeout(() => el.classList.remove("visible"), 1500);
}

// ── Bootstrap ─────────────────────────────────────────────────────────────

function init() {
  const root = document.getElementById("app");
  buildUI(root);

  // Carica valore salvato (se presente)
  const initial = Counter.load();
  updateDisplay(initial);

  // Stato sessione
  let sessionOps = 0;

  // Event listeners
  document.getElementById("btn-increment").addEventListener("click", () => {
    const v = Counter.increment();
    Counter.save();
    updateDisplay(v);
    updateSessionOps(++sessionOps);
    showSaved();
  });

  document.getElementById("btn-decrement").addEventListener("click", () => {
    const v = Counter.decrement();
    Counter.save();
    updateDisplay(v);
    updateSessionOps(++sessionOps);
    showSaved();
  });

  document.getElementById("btn-reset").addEventListener("click", () => {
    const v = Counter.reset();
    Counter.save();
    updateDisplay(v);
    sessionOps = 0;
    updateSessionOps(sessionOps);
    showSaved();
  });

  // Scorciatoie da tastiera
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp")   document.getElementById("btn-increment").click();
    if (e.key === "ArrowDown") document.getElementById("btn-decrement").click();
    if (e.key === "r" || e.key === "R") document.getElementById("btn-reset").click();
  });
}

document.addEventListener("DOMContentLoaded", init);
