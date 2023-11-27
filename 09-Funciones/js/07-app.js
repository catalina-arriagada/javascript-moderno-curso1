//funciones que retornan valores
function sumar(a,b){
   return a+b; //hacer algo con ese resultado: CALCULOS
}

//cuando tengo una funcion que returna algo, tengo que tener otra variable,
//a la cual se le asigna lo retornado
const resultado = sumar(2,3);
console.log(resultado);

//Ejemplo mas avanzado:
let total = 0;
function agregarCarrito(precio){
    //agregar elementos al carrito:
    return total += precio; //retorna el valor a total
}

total = agregarCarrito(300);
total = agregarCarrito(100);
console.log(total);//400

function calcularImpuesto(total){
    return total * 1.15; //aumentando el 15% el total
}
const totalPagar = calcularImpuesto(total);
console.log(`el total a pagar es de ${totalPagar}`);

//tener variable, distintas funciones que retornan valor y obtener resultado