📘 ENTREGA TRABAJO N°3 DE JUAN CRUZ QUIROGA – 

📦 Proyecto Backend – Productos y Carritos
🚀 Tecnologías

Node.js
Express
MongoDB + Mongoose
Handlebars

🛒 Productos
GET /api/products

Soporta paginación, filtros y ordenamiento mediante query params.

🛍️ Carritos
Endpoints implementados

POST /api/carts

GET /api/carts/:cid (con populate de productos)

POST /api/carts/:cid/products/:pid

PUT /api/carts/:cid → actualiza todos los productos

PUT /api/carts/:cid/products/:pid → actualiza cantidad

DELETE /api/carts/:cid/products/:pid

DELETE /api/carts/:cid

📌 En el modelo Cart, products.product referencia a Product.

🖥️ Vistas (Handlebars)
/products

Lista productos con paginación

Botón Agregar al carrito

Link a detalle del producto

/products/:pid

Vista de detalle del producto

Descripción, precio, categoría

Botón Agregar al carrito

/carts/:cid

Muestra solo los productos del carrito

Datos completos (gracias a populate)