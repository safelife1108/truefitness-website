// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1500);
});

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// 3D PARALLAX HERO
const hero = document.querySelector(".hero-3d");
const arm = document.querySelector(".hero-arm img");
const text = document.querySelector(".hero-text");

hero.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  arm.style.transform = `
    translateX(${120 + x}px)
    translateY(${60 + y}px)
    translateZ(120px)
    rotateY(${-x}deg)
    rotateX(${y}deg)
  `;

  text.style.transform = `
    translateZ(40px)
    translateX(${x / 2}px)
    translateY(${y / 2}px)
  `;
});

hero.addEventListener("mouseleave", () => {
  arm.style.transform = "translateX(120px) translateY(60px) translateZ(120px)";
  text.style.transform = "translateZ(40px)";
});
