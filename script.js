// 1. Splash Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash');
        splash.style.opacity = '0';
        setTimeout(() => splash.style.display = 'none', 500);
    }, 2000);
});

// 2. Start Shopping
function startShopping() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';

    setTimeout(() => {
        document.getElementById('promoModal').style.display = 'flex';
    }, 1500);
}

// 3. Page Navigation
function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// 4. Modal
function closeModal() {
    document.getElementById('promoModal').style.display = 'none';
}

// 5. Cart
let cartCount = 0;
function addCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Item added to your quote request!");
}
