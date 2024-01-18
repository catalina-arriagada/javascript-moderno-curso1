import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';

(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault(); 
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
    
        //validar si formulario esta vacio

            //1-crear objeto 
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

       // console.log(Object.values(cliente).every(input => input !== ''));
        //every es un metodo q revisa condicion () en todos los elementos de un objeto
        //todos tienen que ser distintos a vacio para que de true. TODOS LOS ELEMENTOS DEBEN CUMPLIR LA CONDICION PARA QUE SEA TRUE
        console.log(!Object.values(cliente).every(input => input !== '')); //lo contrario

        if(validar(cliente)){
            //si es true no paso la validacion
            //console.log('Todos los campos son obligatorios');
            //Mostrar mensaje de error
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //console.log('se paso la validacion')
        nuevoCliente(cliente);
    }

    
})();