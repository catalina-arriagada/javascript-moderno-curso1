//ej cuando estas viendo video en instagram y video se detiene porque cambias de pestaña
//como saben que ya no estas viendo su pagina?
//api: visibility state
//document.visibilityState (consola)

document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);
    //2 estados: 'visible' (marca esto cuando estas viendo) y 'hidden' (marca esto cuando NO estas viendo)

    if(document.visibilityState === 'visible') {
        console.log('Ejecutar la funcion para reproducir el video');
    } else {
        console.log('pausar el video, no estas mirando');
    }
});

//existe api de geolocalizacion : ej para uber o gps
//existe otra api que se llama fetch api




