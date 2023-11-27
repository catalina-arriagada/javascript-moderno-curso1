//Crear objeto dentro de otro objeto

const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true,
    info: {
        peso: '1kg',
        medidas:{
            persona1:2,
            persona2:3
        },
        fabricacion:{
            pais:'chile'
        }

    }
}

console.log(producto);
console.log(producto.info);
console.log(producto.info.peso);
console.log(producto.info.fabricacion.pais);