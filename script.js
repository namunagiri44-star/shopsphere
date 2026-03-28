// 1. Splash Screen Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash');
        splash.style.opacity = '0';
        setTimeout(() => splash.style.display = 'none', 500);
    }, 2000);
});

// 2. Start Shopping (Entry Button)
function startShopping() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
    
    // Trigger the Red & White Modal 1.5 seconds after entry
    setTimeout(() => {
        document.getElementById('promoModal').style.display = 'flex';
    }, 1500);
}

// 3. Page Navigation
function openPage(pageId) {
    // Hide all main containers
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    // Show the targeted page
    document.getElementById(pageId).style.display = 'block';
    
    // If navigating to Inventory, ensure home-page structure is hidden/shown correctly
    if(pageId === 'shop-page') {
        document.getElementById('home-page').style.display = 'block';
        window.scrollTo({ top: 800, behavior: 'smooth' });
    }
}

// 4. Modal Functions
function closeModal() {
    document.getElementById('promoModal').style.display = 'none';
}

// 5. Cart Management
let cartCount = 0;
function addCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Industrial item added to your quote request!");
}
