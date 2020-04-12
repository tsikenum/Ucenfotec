'use strict'
let btnFotografia = document.querySelector('#btnFoto');
let imagen = document.querySelector('#foto');
let widget_Cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dnhtxd1z0',
    uploadPreset: 'cenfotec'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Foto guardada exitosamente', result.info)
        imagen.src = result.info.secure_url;
    }
})


btnFotografia.addEventListener('click', () => {
    widget_Cloudinary.open();
}, false);