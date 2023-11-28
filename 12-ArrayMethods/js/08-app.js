//spread operator en arreglo con objetos
const producto = {nombre: 'disco duro', precio:300};
const carrito2 = [...carrito,producto]; //a un objeto NO se le colocan los 3 puntos antes. a carrito si porque es un array (de objetos)
console.log(carrito2);//añade el disco duro a la copia