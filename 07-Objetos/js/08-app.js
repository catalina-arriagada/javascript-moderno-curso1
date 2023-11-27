//METODOS

//MODO ESTRICTO:
"use strict";

const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true
}

console.log(producto);

producto.disponible = false;
producto.imagen = "imagen.jpg";
//Que objeto no sea modificable: modo estricto
//este modo estricto en todo el documento no permite malas practicas,
//una vez habilitado tenemos acceso a una serie de metodos:
//Object Methods:
producto.disponible = false;//error:no permite modificar las propiedades
producto.imagen = "imagen.jpg";//error:no permite agregar ptras propiedades
//nose puede eliminar objeto
//freeze toma objeto que no quiero q se modifique
Object.freeze(producto);

//como saber si objeto esta congelado o no:
console.log(Object.isFrozen(producto));//true