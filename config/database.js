const mongoose = require("mongoose");
require("dotenv").config();

// Conectar a MongoDB sin opciones obsoletas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB conectado correctamente"))
    .catch(err => console.log("❌ Error en la conexión a MongoDB:", err));

module.exports = mongoose;
