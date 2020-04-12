# Prueba Técnica - Desarrollador Front-end
La siguiente es una prueba es para evaluar a los postulantes a programador **Front-end FractalUp**.

## INTRODUCCIÓN
Este documento contiene los requerimientos de un Caso Práctico, el cual busca evaluar las capacidades técnicas del postulante con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Tecnología de _FractalUp_.

#### ¿Qué se busca evaluar?
Principalmente los siguientes aspectos:
  + Creatividad para resolver los requerimientos.
  + Calidad del código entregado (estructura y buenas prácticas).
  + Eficiencia de los algoritmos entregados.
  + Familiaridad con las librerías que FractalUp usa.
  + Implementación de responsive design y mobile-first **(Bonus)**.
  + Realización de testing unitario con Jest al reproductor de música **(Bonus)**.
  + Despliegue de la aplicación completa a algún servicio como Netlify o Github. **(Bonus)**.


## IMPORTANTE
1. Asegúrate de tener `Node.js` y `npm` instalados.
2. Asegúrate de tener los wireframes de la aplicación en alguna pestaña del navegador. [Wireframes](https://www.figma.com/file/WR7r3GOUauL9EdOLHun0IdfE/Foxbel-Music?node-id=0%3A1).
3. Los colores, tipografía y dimensiones de los elementos se encuentran detallados en los wireframes.
4. También de tener las imágenes necesarias para la elaboración de la aplicación. Los íconos serán conseguidos de otra fuente. [Imágenes](https://drive.google.com/drive/folders/1KD063jA8fK7gBIq5WB-K5ttJqeGdBDHP?usp=sharing).
5. Se solicita crear la aplicación utilizando la tecnología web usada en _FractalUp_, la cual es **Vue**, es recomendable usar el **CLI de Vue**. Sin embargo, el uso de frameworks de css está a libre elección.
6. El tiempo límite empleado es empezando el **domingo 12 de Abril a las 10:00 a.m.** y finalizando el **lunes 13 de Abril a las 10:00 p.m.**
7. Se requiere de una **cuenta de GitHub** para realizar este ejercicio.
8. **Antes de comenzar a programar:**
    * Realizar un `Fork` de este repositorio (https://github.com/thedavos/frontend-test-coding).
    * Clonar el fork a su máquina local  `git clone git@github.com:USERNAME/FORKED-PROJECT.git`
    * Crear un `branch` en su cuenta de GitHub utilizando su nombre completo.
9. **Al finalizar**, existen 2 (dos) opciones para entregar su proyecto:
    * 1) Realizar un `Commit` de su proyecto, **enviar un `Pull Request` al branch con su NOMBRE**, y notificar a la siguiente dirección de correo electrónico  [marcos.vargas@fractalup.com](mailto:marcos.vargas@fractalup.com).
    * 2) Crear un archivo comprimido (_.zip_ o _.rar_) de su proyecto y enviar a la siguiente dirección de correo electrónico  [marcos.vargas@fractalup.com](mailto:marcos.vargas@fractalup.com).

## EJERCICIO PRÁCTICO
**Objetivo:** Crear una aplicación que ayude a obtener una lista de álbumes, canciones y sus artistas. Además, también debe reproducir las canciones que el usuario seleccione, usando la API Rest pública de Lastfm https://www.last.fm/api/intro

#### Requerimientos generales

1. La aplicación debe cumplir con los siguientes **requisitos funcionales:**

    - Crear una aplicación que incluya un reproductor de música personalizado que recupere la información usando el API anteriormente indicada según las interacciones del usuario sobre la interfaz. Además, este reproductor debe tener opciones como reproducir la canción, cambiar el volumen, pasar a la siguiente canción, volver a la anterior canción si es que es un álbum.

    - La aplicación debe tener todas sus pantallas correspondientes al catálogo principal, artista y el álbum del artista y se debe poner navegar como una **single page application** usando **vue-router**.

    - La aplicación debe tener un estado global, esto usando **vuex**.

    - Mostrar el top 10 de canciones recientes de algún usuario usando el API al cargar el catálogo principal (Home).

    - Mostrar los primeros 10 resultados de la búsqueda según álbumes, artistas o canciones. El evento a suceder será dependiendo de la interacción (click) del usuario. Si es una canción, debe reproducirla y si es un artista o un álbum debe cambiar de pantalla al correspondiente.

    - Se debe adoptar alguna metodología de diseño como Atomic Design o alguna más para la estructuración de componentes.

    - En la pantalla de catálogo principal, cuando el usuario interactúe (click) con algún elemento con un ícono de play encima, este debe reproducirse en consecuencia.

    - En la pantalla artista, cuando el usuario interactúe (click) en el botón de reproducir, este debe reproducir algún álbum del artista de manera aleatoria.

    - Si se reproduce un álbum, se debe reproducir la lista de canciones.

    - Incluir un componente para mostrar mensajes de Error en toda la aplicación.

2. **CSS:** Utilizar algún framework (a elección) para escribir los archivos CSS, tomando en cuenta la compatibilidad con distintos navegadores.

3. **Iconos:** Utilizar una librería para el manejo de iconos donde lo considere necesario (_se recomienda el uso de [Font Awesome](http://fontawesome.io/) o [Glyphicons](http://glyphicons.com/)._)
