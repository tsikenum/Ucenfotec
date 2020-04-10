'use strict'



let buscarUsuarioCorreo = async (correo) => {
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3000/api/buscarUsarioCorreo/${correo}`,
            responseType: 'json'
        });
        return response.data.Persona;
    } catch (error) {
        console.log(error);
    }
};