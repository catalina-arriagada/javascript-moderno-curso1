//METODOS
"use strict";

const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true
}

console.log(producto);

//seal: sellar objeto, 
//no puede agregar ni eliminar, pero si modificar propiedades existentes
Object.seal(producto);

producto.disponible = false;//false

//como saber si objeto esta sellado 
console.log(Object.isSealed(producto));//true,objeto sellado