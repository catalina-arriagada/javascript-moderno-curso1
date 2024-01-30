import Citas from '../js/classes/Citas';

describe('probar clase Citas', () => {
    
    const citas = new Citas();
    
    test('test para agregar nueva cita', () => {
        const citaObj = {
            mascota: 'Hook',
            propietario: 'j',
            telefono: '111',
            fecha: '10-12-10',
            hora:'10:30',
            sintomas: 'aaa'
        };
        citaObj.id = Date.now();
        citas.agregarCita(citaObj);

        //Escribir prueba
        expect(citas).toMatchSnapshot(); //que clase se esta guardando correctamente
        
    })
})