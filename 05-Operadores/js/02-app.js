const num1=20;
const num2="20";
const num3=30;

//revisar si 2 num son iguales
console.log(num1 == num3);//false
console.log(num1 == num2);//true

//comparador estricto
console.log(num1 === num2);//false

//hacer que 1 y 2 se marquen como iguales en una bd
console.log(num1 === parseInt(num2));//true


//crear login 
//revisar si contraseñas son iguales o distintas:
const pass1 = "admin";
const pass2 = "Admin";

//pass1 es diferente a pass2???
console.log(pass1 != pass2);//true
//estricto
console.log(num1 != num2);//true
console.log(num1 !== parseInt(num2));//false, son iguales
