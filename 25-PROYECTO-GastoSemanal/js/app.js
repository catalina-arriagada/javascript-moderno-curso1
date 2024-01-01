//Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    document.addEventListener('submit', agregarGasto);
    


}

//Clases
//haremos 2 clases: la de presupuesto y la otra de interfaz de usuario
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto); //number se va a encargar de manejar si es float, int etc, transforma el string a number(cualquier tipo de number)
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    //ir agregando gastos al arreglo gastos []
    nuevoGasto(gasto){
       // console.log(gasto)
       this.gastos = [...this.gastos, gasto]; //copia de objeto y nuevo gasto q puso usuario
       console.log(this.gastos);
       this.calcularRestante(); //llamo a calcularRestante una vez creo un nuevo gasto
    }

   //lo llamo una vez creo un nuevo gasto
    calcularRestante(){
        const gastado = this.gastos.reduce((total,gasto) => total + gasto.cantidad, 0); //total mas gastos y su cantidad, y terminamos en 0
        //.reduce es un array method y acumula valores en un total, toma 2 parametros: (total, gasto)
        //itera sobre el arreglo de gastos y calcula cuanto dinero ya hemos gastado y/o definido en el presupuesto de gastos
        //console.log(gastado);
        this.restante = this.presupuesto - gastado;
        
       
    }

    eliminarGasto(id){
       // console.log('desde la clase');
       this.gastos =this.gastos.filter(gasto => gasto.id !== id); //traemos todos menos id q intentamos eliminar
        console.log(this.gastos);
        this.calcularRestante();
    }
}

class UI {
 //no requerimos constructor pq esta basada en la otra clase
 //metodos q imprimiran html basados en la otra clase
    insertarPresupuesto(cantidad){
       // console.log(cantidad);//objeto del nuevo presupuesto

       //extraer valores:
        const { presupuesto, restante} = cantidad;
        //agregar valores al html:
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;

    }

    imprimirAlerta(mensaje,tipo){

        //Crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else{
            divMensaje.classList.add('alert-success');
        }

        //mensaje de error
        divMensaje.textContent = mensaje;

        //insertar en html
        document.querySelector('.primario').insertBefore(divMensaje, formulario); //insert before toma 2 argumentos: mensaje o que vamos a colocar, y en que parte (antes de que )

        //quitar de html
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    agregarGastoListado(gastos) {
       // console.log(gastos);

       this.limpiarHTML(); //elimina el html previo

       //iterar sobre los gastos
       gastos.forEach (gasto => {
        //console.log(gasto);
        const {cantidad, nombre, id} = gasto;
        //crear un LI
        const nuevoGasto = document.createElement('li');
        nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'; //classname solo reporta clases q hay
        //agregar id:
        nuevoGasto.dataset.id = id;  //dataset agrega data-(lo que sea despues del punto)
        //agregar el html del gasto
        nuevoGasto.innerHTML = `
            ${nombre}<span class="badge badge-primary badge-pill">$${cantidad}</span>
        `;
        //boton para borrar gasto
        const btnBorrar = document.createElement('button');
        btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
        btnBorrar.innerHTML = 'Borrar &times';

        //hasta q le de click manda a llamar gasto y le pasa el id:
        btnBorrar.onclick = () => {
            eliminarGasto(id);
        }
        
        //agregar btn de borrar
        nuevoGasto.appendChild(btnBorrar);
        
        //agregar el html
        gastoListado.appendChild(nuevoGasto);

       });
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;

    }
    
    //colores presupuesto restante
    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        //comprobar q me queda 25%
        //la cuarta parte son 25
        if((presupuesto/4) > restante){ //si llevamos restante mas de la cuarta parte del presupuesto entonces ya gaste 75% del presupuesto
            
            //console.log('ya gastaste el 75%');
            restanteDiv.classList.remove('alert-success', 'alert-warning');//en caso de ke este disponible, elimina alert-warning
            restanteDiv.classList.add('alert-danger');
        } else if((presupuesto/2) > restante){
            //console.log('has gastado la mitad');
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else { //reembolsar
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        //si total es 0 o menor:
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button [type="submit"]').disabled = true;
        }
    }

}

//instanciar
const ui = new UI();
let presupuesto;

//Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    //console.log(Number(presupuestoUsuario));//asi evitamos que usuario ponga letras, sale NaN, ademas de funcion isNan()

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload(); //recarga la pagina
    }

    //presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
   // console.log(presupuesto); //esta de color azul, por tanto si se convirtio a number (string es de color negro en consola chrome)
    ui.insertarPresupuesto(presupuesto);//presupuesto es un objeto

}

//añade gastos
function agregarGasto(e){
    e.preventDefault();
    //leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //validaciones
    if(nombre === ''||cantidad === ''){
       // console.log('ambos campos son obligatorios');
       ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
       return;
    } else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    } 

    //console.log('Agregando gasto');

    //generar objeto con el gasto
    const gasto = {nombre, cantidad, id: Date.now()} //extructuring es al reves, no extrae sino que une esas prop a gasto //mejoria del objeto literal /object literal in handsmeny
    //estamos creando un objeto:
    // const gasto = {
    //     nombre,
    //     cantidad,
    //     id: Date.now()
    // }
   // console.log(gasto);

    presupuesto.nuevoGasto(gasto);
    
    //mensaje de todo ok cuando agrego gasto
    ui.imprimirAlerta('Gasto agregado correctamente');

    //imprimir los gastos
    //agrego lo restante para agregarlo a la ui (html)
    const {gastos, restante} = presupuesto; //para no pasar objeto completo, solo lo q usaremos
    ui.agregarGastoListado(gastos);
    ui.actualizarRestante(restante);
    //poner colores segun se acaba presupuesto:
    ui.comprobarPresupuesto(presupuesto);
    //reinicia formulario cuando se agrega gasto:
    formulario.reset();

    

}

function eliminarGasto(id){
   // console.log(id);
   //elimina gastos del objeto:
   presupuesto.eliminarGasto(id);

   //elimina gastos del html:
   const {gastos , restante} = presupuesto;
   ui.agregarGastoListado(gastos);

   ui.actualizarRestante(restante);
   ui.comprobarPresupuesto(presupuesto);
}