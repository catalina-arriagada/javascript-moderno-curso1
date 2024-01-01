//como crar prototypes para cliente y empresa
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//crear funciones con protoype para cliente:
//objeto.entrar a protoype.nuevafuncion o propiedad (nuevo proto)
//funcion que clasifica tipos de clientes:
Cliente.prototype.tipoCliente = function() { //el function normal busca en el objeto (con this.), pero arrow function marca undefined porque se va a la ventana global (ademas de la sintaxis esa es otra diferencia)
    //console.log('desde mi nuevo proto'); //si expandimos proto en consola tenemos funcion nueva llamada tipoCliente
   // console.log(this.saldo); //el protoype y la funcion mantienen referencia hacia objeto actual
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

//otra funcion de cliente , otro prototype:
Cliente.prototype.nombreClienteSaldo = function () { //podria poner arrow function siempre cuando no utilice this
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
    //puedo hacer referencia a propiedades del objeto o a otros prototypes / funciones dentro del mismo prototype / objeto
    //mantiene referencia de los datos del objeto y tambien de las distintas funciones parte del objeto
}

//funcion de sistema de banco ej: //retira parametro es la cantidad que el cliente quiere retirar
Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira; //le resta a lo que tiene lo que retira// = saldo - retira
}

//instanciar nuevo objeto de cliente
const pedro = new Cliente('pedro', 6000);

//objeto.metodo:
// pedro.tipoCliente();//usar funcion protoype, se usan como si fuesen metodos

console.log(pedro.tipoCliente()); //platinium //tipo
console.log(pedro.nombreClienteSaldo()); 

console.log(pedro);

//retiraSaldo
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo()); //el saldo ahora es 5000
