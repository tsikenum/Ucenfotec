'use strict';


const mongoose = require('mongoose');

const schema_persona = new mongoose.Schema({
    tipo_persona: { type: String, required: true, unique: false },
    primerNombre: { type: String, required: true, unique: false },
    segundoNombre: { type: String, required: false, unique: false },
    primerApellido: { type: String, required: true, unique: false },
    segundoApellido: { type: String, required: false, unique: false },
    tipoID: { type: String, required: true, unique: false },
    genero: { type: String, required: true, unique: false },
    idNumero: { type: String, required: true, unique: true },
    telefono: [{
        numero:{type: String, required:true, unique: false},
        descripcion:{type: String, required:true, unique: false}
    }],
    tarjeta: [{
        tarjetaHabiente: { type: String, required: false, unique: false },
        numTarjeta: { type: Number, required: false, unique: true },
        año:{ type: Number, required: false, unique: false },
        mes:{type:Number,required:false,unique:false},
        cvv: { type: Number, required: false, unique: false },
        emisor:{type:String,required:false,unique:false},
    }],
    email: { type: String, required: true, unique: true },
    razonSocial: {type: String, required: false, unique:false},
    nombreComercial: {type: String, required: false, unique:false},
    contrasena: {type: String, required: true, unique:false},
    estado: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('user', schema_persona, 'userRegistration');