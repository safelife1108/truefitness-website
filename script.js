// Scroll progress
window.addEventListener("scroll", () => {
  const st = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress").style.width = (st / h) * 100 + "%";
});

// WhatsApp
function bookWhatsApp() {
  const msg = encodeURIComponent("Hi! I want to join True Fitness Club. Please send details.");
  window.open("https://wa.me/919892857707?text=" + msg, "_blank");
}

// BMI
function calcBMI() {
  let h = document.getElementById("height").value / 100;
  let w = document.getElementById("weight").value;
  if (!h || !w) {
    document.getElementById("bmiResult").innerText = "Enter height and weight";
    return;
  }
  let bmi = (w / (h * h)).toFixed(2);
  document.getElementById("bmiResult").innerText = "Your BMI is " + bmi;
}
