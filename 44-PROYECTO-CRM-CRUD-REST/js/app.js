import {obtenerClientes, eliminarCliente} from './API.js';

(function(){
    const listadoClientes = document.querySelector('#listado-clientes');
    document.addEventListener('DOMContentLoaded', mostrarClientes);

    //eliminar cliente
        //1 identificar a que cliente le damos click
    listadoClientes.addEventListener('click', confirmarEliminar);

    //mostrar clientes en listado html
    async function mostrarClientes(){
        const clientes = await obtenerClientes();

        //await: detener el sgte codigo hasta que obtenerClientes() se haya completado, sean 1, 100, etc. registros
        //console.log(clientes);
        clientes.forEach(cliente => {
            const { nombre, email, telefono, empresa, id} = cliente;
            const row = document.createElement('tr');//tabla
            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${telefono}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${empresa}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;//data-cliente id los genera automaticamente json server al crear el cliente
            listadoClientes.appendChild(row);
        });
    }

    function confirmarEliminar(e){
        //si elemento q le damos click tiene clase de eliminar:
        if(e.target.classList.contains('eliminar')){ //btn tiene una clase llamada eliminar
            //console.log('diste click en eliminar')
            const clienteId = parseInt(e.target.dataset.cliente);
            //console.log(clienteId); //a cual de los eliminar le doy click
            const confirmar = confirm('¿Desea eliminar el registro?');
            if(confirmar){
                //console.log('eliminando...', clienteId)
                eliminarCliente(clienteId);
            }
        }

    }

})()


//http://localhost:4000/clientes
//json-server db.json -p 4000