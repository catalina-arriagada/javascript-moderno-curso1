//event bubbling
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', () => {
    console.log('click en card');
});

infoDiv.addEventListener('click', () => {
    console.log('click en info');
});

titulo.addEventListener('click', () => {
    console.log('click en titulo');
});

//hago click en info pero se propaga al padre pq tambien le hago click en card(esta dentro info de card)
//esto es propagacion de eventos o event bubbling

//se soluciona con este codigo en vez del anterior:
cardDiv.addEventListener('click', e => {
    e.stopPropagation(); //previene la propagacion del bubbling
    console.log('click en card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo');
});
//asi se evita gracias al stopPropagation

