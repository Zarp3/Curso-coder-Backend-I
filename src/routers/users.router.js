import { Router } from "express";
import { UserModel } from "../models/user.model.js";
import { createHash } from "../utils/bcrypt.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;

    const user = await UserModel.create({
      first_name,
      last_name,
      email,
      age,
      password: createHash(password)
    });

    res.status(201).send({ status: "success", user });
  } catch (error) {
    res.status(400).send({ status: "error", error });
  }
});

export default router;
