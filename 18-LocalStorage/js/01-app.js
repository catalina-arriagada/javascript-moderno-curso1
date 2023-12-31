//agregar elementos a localstorage(llave,valor):
localStorage.setItem('nombre','Juan'); //desde el momento en q se ejecuta este codigo ya esta en la localstorage
//en Chrome: f12/application/localstorage
//chrome: almacenamiento/almacenamiento local
//localstorage persiste
//sesionstorage: es de sesion, cuando cierras se va
//Sesion:
sessionStorage.setItem('nombre','Juan');
//IMPORTANTE: localstorage SOLO PUEDE ALMACENAR STRINGS
//pero:
const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300
}

//Pasar cualquier otro tipo de dato a string (todos los valores del objeto) (convertir a JSON)
const productoString = JSON.stringify(producto);
console.log(typeof productoString); //string

localStorage.setItem('producto', productoString); //guardar un objeto en localstorage

//TODO se puede guardar en la localstorage convirtiendo a JSON
const meses = ['en','f','m'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);
//o directamente:
localStorage.setItem('meses', JSON.stringify(meses));

