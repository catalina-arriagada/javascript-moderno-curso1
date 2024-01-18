//Funciones q retornan una funcion
const obtenerCliente = () => () => console.log('ola');

const fn = obtenerCliente(); //llamar a primera parte de la funcion
fn(); //llamar a la segunda parte de la funcion

