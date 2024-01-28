//Patron mediador / Mediator o Intermediario
//es un patron de diseño q se comunica con varios objetos a la vez para objetivos especificos

//requiere distintos objetos
function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null; //estan como null pq una vez se inicie la subasta (clase mediadora) no sera null y estaran en una misma sala comprador y vendedor (en la subasta), solo hasta que la subasta sea creada (instanciada)
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el sgte articulo a la venta ${articulo}, iniciamos con un precio de ${precio}`);

    },
    vendido: comprador => {
        console.log(`vendido a ${comprador}`)
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad,comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

//los 2 objetos en funciones anteriores se van a comunicar a traves de otro objeto, el siguiente:
//objeto mediador
function Subasta(){
    //colocar a vendedor y comprador en la misma sala
    let compradores = {};
    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario; //el usuario es juan o pablo
            usuario.sala = this; //this contiene la instancia actual de la subasta
        }
    }
}

//Crear objetos
const juan = new Comprador('juan');
const pablo = new Comprador('pablo');
const vendedor = new Vendedor('vendedor1');
const subasta = new Subasta();

//antes que haya oferta la subasta tiene que registrar a los compradores
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('mustang66',300);//Tenemos el sgte articulo a la venta mustang66, iniciamos con un precio de 300

juan.oferta(350,juan); //lo q oferta juan y el objeto de juan
juan.oferta(500,pablo); //Pablo : 500
vendedor.oferta('pablo',500);//vendido a pablo


