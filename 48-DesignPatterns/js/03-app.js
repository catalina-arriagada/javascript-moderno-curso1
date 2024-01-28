//singleton
//no permite crear multiples instancias de una misma clase

let instancia = null; //no tendra nada esa instancia y una vez se instancie se va a ir llenando con info


class Cliente extends Persona {
    constructor(nombre, email, empresa){
        // this.nombre = nombre;
        // this.email = email;
       // instancia = this; //una vez lo este instanciando le asignara los valores de nombre e email
        //por tanto este valor tendra algo ya 

        //como prevenir crear multiples objetos:
        if(!instancia){
            //si instancia no tiene nada entonces crea estos objetos
            this.nombre = nombre;
            this.email = email;
        } else {
            //retorna la instancia actual
            return instancia;
        }
    }
}

const persona = new Persona ('miguel2', 'correo2');
console.log(persona)

//No retorna esta, sino la primera, ya que ya valide que no se pudiera crear otra
const persona2 = new Persona ('miguel3', 'correo3');
console.log(persona)