const transporter = require('../config/email');

async function sendEmail({ to, subject, html, text }) {
    const mailOptions = {
        from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
        to,
        subject,
        ...(html && { html }),
        ...(text && { text }),
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
}

module.exports = { sendEmail };