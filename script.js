document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `  <img src="${product.image}" alt="Product Image">
            <h3>${product.title}</h3>
            <p>${product.description}</p>`
          
        ;

        productGrid.appendChild(productCard);
    });
});