//Set en JS: un set permite crear una lista de valores sin duplicados
const carrito = new Set();
//tiene sus propios metodos, al igual q un arreglo tiene sus otros propios metodos

//agregar elementos al set:
carrito.add('CAMISA');
carrito.add('disco');
carrito.add('disco2');
carrito.add('disco3');
carrito.add('CAMISA'); //si intento agregar denuevo camisa, no la va a agregar, ni va a salir un error, simplemente la ignora
//no repite valores.
//es sensible a may o min
//UN SET SON SOLO VALORES, NO SON LLAVE VALOR COMO UN OBJETO

console.log(carrito.size); //tiene 4 elementos//extension de cuantos elementos tengo dentro del set

//comprobar si valor existe
console.log(carrito.has('CAMISA'));//retorna true o false

//eliminar elemento del set
carrito.delete('disco');
console.log(carrito.delete('disco jaja')); //retorna false porque no lo puso borrar porque no existe, no lo pudo encontrar

//eliminar todo valor del set (vaciar un set)
// carrito.clear();

//los sets son iterables
carrito.forEach((producto,index, pertenece) => {
    console.log(producto);
    console.log(index);//como el set solo guarda valores, el index imprime lo mismo que el producto, un valor, porque no tiene keys el set
    console.log(pertenece);//el set al que pertenece: aparece la flechita del set con los valores desplegables en consola /set original
});

console.log(carrito) //tengo distintos elementos dentro del set, pero con numeros desde el 0 como llave


//ejemplo de uso:
//del siguiente arreglo, eliminar los duplicados
const numeros = [1, 20, 30, 1, 20, 50];
console.log(numeros);
const numerosNoDuplicados = new Set(numeros);
//numerosNoDuplicados = numeros;
console.log(numerosNoDuplicados);



