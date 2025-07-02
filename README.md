# Product Manager API - CRUD Operations

![image](https://github.com/user-attachments/assets/4fe8b55d-f21b-45cb-be0e-7faad6e0fd89)

## Project Description
A web application that demonstrates CRUD (Create, Read, Update, Delete) operations using JavaScript Fetch API with a JSON Server backend. This project was developed as part of Module 3, Week 3 training.

## Features
- **Full CRUD functionality**:
  - Create new products
  - Read/display all products
  - Update existing products
  - Delete products
- **Responsive UI** with clean design
- **Error handling** for API requests
- **Form validation** before submission
- **Real-time updates** of product list

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- JSON Server (for mock backend)


## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository or download the project files
2. Install JSON Server globally:

   npm install -g json-server

### How to Run
1. Start JSON Server:

    json-server --watch db.json

2. Open index.html in your browser

### API Endpoints
- GET /products - Get all products

- POST /products - Add new product

- PUT /products/:id - Update product

- DELETE /products/:id - Remove product

### How to Use
1. View Products: Automatically loads when page opens

2. Add Product:

- Fill name and price

- Click "Add Product"

3. Edit Product:

- Click "Edit" on product card

- Modify values

- Click "Update Product"

4. Delete Product:

- Click "Delete" on product card

- Confirm deletion

### Code Notes
- Uses camelCase variables

- ES6 JavaScript

- Detailed comments

- Error handling

### Troubleshooting
- Verify JSON Server is running

- Check browser console for errors

- Ensure CORS isn't blocking requests
