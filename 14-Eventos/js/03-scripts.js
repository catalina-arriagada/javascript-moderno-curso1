//eventos de teclado
const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('keydown',() =>{
    console.log('escribiendo');
});//cuadno presionas tecla del teclado
busqueda.addEventListener('keyup',() =>{
    console.log('escribiendo');
});//se ejecuta cuando sueltas esa letra
busqueda.addEventListener('blur',() =>{
    console.log('escribiendo');
});//se usa en validacion de formularios: si me coloco
//en input y luego hago click fuera, aparece el escribiendo
//entrar a input y cuando me salga ejecuta funcion
busqueda.addEventListener('copy',() =>{
    console.log('copiado');
});//cuando copio texto con teclado
busqueda.addEventListener('paste',() =>{
    console.log('pegado');
});//cuadno pegas texto
busqueda.addEventListener('cut',() =>{
    console.log('cortado');
});//cuando cortas texto
busqueda.addEventListener('input',() =>{
    console.log('escribiendo');
});//cuando realizas cualquiera de los anteriores menos el blur dentro de un input

busqueda.addEventListener('input',(evento) =>{
    console.log(evento.type);
});//type: sobre q elemento estamos trabajando
busqueda.addEventListener('input',(evento) =>{
    console.log(evento.target.value);
});//puedo leer lo q el usuario esta escribiendo
//ej:util para busquedas
//o para validar:
busqueda.addEventListener('input',(evento) =>{
    if(evento.target.value === ''){
        console.log('no es, fallo validacion');
    }
});//probar q hay algo dentro de un input
