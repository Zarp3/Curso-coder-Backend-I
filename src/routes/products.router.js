import { Router } from "express";
import ProductManager from "../managers/ProductManager.js";

const router = Router();
const manager = new ProductManager();

router.get("/", async (req, res) => {
  const products = await manager.getProducts();
  res.json(products);
});

router.get("/:pid", async (req, res) => {
  const id = Number(req.params.pid);
  const product = await manager.getProductById(id);
  if (!product) return res.status(404).json({ error: "Producto no encontrado" });
  res.json(product);
});

router.post("/", async (req, res) => {
  const product = req.body;
  if (!product.title || !product.description || !product.code || !product.price || !product.status || !product.stock || !product.category) {
    return res.status(400).json({ error: "Faltan campos requeridos" });
  }
  const newProduct = await manager.addProduct(product);
  res.status(201).json(newProduct);
});

router.put("/:pid", async (req, res) => {
  const id = Number(req.params.pid);
  const updateData = req.body;
  delete updateData.id; // No se actualiza el id
  const updated = await manager.updateProduct(id, updateData);
  if (!updated) return res.status(404).json({ error: "Producto no encontrado" });
  res.json(updated);
});

router.delete("/:pid", async (req, res) => {
  const id = Number(req.params.pid);
  await manager.deleteProduct(id);
  res.json({ message: "Producto eliminado" });
});

export default router;