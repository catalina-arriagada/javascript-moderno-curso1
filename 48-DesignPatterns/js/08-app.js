//namespaces
//ayuda a evitar colision de nombres en el scope global de javascript
//la idea es crear objeto global en tu app y agregar todas las funciones dentro, en lugar de crear multiples funciones

//siempre inicia con un objeto
//se le dice namespace porque sobre ese objeto estaremos colocando todos los datos y operaciones
//se evita que choquen lo nombres de las funciones en scope global
const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    
    {
        platillo: 'Hot Dog',
        precio: 25
    },

]; //todo esto queda en restaurantApp

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        //console.log(`Bienvenidos a nuestro menu`);
        platillos.forEach((platillo, index) => {
            console.log(`${index} ${platillo.platillo} ${platillo.precio}`);
        });
    },
    ordenar: id => {
        console.log(`tu platillo ${restaurantApp.platillos[id].platillo} se esta preparando`);//primero accedo al objeto, luego al indice del arreglo(se pasa automatico con el parametro id, y luego el platillo en si q es su nombre (propiedad nombre de ese mismo indice)
    },
    agregarPlatillo: (platillo,precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
    }
}; //tambn esta dentro de restaurantApp

//restaurantApp.funciones.mostrarMenu();//asi lo usamos
//asi no chocara con otra funcion u objeto q  se llame igual

restaurantApp.funciones.ordenar(1);//tu platillo Hamburguesa se esta preparando
restaurantApp.funciones.agregarPlatillo('Taco', 20);
//mostrar el menu del array:
const {platillos} = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos);

