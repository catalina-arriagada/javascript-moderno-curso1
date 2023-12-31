//eliminar elementos de localstorage:
localStorage.removeItem('nombre');

//actualizar un registro: (en el localstorage no esta implementado como tal, pero podemos:)

//1.obtener/convertir el arreglo de la localstorage
const mesesArrayy = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArrayy);
//2.actualizar: ejemplo, agregar nuevo elemento al array:
mesesArrayy.push('Nuevo mes');
console.log(mesesArrayy);
//3. volver a mandar a la localstorage ya actualizado
localStorage.setItem('meses', JSON.stringify(mesesArrayy));

//limpiar todo el localstorage (metodo):
localStorage.clear(); //lo elimina todo





