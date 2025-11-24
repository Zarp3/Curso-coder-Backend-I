import fs from "fs";

const path = "./src/data/products.json";

export default class ProductManager {
  constructor() {
    this.path = path;
    if (!fs.existsSync(this.path)) fs.writeFileSync(this.path, "[]");
  }

  async getProducts() {
    const data = await fs.promises.readFile(this.path, "utf-8");
    return JSON.parse(data);
  }

  async getProductById(id) {
    const products = await this.getProducts();
    return products.find(p => p.id === id);
  }

  async addProduct(product) {
    try {
        const products = await this.getProducts();

        if (!product.title || !product.price) {
            throw new Error("Faltan campos obligatorios");
        }

        product.id = Date.now();
        product.stock = product.stock ?? 10; 
        products.push(product);

        await this.saveProducts(products);
        return product;

    } catch (error) {
        throw new Error("Error al agregar producto: " + error.message);
    }
  }

  async updateProduct(id, updateData) {
    const products = await this.getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...updateData, id };
    await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2));
    return products[index];
  }

  async deleteProduct(id) {
    try {
        const products = await this.getProducts();
        const index = products.findIndex(p => p.id == id);

        if (index === -1) {
            throw new Error("El producto no existe");
        }

        products.splice(index, 1);
        await this.saveProducts(products);

    } catch (error) {
        throw new Error("Error al eliminar producto: " + error.message);
    }
  } }
