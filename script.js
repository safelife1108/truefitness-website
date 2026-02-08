// ===== THREE.JS SHADER WORLD =====
const canvas = document.getElementById("bg3d");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

let targetZ = 30;
camera.position.z = 30;

// Plane with shader
const geometry = new THREE.PlaneGeometry(100, 100, 200, 200);

const uniforms = {
  uTime: { value: 0 },
  uMouse: { value: new THREE.Vector2(0, 0) },
  uScroll: { value: 0 }
};

const material = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 pos = position;
      float dist = distance(uv, uMouse);
      pos.z += sin((pos.x + uTime) * 0.3) * 1.5;
      pos.z += cos((pos.y + uTime) * 0.3) * 1.5;
      pos.z += (1.0 - dist) * 10.0;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      float glow = sin(vUv.x * 10.0 + uTime) * 0.5 + 0.5;
      vec3 color1 = vec3(0.31, 0.82, 0.77);
      vec3 color2 = vec3(1.0, 0.62, 0.26);
      vec3 color = mix(color1, color2, glow);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
  wireframe: true
});

const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -Math.PI / 2.2;
scene.add(plane);

// Mouse
window.addEventListener("mousemove", (e) => {
  uniforms.uMouse.value.x = e.clientX / innerWidth;
  uniforms.uMouse.value.y = 1.0 - e.clientY / innerHeight;
});

// Scroll = camera rail
window.addEventListener("scroll", () => {
  targetZ = 30 + window.scrollY * 0.01;
});

// Animate
function animate() {
  requestAnimationFrame(animate);
  uniforms.uTime.value += 0.02;
  camera.position.z += (targetZ - camera.position.z) * 0.05;
  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ===== UI EFFECTS =====

// Dumbbell cursor
const dumbbell = document.querySelector(".dumbbell-cursor");
let mx = innerWidth/2, my = innerHeight/2, cx = mx, cy = my;
window.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });

function animateCursor(){
  cx += (mx-cx)*0.2;
  cy += (my-cy)*0.2;
  const dx = mx-cx, dy = my-cy;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  dumbbell.style.left = cx+"px";
  dumbbell.style.top = cy+"px";
  dumbbell.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Tilt cards
document.querySelectorAll(".tilt").forEach(card=>{
  let rx=0, ry=0;
  card.addEventListener("mousemove", e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left, y=e.clientY-r.top;
    ry=(x-r.width/2)/10;
    rx=-(y-r.height/2)/10;
  });
  function loop(){
    card.style.transform=`perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
    requestAnimationFrame(loop);
  }
  loop();
  card.addEventListener("mouseleave", ()=>{rx=0; ry=0;});
});

// Reveal
const reveals=document.querySelectorAll(".reveal");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show","glitch-in");
    }
  });
},{threshold:.15});
reveals.forEach(r=>obs.observe(r));

// Stats
document.querySelectorAll(".stat").forEach(el=>{
  let done=false;
  const io=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting && !done){
      done=true;
      let n=0,t=+el.dataset.target;
      const i=setInterval(()=>{
        n+=Math.ceil(t/80);
        if(n>=t){n=t;clearInterval(i);}
        el.textContent=n;
      },25);
    }
  },{threshold:.6});
  io.observe(el);
});
