//si no esta conectado que salga algo sino otra cosa
//navigator.onLine reporta true o false
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine){
        console.log('estas online');
    } else {
        console.log('no estas conectado');
    }
} //el evento se dispara cuando me conecto o desconecto de internet. Si permanezco conectado desde antes no se dispara