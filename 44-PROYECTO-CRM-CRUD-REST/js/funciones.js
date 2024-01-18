export function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){ //sino hay alerta genera una
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class='font-bold'>Error!</strong>
            <span class='block sm:inline'>${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validar(obj){ //obj sería el cliente
    return !Object.values(obj).every(input => input !== '');
    //retorna true o false, si se pasa o no la validacion (false si se pasa)
}