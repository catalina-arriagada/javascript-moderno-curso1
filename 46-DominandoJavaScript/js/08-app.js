//Self: ventana global, es window: se usa mucho en service/web workers
//Es window pero en service workers (no se puede usar windows ahi)
//window === self; //true

window.onload = () => {
    console.log('ventana lista')
}//es lo mismo que DOMContentLoaded

//es lo mismo que window
self.onload = () => {
    console.log('ventana lista')
}
//se usa mucho en:
const producto = {
    nombre :'moniutos',
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        return `El producto ${this.nombre} tiene precio de ${this.precio}`;
    }

}

console.log(producto.mostrarInfo());

//con self lo usan asi:
const producto2 = {
    nombre :'moniutos',
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        const self = this; // es forma mas implicita de dar a entender que es el mismo objeto
        return `El producto ${self.nombre} tiene precio de ${self.precio}`;
    }

}

console.log(producto2.mostrarInfo());

//Pero si pongo:
window.nombre = 'Monitor'
const producto3 = {
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        return `El producto ${self.nombre}`; //Lo va a reconocer porque self hace referencia a ventana global
    }

}

console.log(producto3.mostrarInfo());



