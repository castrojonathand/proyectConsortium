import { Schema, models, model } from "mongoose";

const edificioSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    cuit:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    keySUTERH:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
});

export default models.edificios || model('edificios', edificioSchema);