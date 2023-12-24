const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //prevent default, previene la accion por default del elemento html, en este caso el formulario se envia a una url, y estamos impidiendo eso, y q se ejecute lo q le digo en esta funcion solamente
    console.log(e);
    //es comun detener accion por default y luego enviarla y mandar a llamar api 
    //desde aca lo enviamos utilizando fetch o ajax
});
//submit es cuando el usuario presiona el button con el type: submit

busqueda.addEventListener('submit',(e) =>{
    console.log(e.target.method);
});//tipo metodo del formulario: POST
busqueda.addEventListener('submit',(e) =>{
    console.log(e.target.action);
});//donde va el formulario
//lo que hace el prevent default es impedir por ej el method y el action


//como funcion declarativa:
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log('consumir una api... ');
    console.log(e.target.action);
}
