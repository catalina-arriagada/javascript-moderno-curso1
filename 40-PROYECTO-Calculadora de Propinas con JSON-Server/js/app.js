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

    //limpiar html previo de resumen pedido:
    //solo dejaremos la ultima mesa
    limpiarResumen();

    if(cliente.pedido.length){
        actualizarResumen();
        
    }else{
        
        mensajePedidoVaciar();
    }

    //console.log(cliente.pedido)
    
}

function actualizarResumen(){
    //console.log('desde')
    const contenidoResumen = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6', 'card', 'py5', 'px-3', 'shadow');

    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold', 'mt-4');
    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');
    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);
    resumen.appendChild(mesa);

    //heading
    const heading = document.createElement('h3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4', 'text-center');

    //iterar sobre los elementos del pedido:
    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');
    const {pedido} = cliente;
    pedido.forEach(articulo => {
        const {nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('li');
        lista.classList.add('list-group-item', 'mb-4');

        const nombreElem = document.createElement('h4');
        nombreElem.classList.add('my-4');
        nombreElem.textContent = nombre;

        const cantidadElem = document.createElement('p');
        cantidadElem.classList.add('fw-bold');
        cantidadElem.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        const precioElem = document.createElement('p');
        precioElem.classList.add('fw-bold');
        precioElem.textContent = 'Precio: $';

        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = precio;

        //precioxcantidad: total
        const subtotalElem = document.createElement('p');
        subtotalElem.classList.add('fw-bold');
        subtotalElem.textContent = 'Subtotal: $';

        const subtotal = document.createElement('span');
        subtotal.classList.add('fw-normal');
        subtotal.textContent = calcularSubtotal(precio, cantidad);

        //btn para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent ='Eliminar del Pedido';
        //funcion apra eliminar del pedido
        btnEliminar.onclick = function() {
            eliminarProducto(id);
        }

        cantidadElem.appendChild(cantidadValor);
        precioElem.appendChild(precioValor);
        subtotalElem.appendChild(subtotal);
        //agregar elementos al li
        lista.appendChild(nombreElem);
        lista.appendChild(cantidadElem);
        lista.appendChild(precioElem);
        lista.appendChild(subtotalElem);
        lista.appendChild(btnEliminar);
        
        //agregar lista al grupo principal
        grupo.appendChild(lista);

        
    })


    resumen.appendChild(heading);
    hora.appendChild(horaSpan);
    resumen.appendChild(hora);
    
    resumen.appendChild(grupo);
    contenidoResumen.appendChild(resumen);

    //mostrar formulario de propinas
    formularioPropinas();

}

function limpiarResumen(){
    const limpiarContenido = document.querySelector('#resumen .contenido');
    while(limpiarContenido.firstChild){
        limpiarContenido.removeChild(limpiarContenido.firstChild);
    }
}

function calcularSubtotal(pre, cant){
   return parseInt(pre*cant);
}

function eliminarProducto(id){
    const {pedido} = cliente;
    //Eliminar elementos cuando la cantidad es 0:
    const resultado = pedido.filter(articulo => articulo.id !== id);
    //en el array sigue contando que hay 4 elementos
    cliente.pedido = [...resultado]; 
    
    limpiarResumen();

    if(cliente.pedido.length){
        actualizarResumen();
    }else {
        mensajePedidoVaciar();
    }

    //si el producto se elimina quiero que diga 0 en el input
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = '0';
    
    
    
}

function mensajePedidoVaciar(){
    const contenido = document.querySelector('#resumen .contenido');
    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);
}

function formularioPropinas(){
    //console.log('mostrando')
    const contenido = document.querySelector('#resumen .contenido');
    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6', 'formulario');

    const formularioDiv = document.createElement('div');
    formularioDiv.classList.add('card', 'py-5', 'px-3', 'shadow');

    const heading = document.createElement('h3');
    heading.classList.add('my-4','text-center');
    heading.textContent = 'Propina';

    //radio button tipo input 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value= '10';
    radio10.classList.add('form-ckeck-input');
    radio10.onclick = calcularPropina;
    //label:
    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-ckeck-label');
    //div
    const radio10Div =  document.createElement('div');
    radio10Div.classList.add('form-check');

    //radio button tipo input 25%
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value= '25';
    radio25.classList.add('form-ckeck-input');
    radio25.onclick = calcularPropina;
    //label:
    const radio25Label = document.createElement('label');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-ckeck-label');
    //div
    const radio25Div =  document.createElement('div');
    radio25Div.classList.add('form-check');
    
    //radio button tipo input 50%
    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value= '50';
    radio50.classList.add('form-ckeck-input');
    radio50.onclick = calcularPropina;
    //label:
    const radio50Label = document.createElement('label');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-ckeck-label');
    //div
    const radio50Div =  document.createElement('div');
    radio50Div.classList.add('form-check');


    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);
    
    //agregar al div principal
    formularioDiv.appendChild(heading);
    formularioDiv.appendChild(radio10Div);
    formularioDiv.appendChild(radio25Div);
    formularioDiv.appendChild(radio50Div);

    //agregar al formulario
    formulario.appendChild(formularioDiv);
    contenido.appendChild(formulario);
    
    
}

function calcularPropina(){
    //console.log('desde calcular');
    const {pedido} = cliente;
    let subtotal = 0;

    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio; //Calcular total sin propina
    })
    //console.log(subtotal)

    //seleccionar radio que selecciono el usuario
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;
    //console.log(propinaSeleccionada)// 10, 25 50

    //convertir de string a numero
    //calcular propina
    const propina = ((subtotal * parseInt(propinaSeleccionada))/100);//regla de 3 para sacar porcentaje
    //console.log(propina)

    //calcular total
    const total = subtotal + propina;

   // console.log(total)
   mostrarTotalHTML(subtotal, total, propina);

}

function mostrarTotalHTML(subtotal, total, propina){
    const formulario = document.querySelector('.formulario > div');
    //subtotal
    const subtotalParrafo = document.createElement('p');
    subtotalParrafo.classList.add('fs-3', 'fw-bold', 'mt-5');
    subtotalParrafo.textContent= 'Subtotal Consumo: ';

    const subtotalSpan = document.createElement('span');
    subtotalSpan.classList.add('fw-formal');
    subtotalSpan.textContent = `$${subtotal}`;

    //total a pagar
    const divTotales = document.createElement('div');
    divTotales.classList.add('total-pagar');


    subtotalParrafo.appendChild(subtotalSpan);
    divTotales.appendChild(subtotalParrafo);
    formulario.appendChild(divTotales);

}




//json-server --watch db.json --port 4000
//http://localhost:4000/platillos/


