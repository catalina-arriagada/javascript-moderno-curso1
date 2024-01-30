function suma(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

describe('testing a funciones de suma y resta', () => {
    test('suma de 20 y 30', () => {
        expect(suma(20,30)).toBe(50); //deberia retornar 30, la suma
    });
    test('resta de 10 y 5', () => {
        expect(restar(10,5)).toBe(5); 
    });
    test('qe la suma 10 y 10 no sea 10', () => {
        expect(suma(10,10)).not.toBe(10);
    });
    test('QUE LA RESTA DE 10 - 5 NO SEA OTRO VALOR',() => {
        expect(restar(10,5)).not.toBe(2);
    });
})
