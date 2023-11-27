const carrito = [];
const producto = {
    nombre:'monitor',
    precio: 400
}

const producto2 = {
    nombre:'monnitor',
    precio: 700
}

const producto3 = {
    nombre:'mnnitor',
    precio: 70
}
//Destructuring en objetos:creando y extrayendo variable todo en un mismo paso
const{nombre}=producto;
console.log(nombre);

//Destructuring con arrays:
const numeros = [10,20,30,40,50];

// const arreglo[0]= "hola"; //esto no es posible
const [primero,segundo,tercero] = numeros; //acceder al tercero
console.log(tercero); 
//Se asignan en orden de izq a derecha

//pero con destructuring se puede hacer de la sgte manera:
const [ , ,tercero1] = numeros;
console.log(tercero1);

//Quiero que el primer y segundo valor, pero que los ultimos esten en su propio arreglo
const [ primero1, segundo1, ...tercero2] = numeros; //con SPREAD
console.log(tercero2); //[30,40,50]
//tercero2 incluye arreglo con 30, 40, y 50
//Es decir, todos los valores que no sean parte del array destructuring (primero y segundo)


