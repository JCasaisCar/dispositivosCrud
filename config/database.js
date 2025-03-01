const mongoose = require("mongoose");
require("dotenv").config();

// Establezco la conexión con MongoDB usando las variables de entorno
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB conectado correctamente")) // Mensaje si la conexión es exitosa
    .catch(err => console.error("❌ Error en la conexión a MongoDB:", err)); // Mensaje si hay error

module.exports = mongoose; // Exporto la conexión para usarla en otros archivos