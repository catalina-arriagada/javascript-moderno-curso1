//un json es similar a objeto de js, pero las keys tienen que estar dentro de un string
//JSON es una tecnologia "de transporte", que la respuesta se imprima no en el lenguaje sql u otra, pq otra no la entiende js, json si. 
//forma de conectar datos en apps en distintos lenguajes

const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';
    fetch(url)
        //.then(respuesta => {
        // console.log(respuesta);
        // return respuesta.json()
        //     .then(datos => {
        //         console.log(datos);
        //         return datos;
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        //})
        //same:
        .then(respuesta => respuesta.json())
        .then(datos => mostrarHTML(datos))
        .catch(error => console.log(error))
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}

