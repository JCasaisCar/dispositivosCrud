const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: Number, required: true, min: 0 },
    descripcion: { type: String, required: true },
    imagen: { type: String, default: "default.jpg" }
}, { timestamps: true });

module.exports = mongoose.model("Device", DeviceSchema);
