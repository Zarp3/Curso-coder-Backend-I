import express from "express";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import path from "path";
import viewsRouter from "./routes/views.router.js";
import ProductManager from "./ProductManager.js";
const productManager = new ProductManager("productos.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve("views"));

app.use(express.static(path.resolve("public")));

const httpServer = app.listen(8080, () => {
    console.log("Servidor escuchando en puerto 8080");
});

const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado");
});

app.use("/", viewsRouter);

io.on("connection", (socket) => 
  {
    socket.on("new-product", async (data) => {
        await productManager.addProduct(data);
        const updated = await productManager.getProducts();
        io.emit("update-products", updated);
    });

    socket.on("delete-product", async (id) => {
        await productManager.deleteProduct(id);
        const updated = await productManager.getProducts();
        io.emit("update-products", updated);
    });
});