//Pure functions o funciones puras
//Se usan mucho en react
//Retornan un dato pero no modifican los valores de las variables.
//si hay variable o funcion global, no van a modificar ese valor las pure functions, sino que van a retornar un dato nuevo
//Y con una entrada de datos, es decir, con un parametro, deben tomar la misma cantidad de datos que recibe. Usualmente el resultado es una variable con el nuevo valor.

const duplicar = numero => numero * 2; //1.toma un numero y retorna un numero
//En funciones puras, si toma un solo dato debe retornar un solo valor.

//2. no modifican valor original (variable global)
const numero1 = 20;
const resultado = duplicar(numero1); //tengo que crear nueva variable si quiero pasarle el numero1(q vendría siendo la nueva variable)

console.log(resultado)//40
console.log(numero1)//20: mantiene el numero original



