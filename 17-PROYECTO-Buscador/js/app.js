//*PROYECTO QUE VE LAS BASES DE LA PROGRAMACIÓN FUNCIONAL*

//console.log(autos);

//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
  
const resultado = document.querySelector('#resultado');

const maxYear = new Date().getFullYear(); //trae año actual
const minYear = maxYear - 10;

//console.log(maxYear);
//console.log(minYear);
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


//Eventos 
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //una vez que cargue html llamare a esta funcion //muestra los autos al cargar

    //llena las opciones de años:
    llenarSelect();

});

//Event listeners para los select de busqueda
marca.addEventListener('change', e => { //change se usa para los select. Detecta cuando cambio de opcion
    //console.log('Cambió...');
    //valor:
    //console.log(e.target.value);
    datosBusqueda.marca = e.target.value;
    console.log(datosBusqueda);

    //filtrar por marca
    filtrarAuto();
});

year.addEventListener('change', e => { 
    datosBusqueda.year = parseInt(e.target.value);
    console.log(datosBusqueda);
    filtrarAuto();
});

minimo.addEventListener('change', e => { 
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});

maximo.addEventListener('change', e => { 
    datosBusqueda.maximo = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});

puertas.addEventListener('change', e => { 
    datosBusqueda.puertas = parseInt(e.target.value);
    console.log(datosBusqueda);
    filtrarAuto();
});

transmision.addEventListener('change', e => { 
    datosBusqueda.transmision = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});

color.addEventListener('change', e => { 
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});

//Funciones 
function mostrarAutos(autos){

    limpiarHTML(); //elimina html previo
    //iteramos sobre cada auto
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p'); //crea parrafo para cada automovil
        autoHTML.textContent = ` 
            ${marca} ${modelo} - ${year} - ${puertas} puertas - color ${color} - Transmisión en ${transmision} - Precio: $${precio}
        `;

        //insertar en el html:
        resultado.appendChild(autoHTML);//los va a poner al final pero no va a limpiar por si mismo los anteriores resultados
    });
}

function limpiarHTML() {
    while(resultado.firstChild){ //mientras haya algo
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select:
function llenarSelect() {
    //console.log('llenando el select...');
    for(let i = maxYear; i >= minYear; i--) { //corremos años hacia atras, para que luego se muestre asi, de adelante a atras
        // console.log(i);
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega cada opcion de año al select
    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto() {
    //console.log('filtrando');
    //Array method filter:
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //funcion de alto nivel (funcion que toma otra funcion como parametro, en este caso filtrarMarca,etc)
    //encadenamiento o enchanged (varios .filter consecutivos)

    //leo los resultados ya filtrados en las funciones filtrarMarca, etc.:
    //console.log(resultado);
    // mostrarAutos(resultado); // mostrar en html el resultado filtrado

    //en caso de que no hayan resultados en la bd de la busqueda con los filtros seleccionados por el usuario:
    if (resultado.length){//si resultado tiene algo
        mostrarAutos(resultado);
    } else {
        noResultado();
    }

}

function noResultado() {

    limpiarHTML(); //limpiamos para que no quede lo anterior 
    //crear div con alerta de no hay resultado:
    const noResultado = document.createElement('div');
    //le agregamos 2 clases:
    noResultado.classList.add('alerta', 'error');
    //le agregamos contenido:
    noResultado.textContent = 'No hay resultados'; 
    //lo ponemos al final:
    resultado.appendChild(noResultado);

}

function filtrarMarca(auto) { //itera automaticamente por todo el arreglo db(.filter itera sobre un arreglo)
    //console.log(auto);
    const {marca} = datosBusqueda;
    if (marca){ //si marca no esta vacio
        return auto.marca === marca; //que retorne las marcas que sean iguales a los datos de busqueda del usuario en marca
    }
    return auto; //sino filtra por marca, que me arroje todos los autos (q no se pierdan)
}
function filtrarYear(auto) { 
    const {year} = datosBusqueda;
    //console.log(typeof year); //string (formulario html)
    //console.log(typeof auto.year);//number (db)
    //transformar a number:

    if (year){ 
        //return auto.year === parseInt(year); /puedo hacerlo en el listener mejor para q no quede con tanta logica

        return auto.year === year; 
    }
    return auto;
}
function filtrarMinimo(auto) { 
    const {minimo} = datosBusqueda;
    //console.log(typeof minimo);//string
    //console.log(typeof auto.precio);//number
    if (minimo){ 
        return auto.precio >= minimo; //resultado debe ser mayor o igual al que el usuario seleccione
        //no es operador estricto, por tanto no distingue entre strings y numbers
    }
    return auto;
}
function filtrarMaximo(auto) { 
    const {maximo} = datosBusqueda;
    if (maximo){ 
        return auto.precio <= maximo; 
    }
    return auto;
}
function filtrarPuertas(auto) { 
    const {puertas} = datosBusqueda;
    if (puertas){ 
        return auto.puertas === puertas; 
    }
    return auto;
}
function filtrarTransmision(auto) { 
    const {transmision} = datosBusqueda;
    if (transmision){ 
        return auto.transmision === transmision; 
    }
    return auto;
}
function filtrarColor(auto) { 
    const {color} = datosBusqueda;
    if (color){ 
        return auto.color === color; 
    }
    return auto;
}
