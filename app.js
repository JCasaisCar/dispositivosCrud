const express = require("express"); // Se importa express para manejar el servidor
const app = express(); // Se crea la instancia de la aplicación express
const path = require("path"); // Se importa path para manejar las rutas de archivos
const methodOverride = require("method-override"); // Se importa method-override para poder simular métodos HTTP como PUT y DELETE
const session = require("express-session"); // Se importa express-session para manejar sesiones de usuario
const devicesRouter = require("./routes/devices"); // Se importa el enrutador para las rutas relacionadas con dispositivos
require("dotenv").config(); // Se cargan las variables de entorno desde un archivo .env
require("./config/database"); // Se establece la conexión a la base de datos MongoDB

// Configuración de los middlewares para procesar datos
app.use(express.urlencoded({ extended: true })); // Se configura para procesar formularios con URL codificada
app.use(express.json()); // Se configura para procesar datos en formato JSON
app.use(methodOverride("_method")); // Se configura para sobrescribir el método HTTP de los formularios
app.use(session({ secret: "secreto", resave: false, saveUninitialized: true })); // Se configura la sesión con un secreto

// Configuración del motor de plantillas y rutas estáticas
app.set("view engine", "ejs"); // Se establece el motor de plantillas EJS
app.set("views", path.join(__dirname, "views")); // Se configura la carpeta donde se encuentran las vistas
app.use(express.static(path.join(__dirname, "public"))); // Se configuran los archivos estáticos, como CSS, JS e imágenes

// Rutas
app.use("/dispositivos", devicesRouter); // Se define la ruta para los dispositivos usando el enrutador correspondiente

// Ruta principal
app.get("/", (req, res) => {
    res.redirect("/dispositivos"); // La ruta principal redirige a /dispositivos
});

// Iniciar el servidor en el puerto 3000 o el especificado en las variables de entorno
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`)); // Se inicia el servidor y se muestra el mensaje en consola