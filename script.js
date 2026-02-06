// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});

// Booking popup
function openBooking(){
  document.getElementById("bookingPopup").style.display="flex";
}
function closeBooking(){
  document.getElementById("bookingPopup").style.display="none";
}

// Auto WhatsApp message
function sendWhatsApp(){
  const name = document.getElementById("bookName").value;
  const phone = document.getElementById("bookPhone").value;
  const msg = `Hello, my name is ${name}. My phone is ${phone}. I want to join True Fitness Club.`;
  window.open("https://wa.me/919000000000?text=" + encodeURIComponent(msg), "_blank");
}

// Before After slider drag
const slider = document.querySelector(".ba-slider");
if(slider){
  const resize = slider.querySelector(".resize");
  const handle = slider.querySelector(".handle");

  let dragging = false;

  handle.addEventListener("mousedown", () => dragging = true);
  window.addEventListener("mouseup", () => dragging = false);

  window.addEventListener("mousemove", (e) => {
    if(!dragging) return;
    const rect = slider.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;
    resize.style.width = percent + "%";
    handle.style.left = percent + "%";
  });
}
