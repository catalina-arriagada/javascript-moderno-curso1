//Constructor Pattern
//Padre de constructor

//En este patron se usa clase (principal, padre) base que sirve como plano para que las demas clases hereden de esta.
class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

//muchas personas dicen q esto se conoce como un antipatron
class Cliente extends Persona {
    constructor(nombre, email, empresa){
        super(nombre,email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente ('miguel', 'correo', 'empresa');
console.log(cliente)

//tambien podemos instanciar Persona
const persona = new Persona ('miguel2', 'correo2');
console.log(persona)
