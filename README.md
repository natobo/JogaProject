
# 202120_S2_E1 - Proyecto JOGA

## Links
[GitInspector](https://isis3710-uniandes.github.io/202120_S2_E1/reports)

>**Aviso para quien este calificando las entregas 馃榿:** Tratamos de llevar una especie de git flow, por lo que si no se ven los cambios en master por favor馃檹 revisar la rama `dev`
## Tabla de contenido
  - [Links](#links)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Descripci贸n del proyecto](#descripci贸n-del-proyecto)
  - [Videos y documentaci贸n 馃摵 馃摐](#videos-y-documentaci贸n--)
  - [Comenzando 馃殌 - Instrucciones de uso](#comenzando----instrucciones-de-uso)
    - [Pre-requisitos 馃搵](#pre-requisitos-)
    - [Instalaci贸n 馃敡](#instalaci贸n-)
    - [Ejecutar servidor de backend 馃](#ejecutar-servidor-de-backend-)
    - [Ejecutar aplicaci贸n de frontend no framework馃懡](#ejecutar-aplicaci贸n-de-frontend-no-framework)
    - [Explicaci贸n breve de frontend no framework 馃懢](#explicaci贸n-breve-de-frontend-no-framework-)
  - [Ejecutando las pruebas 鈿欙笍](#ejecutando-las-pruebas-锔?)
  - [Despliegue 馃摝](#despliegue-)
  - [Construido con 馃洜锔廬(#construido-con-锔?)
  - [Autores 鉁掞笍](#autores-锔?)
## Descripci贸n del proyecto
_Hola!, este es un proyecto que busca facilitar la manera en que los gamers buscan compa帽eros de partida para un juego en espec铆fico, por medio de salas comunes llamadas LFG (looking for group)_ 馃懢 _buscamos ser los primeros en implementar este tipo de ideas aqu铆 en LATAM._

## Videos y documentaci贸n 馃摵 馃摐
- [Video propuesta JOGA](https://github.com/isis3710-uniandes/202120_S2_E1/wiki/VideoPropuesta)
- [Modelo Conceptual](https://github.com/isis3710-uniandes/202120_S2_E1/wiki/ModeloConceptual)
- [Video funcionalidad backend](https://www.loom.com/share/ea7f42d3eb024c939db98cb3f7c44047)
- [Video funcionalidad frontend no framework](https://youtu.be/7Jb0ywZrHYo)
## Comenzando 馃殌 - Instrucciones de uso
### Pre-requisitos 馃搵

- [Node.js](https://nodejs.org) m铆nimo versi贸n 10.14 o m谩s alta

  ```bash
  # determinar version de node
  node --version
  ```
- [npm](https://www.npmjs.com/) m铆nimo versi贸n 7 o m谩s alta

  ```bash
  # determinar version de node
  npm --v
  ```
### Instalaci贸n 馃敡 

1. Clonar el repositorio

   ```bash
   git clone https://github.com/isis3710-uniandes/202120_S2_E1
   ```

2. Dentro de la terminal, navegar a `202120_S2_E1/`
   ```bash
   cd 202120_S2_E1
   ```
3. Instalar m贸dulos con npm
   ```bash
    npm install
   ``` 

### Ejecutar servidor de backend 馃
1. Dentro de la terminal, navegar a `202120_S2_E1/`
   ```bash
   cd 202120_S2_E1
   ```
2. Asegurarse de tener el archivo `.env` proporcionado por el equipo o evaluar el `.env.example` para entender que variables de entorno necesita para funcionar la aplicaci贸n.
3. Para ejecutar el servidor para 谩mbitos de producci贸n
   ```bash
   npm start
   ```
4. Para ejecutar el servidor para 谩mbitos de desarrollo
   ```bash
   npm run dev
   ```
5. Importar el enviroment de postman `Joga Enviroment.postman_environment.json`, [link al workspace p煤blico de postman](https://www.postman.com/EwadtLPMDhZx2Va/workspace/joga-web-isis3710-uniandes-202120-s2-e1)
6. Importar en postman la colecci贸n `Joga users-auth.postman_collection.json`
7. Logearse como admin haciendo la petici贸n `LOGIN ADMIN` (Jwt guarda una cookie, para poder realizar las dem谩s peticiones y en el caso de admin poder listar usuarios).
8. 隆Empezar a probar los endpoints con las otras colecciones!

### Ejecutar aplicaci贸n de frontend no framework馃懡
1. Dentro de la terminal, navegar a `202120_S2_E1`
   ```bash
   cd 202120_S2_E1/front-react
   ```
2. Para ejecutar la aplicaci贸n en modo de producci贸n ejecutar
   ```bash
   npm start
   ```
3. Para ejecutar la aplicaci贸n en modo de desarrollo ejecutar
   ```bash
   npm run dev
   ```
4. Ir al siguiente link (http://localhost:3000) 
### Explicaci贸n breve de frontend no framework 馃懢 
- El proyecto front est谩 compuesto por una landing page, la p谩gina de usuarios, la p谩gina de chats y la pagina de juegos. En la landing page se encuentran los enlaces a las p谩ginas mencionadas anteriormente, una descripci贸n de conceptos utilizados como LFG, el perfil gamer, entre otros. Finalmente, hay una explicaci贸n de lo que es el proyecto JOGA. En la secci贸n de perfil se encuentran los datos del usuario, como el nombre, el username y el bio del usuario, los cuales son tra铆dos de la base de datos. En la secci贸n de juegos se encuentran los juegos registrados en la pagina hasta el momento, en donde estos est谩n desplegados dependiendo de distintas categor铆as. Estos juegos se traen de la base de datos. En la pagina de chats se desplegan los chats que el usuario activo tiene con los dem谩s usuarios. Estos se traen de la base de datos.
## Ejecutando las pruebas 鈿欙笍

_Por el momento no tenemos las pruebas, estamos aprendiendo como hacerlas_ 馃

## Despliegue 馃摝

_A煤n no utilizamos un servicio cloud, a futuro esta secci贸n tendr谩 una explicaci贸n breve de como desplegar todo_ 

## Construido con 馃洜锔?

- [Node](http://www.dropwizard.io/1.0.2/docs/) - El framework usado para el servidor backend
- [npm](https://maven.apache.org/) - Manejador de paquetes de nodeJS
- [React](https://es.reactjs.org/) - El framework usado para el frontend

## Autores 鉁掞笍

- **Nicol谩s Tobo** - _Desarrollo y documentaci贸n_ - [natobo](https://github.com/natobo)
- **Santiago Tangarife** - _Desarrollo_ - [Batman-exe](https://github.com/Batman-exe)
- **Nicol谩s Calero** - _Desarrollo_ - [cale](https://github.com/necalero)
- **Gabriela Caballero** - _Desarrollo_ - [Gabriela Caballero](https://github.com/gcaballeroduran)
- **Sebasti谩n Rosado** - _Desarrollo_ - [srosadoa](https://github.com/srosadoa)
  
---
