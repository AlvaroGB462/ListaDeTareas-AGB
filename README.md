# TareaMania

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




Para iniciar el servidor json debe de ejecutar este comando:
1.Primero lo instala:
```bash 
npm install -g json-server
```
y luego lo ejecuta:
```bash 
json-server --watch db.json
```










## 1. Pantalla de inicio
Cuando el usuario abre la aplicación, lo primero que ve es la pantalla de inicio que tiene un mensaje de bienvenida que dice "Bienvenido a TareaManía". Esta es una pantalla inicial estática sin funcionalidades.

## 2. Navegar entre secciones
La aplicación tiene un menú de navegación en la parte superior (barra de navegación). Este menú permite al usuario moverse entre dos secciones principales de la aplicación:

Categorías : Muestra las diferentes categorías de tareas (como "Personal", "Trabajo" y "Escuela").
Tareas : Permite al usuario gestionar todas las tareas (agregar nuevas, editar, eliminar, etc.).
Al hacer clic en cualquiera de los botones del menú, el usuario es redirigido a la sección correspondiente.

## 3. Gestión de categorías
En la sección de Categorías , el usuario ve una lista de categorías de tareas (como "Personal", "Trabajo", "Escuela"). Cada categoría es un botón. Cuando el usuario hace clic en una categoría, se cargarán las tareas asociadas a esa categoría.

Al seleccionar una categoría, la aplicación consulta las tareas filtradas de esa categoría y las muestra en una lista.
Para cada tarea, el usuario puede:
Marcarla como completada usando un checkbox (si está completada o no).
Eliminar la tarea si ya no la necesita.
## 4. Gestión de tareas
En la sección de Tareas , el usuario puede:

Ver todas las tareas o solo las tareas completadas , dependiendo de un botón que alterna entre estas dos opciones.
Agregar una nueva tarea :
El ingresa el nombre de la tarea y selecciona la categoría usuario correspondiente (como "Personal", "Trabajo" o "Escuela").
Al presionar el botón de "Agregar", la tarea se guarda en la base de datos y aparece en la lista de tareas.
Editar una tarea existente :
Si el usuario quiere cambiar el nombre o la categoría de una tarea, puede hacer clic en el botón "Modificar" junto a esa tarea. Esto abre un formulario para editar la tarea.
El usuario puede guardar los cambios o cancelar la edición.
Eliminar una tarea :
Al hacer clic en el botón "Eliminar", la tarea se borra de la lista y de la base de datos.
## 5. Interacciones con la base de datos
Cada vez que el usuario realiza alguna acción sobre las tareas (agregar, eliminar, completar o editar), la aplicación hace peticiones al servidor (a través del servicio TareaService), que interactúa con una base de datos simulada (en tu caso, un servidor JSON ). Esto asegura que los datos sean persistentes, es decir, que las tareas agregadas, eliminadas o modificadas no se perderán cuando el usuario recargue la página.

## 6. Flujo de interacción de tareas
Cuando el usuario agrega una tarea:

La tarea se guarda en el servidor y aparece en la lista de tareas.
Cuando el usuario marca una tarea como completada o no completada:

La aplicación actualiza la tarea en el servidor y refleja el cambio en la lista, cambiando la apariencia de la tarea (por ejemplo, mostrando una casilla de verificación marcada para tareas completadas).
Cuando el usuario elimina una tarea:

La tarea se elimina del servidor y desaparece de la lista en la interfaz de usuario.
## 7. Rendimiento optimizado
El uso de trackByen las listas de tareas es un detalle técnico que ayuda a mejorar el rendimiento . Esto significa que cuando la lista de tareas se actualiza (por ejemplo, cuando una tarea está completada o eliminada), Angular puede actualizar solo las tareas que han cambiado en lugar de volver a renderizar toda la lista. Esto hace que la aplicación sea más rápida y eficiente, especialmente cuando hay muchas tareas.

## 8. Finalización del flujo
A lo largo de todo este flujo, la aplicación está constante sincronización con el servidor para asegurarse de que todas las tareas estén actualizadas y de que los cambios realizados por un usuario se reflejen inmediatamente en la interfaz, proporcionando una experiencia dinámica y fluida.
