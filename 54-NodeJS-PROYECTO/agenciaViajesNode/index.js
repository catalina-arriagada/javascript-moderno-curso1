//common js: (version antigua)
// const express = require('express'); //extraer express del package express
//nueva version de imports:
import express from 'express';
//importar router:
import router from './routes/index.js';

//importar host:
import dotenv from 'dotenv';

//importar BD:
import db from './config/db.js';

//Conectar BD:
db.authenticate()
    .then(() => console.log('conectado bd'))
    .catch(error => console.log(error));

const app = express(); //ejecutar como funcion

//definir puerto
const port = process.env.PORT || 4000;

//ej
// app.get('/', (req, res) => { //req: request (lo q enviamos) - res: response (la respuesta de express)
//     res.send('Inicio');

//     // res.json({
//     //     id: 1
//     // });

//     // res.render();
// });

// app.get('/nosotros', (req, res) => { 
//     res.send('Nosotros');
// });

// app.get('/contacto', (req, res) => { 
//     res.send('Contacto');
// });

//habilitar Pug (template engine)
app.set('view engine', 'pug');

//crear mi propio middleware para obtener año actual
app.use( (req, res, next) => { //no carga pag porque tbn existe next, en orden se ejecutan los middleware (sino lo pongo no se va al sgte middleware)
    //res.locals.unaVariable = 'Una nueva variable'; //como pasar de un archivo a una vista
    
    //console.log(res.locals); //ahora puedo usar unaVariable en la vista
   
    //mostrar año en vista
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";

    return next(); //return lo forza a next 
});

//LEER req.body - Agregar body parser para leer los datos del formulario (para enviar testimonial) (leer BODY del formulario html para enviarlo)
app.use(express.urlencoded({extended: true}));

//definir la carpeta Public
app.use(express.static('public'));

//Agregar router:
//use abarca post, get, delete, etc.
app.use('/', router);//soporta get, post, put, patch, delete, todos los verbos q hay


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})

//crear pagina maestra para paginas dinamicas (container de las demas paginas): layout
