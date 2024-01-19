//Explicit binding
//Diferencia entre call, apply, bind
function persona(el1,el2){
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1}, y ${el2}`);
  
}

const informacion = {
    nombre: 'Juan'
}
const musicaFav = ['heavy','rock']; //el1, el2
//call se usa para reconocer donde estan ciertos datos que utilizo.
//call esta en todas las funciones de javascript (incluidas las que creamos) y podemos pasarle objetos o arreglos dentro de la funcion
persona.call(informacion, musicaFav[0], musicaFav[1]); //aqui le pasamos la info. (objeto, el1 y el2 y le tengo q pasar cada elemento de forma individual con su posicion en el arreglo)

//.call es como tener una funcion y unirla con valores externos
//es por eso que es el primer "explicit binding"

//2 forma de explicit binding:
//Apply: al igual que call existe en todas las funciones de js
//a diferencia con call es que no es necesario pasarle todos los elementos de manera individual, toma todo el arreglo aqui
persona.apply(informacion,musicaFav);

//3 funcion para hacer explicit binding
//.bind: es similar a call, existe en todas las funciones y hay que pasarle elementos de manera individual, PERO
//la diferencia es que hay q crear una nueva funcion 
const nuevaFn = persona.bind(informacion, musicaFav[0], musicaFav[1]);
nuevaFn();//mismo resultado

