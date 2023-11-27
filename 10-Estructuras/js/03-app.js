//cuando hay muchos else if es mejor hacer con un switch
//switch case

const metodoPago = 'efectivo';
switch(metodoPago){
    case 'efectivo': //si paga con efectivo
        pagar();
        break;
    case 'cheque':
        console.log(`pagaste con ${cheque}`);
        break;

    default: //else: si ninguna condicion se cumple, ejecuta el default
    console.log('no ha seleccionado metodo de pago');
}

function pagar(){
    console.log(`pagando con ${efectivo}....`);
}