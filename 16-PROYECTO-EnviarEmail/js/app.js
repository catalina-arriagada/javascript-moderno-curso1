//se ejecuta una vez todo nuestro codigo html ya ha sido descargado, asi nos aseguramos que se descargo todo el codigo html y que no hayan errores, y nos evitamos q no reconozca algun elemento:
document.addEventListener('DOMContentLoaded', function (){

    //crear objeto para que se habilite campo enviar (quitar opacity y disabled a button de enviar)
    const email = {
        email: '',
        asunto: '',
        mensaje: '' //inician como strings vacios q se van llenando, 
    }//verificaremos q campos esten llenos

    const extraEmail = {
        extra: ''
    };

    console.log(email);
    console.log(extraEmail);

    //seleccionar los elementos de la interfaz de usuario:
    //input id email:
    const inputEmail = document.querySelector('#email');
    //console.log(inputEmail);

    //destinatario extra:
    const inputExtra = document.querySelector('#extra');

    const inputAsunto = document.querySelector('#asunto');
    //console.log(inputAsunto);
    const inputMensaje = document.querySelector('#mensaje');

    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');

    const btnReset = document.querySelector('#formulario button[type="reset"]');//resetear form 
    const sppiner = document.querySelector('#spiner');

    //asignar eventos:
    // inputEmail.addEventListener('blur', function(e){ //blur se ejecuta cuando abandonamos el input, con un click fuera de el
    //     //cuando ocurre evento y se registra una funcion, eso se conoce como callback
    //     //console.log('salimos del input');
    //     //console.log(e); //se muestra objeto blur, contiene objeto target

    //     console.log(e.target.value); //value del input del DOM (html) ej: value= "valor por default" (atributo)
    // });

    inputEmail.addEventListener('blur', validar); //no colocar validar() porque mandaremos a llamar la funcion antes de que caiga en la variable seleccionada aqui

    inputExtra.addEventListener('blur', validarExtra);

    inputAsunto.addEventListener('blur', validar); //('input', validar) //input es mas en tiempo real, mientras voy escribiendo, blur cuando abandono el campo

    inputMensaje.addEventListener('blur', validar);

    btnReset.addEventListener('click', function(e){ //hacemos un callback en vez de funcion porque es poco codigo
        e.preventDefault(); //no reinicio formulario al apretar "Reset"
        mostrarAlertaPregunta('esta seguro de eliminar los campos?');
        //resetFormulario();
    });

    formulario.addEventListener('submit', enviarEmail);

    function enviarEmail(e) {
        e.preventDefault();
        console.log('enviando');
        sppiner.classList.add('flex');
        sppiner.classList.remove('hidden');

        //simular q ya ha enviado email:
        setTimeout(() => {
            console.log('enviado');
            sppiner.classList.remove('flex');
            sppiner.classList.add('hidden');
            resetFormulario()

            //crear alerta email enviado:
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase'); //clases de tailwind
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);

            //quitar alerta una vez de ha mostrado:
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }

    function validar(e) {
        //console.log(e.target.value); 
        console.log(e.target.id); //ver si esta tomando el id de cada campo del form
        
        //traversing the dom:
        console.log(e.target.parentElement);//muestra elemento padre, asi recorremos el DOM
        //console.log(e.target.parentElement.nextElementSibling);//muestra el siguiente elemento padre

        //validar que campos no esten vacíos:
        if(e.target.value.trim() === ''){ //con .trim() me aseguro que cuando coloque espacios en blanco no se valide
            // console.log('esta vacio');
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement); //tiene 2 argumentos: mensaje, referencia
            email[e.target.name] = '';
            comprobarEmail();
            return; //detiene ejecucion en caso de que pase la validacion no muestra alerta, no sigue despues del if
        // } else {
        //     console.log('si hay algo...');
        // }
        }
       
         //validaciones hechas por mi
         if(e.target.id === 'email' && e.target.value.length > 60) {
            mostrarAlerta('Máximo caracteres alcanzado', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        if(e.target.id === 'asunto' && e.target.value.length > 80) {
            mostrarAlerta('Máximo caracteres alcanzado', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        if(e.target.id === 'mensaje' && e.target.value.length > 300) {
            mostrarAlerta('Máximo caracteres alcanzado', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        //
       
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es válido', e.target.parentElement) //si es false
            email[e.target.name] = ''; //reiniciamos el objeto, borramos el objeto (q no se guarde cuando me salgo)
            comprobarEmail();
            return;
        }
        //console.log('despues del if');
        limpiarAlerta(e.target.parentElement);

        //asignar valores, si el codigo llega a ejecutarse hasta aqui, quiere decir q paso la validacion
        email[e.target.name] = e.target.value.trim().toLowerCase(); //aqui tambn queremos eliminar espacios y que este todo en minusculas
        //console.log(email); //se llena el email,el asunto y el mensaje(por el name del html) (el objeto email,asunto y mensaje)
        //comprobar objeto Email:
        comprobarEmail();

    } //con esta funcion eliminamos los callbacks, y evitamos el duplicado del codigo

    function mostrarAlerta(mensaje, referencia) {
       limpiarAlerta(referencia);

        //console.log('error');
        //Mostrar alerta en html:
        const error = document.createElement('P');
       // error.textContent = 'Hubo un error...'; //con innerHTML no escapa los datos, es inseguro y se arriesga a ataques de seguridad informatica
       error.textContent = mensaje;
       //console.log(error);

        //agregar estilos al parrafo:
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center','alerta');
        //inyectar error al form html:
        // formulario.appendChild(error); //appendChild agrega elemento a lo ya existente
        referencia.appendChild(error);
        //aparecera debajo del div
    }

    //codigo hecho por mi
    function mostrarAlertaPregunta(mensaje) {
        if (confirm(mensaje) == false) {
            return;
          } //PROXIMA VEZ AÑADIR CSS QUE TENGA VENTANA DE ADVERTENCIA CON SI O NO
          resetFormulario();
          resetExtra();     
     }
     //

    function limpiarAlerta(referencia) {
        //console.log('desde limpiar alerta');
        //comprueba si ya existe una alerta
        const existeAlerta = referencia.querySelector('.alerta'); //que solo busque esa alerta en la referencia, exactamente el div del email, del asunto o el msje
        if(existeAlerta) {
            existeAlerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ //expresion regular, busca patron en cadena de texto //retorna true o false
        const resultado = regex.test(email);
        //console.log(resultado); //true o false
        return resultado;
    }

    function comprobarEmail() {
        //.values pone objeto en un arreglo, includes es metodo de arreglo, y verifica si esta vacio con ''
       //  console.log(Object.values(email).includes(''));
       console.log(email); //ver como se llena objeto
       if(Object.values(email).includes('')){ //retorna true si al menos uno esta vacio
         btnSubmit.classList.add('opacity-50'); //vuelvo a activar clase opacity-50
         btnSubmit.disabled = true;
         return; //le agregamos return en vez del else
       } //else {
    //      btnSubmit.classList.remove('opacity-50'); //eliminar clase opacity-50
    //      btnSubmit.disabled = false; //eliminar clase disabled
    //    }
        btnSubmit.classList.remove('opacity-50'); //eliminar clase opacity-50
        btnSubmit.disabled = false; //eliminar clase disabled
    }

    // function comprobarExtra(){
    //     if(Object.values(extraEmail).includes('')){ //retorna true si al menos uno esta vacio
    //         btnSubmit.classList.add('opacity-50'); //eliminar clase opacity-50
    //          btnSubmit.disabled = true; 
    //         return; //le agregamos return en vez del else
    //       }
    //     btnSubmit.classList.remove('opacity-50'); //eliminar clase opacity-50
    //     btnSubmit.disabled = false; //eliminar clase disabled
    // }

    //se resetea porque en button hay un atributo "reset" en el HTML, pero queremos preguntarle al usuario si realmente quiere eliminar los campos:
    function resetFormulario(){
        //reiniciar el objeto email:
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        extraEmail.extra = '';
        
        formulario.reset();
        comprobarEmail(); //que no se pueda enviar una vez vaciamos el objeto
    }

    // function resetExtra(){
    //     extraEmail.extra = '';
    //     formulario.reset();
    //     comprobarEmail();
    // }

    function validarExtra(e) {
        console.log(e.target.id);
        if(e.target.value.trim() === ''){
            limpiarAlerta(e.target.parentElement);
        } else {
            if(e.target.id === 'extra' && !validarEmail(e.target.value)){
                mostrarAlerta('El extra no es válido', e.target.parentElement) //si es false
                extraEmail[e.target.name] = ''; //reiniciamos el objeto, borramos el objeto (q no se guarde cuando me salgo)
                comprobarEmail();
               // comprobarExtra();
                return;
            }
        }
        
        limpiarAlerta(e.target.parentElement);
        
        extraEmail[e.target.name] = e.target.value.trim().toLowerCase(); 
        comprobarEmail(extraEmail);
        console.log(email);
        console.log(extraEmail);

    }

});