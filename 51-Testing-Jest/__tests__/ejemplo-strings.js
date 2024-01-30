const password = "123456";
describe('pruebas: valida q password no este vacio y que tenga 6 caracteres de extension', () => {
    test('Que el pass tenga 6 caracte',() => {
        //codigo q valida esta prueba
        expect(password).toHaveLength(6); //npm t
    });
    test('pass no vacio',()=>{
        expect(password).not.toHaveLength(0); //que no tenga extension de 0
    })

});