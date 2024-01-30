const cliente = {
    nombre: 'jp', //npm t -- -u //en la terminal, actualiza el snapshop completo si quiero modificar el objeto
    balance: 500,
    tipo:'premium'
};

describe('testing al cliente', () => {
    test('es jp', () => {
        expect(cliente.nombre).toBe('jp');
    });

    //probar objeto completo: convertir a json string pero existe en jest algo llamado los snapshots, que son datos que se crean en carpeta de strings y sobre ella podemos comparar si es el mismo dato u otro
    test('es igual al objeto completo', () => {
        expect(cliente).toMatchSnapshot();
    });
})