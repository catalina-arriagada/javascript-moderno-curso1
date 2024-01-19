//New Binding
//Es la Programacion orientada a objetos en versiones anteriores de javascript
//
function Auto(modelo, color){
    //Como almaceno estos datos dentro de auto?:
    this.modelo = modelo;
    this.color = color; //este this es el binding, pero se conoce como New Binding, es decir, cada vez q se crea un nuevo objeto, tengo acceso a este binding
}
const auto = new Auto('Camaro', 'Negro');
console.log(auto); //se asignan los valores que tengo en auto

//Existe otro tipo de binding
//Window Binding
function hola() {
    console.log(color);
}

hola(); //color no esta definido

//Con window binding puedo asignar con esto una variable a la ventana global

window.color = 'negro';
function hola() {
    console.log(color);
}

hola();//negro //fue a buscar la variable a la ventana global, y js lo busca aqui sino encuentra una variable declarada
//window es la ventana global



