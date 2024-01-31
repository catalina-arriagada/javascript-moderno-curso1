import Citas from '../js/classes/Citas';

describe('probar clase Citas', () => {
    
    const citas = new Citas();
    const id = Date.now();

    test('test para agregar nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'j',
            telefono: '111',
            fecha: '10-12-10',
            hora:'10:30',
            sintomas: 'aaa'
        };
        citas.agregarCita(citaObj);

        //Escribir prueba
        expect(citas).toMatchSnapshot(); //que clase se esta guardando correctamente
        
    })
    test('actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'nuevo nombre',
            propietario: 'j',
            telefono: '111',
            fecha: '10-12-10',
            hora:'10:30',
            sintomas: 'aaa2'
        };
        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    })
    test('eliminar cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    })
})

//npm t -- -u