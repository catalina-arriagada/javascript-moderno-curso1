//hacer testing con objetos
const cliente = {
    nombre: 'Juan Pablo',
    balance: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium(si tiene mas de 400)', () => {
        expect(cliente.balance).toBeGreaterThan(400); //si es greater than mayor a 400
    });
    test('Es juan pablo', () => {
        expect(cliente.nombre).toBe('Juan Pablo'); //verificar que sea el nombre sea exactamente igual al que quiero 
    });
    test('comprobar que no sea valor(q no sea el nombre)',() => {
        expect(cliente.nombre).not.toBe('Pedro');
    });
    test('no tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });//esto sirve para evitar falsos positivos
    
});