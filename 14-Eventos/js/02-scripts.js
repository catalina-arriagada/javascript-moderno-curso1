const nav = document.querySelector('.navegacion');
//registrar un evento:
nav.addEventListener('click', () => {
    console.log('click en nav');
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando en nav');
});//es como un focus (hover)

nav.addEventListener('mouseout', () => {
    console.log('saliendo de nav');
});//focus out

nav.addEventListener('mousedown', () => {
    console.log('entrando de nav');
});//similar a click. se ejecuta cuando presiono mouse
nav.addEventListener('mouseup', () => {
    console.log('saliendo de nav');
});//se ejecuta cuando suelto el click
nav.addEventListener('dblclick', () => {
    console.log('doble click de nav');
});//cuando archivo se abre con doble clock




