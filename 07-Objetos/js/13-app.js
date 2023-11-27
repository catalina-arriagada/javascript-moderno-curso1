const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true
}

//Metodo keys: retorna un arreglo con los nombres de las propiedades (no sus valores)
//tambien se usa para saber si objeto esta vacio
//o si consulta bd es exitosa o no pa saber si objeto tiene info
console.log(Object.keys(producto));

//Object values: retorna los valores de cada propiedad objeto
console.log(Object.values(producto));

//Object entries: retorna los 2 en pares de array, cada propiedad y su valor
console.log(Object.entries(producto));

