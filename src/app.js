import express from "express";
import productsRouter from "./routers/products.router.js";
import cartsRouter from "./routers/carts.router.js";
import multer from "multer";   

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/../files`)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) 
}});

const uploader = multer({ storage })

const app = express();
const PORT = 8080;

app.use(express.static(`../public`))
app.use(express.json());
app.use(express.urlencoded({extended: true }))

app.get("/",(req,res)=>{
    return req.send('Solucion Primera PreEntrega')
})


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);


app.listen(PORT, ()=>{
    console.log(`Corriendo app en el puerto ${PORT}`);
});

