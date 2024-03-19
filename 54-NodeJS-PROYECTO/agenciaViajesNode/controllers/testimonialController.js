import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    //console.log(req.body)

    //Validar fomrulario
    const {nombre, correo, mensaje} = req.body;
    
    const errores = []; //hacemos un arreglo para acumular los errores y luego mostrarlos en la vista

    if(nombre.trim() === ''){
        errores.push({mensaje: 'nombre vacio'}) //agregar error
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'correo vacio'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'mensaje vacio'})
    }

    if(errores.length > 0) {
        //consultar BD tabla de testimoniales con testimonios existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar misma vista (testimoniales) pero con errores
        res.render('testimoniales', { //render toma: ('vista', info que deseo enviar)
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales //mostrar testimoniales para vista errores
        })
    } else {
        //Almacenar datos de testimonial en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }
}
export {
    guardarTestimonial
};