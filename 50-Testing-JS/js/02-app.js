function suma(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

async function sumaAsync(a,b){
    return Promise.resolve(suma(a,b));
}

let resultado = suma(1,2);
let esperado = 3; 

expected(esperado).toBe(resultado);

resultado = restar(10,3);
esperado = 5;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);
test('Suma 10 +20 debe ser 30', async() => {
    const resultado = await sumaAsync(10,20);
    const esperado = 30;
    expected(esperado).toBe(resultado);
})

async function test(mensaje, callback){
    try {
        await callback();
        console.log(`El test ${mensaje} se ejecuto correctamente`)
    } catch (error) {
        console.log('Error: ', error)
    }
}

function expected(esperado){
    return {
        toBe(resultado){
            if(resultado !== esperado){
                console.log(`El resultado '${resultado}' es diferente a lo esperado '${esperado}', no ha pasado la prueba`);
            }else{
                console.log('la prueba paso correctamente');
            }
        },
        toEqual(resultado){
            if(resultado !== esperado){
                console.log(`El resultado '${resultado}' noes igual a lo esperado '${esperado}', no ha pasado la prueba`);
            }else{
                console.log('la prueba paso correctamente');
            }
        }
    }
}