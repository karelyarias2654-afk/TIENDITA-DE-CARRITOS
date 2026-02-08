/* =============================== */
/* INTERSECTION OBSERVER GENERAL */
/* =============================== */

const elementos = document.querySelectorAll('.scroll, .anim-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

if (entry.target.classList.contains('anim-card')) {
  entry.target.style.transitionDelay = '0.15s'; // mismo tiempo para todos 💖
}

      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));

/* =============================== */
/* MENSAJES ROTATIVOS */
/* =============================== */

const mensajes = [
  "🚗 Carritos de excelente calidad",
  "🎁 Ideales para regalo",
  "✨ Modelos únicos",
  "📲 Pregunta disponibilidad"
];

let indice = 0;

function saludar() {
  const texto = document.getElementById("mensaje");
  texto.innerText = mensajes[indice];
  indice = (indice + 1) % mensajes.length;
}

/* =============================== */
/* MODO OSCURO */
/* =============================== */
function modoOscuro() {
  document.body.classList.toggle("dark");
}

/* =============================== */
/* COLOR MÁGICO */
/* =============================== */
function cambiarColor() {
  document.querySelector(".contenedor")
    .classList.toggle("color-magico");
}

/* =============================== */
/* AUDIO MOTOR */
/* =============================== */
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioMotor");

  document.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });
});

