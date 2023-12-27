// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    return card;
}

// Function to fetch products from a public API
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
}

// Function to render products
async function renderProducts() {
    const products = await fetchProducts();
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
    });
}

// Function to simulate adding a product to the cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart! (This is a simulation)`);
}

// Call renderProducts function to fetch and render products
renderProducts();
