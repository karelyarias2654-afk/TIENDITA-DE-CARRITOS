/* ===============================
   INTERSECTION OBSERVER GENERAL
=============================== */

const elementos = document.querySelectorAll(".scroll, .anim-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {

        if (entry.target.classList.contains("anim-card")) {
          entry.target.style.transitionDelay = `${index * 0.15}s`;
        }

        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

elementos.forEach((el) => observer.observe(el));

/* ===============================
   MENSAJES ROTATIVOS
=============================== */

const mensajes = [
  "🚗 Carritos de excelente calidad",
  "🎁 Ideales para regalo",
  "✨ Modelos únicos",
  "📲 Pregunta disponibilidad",
];

let indice = 0;

function saludar() {
  const texto = document.getElementById("mensaje");
  if (!texto) return;

  texto.textContent = mensajes[indice];
  indice = (indice + 1) % mensajes.length;
}

/* ===============================
   MODO OSCURO
=============================== */

function modoOscuro() {
  document.body.classList.toggle("dark");
}

/* ===============================
   COLOR MÁGICO
=============================== */

function cambiarColor() {
  const contenedor = document.querySelector(".contenedor");
  if (!contenedor) return;

  contenedor.classList.toggle("color-magico");
}

/* ===============================
   AUDIO MOTOR
=============================== */

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioMotor");
  if (!audio) return;

  document.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  });
});
