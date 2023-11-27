const reproductor = {
    reproducir: id => console.log(`reproduciendo ${cancion} con el id ${id}`),
    pausar: () => console.log('pausando...'),

    //set agrega valores y get los obtiene de vuelta esos valores
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'enter sandman'; //añadiendo enter sandman
reproductor.obtenerCancion;//enter sandman

