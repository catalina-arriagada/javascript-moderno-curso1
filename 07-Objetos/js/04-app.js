const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true
}

console.log(producto);

//asignar valor que busco a su propia variable:
const nombre = producto.nombre;
console.log(nombre);

//pero hay una forma mas moderna armascript
//Object Destructuring: sacar de una estructura
const {nombre1} = producto;
console.log(nombre1);

const {precio} = producto;
console.log(precio);

const {nombre2,precio1,disponible} = producto;
console.log(nombre,precio,disponible);