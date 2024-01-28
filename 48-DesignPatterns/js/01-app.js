//Patrones de diseño en Js
//Son soluciones tipicas a problemas comunes en desarrollo de software
//soluciones universales. CADA PATRON ES CMO UN PLANO PARA RESOLVER UN PROBLEMA

//-soluciones a problemas de diseño de codigo
//-son soluciones probadas
//-son soluciones conocidas por todos, evitan escribir codigo como "cada uno entiende"

//categorias de patrones:
//- De Creacion : Permiten crear objetos y permiten la reutilizacion del codigo
//- De Estructura: Explican como deben  comunicarse los objetos y clases en grandes proyectos.
//- Comportamiento: se encargan de como se comportan y comunican los objetos.

//hay demasiados patrones de diseño, pero aprenderemos los basicos.

//Patron de Clases o Class Pattern
//Definir como deben crearse los objetos: usando clases
class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan' , 'corro@correo.com');
console.log(persona); 
//y asi de sencillo
