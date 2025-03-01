const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const devicesRouter = require("./routes/devices");
require("dotenv").config();
require("./config/database"); // Conexión a MongoDB

// Configuración de Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({ secret: "secreto", resave: false, saveUninitialized: true }));

// Configuración de vistas y archivos estáticos
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/dispositivos", devicesRouter);

// Ruta principal
app.get("/", (req, res) => {
    res.redirect("/dispositivos");
});

// Servidor en puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));
