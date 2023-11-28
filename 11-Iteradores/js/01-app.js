//inicializador(parte donde empieza a contar, el indice); condicion; incremento)
//mientras i sea menor a 10 el codigo se va a ejecutar, sino no
for(let i = 0; i<10; i++){
  console.log(`NUMero ${i}`);
}

//saber si numero es par (con modulo)
for(let i=1; i<=20; i++) {
  if(i % 2 === 0){
    console.log(`es par $(i)`);
  }else{
    console.log('es impar');
  }
}
//todos los numeros que se dividen en 2 y dejan 0 de residuo son pares

//ejemplo:
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

console.log(carrito.lenght);
console.log(carrito[0]);

//i se inicia desde el primer elemento (indice)
//se va a ejecutar mientras el índice sea menor a lo que mida el carrito
for(let i=0; i < carrito.length;i++){
  console.log(carrito[i].nombre);
}

//crece o empequeñece de acuerdo al numero de elementos en el carrito (array)