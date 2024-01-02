//Serie de iteradores nuevos ErmaScript7, y ES8

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 102]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'doctor');

//Default
//forzar valores por default:
for(let ciudad of ciudades){
    console.log(ciudad); //me trae los valores q ya existen
}//iterando sobre arreglo
//ITERADOR DE UN ARREGLO ES VALUES
for(let orden of ordenes){
    console.log(orden); //me trae llaves y valores q ya existen
}
//ITERADOR DE UN SET Y ARREGLO ES VALUES
for(let dato of datos){
    console.log(dato); //me trae los valores q ya existen
}//ITERADOR DE UN MAP ES EL MISMO DE .ENTRIES


//iterador Entries - Entries Iterator
for(let entry of ciudades.entries()){
    console.log(entry); //imprime llave y valor del arreglo
}

for(let entry of ordenes.entries()){
    console.log(entry);//imprime llave y valor iguales, pq en set es asi, por pares
    // (2) [123, 123]
    // (2) [231, 231]
    // (2) [102, 102]
    
}

for(let entry of datos.entries()){
    console.log(entry); //imprime llaves y valores
}

//.entrys agrega llave sino existe e imprime llave y valor
//en set la reemplaza por el valor porque no tiene mas



//Iterador Values - Values iterator
for(let value of ciudades.values()){
    console.log(value);
} //forma mas corta de iterar arreglo tal cual

for(let value of ordenes.values()){
    console.log(value);//imprime los valores tal cual
}

for(let value of datos.values()){
    console.log(value); //juan doctor
}


//Iterador Keys - Keys Iterator
for(let keys of ciudades.keys()){
    console.log(keys); //imprime las posiciones 0,1 , 2,...
}

for(let keys of ordenes.keys()){
    console.log(keys); //imprime los valores pq no tienen posicion y los reemplaza por el valor las keys
}//en caso de que no existan keys, asigna los valores como llave.keys

for(let keys of datos.keys()){
    console.log(keys); //imprime las posiciones 0,1 , 2,...
}

//Cada uno de estos iteradores tiene un iterador por Default:
//Default: dependiendo de tipo de dato q declaramos es el valor q vamos a obtener









