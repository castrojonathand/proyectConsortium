import { Schema, models, model } from "mongoose";

// const uf = new Schema({
//     uf: String,
//     dpto: String,
//     propietario: String,
//     saldoAnterior: Number,
//     pago: Number,
//     deuda: saldoAnterior-pago,
//     interes: {
//         porciento: Number,
//         valor: (deuda*porciento)/100,
//     },
//     gastoA: {
        
//         porciento: Number,
//         valor: Number,
//     },
//     gastoB: {
//         porciento: Number,
//         valor: Number,
//     },
//     extras: {
//         porciento: Number,
//         valor: Number,
//     },
//     redondeo: Number,
//     total: deuda+interes+gastoA.valor+gastoB.valor+extras.valor+redondeo,
// });

const edificioSchema = new Schema({
    month: {
        type: String,
        // required: true,
        unique: true,
        trim: true,
    },
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