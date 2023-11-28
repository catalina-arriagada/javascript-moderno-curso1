const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//.filter crea nuevo arreglo 
//permite buscar 2 o la cantidad que queramos de productos y propiedades
let resultado;
resultado = carrito.filter(producto => producto.precio > 400);
//le asigna al resultado todos los productos mayores a 400
//crea nuevo arreglo con condicion que estemos evaluando

resultado = carrito.filter(producto => producto.precio < 600);
console.log(resultado);

//sepuede buscar por varias cosas

//ej: quitar producto de carrito
resultado= carrito.filter(producto=> producto.nombre !== 'Audifonos');
//traeme todo menos esos audifonos
resultado= carrito.filter(producto=> producto.nombre === 'Audifonos');
//traeme solo esos audifonos



