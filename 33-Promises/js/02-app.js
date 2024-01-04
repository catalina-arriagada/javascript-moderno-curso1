//callback hell exgerado

const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);

        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises);

            setTimeout(() => {
                nuevoPais('Belgica', mostrarPaises);
            }, 3000);
            //cada vez q agrego un elemento vamos manteniendo esta forma curva hacia adentro,
            //y no es la mejor manera de hacerlo
        }, 3000);

    }, 3000);

}

iniciarCallbackHell();