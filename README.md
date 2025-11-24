📘 ENTREGA TRABAJO N°2 DE JUAN CRUZ QUIROGA – Products, Carts, Handlebars & WebSockets
🚀 Descripción General

Proyecto backend desarrollado con Node.js, Express, File System, Handlebars y Socket.io, que implementa gestión de productos, carritos y una vista de actualización en tiempo real.

▶️ Cómo iniciar el proyecto
npm install
npm start

Servidor en http://localhost:8080

📁 Estructura básica

/api/products → CRUD de productos

/api/carts → Gestión de carritos

/views → Vistas Handlebars

/public/js → Lógica de WebSockets

/data → Persistencia en JSON

/managers → ProductManager y CartManager

🛒 Rutas de Productos (/api/products)

GET / → Listar productos

GET /:pid → Producto por ID

POST / → Crear producto (ID autogenerado + validación completa)

PUT /:pid → Actualizar sin modificar ID

DELETE /:pid → Eliminar producto

Incluye validaciones:

Campos obligatorios

Código único

Manejo de errores

🛍️ Rutas de Carritos (/api/carts)

POST / → Crear carrito

GET /:cid → Ver productos del carrito

POST /:cid/product/:pid → Agregar producto

Si existe: aumenta quantity

Si no existe: se agrega

Valida existencia del producto y stock

🎨 Vistas con Handlebars

/home → Lista completa de productos

/realtimeproducts → Vista que actualiza productos en tiempo real

⚡ Funcionalidad WebSockets

Implementada con Socket.io.
Cada vez que se crea o elimina un producto:

✔ La vista realTimeProducts se actualiza automáticamente sin recargar.
✔ Comunicación mediante eventos: productAdded y productDeleted.

📄 .gitignore

Incluye:

node_modules/
.env

✔ Cumplimiento de Consigna

Ruteo con Express

Persistencia en JSON

Manejo de errores y validaciones

Handlebars configurado

WebSockets funcionales

Vistas dinámicas actualizadas en tiempo real