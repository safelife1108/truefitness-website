// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  const bar = document.getElementById("scrollProgress");
  if (bar) {
    bar.style.width = scrolled + "%";
  }
});

// WhatsApp Booking Function
function bookWhatsApp() {
  const msg = encodeURIComponent("Hi! I want to join True Fitness Club. Please send me the details.");
  const phone = "911234567890"; // change later to real number
  window.open("https://wa.me/" + phone + "?text=" + msg, "_blank");
}

// Simple hero text reveal on load
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-left");
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = "translateY(20px)";
    setTimeout(() => {
      hero.style.transition = "all 0.8s ease";
      hero.style.opacity = 1;
      hero.style.transform = "translateY(0)";
    }, 200);
  }
});
