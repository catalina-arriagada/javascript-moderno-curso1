const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

//cuantos registros quiero que traiga la api por pagina de paginacion
const registroPorPagina = 40; 
let totalPaginas; //cada vez q hago consulta valor cambia
let iterador; //generador

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();
    const terminoBusqueda = document.querySelector('#termino').value;
    if(terminoBusqueda === ''){
        //console.log('termino de busqueda vacio agrega uno')
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }
    //ir a la api de pixabay:
    buscarImagenes(terminoBusqueda);
}

function mostrarAlerta(mensaje){

    //borrar si ya existe alerta: 1. le creamos una variable con clase ya existente en la alerta para que la identifique
    const existeAlerta = document.querySelector('.bg-red-100');

    //borrar si ya existe alerta: 2. preguntamos si no existe alerta, y que ejecute todo para que se muestre alerta sino existe
    if(!existeAlerta) {
        const alerta = document.createElement('P');
        alerta.classList.add('bg-red-100', 'border-red-400','text-red-700',
        'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
            `;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

//llamar API
//le pasamos el termino de la busqueda:
function buscarImagenes(termino){
    const key = '41658461-434fd9820321386c26691ddf0'; //TU API KEY
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=28`;
    //comprobar 
    //console.log(url)
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            //console.log(resultado.hits)//en documentacion y objeto esta que .hits accede a las imagenes
            totalPaginas = calcularPaginas(resultado.totalHits); //llamo el total de imagenes 
            console.log(totalPaginas);
            mostrarImagenes(resultado.hits)//en documentacion y objeto esta que .hits accede a las imagenes
        })
}

//generador que registra cantidad de elementos segun paginas
function *crearPaginador(total){
    for(let i = 1; i <= total; i++){
        //console.log(i)
        yield i; //registrar el valor
    }
}

function calcularPaginas(total){
    //la division no da numero entero, el numero de paginacion debe ser entero
    //return parseInt(Math.ceil(500/30)); //pasa a entero y redondea
    return parseInt(Math.ceil(total/registroPorPagina)); //pasa a entero y redondea hacia arriba
    //nos pasa cantidad de paginas de acuerdo al termino q estamos buscando
}

function mostrarImagenes(imagenes){
    console.log(imagenes);
    limpiarHTML(resultado);

    //iterar sobre las imagenes
    imagenes.forEach(imagen => {
        //extrar la info del arreglo:
        const {previewURL, likes, views, largeImageURL} = imagen;

        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}" />
                <div class="p-4">
                    <p class="font-bold">${likes}<span class="font-light"> Me Gusta</span></p>
                    <p class="font-bold">${views}<span class="font-light"> Veces Vista</span></p>
                    <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                    href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagen</a> 
                </div>
            </div>
        </div>
        `; //rel="noopener nofer" es para asegurarnos de que target _blank no va a ser inseguro para nuestra pagina 
    });
    imprimirPaginador();
}

function limpiarHTML(limpiar){
    while(limpiar.firstChild){
        limpiar.removeChild(limpiar.firstChild);
    }
}

//generador 
function imprimirPaginador(){ 
    iterador = crearPaginador(totalPaginas);
    //console.log(iterador.next())//nos esta generando las 13 paginas
}
