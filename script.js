gsap.registerPlugin(ScrollTrigger);

// Loader animation
gsap.to(".loader-line", {
  width: "200px",
  duration: 1.5,
  repeat: 1,
  yoyo: true,
  onComplete: () => {
    gsap.to("#loader", {
      opacity: 0,
      duration: 0.8,
      onComplete: () => document.getElementById("loader").style.display = "none"
    });
  }
});

// Progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});

// Navbar
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// Parallax
document.querySelectorAll(".parallax").forEach(el => {
  const speed = el.getAttribute("data-speed");
  window.addEventListener("scroll", () => {
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

// Scroll reveal
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});

// Tilt cards
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = (y - r.height / 2) / 15;
    const ry = (x - r.width / 2) / 15;
    card.style.transform = `rotateX(${-rx}deg) rotateY(${ry}deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

// Before After slider
const slider = document.getElementById("slider");
const afterWrap = document.querySelector(".after-wrapper");
slider.addEventListener("input", () => {
  afterWrap.style.width = slider.value + "%";
});

// Cursor
const cursor = document.getElementById("cursor");
window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Sound
const sound = document.getElementById("clickSound");
document.querySelectorAll(".sound").forEach(btn => {
  btn.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
  });
});
