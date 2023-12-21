const encabezado = document.querySelector('h1');
console.log(encabezado.style);
//en js las propiedades css se leen en camel case
//ejemplo: justify-content es justifyContent

//cambiar color fondo
encabezado.style.backgroundColor = 'red';
//cambiar letra
encabezado.style.fontFamily = 'Arial';
//cambiar de min a MAY
encabezado.style.textTransform = 'uppercase';

//agregar o quitar clases:
const card = document.querySelector('.card');
//classlist como arreglo y classname como string
//agregar clase:
card.classList.add('nueva-clase', 'segunda-clase');
//eliminar clase:
card.classList.remove('card');
console.log(card.classList);

