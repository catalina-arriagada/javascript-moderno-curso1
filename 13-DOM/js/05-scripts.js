//modificar textos o imagenes con js

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//para que imprima lo que hay en la etiqueta (texto):
console.log(encabezado.innerText);//texto dentro de comillas
//otra forma:
console.log(encabezado.textContent);//texto dentro de comillas
//otra forma, pero esta no solo trae el texto, tambn texto con etiqueta html <h1></h1>
console.log(encabezado.innerHTML);

//diferencias:
//con innerText, si en css en ese h1 le pongo visibility:hidden; no encontrara el texto y solo imprimira la etiqueta h1
//con textContent lo impirmira igual(no pasara nada)
//con innerhtml tampoco pasara nada 

//*encadenamiento*(chaining)
const encabezado2 = document.querySelector('.contenido-hero h1'.textContent);

//modificar h1 en el document (body):
const encabezado3 = document.querySelector('.contenido-hero h1'.textContent) = 'nuevo heading h1';
//tambien asi:
const nuevoHeading = 'nuevo heading h1';
const encabezado4 = document.querySelector('.contenido-hero h1'.textContent) = nuevoHeading;

//modificar imagen:
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'; //aqui lo modifico
console.log(imagen);




