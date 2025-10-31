🧾 Entrega N°1 – API de Productos y Carritos

Este proyecto implementa un servidor en Node.js + Express que permite gestionar productos y carritos de compra utilizando archivos JSON para la persistencia de datos.

🚀 Instalación y ejecución

Clonar o descargar el proyecto.

Abrir la carpeta del proyecto en la terminal.

Instalar dependencias:

npm install

Ejecutar el servidor:

npm start

El servidor se ejecutará en:

http://localhost:8080
📁 Estructura del proyecto
src/
├── app.js
├── routes/
│   ├── products.router.js
│   └── carts.router.js
├── managers/
│   ├── ProductManager.js
│   └── CartManager.js
└── data/
    ├── products.json
    └── carts.json

Los archivos products.json y carts.json deben comenzar vacíos:

[]
📦 Rutas de Productos (/api/products)
📍 GET /

Obtiene todos los productos.
Ejemplo:
GET http://localhost:8080/api/products

📍 GET /

Obtiene un producto específico por su ID.
Ejemplo:
GET http://localhost:8080/api/products/1

📍 POST /

Agrega un nuevo producto.
El id se genera automáticamente.
Body (JSON):

{
  "title": "Remera",
  "description": "Remera negra oversize",
  "code": "R001",
  "price": 2500,
  "status": true,
  "stock": 15,
  "category": "Ropa",
  "thumbnails": []
}

📄 El nuevo producto se guarda automáticamente dentro de products.json.

📍 PUT /

Actualiza un producto existente (excepto el id).
Ejemplo:
PUT http://localhost:8080/api/products/1
Body:

{
  "price": 2800,
  "stock": 20
}
📍 DELETE /

Elimina un producto por ID.
Ejemplo:
DELETE http://localhost:8080/api/products/1

🛒 Rutas de Carritos (/api/carts)
📍 POST /

Crea un nuevo carrito.
El id se genera automáticamente.
Ejemplo:
POST http://localhost:8080/api/carts
Respuesta:

{
  "id": 1,
  "products": []
}

📄 El carrito se guarda en carts.json.

📍 GET /

Obtiene todos los productos de un carrito específico.
Ejemplo:
GET http://localhost:8080/api/carts/1

📍 POST //product/

Agrega un producto a un carrito.

Si el producto no existe en el carrito, se agrega con quantity: 1.

Si ya existe, se incrementa la cantidad.
Ejemplo:
POST http://localhost:8080/api/carts/1/product/2

📄 Esto actualizará el carrito con ese producto dentro del archivo carts.json.

💾 Persistencia de datos

Los datos se guardan automáticamente en archivos JSON:

src/data/products.json → almacena todos los productos.

src/data/carts.json → almacena los carritos creados.

Cada vez que se realiza un POST, PUT o DELETE, el archivo se actualiza.