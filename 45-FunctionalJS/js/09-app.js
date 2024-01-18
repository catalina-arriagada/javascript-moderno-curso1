//Currying y Partials

//Currying: dividir funcion q toma mas de un parametro en argumentos de forma parcial

//funcion q toma 3 argumentos
const suma = (a,b,c) => {
    return a+b+c;
}

const parcial = (a) => (b,c) => { //los dividimos en parciales
    return suma (a,b,c);

}

//usar el parcial
const primerNumero = parcial(5); //a
const resultado = primerNumero(4,3); //a,b,c

//console.log(suma(1,2,3)); //6
console.log(resultado); //12


//Podriamos dividir mas la funcion
const parcial2 = a => b => c => suma(a,b,c);
const primerNumero1 = parcial2(2);
const segundoNumero = primerNumero1(2);
const resultado2 = segundoNumero(2);

console.log(resultado2); //6

//Lo mismo anterior (dividido por 3 partes)pero con sintaxis corta 
const resultadoParcial = parcial2(2)(3)(3); //la mejor sintaxis
//este codigo esta aplicando currying y partials dividiendo esa funcion en pequeñas partes (3partes)
//En el ejemplo, la primera parte es la referencia de la variable, para inyectarle cierta info
console.log(resultadoParcial); //8