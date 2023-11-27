const meses = new Array['Enero','fe','ma','ab','may','jun'];
console.log(meses);
console.log(meses[1]);
console.log(meses[2]);
console.log(meses[3]);

//acceder a todos los elementos

//cuanto mide el arreglo(RECORRER un arreglo):
console.log(meses.length);//6

//for loop
//(indice; cantidad veces que se ejecuta(cantidad elementos del arreglo);  )
for(let i=0; i < meses.length; i++) {
    console.log(meses [i]);
}
