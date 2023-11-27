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

for(let i=0; i < carrito.length; i++) {
    console.log(`${carrito [i].nombre} - ${carrito [i].precio}`);
}

//js array methods de JS exclusivos:
//producto sería cada objeto, el foreach los recorre
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);
});