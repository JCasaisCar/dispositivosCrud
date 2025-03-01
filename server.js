const express = require("express"); // Se importa express para manejar el servidor
const mongoose = require("./config/database"); // Se importa la conexión a la base de datos MongoDB desde un archivo de configuración
const path = require("path"); // Se importa path para manejar las rutas de archivos
const bodyParser = require("body-parser"); // Se importa body-parser para procesar los datos de los formularios
const session = require("express-session"); // Se importa express-session para manejar las sesiones de usuario
const methodOverride = require("method-override"); // Se importa method-override para simular métodos HTTP como PUT y DELETE

const app = express(); // Se crea la instancia de la aplicación express

// Configurar sesiones
app.use(session({
    secret: "secreto", // Se establece una clave secreta para la sesión
    resave: false, // No se guarda la sesión si no ha habido cambios
    saveUninitialized: true // Se guarda la sesión aunque no esté inicializada
}));

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true })); // Se configura body-parser para procesar datos de formularios con URL codificada
app.use(express.static(path.join(__dirname, "public"))); // Se configuran los archivos estáticos, como CSS, JS e imágenes
app.use(methodOverride("_method")); // Se configura method-override para poder simular otros métodos HTTP

// Configurar motor de vistas
app.set("view engine", "ejs"); // Se establece el motor de plantillas EJS

// Importar rutas
const deviceRoutes = require("./routes/devices"); // Se importa el enrutador de dispositivos
app.use("/dispositivos", deviceRoutes); // Se definen las rutas para los dispositivos

// Ruta principal
app.get("/", (req, res) => {
    res.redirect("/dispositivos"); // La ruta principal redirige a /dispositivos
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor en http://localhost:3000")); // Se inicia el servidor y se muestra el mensaje en consola