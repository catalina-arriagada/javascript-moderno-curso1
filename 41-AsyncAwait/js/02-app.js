//en function declaration
function descargandoClientes(){
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if(!error){
                resolve('El lsitado de clientes se descargo correctamente');
            }else{
                reject('error en la conexion');
            }
        }, 3000);
    })
}

//Async await

//async es la funcion padre, la que ejecuta la promise
async function ejecutar(){
    try {
        //descargandoClientes();
        //en lugar de tener respuesta => en un callback, se asigna ese valor en una variable
        //await: parte que va a esperar a q se ejecute el promise
        const respuesta = await descargandoClientes(); //await detiene ejecucion del codigo hasta q se resuelva la resolve de la promise (si hay error la detiene)
        //espera a q todo vaya bien, sino salta al reject
        //esta linea se detiene hasta q tengamos resultado de funcion descargandoClientes()
        console.log(2+2)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

ejecutar();