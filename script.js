// =======================
// ShopSphere - Enhanced JavaScript
// =======================

class ShopSphere {
    constructor() {
        this.cartCount = 0;
        this.cartItems = [];
        this.init();
    }

    // =======================
    // 1. Initialization & Splash
    // =======================
    init() {
        this.handleSplash();
        this.handlePromoModal();
        this.updateCartUI();
    }

    handleSplash() {
        window.addEventListener('load', () => {
            const splash = document.getElementById('splash');
            const startScreen = document.getElementById('start-screen');
            
            setTimeout(() => {
                // Smooth splash exit
                splash.style.opacity = '0';
                splash.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    splash.style.display = 'none';
                    startScreen.style.opacity = '1';
                    startScreen.style.transform = 'scale(1)';
                }, 600);
            }, 2500);
        });
    }

    handlePromoModal() {
        // Auto-show promo after entering shop
        document.addEventListener('startShopping', () => {
            setTimeout(() => this.showModal(), 1200);
        });
    }

    // =======================
    // 2. Navigation System
    // =======================
    static navigateTo(pageId) {
        // Add smooth transitions
        document.body.classList.add('page-transition');
        
        setTimeout(() => {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.style.display = 'none';
                page.classList.remove('active');
            });

            // Show target page with animation
            const targetPage = document.getElementById(pageId);
            targetPage.style.display = 'block';
            setTimeout(() => {
                targetPage.classList.add('active');
                document.body.classList.remove('page-transition');
            }, 50);
        }, 300);
    }

    // =======================
    // 3. Enhanced Cart System
    // =======================
    addToCart(productName = 'Item') {
        this.cartCount++;
        this.cartItems.push({
            id: Date.now(),
            name: productName,
            timestamp: new Date().toLocaleTimeString()
        });

        this.updateCartUI();
        this.showNotification(`${productName} added to quote!`);
        
        // Optional: Save to localStorage
        localStorage.setItem('shopsphere_cart', JSON.stringify(this.cartItems));
    }

    updateCartUI() {
        document.getElementById('cart-count').textContent = this.cartCount;
        document.getElementById('cart-count').style.transform = 'scale(1.2)';
        setTimeout(() => {
            document.getElementById('cart-count').style.transform = 'scale(1)';
        }, 200);
    }

    // =======================
    // 4. UI Enhancements
    // =======================
    showModal() {
        const modal = document.getElementById('promoModal');
        modal.style.display = 'flex';
        modal.classList.add('show');
    }

    closeModal() {
        const modal = document.getElementById('promoModal');
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }

    showNotification(message, duration = 3000) {
        // Create floating notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <span>🛒 ${message}</span>
            <button onclick="this.parentElement.remove()">×</button>
        `;
        notification.style.cssText = `
            position: fixed; top: 20px; right: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; padding: 15px 20px; border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000; transform: translateX(400px);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        `;
        
        document.body.appendChild(notification);
        requestAnimationFrame(() => notification.style.transform = 'translateX(0)');
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 400);
        }, duration);
    }

    // =======================
    // 5. Event Listeners
    // =======================
    bindEvents() {
        // Enhanced start shopping
        window.startShopping = () => {
            document.getElementById('start-screen').style.display = 'none';
            document.dispatchEvent(new Event('startShopping'));
            ShopSphere.navigateTo('home-page');
        };

        // Page navigation
        window.openPage = (pageId) => ShopSphere.navigateTo(pageId);

        // Cart functionality
        window.addCart = () => {
            const product = event.target.closest('.product');
            const productName = product?.querySelector('p')?.textContent || 'Product';
            shop.addToCart(productName);
        };

        // Modal
        window.closeModal = () => shop.closeModal();
    }
}

// =======================
// Initialize App
// =======================
const shop = new ShopSphere();
shop.bindEvents();

// =======================
// Bonus: Cart View Toggle
// =======================
window.toggleCartView = () => {
    const cartCount = shop.cartCount;
    if (cartCount > 0) {
        shop.showNotification(`📋 ${cartCount} items in quote. Ready to checkout?`);
        console.table(shop.cartItems); // Dev tool
    }
};
