//scope
//Es el 'Alcance de una variable'
//cuando una variable puede ser vista por una funcion o por un bloque de codigo
//existen 2 tipos: 1.global 2.en funcion o bloque de codigo

const cliente = 'Juan';

function mostrarCliente(){
    console.log(cliente); //Se muestra pq es global
}

mostrarCliente(); //Juan

//Pero que pasa si la var se crea dentro de funcion y el console log esta afuwera
function mostrarCliente2(){
    const cliente2 = 'Juan';
}

console.log(cliente2); //error, cliente no esta definido

mostrarCliente2(); //Juan

//Con el siguiente scope, tiene mas prioridad si el console log esta dentro de la funcion, la variable dentro de la funcion
const cliente3 = 'Juan';
function mostrarCliente3(){
    const cliente3 = 'Pedro';
    console.log(cliente3); //Imprime Pedro pero no Juan
}

mostrarCliente3(); //Imprime Pedro pero no Juan

