<img src="https://restaurantes.wokiapp.com/wp-content/uploads/2023/10/wokilogo-1.webp" width="1012px" heigth="358px" />

<!--h2 without bottom border-->
## Woki Challenge

## Descripcion
He creado una aplicación web para gestión de proyectos que facilita a los equipos organizar sus proyectos y tareas.
Usé Node.js y TypeScript para el servidor y MongoDB como base de datos, asegurándome de seguir los principios de Domain-Driven Design (DDD) y Hexagonal Architecture para mantener el código limpio y fácil de mantener.
La aplicación incluye autenticación y autorización de usuarios con JWT, y permite realizar operaciones CRUD completas tanto para proyectos como para tareas.
Cada proyecto y tarea tiene un título, descripción, fecha de vencimiento y estado ('not started', 'in progress', 'completed'). Los usuarios pueden filtrar sus proyectos y tareas asignados por estado.
Para la validación y manejo de errores, utilicé Dtos validando inputs , Patrones repositorios/datasource para validar el flujo de comienzo a fin, env-var para las variables de entorno y un sistema centralizado de manejo de errores para el Domain.
También empleé librerías clave como Express para el servidor HTTP, Mongoose para la conexión con MongoDB, bcryptjs para el hashing de contraseñas y jsonwebtoken para la gestión de tokens JWT. Además, utilize Docker para poder emplear y tener una base de datos MongoDb constantemente a disposicion.

## Requerimientos:
   se necesita tener instalado Docker Desktop : [Docker Desktop](https://www.docker.com/products/docker-desktop/)
   se necesita tenes instalado MongoDb Compas o Cualquier Gestos de Bases de datos que soporte bases de datos MongoDB, en este caso yo utilize Mongo Compass:  [Mongo Compass]((https://www.mongodb.com/es/products/tools/compass))
   se necesita algun programa para interactuar con la Api en este caso yo utilice y recomiendo mucho INSOMNIA : [INSOMNIA](https://insomnia.rest/download)

## Pasos:
  Luego de clonar o tener a disposicion el repositorio es necesario abrir una terminal y pararse en el root de esta para ejecutar los siguientes comandos:

# 1 instalar dependencias:
  ```bash
  $ npm install
  ```
# 2 instalar dependencias:

 Crear en el root del projecto un archivo  `.env` pegar en el todo el contenido del archivo  `.env.template`

# 3 tener docker desktop abierto y ejectutar(para tener la db levantada en una maquina virtual):
  ```bash
  $ docker compose up --build
  ```
# 4 una vez levantado todo llenar DB con registros:
  ```bash
  $ npm run seed
  ```
# 5 ejecutar el proyecto :
  ```bash
  $ npm run dev 
  ```
O
  ```bash
  $ npm run start
  ```

## Uso:
Una vez completado el paso 4 y teniendo nuestra DB en ejecucion en docker desktop la Api.
Necesitaremos colocar en la Url este path para comenzar a interactuar con la Api  ` http://localhost:3000/api`

## Endpoints


# Tasks

-    ` GET /tasks`: Obtenemos una lista de todos las tareas.
-    ` GET /tasks/:id`: Obtenemos una tarea única por su ID.
-    ` Post /tasks`: Creamos una tarea en la base de datos.Ruta protegida *
     - Los siguientes datos son requeridos en el body en formato Json:
     -   `title`: El titulo de la tarea (required).
     -   `description`: Descripcion de la misma(required).
     -   `dueDate`: Fecha en formato fecha de la fecha estipulada en la que se culminara o completara la tarea (ej: "2024-08-03T03:43:36.603Z").
     -   `status`: El status tiene que ser un string que alguno de los siguiente valores: ('not started', 'in progress', 'completed')
-    `PUT /tasks/:id`: Actualiza una tarea por su id.Ruta protegida *
-   `DELETE /tasks/:id`: Elimina una tarea.Ruta protegida *

# Projects

-    ` GET /projects`: Obtenemos una lista de todos las projectos.
-    ` GET /projects/:id`: Obtenemos un projecto única por su ID.
-    ` Post /projects`: Creamos un projecto en la base de datos.Ruta protegida *
     - Los siguientes datos son requeridos en el body en formato Json:
     -   `title`: El titulo del projecto (required).
     -   `description`: Descripcion de la misma(required).
     -   `dueDate`: Fecha en formato fecha de la fecha estipulada en la que se culminara o completara el projecto (ej: "2024-08-03T03:43:36.603Z").
     -   `status`: El status tiene que ser un string que alguno de los siguiente valores: ('not started', 'in progress', 'completed')
-    `PUT /projects/:id`: Actualiza un projecto por su id.Ruta protegida *
-   `DELETE /projects/:id`: Elimina una tarea.Ruta protegida *

# Auth

-    ` GET /auth`: Obtenemos el token JWT para ejecutar las Rutas protegidas.
        - Los siguientes datos son requeridos en el body en formato Json:
        -   `email`: test1@google.com.
        -   `password`: hashed_password_here.
    
NOTA1: una vez obtenido el token es necesario colocarlo en la configuracion de Auth / Bearer Token  y suministrar el token ahi para poder ejecutar las rutas. 

NOTA2: En la creacion de seed el usuario proporcionado en esta ruta es el unico que fue setiado con su rol de 'ADMIN_ROLE' y el unico que puede obtener un token JWT.

# Users

-    ` GET /users/projects`: Obtenemos una lista de todos nuestros projectos asignados. Ruta protegida *
-    ` GET /tasks/tasks`: Obtenemos una lista de todos nuestras tareas asignadas. Ruta protegida *

Por ultimo en la ruta de root  'insomnia/' pueden tener mi coleccion de rutas en formado json en insomnia tendran que importarlo y tendran las rutas ya configuradas y listas para usar.
