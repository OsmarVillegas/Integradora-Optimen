# Integradora II

## Contenido
<details>
  <summary>Tabla contenido</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#descripción">Descripción</a></li>
        <li><a href="#objetivos">Objetivos</a></li>
        <li><a href="#organigrama">Organigrama</a></li>
        <li><a href="#diagrama-gantt">Diagrama Gantt</a></li>
      </ul>
    </li>
    <li>
      <a href="#análisis-de-la-solución">Análisis de la Solución</a>
      <ul>
        <li><a href="#requerimientos">Requerimientos</a></li>
        <li><a href="#diagrama-casos-de-uso">Diagrama de Casos de Uso</a></li>
      </ul>
    </li>
    <li>
      <a href="#diseño-de-la-solución">Diseño de la Solución</a>
      <ul>
        <li><a href="#modelo-relacional">Modelo Relacional</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
        <li><a href="#diagrama-de-actividadess">Diagrama de Actividades</a></li>
      </ul>
    </li>    
    <li>
      <a href="#implementación">Implementación</a>
      <ul>
        <li><a href="#estándares-codificación">Estándares Codificación</a></li>
        <li><a href="#arquitectura">Arquitectura</a></li>
        <li><a href="#código-fuente">Código Fuente</a></li>
      </ul>
    </li>      
    <li>
      <a href="#pruebas">Pruebas</a>
      <ul>
        <li><a href="#casos-de-prueba">Casos de prueba</a></li>
        <li><a href="#ejecución">Ejecución</a></li>
      </ul>
    </li>       
    <li><a href="#guias">Guias</a></li>
    <li><a href="#contribucion">Contribución</a></li>
    <li><a href="#licencia">licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#participantes">Participantes</a></li>
  </ol>
</details>

<!-- Acerca del proyecto -->
#### Acerca del proyecto
Requisitos.
* Internet 
* Equipo de computo 
* Tener instalado React Js v18.2.0
* Tener instalado Node JS v19.6.1
* Tener instalado Visual Studio Code v1.77.3

<!-- Descripción -->
#### Descripción.
El proyecto consiste en la creación de un sitio web sobre Optimen, el sitio web proporcionará información detallada sobre los últimos avances y noticias respecto a la empresa, así como servicios de consultoría y soporte de configuración sobre el desarrollo de soluciones de software de TI, la página tardara menos de 5 segundos en renderizarse y contara con un editor de noticias y eventos que una serie de usuarios (administrador y creador de contenido) podrán acceder, el administrador podrá manipular los permisos de los usuarios que accedan a esta herramienta, mientras que los creadores de contenido podrán generar, editar, eliminar y consultar noticias y eventos, las noticias y eventos generados se reflejaran en el apartado de noticias de la página principal.
* Financieros : $7000
* Tiempos: 3 meses y 21 días (25 de Enero - 14 de Abril)


<!-- Objetivos -->
#### Objetivos.

Objetivo general.
Mejorar la página web de la empresa "Optimen", haciéndola más rápida, dinámica y fácil de usar para los usuarios. Además, se busca agregar una sección de edición de noticias y eventos para el administrador y el editor, con el fin de permitirles actualizar el contenido de la página de manera eficiente y efectiva. El objetivo es crear una experiencia de usuario atractiva y útil para los visitantes de la página, mientras se ofrece una plataforma fácil de usar para la gestión y actualización del contenido de la página por parte del equipo de administración.


Objetivos específicos de este proyecto:

-Mejorar el rendimiento de la página web, optimizando el tiempo de carga y aumentando la velocidad de navegación.

-Diseñar una sección de noticias y eventos en la que el administrador y el editor puedan agregar y actualizar contenido de manera sencilla y eficiente.

-Implementar un sistema de autenticación y control de acceso para garantizar que solo el administrador y el editor tengan permiso para editar y publicar contenido en la sección de noticias y eventos.

