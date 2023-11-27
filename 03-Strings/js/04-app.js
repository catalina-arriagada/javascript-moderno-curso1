//metodos para eliminar espacios

const producto="monitor";
console.log(producto);
console.log(producto.length);//son considerados los espacios

//como eliminar del inicio:
console.log(producto.trimStart());
//elimianr del final
console.log(producto.trimEnd());
//del inicio y final:
console.log(producto.trimEnd().trimEnd());
//eliminar en ambas direcciones:
console.log(producto.trim());  

//reemplazar ciertas partes del string:
console.log(producto);
console.log(producto.replace('pulgadas','"'));

//slice permite cortar parte de cadena:
console.log(producto.slice(0,10));

//alternativa a slice, pero no deja pasar numero mayor al inicio
console.log(producto.substring(0,10));

//inicio sesion
const usuario = "juan";
console.log(usuario.substring(0,1));

//mejor metodo que substring para hacer esto:
console.log(usuario.charAt(0,1));


