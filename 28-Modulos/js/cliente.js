//modulos
//const nombreCliente = "Juan"; //cuando codigo es grande esta forma puede dar mas problemas
//se pueden mezclar las variables en otros modulos, se ejecutan en otros modulos
//solucion: colocar codigo en IIFE ('ifi') o funcion que se ejecuta inmediatamente:

// (function(){
//     console.log('desde un IIFE');
//     const nombreCliente = "Juan"; 
// })(); //el ultimo parentesis es el q manda a llamar la funcion de inmediato
// //pero el contra es q si queremos separar funciones no se puede, excepto que:
// (function(){
//      window.nombreCliente = "Juan"; 
// })();//esto si me imprimira//ahora tampoco se puede error

//aqui los modulos son utiles:
export const nombreCliente = "Juan";
export const ahorro = 200;


//mejor forma
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('si tiene saldo');
    } else {
        console.log('no tiene s')
    }
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    //metodo dentro de clase
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;//usamos this para hacer referencia a la misma instancia del objeto
    }
}

//Export default: cuando lo importas no requiere estar dentro de llaves {}
// export default function nuevaFuncion(){
//     console.log('este es el default')
// }
//SOLO PUEDE HABER 1 EXPORT DEFAULT.
//Se exporta como alias, el nombre de la import da igual

//puedo dejarlo sin nombre si quiero y funciona igual:
export default function(){
    console.log('este es el default')
}