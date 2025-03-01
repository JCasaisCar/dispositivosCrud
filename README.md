# CRUD de Dispositivos Móviles con Node.js, Express y MongoDB


## 📌 Descripción

Este proyecto es una aplicación web para gestionar un **CRUD** (Crear, Leer, Actualizar, Eliminar) de **dispositivos móviles**. Está desarrollado con **Node.js**, **Express** y **MongoDB** como base de datos, y proporciona una interfaz sencilla para gestionar los dispositivos móviles.

- **Node.js** se encarga de la parte del servidor.
- **Express** se utiliza para manejar las rutas y la lógica de la aplicación.
- **MongoDB** se usa para almacenar y gestionar los datos de los dispositivos móviles.


## 🚀 Características

- **Interfaz amigable** con un diseño sencillo para gestionar dispositivos móviles.
- **CRUD completo** para agregar, visualizar, editar y eliminar dispositivos.
- **Gestión de sesiones** para usuarios mediante `express-session`.
- **Rutas RESTful** para manejar las peticiones HTTP.
- **Validación** de formularios y manejo de errores.


## 📌 Instalación

### 1. Clona el repositorio

Para comenzar, clona el repositorio en tu máquina local:

```sh
git clone https://github.com/tuusuario/dispositivos-crud.git
cd dispositivos-crud
```

### 2. Instala las dependencias

Instala todas las dependencias necesarias utilizando npm:

```sh
npm install
```

### 3. Configura las variables de entorno

Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:

```sh
PORT=3000
DB_URI=mongodb://localhost:27017/dispositivos-crud
SECRET_KEY=tu_clave_secreta
PORT: El puerto en el que el servidor se ejecutará.
DB_URI: La URI de tu base de datos MongoDB (asegúrate de tener MongoDB corriendo localmente o utilizar un servicio de MongoDB en la nube).
SECRET_KEY: Una clave secreta para la sesión (puedes cambiarla a tu gusto).
```

### 4. Inicia el servidor

Una vez que hayas configurado las variables de entorno y las dependencias, puedes iniciar el servidor:

```sh
npm start
```

El servidor se ejecutará en el puerto 3000 o el puerto que hayas configurado en el archivo .env.

Accede a la aplicación a través de tu navegador en:

```sh
http://localhost:3000
```


## 📌 Funcionalidades

### 1. Vista Principal

En la vista principal, podrás ver todos los dispositivos móviles almacenados en la base de datos. Desde aquí podrás:

Ver una lista de dispositivos.

Redirigir a las páginas de edición o eliminación de dispositivos.

### 2. Añadir Dispositivo

A través de un formulario, podrás agregar nuevos dispositivos a la base de datos.

### 3. Editar Dispositivo

Puedes editar cualquier dispositivo ya almacenado en la base de datos. Solo tienes que seleccionar el dispositivo y modificar los campos necesarios.

### 4. Eliminar Dispositivo

Puedes eliminar un dispositivo de la base de datos de manera sencilla.

### 5. Validación de Datos

El formulario de agregar y editar dispositivos está validado para asegurarse de que los datos ingresados sean correctos antes de ser enviados a la base de datos.

### 6. Gestión de Sesiones

El sistema está configurado con sesiones para asegurar que las operaciones sean realizadas por usuarios autenticados.


## 📌 Dependencias

Este proyecto utiliza las siguientes dependencias:

### express: Framework web para Node.js.

### mongoose: ODM para trabajar con MongoDB.

### body-parser: Middleware para procesar datos de formularios.

### express-session: Middleware para manejar sesiones.

### method-override: Middleware para simular otros métodos HTTP como PUT y DELETE.

Puedes ver todas las dependencias en el archivo package.json.

## 💡 ¡Sigue adelante y hazlo tuyo!