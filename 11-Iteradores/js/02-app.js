//break y continue

//break: corta la ejecucion de un for loop
//continue: interceptar elemento y continuar la ejecucion

//crea un for loop que al detectar un elemento numero 5
//detenga su ejecucion: con continue se logra
for(let i = 0; i<10; i++){
    if(i === 5){
        console.log('este es el 5');
         //llega a este codigo pero sigue ejecutando la otra linea (incluyendo el 5)
    //pero con break detiene la ejecucion sgte:
        //break;
        //pero con continue no rompe la ejecucion, pasa al siguiente numero, saltandose el 5
        continue; 
        }
    console.log(`numero: ${i}`);
  }


  //csarrito

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

//que liste todos los elementos en carrito menos los que estan en descuento:
for(let i=0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;//que no liste ese elemento que tiene descuento
    }
    console.log(carrito[i].nombre);
}


