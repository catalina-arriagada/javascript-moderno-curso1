const divContenido = document.querySelector('.contenido');

//levar codigo 02 callback hell a promise:
const paises = [];

const nuevoPais = pais => new Promise ( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(pais);
    }, 3000);
});

nuevoPais('Alemania')
    //despues del .then se ejecuta el resolve, la variable o parametro se llama de cualquier manera
    .then( resultado => {
        console.log(resultado); //dp de 3 segundos dice "Se agrego el pais Alemania"
        console.log(paises);
        imprimirMensaje(resultado);
        return nuevoPais('Francia');
}) //cuando se ejecute promise de nuevo pais que sucede:
.then (resultado => {
    console.log(resultado);
    imprimirMensaje(resultado);
    console.log(paises);
    return nuevoPais('Belgica');
})
.then(resultado =>{
    console.log(resultado);
    imprimirMensaje(resultado);
    console.log(paises);
})


function imprimirMensaje(mensaje, tipo){
    const parrafoMensaje = document.createElement('p');
    parrafoMensaje.classList.add('parrafoCustom');

    if(tipo === 'error'){
        parrafoMensaje.classList.add('alerta-error');
    } else{
        parrafoMensaje.classList.add('alerta-exito');
    }

    parrafoMensaje.textContent = mensaje;

    //insertar en html
    document.querySelector('body').insertBefore(parrafoMensaje, divContenido); //insert before toma 2 argumentos: mensaje o que vamos a colocar, y en que parte (antes de que )

    setTimeout(() => {
        parrafoMensaje.remove();
    }, 5000);
}

