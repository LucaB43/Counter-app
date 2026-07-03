/**
 * counter.js
 * Gestisce tutta la logica del counter: stato, incremento, decremento e reset.
 */

const Counter = (() => {
  // ── Stato interno ────────────────────────────────────────────────────────
  let value = 0;

  // ── Getter ───────────────────────────────────────────────────────────────
  const getValue = () => value;

  // ── Operazioni ──────────────────────────────────────────────────────────
  const increment = () => {
    value += 1;
    return value;
  };

  const decrement = () => {
    value -= 1;
    return value;
  };

  const reset = () => {
    value = 0;
    return value;
  };

  // ── Persistenza (localStorage) ───────────────────────────────────────────
  const save = () => {
    localStorage.setItem("counter_value", value);
  };

  const load = () => {
    const stored = localStorage.getItem("counter_value");
    if (stored !== null) {
      value = parseInt(stored, 10);
    }
    return value;
  };

  return { getValue, increment, decrement, reset, save, load };
})();
