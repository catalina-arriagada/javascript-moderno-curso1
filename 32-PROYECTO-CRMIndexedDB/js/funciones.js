let DB
const formulario = document.querySelector('#formulario')

//Conectar DB
//si bd no existe la va a crear y si existe la va a conectar
function conectarDB(){
    const abrirConexion = window.indexedDB.open('crm1', 1);

    //si hay error en conexion
    abrirConexion.onerror = function() {
        console.log('error al conectar bd')
    };
    abrirConexion.onsuccess = function() {
        console.log('conectado a db exitosamente')
        DB = abrirConexion.result;//abrir en consola instancia de bd con todos los metodos disponibles
    };
};


function imprimirAlerta(mensaje, tipo){

    //para que no se repita alerta al apretar enviar:
    const alerta = document.querySelector('.alerta');
    //si no hay alerta previa que aparezca alerta
    if(!alerta) {
        //crear alerta 
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4','py-3','rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border');

        if(tipo === 'error'){
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        divMensaje.textContent = mensaje;
        //agregar al dom:
        formulario.appendChild(divMensaje);

            setTimeout(() => {
                divMensaje.remove();
            }, 3000);
        }  
    }