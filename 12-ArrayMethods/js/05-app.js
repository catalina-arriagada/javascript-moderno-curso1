const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con foreach
let resultado ='';
carrito.forEach((producto,index)=> {
    if (producto.nombre === 'Tablet'){
        resultado = carrito[index];//buscar la posicion de producto
    }
})
//si es asi entonces asignale el producto a resultado 2
console.log(resultado);

//con .find
const resultado2 = carrito.find(producto => producto.nombre === 'Tablet');//verifica si lo encontro y donde
console.log(resultado2);//y ponlo en resultado2
//retorna [nombre: 'Tablet', precio: 200]
//retorna solo el primer elemento que cumpla la condicion
//sino lo encuentra retorna undefined
