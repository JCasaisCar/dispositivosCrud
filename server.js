const express = require("express");
const mongoose = require("./config/database");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const methodOverride = require("method-override");

const app = express();

// Configurar sesiones
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: true
}));

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// Configurar motor de vistas
app.set("view engine", "ejs");

// Importar rutas
const deviceRoutes = require("./routes/devices");
app.use("/dispositivos", deviceRoutes);

// Ruta principal
app.get("/", (req, res) => {
    res.redirect("/dispositivos");
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
