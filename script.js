// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => loader.classList.add("hide"), 800);
});

// Scroll progress
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const sc = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById("progress").style.width = sc + "%";
});

// Custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// 3D parallax hero
const heroMan = document.querySelector(".hero-man");
const heroDumbbell = document.querySelector(".hero-dumbbell");

document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;
  if(heroMan) heroMan.style.transform = `translate(${x}px, ${y}px)`;
  if(heroDumbbell) heroDumbbell.style.transform = `translate(${x*1.5}px, ${y*1.5}px)`;
});

// 3D tilt cards
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const dx = (x - r.width/2) / 20;
    const dy = (y - r.height/2) / 20;
    card.style.transform = `rotateY(${dx}deg) rotateX(${-dy}deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0) scale(1)";
  });
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: 0.15 });
reveals.forEach(r => obs.observe(r));
