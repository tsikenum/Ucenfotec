'use strict'
let listarEspecialidad = async() => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listarEspecialidad',
            responseType: 'json'
        });
        return response.data.especialidadDB
    } catch (error) {
        console.log(error);
    }
}