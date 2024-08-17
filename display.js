document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productContainer');

    // Fetch products from localStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];

    if (products.length === 0) {
        productContainer.innerHTML = "<p>No products available. Please add products from the Manage Products page.</p>";
    } else {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';

            productCard.innerHTML = `<img src="${product.imageUrl}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>`
                
            ;

            productContainer.appendChild(productCard);
        });
    }
});