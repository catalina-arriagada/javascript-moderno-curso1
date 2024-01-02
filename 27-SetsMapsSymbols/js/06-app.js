//ITERADORES : COMO crear nuestro propio ITERADOR

//vamos a iterar sobre un carrito
function crearIterador(carrito){ //funcion que retorna una funcion
    //contador
    let i = 0;
    return {
        siguiente: () => { //funcion
            const fin = ( i >= carrito.length);//queremos que itere hasta que no haya elementos en carrito, pq carrito mide 3
            const valor = !fin ? carrito[i++]: undefined;//sino ha finalizado ejecuta que imprima en la posicion 1 (por eso se llama siguiente) y sino que retorne undefined (no lo encuentra pq no existe)
        
            return {
                fin,
                valor
            }
        }
    }
}
const carrito = ['pro1', 'pro2', 'pro3'];

//utilizar iterador
const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente()); //fin: false valor: prod1
console.log(recorrerCarrito.siguiente()); //fin false prod2
console.log(recorrerCarrito.siguiente()); //false prod3
console.log(recorrerCarrito.siguiente()); //true undefined

//si yo itero sobre una posicion, debo coonocer ese valor

//detras de cada iterador hay codigo como este, aunque mas complejo

