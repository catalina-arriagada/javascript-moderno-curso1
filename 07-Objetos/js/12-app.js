//Crear objetos mas automaticamente

//Object Literal
const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true
}
console.log(producto);

//Object Constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;//valor x default
}

const producto2 = new Producto('monitor',500);
console.log(producto2);

//This no pierde la referencia, en la consola sale todo
//asi puedo crear todos los objetos que quiera
//es mas dinamico pero se usa mas el literal