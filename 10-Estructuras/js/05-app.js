//no es necesario poner autentiado==true porque se da por hecho que usuario esta autenticado.
const auenticado = true;
if(autenticado) {
  console.log('usuario autenticado');
}
//videojuego ej:
const puntaje2 =500;
  if (puntaje2 > 300) {
  console.log('felicidades beun puntaje');
  return;
}


 const puntaje =500;
//si le pongo un return ya no se ejecuta el resto del codigo, pero solo 
//funciona dentro de un if que esté dentro de una funcion.
function revisarPuntaje(){
 
    if(puntaje > 300) {
    console.log('felicidades buen puntaje');
    return;
    }
    if(puntaje > 300) {
    console.log('felicidades buen puntaje');
    return;
  }
}
//si le pongo un return ya no se ejecuta el resto del codigo, pero solo 
//funciona dentro de un if que esté dentro de una funcion.