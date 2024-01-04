//Promises

//callbacks:
const paises = ['f', 'r', 'n', 'e'];

//callback function
function nuevoPais(pais, callback){
    setTimeout(() => {
        paises.push(pais); //agrega elemento al arreglo
        callback();//mandamos a llamar al nuevo pais
    }, 2000);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises();

//si se agrega pais nuevo, no se muestra porque ya los mostré
//no se descarga lo nuevo pq ya descargué la lista
//para eso sirven los callbacks
nuevoPais('Alemania', mostrarPaises);//vuelvo a iterar con el nuevo pais, despues de 2 segundos

