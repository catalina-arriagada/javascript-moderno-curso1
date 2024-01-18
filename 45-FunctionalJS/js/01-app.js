//Functional JS Que es:
//Crear codigo usando funciones, pero estas deben tomar una entrada y una salida de datos
//no se permite la modificacion de datos: ej: si tienes un arreglo y quiero filtrar registros, debo crear uno nuevo y no modificar el existentes
//variables o datos no pueden modificarse (Inmtabilidad)- const casi siempre
//Se separan funciones de datos (array methods se utilizan mucho)
//First-class functions

//Inmutabilidad: nose puede hacer esto:
// let cliente = 'Juan';
// cliente = 'pedro';

//Separar funciones de datos
//funciones q entregan resultado nuevo o array methods, pero no se modifica arreglo/objeto original

//First class functions
//Crear funciones que parezcan variables (como lo es function expression):
// const suma = function (a,b){
//     return a+b;
// }
// const resultado = suma; //cuando asigno a otra variable suma, son first class function. Es una funcion, aunque parezca q le asigno cualquier otro tipo de dato

//FIRST CLASS FUNCTIONS:
const suma = function (a,b){
    return a+b;
 }

//Cuando un lenguaje puede asignar una funcion como si fuera un string, un numero o un buleano, o un objeto o array, quiere decir q este lenguaje soporta f class function
const resultado = suma; //aqui le asignamos la funcion. AQUI ESTA EL FCF
//es lo mismo que:
//const resultado = 20; //, por ejemplo.

//resultado es como si fuera un alias de la funcion q declara suma
console.log(resultado(10,20));

//ES ASIGNAR UNA FUNCION COMO SI FUERA UN VALOR: como STRING, ENTERO, NUMERO, U OTRO.




