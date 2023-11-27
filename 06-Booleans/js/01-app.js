const boolean1= true;
const boolean2= false;
const boolean3= "true";
console.log(boolean1);
console.log(boolean2);
console.log(boolean1 == boolean3); //se comporta como comparador estricto, a diferencia de numeros o string, u otros operadores
//false

const boolean4= new Boolean(true);
console.log(typeof boolean4);//Object