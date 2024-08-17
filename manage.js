document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const checkPasswordBtn = document.getElementById('checkPassword');
    const manageProductsSection = document.getElementById('manageProducts');
    const addProductForm = document.getElementById('addProductForm');
    const removeProductBtn = document.getElementById('removeProduct');
    const productSelect = document.getElementById('productSelect');
    const messageElement = document.getElementById('message');
    const correctPassword = "2345";

    let products = JSON.parse(localStorage.getItem('products')) || [];

    function loadProducts() {
        productSelect.innerHTML = "";
        products.forEach((product, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = product.title;
            productSelect.appendChild(option);
        });
    }

    // Load products initially
    loadProducts();

    // Handle password check
    checkPasswordBtn.addEventListener('click', () => {
        if (passwordInput.value === correctPassword) {
            manageProductsSection.style.display = 'block';
            messageElement.textContent = '';
        } else {
            messageElement.textContent = 'Incorrect password!';
            manageProductsSection.style.display = 'none';
        }
    });

    // Handle product addition
    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newProduct = {
            title: document.getElementById('productTitle').value,
            description: document.getElementById('productDescription').value,
            imageUrl: document.getElementById('productImage').value
        };

        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();

        // Clear form fields
        addProductForm.reset();
        messageElement.textContent = 'Product added successfully!';
    });

    // Handle product removal
    removeProductBtn.addEventListener('click', () => {
        const selectedIndex = productSelect.value;

        if (selectedIndex !== "") {
            products.splice(selectedIndex, 1);
            localStorage.setItem('products', JSON.stringify(products));
            loadProducts();
            messageElement.textContent = 'Product removed successfully!';
        } else {
            messageElement.textContent = 'Please select a product to remove.';
        }
    });
});