function openBooking(){document.getElementById("bookingModal").style.display="flex";}
function closeBooking(){document.getElementById("bookingModal").style.display="none";}

function sendWhatsApp(){
  window.open("https://wa.me/919000000000?text=Hello%20I%20want%20to%20join%20True%20Fitness%20Club","_blank");
}

function calcBMI(){
  let w=document.getElementById("weight").value;
  let h=document.getElementById("height").value/100;
  let bmi=(w/(h*h)).toFixed(2);
  document.getElementById("bmiResult").innerText="Your BMI: "+bmi;
}
