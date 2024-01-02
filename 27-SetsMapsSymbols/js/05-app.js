//Symbols
//permiten crear propiedad unica

const sym = Symbol('1');
const sym2 = Symbol('1');

//el operador estricto no es fija en el nombre de la variable
//sin embargo con symbol son todas las variables distintas
if(sym === sym2){
    console.log('son iguales');
}else {
    console.log('son diferentes');
}
//sale son diferentes en consola
//Symbol solo crea symbols distintos: NO SON IGUALES NUNCA

console.log(Symbol() === Symbol()); //false

//ej
const nombre = Symbol();
const apellido = Symbol();

const persona = {} //objeto vacio

//quiero usar nombre y apellid
//agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'AAA';//aparecen como propiedades Symbol(): apellido: aaa
//y agregamos mas propiedades:
persona.tipoCliente = 'premium';
persona.saldo = 200;//aparecen como objeto normal

//si quiero acceder al nombre:
console.log(persona.nombre);//undefined, asi accedo a un objeto normal solamente
console.log(persona.tipoCliente); //ahora si sale valor
console.log(persona[nombre]); //ahora si puedo acceder al symbol

console.log(persona); //{} Object

//las propiedades con Symbol no se pueden iterar
//se mantienen de forma privada
for(let i in persona){
    console.log(i); 
}//solo aparecen los objetos normales: tipocliente y saldo

//definir descripcion del Symbol()
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {}

cliente[nombreCliente] = 'Pedro';
console.log(cliente);//Symbol completo
console.log(cliente[nombreCliente]);// Pedro
console.log(nombreCliente);// Symbol(Nombre del cliente) , trae unicamente la descripcion del symbol

//no se puede conocer extension
//sirven si quiero tener valores que a la hora de iterar no se muestren, por ej


