//Module Pattern : modulo padre
//Es el mas comun en javascript

const mostrarCliente = nombre => {
    console.log(nombre)
}

//como es modulo podemos crear diferentes archivos con diferentes funciones y exportarlas
export default mostrarCliente; //EXPORTA ESTA funcion q puedo importar en otro lugar


//El modulo era anteriormente algo asi:

const modulo1 = (function(){
    const nombre = 'Juan';
    function hola(){
        console.log('hola')
    }
    return {
        nombre,
        hola
    }
})();