//rutas

import express from 'express';
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje} from '../controllers/paginasController.js';
import {guardarTestimonial} from '../controllers/testimonialController.js';

const router = express.Router(); //utilizar router

//asignar rutas al objeto de Router:
router.get('/', paginaInicio//(req, res) => { //req: request (lo q enviamos) - res: response (la respuesta de express)
    //res.send('Inicio');
    // res.render('inicio', {
    //     pagina: 'Inicio'
    // });

    // res.json({
    //     id: 1
    // });

    // res.render();
//}
);

router.get('/nosotros', paginaNosotros//(req, res) => { 
    //res.send('Nosotros');

    //const viajes = 'Viaje a Alemania';

    //render ya espera el nombre de una vista
    // res.render('nosotros', {
    //     pagina: 'Nosotros'
    // });
    //,{
        //aqui le paso info de viajes a la vista (es un objeto:)
        //textoViajes : viajes
        //u objet literal in handsmate:
        //viajes
   // });
//}
);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje); //cargar el slug

router.get('/testimoniales', paginaTestimoniales);

//ruta hacia donde se envia formulario:
router.post('/testimoniales', guardarTestimonial);

export default router;