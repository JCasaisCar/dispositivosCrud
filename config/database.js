const mongoose = require("mongoose");
require("dotenv").config();

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB conectado correctamente"))
    .catch(err => console.error("❌ Error en la conexión a MongoDB:", err));

module.exports = mongoose;
