# gestionProductos

Tarea 1.2
Desarrollar una API RESTful utilizando Node.js y Express, la cual permitirá gestionar un listado de productos de una tienda.
1700 - diseño digital

Para poder usar esta API, lo primero que se debe hacer es instalar las dependencias. Esto se hace con el comando npm install, que se debe ejecutar dentro de la carpeta del proyecto. Ese comando se encarga de descargar todas las herramientas que el proyecto necesita para funcionar correctamente, como el framework Express. Luego, se inicia el servidor de la API. La API quedará escuchando en http://localhost:3000 y también se puede iniciar el servidor con node app.js o el nombre del archivo principal que esté usando tu proyecto.

En cuanto a las rutas disponibles, hay una principal que es /productos. Si se hace una solicitud GET a esa ruta (GET /productos), se recibirá una lista con todos los productos registrados. También se puede pedir un producto específico usando su ID con la ruta GET /productos/:id. Además, para agregar un nuevo producto, se hace con una solicitud POST /productos con los datos del producto en formato JSON. Esta ruta guarda la información y la añade a la lista de productos.
