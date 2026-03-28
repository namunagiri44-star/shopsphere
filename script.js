// ----- SPLASH -----
const splash = document.getElementById('splash');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links a');
const navMenu = document.getElementById('navLinks');
let cartCount = 0;

window.addEventListener('load', () => {
    setTimeout(() => {
        splash.style.opacity = 0;
        setTimeout(() => {
            splash.style.display = 'none';
            openPage('home-page');
        }, 800);
    }, 2000);
});

// ----- NAVIGATION -----
function openPage(pageId){
    pages.forEach(p=>p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// ----- MOBILE MENU -----
function toggleMenu(){
    navMenu.classList.toggle('show');
}

// ----- CART -----
function addCart(){
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

// ----- CAROUSEL -----
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index){
    slides.forEach(s=>s.style.display='none');
    slides[index].style.display='block';
}

function moveSlide(step){
    currentSlide += step;
    if(currentSlide >= slides.length) currentSlide = 0;
    if(currentSlide < 0) currentSlide = slides.length-1;
    showSlide(currentSlide);
}

if(slides.length>0){
    showSlide(0);
    setInterval(()=>moveSlide(1),5000);
}
