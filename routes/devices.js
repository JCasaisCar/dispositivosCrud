const express = require("express");
const router = express.Router();
const Device = require("../models/Device");
const multer = require("multer");

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage });

// Obtener lista de dispositivos con paginación
router.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 5;
        const dispositivos = await Device.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });

        const mensaje = req.session.mensaje || "";
        req.session.mensaje = "";

        res.render("index", { dispositivos, mensaje, page });
    } catch (error) {
        console.error("❌ Error al obtener dispositivos:", error);
        res.status(500).send("Error al obtener los dispositivos");
    }
});

// Agregar nuevo dispositivo
router.post("/", upload.single("imagen"), async (req, res) => {
    try {
        const { marca, modelo, precio, descripcion } = req.body;
        const imagen = req.file ? req.file.filename : "default.jpg";

        const nuevoDispositivo = new Device({ marca, modelo, precio, descripcion, imagen });
        await nuevoDispositivo.save();

        req.session.mensaje = "Dispositivo agregado correctamente.";
        res.redirect("/dispositivos");
    } catch (error) {
        console.error("❌ Error al guardar en MongoDB:", error);
        res.status(500).send("Error al guardar el dispositivo");
    }
});

// Editar dispositivo
router.put("/:id", upload.single("imagen"), async (req, res) => {
    try {
        const { marca, modelo, precio, descripcion } = req.body;
        const imagen = req.file ? req.file.filename : req.body.imagenExistente;

        await Device.findByIdAndUpdate(req.params.id, { marca, modelo, precio, descripcion, imagen });

        req.session.mensaje = "Dispositivo actualizado correctamente.";
        res.redirect("/dispositivos");
    } catch (error) {
        console.error("❌ Error al actualizar el dispositivo:", error);
        res.status(500).send("Error al actualizar el dispositivo");
    }
});

// Eliminar dispositivo
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

module.exports = router;


// Obtener un dispositivo por ID (para edición)
router.get("/:id", async (req, res) => {
    try {
        const dispositivo = await Device.findById(req.params.id);
        res.json(dispositivo);
    } catch (error) {
        console.error("❌ Error al obtener el dispositivo:", error);
        res.status(500).send("Error al obtener el dispositivo");
    }
});

// Actualizar dispositivo
router.put("/:id", async (req, res) => {
    const { marca, modelo, precio, descripcion } = req.body;

    try {
        await Device.findByIdAndUpdate(req.params.id, {
            marca,
            modelo,
            precio,
            descripcion
        });

        req.session.mensaje = "Dispositivo actualizado correctamente.";
        res.redirect("/dispositivos");
    } catch (error) {
        console.error("❌ Error al actualizar el dispositivo:", error);
        res.status(500).send("Error al actualizar el dispositivo");
    }
});
