'use strict';


//Defino mis endpoints
const express = require('express');
const router = express.Router();
const Especialidad = require('../models/especializadad.model')
router.post('/registrarEspecialidad', (req, resp) => {

    let cuerpoPeticion = req.body;
    let nuevaEspecialidad = new Especialidad({
        tipoEspecialidad : cuerpoPeticion.tipoEspecialidad
    });
    nuevaEspecialidad.save((err, especialidadDB) => {
        if (err) {
            resp.json({
                resultado: false,
                msj: 'nose pudo registrar los datos error:',
                err
            });
        } else {
            resp.json({
                resultado: true,
                msj: 'Datos registrados exitosamente',
                especialidadDB
            });
        }


    });
});

router.get('/listarEspecialidad', (req, resp) => {
    Especialidad.find((err, especialidadDB) => {
        if (err) {
            resp.json({
                resultado: false,
                msj: 'Datos no encontrados',
                err
            })
        } else {
            resp.json({
                resultado: true,
                msj: 'Datos encontrados',
                especialidadDB
            })
        }
    });
});

module.exports = router