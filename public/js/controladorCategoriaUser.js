'use strict'

let btnGuardar = document.querySelector('#btnCategoriaGuardar');
let correo = 'cesar@gmail.com';


let agregarCategoria = async ()=>{
    let especialidad= await listarEspecialidad();
    console.log(especialidad)
    for(let i=0;i<Object.keys(especialidad).length;i++){
        var select = document.querySelector('#usuarioEspecializado');
        var option = document.createElement('option');
        select.appendChild(option).innerHTML=especialidad[i].tipoEspecialidad;
    }
}




agregarCategoria();

let enviarDatos = async ()=>{
    let categoria = document.querySelector('#usuarioEspecializado').value;
    let usuario = await buscarUsuarioCorreo(correo);
    let id= usuario._id;
    console.log('especialidad '+categoria)
    console.log('id dentro ' +id)
    agregarUsuarioEsp(categoria,id)
};

btnGuardar.addEventListener('click',enviarDatos);