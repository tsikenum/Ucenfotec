'use strict';

const express = require('express');
const router = express.Router();
const Tarjeta = require('../models/mediosPago.model');
/*

router.post('/registrarTarjeta',(req,resp)=>{
    let cuerpoPeticion = req.body;
    let nuevaTarjeta = new Tarjeta({
        tarjetaHabiente : cuerpoPeticion.tarjetaHabiente,
        numTarjeta : cuerpoPeticion.numeroTarjeta,
        año:cuerpoPeticion.año,
        mes: cuerpoPeticion.mes,
        cvv:cuerpoPeticion.cvv,
        fechaVencimiento : cuerpoPeticion.fechaVencimiento,
        emisor:cuerpoPeticion.emisor,
        usuario:cuerpoPeticion.email,
        estado:'activo'
    });

    nuevaTarjeta.save((err,tarjetaGuardada)=>{
        if(err){
            resp.json({
                resultado:false,
                msj: 'nose pudo registrar los datos error:',
                err
            });
        }
        else{
            resp.json({
                resultado:true,
                msj: 'Datos guardados exitosamente',
                tarjetaGuardada
            });
        }
    })


});*/

router.post('/agregar-tarjeta', (req, res) => {
    if (req.body._id) {
        Cliente.update({ _id: req.body._id }, {
                $push: {
                    'tarjetas': {
                        tarjetaHabiente: req.body.tarjetaHabiente,
                        numTarjeta: req.body.numTarjeta,
                        año: req.body.año,
                        mes: req.body.mes,
                        cvv: req.body.cvv,
                        emisor: req.body.emisor,
                        estado: req.body.estado
                    }
                }
            },
           (error) => {
                if (error) {
                    return res.json({
                        success: false,
                        msj: 'No se pudo registrar su tarjeta',
                        err
                    });
                } else {
                    return res.json({
                        success: true,
                        msj: 'Se agregó correctamente su tarjeta'
                    });
                }
            }
        )
    } else {
        return res.json({
            success: false,
            msj: 'No se pudo agregar su tarjeta, por favor verifique que el _id sea correcto'
        });
    }
});


router.get('/buscarTarjetaCorreo/:correoPeticion', function (req, res) {
    let correo = req.params.correoPeticion;
    Tarjeta.findOne({ usuario: correo }, function (error, tarjetaDB){
        if (error) {
            return res.json({
                sucess: false,
                msj: 'No se econtró ninguna tarjeta de credito asociada al cliente',
                error
            });
        }
        else{
            return res.json({
                sucess:true,
                Tarjeta:tarjetaDB
            })
        }
    })
})

module.exports = router;