//Seguridad en javascript:
//
//-No almacenar passwords, ni imagenes ni nada delicado en LocalStorage ni IndexDB, porque funcionan en el lado del cliente y cualquiera podria acceder a esos datos en cualquier momento
//-El DOM Scripting (innerHTML) ya escapa los datos, es mejor usar TextContent la mayor parte de veces
//-Usar innerHTML solo cuando la fuente de los datos es segura (api), por ej cuando usamos nuestra propia api o una de confianza
//
//Formularios:
//-Validar a cliente con JS para darle retroalimentacion en tiempo real. Pero tambien se debe validar en el server (se puede hacer con Node o cualquier lenguaje Back)
//-Si se desea crear apps con Autenticación de usuarios, se puede usar Jason Web Token (JWT), y si no quieres programar se puede usar sitio web Auth0
//
//Otras consideraciones:
//-cuando trabajes con dependencias (o herramientas, bibliotecas, etc) usar una herramienta para verificar vulnerabilidades, como snyk.io (se puede agregar proyecto y te dice si hay vulnerabilidades en algunas versiones o en otras)
//-ofuscar el codigo si lo consideras necesario.
//Hashear info sensible con libreria de bcrypt
