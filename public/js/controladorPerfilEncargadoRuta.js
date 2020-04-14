'use strict'

let inputNombre = document.querySelector('#nombre');
let correo = 'cesar@gmail.com';
let inputPNombre = document.querySelector('#primerNombre')
let inputSNombre = document.querySelector('#segundoNombre');
let inputPApellido = document.querySelector('#primerApellido');
let inputSApellido = document.querySelector('#segundoApellido')
let inputID = document.querySelector('#id')
let inputGenero = document.querySelector('#genero')
let inputCorreo = document.querySelector('#email')
let tabla = document.querySelector('#telefonos tbody');
let foto = document.querySelector('#foto')



//https: //res.cloudinary.com/dnhtxd1z0/image/upload/v1586727313/gcvsgpjbrsujsue6psgc.jpg

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
    foto.src=usuario.picture;

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