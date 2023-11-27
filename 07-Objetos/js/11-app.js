const nombre="hola";
const precio=20;

const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El producto ${nombre}tiene precio de: ${precio}`);
    }
}

producto.mostrarInfo();
//no se muestran las propiedades de dentro del objeto, sino que
//se va hacia afuera y muestra las de afuera.
//por eso existe THIS
//se refiere a los valores que estan en el mismo objeto:
const producto1 = {
    nombre: "monitor",
    precio: 333,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre}tiene precio de: ${this.precio}`);
    }
}

producto1.mostrarInfo();


