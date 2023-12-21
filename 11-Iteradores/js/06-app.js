//for each y map

const pendientes =['a','b','c'];
//el indice en foreach se puede pasar automaticamente
pendientes.forEach((pendiente, indice)=>{
    console.log(`${indice} : ${pendiente}`);
});

//carrito
const carrito = [
    {
        nombre:'monitor',
        precio: 400
    },
    {
        nombre:'monnitor',
        precio: 700,
        descuento: true
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
        precio: 90,
        descuento: true
    },
    {
        nombre:'mnnuitor',
        precio: 780
    },
  
  ];

  const nuevoArreglo=carrito.forEach((producto) => {
    producto.nombre;
  });//no imprime nada porque esta dentro de una variable

  const nuevoArreglo2=carrito.map(producto => producto.nombre);
  //imprime porque es .map y crea arreglo nuevo porque llena
  //la variable por cada iteracion