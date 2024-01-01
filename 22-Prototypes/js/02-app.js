function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
const juan = new Cliente('Juan', 500); //crear nueva instancia de ese cliente (de ese objeto)
console.log(juan);

//mostrar cliente:
function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene saldo de ${saldo}`;
}

console.log(formatearCliente(juan));

//otro objeto:
function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const cocacola = new Empresa('Cocacola', 300, 'bebidas');

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene saldo de ${saldo} y es
    parte de categoria de ${categoria}`;
}

console.log(formatearEmpresa(cocacola));

//cuando el codigo se hace mas grande en una empresa es muy dificil q se sepa cual funcion es para que objeto,
//entonces al tener prototype es facil saber cuales funciones estan disponibles para ese objeto al abrirlo en consola
//esto solucionan los protoypes

