const carrito = ['prod1','prod2','prod3'];
describe('testing al carrito', () => {
    test('probar que el array tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });
    test('probar que el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0);
    });
})