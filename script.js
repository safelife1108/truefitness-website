// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Before After Slider
const slider = document.getElementById("slider");
const afterImg = document.getElementById("afterImg");

if(slider){
  slider.addEventListener("input", () => {
    afterImg.style.clipPath = `inset(0 ${100 - slider.value}% 0 0)`;
  });
}

// Animated Stats
const counters = document.querySelectorAll(".stat span");
const speed = 100;

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerText;
    const inc = Math.ceil(target / speed);

    if(count < target){
      counter.innerText = count + inc;
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
