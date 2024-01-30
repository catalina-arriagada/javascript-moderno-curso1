import suma from '../js/funciones';

describe('Suma de 2 numeros', () => {
    test('sumar 10 y 30 debe dar como resultado 30', () => {
        expect(suma(10,20)).toBe(30);
    })//test Suites son los archivos (falla el archivo)
})

//en lugar de export o import, jest utiliza module.exports, y en lugar de import from , utilizamos const suma = require('carpeta'),porque funciona sobre node (modulos de common.js)
//en common js no funcionan en navegador, otra opcion es crear diferentes variaciones de las funciones, q hagan lo mismo pero que una tenga sintaxis de common js y otra de import, tercera opcion habilitar babel(escribir codigo de versiones nuevas y llevarlo a versiion compilada de version vieja)
//transmirarlo con babel para q lea node
//habilitar babel: crear archivo .babelrc e instalar npm i --save-dev @babel/preset-env
