'use strict'

let nombre = document.querySelector('#nombre');
let correo= 'wagnerrs@outlook.com';
let usuario;
let primerNombre = document.querySelector('#primerNombre')
let segundoNombre = document.querySelector('#segundoNombre');
let primerApellido = document.querySelector('#primerApellido');
let segundoApellido = document.querySelector('#segundoApellido')
let id = document.querySelector('#id')
let genero = document.querySelector('#genero')
let Inputcorreo = document.querySelector('#correo')
let telefono = document.querySelector('#telefono')

let pintarDatos = async()=>{
    
    usuario=await buscarUsuarioCorreo(correo);
    /*
    let valor = usuario
    console.log(usuario.primerNombre);
    nombre.innerHTML=usuario.primerNombre
    primerNombre.value=usuario.primerNombre
    primerNombre.disabled=true;*/
    primerNombre.value=usuario.primerNombre
    primerNombre.disabled=true;
    segundoNombre.value=usuario.segundoNombre
    segundoNombre.disabled=true
    primerApellido.value=usuario.primerApellido
    primerApellido.disabled=true
    segundoApellido.value=usuario.segundoApellido
    segundoApellido.disabled=true
    id.value=usuario.idNumero
    id.disabled=true
    genero.selectedIndex=1
    genero.disabled=true
    correo.value= usuario.correo
    correo.disabled=true
    telefono.value=usuario.telefono
    telefono.disabled=true
    
}

pintarDatos();

