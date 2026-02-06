function openBooking() {
  document.getElementById("bookingPopup").style.display = "flex";
}
function closeBooking() {
  document.getElementById("bookingPopup").style.display = "none";
}

function calcBMI() {
  let h = document.getElementById("height").value / 100;
  let w = document.getElementById("weight").value;
  let bmi = (w / (h*h)).toFixed(2);
  document.getElementById("bmiResult").innerText = "Your BMI: " + bmi;
}
