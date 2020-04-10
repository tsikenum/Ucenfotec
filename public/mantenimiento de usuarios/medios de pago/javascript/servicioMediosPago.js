'use strict'

let guardarTarjeta = async (tarjetaHabiente, numTarjeta, año,mes,cvv,emisor,usuario) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrarTarjeta',
        responseType: 'json',
        data: {
            'tarjetaHabiente': tarjetaHabiente,
            'numeroTarjeta': numTarjeta,
            'año': año,
            'mes':mes,
            'cvv': cvv,
            'emisor':emisor,
            'email':usuario
            
        }
    }).then(function (res) {
        if (res.data.resultado == false) {
            switch (res.data.err.code) {
                case 11000:
                    console.log('Ya se registró esa tarjeta de crédito');
                    Swal.fire({
                        icon: 'warning',
                        title: 'Tarjeta de crédito duplicada',
                        text: 'No se pudo registrar los datos, número de tarjeta existente',
                    })
                    break;
                default:
                    Swal.fire({
                        icon: 'warning',
                        title: 'Error ',
                        text: 'No se pudo registrar los datos',
                    })
                    break;
            }
        }
        else {
            Swal.fire({
                icon: 'success',
                title: 'Exito ',
                text: 'Datos enviados de forma exitosa',
            })
        }
    })
        .catch(function (err) {
            console.log(err);
        });
}

let buscarTarjetaCorreo = async (correo) => {
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3000/api/buscarTarjetaCorreo/${correo}`,
            responseType: 'json'
        });
        return response.data.Tarjeta;
    } catch (error) {
        console.log(error);
    }
};