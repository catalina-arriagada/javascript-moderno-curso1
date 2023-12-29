//console.log(autos);

//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const maxYear = new Date().getFullYear(); //trae año actual
const minYear = maxYear - 10;

console.log(maxYear);
console.log(minYear);

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //una vez que cargue html llamare a esta funcion //muestra los autos al cargar

    //llena las opciones de años:
    llenarSelect();
});

//Funciones 
function mostrarAutos(){
    //iteramos sobre cada auto
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p'); //crea parrafo para cada automovil
        autoHTML.textContent = ` 
            ${marca} ${modelo} - ${year} - ${puertas} puertas - color ${color} - Transmisión en ${transmision} - Precio: $${precio}
        `;

        //insertar en el html:
        resultado.appendChild(autoHTML);
    });
}

//Genera los años del select:
function llenarSelect() {
    //console.log('llenando el select...');
    for(let i = maxYear; i >= minYear; i--) { //corremos años hacia atras, para que luego se muestre asi, de adelante a atras
        // console.log(i);
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega cada opcion de año al select
    }
}