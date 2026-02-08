// Loader
window.addEventListener("load",()=>{document.getElementById("loader").style.display="none"})

// Scroll progress
window.addEventListener("scroll",()=>{
  const h=document.documentElement;
  const sc=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
  document.getElementById("progress").style.width=sc+"%";
});

// Cursor
const c=document.querySelector(".cursor");
const ct=document.querySelector(".cursor-trail");
window.addEventListener("mousemove",e=>{
  c.style.left=e.clientX+"px"; c.style.top=e.clientY+"px";
  ct.style.left=e.clientX+"px"; ct.style.top=e.clientY+"px";
});

// Reveal on scroll
const reveals=document.querySelectorAll(".reveal");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("show"); });
},{threshold:.2});
reveals.forEach(r=>obs.observe(r));

// Tilt cards
document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left, y=e.clientY-r.top;
    const rx=(y/r.height-.5)*-10, ry=(x/r.width-.5)*10;
    card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="rotateX(0) rotateY(0)");
});

// Before After
const slider=document.getElementById("ba-slider");
const after=document.getElementById("ba-after");
let dragging=false;
slider.addEventListener("mousedown",()=>dragging=true);
window.addEventListener("mouseup",()=>dragging=false);
window.addEventListener("mousemove",e=>{
  if(!dragging) return;
  const box=slider.parentElement.getBoundingClientRect();
  let x=e.clientX-box.left;
  x=Math.max(0,Math.min(x,box.width));
  slider.style.left=x+"px";
  after.style.width=x+"px";
});

// Counters
document.querySelectorAll(".stat").forEach(el=>{
  let done=false;
  const io=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting && !done){
      done=true; let n=0; const t=+el.dataset.target;
      const i=setInterval(()=>{
        n+=Math.ceil(t/100);
        if(n>=t){n=t;clearInterval(i)}
        el.textContent=n;
      },30);
    }
  },{threshold:.6});
  io.observe(el);
});

// THREE.JS HERO
const canvas=document.getElementById("threebg");
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({canvas,alpha:true});
renderer.setSize(innerWidth,innerHeight);

const geo=new THREE.TorusKnotGeometry(1.6,0.5,140,20);
const mat=new THREE.MeshStandardMaterial({color:0x00ffd5,wireframe:true});
const mesh=new THREE.Mesh(geo,mat);
scene.add(mesh);

const light=new THREE.PointLight(0xffffff,1);
light.position.set(5,5,5);
scene.add(light);

camera.position.z=6;

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x+=0.002;
  mesh.rotation.y+=0.003;
  renderer.render(scene,camera);
}
animate();

window.addEventListener("resize",()=>{
  camera.aspect=innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
});

// PARTICLES
const pCanvas=document.getElementById("particles");
const ctx=pCanvas.getContext("2d");
function resizeP(){pCanvas.width=innerWidth;pCanvas.height=innerHeight}
resizeP();window.addEventListener("resize",resizeP);

let particles=Array.from({length:100},()=>({
  x:Math.random()*innerWidth,
  y:Math.random()*innerHeight,
  vx:(Math.random()-.5),
  vy:(Math.random()-.5)
}));

function drawParticles(){
  ctx.clearRect(0,0,pCanvas.width,pCanvas.height);
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>innerWidth) p.vx*=-1;
    if(p.y<0||p.y>innerHeight) p.vy*=-1;
    ctx.fillStyle="#00ffd5";
    ctx.fillRect(p.x,p.y,2,2);
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
