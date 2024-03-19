import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => { //req: request (lo q enviamos) - res: response (la respuesta de express)
    
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));

    //Consultar 3 viajes del modelo Viaje
    try {
        const resultado = await Promise.all(promiseDB); //asi ambas consultas se ejecutan al mismo tiempo (de inicio y testimonial)

        //res.send('Inicio');
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => { 

    const viajes = 'Viaje a Alemania';

    //render ya espera el nombre de una vista
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { 
    //Consultar BD:
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => { 

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
}

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    //console.log(req.params)
    const {slug} = req.params;
    try {
        const viaje = await Viaje.findOne({ where: {slug} });
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}

