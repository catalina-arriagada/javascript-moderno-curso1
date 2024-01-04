//SpeechAPI o SpeechRecognition
//permite que cuando hable persona en microfono se reconozca lo que digo y se escriba en pagina web
//Ej: buscador google home asistance, alexa, siri

const salida = document.querySelector('#salida');
const microfonoBtn = document.querySelector('#microfono');

microfonoBtn.addEventListener('click', ejecutarSpeechAPI);

//el usuario debe dar permisos para acceder al microfono
//son pocos navegadores los que soportan speechAPI: los de android, chrome y edge. (firefox ni safari lo soportan)
function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition; //webkitSpeechRecognition (no escribir de otra manera esta funcion, esta en la ventana global del navegador) chrome funciona sobre webkit
    //crear nuevo objeto o instancia de SpeechRecognition
    const recognition = new SpeechRecognition();
    //Tiene 3 etapas: 1. Arrancar recognition 2. comenzar a escuchar, 3. mostrar resultado (lo que usuario habló):
    //1
    recognition.start();
    //2
    recognition.onstart = function(){
        salida.classList.add('mostrar'); //que se muestre ese div de salida con clase mostrar
        salida.textContent = 'Escuchando...'; //que se añada este texto al div salida
    };

    //3 > cuando hayamos terminado de hablar
    recognition.onspeechend = function() {
        salida.textContent = 'Se dejo de grabar'
        recognition.stop(); //detener la deteccion de voz
    }

    //4: onresult: cuando pase a texto lo que diga en el microfono
    recognition.onresult = function(e){
        console.log(e.results); //confidence es que tan seguro esta de lo que se dijo en el microfono
        //mientras sean palabras sencillas las reconocera, mientras no no 0.9... es alto mientras mas cerca del 1 mas alto
        
        //indices de consola:
        console.log(e.results[0][0]); //para que me de la confidence y la transcription (lo q dije eb texto)

        setTimeout(() => {
            const {confidence, transcript} = e.results[0][0]; //accedemos al objeto
            const speech = document.createElement('p'); //crear p para guardar lo que digo
            speech.innerHTML = `Grabado ${transcript} 
                                </br>Qué tan seguro estoy de lo que dices: ${parseInt(confidence*100)}%
                            `;

            //lo agrego despues de salida en el html
            salida.appendChild(speech);
        }, 100);
    }   
}



// Creo que el problema está es que onspeechend se ejecuta después de onresult sobreescribiendo el resultado. Mi solución fue ponerle un setTimeout a onresult
//para ejecutarlo despues del onspeechend:

// recognition.onspeechend = function () {
//         salida.textContent = 'Se dejo de grabar';
//         recognition.stop();
//     }
 
//     recognition.onresult = function (e) {
//         //console.log(e.results); // Este es el objeto completo
//         setTimeout(() => {
//             console.log(e.results[0][0]);
//             const { confidence, transcript } = e.results[0][0];
//             console.log(transcript);
//             const speech = document.createElement('P');
//             speech.innerHTML = `Grabado: ${transcript}`;
//             salida.textContent = '';
//             salida.appendChild(speech);
//         }, 1000);
