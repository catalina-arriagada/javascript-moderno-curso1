import nuevaFuncionlalalaAlias, { nombreCliente as clientenombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from './empresa.js';

//import default
nuevaFuncionlalalaAlias(); //da igual el nombre q le pongamos, sabe q es el por default (porque es unico, se importa/exporta como alias)
//en las otras funciones tb podemos poner alias con as

//console.log(nombreCliente);//cliente.js:1 Uncaught ReferenceError: nombreCliente is not defined
//at cliente.js:1:13 nombre no esta definido en app.js, marca error porq esta dentro de un ifi, lo q ayuda a q no se mezclen las variables

//se mantienen en app.js
console.log(ahorro);
//console.log(mostrarInformacion(nombreCliente, ahorro));
console.log(mostrarInformacion(clientenombre, ahorro));
(tieneSaldo(ahorro));

//llamar a clase
//const cliente = new Cliente(nombreCliente, ahorro);
const cliente = new Cliente(clientenombre, ahorro);
console.log(cliente);
console.log(clientenombre);
console.log(cliente.mostrarInformacion());

//const empresa = new Empresa(nombreCliente, ahorro, 'lalala');
const empresa = new Empresa(clientenombre, ahorro, 'lalala');
console.log(empresa)
console.log(empresa.mostrarInformacion());