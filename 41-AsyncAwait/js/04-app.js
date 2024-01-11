//consumir 2 consultas de 2 apis o 2 endpoints
function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('descargando clientes');
        setTimeout(() => {
            resolve('clientes descargados');
        }, 5000);
    })
}

function descargarNuevosPedidos(){
    return new Promise(resolve => {
        console.log('descargando pedidos');
        setTimeout(() => {
            resolve('los pedidos fueron descargando')
        }, 5000);
    })
}

//por que apps son lentas y se demoran:
const app = async () => {
    try {
        // const clientes = await descargarNuevosClientes(); 
        // console.log(clientes);
        // const pedidos = await descargarNuevosPedidos(); 
        // console.log(pedidos);
        //se ejecuta clientes primero pero espera 5 segundos y luego el pedidos, si quiero q ambos carguen xq no tiene nada q ver, mejoro la permormance con este codigo:
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);//se puede agregar como arreglo cualquier funcion
        //van a ejecutarse las 2 lineas al mismo tiempo
        console.log(respuesta)
    } catch (error) {
        console.log(error);
    }
}

app();