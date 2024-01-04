//consumir una respuesta de una api:
//api que permite descargar imagenes 
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado))    
}

function mostrarHTML(datos){
    const contenido = document.querySelector('.contenido');
    let html = '';
    datos.forEach(perfil => {
        const { format, width, height, filename, id, author, author_url, post_url} = perfil;

        html += `
            <p>format: ${format}</p>
            <p>width: ${width}</p>
            <p>height: ${height}</p>
            <p>filename: ${filename}</p>
            <p>id: ${id}</p>
            <p>author: ${author}</p>
            <p>author_url: ${author_url}</p>
            <p>post_url: ${post_url}</p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `; //itero y concateno a la vez en la var html

        contenido.innerHTML = html;
    })
}