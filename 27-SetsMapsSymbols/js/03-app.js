//Objeto .MAP:
//Listas ordenadas en llaves y valor
//Son un objeto con una sola propiedad
//1 llave y 1 valor
//Puede ser cualquier valor(numero, string, arreglo, objeto, etc).
//las llaves pueden ser cualquier tipo de dato tambien

//Tienen mejor performance que un objeto:
//estan especialmente diseñados para agregar o quitar elementos, y recorrerlos
//cuando son mas grandes tienen mejor performance que un objeto

//se crean igual que los set
const cliente = new Map();

//agregar elemento: ('llave','valor')
cliente.set('nombre', 'juan');
cliente.set('tipo', 'premium');
cliente.set('saldo', 100);
//soporta cualquier tipo de dato
cliente.set(true, ['a','ass','as']);

//Extension - cuantos elementos tengo en el map cliente
console.log(cliente.size); //4

//Comprobar si valor existe
console.log(cliente.has('nombre'));//true

//Obtener valor
console.log(cliente.get('nombre')); //juan //obtiene values que estan en la llave que le menciono (aqui)

//eliminar valor
cliente.delete('saldo'); 
console.log(cliente.get('saldo'));//undefined pq no existe

//limpiar map
//cliente.clear(); //limpiar todo el map

console.log(cliente);

//Tambien puedo iniciar map con valores (constructor de map):
const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'nodefinido'] ]); //(2 arreglos dentro de un arreglo)

//agregar valores despues de inicializar
paciente.set('dr', 'Dr asignado');

//si le pongo la misma llave, eso reescribira el valor (LO ACTUALIZA)
paciente.set('nombre', 'Antonio');

//Map tambien es iterable //tienen valor(datosPaciente) y llave (index)
paciente.forEach((datosPaciente, index) => {
    console.log(datosPaciente, index);
});

console.log(paciente);




