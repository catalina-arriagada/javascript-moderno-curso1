const carrito = [
    {
        nombre:'monitor',
        precio: 400
    },
    {
        nombre:'monnitor',
        precio: 700
    },
    {
        nombre:'mnnitor',
        precio: 70
    },
    {
        nombre:'mynnitor',
        precio: 770
    },
    {
        nombre:'mnntitor',
        precio: 90
    },
    {
        nombre:'mnnuitor',
        precio: 780
    },

];

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);
});

carrito.map(producto => `${producto.nombre} - ${producto.precio}`);