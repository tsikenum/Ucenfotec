'use strict';

let botonEnviar = document.querySelector('#btnEnviar');
let inputPrimerNombre = document.querySelector('#txtPrimerNombre');
let inputSegundoNombre = document.querySelector('#txtSegundoNombre')
let inputPrimerApellido = document.querySelector('#txtPrimerApellido');
let inputSegundoApellido = document.querySelector('#txtSegundoApellido');
let inputNumeroIdentificacion = document.querySelector('#numIdentificacion');
let inputRazonSocial = document.querySelector('#txtRazonSocial');
let inputNombreComercial = document.querySelector('#txtNombreComercial');
let inputTelefono = document.querySelector('#numTelefono');
let inputEmail = document.querySelector('#txtEmail');

let limpiar = () => {
    
    inputPrimerNombre.value = "";
    inputSegundoNombre.value = "";
    inputPrimerApellido.value = "";
    inputSegundoApellido.value = "";
    inputNumeroIdentificacion.value = "";
    inputRazonSocial.value = "";
    inputNombreComercial.value = "";
    inputTelefono.value = "";
    inputEmail.value = "";    
};

let obtenerDatos = () => {

    var sTipoUsuario = "Usuario Tradicional";
    var sPrimerNombre = inputPrimerNombre.value;
    var sSegundoNombre = inputSegundoNombre.value;
    var sPrimerApellido = inputPrimerApellido.value;
    var sSegundoApellido = inputSegundoApellido.value;
    var sidentSeleccionada = document.querySelector('#sltIdentificacion').value;
    var sIdentificacion = Number(inputNumeroIdentificacion.value);
    var sRazonSocial = inputRazonSocial.value;
    var sNombreComercial = inputNombreComercial.value;
    var sTelefono = Number(inputTelefono.value);
    var sEmail = inputEmail.value;
    var sContrasena = "123";
    var sgeneroSeleccionado = document.querySelector('#sltGenero').value;
    

    registrar_usuario(sTipoUsuario, sPrimerNombre, sSegundoNombre, sPrimerApellido, sSegundoApellido, sidentSeleccionada, sIdentificacion, sRazonSocial, sNombreComercial, sTelefono, sEmail, sgeneroSeleccionado, sContrasena);
};

let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#formulario [required]');
    let error = false;
    let email = txtEmail.value;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('input-error');
        }
    }

    if (email.includes('@')){
        txtEmail.classList.remove('input-error');
    } else {
        error=true;
        txtEmail.classList.add('input-error');
        alert("La dirección de email debe contener el caracter @");
    }

    if (error) {
        Swal.fire({
            'title': 'Sus datos no han podido ser enviados',
            'text': 'Por favor revise los campos requeridos',
            'icon': 'warning'
        });
        
    } else {
        obtenerDatos();
    }

};

botonEnviar.addEventListener('click', validar);

