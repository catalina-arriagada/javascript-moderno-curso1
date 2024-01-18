const suma =  (a,b) => a+b;
const multiplicar = (a,b)=> a*b;

const sumarOMultiplicar = fn => fn(10,20);
console.log(sumarOMultiplicar(suma)); //Funcion como argumento
console.log(sumarOMultiplicar(multiplicar)); //Funcion como argumento

