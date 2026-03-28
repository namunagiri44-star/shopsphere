// PAGE SWITCHER
function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    
    // Smooth scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
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