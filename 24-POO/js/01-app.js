//en 2015 llegan las clases
//mejora en sintaxis de object constructor
//metodos: prototypes
//pero es mas sencillo q crear prototypes

//hay 2 formas de crear clases
//1. Class Declaration
class Cliente {
    //metodo constructor
    constructor(nombre, saldo){
        //valores una vez objeto es instanciado
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //a las funciones dentro de clases se les llama métodos
    mostrarInformacion() {
        return `Cliente: ${this.nombre}
        Saldo: $${this.saldo}`;
    }

    //propiedades estaticas
    static bienvenida() {
        return `bienvenidos al cajero!`;
    }
}

//instanciar
const juan = new Cliente('Juan', 400);
console.log(juan);

//nombre del objeto.nombre del metodo que deseo acceder:
console.log(juan.mostrarInformacion());

//propiedades estaticas
//no requiere instanciar clases
console.log(Cliente.bienvenida());
//console.log(juan.bienvenida()); //marcara error porque bienvenida no es parte del objeto juan, solo de la clase Cliente

//2. Class Expression
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;

    }
}

//instanciar
const juan2 = new Cliente2('Juan', 400);
console.log(juan2);