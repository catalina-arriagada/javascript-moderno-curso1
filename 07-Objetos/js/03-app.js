const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true
}

console.log(producto);

//agregar propiedades al objeto despues de ejecucion del mismo:
producto.imagen = "imagen.jpg";

//eliminar propiedades de objeto:(disponibel)
delete producto.disponible;

