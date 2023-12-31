//variables
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
//agregar elementos al carrito, se va actualizando por eso es let
let articulosCarrito = [];

//vamos a tener muchos addEventListeners, entonces hacemos una funcion que los va a contener
//a todos:
registrarEventListeners();
function registrarEventListeners () {
    //primer listener: listado de cursos: agregar al carrito ese curso:
    //Cuando agregas curso presionando "Agregar al carrito":
    listaCursos.addEventListener('click', agregarCurso);

    //Eliminar cursos del carrito:
    carrito.addEventListener('click', eliminarCurso);


    //Si recargo pagina quiero que elementos de la storage se mantengan en el HTML (si no hago este paso, se borran del html pero se mantienen en localstorage):
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });
    

    //vaciar el carrito: es poco codigo por lo q ejecutamos funcion anonima
    vaciarCarritoBtn.addEventListener('click', () => {
        // console.log('vaciando');
        articulosCarrito = []; //resetear el arreglo (el carrito)
        //console.log(articulosCarrito); //arreglo esta vacio pero no el html

        //como el arreglo ya esta vacío, se eliminan los elementos que hayan(la ultinma copia):
        limpiarHTML(); //eliminamos todo el html

    });


}

//Funciones:
function agregarCurso (e) {
    e.preventDefault();//para que no recargue pagina
   // console.log('presionando en cursos');
   //prevenir event bubbling
   // console.log(e.target);
   // console.log(e.target.classList);
   //verificar si elemento q presionamos contiene clase agregar-carrito entonces que lo agregue al carrito:
   if(e.target.classList.contains('agregar-carrito')){
    //console.log('agregando al carrito');
    //console.log(e.target);
    //console.log(e.target.parentElement.parentElement); para no escribir todo esto, lo guardamos en la variable cursoSeleccionado
    const cursoSeleccionado = e.target.parentElement.parentElement;//va al padre del padre, es decir, card. Para extraer info y mostrarla en la funcion de leerDatosCurso
    leerDatosCurso(cursoSeleccionado);
   }
}

//Eliminar curso del carrito:
function eliminarCurso (e) {
   // console.log('desde eliminar curso');
   console.log(e.target.classList);
   if(e.target.classList.contains('borrar-curso')) {
    //console.log(e.target.getAttribute('data-id'));
    const cursoId = e.target.getAttribute('data-id');
    //elimina del arreglo articulosCarrito a traves de data-id
    articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId); //que traiga todos al arreglo articulosCarrito menos el que quiero eliminar 
    // console.log(articulosCarrito); queda vacio en consola una vez elimino todos, pero en html queda igual:
    carritoHTML(); //volver a iterar sobre el carrito y mostrar su html, cambio html
    }
}

//lee contenido HTML del curso y extrae su info al hacer click:
function leerDatosCurso(curso) {
    //console.log(curso); //toma todo contenido del curso

    //crear objeto con contenido del curso:
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
       // autor: curso.querySelector('p').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    //revisa si elemento ya existe en el carrito, para ir agregando cantidad luego, y q no se repita si lo presiono 2 veces o mas:
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id); //viendo si existe en el carrito, en el objeto, el elemento (id) que estamos iterando
   // console.log(existe);
    if(existe) {
        //Actualizamos cantidad
        //iteramos sobre cada elemento del carrito y agregamos nuevo arreglo
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //se le asigna el valor actualizado a ese nuevo arreglo //retorna el objeto actualizado, si está duplicado y existe
            } else {
                return curso; //mismo valor de antes al arreglo //retorna los objetos que no son duplicados, pero que siguen siendo parte del carrito
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agregamos curso al carrito:
        //agregar elementos al arreglo de carrito:
        articulosCarrito = [...articulosCarrito, infoCurso]; //no pierde referencia si voy agregando copias por cada elemento q agrego, con spread Operatior (...)
    }

   // console.log(infoCurso);
   //agregar curso (else)
   //y vamos agregando el objeto cada copia q hacemos infoCurso
   //lo vemos asi:
   console.log(articulosCarrito);//inicia vacio, pero se va llenando cuando damos click

   //ver que se agregue al tbody:
   carritoHTML();
}

//muestra el carrito de compras en el TBody (en la lista de carrito de compras):
function carritoHTML(){
    //limpiar html para q no se duplique:
    limpiarHTML();
    //recorre carrito y genera html
    articulosCarrito.forEach( curso => {
        //(mejorar codigo: destructuring:)
        const {imagen, titulo, precio, cantidad, id} = curso;
        //crear elemento tr para el tablebody, y dentro de este, colocamos cada elemento td:
        const row = document.createElement('tr');
        //templateString o templateLiteral:
        row.innerHTML = `
            <td>
                <!--<img src = "${curso.imagen}" width="100px" /> agrego imagen sin destructuring-->
                <img src = "${imagen}" width="100px" />
            </td>

            <td>
                ${titulo}
            </td>

            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id = "${id}"> X </a>
            </td>
        `;

        //agrega html del carrito en el tbody:
        listaCarrito.appendChild(row); //añadir cada row en cada iteracion
    });

    //agregar carrito a localSTORAGE
    //carritoHTML manda a llamar a la que sincroniza con storage porque ahi se agreegan y quitan elementos del html
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito)); //le pasamos el array donde se guardan elementos del carrito (definido en consts)
}

//elimina los cursos del tbody:
function limpiarHTML(){
    //forma lenta de limpiar el html:
    // listaCarrito.innerHTML = '';
    //para mejor performance, en lugar de usar innerHTML, es mejor usar un while:
    while(listaCarrito.firstChild) { //si el carrito tiene al menos un elemento dentro, el codigo se seguira ejecutando, pero cuando este limpio ese elemento, ya no se ejecuta
        listaCarrito.removeChild(listaCarrito.firstChild);
    }//siempre va a ser el primer hijo en cada vuelta q lo eliminemos, y esa lista (copia) se ira eliminando a medida que vayamos agregando mas elementos al carrito
} //limpia html que ya generó anteriormente, por el actualizado, con la copia que tienen todos los cursos q he agregado, sin tener la copia anterior