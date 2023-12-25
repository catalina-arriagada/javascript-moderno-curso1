//prevenir event bubbling de otra manera:
//Se llama Delegation
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    console.log(e.target);
});//asi especificamos a que le estamos dando click especificamente, con target, a q elemento html

//cuales son las clases de lo q le damos click?:
cardDiv.addEventListener('click', e => {
    console.log(e.target.classList);
});

//ejemplo de uso:
cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')){
        console.log('diste click en titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('diste click en precio');
    }
    if(e.target.classList.contains('card')){
        console.log('diste click en card');
    }
});
