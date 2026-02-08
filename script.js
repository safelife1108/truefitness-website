// Cursor
const dot=document.querySelector(".cursor-dot");
const ring=document.querySelector(".cursor-ring");
window.addEventListener("mousemove",e=>{
  dot.style.left=e.clientX+"px"; dot.style.top=e.clientY+"px";
  ring.style.left=e.clientX+"px"; ring.style.top=e.clientY+"px";
});

// Tilt cards
document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left, y=e.clientY-r.top;
    const rx=(y-r.height/2)/18;
    const ry=(r.width/2-x)/18;
    card.style.transform=`perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="none");
});

// Hero parallax
const heroBg=document.querySelector(".hero-bg");
window.addEventListener("mousemove",e=>{
  const x=(window.innerWidth/2-e.clientX)/40;
  const y=(window.innerHeight/2-e.clientY)/40;
  heroBg.style.transform=`translate(${x}px,${y}px)`;
});

// Reveal
const reveals=document.querySelectorAll(".reveal");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.15});
reveals.forEach(r=>obs.observe(r));

// Stats counter
document.querySelectorAll(".stat").forEach(el=>{
  let done=false;
  const io=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting && !done){
      done=true;
      let n=0; const t=+el.dataset.target;
      const i=setInterval(()=>{
        n+=Math.ceil(t/100);
        if(n>=t){n=t;clearInterval(i)}
        el.textContent=n;
      },30);
    }
  },{threshold:.6});
  io.observe(el);
});

// Before/After sliders
document.querySelectorAll(".ba-wrap").forEach(wrap=>{
  const slider=wrap.querySelector(".ba-slider");
  const after=wrap.querySelector(".ba-after");
  let drag=false;
  slider.addEventListener("mousedown",()=>drag=true);
  window.addEventListener("mouseup",()=>drag=false);
  window.addEventListener("mousemove",e=>{
    if(!drag)return;
    const box=wrap.getBoundingClientRect();
    let x=e.clientX-box.left;
    x=Math.max(0,Math.min(x,box.width));
    slider.style.left=x+"px";
    after.style.width=x+"px";
  });
});
