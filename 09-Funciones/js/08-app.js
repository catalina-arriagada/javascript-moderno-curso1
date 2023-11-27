//objeto con una funcion como propiedad
const reproductor = {
    reproducir: function(id) {
        console.log(`reproduciendo ${cancion} con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    }
}

reproductor.reproducir(30); //nombre objeto, "Método de propiedad"(se llama asi porque tiene una funcion)
reproductor.reproducir(2); 
reproductor.pausar();

//agregar propiedad de objeto por fuera del objeto:
reproductor.borrar = function(id){
    console.log(`borrando... ${id}`);
}
reproductor.borrar(30);

