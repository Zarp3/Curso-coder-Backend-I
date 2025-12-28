import { Router } from "express";
import Product from "../models/product.model.js";

const router = Router();

router.get("/products", async (req, res) => {
  const result = await Product.paginate({}, { limit: 10, page: 1, lean: true });
  res.render("index", result);
});

router.get("/products/:pid", async (req, res) => {
  const product = await Product.findById(req.params.pid).lean();
  res.render("product", { product });
});

router.get("/carts/:cid", async (req, res) => {
  const cart = await Cart.findById(req.params.cid)
    .populate("products.product")
    .lean();

  res.render("cart", cart);
});

export default router;
