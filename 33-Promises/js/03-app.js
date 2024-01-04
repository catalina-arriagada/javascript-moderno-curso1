//promises
//previenen callbacks hell
//palabras reservadas:
//resolve: cuando se ejecuta el codigo correctamente o cuando se cumple el promise
//reject: cuando se produce error en la ejecucion, error en el promise, o no se quiere ejecutar

const aplicarDescuento = new Promise ( (resolve, reject) => {
    const descuento = true; //el promise fue resolve  //descuento aplicado
    //const descuento = false;  //el promise fue reject //no se pudo aplicar descuento

    if(descuento){//promise se cumple
        resolve('descuento aplicado');//aqui se imprime "Promise {<fulfilled>: 'descuento aplicado'}"
    } else {//promise no se cumple
        reject('no hay descuento, no se aplica descuento');
    }
});

console.log(aplicarDescuento);

//hay 3 valores resultantes posible:
// fullfilled: el promise se cumplio
// Rejected: el promise no se cumplio
// Rejected : el promise no se cumplio //BD no se conecto bien
// Pending: cuando no se definio un resolve o reject en la promise : no se cumple ni se rechaza

//utilizar promises:
//usar funcion.entonces (despues) se realiza la acción q está entreparentesis()
//la accion sera que tendre resultado como parametro y hare algo con ella:
//ACCEDER A LA RESPUESTA DE PROMISES:
aplicarDescuento
    .then(resultado => {
    console.log(resultado); //aqui se imprime solo "descuento aplicado"
    }) //siempre que el promise falle tengo acceso a .catch para capturar los errores
    .catch(error => {
        console.log('hubo error', error);//hubo error no hay descuento, no se aplica descuento //cuando es false el descuento
    });

//sirve para fetch api: cuando se cumple la conexion mando a llamar fetch api

//same:
aplicarDescuento
    .then(resultado => console.log(resultado))
    .catch(error => console.log('hubo error', error));

//puedo llamar una funcion una vez se cumpla la promesa:
aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log('hubo error', error));

function descuento(mensaje){
    console.log(mensaje);
}






