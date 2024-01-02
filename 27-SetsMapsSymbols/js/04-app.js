//weackmap mapas debiles
//sirven para mantener serie de datos como privados
//son llave y valor
const producto = {
    idProducto:10
}

const weakmap = new WeakMap();

//agrego valor a propiedad
weakmap.set(producto, 'Monitor');

console.log(weakmap); //
// {Object => "Monitor"}
// key: {idProducto: 10}
// value : "Monitor"

//existe o no el objeto dentro del weakmap
console.log(weakmap.has(producto)); //true

//acceder a valor
console.log(weakmap.get(producto)); //"Monitor" no se puede acceder al objeto original

//no se puede ver la extension
//console.log(weakmap.size(producto));//error
//console.log(weakmap.size)//undefined

//eliminar 
console.log(weakmap.delete(producto)); //se vacia weakmap

//no se puede iterar 
//solo acepta objetos, no strings ni numeros

