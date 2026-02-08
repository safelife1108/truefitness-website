gsap.registerPlugin(ScrollTrigger);

// LOADER
window.addEventListener("load", () => {
  gsap.to("#loader", { opacity: 0, duration: 1, delay: 1, onComplete: () => {
    document.getElementById("loader").style.display = "none";
  }});
});

// CURSOR
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// SOUND
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

document.querySelectorAll(".btn, .card").forEach(el => {
  el.addEventListener("mouseenter", () => hoverSound.play());
  el.addEventListener("click", () => clickSound.play());
});

// HERO ANIMATIONS
gsap.from(".hero-content h1", { y: 50, opacity: 0, duration: 1 });
gsap.from(".hero-content p", { y: 30, opacity: 0, delay: 0.3 });
gsap.from(".hero-arm", { x: 200, opacity: 0, duration: 1.5, ease: "power4.out" });

// CARDS ON SCROLL
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".cards",
    start: "top 80%"
  },
  y: 60,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});

// 3D TILT
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
