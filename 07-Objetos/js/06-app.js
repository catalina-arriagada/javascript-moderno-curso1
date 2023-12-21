//Destructuring con objeto grande

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

//const {disponible,info:{medidas:{persona1}}}= producto;

const{nombre, info, info: {fabricacion, fabricacion:{pais}}}=producto; //acceder a pais
console.log(nombre);
console.log(fabricacion);
console.log(pais);

//extrae la info y crea variable en un solo paso