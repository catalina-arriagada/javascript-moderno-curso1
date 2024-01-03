//ifi que permita editar variables de forma local(solo en este archivo)
(function(){
   // let DB;
    const listadoClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        //mostrar listado de clientes en caso de que exista la bd crm1
        if(window.indexedDB.open('crm1', 1)){
            obtenerClientes();
        }

        listadoClientes.addEventListener('click', eliminarRegistro);
    });

    //Eliminar registros
    function eliminarRegistro(e){
        console.log(e.target.classList);
        if(e.target.classList.contains('eliminar')){
            console.log('Diste click en eliminar');
            //identificar el id en el innerHTML y convertirlo:
            const idEliminar = Number(e.target.dataset.cliente);
            console.log(idEliminar);

            //preguntar si esta seguro de eliminarlo
            //se usa sweet alert: sweetalert2.github.io
            Swal.fire({
                title: "¿Está seguro de eliminar el cliente?",
                text: "Esta acción no puede ser revertida",
                icon: "warning",
                cancelButtonText: "Cancelar",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, elimínalo"
              }).then((result) => {
                if (result.isConfirmed) {
                    const transaction = DB.transaction(['crm1'], 'readwrite');
                    const objectStore = transaction.objectStore('crm1');
                    objectStore.delete(idEliminar);

                    transaction.oncomplete = function() {
                        console.log('eliminado');
                        //eliminar del dom
                        e.target.parentElement.parentElement.remove();           
                    }
                    transaction.onerror = function() {
                        console.log('error al eliminar');
                    }
                    Swal.fire({
                        title: "Borrado",
                        text: "El Cliente ha sido eliminado.",
                        icon: "success"
                    });
                } 
              });
        }
    }

    //Crea la BD de indexed db
    function crearDB() {
        const creardb = window.indexedDB.open(['crm1'], 1);
        creardb.onerror = function() {
            console.log('error al crear db');
        };
        creardb.onsuccess = function() {
            console.log('db creada correctamente');
            DB = creardb.result;
        };

        creardb.onupgradeneeded = function(e) {
            const db = e.target.result;
            const objectStore = db.createObjectStore('crm1', {keyPath: 'id', autoIncrement: true});
            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});

            console.log('db lista y creada')

        };
    }

    function obtenerClientes() {

        //Conectar a la bd
        const abrirConexion = window.indexedDB.open('crm1', 1);
        //si hay error en conexion
        abrirConexion.onerror = function() {
            console.log('error al conectar bd')
        };
        abrirConexion.onsuccess = function() {
            console.log('conectado a db exitosamente')
            DB = abrirConexion.result;//abrir en consola instancia de bd con todos los metodos disponibles
            
            //acceder a la objectStore:
            const objectStore = DB.transaction('crm1').objectStore('crm1');

            //listar el crud
            //en caso de q se liste correctamente onsuccess
            objectStore.openCursor().onsuccess = function(e){
                const cursor = e.target.result;

                //si hay registros en bd:
            if(cursor){

                    const {nombre, empresa, email, telefono, id} = cursor.value;
                    
                    listadoClientes.innerHTML += `
                    <tr>
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
                    </tr>
                    `;

                    console.log(cursor.value);
                    cursor.continue();
                } else {
                    console.log('no hay mas registros');
                }

            }
       
        };
    }

})();