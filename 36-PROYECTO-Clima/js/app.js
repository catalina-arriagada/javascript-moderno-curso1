const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => { //es similar a DOMContentLoaded es en document, window es en la ventana window
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();
    console.log('buscando el clima');

    //validar 
    //muchas api requieren que les pases info como ellos la requieran, no como se me ocurre
    //ciudad y pais son obligatorios en este api
    //En el value la api pide que lo envies como 2 digitos(value html)
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === ''){
        mostrarError('Ambos campos son obligatorios');
        return;
    }
    //consultar api
    //ver si ciudad existe o no
    consultarAPI(pais, ciudad); 
}


function mostrarError(mensaje){
    console.log(mensaje)
    //para que no se repita alerta:
    const alerta = document.querySelector('.alerta');
    if(!alerta){//sino hay alerta:
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center', 'alerta');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);

        //que se elimine alerta despues de 5 segundo:
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }//si hay alerta ya no se vuelve a generar otra   
}

function consultarAPI(ciudad, pais){
    const appId = ''; //COLOCAR TU API KEY
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    Spinner(); //https://tobiasahlin.com/spinkit/

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        console.log(datos);
        limpiarHTML();
        if(datos.cod === "404") {
          mostrarError('Ciudad No Encontrada')
        } else {
          mostrarHTML(datos)
        }
      })
      .catch(error => {
        console.log(error)
      });
}

function mostrarHTML(datos){
    const ciudad = document.querySelector('#ciudad').value;
    const {main: {temp, temp_max, temp_min}} = datos;
    const tempCentigrados = kelvinACelcius(temp);
    const max = kelvinACelcius(temp_max);
    const min = kelvinACelcius(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${ciudad}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');
    
    const actual = document.createElement('p');
    actual.innerHTML = `${tempCentigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('p');
    tempMax.innerHTML = `Max: ${max} &#8451;`;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('p');
    tempMin.innerHTML = `Min: ${min} &#8451;`;
    tempMin.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad); 
    resultadoDiv.appendChild(actual); //le agrego actual a resultadoDiv
    resultadoDiv.appendChild(tempMax); 
    resultadoDiv.appendChild(tempMin); 

    resultado.appendChild(resultadoDiv);//lo agrego al div de resultado al final
}

const kelvinACelcius = grados => parseInt(grados - 273.15);

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function Spinner(){

    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');
    divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
    
    `;

    resultado.appendChild(divSpinner);
}





























//shift+tab=> indentar a la izq
