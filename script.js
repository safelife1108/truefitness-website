// Scroll animation
const cards = document.querySelectorAll(".card, .price-card, .review");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});

// Booking Modal
function openBooking() {
  document.getElementById("bookingModal").style.display = "flex";
}
function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}
