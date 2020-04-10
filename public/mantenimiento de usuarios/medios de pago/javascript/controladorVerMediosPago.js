'use strict'




let insertData = async()=>{
    let ccdata= await buscarTarjetaCorreo('way405@gmail.com');
    let tbody = document.querySelector('#tarjetas tbody');
    let fila= tbody.insertRow();
    console.log('arreglo ', ccdata)
}

insertData();