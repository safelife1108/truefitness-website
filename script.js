// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  }, 1500);
});

// Progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1", {y:80, opacity:0, duration:1});
gsap.from(".hero-athlete", {x:200, opacity:0, duration:1.2});

gsap.utils.toArray(".section").forEach(sec => {
  gsap.from(sec, {
    scrollTrigger: {trigger: sec, start: "top 80%"},
    y:80,
    opacity:0,
    duration:1
  });
});

// 3D Tilt
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = (y - cy) / 20;
    const ry = (x - cx) / 20;
    card.style.transform = `rotateX(${-rx}deg) rotateY(${ry}deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
