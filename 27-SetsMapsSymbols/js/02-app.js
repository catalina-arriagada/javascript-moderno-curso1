//WeakSet /Set Debil

const weakset = new WeakSet();
//A diferencia del set, al set le puedo pasar cualquier valor:
//objetos, arreglos, bulean, etc. En weakset solo OBJETOS

const cliente = {
    nombre : 'juan',
    saldo: 100
}

//si intento agregar string:
const nombre = 'juann';

//METODOS

//Agregar elemento al weakset
weakset.add(cliente);
//weakset.add(nombre);//marca error: invalid value

//retorna si existe o no
console.log(weakset.has(cliente)); //true o false /aqui es true
//si le paso objeto que no existe me sale undefined, si pongo cualquier otra cosa sale flase

//eliminar
weakset.delete(cliente);

//conocer extension:
//a diferencia del set, el size no existe en weakset
//console.log(cliente.size);

//weakset tampoco es ITERABLE, como si lo es set


console.log(weakset);

