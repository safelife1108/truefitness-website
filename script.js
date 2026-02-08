// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Scroll Progress
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = (scrollTop / scrollHeight) * 100;
  document.getElementById("scrollProgress").style.width = percent + "%";
});

// WhatsApp
const msg = encodeURIComponent("Hi, I want to join True Fitness Club!");
const phone = "919999999999";
document.getElementById("whatsappBtn").href = `https://wa.me/${phone}?text=${msg}`;
document.getElementById("whatsappFloat").href = `https://wa.me/${phone}?text=${msg}`;

// BMI
function calculateBMI() {
  const h = document.getElementById("height").value / 100;
  const w = document.getElementById("weight").value;
  const bmi = (w / (h * h)).toFixed(2);
  document.getElementById("bmiResult").innerText = "Your BMI: " + bmi;
}

// Testimonials Auto Slide
let index = 0;
setInterval(() => {
  const items = document.querySelectorAll(".testimonial");
  items.forEach(i => i.classList.remove("active"));
  index = (index + 1) % items.length;
  items[index].classList.add("active");
}, 3000);

// 3D Tilt Effect
document.querySelectorAll(".tilt-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

