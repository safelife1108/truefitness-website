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

// Gallery slider
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

// Before After slider
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
