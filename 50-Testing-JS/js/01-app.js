//Ventajas de hacer testing:
//-mejora calidad de software evitando bugs. En lugar de repetir siempre la misma accion (ej, console logs) se puede hacer de forma mas automatica, ahorrando tiempo
//-Probar todos los diferentes escenarios puede ser complicado o tardado, pero hay herramientas que automatizan las pruebas de nuestros proyectos.
//-Hacer testing nos va a permitir liberar nuevas versiones sin las preocupaciones de que algo salga mal.

//Consideraciones
//-Sirve para saber si nuevas funciones que vas agregando a tu proyecto se comunican bien con el proyecto ya existente, como saberlo? se desconoce si interactua bien con todo: para que funcione bien con todo, q no rompa nada; TODO ESTO LO PREVENIMOS CON EL TESTING
//-Tener pruebas hara que alguien que no ha mantenido el proyecto conozca que es lo que hace cada parte de este.
//-No se hará prueba de todo, mas bien solo de como se integran las diferentes partes de la aplicacion: es la mas utilizada en web
//
//Diferentes tipos de testing:
//- El mas usado y conocido es el "End to End": es el mas interactivo, simula algunos clicks, llena formularios y asegurarse de que se muestre en pantalla lo que se desea ver: se usa mucho con CYPRESS
//- De Integración: revisa que multiples partes de nuestro proyecto funcionen bien
//Unit: pruebas unitarias: revisa que cada parte por si sola funcione bien
//Static: pruebas estaticas. Revisa por errores en el codigo mientras vas escribiendo. JEST y TYPESCRIPT se pueden usar en este tipo de testing((Si en lugar de numero le paso string typescript me dice q hay error por ejemplo))
//
//Herramientas para testing
//Jest: cada tecnologia tiene sus propias herramientas para hacer Testing, pero una muy popular es Jest. hay versiones para VueJS, Angular, TypeScript, Node, React, etc. Es necesario tener instalado Node.js
//Cypress: es una herramienta para hacer testings End to End: simula clicks y que se ve en pantalla.

//Testing sin herramientas: console.log
//Ejemplo:
//Probar 2 valores:
function suma(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

let resultado = suma(1,2);
let esperado = 3; //lo q esperamos de esta prueba //en Jest es expect

if(resultado !== esperado){
    console.log(`El resultado '${resultado}' es diferente a lo esperado '${esperado}', no ha pasado la prueba`);
}else{
    console.log('la prueba paso correctamente');
}

//los frameworks de testing tienen estas funciones ya implementadas

resultado = restar(10,3);
esperado = 5;

if(resultado !== esperado){
    console.log(`El resultado '${resultado}' es diferente a lo esperado '${esperado}', no ha pasado la prueba`);
}else{
    console.log('la prueba paso correctamente');
}

