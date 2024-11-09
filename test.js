const nodemailer = require('nodemailer');

function mailsender(){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cs.pr0j3ct.xii@gmail.com',
            pass: 'omtghmrwfehjgcqb'
        }
    });
    
    // Define email content
    let mailOptions = {
        from: 'cs.pr0j3ct.xii@gmail.com',
        to: 'utkarshdubey608@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email from Node.js'
    };
    
    // Send the email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

mailsender();

