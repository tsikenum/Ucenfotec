'use strict';


const mongoose = require('mongoose');

const schema_especialidad = new mongoose.Schema({
    tipoEspecialidad: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('especialidad', schema_especialidad, 'tiposEspecialidad');