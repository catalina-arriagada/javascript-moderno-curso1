//Composition
//Una alternativa a las clases
//Escribir muchas funciones, e ir utilizando en los objetos lo q creas q vas a necesitar

//Queremos crear funcion para obtener nombre
const obtenerNombre = info => ({ //la utilizare en objeto de empleado y cliente
    //es funcion dentro de otra funcion 
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});

//set
const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`guardando email en: ${info.nombre}`);
        info.email = email;
    }
});

//get
const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`guardando siguiente email: ${info.email}`);
    }
});


function Cliente(nombre, email, empresa){
    //Donde se guarden los valores
    let info = {
        nombre,
        email,
        empresa
    }

    //utilizar funcion obtenerNombre y mostrarNombre. Agregar estas funciones al objeto de info cliente
    return Object.assign( //assign toma funcion y la copia dentro del objeto info
        info, //le paso o q deseo copiar
        obtenerNombre(info), //le paso la info dentro de la funcion
        guardarEmail(info), //Sino le paso info, no tiene referencia el parametro de la funcion del objeto y por tanto, del valor de ese objeto
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}
//cada uno tiene empresa y puesto como unico, pero comparten los otros, en lugar de crear clase y heredar, creas funciones q vas armando y definiendo cuales son necesarias para cada objeto
function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign( //assign toma funcion y la copia dentro del objeto info
        info, //le paso o q deseo copiar
        obtenerNombre(info), //le paso la info dentro de la funcion
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Juan', null, 'Codigo con juan');
const empleado = Empleado('Pablo', null, 'empleadont');

cliente.mostrarNombre(); //usar obtener nombre
empleado.mostrarNombre(); //usar obtener nombre
cliente.agregarEmail('cliente@cliente.com'); //usar obtener nombre
empleado.agregarEmail('empleado@empleado.com'); //usar obtener nombre
cliente.mostrarEmail();
empleado.mostrarEmail();
cliente.mostrarEmpresa();//sino la necesito no tengo q usarla en la funcion empleado
empleado.mostrarPuesto();//sino la necesito no tengo q usarla en la funcion cliente


