const mongoose = require("mongoose");

// Defino el esquema para los dispositivos
const DeviceSchema = new mongoose.Schema({
    marca: { type: String, required: true },  // La marca es obligatoria
    modelo: { type: String, required: true }, // El modelo también es obligatorio
    precio: { type: Number, required: true, min: 0 }, // Precio mínimo 0 y obligatorio
    descripcion: { type: String, required: true }, // La descripción no puede faltar
    imagen: { type: String, default: "default.jpg" } // Imagen por defecto si no se sube ninguna
}, { timestamps: true }); // Agrego marcas de tiempo (createdAt, updatedAt)

// Exporto el modelo para usarlo en otros archivos
module.exports = mongoose.model("Device", DeviceSchema);