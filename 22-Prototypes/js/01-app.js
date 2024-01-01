//Prototypes: estan relacionados con objetos, todos los objetos tiene un protoype

//2 formas de crear un objeto
//sintaxis de object literal(forma mas tipica de crear objeto): es menos dinamica:
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente); //en la consola al abrir el object veremos un proto (de varios tipos)
console.log(typeof cliente); //object

//sintaxis Object constructor: la mas dinamica
//lo mas cercano a POO
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
const juan = new Cliente('Juan', 500); //crear nueva instancia de ese cliente (de ese objeto)
console.log(juan);
//en el constructor puedo crear multiples instancias del objeto, mientras que con el literal no
//es reutilizable
