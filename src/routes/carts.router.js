import { Router } from "express";
import CartManager from "../managers/CartManager.js";

const router = Router();
const manager = new CartManager();

router.post("/", async (req, res) => {
  const cart = await manager.createCart();
  res.status(201).json(cart);
});

router.get("/:cid", async (req, res) => {
  const id = Number(req.params.cid);
  const cart = await manager.getCartById(id);
  if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });
  res.json(cart.products);
});

router.post("/:cid/product/:pid", async (req, res) => {
    try {
        const { cid, pid } = req.params;

        const product = await productManager.getProductById(pid);

        if (!product) {
            return res.status(404).send({ error: "El producto no existe" });
        }

        if (product.stock <= 0) {
            return res.status(400).send({ error: "Sin stock disponible" });
        }

        await cartManager.addProductToCart(cid, pid);
        product.stock--;

        await productManager.updateProduct(pid, product);

        res.send({ message: "Producto agregado al carrito" });

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default router;