'use strict'

let inputNombre = document.querySelector('#nombre');
let correo = 'way405@gmail.com';
let inputPNombre = document.querySelector('#primerNombre')
let inputSNombre = document.querySelector('#segundoNombre');
let inputPApellido = document.querySelector('#primerApellido');
let inputSApellido = document.querySelector('#segundoApellido')
let inputID = document.querySelector('#id')
let inputGenero = document.querySelector('#genero')
let inputCorreo = document.querySelector('#email')
let tabla = document.querySelector('#telefonos tbody');

let pintarDatos = async() => {

    let usuario = await buscarUsuarioCorreo(correo);
    inputPNombre.value = usuario.primerNombre
    inputPNombre.disabled = true;
    inputSNombre.value = usuario.segundoNombre
    inputSNombre.disabled = true
    inputPApellido.value = usuario.primerApellido
    inputPApellido.disabled = true
    inputSApellido.value = usuario.segundoApellido
    inputSApellido.disabled = true
    inputID.value = usuario.idNumero;
    inputID.disabled = true
    inputGenero.value = usuario.genero
    inputGenero.disabled = true
    inputCorreo.value = usuario.email;
    inputCorreo.disabled = true;

    let mostrarTabla = () => {
        for (let i = 0; i < Object.keys(usuario.telefono).length; i++) {
            let fila = tabla.insertRow();
            let celdaNumero = fila.insertCell();
            let celdaDescripcion = fila.insertCell();
            celdaNumero.innerHTML = usuario.telefono[i].numero
            celdaDescripcion.innerHTML = usuario.telefono[i].descripcion
        }
    }

    mostrarTabla();
}

pintarDatos();