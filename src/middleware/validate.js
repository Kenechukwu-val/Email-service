function validateEmail(req, res, next) {
    const { to, subject } = req.body;
    
    const errors = [];
    if (!to) errors.push('Recipient email (to) is required.');
    if (!subject) errors.push('Email subject is required.');

    if (errors.length > 0) {
        return res.status(400).json({ error: 'Validation failed', details: errors });
    }

    next();
}

module.exports = { validateEmail };