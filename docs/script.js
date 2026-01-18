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

/* ===============================
   TEXTO TRICOLOR CON CONTRASTE
================================ */

/* TITULOS GRANDES */
.encabezado h1,
.titulo-seccion {
  background: linear-gradient(
    90deg,
    var(--rojo),
    var(--amarillo),
    var(--azul)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  text-shadow: 0 3px 10px rgba(0,0,0,0.25);
}

/* SUBTITULOS */
.encabezado h2,
.mensaje-emocional h3 {
  color: var(--azul);
  font-weight: 700;
}

/* PARRAFOS */
.encabezado p,
.mensaje-emocional p {
  color: #1f2937;
  font-weight: 500;
}

/* CAJAS DE TEXTO PARA CONTRASTE */
.encabezado p,
#mensaje,
.mensaje-emocional {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  padding: 12px 18px;
  border-radius: 14px;
  display: inline-block;
  margin: 10px auto;
}

/* TEXTO MENSAJE ROTATIVO */
#mensaje {
  font-weight: 700;
  background: linear-gradient(
    90deg,
    var(--azul),
    var(--rojo),
    var(--amarillo)
  );
  color: white;
}

/* TITULOS DE TARJETA */
.card .nombre {
  color: var(--azul);
  font-weight: 700;
}

/* PRECIO RESALTADO */
.card .precio {
  background: linear-gradient(
    90deg,
    var(--rojo),
    var(--amarillo)
  );
  color: white;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 12px;
}
