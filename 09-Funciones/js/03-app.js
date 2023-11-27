//diferencia funciones y metodos
const num1=20;
const num2='20';

//terminan siendo lo mismo pero forma en que son nombradas tiene que ver con el contexto que son utilizadas.
console.log(parseInt(num2)); //funcion-nombre,parentesis. Toma argumento(num2)
console.log(num1.toString()); //metodo -punto,parentesis

function sumar(p){
    console.log(2+2);
};//Toma parámetro (p)
