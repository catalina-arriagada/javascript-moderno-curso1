(function(){
    // let DB;
    // const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        //Conectar a la BD
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    //submit
    function validarCliente(e){
        e.preventDefault();
       // console.log('validando')
       
       //leer todos los input
       const nombre = document.querySelector('#nombre').value;
       const email = document.querySelector('#email').value;
       const telefono = document.querySelector('#telefono').value;
       const empresa = document.querySelector('#empresa').value;

       if(nombre === '' ||email === '' ||telefono === '' ||empresa === '' ){
          //console.log('rellenar todos los campos');
          imprimirAlerta('Todos los campos son obligatorios', 'error');
          return;
        }

        //Crear objeto con la info
        //Lo contrario al destructuring - object literal in handsmate
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            //id: Date.now()
        }

        cliente.id = Date.now();

        //console.log(cliente)
        crearNuevoCliente(cliente);
    }

    //crear nuevo cliente en la bd
    function crearNuevoCliente(cliente) {
        const transaction = DB.transaction(['crm1'], 'readwrite');
        const objectStore = transaction.objectStore('crm1');
        objectStore.add(cliente);

        transaction.onerror = function() {
            //console.log('Hubo un error');
            imprimirAlerta('El email debe ser único', 'error');
        };

        //exito:
        transaction.oncomplete = function() {
           // console.log('cliente agregado');
           imprimirAlerta('Cliente agregado correctamente');

           //que vaya a pagina de lista de clientes
           setTimeout(() => {
             window.location.href = 'index.html';
           }, 3000);
        };
    }

})();