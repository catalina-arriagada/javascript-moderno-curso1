const card = document.querySelector('.card');
//queryselector solo retorna MAXIMO 1 elemento: el primero q encuentre

//tiene selectores especificos como en css: 'especificidad'
const info = document.querySelector('.premium .info');
//info es hijo de premium en el html
console.log(info);

const segundoCardHospedaje = document.querySelector('section .hospedaje .card:nth-child(2)');
console.log(segundoCardHospedaje);

//si fuera id con #
//por etiqueta html no se pone # o . es: ('nav');



