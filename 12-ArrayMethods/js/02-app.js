const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
    console.log(i);//indice
    console.log(mes);//valor
})

//en donde se encuentra abril
meses.forEach( (mes, i) => {
    if(mes === 'Abril'){
        console.log('encontrado en indice '+i);//encontrado en indice 3
    }
})

//forma de hacerlo mas corta
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);//3
//retorna -1 si no puede encontrar el string (funciona solo pa strings)

//para encontrarlo en numeros:
if (indice > 0){

}

//Encontrar indice de arreglo de objetos
//que producto cuesta 100
const indice2 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice2);

//solo encuentra 1