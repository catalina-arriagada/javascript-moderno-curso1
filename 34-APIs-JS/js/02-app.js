//intersection observer: permite identificar cuando un elemento esta visible
//es nativa de JS

document.addEventListener('DOMContentLoaded', () => {
    //IntersectionObserver es muy util para agregar scroll infinito (ej: facebook, instagram) o LazyLoading a imagenes (q imagenes no se carguen hasta que haga scroll hacia donde estan)
    //identifica un elemento una vez es visible en el viewport del navegador
    const observer = new IntersectionObserver(entries => {
        console.log(entries[0]); //cuando elemento definido abajo este visible, me lo ira reportando aqui
    
        if(entries[0].isIntersecting){
            console.log('ya esta visible');
        }
    
    }); //aqui solo crea la intersection observer

    //aqui le tengo que decir los elementos que quiero revisar (html)
    //que variable observer observe (metodo o funcion) por la clase de premium, mando a llamar ese nodo
    observer.observe(document.querySelector('.premium'));

    //imprimira:
    //isIntersecting: false isVisible: false, cuando no sea visible
    //isIntersecting: true isVisible: false,//cuando sea visible
    

});