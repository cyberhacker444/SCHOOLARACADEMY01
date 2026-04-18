const quotes = [
  "Empowering students to achieve greatness.",
  "Your future is built today.",
  "Discipline creates success.",
  "Learning never stops.",
  "Push beyond your limits."
];

const splash = document.getElementById("splash");
const landing = document.getElementById("landing");
const loader = document.getElementById("loader");
const app = document.getElementById("appContainer");
const btn = document.getElementById("startBtn");
const quote = document.getElementById("quote");
const barQuote = document.getElementById("barQuote");
const installBtn = document.getElementById("installBtn");

// Random quote function
function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Set quotes
quote.textContent = randomQuote();
barQuote.textContent = randomQuote();

// Change bottom bar quote every 5 seconds
setInterval(() => {
  barQuote.textContent = randomQuote();
}, 5000);

// Splash (only first time)
if (!localStorage.getItem("opened")) {
  setTimeout(() => {
    splash.style.display = "none";
    landing.style.display = "flex";
  }, 2000);
} else {
  splash.style.display = "none";
  landing.style.display = "flex";
  btn.textContent = "Continue Studying";
}

// Start button
btn.onclick = () => {
  localStorage.setItem("opened", "yes");

  landing.style.display = "none";
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    app.style.display = "block";
  }, 1200);
};

// Install prompt
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.onclick = () => {
  deferredPrompt.prompt();
  installBtn.style.display = "none";
};

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
} 
