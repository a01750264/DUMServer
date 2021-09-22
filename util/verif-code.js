const nodemailer = require('nodemailer');

function email(email, code) {
    const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: process.env.EMAIL_SUBJECT,
        html: `<h1>Esto es un título</h1>\n\n<p>Y esto es un párrafo</p>\n\n<h3>Tu código de verificación es: ${code}</h3>`
    };

    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log(err);
        } else {
            console.log('Email enviado');
        }
    })
}

module.exports = email;

