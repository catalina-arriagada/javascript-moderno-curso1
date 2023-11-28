//for of
const pendientes =['a','b','c'];


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

  //forof
  //damos un nombre cualquiera a cada iteracion, en este caso "pendiente"
  for(let pendiente of pendientes){
    console.log(`${pendiente}`);
  }

  for(let producto of carrito){
    console.log(producto.precio);
  }