//HERENCIA
//como heredar prototypes

function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() { 
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold'
    } else if(this.saldo > 5000){
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () { 
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira; 
}

const pedro = new Cliente('pedro', 6000);

// function Persona(nombre, saldo, telefono) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.telefono = telefono;

   
// }

//para no repetir codigo podemos heredar de cliente a persona algunas categorias
//.call()
function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//si tambien queremos heredar las funciones (y que las funciones tb aparezcan en consola) tenemos que escribir mas codigo
//y tiene que ser antes de instanciar objeto Persona (cliente da igual, porque es heredada y nohereda nada):
Persona.prototype = Object.create(Cliente.prototype); //para que cliente sea parte de persona //que TODO el prototype de cliente lo mande hacia persona
//crear (y en consola) propia categoria de constructor:
Persona.prototype.constructor = Cliente;

//instanciarlo
const juan = new Persona('Juan', 5000, 787878);
console.log(juan);
console.log(juan.nombreClienteSaldo()); //podemos utilizarlo porque estamos heredando de Cliente, y juan es parte de Persona (clase que hereda de Cliente)

// Si no hicieramos:
//Persona.prototype = Object.create(Cliente.prototype);
//Persona.prototype.constructor = Cliente;
// Nos marcaría un error al poner:
// console.log(juan.nombreClienteSaldo()); 
//TIENE QUE SER antes de crear una instancia, sino no sabe que existe esta herencia
//y el objeto tenga toda esa info que necesita

//ESTOS PROTOTYPES NO ESTARAN DISPONIBLES EN CLLIENTE PORQUE SOLO HEREDAMOS LOS OBJ Y FUNCIONES DESDE CLIENTE A PERSONA (Y NO DE PERSONA A CLIENTE)
//A TODO ESTO SE LE LLAMA GOD OBJECT: UN OBJETO QUE SE LE VAN HEREDANDO LAS FUNCIONES