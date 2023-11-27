iniciarApp();

function iniciarApp(){
    console.log('iniciando app');
    funcion2(); //mandar a llamar esta funcion una vez la primera haya finalizado, se van encadenando las funciones
    //ej:revisar que esta autenticado usuario
}

function funcion2(){
    console.log('funcion 2');
    usuarioAutenticado('pablo');
}

//ej:revisar que esta autenticado usuario
function usuarioAutenticado(usuario){
    console.log('autenticando..');
    console.log(`usuario autenticado ${usuario}`);
}

