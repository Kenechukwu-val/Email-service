const transporter = require('../config/email');
const { welcomeTemplate } = require('../templates/welcome');

const templates = {
    welcome: welcomeTemplate,
}

async function sendEmail({ to, subject, template, data, text }) {
    const html = templates[template]?.(data);
    
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