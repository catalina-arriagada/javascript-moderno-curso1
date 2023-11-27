//METODOS
"use strict";
//como unir 2 objetos:

const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true
}

const medidas = {
    peso: "1kg",
    medida: '1m',
}

console.log(producto);
console.log(medidas);

//como unir 2 objetos:
//1.assign
const resultado = Object.assign(producto,medidas);
console.log(resultado);

//2.Spread o Rest Operator
const resultado2 = {...producto, ...medidas}; //con las llaves le digo que quiero que sea un nuevo objeto. 
//hacemos una copia de producto y medidas dentro de ese objeto
console.log(resultado2);//mismo resultado
//los 3 puntos toman copia de objeto y lo asignan dentro del objeto resultado2

