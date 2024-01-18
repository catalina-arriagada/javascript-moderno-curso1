const url = 'http://localhost:4000/clientes';

//Crear-agregar nuevo cliente al servidor
export const nuevoCliente = async cliente => {
    //console.log(cliente);

    try {
        await fetch(url, {
            //API FETCH recomienda usar metodo post primero, en orden a su doc
            //SIEMPRE QUE SE VAYA A CREAR NUEVO REGISTRO, SE UTILIZA METODO POST, ESTO ES INDEPENDIENTE A CUALQUIER LENGUAJE DE BACKEND, SIEMPRE SERA ASI
            method: 'POST',
            body: JSON.stringify(cliente), //contenido de contenido de peticion post hacia url /clientes, se envia como string o como objeto (de esas 2 formas), en este caso lo convertimos a string y lo enviamos hacia url como metodo post
            headers: { //son info de que tipo de datos estamos enviando
                'Content-Type': 'application/json' //el tipo de contenido es json, varía dependiendo del tipo de contenido, si es archivo por ej se usa 'multipard from data'
            }
        });
        //enviamos a usuario a index cuando se complete esa accion:
        window.location.href = 'index.html';

        //sale en terminal: Endpoints:
        //http://localhost:4000/clientes
    } catch (error) {
        console.log(error);
    }
}

//Obtener clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url); //por defecto envia get, no es necesario especificarlo como en el post
        const clientes = await resultado.json();
        return clientes; 
    } catch (error) {
        console.log(error)
    }
}

//Eliminar cliente
export const eliminarCliente = async id => {
    try {
        //inyecta el id en la url luego del dominio principal
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    
    } catch (error) {
        console.log(error);
    }
}

//Obtener cliente para Editar
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        //console.log(cliente);
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//Edita - Actualiza un registro
export const editarCliente = async cliente => {
    try {
        //console.log(cliente)
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error)
    }
}