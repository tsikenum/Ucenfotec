'use strict'

let formularios = document.querySelectorAll('#tarjetaCredito [required]');
let btnGuardar = document.querySelector('#btnGuardar');



let validarFecha = () => {
    let error = false;
    let year = new Date();
    let mes = new Date();
    let inputYear = document.querySelector('#year').value;
    let inputMes = document.querySelector('#mes').value;
    let monthValidated = parseInt(inputMes, 10);
    monthValidated = monthValidated - 1;
    let yearValidated = parseInt(inputYear, 10);
    yearValidated = yearValidated + 2000;
    if (yearValidated < year.getFullYear()) {
        let error = true;
        Swal.fire({
            icon: 'warning',
            title: 'Formulario incompleto',
            text: 'Año de expiración no puede menor al año actual',
        })
    }
    if (monthValidated <= mes.getMonth() || monthValidated > 12) {
        error = true;
        Swal.fire({
            icon: 'warning',
            title: 'Formulario incompleto',
            text: 'El mes de expiración no puede ser igual o menor a la fecha actual o su rango debe estar entre 1 y 12',
        })
    }
    return error;

}
let validarTarjeta = () => {
    let error = false;
    let camposTarjeta = document.querySelector('#numeroTarjeta');
    let visa = document.querySelector('#visa');
    let mastercard = document.querySelector('#mastercard');
    let amex = document.querySelector('#amex');
    if (visa.selected == true || mastercard.selected == true) {
        if (camposTarjeta.value.length != 16) {
            error = true;
            Swal.fire({
                icon: 'warning',
                title: 'Formulario incompleto',
                text: 'Su tarjeta debe contener 16 digitos',
            })
            camposTarjeta.classList.add('error');

        }
        else if (amex.selected == true) {
            if (camposTarjeta.value.length != 15) {
                error = true;
                Swal.fire({
                    icon: 'warning',
                    title: 'Formulario incompleto',
                    text: 'Su tarjeta debe contener 15 digitos',
                })
                camposTarjeta.classList.add('error');
            }
        }
        else {
            camposTarjeta.classList.remove('#error');
        }
    }



    return error;
}


let validarCampos = () => {
    let error = false;
    for (let i = 0; i < formularios.length; i++) {
        if (formularios[i].value == '') {
            error = true;
            formularios[i].classList.add('error');
            Swal.fire({
                icon: 'warning',
                title: 'Formulario incompleto',
                text: 'Por favor complete todos los campos antes de proseguir',
            })
        }
        else {
            formularios[i].classList.remove('error');
        }
    }
    return error;
}



let enviarDatos = async () => {
    let id = await buscarUsuarioCorreo('cesar@gmail.com');
    let tarjetaHabiente = document.querySelector('#tarjetaHabiente').value;
    let numeroTarjeta = document.querySelector('#numeroTarjeta').value;
    let year = document.querySelector('#year').value;
    let mes = document.querySelector('#mes').value;
    let cvv = document.querySelector('#cvv').value;
    let emisor = document.querySelector('#emisor').value;
    let errorTarjeta = validarTarjeta();
    let errorFecha = validarFecha();
    let errorCampos = validarCampos();
    
    
    

    //id,tarjetaHabiente,numTarjeta,year,mes,cvv,emisor
    if (errorCampos == false && errorFecha == false && errorTarjeta == false) {
        updateTarjeta(id, tarjetaHabiente, numeroTarjeta, year, mes, cvv, emisor)
    }
}

btnGuardar.addEventListener('click', enviarDatos);

