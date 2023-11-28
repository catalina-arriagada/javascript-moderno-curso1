const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//2 formas de
//comprobar si valor existe en arreglo:

//1
meses.forEach(mes=> {
    if (mes === 'Enero'){
        console.log('enero si existe');
    }
    //console.log(mes)
} )

//2
//array methods
const resultado = meses.includes('Enero');
console.log(resultado);//true

//en un arreglo de objetos no funciona includes
//aqui se usa .some
const existe = carrito.some(producto=> producto.nombre === 'Celular');//true
console.log(existe);

//some en un arreglo tradicional
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);//true


