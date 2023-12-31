//objeto Date

const diaHoy = new Date();
//const diaHoy = new Date('1-5-2000'); //podemos poner fecha personalizada y en consola saldran todos los detalles
//const diaHoy = new Date('January 5 2000'); //distintos formatos

let valor;

//METODOS para objeto fecha
valor = diaHoy.getFullYear(); //trae año actual
valor = diaHoy.getMonth(); //trae mes actual //inicia en 0 (enero es 0)
valor = diaHoy.getHours(); //trae hora actual 
valor = diaHoy.getTime(); //milisegundos a partir de enero de 1974 hasta la fecha, es siempre distinto
valor = diaHoy.getMinutes(); //trae minuto actual
valor = diaHoy.getSeconds(); //trae segundo actual

valor = diaHoy.setFullYear(2010); //set lleva valor y get extrae

console.log(valor); //fecha actual //Sun Dec 31 2023 19:00:02 GMT-0300 (hora de verano de Chile)
console.log(diaHoy); //fecha actual //Sun Dec 31 2023 19:00:02 GMT-0300 (hora de verano de Chile)
console.log(typeof valor); //Object


