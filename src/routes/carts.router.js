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
  const cid = Number(req.params.cid);
  const pid = Number(req.params.pid);
  const updated = await manager.addProductToCart(cid, pid);
  if (!updated) return res.status(404).json({ error: "Carrito no encontrado" });
  res.json(updated);
});

export default router;