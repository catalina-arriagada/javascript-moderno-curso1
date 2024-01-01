//propiedades privadas en js
//public, privated, protected
//public se puede acceder de clase u objeto, privated solo dentro de la misma clase, protected 
class Cliente {

    #nombre; //ahora es privado
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}
        Saldo: $${this.saldo}`;
    }

    static bienvenida() {
        return `bienvenidos al cajero!`;
    }
}

const juan = new Cliente('Juan', 400);
//console.log(juan.nombre); //es publico
console.log(juan); //es privado
//console.log(juan.#nombre); //es privado //sale un error, porque intento llamar a la propiedad desde el objeto
console.log(juan.mostrarInformacion()); //si puede acceder, porque llama a la propiedad desde la clase, no desde el objeto como la anterior 

//Segunda sintaxis mas amigable:
class Cliente2 {

    #nombre; 
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const juan2 = new Cliente2();
juan2.setNombre('Juan');
console.log(juan2.getNombre());

//Esto no funciona en firefox o safari, solo en edge chrome etc.
//caniuse.com private fields


