// typing
const words = ['a future doctor','a student (SSC 2026)','a farming enthusiast'];
let i = 0, j = 0, forward = true;
const el = document.getElementById('typing');
function type(){
  const w = words[i];
  if(!el) return;
  if(forward){ j++; if(j > w.length){ forward = false; setTimeout(type,900); return; } }
  else { j--; if(j === 0){ forward = true; i = (i+1) % words.length; } }
  el.textContent = w.slice(0,j);
  setTimeout(type,80);
}
type();

// download CV (text)
const dl = document.getElementById('downloadBtn');
if(dl){
  dl.addEventListener('click', ()=>{
    const cv = `Md. Samiul Bari Noyon
DOB: 20 May 2009
Address: Betua Village, Raiganj, Sirajganj, Bangladesh
Mobile: +880 01336517659
Blood Group: O+
Education: SSC 2026
Objective: Aspiring to become a Doctor`;
    const blob = new Blob([cv], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CV_Samiul_Bari_Noyon.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
}

// reveal on scroll
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); })
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// set year
const y = document.getElementById('year');
if(y) y.textContent = new Date().getFullYear();
