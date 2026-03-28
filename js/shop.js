// Display cart items
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to your cart!</p>
                <a href="products.html" class="btn-primary">Browse Products</a>
            </div>
        `;
        updateCartSummary();
        return;
    }
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn">+</button>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-item">Remove</button>
        </div>
    `).join('');
    
    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 10) : 0;
    const total = subtotal + tax + shipping;
    
    const subtotalElem = document.getElementById('subtotal');
    const taxElem = document.getElementById('tax');
    const shippingElem = document.getElementById('shipping');
    const totalElem = document.getElementById('total');
    
    if (subtotalElem) subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
    if (taxElem) taxElem.textContent = `$${tax.toFixed(2)}`;
    if (shippingElem) shippingElem.textContent = `$${shipping.toFixed(2)}`;
    if (totalElem) totalElem.textContent = `$${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            displayCart();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
    updateCartCount();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your purchase! Your order has been placed.');
    cart = [];
    saveCart();
    displayCart();
    updateCartCount();
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
});

// Make functions global
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
