//api que permite salir de pantalla completa (ej en yt se puede poner pantalla completa con icono)

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
   // 'document.documentElement' en consola trae todo el document html
   //requestFullscreen() llama a la api
   document.documentElement.requestFullscreen();
   
   // document.documentElement : Esta propiedad es de sólo-lectura, facilitada para obtener el elemento raíz de cualquier documento.
    // Los documentos HTML contienen normalmente un único hijo directo, <html>, quizá con una declaración DOCTYPE 
    //antes que él. Los documento XML contienen a menudo, múltiples hijos: el elemento raíz, la declaración DOCTYPE y processing instructions.
    // Por tanto, deberías usar document.documentElement en lugar de document.firstChild para obtener el elemento raíz.
}

function cerrarPantallaCompleta() {
    //requestFullscreen() llama a la api
    document.exitFullscreen(); //document es el mismo pero sin pantalla completa
    //document hace referencia a la ventana window

    
}