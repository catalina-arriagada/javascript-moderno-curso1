//forma imperativa
const carrito = [];
const producto = {
    nombre:'monitor',
    precio: 400
}

const producto2 = {
    nombre:'monnitor',
    precio: 700
}

const producto3 = {
    nombre:'mnnitor',
    precio: 70
}

carrito.push(producto);
carrito.unshift(producto3);

//Forma imperativa de eliminar elementos array:

//eliminar ultimo elemento de un array
carrito.pop();

//eliminar primer elemento de un array
carrito.shift();

//eliminar elemento determinado de un array:
carrito.splice(2,1);//(posicion donde empezara a cortar, cantidad de elementos a eliminar)

