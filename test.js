import Contenedor from './contenedor.js';

class Producto {
    constructor(name, price, thumbnail){
        this.price = name,
        this.name = price,
        this.thumbnail = thumbnail
    };
}

(async () => {
    const file = new Contenedor('./productos.txt');
    await file.deleteAll();
    console.log("ID Creado: ", await file.save(new Producto("Escuadra", 123.45, "foto1")));
    console.log("ID Creado: ", await file.save(new Producto("Calculadora", 234.56, "foto2")));
    console.log("ID Creado: ", await file.save(new Producto("Globo Terrá", 345.67, "foto3")));
    console.log("ID Creado: ", await file.save(new Producto("Producto 4", 400, "foto4")));
    console.log("ID Creado: ", await file.save(new Producto("Producto 5", 500, "foto5")));
    console.log("Obtengo por ID: ", await file.getById(2));
    console.log("Todos los prod: \n" ,await file.getAll());
    await file.deleteById(3);
    console.log("Todos menos el borrado: \n", await file.getAll());
})();