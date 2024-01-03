//Indexed DB
//Es una api para almancenar grandes BD como BD estructuradas como MySql, etc
//a diferencia de la localstorage puede almancenar strings pero tb booleans, archivos, cualquier tipo de dato soportado por js
//no tiene limites de tamaño conocidos, aunque pide permisos por mas de 50mb
//soportada en todos los navegadores en su ultima version

//Es diferente a localstorage:
//localstorage sirve para poca info
//indexdb es BD completa
//datos estaran visibles en pestañas del navegador
//evita almacenar info confidencial, passwords o tarjetas de credito

//Firefox: almacenamiento/DB indexada
//Chrome: aplication/Storage/IndexedDB

//window.indexDB //colocar esto en consola y veremos todos los metodos de indexedDB

let DB; 

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 2000)
});

function crmDB(){
    //crear Base de datos version 1.0
    //metodos estan en window.indexedDB. ('nombre', versión)
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear BD');
    }
    
    //Si se creó bien
    crmDB.onsuccess = function() {
        console.log('todo ok, BD creada');
        DB = crmDB.result;
    }

    //Configuración de la BD, columnas, nombres, etc, id autoincrementable, createtable, etc:
    //Actualizar BD
    crmDB.onupgradeneeded = function(e) {
        console.log('Este metodo solo se ejecuta una vez'); //cuando la BD es creada, pero no se muestra el mensaje cuando refresco la pagina
        console.log(e.target.result);//sale la bd entera
        //DBDatabase {name: 'crm', version: 1, objectStoreNames: DOMStringList, onabort: null, onclose: null, …}
        const db = e.target.result;

        //definir object store:interactua con bd
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });//(argumento 1: nombre bd, argumento 2: objeto de configuracion)
    
        //definir las columnas //squima
        //(nombre, nombre referencia del keypath,otras opciones)
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});

        console.log('columnas creadas');

    }//ya no se ejecuta cuando recargo la 2da vez


}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite'); //(donde sera la transaccion -en la bd crm, modo (lectura read only, etc))
    
    //si se completa transaccion
    transaction.oncomplete = function() {
        console.log('transaccion completada');
    }
    //si hay error en transaccion
    transaction.onerror = function(){
        console.log('hubo error en la transaccion');
    }

    //escribir objeto en la BD
    const objectStore = transaction.objectStore('crm'); //utilizaremos crm nuestra bd
    //crear objeto:
    const nuevoCliente = {
        telefono: 1223,
        nombre: 'aac',
        email: 'correo@jdskf.cl'
    }

    //agregar registros
    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);

    //actualizar registros: .put
    //eliminar registros: .delete

}



