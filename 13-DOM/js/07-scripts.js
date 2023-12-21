//traversing the dom (atravesar el dom)
//ir recorriendo dom por donde me interesa

const navegacion = document.querySelector('.navegacion');
//enlaces en js son 'nodos'
console.log(navegacion.childNodes); //los espacios en blanco son considerados elementos: se guardan en el navegador como 'text'
//pero existe otra manera de eliminar los text:
console.log(navegacion.children);//solo elementos reales
console.log(navegacion.children[0]);//acceder a posicion
//existe nodeType y nodeName
console.log(navegacion.children[0].nodeName);//A (etiqueta html)
console.log(navegacion.children[0].nodeType);//1 (el nodetype es de tipo 1 segun la documentacion de nodetype: son los elementos)
//existen mas propiedades de nodos

//
const card = document.querySelector('.card');
console.log(card.children[1].children);//ir al hijo del hijo en espacio 1

//ir del padre al hijo:
card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);

//Traversing el hijo al padre
console.log(card.parentNode);//ir de hijo al padre. Pero toma en cuenta espacios en blanco
console.log(card.parentElement);//este si no toma en cuenta espacios en blanco
console.log(card.parentElement.parentElement.parentElement);//el padre del padre del padre(de dentro hacia afuera en el html)

//si hay varios card en un misma etiqueta, se consideran hermanos
console.log(card.nextElementSibling);//selecciona el segundo elemento
console.log(card.nextElementSibling.nextElementSibling);//selecciona el tercero (el siguiente)

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);//selecciona un elemento antes del 4to

//seleccionar primer elemento
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);//ultimo elemento

//eliminar elementos:
const enlace = document.querySelector('a');
//primera forma:
enlace.remove();
//Segunda forma:
//eliminar desde el padre:
const navegacion1 = document.querySelector('.navegacion');
//eliminar posicion 2:
navegacion1.removeChild(navegacion.children[2]);
console.log(enlace);