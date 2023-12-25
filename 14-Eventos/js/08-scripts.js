//tercera forma de evitar bubbling: asociarlo a función

// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
//esto lo escribo yo:
parrafo3.onclick = nuevaFuncion; //le estamos asociando una funcion cuando le demos click al precio
//O con parametros:
parrafo3.onclick = function () {
    nuevaFuncion(1);
}
//o con arrow function:
parrafo3.onclick = () =>  {
    nuevaFuncion(1);
}

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

//esto lo escribo yo:
//declaracion de funcion:
function nuevaFuncion () {
    console.log('desde nueva funcion');
}
//con parametros:
function nuevaFuncion(id) {
    console.log('desde nueva funcion',id)
}