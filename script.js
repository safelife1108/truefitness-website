// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1500);
});

// Gallery slider
const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200"
];
let index = 0;
const slide = document.getElementById("slide");

function nextSlide() {
  index = (index + 1) % images.length;
  slide.src = images[index];
}
function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  slide.src = images[index];
}

// Auto slide
setInterval(nextSlide, 4000);

// BMI
function calculateBMI() {
  const h = document.getElementById("height").value / 100;
  const w = document.getElementById("weight").value;
  if (!h || !w) {
    document.getElementById("bmiResult").innerText = "Please enter valid values.";
    return;
  }
  const bmi = (w / (h * h)).toFixed(2);
  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Overweight";
  else status = "Obese";
  document.getElementById("bmiResult").innerText = `Your BMI: ${bmi} (${status})`;
}
