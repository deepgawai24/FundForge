/* =====================================================
   FundForge V3
   script.js
===================================================== */

// =========================
// Smooth Scroll Navigation
// =========================

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}

});

});


// =========================
// Copy Contract Address
// =========================

const copyButton=document.getElementById("copyContract");

if(copyButton){

copyButton.addEventListener("click",()=>{

const contractAddress="0x005923c69c9b7a33bd2a0964e5436728d5e5cd64";

navigator.clipboard.writeText(contractAddress);

copyButton.innerHTML="✅ Copied";

setTimeout(()=>{

copyButton.innerHTML="Copy Contract";

},2000);

});

}


// =========================
// Sticky Header Shadow
// =========================

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});


// =========================
// Active Navigation
// =========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =========================
// Scroll Reveal Animation
// =========================

const revealElements=document.querySelectorAll(
".feature-card,.token-card,.allocation-card,.roadmap-card,.faq-item,.status-card,.stat-card,.vision-card"
);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.2
});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all .6s ease";

observer.observe(el);

});

// =========================
// Back To Top Button
// =========================

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="⬆️";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#D4AF37";
topBtn.style.color="#000";
topBtn.style.fontSize="20px";
topBtn.style.fontWeight="bold";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =========================
// Console Message
// =========================

console.log("🚀 FundForge (FFGX) Website Loaded Successfully");
