const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const slider = document.getElementById("slider");
const after = document.querySelector(".after");

slider.addEventListener("input", () => {
  after.style.width = slider.value + "%";
});

const sound = document.getElementById("clickSound");
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
  });
});

window.addEventListener("scroll", () => {
  const heroImg = document.querySelector(".hero-foreground img");
  heroImg.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});
