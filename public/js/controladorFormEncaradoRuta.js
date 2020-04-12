'use strict';
let btnEnviar = document.querySelector('#btnEncargadoRutas');
let campos = document.querySelectorAll('#formEncargadoRutas [required]');
let formulario = document.querySelectorAll('#formEncargadoRutas');
let identificacion = document.querySelectorAll('#tipoID');
let primerNombre = document.querySelector('#primerNombre');
let segundoNombre = document.querySelector('#segundoNombre');
let primerApellido = document.querySelector('#primerApellido');
let segundoApellido = document.querySelector('#segundoApellido');
let numeroIdentificacion = document.querySelector('#numeroIdentificacion');
let email = document.querySelector('#email');
let telefono = document.querySelector('#telefono');
const inputFoto = document.querySelector('#foto');

let validarCampos = () => {
    let error = false;
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value == '') {
            error = true;
            campos[i].classList.add('error');
            Swal.fire({
                icon: 'warning',
                title: 'Formulario incompleto',
                text: 'Por favor complete los campos faltantes para continuar'
            })
        } else {
            campos[i].classList.remove('error');
        }
    }
    return error;
}






//validar cantidad de digitos identificacion

let validarCedDigitos = () => {
    let nacional = document.querySelector('#nacional');
    let residente = document.querySelector('#residente');
    let numID = document.querySelector('#numeroIdentificacion').value;
    let lblID = document.querySelector('#lblNumeroID')
    let error = false;

    if (nacional.selected == true) {
        if (numID.length < 9 || numID.length > 9) {
            console.log('entro')
            document.querySelector('#numeroIdentificacion').classList.add('error');
            error = true;
            Swal.fire({
                icon: 'warning',
                title: 'Numero de identifacion incorrecto',
                text: 'El numero de cedula debe ser igual a 9 digitos sin guiones y ceros al inicio',
            })
        } else {
            document.querySelector('#numeroIdentificacion').classList.remove('error');
        }
    } else if (residente.selected == true) {
        if (numID.length < 11 || numID.length > 12) {
            error = true;
            document.querySelector('#numeroIdentificacion').classList.add('error');
            Swal.fire({
                icon: 'warning',
                title: 'Numero de identifacion incorrecto',
                text: 'La cédula de residencia debe contener entre 11 o 12 digitos',
            })
        } else {
            document.querySelector('#numeroIdentificacion').classList.remove('error');
        }
    }

    return error;
}




let crearContrasena = () => {
    let aleatorio = [];
    aleatorio[0] = 'A'
    aleatorio[1] = 'B'
    aleatorio[2] = 'C'
    aleatorio[3] = 'D'
    aleatorio[4] = 'E'
    aleatorio[5] = 'F'
    aleatorio[6] = 'G'
    aleatorio[7] = 'H'
    aleatorio[8] = 'I'
    aleatorio[9] = 'J'
    aleatorio[10] = 'K'
    aleatorio[11] = 'L'
    aleatorio[12] = 'M'
    aleatorio[13] = 'N'
    aleatorio[14] = 'O'
    aleatorio[15] = 'P'
    aleatorio[16] = 'Q'
    aleatorio[17] = 'R'
    aleatorio[18] = 'S'
    aleatorio[19] = 'T'
    aleatorio[20] = 'U'
    aleatorio[21] = 'V'
    aleatorio[22] = 'W'
    aleatorio[23] = 'X'
    aleatorio[24] = 'Y'
    aleatorio[25] = 'Z'
    aleatorio[26] = '0'
    aleatorio[27] = '1'
    aleatorio[28] = '2'
    aleatorio[29] = '3'
    aleatorio[30] = '4'
    aleatorio[31] = '5'
    aleatorio[32] = '6'
    aleatorio[33] = '7'
    aleatorio[34] = '8'
    aleatorio[35] = '9'
    let contrasena = '';
    for (let i = 0; i <= 5; i++) {
        let random = Math.floor(Math.random() * 34);
        contrasena = aleatorio[random] + contrasena;
    }
    return contrasena;
}

let validarEmail = () => {
        let error = false;
        let correo = email.value;
        let contador = 0;
        for (let i = 0; i < correo.length; i++) {
            if (correo.charAt(i) == '@') {
                contador++;
            }
        }

        if (contador == 0) {
            email.classList.add('error');
            error = true;
            Swal.fire({
                icon: 'warning',
                title: 'Correo no valido',
                text: 'Ingrese una dirección de correo válida',
            })
        } else {
            email.classList.remove('error');
        }
        return error;
    }
    //registrarEncargadoRuta('wagner','jesus','Ramirez','Serrano','nacional','masculino','00001','way','123abc')

let enviarDatos = () => {

    let pNombre = primerNombre.value;
    let sNombre = segundoNombre.value;
    let pApellido = primerApellido.value;
    let sApellido = segundoApellido.value;
    let tipoID = document.querySelector('#tipoID').value;
    let genero = document.querySelector('#tipoGenero').value;
    let numberID = numeroIdentificacion.value;
    let correo = email.value;
    let phone = telefono.value;
    let descripcion = document.querySelector('#descripcion').value
    let contrasena = crearContrasena();
    let picture = inputFoto.src;

    //primerNombre,segundoNombre,primerApellido,segundoApellido,tipoID,genero,idNumero,email,telefono,contrasena

    if (validarCampos() == false && validarEmail() == false && validarCedDigitos() == false) {

        registrarEncargadoRuta(pNombre, sNombre, pApellido, sApellido, tipoID, genero, numberID, correo, phone, descripcion, contrasena, picture);
    }

}

btnEnviar.addEventListener('click', enviarDatos);