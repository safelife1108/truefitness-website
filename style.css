// Scroll progress
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

// WhatsApp booking
function bookWhatsApp() {
  const msg = encodeURIComponent(
    "Hi! I want to join True Fitness Club. Please send membership details."
  );
  window.open("https://wa.me/919892857707?text=" + msg, "_blank");
}

// Before/After slider
const slider = document.getElementById("baSlider");
const afterImg = document.getElementById("afterImg");

if (slider) {
  slider.addEventListener("input", function () {
    afterImg.style.clipPath = `inset(0 ${100 - this.value}% 0 0)`;
  });
}

// BMI Calculator
function calcBMI() {
  let height = document.getElementById("height").value / 100;
  let weight = document.getElementById("weight").value;
  if (!height || !weight) {
    document.getElementById("bmiResult").innerText = "Please enter both values.";
    return;
  }
  let bmi = (weight / (height * height)).toFixed(2);
  document.getElementById("bmiResult").innerText = "Your BMI is " + bmi;
}
