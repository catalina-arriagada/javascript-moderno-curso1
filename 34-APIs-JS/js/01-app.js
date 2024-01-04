//enviar notificaciones 
//la idea es que el usuario elija si notificarlo o no
const notificarBtn = document.querySelector('#notificar');
const verNotificacionBtn = document.querySelector('#verNotificacion');

notificarBtn.addEventListener('click', () => {
    //una vez usuario de click vamos a usar una api con metodo que le va a preguntar al usuario si quiere dar permisos para recibir notificaciones
    //casi todas las api en js usan promises
    //esta api crea alerta para preguntarnos si permitir o bloquear notificaciones
    Notification
        .requestPermission() //aqui pregunta si bloquear o permitir. 
        .then(resultado => {
            console.log(resultado); //el resultado es bloquear o permitir
            //'granted' es aceptar y 'denied' es bloquear. 'default' es cerrar la pestaña
        })
});

//mostrar la notificacion al usuario, si es que aceptó que se le enviaran
verNotificacionBtn.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        //crear nueva notificacion:
        const notificacion = new Notification('Notificacion', { //objeto con caracteristicas custom de la notificacion
            icon: 'img/ccj.png', //imagen al costado derecho
            body: 'Codigo con juan aprende', //texto parrafo abajo de la ip


        });

        //si quiero que esa notificacion me lleve a un link (crear objeto con toda la info);
        notificacion.onclick= () => {
            window.open('https://www.google.com');
        };
    }
});

