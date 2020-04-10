'use strict';

let registrar_usuario = async (psTipoUsuario, psPrimerNombre, psSegundoNombre, psPrimerApellido, psSegundoApellido, psidentSeleccionada, psIdentificacion, psRazonSocial, psNombreComercial, psTelefono, psEmail, psgeneroSeleccionado, pscontrasena)=>{

    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrarUsuario',
        responseType: 'json',
        data: {
            'tipo_persona': psTipoUsuario,
            'primerNombre': psPrimerNombre,
            'segundoNombre': psSegundoNombre,
            'primerApellido': psPrimerApellido,
            'segundoApellido': psSegundoApellido,
            'tipoID': psidentSeleccionada,
            'idNumero': psIdentificacion,
            'razonSocial': psRazonSocial,
            'nombreComercial': psNombreComercial,
            'telefono': psTelefono,
            'email': psEmail,
            'genero': psgeneroSeleccionado,
            'contrasena': pscontrasena
        }


    }).then((res)=>{
        if(res.data.resultado == false){
            switch(res.data.err.code){
                case 11000:
                    Swal.fire({
                        'title': 'No se pudo registrar el usuario',
                        'text': 'Ya existe un usuario registrado con esa identificación',
                        'icon': 'error'
                    });
                break
            } 
                } else {
                    Swal.fire({
                    'title': 'Proceso realizado con éxito',
                    'text': 'Sus datos han sido enviados',
                    'icon': 'success'
                }).then(() => {
                    limpiar();
                });
        } 
    }).catch((err)=>{
        console.log(err);
    });

};