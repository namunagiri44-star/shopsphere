// PAGE SWITCHER
function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    
    // Smooth scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// MENU TOGGLE FOR MOBILE
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// CAROUSEL LOGIC
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const slideTrack = document.getElementById('carouselSlide');

function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-Slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

// CART LOGIC
let count = 0;
function addCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
}
// ======= SPLASH SCREEN =======
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const homePage = document.getElementById('home-page');

    setTimeout(() => {
        splash.style.opacity = 0;
        splash.style.pointerEvents = 'none';
        splash.style.display = 'none';  // <-- hide it completely
        homePage.classList.add('active'); // show home page
    }, 2000);
});

// ======= PAGE NAVIGATION =======
function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// ======= MENU TOGGLE =======
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// ======= CART FUNCTIONALITY =======
let cartCount = 0;
function addCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

// ======= CAROUSEL =======
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
}

// Initialize carousel
showSlide(currentSlide);

// Optional: automatic slide
setInterval(() => moveSlide(1), 5000);
