//obtener datos desde localstorage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

//si es objeto:
const productoJSON = localStorage.getItem('producto');
console.log(productoJSON);//es un string

//convertir string a objeto o arreglo dependiendo de su forma:
const productoObjeto = JSON.parse(productoJSON);
console.log(productoObjeto);

//obtener arreglo anterior:
const mesesJSON = localStorage.getItem('meses');
console.log(mesesJSON);
//convertimos
const mesesArray = JSON.parse(mesesJSON);
console.log(mesesArray);

