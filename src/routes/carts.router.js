import { Router } from "express";
import Cart from "../models/cart.model.js";

const router = Router();


router.get("/:cid", async (req, res) => {
  const cart = await Cart.findById(req.params.cid).populate("products.product");
  res.json(cart);
});

router.post("/:cid/products/:pid", async (req, res) => {
  const cart = await CartModel.findById(req.params.cid);

  const prodIndex = cart.products.findIndex(
    p => p.product.toString() === req.params.pid
  );

  if (prodIndex !== -1) {
    cart.products[prodIndex].quantity++;
  } else {
    cart.products.push({ product: req.params.pid, quantity: 1 });
  }

  await cart.save();
  res.json(cart);
});


router.delete("/:cid/products/:pid", async (req, res) => {
  await Cart.findByIdAndUpdate(req.params.cid, {
    $pull: { products: { product: req.params.pid } }
  });
  res.json({ status: "success" });
});


router.put("/:cid", async (req, res) => {
  await Cart.findByIdAndUpdate(req.params.cid, {
    products: req.body
  });
  res.json({ status: "success" });
});


router.put("/:cid/products/:pid", async (req, res) => {
  const { quantity } = req.body;

  await Cart.updateOne(
    { _id: req.params.cid, "products.product": req.params.pid },
    { $set: { "products.$.quantity": quantity } }
  );

  res.json({ status: "success" });
});


router.delete("/:cid", async (req, res) => {
  await Cart.findByIdAndUpdate(req.params.cid, { products: [] });
  res.json({ status: "success" });
});

export default router;

