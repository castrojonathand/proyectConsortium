import { Schema, models, model } from "mongoose";

const mySchema = new Schema({
    name: {
        type: String, // Cambiado de 'typeof: "string"'
        required: [true, 'El nombre del edificio es requerido'],
        unique: true,
        trim: true,
    }
}, {
    timestamps: true,
});

export default models.edificios || model('edificios', mySchema); // Cambiado de models('edificios', mySchema)


