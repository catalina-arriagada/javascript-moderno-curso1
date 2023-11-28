const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//como unir 2 o mas arreglos
//forma 1 .concat
const meses2= ['ag','sep'];
const meses3= ['oc','nv'];
const resultado= meses.concat(meses2, meses3,'otro mes');
console.log(resultado);

//forma 2
//spread o rest operator: crea copia
const resultado2 =[...meses, ...meses2, ...meses3, ...'otromes'];//por cada letra del string va a crear un elemento del arreglo//pero sin los ... es lo mismo que el anterior, lo agrega como otro elemento la frase 
console.log(resultado2);//une los 2 arreglos en 1

