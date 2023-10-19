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
    }
},  {
    timestamps: true,
});

export default models.Edificios || model('Edificios', edificioSchema);