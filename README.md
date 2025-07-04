# Product Manager API - CRUD Operations

## 📦 Project Description
A web application that demonstrates CRUD (Create, Read, Update, Delete) operations using JavaScript Fetch API with a JSON Server backend. This project was developed as part of Module 3, Week 3 training.

## 🚀 Features
- Full CRUD functionality:
  - Create new products
  - Read/display all products
  - Update existing products
  - Delete products
- Responsive UI with clean design
- Error handling for API requests
- Form validation before submission
- Real-time product list updates

## 🧰 Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- JSON Server (for mock backend)

---

## ⚙️ Setup Instructions

### 📌 Prerequisites (Windows and Linux)
- **Node.js** installed  
  👉 [Download Node.js](https://nodejs.org/)

- **npm** (included with Node.js)

---

## 🖥️ How to Run the Project

### 🪟 On Windows

1. **Open PowerShell or CMD**  
   Press `Windows + R`, type `cmd`, and press Enter.

2. **Navigate to your project folder**  
   ```bash
   cd path\to\your\project
Install JSON Server globally (only once)

   ```bash
  npm install -g json-server
Start the JSON server

   ```bash
  json-server --watch db.json

Open index.html in your browser

🐧 On Linux (Ubuntu, Debian, Arch, etc.)
Open your terminal

Navigate to your project folder

   ```bash
  cd /path/to/your/project
Install JSON Server globally (only once)

   ```bash
  sudo npm install -g json-server
Start the server

   ```bash
  json-server --watch db.json
Open index.html in your browser (Firefox, Chromium, etc.)

🌐 API Endpoints
Method	URL	Description
GET	/products	Get all products
POST	/products	Add new product
PUT	/products/:id	Update product by ID
DELETE	/products/:id	Delete product by ID

🧪 How to Use the App
View Products: All products load automatically when the page opens.

Add Product:

Fill in the name and price fields

Click "Add Product"

Edit Product:

Click the "Edit" button on a product

Modify name and/or price

Click "Update Product"

Delete Product:

Click the "Delete" button on a product

Confirm the deletion

🛠️ Troubleshooting
✅ Ensure JSON Server is running at http://localhost:3000/products

✅ Open your browser console (F12) to check for errors

✅ Make sure your db.json is valid and contains a products array

✅ On Linux, verify that port 3000 is not blocked by a firewall

