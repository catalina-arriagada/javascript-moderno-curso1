//Progressive web applications o aplicaciones web progresivas
//funcionan con algo llamado service workers

//Caracteristicas
//Rapidas: cargan toda la info en menos de 5 segundos
//Son Instalables: se pueden navegar o instalar de fomra nativa en pc o movil
//Tienen soporte offline y funcionan sin internet

//Son la base de PWA- Son scripts que corren todo el tiempo detras de escena
//Funcionan offline
//No tienen acceso al DOM. Solo funciona en otra parte de la app
//Cargar de manera instantanea, cuando lo llamo en el codigo, se manda a llamar instantaneamente en el service worker
//pueden sincronizar datos detras de escena o sin interferir en la navegacion: 
//por algo se pierde conexion enviando datos de formulario, se guarda info en caché , y una vez vuelve conexion, se envian los datos y se sincronizan con un servidor


//Funciones:
//Utiliza 'self' en lugar de 'window'
//utiliza 'caches' en lugar de 'document'
//utiliza 'fetch' en lugar de 'localStorage' (no es el fetch de apis)

//Lighthouse
//En Chrome f12 y meterse a Lighthouse //Generar reporte de la pag con el boton
//"Auditing...", nos dira que tenemos q mejorar para que sea una progressive web application
//Nos pide una serie de cosas para que sea progressive web application
//se espera que tenga archivo con nombre manifest.json

//EN ESTE HAREMOS LA WPAPP

//Validamos si navegador soporta o no service worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')//lo vamos a registrar
    .then(registrado => console.log('Se registró correctamente ', registrado))//registrado muestra info del sw
    .catch(error => console.log('Falló la instalación ', error)) //ir a application/service worker o manifest, se ACTIVÓ CON ESTE CODIGO EL SW.JS

}else{
    console.log('Service Workers no soportados');
}


