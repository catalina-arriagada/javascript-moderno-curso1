//metodos para modificar arreglo

const meses = new Array['Enero','fe','ma'];
console.log(meses);

//agregar al final del arreglo sin conocer la extension del arreglo
//push: agregar elementos al final
meses.push('Abril');
meses.push('Mayo');

//Ej:
const carrito = [];
//definir producto:
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
console.log(carrito);//1 elemento en el arreglo (un objeto)

//agregar producto3 al inicio, empujando a los otros:
carrito.unshift(producto3);
