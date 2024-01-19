//Event Loop o Modelo de concurrencia y Loop de eventos
//Es como se va ejecutando el codigo en Javascript:
//es decir la prioridad de sus eventos: funcion, variable, promise, etc

//Los set time out se van a ejecutar igual despues de q las funciones terminen, aunque sean con intervalo 0
console.log('Primero'); //1°

setTimeout(() => {
    console.log('Segundo')//5°
}, 0);

console.log('Tercero');//2°

setTimeout(() => {
    console.log('Cuarto')//6°
}, 0);

new Promise(function(resolve){
    resolve('Desconocido')//4°
}).then(console.log)

console.log('Ultimo')//3°

//El settimeout se ejecuta en 30miliseg mas o menos
//Js ejecuta una sola linea a la vez, cada vez q termina una llama la sgte
//Esto se le conoce como el Loop de eventos: es como un while
//Es como un cajero de banco, pero hay un servicio donde no hacen fila clientes
//En js Hay prioridad, dependiendo de la naturaleza de cada función

//El codigo dependiendo se colocan en Stack(console.log), Queue(en lo q se ejecuta el stack las demas se terminan yendo al queue o Cola, aqui son promise y settimeout), 

//https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop

function hola(){
    console.log('ola')
}

hola();//se ejecuta despues de los console log solos

