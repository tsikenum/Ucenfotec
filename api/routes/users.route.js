'use strict';


//Defino mis endpoints
const express = require('express');
const router = express.Router();
const Persona = require('../models/users.model');


router.post('/registrarUsuario', (req, resp) => {

    let cuerpoPeticion = req.body;
    let nuevoUsuario = new Persona({
        tipo_persona: cuerpoPeticion.tipo_persona,
        primerNombre: cuerpoPeticion.primerNombre,
        segundoNombre: cuerpoPeticion.segundoNombre,
        primerApellido: cuerpoPeticion.primerApellido,
        segundoApellido: cuerpoPeticion.segundoApellido,
        tipoID: cuerpoPeticion.tipoID,
        genero: cuerpoPeticion.genero,
        idNumero: cuerpoPeticion.idNumero,
        telefono: cuerpoPeticion.telefono,
        email: cuerpoPeticion.email,
        razonSocial: cuerpoPeticion.razonSocial,
        nombreComercial: cuerpoPeticion.nombreComercial,
        contrasena: cuerpoPeticion.contrasena,
        estado: 'activo'
    });
    nuevoUsuario.save((err, userRegistration) => {
        if (err) {
            resp.json({
                resultado: false,
                msj: 'nose pudo registrar los datos error:',
                err
            });
        }
        else {
            resp.json({
                resultado: true,
                msj: 'Datos registrados exitosamente',
                userRegistration
            });
        }


    });
});

router.get('/listarUsuario', (req, resp) => {
    Persona.find((err, registro) => {
        if (err) {
            resp.json({
                resultado: false,
                msj: 'Datos no encontrados',
                err
            })
        }
        else {
            resp.json({
                resultado: true,
                msj: 'Datos encontrados',
                registro
            })
        }
    });
});

router.get('/buscarUsarioCorreo/:correoPeticion', function (req, res) {
    let correo = req.params.correoPeticion;
    Persona.findOne({ email: correo }, function (error, userDB){
        if (error) {
            return res.json({
                sucess: false,
                msj: 'No se econtró ningún cliente con ese correo',
                error
            });
        }
        else{
            return res.json({
                sucess:true,
                Persona:userDB
            })
        }
    })
});


router.post('/agregarTelefono', (req, res) => {
    if (req.body._id) {
        Persona.update({ _id: req.body._id }, {
                $push: {
                    'telefono': {
                        numero: req.body.numero,
                        descripcion: req.body.descripcion
                       
                    }
                }
            },
           (error) => {
                if (error) {
                    return res.json({
                        success: false,
                        msj: 'No se pudo registrar su telefono',
                        err
                    });
                } else {
                    return res.json({
                        success: true,
                        msj: 'Se agregó correctamente su telefono'
                    });
                }
            }
        )
    } else {
        return res.json({
            success: false,
            msj: 'No se pudo agregar su telefono, por favor verifique que el _id sea correcto'
        });
    }
});


module.exports = router;