-Diseñar una interfaz de usuario atractiva y fácil de usar que permita a los visitantes de la página acceder al contenido de noticias y eventos de manera rápida y sencilla.

-Realizar pruebas exhaustivas en la página web y la sección de noticias y eventos para garantizar que todo funcione correctamente y se detecten y corrijan errores antes del lanzamiento.




<!-- Organigrama -->
#### Organigrama.
![Organigrama](https://user-images.githubusercontent.com/105904645/231126874-8f9fe2a2-bd03-4d76-89a5-4fef3674e0a1.png)

<!-- Diagrama Gantt -->
#### Diagrama Gantt.
![Gantt](https://user-images.githubusercontent.com/105904645/231132987-61a5e252-b1af-4015-9799-936704842559.png)


<!-- Análisis del proyecto -->
## Análisis de la Solución.
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Requerimientos -->
#### Requerimientos.

Funcionales:


<img width="443" alt="image" src="https://user-images.githubusercontent.com/48172198/232952225-aa560054-1590-47a7-ad9a-5ca8ae5a61bc.png">

No Funcionales:


<img width="443" alt="image" src="https://user-images.githubusercontent.com/48172198/232952319-506d4355-6319-4747-8fc3-a0f68d7970d8.png">



<!-- Diagrama de Casos de Uso -->
#### Diagrama Casos de Uso.
Creador de contenido

![WhatsApp Image 2023-04-18 at 11 26 49 PM](https://user-images.githubusercontent.com/48172198/233217287-c323391e-b74d-4bcc-a36f-c3a023a1b1b5.jpeg)


Administrador

![CasoUsoAdmin](https://user-images.githubusercontent.com/105904645/231140731-ee252cbb-7555-482d-bbf4-50d091f3f988.png)

Usuario Visitante

![Usuario](https://user-images.githubusercontent.com/105904645/231140795-40053e2c-9bb8-41e5-8911-200abc37e568.png)


<!-- Diseño del proyecto -->
## Diseño de la Solución.
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Modelo Relacional -->
#### Modelo No Relacional.
Esquema de la base de datos (nombre de campo, tipo de datos, restricciones, etc)


Colección de usuarios    

![ModelUsuarios](https://user-images.githubusercontent.com/105904645/231142792-6eb120af-90dc-4908-bbfa-b1349adb2ecb.png)

Colección noticias     
![ModeloNoticias](https://user-images.githubusercontent.com/105904645/231142964-aad756ce-6ee7-49ac-9a31-f79acf69f944.png)


Colección eventos      

![ModeloEventos](https://user-images.githubusercontent.com/105904645/231142994-23a9fe6e-072f-48a8-9ac1-720269fb5e7f.png)




#### Diagrama de actividades
*Editar Evento* 
El Creador de contenido quiere editar un evento que sera visible dentro de la pagina web, para ello entra a la pagina, inicia sesión y despues entra al apartado de edicion de eventos.
![Actividad1](https://user-images.githubusercontent.com/48172198/233221285-18074d24-4c1e-461c-9f1d-a70a15fe58a7.png)


*Editar Noticia*
El Creador de contenido accede al sitio web e inicia sesión. Se dirige a el apartado de edicion de noticias para editar una noticia.
![Actividad2](https://user-images.githubusercontent.com/48172198/233224014-95dd7c60-6a94-4816-8895-00fdb1e61991.png)


*Editar Usuario*
El Administrador accede al sitio web e inicia sesión. En la vista adminitrador busca el apartado de edicion de permisos de usuarios.
![Actividad3](https://user-images.githubusercontent.com/48172198/233225350-6cad1823-015c-46a1-803b-4d36f4ce9063.png)



<!-- Implementación del proyecto -->
## Implementación.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Estándares de Codificación -->
#### Estándares Codificación.
Estándares empleados en la codificación

<!-- Arquitectura MVC y Middleware -->
#### Arquitectura.
Definir los patrones empleados y de seguridad.

<!-- Código Fuente -->
#### Código Fuente.
Código Fuente de la solución


<!-- Pruebas proyecto -->
## Pruebas.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Casos de prueba -->
#### Casos de prueba.
Indicar los casos de prueba

<!-- Ejecución Casos de prueba -->
#### Ejecución.
Evidencia de Ejecución de Casos de prueba.


<!-- Iniciando -->
## Iniciando
Iniciando.

<!-- Requisitos -->
### Requisitos
Antes de utilizar las nuevas funcionalidades de administración de contenido del sitio web, se deben cumplir los siguientes requisitos previos:
*	Navegador web
*	Dispositivo electrónico
*	Permisos de usuario
*	Conexión a internet 
*	Edición de contenido


<!-- Instalación -->
### Instalacion
Proceso de instalación
Para realizar la instalación debe ingresar al link de nuestro repositorio
https://github.com/OsmarVillegas/Integradora-Optimen
Descarga
Una vez ingresado deberemos descargar el contenido, tenemos dos opciones para realizarlo.

###Instalación opción A
En la página de nuestro repositorio copiaremos el link.

 ![R](https://user-images.githubusercontent.com/105904645/231147195-c488b027-878a-477d-b35a-8a1c25f00f99.png)

Ilustración 1 Link repositorio
Una vez copiado el link nos dirigiremos a una carpeta de nuestra preferencia que se encuentre vacía.
Abrimos un CMD con la ubicación de nuestra carpeta, el CMD podemos abrirlo desde nuestra barra de búsquedas de Windows o desde nuestro administrador de archivos colocando CMD, de esta última forma se nos abrirá el CMD directamente en la ubicación del administrador de archivos. 

Una vez copiado el link nos dirigiremos a una carpeta de nuestra preferencia que se encuentre vacía.
Abrimos un CMD con la ubicación de nuestra carpeta, el CMD podemos abrirlo desde nuestra barra de búsquedas de Windows o desde nuestro administrador de archivos colocando CMD, de esta última forma se nos abrirá el CMD directamente en la ubicación del administrador de archivos. 

 ![r2](https://user-images.githubusercontent.com/105904645/231147783-cd16c270-5cac-4332-a149-04f62e7aeded.png)

Ilustración 2 CMD en el administrador de archivos.

En el cmd abierto colocaremos el siguiente comando:
git clone url
Esto comenzara el proceso de instalación de nuestro proyecto.
Finalmente obtenemos el siguiente resultado.

###Instalación opción B
La segunda forma de instalar el archivo es presionando el botón Code y seleccionando Download ZIP.
![r3](https://user-images.githubusercontent.com/105904645/231148216-a7246ad7-f8a6-4132-acfc-a823c0513f29.png)

Esto nos permitirá descargar nuestro archivo en formato zip, ahora solo deberemos cortarlo y pegarlo en nuestra carpeta para descomprimirlo.

![r4](https://user-images.githubusercontent.com/105904645/231148705-8f8a9abe-587b-48e0-8878-5b84d100c9af.png)
Ilustración 4 Descomprimir archivo zip

Finalmente obtendremos el mismo resultado.
![r5](https://user-images.githubusercontent.com/105904645/231148962-a7e7ab9f-9cf9-4057-99a4-b0fff2bf9f52.png)
Ilustración 5 Resultado proceso de instalación B
Instalación de dependencias
Para instalar las dependencias debemos abrir Visual Studio Code en la ubicación de nuestro archivo, para ello podemos abrirlo y entrar a la ubicación de nuestra carpeta o también podemos utilizar nuestro CMD, Abrimos un CMD directamente en la carpeta como lo hemos hecho anteriormente (instalación opción A) y colocamos:
code .

![r6](https://user-images.githubusercontent.com/105904645/231149146-e6367765-244e-4778-83f3-5fa108c009f0.png)

Ilustración 6 CMD comando code .

Esto abrirá una ventana de Visual Studio Code directamente en la ubicación de nuestro archivo, ahora solo instalaremos las dependencias.

![r7](https://user-images.githubusercontent.com/105904645/231149615-a1f1cdce-8b59-4419-900d-3a8548b6aadf.png)

Ilustración 7 Pantalla Visual Studio Code.

###Backend

Instalación de dependencias
Para instalar las dependencias de backend ingresaremos a nuestra carpeta Backend desde nuestra terminal, para ello abriremos una termina nueva con el comando Ctrl + j.

![r8](https://user-images.githubusercontent.com/105904645/231149920-9d211916-275c-494d-9522-f827f9a73d00.png)

Ilustración 8 Abrir CMD Visual Studio Code.

En la terminal nueva ingresaremos a la carpeta Backend, con el comando cd Backend.

![r9](https://user-images.githubusercontent.com/105904645/231150334-33a691d0-5ff8-41be-8ed7-8beb7383e57c.png)

Ilustración 9 Comando cd Backend

Una vez ingresado instalaremos las dependencias con el siguiente comando:
npm i

![r10](https://user-images.githubusercontent.com/105904645/231150525-5f23c7f2-f215-4a44-8887-3e173b7619d5.png)

El comando comenzara el proceso de instalación, tendremos que esperar hasta que termine para continuar con su ejecución.
Ejecución del backend

Una vez terminada la instalación de dependencias colocaremos en el mismo CMD el siguiente comando:

npm start

![r11](https://user-images.githubusercontent.com/105904645/231150950-25b728e6-c425-4b9b-abb4-9da8c7f556a8.png)

Ilustración 11 Comando npm start

Este comando comenzara la ejecución de nuestro backend.
Finalmente nos arrojara el siguiente resultado.

![r12](https://user-images.githubusercontent.com/105904645/231151325-da7d3865-4c41-465f-a353-1cdc5c0cf21a.png)
Ilustración 12 Resultado ejecución Backend

Es muy importante que mantengamos este archivo ejecutándose en todo el tiempo que utilicemos nuestra aplicación pues de él depende nuestra base de datos.

Problemas con nodemon
Es muy probable que nos arroje un error si no tenemos configurado nodemon en nuestra computadora, la solución es sencilla y el problema se debe a una configuración especial que tiene nuestra computadora, para solucionarlo deberemos abrir un PowerShell como administrador

![r13](https://user-images.githubusercontent.com/105904645/231151682-5aa7e998-7941-4127-8594-51c79ebe0e99.png)

En nuestro PowerShell colocaremos el siguiente comando:

Set-ExecutionPolicy RemoteSigned

![r14](https://user-images.githubusercontent.com/105904645/231152057-61b9b210-5120-4de1-ae2d-4f086c2cf662.png)

Presionamos enter y contestamos con una S para aprobar las modificaciones,

![r15](https://user-images.githubusercontent.com/105904645/231152613-1d859f82-abec-4e90-8d39-ecc5239336ce.png)

Con esto ya hemos permitido el acceso a nodemon, solo deberemos volver a ejecutar nuestro servidor con npm start.

###Frontend

Instalación de dependencias
Para ejecutar nuestro archivo frontend abrimos otra pestaña CMD, ingresaremos a la carpeta de nuestra aplicación con el comando cd Frontend.


![Captura de pantalla 2023-04-11 054343](https://user-images.githubusercontent.com/105904645/231152971-1aafb0e0-862a-46ab-8f73-237fd4e8ef8e.png)

Ilustración 13 Comando cd Frontend.

Una vez adentro colocaremos el siguiente comando:
npm i

![r17](https://user-images.githubusercontent.com/105904645/231153125-575c708c-ba05-4909-971c-e0eb07163e73.png)

Ilustración 14 Comando npm i

Este comando comenzara la descarga de las dependencias, esperaremos a que la instalación finalice.
Ejecución del Frontend

Una vez finalizada colocaremos el siguiente comando:
npm start


![r18](https://user-images.githubusercontent.com/105904645/231153316-75325b33-85c8-41b0-bbb5-90a63e680db3.png)

Ilustración 15 Comando npm start

Después de esperar un momento se abrirá una pantalla con nuestro proyecto.
¡Eso es todo! Si ha seguido estos pasos, debería tener una instancia del proyecto Optimen Web Site ejecutándose en su computadora. 

## Guias
Guias de Uso.

Visitante
El rol de visitante es para todos aquellos usuarios que accedan a la página, ellos pueden acceder a los contenidos que se encuentran en las pantallas principales.

Navegación
El usuario puede utilizar la barra de navegación de la parte superior de la pantalla para navegar entre las diferentes vistas que presenta la página web.


![v1](https://user-images.githubusercontent.com/105904645/231155345-36909fc8-a613-4ed2-b0d4-86ae18ea48fa.png)

Ilustración 17 Barra de navegación

Presionando en cada una de las opciones lo envía a la pantalla correspondiente.
Vista
El usuario puede visualizar las pantallas que se presentan:

Home

![v2](https://user-images.githubusercontent.com/105904645/231155474-7c128e3b-78db-451b-ab56-5288f89288f9.png)

Ilustración 18 Vista Home

Customers

![v3](https://user-images.githubusercontent.com/105904645/231155665-39ad24ee-cd81-47e1-a1c3-dc01f3038f70.png)

Ilustración 19 Vista Customers

About Us

![v4](https://user-images.githubusercontent.com/105904645/231155858-41736a7f-a449-438e-ab39-27242b1f887b.png)

Ilustración 20 Vista About Us

News

![v5](https://user-images.githubusercontent.com/105904645/231156178-4a4c47c8-43c0-401f-9304-36d274c52b6e.png)

Ilustración 21 Vista News

Contact Us

![v6](https://user-images.githubusercontent.com/105904645/231156409-e0d5b5ea-a50a-4ee2-a840-e069c8db977b.png)

Ilustración 22 Vista Contact Us

Contact Us
En la pantalla Contact Us el usuario puede rellenar un formulario para comunicarse con la empresa, para ello debe hacer lo siguiente:
Ingresa a la pantalla Contact Us a través de la barra de navegación.

La página presenta un formulario, este debe rellenarse con la información que solicita.

![v7](https://user-images.githubusercontent.com/105904645/231156549-d72e1832-849c-4414-a750-81944e7871dd.png)

Ilustración 23 Formulario sin rellenar

![8](https://user-images.githubusercontent.com/105904645/231156740-eea82b7e-6dd0-44ac-aafd-fe41bd1bb982.png)

Ilustración 24 Formulario relleno

Visualización de noticias y eventos
En la vista News se presentan todas las noticias generadas, el usuario puede seleccionar una y se le despliega el contenido en una pantalla nueva.

![v8](https://user-images.githubusercontent.com/105904645/231157022-9434396d-5e3c-47f2-b99a-5bf3b9cf635f.png)

Ilustración 25 Noticias página News

Para ello el usuario deberá acceder a la vista News y seleccionar la noticia de su interés.
Traducción
El usuario tiene acceso a un botón de traducción que se encuentra en la esquina inferior derecha de forma estática (siempre se va a encontrar en el mismo lugar), que permite traducir los contenidos.

![v9](https://user-images.githubusercontent.com/105904645/231157192-bb5eb469-94bb-423e-af20-2d26da7ee130.png)

Ilustración 26 Botón de traducción.

Para utilizarlo debemos presionar sobre él, esto desplegara las opciones de traducción.


![v10](https://user-images.githubusercontent.com/105904645/231157342-363ca6d9-2671-4c2a-b6dc-87cc1f30c25d.png)

Ilustración 27 Opciones de traducción.

Dependiendo de la opción seleccionada el idioma de la página cambiara entre español (es) o inglés (en).
Admin
El rol de admin es para el encargado de administrar los contenidos y a los usuarios que puedan generar contenido (rol creador de contenido), para acceder a sus funciones deberá autenticarse con una cuenta.
Logueo
El administrador debe acceder al siguiente URL:
http://localhost:3000/login
Esta URL les desplegará una pantalla de logueo que dará acceso a sus funcionalidades.
Administración de usuarios
Una vez que el administrador acceda puede escoger entre administrar las noticias y eventos o a sus usuarios, para administrar a sus usuarios se desplegara la siguiente pantalla.

![v11](https://user-images.githubusercontent.com/105904645/231157581-d1457951-990c-410c-bde6-b379b8f977d3.png)

Ilustración 28 Vista administrar usuarios

En ella puede visualizar, agregar, eliminar y editar a los usuarios.
Para agregar un nuevo usuario deberá presionar el botón agregar que se encuentra en la parte inferior derecha de la tabla, esto desplegara un modal que le permitirá rellenar un formulario que agregue al nuevo usuario a la base de datos.

Para editar debe presionar el botón de la fila columna Edit, seleccionando la final de aquel usuario que desea modificar, esto desplegara un formulario que presenta la información del usuario seleccionado y permita editarlos datos del usuario.

Para eliminar deberá presionar el botón de la columna Delete seleccionando el elemento de la fila que desea eliminar.
Administración de noticias y eventos

Si el administrador escoge la administración de noticias y eventos le aparecerá la siguiente pantalla.

![v12](https://user-images.githubusercontent.com/105904645/231158039-c9dee022-9778-49bf-9fee-271977b24b4a.png)

Ilustración 29 Pantalla administrar noticias y eventos

En ella puede visualizar, agregar, eliminar y editar noticias o eventos.
Para agregar un nuevo evento o noticia deberá presionar el botón agregar que se encuentra en la parte inferior derecha de la tabla de cada tabla, esto desplegara un modal que le permitirá rellenar un formulario que agregue a la nueva noticia o a un nuevo evento a la base de datos.

Para editar debe presionar el botón de la fila columna Edit, seleccionando la final de aquel evento o noticia que desea modificar, esto desplegara un formulario que presenta la información de la noticia o evento seleccionado y permita editarlos datos del elemento seleccionado.

Para eliminar deberá presionar el botón de la columna Delete seleccionando el elemento de la fila que desea eliminar.

Creador de contenido
El rol de creador de contenido es para los encargados de generar contenido que se visualizará en la pantalla News, para acceder a sus funciones deberá autenticarse con una cuenta.
Logueo
El creador de contenido debe acceder al siguiente URL:
http://localhost:3000/login
Esta URL les desplegará una pantalla de logueo que dará acceso a sus funcionalidades.
Administración de noticias y eventos
Si el administrador escoge la administración de noticias y eventos le aparecerá la siguiente pantalla.

![v13](https://user-images.githubusercontent.com/105904645/231158425-b620eb40-5572-481f-a5b4-490718199cef.png)

Ilustración 30 Pantalla administrar noticias y eventos

En ella puede visualizar, agregar, eliminar y editar noticias o eventos.

Para agregar un nuevo evento o noticia deberá presionar el botón agregar que se encuentra en la parte inferior derecha de la tabla de cada tabla, esto desplegara un modal que le permitirá rellenar un formulario que agregue a la nueva noticia o a un nuevo evento a la base de datos.

Para editar debe presionar el botón de la fila columna Edit, seleccionando la final de aquel evento o noticia que desea modificar, esto desplegara un formulario que presenta la información de la noticia o evento seleccionado y permita editarlos datos del elemento seleccionado.

Para eliminar deberá presionar el botón de la columna Delete seleccionando el elemento de la fila que desea eliminar.


## Contribucion
Contribucion.

## Licencia
Licencia.

## Contacto
Contacto.

## Participantes
* [Osmar Israel Villegas Martínez](https://github.com/OsmarVillegas)
* [Mario Alberto Rangel Márquez](https://github.com/MMarioLP)
* [Godínez Morales Martin Gabriel](https://github.com/GabrielGM16)
