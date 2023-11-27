const producto="monitor";
const precio="30usd";

//concatenar cosas al lado de variables:
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));
console.log(producto+precio);
console.log(producto,'con precio de',precio);

//template strings o template literals:(backticks)

console.log(`El producto ${producto} tiene un precio de ${precio}`);
