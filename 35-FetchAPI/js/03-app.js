const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

//si los quisiera de forma automatica los datos:
//cargarJSONArrayBtn.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido');
    let html = '';
    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Nombre: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `; //itero y concateno a la vez en la var html

        contenido.innerHTML = html;
    })
}