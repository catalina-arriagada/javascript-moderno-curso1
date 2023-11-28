//.reduce: funcion reductora
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//.reduce: toma gran cantidad de datos, los une y entrega resultado
//cuanto tiene que pagar del total de todos los productos

//con foreach
let total=0;
carrito.forEach(producto=>total += producto.precio);


//con reduce

let resultado = carrito.reduce((total2,producto)=>total2+producto.precio, 0);
//paramentro 1 es el iniciador (en 0)
//parametro 2 son los demas
//valor previo y valor actual
///parte de 0 y este numero se va sumando -cualquiera que sea-
//al cero se le van sumando los valores y se guardan en total2//



