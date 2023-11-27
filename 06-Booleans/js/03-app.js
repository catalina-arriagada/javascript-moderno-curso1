const autenticado =true; //true puede ser dato dinamico

//codigo mal escrito porque duplica el true
if(autenticado ===true){
    console.log('si puedes ver netflix');
}else {
    console.log('no puedes ver netflix');
}

//codigo bien, se da por implicito el true o false
if(autenticado){
    console.log('si puedes ver netflix');
}else {
    console.log('no puedes ver netflix');
}

//operador ternario:
console.log(autenticado ? 'autenticado':'noesta autentica');