const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//btnFlotante estate atento por si alguien hace algo (evento), vas a tener q hacer lo que va dentro
//en este caso si alguien le da click al btnFlotante, va a ejecutar esta funcion anonima
btnFlotante.addEventListener('click', () => {
    console.log('diste click');
});

//otra forma
btnFlotante.addEventListener('click',mostrarOcultarFooter);
function mostrarOcultarFooter(){
    console.log('diste click');
}

//hay clase css (activo) q hace q footer se mueva:
//como solucionar:
function mostrarOcultarFooter(){
    //comprobar si esta o no clase, eso quiere decir q se esta mostrando el footer:
    //(clase activo):contains
    if (footer.classList.contains ('activo')) {
        footer.classList.remove('activo');//si ya la tiene quiero quitarla
        btnFlotante.classList.remove('activo'); // es igual que:
        this.classList.remove('activo');//this en el dom y en funcion hace referencia a lo que llamó la función, en este caso, el btnFlotante(donde se usa la funcion)
        this.textContent = 'Idioma y Moneda';//cambiar texto btn
    }//pero se quita y se vuelve a poner, esto se soluciona con un else
    else{
        footer.classList.add('activo');
        //agregar esas mismas clases a btnFlotante
        btnFlotante.classList.add('activo');//igual que:
        this.classList.add('activo');
        //ahora queremos q si no esta activo, que diga 'cerrar' ese boton:
        this.textContent = 'x Cerrar';

    }
    //footer.classList.add('activo');
}


