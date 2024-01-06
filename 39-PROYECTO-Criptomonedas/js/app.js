const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

//crear objeto de busqueda
const objBusqueda = {
    moneda : '', //mismo nombre que "name" en el select html
    criptomoneda : '' //mismo nombre que "name" en el select html
}

//crear promise
const obtenerCriptomonedas = criptomonedas => new Promise (resolve => {
    resolve(criptomonedas);
}); //se ejecuta solo si resuelve (si puede descargar todas las criptos)

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
})

function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'; //10 criptos mas populares y usadas

    fetch(url)
        .then(respuesta => respuesta.json())
        //Data es clase del objeto del resultado que contiene las criptos
        .then(resultado => obtenerCriptomonedas(resultado.Data //console.log(resultado.Data
            )) 

        //promise que resuelva solo cuando criptos se hayan descargado
        .then(criptomonedas => selectCriptomonedas(criptomonedas)//console.log(criptomonedas)
            
            ) //la promesa reemplaza el callback de proyectos anteriores
}

function selectCriptomonedas(criptomonedas){
    //criptomonedas es un array, iteramos:
    criptomonedas.forEach(cripto => {
        //console.log(cripto)
        const{FullName, Name} = cripto.CoinInfo;
        const option = document.createElement('option');
        option.value = Name;//codigo
        option.textContent = FullName;//lo que el usuario pueda entender su moneda
        criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
    
    console.log(objBusqueda);
}

function submitFormulario(e){
    e.preventDefault();

    //validar
    const {moneda, criptomoneda} = objBusqueda;
    if(moneda==='' || criptomoneda ===''){
        //console.log('Ambos campos son obligatorios');
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    //Consultar API con los resultados
    consultarAPI();

}

function mostrarAlerta(mensaje){
    //console.log(mensaje)
    const existeAlerta = document.querySelector('.error');

    if(!existeAlerta){
        const alerta = document.createElement('div');
        alerta.classList.add('error');
        alerta.textContent = mensaje;
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    } 
}

function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    //Mostrar spinner justo antes de llamar a la api
    mostrarSpinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        //.then(resultado => console.log(resultado.DISPLAY[criptomoneda][moneda]))
        .then(resultado => mostrarCotizacionHTML(resultado.DISPLAY[criptomoneda][moneda]))
}

function mostrarCotizacionHTML(cotizacion){
    //console.log(cotizacion) 
    limpiarHTML(resultado);
    const{PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;
    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El precio más alto del día: <span>${HIGHDAY}</span>`;
    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `El precio más bajo del día: <span>${LOWDAY}</span>`;
    const ultimasHrs = document.createElement('p');
    ultimasHrs.innerHTML = `Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}</span>`;
    const lastUpdate = document.createElement('p');
    lastUpdate.innerHTML = `Última actualización: <span>${LASTUPDATE}</span>`;
    
    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHrs);
    resultado.appendChild(lastUpdate);
    
}

function limpiarHTML(limpio){
    while(limpio.firstChild){
        limpio.removeChild(limpio.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML(resultado);

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    `;
    resultado.appendChild(spinner);
}
