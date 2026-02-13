// LOADER
window.addEventListener("load",()=>{
  gsap.to("#loader",{opacity:0,duration:1,delay:1,onComplete:()=>document.getElementById("loader").style.display="none"});
});

// CURSOR
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

// SOUND
const hoverSound=document.getElementById("hoverSound");
const clickSound=document.getElementById("clickSound");
document.querySelectorAll("button,a").forEach(el=>{
  el.addEventListener("mouseenter",()=>hoverSound.play());
  el.addEventListener("click",()=>clickSound.play());
});

// HERO PARALLAX
const hero=document.querySelector(".hero-fake3d");
const fakeArm=document.querySelector(".fake-arm");
const heroText=document.querySelector(".hero-content");
hero.addEventListener("mousemove",(e)=>{
  const x=(window.innerWidth/2-e.clientX)/20;
  const y=(window.innerHeight/2-e.clientY)/20;
  fakeArm.style.transform=`translateZ(120px) translateX(${x}px) translateY(${y}px) rotateY(${-x}deg) rotateX(${y}deg)`;
  heroText.style.transform=`translateZ(40px) translateX(${x/2}px) translateY(${y/2}px)`;
});
hero.addEventListener("mouseleave",()=>{
  fakeArm.style.transform="translateZ(120px)";
  heroText.style.transform="translateZ(40px)";
});

// GSAP SCROLL
gsap.utils.toArray("section").forEach(sec=>{
  gsap.from(sec,{opacity:0,y:50,scrollTrigger:{trigger:sec,start:"top 80%"},duration:1});
});

// BMI
function calculateBMI(){
  const h=document.getElementById("height").value/100;
  const w=document.getElementById("weight").value;
  const bmi=(w/(h*h)).toFixed(1);
  let status="Normal";
  if(bmi<18.5)status="Underweight";
  else if(bmi>25)status="Overweight";
  document.getElementById("bmiResult").innerText="BMI: "+bmi+" ("+status+")";
}

// BOOKING
const modal=document.getElementById("bookingModal");
document.getElementById("openBooking").onclick=()=>modal.style.display="flex";
document.getElementById("closeModal").onclick=()=>modal.style.display="none";

// BEFORE/AFTER SLIDER
const container=document.querySelector(".compare-container");
const resize=document.querySelector(".compare-resize");
const handle=document.querySelector(".compare-handle");
let dragging=false;
handle.addEventListener("mousedown",()=>dragging=true);
window.addEventListener("mouseup",()=>dragging=false);
window.addEventListener("mousemove",(e)=>{
  if(!dragging)return;
  const rect=container.getBoundingClientRect();
  let x=e.clientX-rect.left;
  x=Math.max(0,Math.min(x,rect.width));
  resize.style.width=x+"px";
  handle.style.left=x+"px";
});
