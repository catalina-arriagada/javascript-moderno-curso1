//for in
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

  //for in
  //for of itera sobre arreglos
  //for in itera sobre objetos
  for (pendiente in pendientes){
    console.log(pendiente);
  }

  const auto ={
    modelo:'camaro',
    year: 1938,
    motor: '94'
  }
  for (let propiedad in auto){
    console.log(propiedad);//modelo, año y motor
    console.log(`${auto[propiedad]}`);//para ver los valores
  }

  //iterador nuevo en version 7
  for(let [llave, valor] of Object.entries(auto)){
    console.log(valor+llave);
  }