const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){ //que ambas condiciones se cumplan
    console.log('si puedes comprar');
}else if(!usuario && !puedePagar){ //si no es usuario y tampoco puede pagar
    console.log('no puedes comprar');
} else if(!usuario){ //si no es usuario
    console.log('inicia sesion o registrate');
} else if(!puedePagar){ //si no puede pagar
    console.log('fondos insuficientes');
}

//or es una o la otra ||
