import express from "express";
import ProductManager from "./productManager.js";

const app = express();
const PORT = 8080;

const productos = new ProductManager();

app.get('/products',(req, res)=>{
    const {limit} = req.query;
    console.log(limit);

    return  res.json({ productos: productos.getProducts() })
});

app.listen(PORT, ()=>{
    console.log(`Corriendo app en el puerto ${PORT}`);
});

