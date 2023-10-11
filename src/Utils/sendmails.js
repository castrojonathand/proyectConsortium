const nodemailer = require('nodemailer');

// Configura el transporte SMTP para Gmail
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'castrojonathand@gmail.com', // Tu dirección de correo electrónico de Gmail
        pass: '3485747321Qr', // Tu contraseña de Gmail
    },
});

// Lista de destinatarios (puedes agregar más direcciones de correo)
const recipients = [
    'castrojonathand1989@example.com',
    'tadeogavensky@gmail.com', 
    'joel.buslemen@gmail.com'
];

// Opciones del correo
const mailOptions = {
    from: 'castrojonathand@gmail.com', // Remitente
    subject: 'Prueba nodemailer',
    text: 'Hola esto es un prueba', // Cuerpo del correo
};

// Enviar correos masivos
async function sendEmails() {
    try {
        for (const recipient of recipients) {
        mailOptions.to = recipient;
        await transporter.sendMail(mailOptions);
        console.log(`Correo enviado a: ${recipient}`);
        }
        console.log('Todos los correos enviados correctamente.');
    } catch (error) {
        console.error('Error al enviar los correos:', error);
    }
}

// Llama a la función para enviar correos masivos
sendEmails();
