import { createTransport } from 'nodemailer';
import smtpTransport from'nodemailer-smtp-transport'

const transporter = createTransport(
    smtpTransport({
    service: 'smtp.gmail.com',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "castrojonathand@gmail.com", // Tu dirección de correo electrónico de Gmail
        pass: 'kguf dcun smmp yuhq' // Tu contraseña de Gmail
    },
}));


transporter.verify(function (error, success) {
    if (error) {
        console.log("Verify error",error);
    } else {
        console.log("Server is ready to take our messages",success);
    }
});
module.exports = {transporter};


// const mailOptions = {
//     from: 'castrojonathand@gmail.com',
//     to: 'castrojonathand1989@gmail.com',
//     subject: 'Prueba de envio CV adjunto',
//     text: 'Hola Jonathan, este es un mensaje de prueba con adjunto enviado desde el servidor de nextjs',
//     attachments: [
//         {
//             filename: 'cv.pdf',
//             path: 'C:/Users/jony/Desktop/Kaba/consortium/src/Assets/cv.pdf',
//             contentType: 'application/pdf'
//         },
//     ]
// };