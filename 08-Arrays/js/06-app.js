//metodos para modificar arreglo

const carrito = [];
//definir producto:
const producto = {
    nombre:'monitor',
    precio: 400
}

const producto2 = {
    nombre:'monnitor',
    precio: 700
}

const producto3 = {
    nombre:'mnnitor',
    precio: 70
}

//formas imperativas y declarativas:
//en js son formas de programar que hacen lo mismo

//Imperativa: la del archivo anterior. Agregar al inicio y al final,
//trabaja sobre la misma variable, edita,etc.

//Declarativa: paradigma que expresa la logica sin describir tanto el flujo de control.
//no modifica directamente el codigo (la variable carrito,crea una nueva) original

//declarativa:

let resultado;
resultado = [...carrito, producto];
console.log(resultado);

resultado = [...carrito, producto2];//agrega otro elemento al array
//INCLUYE TODO LO DE CARRITO Y AGREGA ADEMAS PRODUCTO2
resultado = [producto3, ...carrito];//aqui agrega otro elemento pero al principio
