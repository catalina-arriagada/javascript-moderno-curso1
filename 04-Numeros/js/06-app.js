const num1="20";
const num2="20.2";
const num3="Uno";
const num4=20;

console.log(typeof num1);

//convertir string en numero entero:
console.log(Number.parseInt(num1));

//convertir string en numero float o decimal:
console.log(Number.parseFloat(num2));

//no es un numero
console.log(Number.parseInt(num3));//NaN

//revisar si num es entero ono
console.log(Number.isInteger(num4));//true
console.log(Number.isInteger(num3));//false