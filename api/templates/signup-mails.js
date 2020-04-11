'use strict'
const nodemailer = require('nodemailer');
require('dotenv').config();


this.enviarEmail = (pNombre,pApellido,password,correo) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    })

    let mail_options = {
        from: 'bookmarkshpe@gmail.com',
        to: `${correo}`,
        subject: `Bienvenido ${pNombre}` ,
        html: `
        <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
        <tr height="200px">  
            <td bgcolor="" width="600px">
                <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                <p  style="color: #fff; text-align:center">
                    <span style="color: #e84393">${pNombre} ${pApellido}</span> 
                    a la aplicación
                </p>
            </td>
        </tr>
        <tr bgcolor="#fff">
            <td style="text-align:center">
            <p style="color: #000">¡Su codigo de acceso es: ${password}</p>
            <p style="color: #000">¡Utiliceselo junto a su correo para iniciar sesion!</p>
                <p style="color: #000">¡Un mundo de servicios a su disposición!</p>
            </td>
        </tr>
        </table>
    
    `
    };

    transporter.sendMail(mail_options,(error,info)=>{
        if(error){
            console.log('surgio un error correo no enviado')
        }
        else{
            console.log('correo enviado exitosamente '+info)
        }
    })
}
module.exports = this;