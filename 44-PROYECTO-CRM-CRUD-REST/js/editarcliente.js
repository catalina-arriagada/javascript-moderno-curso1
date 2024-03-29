import { editarCliente, obtenerCliente } from "./API.js";
import { mostrarAlerta, validar } from './funciones.js';

(function(){

    //Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        //console.log(idCliente);
        const cliente = await obtenerCliente(idCliente); //variable se crea a partir del return
        console.log(cliente);
        mostrarCliente(cliente);

        //submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    function mostrarCliente(cliente){
        //console.log(cliente);
        const {nombre, email, telefono, empresa, id} = cliente;
        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

       //console.log(cliente)
        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        //Edita el objeto
        editarCliente(cliente);
    }
})()