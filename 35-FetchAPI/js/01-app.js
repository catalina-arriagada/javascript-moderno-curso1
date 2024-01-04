//fetchAPI 
//solo puede leer texto plano o JSON, hay que convertir
//obtener txt va a obtener datos de data/datos.txt
//utiliza promise. Fetch tiene incluido el resolve y el reject
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';
    fetch(url) //de la url manda respuesta al navegador
        .then(respuesta => {
            console.log(respuesta); //status 200. 404 si no lo encuentra el archivo
            console.log(respuesta.status); //status 200. 404 si no lo encuentra el archivo
            console.log(respuesta.statusText); //OK
            console.log(respuesta.url); //http://127.0.0.1:5500/35-FetchAPI/data/datos.txt
            console.log(respuesta.type); //tipo de consulta: basic

            return respuesta.text()//si fuera json seria .json() //entonces la respuesta la quiero como json
            //entonces ejecuta/lee los datos de la consulta, ya diciendole que es un texto en el return
            .then(datos => { //ya esta el resolve, por lo que lo lee automaticamente
                console.log(datos);
            })
            //encaso de q haya error en la consulta:
            .catch(error => {
                console.log(error);
            })
        
        })
}

