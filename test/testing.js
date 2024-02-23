// const ProductManager = require("./productManager");

import ProductManager from "../src/productManager.js";

const productos = new ProductManager();
 
//array vacio
console.log(productos.getProducts());

//agrego primer producto
console.log(productos.addProduct('Cosas de Cabrito', 'El unipersonal de stand up que estabas buscando', 4000, 'Imagen-Cosas-de-Cabrito', 'abc123', 30));
//agrego segundo producto
console.log(productos.addProduct('Desastre', 'El unico show que cumple con el etiquetado frontal', 3000, 'Imagen-Desastre', 'abc456', 50));
//agrego tercer producto
console.log(productos.addProduct('Excesos', 'Sabemos que los excesos no estan bien, pero nos gustan', 5000, 'Imagen-Excesos', 'abc789', 60));

//Producto con dato faltante
console.log(productos.addProduct('After Wakanda', 3000, 'Imagen-Wakanda', 'abc457', 35));

//array con producto
console.log(productos.getProducts());

//Validacion code repetido
productos.addProduct('Desastre', 'El unico show que cumple con el etiquetado frontal', 3000, 'Imagen-Desastre', 'abc456', 50);

//Consulta por ID
productos.getProductById(2)

//Consulta de producto por ID
productos.getProductById(4)


//actualiza el precio del producto y se comprueba que no se puede modificar el ID
const productoActualizar = {
    "id": 30,
    "price": 2500,
}

console.log(productos.updateProduct(1, productoActualizar));