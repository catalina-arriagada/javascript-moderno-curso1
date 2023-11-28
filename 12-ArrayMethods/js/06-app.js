const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Everys &&
//todos los elementos de un arreglo deben cumplir esa condicion para que retorne true
const resultado = carrito.every(producto => producto.precio < 1000);//si todos son menores a 1000 se cumple en todos los objetos da true (pero tiene que ser en todos, sino da false)
console.log(resultado);//true
//es decir, si se cumple la condicion en todos los objetos es true

//some ||
const resultado2 = carrito.some(producto => producto.precio < 100);//si alguno cumple la condicion es true
console.log(resultado);//true