const producto = {
    nombre: "monitor",
    precio: 333,
    disponible : true
}

//las propiedades de objeto si se pueden reasignar aunque sean const
//(se vio en la imagen en 03)

producto.disponible=false;//true porque lo reescribe
delete producto.precio;//lo elimina

//existen metodos para prevenir esto, se vera en 08

console.log(producto);