
# 202120_S2_E1 - Proyecto JOGA

## Links
[GitInspector](https://isis3710-uniandes.github.io/202120_S2_E1/reports)

>**Aviso para quien este calificando las entregas 😁:** Tratamos de llevar una especie de git flow, por lo que si no se ven los cambios en master por favor🙏 revisar la rama `dev`
## Tabla de contenido
  - [Links](#links)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Descripción del proyecto](#descripción-del-proyecto)
  - [Videos y documentación 📺 📜](#videos-y-documentación--)
  - [Comenzando 🚀 - Instrucciones de uso](#comenzando----instrucciones-de-uso)
    - [Pre-requisitos 📋](#pre-requisitos-)
    - [Instalación 🔧](#instalación-)
    - [Ejecutar servidor de backend 🤖](#ejecutar-servidor-de-backend-)
    - [Ejecutar aplicación de frontend no framework👽](#ejecutar-aplicación-de-frontend-no-framework)
    - [Explicación breve de frontend no framework 👾](#explicación-breve-de-frontend-no-framework-)
  - [Ejecutando las pruebas ⚙️](#ejecutando-las-pruebas-️)
  - [Despliegue 📦](#despliegue-)
  - [Construido con 🛠️](#construido-con-️)
  - [Autores ✒️](#autores-️)
## Descripción del proyecto
_Hola!, este es un proyecto que busca facilitar la manera en que los gamers buscan compañeros de partida para un juego en específico, por medio de salas comunes llamadas LFG (looking for group)_ 👾 _buscamos ser los primeros en implementar este tipo de ideas aquí en LATAM._

## Videos y documentación 📺 📜
- [Video propuesta JOGA](https://github.com/isis3710-uniandes/202120_S2_E1/wiki/VideoPropuesta)
- [Modelo Conceptual](https://github.com/isis3710-uniandes/202120_S2_E1/wiki/ModeloConceptual)
- [Video funcionalidad backend](https://www.loom.com/share/ea7f42d3eb024c939db98cb3f7c44047)
- [Video funcionalidad frontend no framework](https://youtu.be/7Jb0ywZrHYo)
## Comenzando 🚀 - Instrucciones de uso
### Pre-requisitos 📋

- [Node.js](https://nodejs.org) mínimo versión 10.14 o más alta

  ```bash
  # determinar version de node
  node --version
  ```
- [npm](https://www.npmjs.com/) mínimo versión 7 o más alta

  ```bash
  # determinar version de node
  npm --v
  ```
### Instalación 🔧 

1. Clonar el repositorio

   ```bash
   git clone https://github.com/isis3710-uniandes/202120_S2_E1
   ```

2. Dentro de la terminal, navegar a `202120_S2_E1/`
   ```bash
   cd 202120_S2_E1
   ```
3. Instalar módulos con npm
   ```bash
    npm install
   ``` 

### Ejecutar servidor de backend 🤖
1. Dentro de la terminal, navegar a `202120_S2_E1/`
   ```bash
   cd 202120_S2_E1
   ```
2. Asegurarse de tener el archivo `.env` proporcionado por el equipo o evaluar el `.env.example` para entender que variables de entorno necesita para funcionar la aplicación.
3. Para ejecutar el servidor para ámbitos de producción
   ```bash
   npm start
   ```
4. Para ejecutar el servidor para ámbitos de desarrollo
   ```bash
   npm run dev
   ```
5. Importar el enviroment de postman `Joga Enviroment.postman_environment.json`, [link al workspace público de postman](https://www.postman.com/EwadtLPMDhZx2Va/workspace/joga-web-isis3710-uniandes-202120-s2-e1)
6. Importar en postman la colección `Joga users-auth.postman_collection.json`
7. Logearse como admin haciendo la petición `LOGIN ADMIN` (Jwt guarda una cookie, para poder realizar las demás peticiones y en el caso de admin poder listar usuarios).
8. ¡Empezar a probar los endpoints con las otras colecciones!

### Ejecutar aplicación de frontend no framework👽
1. Dentro de la terminal, navegar a `202120_S2_E1`
   ```bash
   cd 202120_S2_E1/front-react
   ```
2. Para ejecutar la aplicación en modo de producción ejecutar
   ```bash
   npm start
   ```
3. Para ejecutar la aplicación en modo de desarrollo ejecutar
   ```bash
   npm run dev
   ```
4. Ir al siguiente link (http://localhost:3000) 
### Explicación breve de frontend no framework 👾 
- El proyecto front está compuesto por una landing page, la página de usuarios, la página de chats y la pagina de juegos. En la landing page se encuentran los enlaces a las páginas mencionadas anteriormente, una descripción de conceptos utilizados como LFG, el perfil gamer, entre otros. Finalmente, hay una explicación de lo que es el proyecto JOGA. En la sección de perfil se encuentran los datos del usuario, como el nombre, el username y el bio del usuario, los cuales son traídos de la base de datos. En la sección de juegos se encuentran los juegos registrados en la pagina hasta el momento, en donde estos están desplegados dependiendo de distintas categorías. Estos juegos se traen de la base de datos. En la pagina de chats se desplegan los chats que el usuario activo tiene con los demás usuarios. Estos se traen de la base de datos.
## Ejecutando las pruebas ⚙️

_Por el momento no tenemos las pruebas, estamos aprendiendo como hacerlas_ 🤖

## Despliegue 📦

_Aún no utilizamos un servicio cloud, a futuro esta sección tendrá una explicación breve de como desplegar todo_ 

## Construido con 🛠️

- [Node](http://www.dropwizard.io/1.0.2/docs/) - El framework usado para el servidor backend
- [npm](https://maven.apache.org/) - Manejador de paquetes de nodeJS
- [React](https://es.reactjs.org/) - El framework usado para el frontend

## Autores ✒️

- **Nicolás Tobo** - _Desarrollo y documentación_ - [natobo](https://github.com/natobo)
- **Santiago Tangarife** - _Desarrollo_ - [Batman-exe](https://github.com/Batman-exe)
- **Nicolás Calero** - _Desarrollo_ - [cale](https://github.com/necalero)
- **Gabriela Caballero** - _Desarrollo_ - [Gabriela Caballero](https://github.com/gcaballeroduran)
- **Sebastián Rosado** - _Desarrollo_ - [srosadoa](https://github.com/srosadoa)
  
---
