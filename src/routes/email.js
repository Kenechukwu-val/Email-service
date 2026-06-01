const { Router } = require('express');
const { sendEmail } = require('../services/email');
const { validateEmail } = require('../middleware/validate');

const router = Router();

router.post('/send', validateEmail, async (req, res) => {
    try {
        const { to, subject, html, text } = req.body;
        const info = await sendEmail({ to, subject, html, text });
        res.json({ success: true, messageId: info.messageId });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

module.exports = router;