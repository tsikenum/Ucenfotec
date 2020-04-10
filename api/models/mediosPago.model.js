'use strict';


const mongoose = require('mongoose');

const schema_tarjetas = new mongoose.Schema({
    usuario: { type: String, required: true, unique: false },
    tarjetas:[{
        tarjetaHabiente: { type: String, required: true, unique: false },
        numTarjeta: { type: Number, required: true, unique: true },
        año:{ type: Number, required: true, unique: false },
        mes:{type:Number,required:true,unique:false},
        cvv: { type: Number, required: true, unique: false },
        emisor:{type:String,required:true,unique:false},
        estado: { type: String, required: true, unique: false },
    }]
});



module.exports = mongoose.model('tarjeta', schema_tarjetas, 'creditCards');