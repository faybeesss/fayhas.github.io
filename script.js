const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);menuBtn.textContent=open?"×":"☰"});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuBtn.textContent="☰"}));

const phrases=["a tutor 📚","a cybersecurity learner 💻","a curious human ✨","always learning ♡"];
let pi=0,ci=0,del=false;const typed=document.getElementById("typed");
function type(){const p=phrases[pi];typed.textContent=p.slice(0,ci);if(!del&&ci<p.length){ci++;setTimeout(type,75)}else if(!del){del=true;setTimeout(type,1400)}else if(ci>0){ci--;setTimeout(type,35)}else{del=false;pi=(pi+1)%phrases.length;setTimeout(type,350)}} type();

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));

const layer=document.querySelector(".sparkle-layer");
document.addEventListener("pointermove",e=>{if(Math.random()>.84){const s=document.createElement("span");s.className="sparkle";s.textContent=Math.random()>.5?"♡":"✦";s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";s.style.setProperty("--dx",(Math.random()*50-25)+"px");layer.appendChild(s);setTimeout(()=>s.remove(),1800)}});
document.querySelectorAll(".btn,.social-row a,.skill-card,.logo").forEach(el=>el.addEventListener("click",e=>{for(let i=0;i<5;i++){const s=document.createElement("span");s.className="sparkle";s.textContent="♡";s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";s.style.setProperty("--dx",(Math.random()*90-45)+"px");layer.appendChild(s);setTimeout(()=>s.remove(),1800)}}));
document.getElementById("year").textContent=new Date().getFullYear();
