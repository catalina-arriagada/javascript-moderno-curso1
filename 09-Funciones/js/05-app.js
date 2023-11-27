
//pero se le puede pasar valores por default
//ej: sistema de banco
function saludar(nombre,apellido = 'no tiene apellido'){
    console.log(`hola ${nombre} ${apellido}`);
}

saludar('juan');//hola juan no tiene apellido o string vacío ''
saludar();//undefined no tiene apellido

