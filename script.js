// Sample products data
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 99.99,
        category: "electronics",
        icon: "🎧",
        featured: true
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        price: 199.99,
        category: "electronics",
        icon: "⌚",
        featured: true
    },
    {
        id: 3,
        name: "Classic Denim Jacket",
        price: 79.99,
        category: "clothing",
        icon: "👕",
        featured: true
    },
    {
        id: 4,
        name: "Programming Book - JavaScript Guide",
        price: 39.99,
        category: "books",
        icon: "📚",
        featured: true
    },
    {
        id: 5,
        name: "Wireless Mouse",
        price: 29.99,
        category: "electronics",
        icon: "🖱️",
        featured: false
    },
    {
        id: 6,
        name: "Running Shoes",
        price: 89.99,
        category: "clothing",
        icon: "👟",
        featured: false
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    alert(`${product.name} added to cart!`);
}

// Display featured products
function displayFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        const featuredProducts = products.filter(p => p.featured);
        featuredContainer.innerHTML = featuredProducts.map(product => `
            <div class="product-card">
                <div class="product-image">${product.icon}</div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})" class="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    displayFeaturedProducts();
});

// Make functions global
window.addToCart = addToCart;
