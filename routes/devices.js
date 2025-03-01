const express = require("express");
const router = express.Router();
const Device = require("../models/Device");

// Ruta para listar todos los dispositivos
router.get("/", async (req, res) => {
    try {
        const mensaje = req.session ? (req.session.mensaje || "") : "";
        const dispositivos = await Device.find();
        console.log("✅ Dispositivos obtenidos:", dispositivos);

        if (req.session) {
            req.session.mensaje = "";
        }

        res.render("index", { dispositivos, mensaje });
    } catch (error) {
        console.error("❌ Error al obtener dispositivos:", error);
        res.status(500).send("Error al obtener los dispositivos");
    }
});

// Ruta para mostrar el formulario de nuevo dispositivo
router.get("/nuevo", (req, res) => {
    res.render("nuevo");
});

// Ruta para agregar un nuevo dispositivo
router.post("/", async (req, res) => {
    const { marca, modelo, precio, descripcion } = req.body;

    try {
        const nuevoDispositivo = new Device({
            marca,
            modelo,
            precio,
            descripcion
        });

        await nuevoDispositivo.save();
        console.log("✅ Dispositivo guardado en MongoDB:", nuevoDispositivo);

        req.session.mensaje = "Dispositivo agregado correctamente.";
        res.redirect("/dispositivos");
    } catch (error) {
        console.error("❌ Error al guardar en MongoDB:", error);
        res.status(500).send("Error al guardar el dispositivo");
    }
});

// Ruta para eliminar un dispositivo
router.delete("/:id", async (req, res) => {
    try {
        await Device.findByIdAndDelete(req.params.id);
        req.session.mensaje = "Dispositivo eliminado correctamente.";
        res.redirect("/dispositivos");
    } catch (error) {
        console.error("❌ Error al eliminar el dispositivo:", error);
        res.status(500).send("Error al eliminar el dispositivo");
    }
});

module.exports = router;  // 🔥 Ahora está al final del archivo
