//HERENCIA
class Cliente {
    constructor(nombre, saldo){
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
        return `bienvenidos al cajero!`;//sale solo para Cliente
    }
}

//quiero hacer clase que herede esas mismas propiedades (de cliente)
//<clase nueva> extends <clase que quiero heredar>
//empresa es hijo de cliente
class Empresa extends Cliente {
 constructor(nombre, saldo, telefono, categoria){
    super(nombre, saldo); //copia los atributos de la clase padre: nombre y saldo
    this.telefono = telefono;
    this.categoria = categoria;
 }

  //Reescribe el valor de cliente
  static bienvenida() {
    return `bienvenidos al cajero de empresas!`; //sale solo para Empresa
}
}





//instanciar
const juan = new Cliente('Juan', 400);
const empresa = new Empresa('cocacola', 500);
const empresa2 = new Empresa('cocacola', 500, 788787, 'bebida');
console.log(empresa.mostrarInformacion());
console.log(empresa2);
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());