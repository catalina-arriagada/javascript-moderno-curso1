//Coercion
//Conversion automatica o implicita de valores de un tipo dado, a otro tipo.

//Conversión implícita
const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); //2040 string
//se fuera a que js lo maneje y lo modifique


//Conversión Explícita: requiere una funcion
console.log(Number(numero2));//lo convierto directamente, utilizo una función, Number en este caso

//Conversion explicita
console.log(numero1.toString());//lo convierte a string

//aplica tb a arreglos
const pedido = [1,2,3,4];
console.log(pedido.toString());//convierte el array a string

//y aplica tb a json
console.log(JSON.stringify(pedido)); //lo convierto de arreglo a string

