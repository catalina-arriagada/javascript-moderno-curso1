//Constructores

//Objeto cotizaciones
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//prototyoe de seguro
//realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function() {
    //tenemos precio base, y en base a el se incrementa el valor del seguro
    //1 Americano incrementa valor 1.15, 2 asiatico 1.05, 3 europeo 1.35
    console.log(this.marca);

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;

        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    console.log(cantidad);

    //por cada año menos lo reducimos en 3%
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia * 3) * cantidad) / 100; //porcentaje de diferencia entre año seleccionado y el actual
    console.log(cantidad);

    //Si el seguro es basico se multiplica un 30% mas
    //si el seguro es completo se multiplica por un 50% mas
    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;

    }

    //console.log(cantidad);
    return cantidad;
    
}

//objeto interfaz de usuario.
//no le vamos a pasar nada porque depende del objeto anterior
//pero para agregar prototype debemos declararlo constructor
function UI(){}


//crear proto con interfaz de usuario:
//llena las funciones de los años
UI.prototype.llenarOpciones = () => { //no usare this
    const max = new Date().getFullYear(),
          min = max - 20;
    const selectYear = document.querySelector('#year');

    //iterar desde año max a minimo creando las opciones del Select
    //iniciamos en 2024
    for(let i = max; i > min; i-- ){
        //creamos un elemento option en html
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//Prototype que Muestra alertas en pantalla:
UI.prototype.mostrarAlerta = (mensaje, tipo) => { //el tipo le agregara los estilos ya definidos en css
    const div = document.createElement('div');
    
    // if(tipo === 'error'){
    //     div.classList.add('mensaje', 'error');
    // } else {
    //     div.classList.add('mensaje', 'correcto');
    // }

    //para eliminar ese mensaje duplicado:
    if(tipo === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //insertar en html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));//quiero insertarlo entre div cargando y div resultado. LO INSERTO ANTES DE #RESULTADO

    setTimeout(() =>{
        div.remove();
    }, 3000);
}

//mostrar cotizacion:
UI.prototype.mostrarResultado = (total, seguro) => {

    const {marca, year, tipo} = seguro;

    //la marca sale como 1 en valor del html, por tanto:
    let textoMarca;
    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
    
        default:
            break;
    }

    //crear resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    //resultadoDiv.appendChild(div); //la idea es q este codigo se ejecute una vez la alerta y spinner haya desaparecido

    //mostrar spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout (() => {
        //spinner.remove(); //se borra spiner //pero salta error al poner otra cotizacion porque se borra para siempre el block, mejor poner:
        spinner.style.display = 'none'; // para q solo desaparezca

        resultadoDiv.appendChild(div); //luego se muestra resultado
    },3000);
}

//tenemos nuestro 1er proto de user interface, y ahora lo instanciamos:
const ui = new UI();
console.log(ui);

//una vez haya cargado documento voy a llamar a las funciones
document.addEventListener("DOMContentLoaded", () => {
    ui.llenarOpciones(); //llena las opciones con los años
});

eventListeners();
function eventListeners() {
    //para validar formulario
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();
    //console.log('cotizando');

    //leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    //console.log(marca);


    //leer año seleccionada
    const year = document.querySelector('#year').value;
    //console.log(year);

    //leer tipo cobertura seleccionada
    const tipo = document.querySelector('input[name="tipo"]:checked').value;//seleccionar radio buttons
    //console.log(tipo);

    //si estan vacios los campos:
    if(marca === '' || year === '' || tipo === ''){
        //console.log('no paso la validacion');
        ui.mostrarAlerta(`Todos los campos son obligatorios`, `error`);
        return;
    } 

    ui.mostrarAlerta(`Cotizando...`,`exito`);

    //limpiar cotizaciones previas
    const resultados = document.querySelector('#resultado div'); //selecciono div dentro de resultado
    //si hay un div dentro de resultado, lo elimina: (se agrega div al agregar cotizacion)
    if(resultados != null){
        resultados.remove();
    }

    //Instanciar seguro
    const seguro = new Seguro(marca, year, tipo);
    console.log(seguro);
    seguro.cotizarSeguro();

    const total = seguro.cotizarSeguro();

    //instanciar usar- prototype de cotizar
    ui.mostrarResultado(total, seguro);

}
