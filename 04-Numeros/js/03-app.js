const num1 = 30;
const num2 = 20;
let resultado;

//objeto math:
resultado = Math.PI;

//redondear resultado:
resultado=Math.round(2.8); //rdondea hacia arriba
resultado=Math.round(2.5); //rdondea hacia arriba

//rdondear hacia arriba
resultado=Math.ceil(2.1); 
//rdondear hacia abajo
resultado=Math.ceil(2.9); 

//raiz cuadrada
resultado=Math.sqrt(108349834);

//valor absoluto:(ignora el menos -)
resultado=Math.abs(-500);

//potencia
resultado=Math.pow(8,3);

//minimo de numeros
resultado=Math.min(3,5,3.2,-3);

//maximo
resultado=Math.max(3,5,3.2,-3);

//aleatorio
resultado=Math.random() * 20;

//aleatorio dentro de rango:
resultado=Math.floor(Math.random()* 30);


console.log(resultado);