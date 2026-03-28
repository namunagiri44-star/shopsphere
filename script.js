// =======================
// 1. Splash Screen Logic
// =======================
window.addEventListener('load', () => {
    setTimeout(() => {
        // Add fade-zoom-out animation to splash image
        const splashImg = document.querySelector('#splash img');
        splashImg.classList.add('animate-fade-zoom-out');

        // Hide splash after animation
        setTimeout(() => {
            document.getElementById('splash').style.display = 'none';
        }, 500);
    }, 2000); // Splash visible for 2 seconds
});

// =======================
// 2. Start Shopping (Entry Button)
// =======================
function startShopping() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';

    // Trigger the Promo Modal 1.5 seconds after entry
    setTimeout(() => {
        document.getElementById('promoModal').style.display = 'flex';
    }, 1500);
}

// =======================
// 3. Page Navigation
// =======================
function openPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');

    // Show target page
    document.getElementById(pageId).style.display = 'block';
}

// =======================
// 4. Modal Functions
// =======================
function closeModal() {
    document.getElementById('promoModal').style.display = 'none';
}

// =======================
// 5. Cart Management
// =======================
let cartCount = 0;

function addCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Item added to your quote request!");
}
