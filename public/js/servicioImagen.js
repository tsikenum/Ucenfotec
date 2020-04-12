'use strict'
let fotoServicio;
let errorServicioImg = true;
let widget_Cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dnhtxd1z0',
    uploadPreset: 'cenfotec'
}, (err, result) => {

    if (!err && result && result.event === 'success') {
        fotoServicio = result.info.secure_url;
        errorServicioImg = false;
    }
})