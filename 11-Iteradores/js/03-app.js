//multiplos de 3 deben imprimir fizz
//m de 5 buzz
//m 3 y 5 fizz buzz

for(let i = 1; i < 100; i++){
    //console.log(i);
    //si el resto de 3 es igual a 0 (si el numero dividido en 3 es 0)
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} fizz buzz`);
    }else if (i % 3 === 0){
        console.log(`${i} fizz`);
    }else if (i % 5 === 0){
        console.log(`${i} buzz`);
    }
}