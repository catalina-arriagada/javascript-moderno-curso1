//Closures
//van acompañados del "scope" muchas veces
const cliente = 'juan'; //la variable como está fuera de la función, la función no sabe que esta existe, eso es el scope.

function mostrarCliente() {
    const cliente ='Pablo';
    console.log(cliente);
}

mostrarCliente(); //pablo

//Un valor que está dentro de función, hacerlo disponible por fuera de una función, eso se conoce como un Closure
//Closure: son creados cada vez q se crea una función:
//FORMA DE ACCEDER A UNA FUNCIÓN O A UN VALOR DE ESTA DESDE EL EXTERIOR DE LA MISMA
console.log(cliente);//juan

//sacar valor como cliente pablo afuera: hacer closure:
const obtenerCliente = () => {
    const nombre = "Juan";
    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre; //esto hace posible q podamos usar el closure
}

const cliente1 = obtenerCliente();
cliente1(); //Juan

