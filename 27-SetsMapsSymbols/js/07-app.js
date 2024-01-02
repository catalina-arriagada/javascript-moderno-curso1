//generadores
//Un generador es una funcion que retorna un iterador
//funcion de tipo generador

//hay q ponerle *
function *crearGenerador(){
    //junto a generadores viene palabra reservada yiel 
    //yiel son los valores q se pueden iterar de manera estatica
    yield 1;
    yield 3+2;
    yield 'juan';
    yield true;
    
    
}

const iterador = crearGenerador(); //acceder a valores de yield y usar funcion generadora
console.log(iterador);

//suspended : se refiere a que el iterador se queda dormido porque no lo estamos usando
//next (en consola) nos permite iterar sobre el generador
//una vez que uso next, el generador despierta y vuelve a suspended
console.log(iterador.next()); //dice suspended pero accedemos al valor 1 
console.log(iterador);//suspended otra vez, se vuelve a dormir, done: false

//acceder al valor
console.log(iterador.next().value); //accedio al segundo valor (.next), porque ya pregunte por el pirmero en la primera llamada

console.log(iterador.next().done); //false. Se va al tercer elemento (por el .next)

console.log(iterador.next());
console.log(iterador.next());//ahora si sale undefined. Es similar a lo que sale en iteradores, en clase anterior
console.log(iterador);//aparece closed porque ya recorrio todos los elementos.  crearGenerador {<closed>}


//Generador para carrito de compras
function *generadorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
   } 
}

const carrito = ['Producto1', 'Producto2', 'Producto2'];
const iterador2 = generadorCarrito(carrito);
console.log(iterador2.next()); //prod 1 false
console.log(iterador2.next()); //prod 2 false
console.log(iterador2.next()); //prod 3 false
console.log(iterador2.next());//undefined true





