const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []; // donde se guarden tweets

eventListeners();
//event listeners
function eventListeners() {
    //cuando el usuario agrega nuevo twit
    formulario.addEventListener('submit', agregarTweet);//cuando se envie formulario

    //cuando el documento esta listo (cargado en su totalidad):
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem ('tweets')) || []; //||[] o si marca como null asignalo como arreglo vacio(si no hay nada en el array tweets, ningun tweet)
        //impide error de null, .length o foreach no son metodo de null
        console.log(tweets);
        crearHTML();
    });
}

//funciones
function agregarTweet(e){ 
    e.preventDefault();
    console.log('agregando twit');
    //vamos a leer el valor de eses tweet, en el textarea html donde el usuario escribe:
    const tweet = document.querySelector('#tweet').value;
    console.log(tweet);

    //validacion
    if(tweet == ''){
        console.log('el mensaje no puede ir vacio');
        mostrarError('Un mensaje no puede ir vacio');
        return; //previene q agreguen mas codigo ejecutable
    }

    //simular id aleatoria(segundos transcurridos desed 1970:)
    //crear objeto con tweet:
    const tweetObj = {
        id: Date.now(),
        //texto: tweet // es lo mismo que:
        //tweet: tweet //solo q se llama distinta la llave, y este es lo mismo que:
        tweet //porque se llaman igual llave y valor, se puede poner asi
    }

    console.log('agregando despues del if');//con return no se ejecuta esta linea, siempre y cuando este dentro de una funcion

    //añadir tweet al arreglo de twits:
    tweets = [... tweets, tweetObj]; //spread operator, creamos copia de l arreglo y le agregamos el tweet a tweets
    //añadimos tweetObj para q agregue id y texto
    console.log(tweets);

    //agregamos tweet a html:
    crearHTML();


    //REINICIAR formulario:
    formulario.reset();
}

//mostrar mensaje de error:
function mostrarError(error){
    //crear parrafo html con el error
    const mensajeError = document.createElement('P');
    //texto parrafo:
    mensajeError.textContent = error;
    //en css ya tenemos clase error previamente:
    mensajeError.classList.add('error');

    //insertar error en html:
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //elimina la alerta de error despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

//muestra listado de tweets en html
function crearHTML(){

    limpiarHTML();
    //solo se muestra esta funcion en caso de que tenga algo:
    if(tweets.length > 0){
        tweets.forEach( tweet => {
            //agregar boton eliminar html:
            const btnEliminar = document.createElement('a');
            btnEliminar.classList = 'borrar-tweet';
            btnEliminar.textContent = 'X';

            //añadir funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id); //llamaremos esta funcion cuando hagamos click
            };

            //crear el html:
            const li = document.createElement('li');
            //añadir texto a la variable li:
            li.innerText = tweet.tweet; //el segundo tweet es el que creo en el objeto
            
            //asignar el boton eliminar
            li.appendChild(btnEliminar);

            //insertar en html al final:
            listaTweets.appendChild(li);
        });
    }

    //una vez q se envian los twit
    sincronizarStorage();
}

function limpiarHTML(){
    while(listaTweets.firstChild){//mientras haya elementos
        listaTweets.removeChild(listaTweets.firstChild);//remueve el primer hijo q encuentre
    }
}

//agregatwits actuales a localstorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

//eliminar un tweet:
function borrarTweet(id) {
    console.log('borrando', id);
    tweets = tweets.filter(tweet => tweet.id !== id); //iterar sobre cada tweet //que sea distinto al id que le pasamos
    //quiero que se quede con todos menos con el que intento eliminar
    crearHTML();//queremos que se vuelva a iterar sobre tweets y se refresque pagina
}

    
