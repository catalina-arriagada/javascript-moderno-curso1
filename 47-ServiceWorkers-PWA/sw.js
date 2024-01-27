//En caso de que no haya conexión, mostrar archivos caché
//los guardamos en un array
const nombreCache = 'apv-v1'; //hay q crearle un nombre para llamarlo en el addeventl
const archivos = [
    './',////1ero se cachea la pagina principal sin el index
    './index.html', //cachear index
    './error.html',
    //Agregar solo las necesarias sino se pondra lento, solo 2 o 3, y pwa debe ser rapida
    './css/bootstrap.css',
    //podriamos cachear imagenes tambien
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
];


//Instalar el sw
//self de window
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');
   
    //decirle al sw que queremos cachear archivos
    //esperar a q instale primero archivos principales, y luego los mas pesados.Ej: bootstrap pesa mas q los demas
    //para ello existe funcion nativa:
    e.waitUntil( //esperar a q se descarguen todos los archivos de cache
        caches.open(nombreCache)
        .then(cache => {
            console.log('cacheando');
            cache.addAll(archivos)//agregar al cache. addAll para arreglos, si fuera uno sería .add
        })//ir a application/cacheStorage
    )

}); //se ejecuta una sola vez. Si vamos a application/sw nos dice que esta corriendo
//desde unregister puedo desinstalarlo

//Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado'); //NO sale porque se tiene que activar desde Application/waiting to activate >skipWaiting<. Luego de esto nos aparecera activado
   // console.log(e); 
   //Para que cuando actualice la version del programa (actualice algo) no se quede la version de cache guardada, sino que pueda actualizarse automaticamente:
    e.waitUntil(
        caches.keys(keys => {//keys seran lsa nuevas versiones
            //console.log(keys)
            //console.log('cacheando');
           // cache.addAll(archivos);
           return Promise.all(
            keys.filter(key => key !== nombreCache) //para que tome la version descrita en la primera linea, y no otra
                .map (key => caches.delete(key)) //borra versiones anteriores de cache
            )
        }) 
    )

});

//Caracteristica de las pwb se pueden instalar en navegador de escritorio y en movil(lo q le dara apariencia de app nativa)
//Para que se pueda instalar una pwb, tiene que:
//- Tener un manifest válido
//- Tener dominio https/ o ser un localhost

//- Tener registrado el addEventListener de Fetch (localstorage):
//evento fetch para descargar archivos estaticos:
self.addEventListener('fetch', e => {
    console.log('fetch...', e); //boton al lado de zoom en navegador a la derecha de la barra de nav, nos aparece si queremos instalar la app
    
    e.respondWith(//dale esta respuesta una vez estemos haciendo el fetch:
        //identifica el tipo de request que se esta haciendo:
        caches.match(e.request)//revisa el tipo de request (respuesta) y en caso de que sea igual a la que tenemos en cache:
            .then(respuestaCache => {
                return respuestaCache;//cargamos el cache
            })
            .catch(() => caches.match('/error.html'))//en caso de que el usuario cargue algo q no esta mostrado en el cache storage
    )

})

