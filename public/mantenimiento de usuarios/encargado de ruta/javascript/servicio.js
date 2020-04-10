'use strict';

let registrarEncargadoRuta = async (primerNombre, segundoNombre, primerApellido, segundoApellido, tipoID, genero, idNumero, email, telefono, contrasena) => {

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
            'telefono': telefono,
            'email': email,
            'contrasena': contrasena

        }
    }).then(function (res) {
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
};

let buscarUsuarioCorreo = async (correo) => {
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