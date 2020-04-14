'use strict'
let correo='cesar@gmail.com'
let tabla = document.querySelector('#tarjetas tbody');


let pintarDatos = async() => {

    let usuario = await buscarUsuarioCorreo(correo);
   
    let mostrarTabla = () => {
        for (let i = 0; i < Object.keys(usuario.tarjeta).length; i++) {
            let fila = tabla.insertRow();
            let celdaTarjetaHabiente = fila.insertCell();
            let celdaNumero = fila.insertCell();
            let celdaFecha = fila.insertCell();
            let celdaEmisor=fila.insertCell();
            celdaTarjetaHabiente.innerHTML = usuario.tarjeta[i].tarjetaHabiente
            celdaNumero.innerHTML = usuario.tarjeta[i].numTarjeta
            celdaFecha.innerHTML = usuario.tarjeta[i].year+'/'+usuario.tarjeta[i].mes
            celdaEmisor.innerHTML = usuario.tarjeta[i].emisor
        }
    }

    mostrarTabla();
}
pintarDatos();