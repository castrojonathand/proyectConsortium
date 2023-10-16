// Importar Mongoose
const mongoose = require('mongoose');

// Definir el esquema
const edificioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cuit:{
        type: String,
        required: true
    },
    claveSUTERH:{
        type: String,
        required: true
    },
});

// Crear el modelo
const Edificio = mongoose.model('Edificio', edificioSchema);

// Exportar el modelo
module.exports = Edificio;
