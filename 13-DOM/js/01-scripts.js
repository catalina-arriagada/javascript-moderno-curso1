let elemento;

elemento = document; //selecciona todo el documento html
elemento = document.all; //muestra todos los elementos q conforman html
elemento = document.head; //selecciona solo el head
elemento = document.body;
elemento = document.domain; //en q url esta cargando el proyecto, local host
elemento = document.forms; //cuantos formularios hay en el proyecto
elemento = document.forms[0];//formulario es arreglo
elemento = document.forms[0].id; //puedo acceder a la id del formulario
elemento = document.forms[0].method; //post
elemento = document.forms[0].classList; //clases del formulario(css), lo retorna como (DOM TOKEN LIST , parecido a un array)
elemento = document.forms[0].className; //clases del formulario(css), lo retorna como String
elemento = document.forms[0].action;//hacia donde va el form al enviarlo
elemento = document.links; //enlaces del proyecto (<a>)
elemento = document.links[1]; //acceder a elemento del array links
elemento = document.images;
elemento = document.scripts; //array o lista con elementos <script> </script> en el documento




