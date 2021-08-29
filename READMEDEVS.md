# ¡Hola Equipo 1!
_En este READMEDEVS Vamos a poner las tareas semana a semana jaja, si un poco tedioso pero no tengo mucho tiempo como para explicarle a uno a uno como quisiera 💔_
 
## Tabla de contenido, pa que no hagan tanto scroll 🙈
  - [Tabla de contenido, pa que no hagan tanto scroll 🙈](#tabla-de-contenido-pa-que-no-hagan-tanto-scroll-)
  - [Uso del git](#uso-del-git)
  - [REGLAS DE DESARROLLO 📣📣📣📣](#reglas-de-desarrollo-)
  - [Tarea 1 crear cada uno su endpoint](#tarea-1-crear-cada-uno-su-endpoint)
    - [Paso 1 👀](#paso-1-)
    - [Paso 2 👾](#paso-2-)
    - [Paso 3 ✨](#paso-3-)
    - [Paso 4 ¿Como rayos pruebo lo del paso 3? 😱](#paso-4-como-rayos-pruebo-lo-del-paso-3-)
    - [Paso 5 Poner la colección de Postman de sus clases dentro de la carpeta Coleccions😱](#paso-5-poner-la-colección-de-postman-de-sus-clases-dentro-de-la-carpeta-coleccions)
    - [Paso 6 Disfutar que terminaron su tarea](#paso-6-disfutar-que-terminaron-su-tarea)

## Uso del git  
Por el momento deberíamos trabajar así con git: 
- Una rama master donde el código esta perfecto.
- Una rama dev donde vamos a estar cacharreando todos.
- Una rama nueva por cada feature que hagamos, el nombre de la rama será la clase que estén trabajando ej: `Si estoy creando usuario y dashboard entonces mi branch sera feature_creantingUserAndDasboard`.
  
Ahora ¿qué rayos es una rama?: Una rama es una copia de todo el proyecto pero que permite que le hagas cambios y finalmente lo unas con el proyecto principal, esto es útil porque cuando existen 5 personas haciendo cambios sobre el mismo código es más que probable que algo se totee. (_Si definido por mí el que escribe esto, en verdad son apuntadores pero nel no quiero enredarlos, si quieren algo más técnico leer: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell#:~:text=A%20branch%20in%20Git%20is,branch%20pointer%20moves%20forward%20automatically._)

Listo todo eso suena perf, pero que pasa si no sabemos git 😅, pues tranqui aqui van los comandos que deberían usar para no perderse:

- Trae una copia del repo a local (o donde estén parados en la terminal, si la terminal tiene git instalado)
   ```bash
   git clone https://github.com/isis3710-uniandes/202120_S2_E1
   ```
- Trae todos los cambios de la rama en donde están parados
   ```bash
   git pull
   ```
- Trae todos los cambios de la rama que le indican después de origin ej: master
   ```bash
   git pull origin master
   ```
- Añade todos mis cambios de local a un paquete llamado commit 
   ```bash
   git add .
   ```
- Pone un nombre a ese paquete
   ```bash
   git commit -m "Mi fabuloso trabajo, esta perf y así lo subo a mi rama, obvio no voy a totear nada"
   ```
- Sube todos los cambios en local que tengo (osea el paquete de cambios o commit) a la rama en la que estoy
   ```bash
   git push
   ```
- ¿En que rama estoy parado?:  
    ```bash 
    git branch
    ```
- Cambiar de una rama a otra
  ```bash
  git checkout nombreRama
  ```
- Crear una rama y de paso entrar a ella de una:  
    ```bash
    git checkout -b feature_suFeature
    ```
>_Ahora todo perf Nicolás ¿pero como rayos combinas una rama a otra?_

A pues fácil usas una cosa llamada Pull Request y Merge Request, del merge request me encargo **yo**, lo estoy aprendiendo en el trabajo. Pero el tutorial rápido esta aquí: https://www.youtube.com/watch?v=WSWnch-SyPM. (min 7 si no quieren verlo todo), lo importante es que: **Hagan el pull request y alguno que este actuando como lider vea el código y haga merge request a la rama dev**

> ¿Y la rama Master?

Se hace un merge request cuando TODOS terminen sus tareas y efectivamente todo funcione.

Si les quedan dudas me preguntan por chat peroooo, me esforcé resto pa explicar esto jajaja.

## REGLAS DE DESARROLLO/EQUIPO 📣📣📣📣
_lo pongo en mayus porque siento que es importante para no comenzar a tener problemas con el repo, merges (osea modificar las mismas lineas de código y que empiece a totearse todo xd xd) y entre nosotros_

1. **NO hacer push a master**, siempre a su feature y luego se hace merge request a dev.
2. **Hacer pull de dev constantemente**, ya que todos podemos estar haciendo cambios seguido ahí ya que unimos nuestras features con los merge request.
3. Avisar con tiempo si esta toteado y ve que no puede sacar sus clases, podemos llegar a un acuerdo y rebalancear todo.
4. Si están muy perdidos escribir por wha en el grupo, no prometo responder immediatamente pero alguno sabrá que hacer en el equipo.
5. Ser respetuoso y lo básico para llevarnos bien (_parezco profe de ética, pero pues si es necesario jaja_).

## Tarea 1 crear cada uno su endpoint
 Ok.. vamo a empezar esto, el montaje ya esta cuadrado por mí, entonces lo que vamos a empezar es a darle al código >:D
### Paso 1 Instalar y hacer rama 👀
Comenzamos por hacer clone del repo EN LOCAL, repito EN LOCAL pliz, su nube no puede coordinar todo lo que está en node_modules 😅
1. Clonar el repositorio

   ```bash
   git clone https://github.com/isis3710-uniandes/202120_S2_E1
   ```
2. Dentro de la terminal, navegar a `202120_S2_E1/`
   ```bash
   cd 202120_S2_E1
   ```
3. Hacer el cambio de branch a dev
   ```bash
   git checkout dev
   ```
4. Hacer crear rama de su feature
   ```bash
   git checkout -b feature_suFeature
   ```
5. Instalar módulos con npm
   ```bash
    npm install
   ``` 
6. Como ustedes son devs si o sí ponen a correr todo con el siguiente comando
   ```bash
    npm run dev
   ``` 

_Ok hasta ahora lo casi lo mesmo del README, pero mejor aqui por si no vieron el otro lado xd._ 👽
### Paso 2 Hacer Mock 👾
Ahora dado que aún no vamos a conectarnos a la base de datos, vamos a crear datos Mock (como un dummy de que es lo que debería contestar la DB) para ello vamos a usar la siguiente página: https://www.mockaroo.com/. Cada uno debe crear su mock de sus clases y ponerlo dentro de la Carpeta `utils/mock` del proyecto, usen el archivo `mock-user.js` para tener una referencia y dentro de mockaroo exporten el archivo como `.json` max 20 elementos para que no ocupe taaanto espacio. 

Link del genmymodel por si no lo tienen abierto: https://app.genmymodel.com/orgs/Uniandes/projects/_Pex0oAK3Eeyj5cUC8m1erQ.

Como consejo creen una cuenta de mockaroo con github, si la tienen creada les guarda los mock schemas y no pierden el trabajo por si se les cierra la pestaña, como me paso a mí 😭.

### Paso 3 Codear el router ✨
Ahora cada uno debe crear un archivo dentro de routes este lo llamaremos de la siguiente forma: `clase-router.js` y debe estar dentro de la carpeta `routes` , crearemos funciones porque fue así como me lo explicaron en el curso de backend de platzi, y porque es menos código dentro de app.js jaja 😁, ( _no son laaas mejores explicaciones pero me pueden preguntar así no escribo tanto_ 🙈). Usen `routes/user.js` como ejemplo para crear cada uno el de su clase, cuando tengan eso importen la función dentro de `app.js`, llamenla y pasenle como parámetro app.

Por convención vamos a nombrar cada ruta asi: `/api/su-clase`, para llamados del backend y todo se deberia tener `api` como por orden, ahora después si me queda tiempo o que alguno se ponga la 10, ese `api` puede ser un diccionario como de todo lo que hay del backend :D.

### Paso 4 ¿Como rayos pruebo lo del paso 3? 😱
Para poder probar lo del paso 3 sí o sí tenemos que usar Postman o el otro del profe que no me sé el nombre, entonces les dejo el paso a paso:
1. Crear una cuenta en postman, descargar la app en su computador o usar el cliente web de ellos.
2. Crear una colección.
3. Crear cada request GET,GET ALL, PUT, DELETE, CREATE para cada una de las clases y comprobar que si trae la información. (_recuerden que en dev se despliega en localhost_).

Sé que este paso puede ser tedioso pero es la mejor manera de probar que si funciona, además de que nos piden tener las colecciones en un lugar.

**Si el paso a paso no es claro aquí va un tutorial de como hacer una colección CRUD y con variables de entorno**: https://www.youtube.com/watch?v=qsejysrhJiU

### Paso 5 Poner la colección de Postman de sus clases dentro de la carpeta Coleccions😱
 _El título lo dice todo, eh ¿No sabes como exportarlo?, ok ok aquí va el video-tutorial:_ https://www.youtube.com/watch?v=FzPBDU7cB74

Los primeros tres minutos de ese tutorial sacan un Json ese .json poner el nombre con el siguiente formato ej: `userJoga.postman_collection.json` y yap subirlo.

### Paso 6 Hacer Pull request en git A DEV
Repito hacerlo a Dev Pliz, y avisar por el grupo de wha para que yo haga el MR jaja.

### Paso 7 Disfutar que terminaron su tarea
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)