// 1. Splash Screen Timeout
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash');
        splash.style.opacity = '0';
        setTimeout(() => splash.style.display = 'none', 500);
    }, 2000);
});

// 2. Start Shopping Navigation
function startShopping() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
    
    // Show promo modal after entry
    setTimeout(() => {
        document.getElementById('promoModal').style.display = 'flex';
    }, 1500);
}

// 3. Page Switching Logic
function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    
    // Ensure shop page is visible if clicked
    if(pageId === 'shop-page') {
        document.getElementById('home-page').style.display = 'block'; 
        window.scrollTo(0, 800); // Scrolls down to products
    }
}

// 4. Modal Controls
function closeModal() {
    document.getElementById('promoModal').style.display = 'none';
}

// 5. Simple Cart Counter
let count = 0;
function addCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    alert("Added to your quote request!");
}
