//async en function expression
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

const ejecutar = async () => {
    try {
        const respuesta = await descargandoClientes(); 
        console.log(2+2)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

ejecutar();