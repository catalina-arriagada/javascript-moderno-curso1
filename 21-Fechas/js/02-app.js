//cambiar formato segun el lugar donde vivo en consola del navegador:
new Date().toLocaleString(); //fecha y hora
new Date().toLocaleTimeString(); // hora
new Date().toLocaleDateString(); // fecha

//libreria moment://permite pasar fechas al formato que se desee
moment(); //desde la consola

//codigo ide:
moment.locale('es'); //que coloque fechas en español
console.log(moment().format('MMMM Do YYYY h:mm:ss a')); //te retorna la fecha con formato que le pase
//mes dia año hora:minutos:segundos am/pm
//momentjs.com estan todos los formatos q soporta

//formato predeterminado en pagina web de moment:
console.log(moment().format('LLLL', diaHoy));
console.log(moment().add(3, 'days').calendar());//q se muestre dia actual, más 3 dias