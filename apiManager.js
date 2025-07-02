// API Configuration
const API_URL = 'http://localhost:3000/products';
let currentProductId = null;

// DOM Elements
const productList = document.getElementById('productList');
const productForm = document.getElementById('productForm');
const productIdInput = document.getElementById('productId');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const saveBtn = document.getElementById('saveBtn');
const updateBtn = document.getElementById('updateBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Event Listeners
document.addEventListener('DOMContentLoaded', fetchProducts);
productForm.addEventListener('submit', handleFormSubmit);
cancelBtn.addEventListener('click', resetForm);

/**
 * Fetches all products from the server and displays them
 */
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        alert('Failed to fetch products. Please check console for details.');
    }
}

/**
 * Displays products in the UI
 * @param {Array} products - Array of product objects
 */
function displayProducts(products) {
    productList.innerHTML = '';
    
    if (products.length === 0) {
        productList.innerHTML = '<p>No products found. Add some products to get started!</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.nombre || product.name}</h3>
            <p>Price: $${product.precio || product.price}</p>
            <div class="product-actions">
                <button class="edit-btn" data-id="${product.id}">Edit</button>
                <button class="delete-btn" data-id="${product.id}">Delete</button>
            </div>
        `;
        
        productList.appendChild(productCard);
    });
    
    // Add event listeners to edit and delete buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', handleEdit);
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', handleDelete);
    });
}

/**
 * Handles form submission for adding/updating products
 * @param {Event} e - Form submit event
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const productData = {
        nombre: productNameInput.value,
        precio: parseFloat(productPriceInput.value)
    };
    
    // Validate inputs
    if (!productData.nombre || isNaN(productData.precio)) {
        alert('Please fill in all fields with valid values');
        return;
    }
    
    try {
        if (currentProductId) {
            // Update existing product
            await updateProduct(currentProductId, productData);
        } else {
            // Add new product
            await addProduct(productData);
        }
        
        resetForm();
        await fetchProducts();
    } catch (error) {
        console.error('Error saving product:', error);
        alert('Failed to save product. Please check console for details.');
    }
}

/**
 * Adds a new product to the server
 * @param {Object} product - Product data to add
 */
async function addProduct(product) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

/**
 * Updates an existing product on the server
 * @param {number} id - Product ID to update
 * @param {Object} product - Updated product data
 */
async function updateProduct(id, product) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

/**
 * Handles editing a product
 * @param {Event} e - Click event
 */
function handleEdit(e) {
    const productId = e.target.getAttribute('data-id');
    currentProductId = productId;
    
    // Find the product card
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p').textContent.replace('Price: $', '');
    
    // Fill the form
    productNameInput.value = productName;
    productPriceInput.value = productPrice;
    
    // Update button states
    saveBtn.disabled = true;
    updateBtn.disabled = false;
    cancelBtn.disabled = false;
}

/**
 * Handles deleting a product
 * @param {Event} e - Click event
 */
async function handleDelete(e) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }
    
    const productId = e.target.getAttribute('data-id');
    
    try {
        await deleteProduct(productId);
        await fetchProducts();
    } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product. Please check console for details.');
    }
}

/**
 * Deletes a product from the server
 * @param {number} id - Product ID to delete
 */
async function deleteProduct(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}

/**
 * Resets the form to its initial state
 */
function resetForm() {
    productForm.reset();
    currentProductId = null;
    productIdInput.value = '';
    
    // Reset button states
    saveBtn.disabled = false;
    updateBtn.disabled = true;
    cancelBtn.disabled = true;
}