//console.log(1+1) //se ejecuta
//hola(); //error pq no esta definido
//console.log(1+1) //NO SE EJECUTA, porque cuando codigo falla, deja de ejecutarse

//en try catch se sigue ejecutando pero si recibo el error para debug
//ejemplo
//intentar descargar listado de alumnos, si marca error se envia mensaje, pero codigo continua funcionando

//si coloco:

console.log(1+1)//se ejecuta
try {
   hola();
}catch(error){
   console.log(error); //sale en consola error
}

console.log(1+1) //si se ejecuta

//se usa en partes criticas del codigo:
//cargar bd, consultar api, autenticar usuario, o acciones que deba obtener mensajes de error


