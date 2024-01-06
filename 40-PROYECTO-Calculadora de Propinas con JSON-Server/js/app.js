let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

//¿que son los numeros de las categorias?
const categorias = {
    1: "Comida",
    2: "Bebidas",
    3: "Postres",
}

const btnGuardarCliente = document.querySelector('#guardar-cliente').addEventListener('click', guardarCLiente);
const formulario = document.querySelector('.modal-body form');
const platillosDiv = document.querySelector('#platillos .contenido');

function guardarCLiente(){
    //console.log('desde funcion')
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //revisar si hay campos vacios
    const camposVacios = [ mesa, hora].some(campo => campo === ''); //.some verifica que al menos uno de los campos de un array cumpla con condicion //verifica cual esta vacio

    //validacion si existen campos vacios
    if(camposVacios) {
        //console.log('hay campo vacio')
        alerta("Todos los campos son obligatorios");
        return;
    } 
    
    //console.log('validado');
    //console.log(cliente);

    //asignar datos llenos de formulario a cliente
    cliente = {...cliente, mesa, hora}
    //console.log(cliente);

    //ocultar modal cuando ya se haya guardado
    const modalFormulario = document.querySelector('#formulario');
    //getInstance metodo bootstrap que obtiene modal actual (en este caso del formulario)
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide(); //metodo bootstrap para ocultar modal
    //console.log(cliente);

    //mostrar secciones platillos y resumen (solo si pasa la validacion y si se cierra modal)
    mostrarSecciones();

    //Obtener platillos de API json server
    obtenerPlatillos();
    
}

//llamada a API
function obtenerPlatillos(){
    const url = `http://localhost:4000/platillos/`;
    fetch(url)
        .then(result => result.json())
        .then(data => mostrarPlatillos(data))
        .catch(error => console.log(error))
}

function alerta(mensaje){
    const existe = document.querySelector('.alertaExiste');

    if(!existe){
        const alerta = document.createElement('div');
        alerta.classList.add('invalid-feedback', 'd-block', 'text-center', 'alertaExiste');
        alerta.textContent = mensaje;
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none'); //es All porque requiero mas de un elemento (todos los q tengan esa clase, no solo el primero)
    seccionesOcultas.forEach(seccion => {
        return seccion.classList.remove('d-none');//borro la clase d-none
    });

}

function mostrarPlatillos(data){

    data.forEach( platillo => {
        const{id, nombre, precio, categoria} = platillo;
        const platillos = document.createElement('div');
        platillos.classList.add('row', 'py-3', 'border-top');
        
        //nombre
        const nombrePlatillo = document.createElement('DIV');
        nombrePlatillo.classList.add('col-md-4');
        nombrePlatillo.textContent = `${nombre}`;

        //precio
        const precioPlatillo = document.createElement('DIV');
        precioPlatillo.classList.add('col-md-3', 'fw-bold');
        precioPlatillo.textContent = `Precio: $${precio}`;

        //categoria
        const categoriaPlatillo = document.createElement('DIV');
        categoriaPlatillo.classList.add('col-md-3');
        categoriaPlatillo.textContent = `Categoría: ${categorias[categoria]}`;

        const inputCantidad = document.createElement('input');
        //console.log(inputCantidad);
        inputCantidad.type = 'number'; //se agrega number al tag de type="" en el html del input
        inputCantidad.min = 0; //se agrega un min en el html tag
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`; //se agrega un id a cada input
        inputCantidad.classList.add('form-control'); //clase bootstrap para inputs

        //funcion que detecta cantidad y platillo agregado
        //es como addeventlistener
        inputCantidad.onchange = () => {
            const cantidad = parseInt(inputCantidad.value);

            agregarPlatillo({...platillo, cantidad});
        };

        //div de input
        const agregarInput = document.createElement('div');
        agregarInput.classList.add('col-md-1');

        agregarInput.appendChild(inputCantidad); 
        platillos.appendChild(nombrePlatillo);
        platillos.appendChild(precioPlatillo);
        platillos.appendChild(categoriaPlatillo);
        platillos.appendChild(agregarInput);
        platillosDiv.appendChild(platillos);   

    })
    
}

function agregarPlatillo(producto){
    //detecta estas acciones cuando haya un cambio (onchange) en inputCantidad: inputCantidad.onchange = agregarPlatillo;
    //console.log(pedido)

    let {pedido} = cliente;

    //revisar q cantidad es mayor a 0
    if(producto.cantidad > 0){//como sale en el objeto de consola
        //console.log('es mayo')

        //verificar si elemento ya existe en el array:
        //console.log(pedido.some(articulo => articulo.id === producto.id))
        if(pedido.some(articulo => articulo.id === producto.id)){
            //actualizar cantidad
            const pedidoActualizado = pedido.map(article => {
                //identifico elemento a actualizar, y si es, hago accion
                if(article.id === producto.id){
                    article.cantidad = producto.cantidad;
                }
                //se returna article para que no se pierda referencia a ese articulo
                return article; //para que asigne article a pedido.map (arreglo) y se lo pase a pedidoActualizado
            });

            //se asigna array pedidoActualizado a cliente.pedido
            cliente.pedido = [...pedidoActualizado]; //(reescribo arreglo pedido[])

           
        } else {

            cliente.pedido = [...pedido, producto]; //se agrega al final del array
        }

    } else {
        //Eliminar elementos cuando la cantidad es 0:
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);
        //en el array sigue contando que hay 4 elementos
        cliente.pedido = [...resultado];//tomamos copia del resultado y se la asignamos a cliente pedido (el array que estamos iterando hasta ahora)
        
    }

    console.log(cliente.pedido)
}

    


