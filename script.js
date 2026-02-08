// ===== Smooth Scroll (Lenis) =====
const lenis = new Lenis({ duration: 1.1, smooth: true });
function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// ===== Preloader =====
window.addEventListener("load", ()=>{
  setTimeout(()=>{
    const p = document.getElementById("brand-preloader");
    if(p){ p.style.opacity="0"; setTimeout(()=>p.remove(), 600); }
  }, 1500);
});

// ===== Custom Cursor (physics) =====
const cursor = document.getElementById("cursor");
const blur = document.getElementById("cursor-blur");
let cx=0, cy=0, tx=0, ty=0;
document.addEventListener("mousemove", e=>{ tx=e.clientX; ty=e.clientY; });
(function animateCursor(){
  cx += (tx-cx)*0.15; cy += (ty-cy)*0.15;
  cursor.style.left=cx+"px"; cursor.style.top=cy+"px";
  blur.style.left=cx+"px"; blur.style.top=cy+"px";
  requestAnimationFrame(animateCursor);
})();

// ===== GSAP Scenes =====
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".section, .chapter").forEach(el=>{
  gsap.from(el, {
    scrollTrigger:{ trigger:el, start:"top 80%" },
    y:120, opacity:0, duration:1.1, ease:"power4.out"
  });
});

// ===== Magnetic Buttons =====
document.querySelectorAll(".btn").forEach(btn=>{
  btn.addEventListener("mousemove", e=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*0.25}px,${y*0.25}px)`;
  });
  btn.addEventListener("mouseleave", ()=>btn.style.transform="translate(0,0)");
});

// ===== 3D Tilt Cards =====
document.querySelectorAll(".tilt-card").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
    card.style.transform=`rotateX(${-y/12}deg) rotateY(${x/12}deg) translateZ(20px)`;
  });
  card.addEventListener("mouseleave", ()=>card.style.transform="rotateX(0) rotateY(0) translateZ(0)");
});

// ===== WebGL Liquid Neon Background =====
const canvas = document.getElementById("bg-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
renderer.setSize(innerWidth, innerHeight);
camera.position.z = 4;

// Plane grid (wave)
const geo = new THREE.PlaneGeometry(10, 6, 140, 140);
const mat = new THREE.MeshStandardMaterial({
  color: 0x00f6ff, wireframe:true, transparent:true, opacity:0.35
});
const plane = new THREE.Mesh(geo, mat);
scene.add(plane);

// Lights
const l1 = new THREE.PointLight(0x00f6ff, 2, 100); l1.position.set(5,5,5); scene.add(l1);
const l2 = new THREE.PointLight(0x7b5cff, 2, 100); l2.position.set(-5,-5,5); scene.add(l2);

// Animate waves
let t=0;
function animate(){
  requestAnimationFrame(animate);
  t+=0.01;
  const pos = plane.geometry.attributes.position;
  for(let i=0;i<pos.count;i++){
    const x = pos.getX(i), y = pos.getY(i);
    const z = Math.sin(x*2 + t)*0.25 + Math.cos(y*2 + t)*0.25;
    pos.setZ(i, z);
  }
  pos.needsUpdate = true;
  plane.rotation.z += 0.0006;
  renderer.render(scene, camera);
}
animate();

addEventListener("resize", ()=>{
  camera.aspect = innerWidth/innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ===== WhatsApp =====
const phone="919999999999"; // replace with real
const msg=encodeURIComponent("Hi, I want to join True Fitness Club!");
const w1=document.getElementById("whatsappBtn");
const w2=document.getElementById("whatsappFloat");
if(w1) w1.href=`https://wa.me/${phone}?text=${msg}`;
if(w2) w2.href=`https://wa.me/${phone}?text=${msg}`;
