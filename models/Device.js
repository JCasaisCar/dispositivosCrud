const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: String,
    imagen: String
});

module.exports = mongoose.model("Device", DeviceSchema);
