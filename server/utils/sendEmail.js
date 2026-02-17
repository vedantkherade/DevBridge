import nodemailer from "nodemailer";

const sendEmail = async(options) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",  // your email service
        auth: {
            user: process.env.EMAIL_USERNAME,   // your email address
            pass: process.env.EMAIL_PASSWORD,  // your app password
        } 
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: options.email,
        subject: options.subject,
        html: options.message
    };

    await transporter.sendMail(mailOptions);
}

export default sendEmail