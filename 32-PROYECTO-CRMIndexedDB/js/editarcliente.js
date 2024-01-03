(function() {
    //let DB;
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        //conectar a la bd
        conectarDB();

        //Actualiza los registros
        formulario.addEventListener('submit', actualizarCliente);
        
        //leer parametros
        //verificar id de la url
        const parametrosURL = new URLSearchParams(window.location.search); //URSEarchparams es api q permite leer todos los parametros disponibles en una url
        //solo nos da la id
        idCliente = parametrosURL.get('id'); //.get es metodo de URLsearchparams
        console.log(idCliente);
    
        //en caso de q exista el cliente va a llamar a la funcion obtener cliente
        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }


    });

    function actualizarCliente(e){
        e.preventDefault();

        if(nombreInput.value === ''||emailInput.value === ''||telefonoInput.value === ''||empresaInput.value === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        //actualizar cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente) //convertir a numero id para que vea si es el mismo (estaba en string)
        }
        console.log(clienteActualizado);
        const transaction = DB.transaction(['crm1'], 'readwrite');
        const objectStore = transaction.objectStore('crm1');
        objectStore.put(clienteActualizado); //compara keypath con el id de la bd q lee

        transaction.oncomplete = function(){
            console.log('editado correctamente');
            imprimirAlerta('Editado correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        };

        transaction.onerror = function(){
            console.log('error al actualizar'); //puede saltar aca si es string uno y el otro number
            imprimirAlerta('Error al Actualizar', 'error');
        };


    }

    function obtenerCliente(id){
       // console.log(id)
       const transaction = DB.transaction(['crm1'], 'readonly');
       const objectStore = transaction.objectStore('crm1');
    
       //obtener cliente en base su id//itera sobre los clientes:
       const cliente = objectStore.openCursor();
       cliente.onsuccess = function(e){
            const cursor = e.target.result;
            //si existe cursor
            if(cursor){
                console.log(cursor.value);
                //where
                //convertir a numero id para que vea si es el mismo (estaba en string)
                if(cursor.value.id === Number(id)){
                    console.log(cursor.value);//trae registro especifico
                
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
       }


       console.log(objectStore);
    }

    function llenarFormulario(datosCliente){
        const {nombre, email, telefono, empresa} = datosCliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

})();