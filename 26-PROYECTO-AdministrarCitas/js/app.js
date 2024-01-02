const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

eventListeners();

function eventListeners() {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);
    formulario.addEventListener('submit', nuevaCita);
}

let editando;

class Citas {
    constructor(){
        this.citas = []; //no tomara nada pero creara arreglo de citas, se va a ir llenando a medida q añadamos citas
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada){
        //si son iguales cita.id con citaactualizada.id reescribe lo que tenga por la cita actualizada, else sino retorna la cita actual
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}

class UI {

    imprimirAlerta(mensaje, tipo){
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        //Agregar clase en base al tipo error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success'); 
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //agregar al DOM : div global dnde quiero ponerlo.insertBefore(variable del mensaje,ubicacion osea id o variable)
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //quitar alerta despues de 5 seg
        setTimeout(() =>{
            divMensaje.remove();
        }, 5000);
    }

    imprimirCitas({citas}){ //{} puedo hacer destructuring aqui, extraer citas desde aqui (se llama igual el array y su contenedor (citas))
        //console.log(citas); //ahora entra directamente al array
        this.limpiarHTML();
        
        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            //scripting de elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-weight-bolder');
            mascotaParrafo.textContent = mascota;
            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class= "font-weight-bolder">Propietario: </span> ${propietario}
            
            `;
            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class= "font-weight-bolder">Teléfono: </span> ${telefono}
            
            `;
            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
            <span class= "font-weight-bolder">Fecha: </span> ${fecha}
        
        `;
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
            <span class= "font-weight-bolder">Hora: </span> ${hora}
        
        `;
            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
            <span class= "font-weight-bolder">Síntomas: </span> ${sintomas}
        
            `;

            //boton para eliminar cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2');
            btnEliminar.innerHTML = `Eliminar <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
            </svg>`; //heroicons.dev

            //hasta q le de click manda a llamar gasto y le pasa el id:
            btnEliminar.onclick = () => {
                eliminarCita(id);
            }

            //Boton para editar citas
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = `Editar <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
            </svg>`;

            btnEditar.onclick = () => {
                cargarEdicion(cita);
            }

            //agregar parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //agregar citas al html
            contenedorCitas.appendChild(divCita);

        });
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

//instanciar clases
const ui = new UI();
const administrarCitas = new Citas();

//que se vaya llenando el objeto a medida que vaya escribiendo, para eso el name en html tiene q estar bien definido y llamarse como propiedad del objeto
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

function datosCita(e){
   // console.log(e.target.name); //para que vaya leyendo sobre el objeto en la propiedad indicada por el html

    citaObj[e.target.name] = e.target.value; //escribir sobre este objeto citaObj
    console.log(citaObj);

}

//valida y agrega nueva cita a clase de citas:
function nuevaCita(e){
    e.preventDefault();
    //extraer info de objeto de citas:
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;
    //validar 
    if(mascota === ''|| propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        //console.log('Todos los campos son obligatorios')
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    //modo edicion
    if(editando){//si variable editando es true
        //console.log('editando')
        ui.imprimirAlerta('Editado correctamente');
        //pasar objeto de la cita a edicion
        //le pasa  cita a editar cita
        administrarCitas.editarCita({...citaObj});

        //regresar texto de boton a su estado original
        //el boton vuelve a su valor 'crear cita' (ya no se queda en guardar cambios)
        formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
        //que vuelva a su valor original la variable -quitar modo edicion
        editando = false;//reinicio de form
    }else{
       // console.log('nueva cita')
       //generar id unico
        citaObj.id = Date.now();

        //crear nueva cita:
        //console.log(citaObj);
        administrarCitas.agregarCita({...citaObj}); //hay q tomar copia de objeto para q no se pase el global tambien, y por tanto no se repita con ...
        //mensaje de agregado correctamnet
        ui.imprimirAlerta('Se agregó correctamente');
    }

    
    //reiniciar objeto para validacion
    reiniciarObjeto();
    
    //reiniciar form
    formulario.reset();

    //mostrar html de las citas
    ui.imprimirCitas(administrarCitas); //administrar citas contiene copia del arreglo

}

//reiniciar objeto
function reiniciarObjeto() {
    citaObj.mascota= '',
    citaObj.propietario= '',
    citaObj.telefono= '',
    citaObj.fecha= '',
    citaObj.hora= '',
    citaObj.sintomas=''
}

function eliminarCita(id){
    //console.log(id);
    //eliminar cita - metodo dentro de clase
    administrarCitas.eliminarCita(id);
    //muestra mensaje - metodo dentro de clase
    ui.imprimirAlerta('La cita se eliminó exitosamente');
    //refresca cita - metodo dentro de clase
    ui.imprimirCitas(administrarCitas);//va a mostrar en el html las citas que queden que no se hayan eliminado//va a iterar otra vez
}

function cargarEdicion(cita){
    //console.log(cita);
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
    //llenar los input
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //cambiar texto boton al editar
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    editando = true;
 
    //lenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
}


