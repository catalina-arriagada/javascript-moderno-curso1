//mixin Pattern
//mas conocidos como mixins
//es una forma de agregar funciones a una clase una vez ha sido creada
class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

//lo mejor es q puedo tener segunda clase con las mismas funciones
class Cliente{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

//tenemos funciones externas q vamos a compartir entre distintas clases
const funcionesPersona = {
    mostrarInfo() {
        console.log(`nombre persona ${this.nombre} Email: ${this.email}`);
        //no funcionaria porque esta funcion no tiene como saber que es el objeto persona
    },

    //podemos agregar mas funciones
    mostrarNombre(){
        console.log(`mi nombre es ${this.nombre}`);
    }
}

//object asign
//añadir funciones a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona); 
//ahora si podemos tenerlo en el prototype de la clase y de la instancia la funcion mostrarInfo

//aqui le asignamos las mismas funciones a la otra clase
Object.assign(Cliente.prototype, funcionesPersona); 

const persona = new Persona('Juan', 'correo');
console.log(persona)

//la idea de mixin es si tengo otra clase u otro objeto, añadirles las mismas funciones para q se combinen
//la forma de hacer esto se llama object asign
//^
//ahora si lo podemos utilizar para mostrar info:
persona.mostrarInfo();//ahora si puede encontrar this.nombre y this.email
persona.mostrarNombre();//ahora si puede encontrar this.nombre
//mi nombre es Juan


const persona2 = new Persona('Cata', 'correo2');
console.log(persona2)