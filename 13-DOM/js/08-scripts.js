//crear un enlace
const enlace = document.createElement('A'); //<a></a>
enlace.textContent= 'Nuevo Enlace';
//añadiendo href:
enlace.href = '/nuevo-enlace';
enlace.target = '_blanck';
console.log(enlace);

//seleccionar navegacion para mostrar enlace:
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //agregar un nuevo hijo a la navegacion, el enlace
//*No cambian los estilos 
//appendchild lo coloca al final de los otros elementos hermanos

//insertBefore se coloca donde queremos, lleva 2 argumentos: lo q inserto y donde(nodo de referencia)
navegacion.insertBefore(enlace, navegacion.children[1]);//insertar enlace antes de posicion 1 de navegacion

//colocar atributo personalizado en html:
enlace.setAttribute('data-enlace', 'nuevo-enlace');
//nueva clase con html:
enlace.classList.add('alguna-clase');

//le agrega funcion cuando elemento se ha creado:
enlace.onclick = miFuncion;
// function miFuncion(){alert(message?: any) void
//     alert('diste click');

// }

//crear un Card de forma dinamica (parrafos):
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('Categoria', 'concierto');
const parrafo2 = document.createElement('P');
parrafo2.textContent ='Concierto de Rock';
parrafo2.classList.add('titulo');
const parrafo3 = document.createElement('P');
//DOM Scripting(estilos):
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');

//crear div con clase de info
const info = document.createElement('div');
info.classList.add('info');
//orden es importante, 1ero de arriba hacia abajo
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear imagen:
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
//bootstrap:
imagen.classList.add('img-fluid');
//alt
imagen.alt = 'Texto alternativ0';
//se puede asi construir todo el html

//div padre:
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen, ya que elelemento ya esta creado
card.appendChild(imagen);

//asignar info
card.appendChild(info);

console.log(parrafo1);

//decidir donde INSERTAR en HTML:
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);//insertar al final
//insertar al inicio:
contenedor.insertBefore(card, contenedor.children[0]);