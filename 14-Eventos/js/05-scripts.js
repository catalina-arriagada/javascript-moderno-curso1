window.addEventListener('scroll', () => {
    //scroll vertical
    const scrollPX = window.scrollY;

    console.log('scrolling');
    //vertical
    console.log(scrollPX);

});

//crear una animacion a partir del scroll
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    //get... este metodo permite ver a que distancia del elemento premium nos encontramos y demas propiedades del elemento(css)
    console.log(ubicacion);
    
    if(ubicacion.top < 784){ // el valor de top es variable, dependiendo del tamaño de la pantalla
        console.log('El elemento ya esta visible');//a la pantalla del usuario
    } else {
        console.log('Aun no, da mas scroll');
    }
});
