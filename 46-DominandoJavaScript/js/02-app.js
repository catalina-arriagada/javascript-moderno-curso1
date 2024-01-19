//Hoisting
//Existen 2 Contextos en JS: existen 2 fases: creacion(crear y registrar variables) y ejecucion(se ejecutan las variables)
//Cual es la diferencia entre function expretion y declaration?:
//En decl puedes usar la funcion y despues declararla
//Eso funciona porque primer ejecuta la declaracion

obtenerCliente('juan');//funciona //y esto despues
function obtenerCliente(nombre){
    console.log(`el nombre del cliente es ${nombre}`);
} //ejecuta esto primero

//function expression: 
obtenerCliente2('pablo');//marca error, no puede acceder antes de inicializar variable
const obtenerCliente2 = function(nombre){
    console.log(`el nombre del cliente es ${nombre}`);
}//aqui js no aplica la ejecución en 2 fases
//pasa porque es como una variable normal sin valor. Funcion q no tiene asignado nada, por eso marca undefined




