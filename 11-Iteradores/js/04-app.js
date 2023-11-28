//while
//se jecuta mientras condicion sea true

//let i=0;//inicializar
// while(i<10){//condicion
//     console.log(`numero ${i}`);
//     i++;//incremento
// }


let i=1;//inicializar
while(i<10){//condicion
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} fizz buzz`);
    }else if (i % 3 === 0){
        console.log(`${i} fizz`);
    }else if (i % 5 === 0){
        console.log(`${i} buzz`);
    }
    i++;//incremento
}

let ii=1;//inicializar
while(ii<10){//condicion
    if (ii % 2 === 0){
        console.log(`${ii} par`);
    }else if(ii % 3 === 0){
        console.log(`${ii} impar`);
    }
    ii++;//incremento
}