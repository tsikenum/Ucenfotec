'use strict';

let registrarEncargadoRuta = async(primerNombre, segundoNombre, primerApellido, segundoApellido, tipoID, genero, idNumero, email, telefono, descripcion, contrasena, picture) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrarUsuario',
            responseType: 'json',
            data: {
                'tipo_persona': 'Encargado de ruta',
                'primerNombre': primerNombre,
                'segundoNombre': segundoNombre,
                'primerApellido': primerApellido,
                'segundoApellido': segundoApellido,
                'tipoID': tipoID,
                'genero': genero,
                'idNumero': idNumero,
                'email': email,
                'contrasena': contrasena,
                'picture': picture

            }
        }).then(function(res) {
            if (res.data.resultado == false) {
                switch (res.data.err.code) {
                    case 11000:
                        console.log('Ya se registró una persona con esa identificación');
                        Swal.fire({
                            icon: 'warning',
                            title: 'Error Identificación duplicada',
                            text: 'No se pudo registrar los datos, número de identificación o correo ya existente',
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
            } else {
                let id = res.data.userRegistration._id
                console.log(id)
                updateTelefono(telefono, descripcion, id);

                Swal.fire({
                    icon: 'success',
                    title: 'Exito ',
                    text: 'Datos enviados de forma exitosa',
                })
                fotoServicio = '';
            }
        })
        .catch(function(err) {
            console.log(err);
        });
};

let buscarUsuarioCorreo = async(correo) => {
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3000/api/buscarUsarioCorreo/${correo}`,
            responseType: 'json'
        });
        return response.data.Persona;
    } catch (error) {
        console.log(error);
    }
};

let updateTelefono = async(numero, descripcion, _id) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/agregarTelefono',
            responseType: 'json',
            data: {
                '_id': _id,
                'numero': numero,
                'descripcion': descripcion
            }
        }).then(function(res) {
            if (res.data.resultado == false) {
                switch (res.data.err.code) {
                    case 11000:
                        console.log('Ya se registró una persona con esa identificación');
                        Swal.fire({
                            icon: 'warning',
                            title: 'Error Identificación duplicada',
                            text: 'No se pudo registrar los datos, número de identificación o correo ya existente',
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
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Exito ',
                    text: 'Datos enviados de forma exitosa',
                })
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}
let updateTarjeta = async(_id, tarjetaHabiente, numTarjeta, year, mes, cvv, emisor) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/agregarTarjeta',
            responseType: 'json',
            data: {
                '_id': _id,
                'tarjetaHabiente': tarjetaHabiente,
                'numTarjeta': numTarjeta,
                'year': year,
                'mes': mes,
                'cvv': cvv,
                'emisor': emisor
            }
        }).then(function(res) {
            if (res.data.resultado == false) {
                switch (res.data.err.code) {
                    case 11000:
                        console.log('Ya se registró una tarjeta con esa numeración');
                        Swal.fire({
                            icon: 'warning',
                            title: 'Error tarjeta duplicada',
                            text: 'No se pudo registrar los datos, número de tarjeta ya existente',
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
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Exito ',
                    text: 'Datos enviados de forma exitosa',
                })
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}

let listarUsuario = async() => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listarUsuario',
            responseType: 'json'
        });
        return response.data.registro
    } catch (error) {
        console.log(error);
    }
}

let buscarTarjetaCorreo = async(correo) => {
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