function iniciarApp(){

    const resultadoRecetas = document.querySelector('#resultado');
    const selectCategorias = document.querySelector('#categorias');

    //si existe selectCategorias
    if(selectCategorias){
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias(); //todo parte del select 
    }

    //documento favoritos
    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv) {
        obtenerFavoritos();
    }

    //seleccionar modal de bootstrap:
    const modal = new bootstrap.Modal('#modal', {}); //si escribimos bootstrap en la consola sale objeto con distintas clases, una de ellas es Modal
    //y ponemos un objeto vacío

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => {
               // console.log(respuesta)
                return respuesta.json()
            })
            .then(resultado => {
                //console.log(resultado.categories) //en el resultado de la api imprime categories, asi que vamos a acceder a el
                mostrarCategorias(resultado.categories)
            })
    }

    //parametro por default(categorias) y decirle que estas categorias deben ser un arreglo
    function mostrarCategorias(categorias = []){
        //console.log(categorias); //aparece lo mismo que en resultado.categories
        categorias.forEach(categoria => {
            //console.log(categoria); //genera las categorias por separado
            const {strCategory} = categoria;
            //console.log(strCategory)
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;
            //console.log(option);
            //console.log(categoria)
            selectCategorias.appendChild(option);
        }) 
    }

    function seleccionarCategoria(e){
        //console.log(e.target.value);
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`; 
        //https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
        //console.log(url) //urls dinamicas segun lo que seleccione
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                //console.log(resultado)
                mostrarRecetas(resultado.meals);

            })
    }

    function mostrarRecetas(recetas = []){
        limpiarHTML(resultadoRecetas);

        //heading que diga si hubieron o no resultados
        //Poner título de Resultados
        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No Hay Resultados';
        resultadoRecetas.appendChild(heading);

        //console.log(recetas)
        recetas.forEach(receta => {
           const {idMeal, strMeal, strMealThumb } = receta;
           const divReceta = document.createElement('DIV');
           divReceta.classList.add('col-md-4');
           //divReceta.textContent = strMeal;
        //    divRecetas.innerHTML = 
        //     `
        //         <img src="${strMealThumb}" class="col"></img>
        //         <div class="col">${strMeal}</div>
        //         <button class="col btn btn-danger">Ver Receta</button>
        //     `;
            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImg = document.createElement('IMG');
            recetaImg.classList.add('card-img-top');
            //si existe en localstorage ?? sino existe esta en favoritos
            recetaImg.alt = `Imagen de la receta: ${strMeal ?? receta.titulo}`;
            //si valor existe strMealThumb se esta llamando desde el inicio/ si no existe receta.img se manda a llamar desde pestaña favoritos
            recetaImg.src = strMealThumb ?? receta.img;

            //cada card debe tener un body:
            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn','btn-danger', 'w-100');
            recetaButton.textContent = 'Ver Receta';
            //console.log(recetaHeading)
            
            //Conectar button con ventana modal:
            //bs de bootstrap y Target de la etiqueta target y el div padre en el html(id modal)
           // recetaButton.dataset.bsTarget = "#modal";
           // recetaButton.dataset.bsToggle = "modal"; //llama a funciones del archivo js de bootstrap
            //inspeccionar en navegador luego de agregar estos dataset

            //me quiero traer el id de la receta para traer el detalle de la receta
            //si hago click en el boton de ver receta, sucede esto (selecciona la receta):
            recetaButton.onclick = function () { //tiene que ser callback porque tiene que esperar a que ocurra el evento de onclick para ejecutarse, no se puede simplemente pasarle la funcion (saltaria errores)
                //si no existe en localstorage esta en inicio ?? si existe en ls esta en favoritos
                seleccionarReceta(idMeal ?? receta.id);
            }
            //No puedo hacerlo con addeventListeners porque el boton de ver receta no existe hasta que el usuario de click, no existe como tal en el html, no funcionaria con addeventlisteners

            //console.log(recetaImg)
           // recetaCard.insertBefore(recetaImg, recetaCardBody);
            resultadoRecetas.appendChild(divReceta);
            divReceta.appendChild(recetaCard);
            recetaCard.appendChild(recetaImg);
            recetaCard.appendChild(recetaCardBody);
            recetaCardBody.appendChild(recetaHeading);   
            recetaCardBody.appendChild(recetaButton);

        //estructura:
        //resultados
        //  divReceta
        //    recetaCard
        //      recetaImg
        //      recetaCardBody
        //          h3
        //          button
        })
    }

    function seleccionarReceta(id){
        //console.log(id) //me pasa el id de cada receta
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                //console.log(resultado);
                //console.log(resultado.meals[0]);
                return mostrarRecetaModal(resultado.meals[0]);
            })
    }

    function mostrarRecetaModal(receta){
        //console.log(receta);
        const{idMeal, strInstructions, strMeal, strMealThumb } = receta;

        const modalTitle = document.querySelector('.modal .modal-title');
        modalTitle.textContent = strMeal;

        const modalBody = document.querySelector('.modal .modal-body');
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="Receta ${strMeal}"/>
            <h3 class="my-3">Instrucciones</h3>
            <p class="" >${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades</h3>
        `;

        //agregar clase para listar los ingredientes y cantidades en html
        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');

        //mostrar ingredientes con sus cantidades:
        for(let i = 1; i <= 20; i++){
            //console.log(receta[`strIngredient${i}`]);
           //itera dependiendo de cuantos ingredientes tenga, cuando está vacío el strIngredients ya no itera
            if(receta[`strIngredient${i}`]){
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];
                //console.log(`${cantidad} - ${ingrediente}`);

                //poner en html
                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup);

        //Botones de cerrar y favorito
        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);
        
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito'; //si ya esta en localstorage aparece eliminar favorito, y sino guardar

        //localstorage
        btnFavorito.onclick = function(){
            //console.log(existeStorage(idMeal))
            //si existe el arreglo con ese id, que no retorne nada
            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                btnFavorito.textContent = "Guardar Favorito"; //si no existe btn guardar, loa grega
                mostrarToast('Eliminado Correctamente');
                //eliminar de html favoritos:
                mostrarRecetas(eliminarFavorito(idMeal));//vuelve a mostrar las recetas y elimina la id seleccionada
                return; //no dejara que se ejecuten las siguientes lineas del onclick
            }

            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            })
            btnFavorito.textContent = "Eliminar Favorito";//si existe btn guardar lo cambia a eliminar
            mostrarToast('Agregado Correctamente');
            
        }

        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = function(){
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);

        //muestra el Modal
        //show es metodo de Modal (tambien en consola prototype)
        modal.show();
    }

    function agregarFavorito(receta){
       
        //console.log('agregando')
       // console.log(receta);
       //convertir a json y que sino existe el getItem favoritos le agrego arreglo vacío
       //si marca null se va a []
       //obtener datos de la localstorage:
       const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; //la primera vez q se ejecuta es arreglo vacio
       localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta])); //lo envio a la localstorage

    }

    function eliminarFavorito(id){
        //obtener datos de la localstorage
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id); //si es distinto al id que selecciono se pasa a favoritos actualizados
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos)); //actualiza localstorage
        //eliminar del html
        return nuevosFavoritos;
    }   

    //funcion para que no se repitan elementos en localstorage:
    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        //.some itera sobre todos los elementos del arreglo y va a ver si al menos uno cumple con la condicion (la condicion se pone en un callback)
        return favoritos.some(favorito => favorito.id === id);//si el id que le paso es igual al que hay en localstorage
        //si al menos uno cumple con la condicion, esta linea retorna true

    }

    //mostrar alerta tipo toast (tiene clase toast en html):
    function mostrarToast(mensaje){
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        toast.show();//mostrar toast

    }

    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];//obtener de ls
        //console.log(favoritos);

        //si hay algo en favoritos se ejecuta esto:
        if(favoritos.length){
            mostrarRecetas(favoritos);//reutilizamos esta funcion
            return;
        }
        //en caso de que este vacio arreglo favoritos:
        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'Aún no hay favoritos';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        favoritosDiv.appendChild(noFavoritos);

    }

    //funcion dinamica de limpiar HTML
    function limpiarHTML(selectorALimpiar){
        while(selectorALimpiar.firstChild){
            selectorALimpiar.removeChild(selectorALimpiar.firstChild);
        }
    }

    
}

document.addEventListener('DOMContentLoaded', iniciarApp); //iniciar app cuando haya cargado document


















// En algunas APIs, como en el ejemplo que mencionas, los parámetros se pasan a través de la URL utilizando el formato de consulta de URL (query string). En este caso, el parámetro "c" se utiliza para filtrar los resultados por la categoría de platillos, y el valor "Beef" se proporciona para indicar que se desean obtener platillos de la categoría "Beef" (carne de res). Esto lo puedes leer en la documentacion de que trata cada parametro.