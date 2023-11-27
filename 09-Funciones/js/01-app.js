//Funciones:
//Son serie de instrucciones que realizan una accion
//permiten codigo ordenado y facil de mantener, son reutilizables

//2 formas en js de crearlas:
//1. declaracion de funcion. 2. Expresion de funcion

//1. declaracion de funcion:
function sumar(){
    console.log(2+2);
};

sumar();

//2. Expresion de funcion:
const sumar2 = function() {
   console.log(3+3);
}

sumar2();

//diferencias:
//la de declaracion es posible utilizarla antes de definirla,
//la de expresion no
//por que? Js tiene algo llamado Hoisting
//js se ejecuta en 2 vueltas: la primera escanea y registra las funciones, etapa de creacion
//en la segunda vuelta cuando ejecuta, esta funcion ya esta registrada
//en el codigo de la de expresion, este codigo es ignorado en la 1era vuelta.
//lo ignora porque lo ve como:
//const sumar2;
//sumar();
//y luego: sumar = function...



