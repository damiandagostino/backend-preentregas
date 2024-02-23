import express from "express";
import ProductManager from "./productManager.js";

const app = express();
const PORT = 8080;

const productos = new ProductManager();

app.get('/products',(req, res)=>{
    const {limit} = req.query;
    return  res.json({ productos: productos.getProducts(limit) })
});

app.get('/products/:pid', (req, res) => {
    const {pid} = req.params;
    const p = new ProductManager();
    return res.json({producto: p.getProductById(Number(pid))});
});

app.listen(PORT, ()=>{
    console.log(`Corriendo app en el puerto ${PORT}`);
});

