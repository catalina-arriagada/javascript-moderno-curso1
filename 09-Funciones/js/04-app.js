function sumar(a,b){ //a y b son parametros (valores teoricos,dinamicos)//son variables
    console.log(a+b);
};

sumar(2,3); //2 y 3 son argumentos (valores reales)

sumar(200, 184);
sumar(124, 321);

//ejemplo:
function saludar(nombre,apellido){//nombre y apellido son variables
    console.log(`hola ${nombre} ${apellido}`);
}

saludar('juan','caca');
saludar('juan');//juan undefined
saludar();//undefined undefined

//pero se le puede pasar valores por default