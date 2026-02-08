// Loader
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  setTimeout(() => { loader.style.display = "none"; }, 2000);
});

// Cursor
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Gallery
let currentSlide = 0;
const slides = document.querySelector(".gallery-slider .slides");
const totalSlides = slides.children.length;
document.querySelector(".g-next").onclick = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
};
document.querySelector(".g-prev").onclick = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Before After
const baSlider = document.getElementById("baSlider");
const afterImg = document.querySelector(".after");
baSlider.addEventListener("input", () => {
  afterImg.style.width = baSlider.value + "%";
});

// Booking popup
const bookBtn = document.querySelector(".book-btn");
const popup = document.getElementById("bookingPopup");
const closePopup = document.querySelector(".close-popup");
bookBtn.onclick = () => popup.style.display = "flex";
closePopup.onclick = () => popup.style.display = "none";

// Sound
const sound = document.getElementById("clickSound");
document.querySelectorAll(".sound").forEach(btn => {
  btn.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
  });
});

// Stats counter
document.querySelectorAll(".count").forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const inc = target / 100;
    if (current < target) {
      counter.innerText = Math.ceil(current + inc);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Scroll reveal
const sections = document.querySelectorAll("section");
const reveal = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
};
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(60px)";
  sec.style.transition = "1s ease";
});
window.addEventListener("scroll", reveal);
reveal();

// BMI
function calculateBMI() {
  const h = document.getElementById("bmiHeight").value / 100;
  const w = document.getElementById("bmiWeight").value;
  if (!h || !w) return;
  const bmi = (w / (h * h)).toFixed(1);
  let status = "Normal";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi > 25) status = "Overweight";
  document.getElementById("bmiResult").innerText = `Your BMI: ${bmi} (${status})`;
}
