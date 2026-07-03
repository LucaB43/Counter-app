# 🔢 Counter App

Una semplice applicazione web che simula il comportamento di un counter (contatore), realizzata con **JavaScript puro** e manipolazione del DOM — niente framework, niente jQuery.

---

## 🚀 Demo live

👉 **[Prova l'applicazione qui](lucab43.github.io/Counter-app/)**

---

## ✨ Funzionalità

| Funzione | Descrizione |
|---|---|
| ➕ Incremento | Aumenta il valore del counter di 1 |
| ➖ Decremento | Diminuisce il valore del counter di 1 |
| ⟳ Reset | Riporta il counter a 0 |
| 💾 Persistenza | Il valore viene salvato in `localStorage` e recuperato al prossimo accesso |
| 🎨 Colore dinamico | Verde per valori positivi, rosso per negativi, grigio per zero |
| ⌨️ Scorciatoie da tastiera | `↑` incrementa, `↓` decrementa, `R` resetta |
| 📊 Contatore sessione | Mostra quante operazioni sono state eseguite nella sessione corrente |

---

## 🗂️ Struttura del progetto

```
counter-app/
├── index.html          # Shell HTML (struttura minima)
├── css/
│   └── style.css       # Stile — tema terminale monospace
└── js/
    ├── counter.js      # Logica del counter (stato, incremento, decremento, reset, localStorage)
    └── main.js         # Costruzione dinamica del DOM + event listeners
```

---

## 🛠️ Tecnologie

- **HTML5**
- **CSS3** (variabili CSS, animazioni, media query `prefers-reduced-motion`)
- **JavaScript ES6+** (IIFE module pattern, manipolazione DOM, `localStorage`)

Nessun framework, nessuna libreria esterna.

---

## 💻 Come eseguire in locale

```bash
git clone https://github.com/lucab43/counter-app.git
cd counter-app
# apri index.html nel browser, oppure usa un live server:
npx serve .
```

---

## 📐 Scelte tecniche

**Separazione delle responsabilità:**
- `counter.js` espone un modulo (`Counter`) che gestisce esclusivamente lo stato e la persistenza — nessun riferimento al DOM.
- `main.js` si occupa di costruire l'interfaccia dinamicamente e di collegare gli eventi al modulo `Counter`.

**Persistenza con `localStorage`:** il valore viene salvato ad ogni operazione, così da essere recuperato alla riapertura della pagina.

**Accessibilità:** tutti i pulsanti hanno attributi `aria-label`, il focus da tastiera è visivamente marcato, le animazioni rispettano `prefers-reduced-motion`.

---


---

## 👤 Autore

**Luca B.** — studente Full Stack Development & Agents AI @ [start2impact University](https://www.start2impact.it/)
