//Implicit Binding 
//Tipo de This
//Se da por implicito donde encontrar el valor
//Con la palabra this le dice donde encontrar sus valores
const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion(){
        console.log(`Mi nombre es ${nombre}`)
    }
}

usuario.informacion();//nombre no esta definido

//hay q decirle donde encontrarlo, se agrega this en nombre para eso: le digo que en esta misma llave encontraras los valores
const usuario2 = {
    nombre: 'Juan',
    edad: 20,
    informacion(){
        console.log(`Mi nombre es ${this.nombre}`)
    },
    mascota: {
        nombre: 'Hook',
        edad:1,
        informacion(){
            console.log(`mi nombre es ${this.nombre}`)
        }//nose confunde con el otro this
    }
}

usuario2.informacion();
usuario2.mascota.informacion();//le digo de forma muy implicita donde encontrare los datos(aqui-this.)

