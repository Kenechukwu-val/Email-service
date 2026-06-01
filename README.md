# Email Service

A Node.js email sending service built with Express and Nodemailer.

## Features

- Send emails via REST API (`POST /api/send`)
- HTML and plain text email support
- Template-based emails (e.g., Welcome template)
- Request validation
- Web interface at `http://localhost:3000`
- Ethereal email support for development/testing

## Quick Start

```bash
npm install
cp .env.example .env   # Configure your SMTP credentials
npm start              # Starts on port 3000
```

## API

### `POST /api/send`

**With raw HTML/text:**
```json
{
  "to": "user@example.com",
  "subject": "Hello",
  "html": "<h1>Welcome</h1>",
  "text": "Welcome"
}
```

**With a template:**
```json
{
  "to": "user@example.com",
  "subject": "Welcome!",
  "template": "welcome",
  "data": {
    "name": "John",
    "verifyLink": "https://example.com/verify?token=abc"
  }
}
```

## Environment Variables

| Variable     | Description                  |
|-------------|------------------------------|
| `SMTP_HOST` | SMTP server hostname         |
| `SMTP_PORT` | SMTP server port (587/465)   |
| `SMTP_USER` | SMTP username                |
| `SMTP_PASS` | SMTP password                |
| `FROM_NAME` | Sender display name          |
| `FROM_EMAIL`| Sender email address         |

### Using Ethereal (development)

Get free test credentials at [ethereal.email](https://ethereal.email) and use them in your `.env`. Sent emails can be viewed in the Ethereal web interface.

## Project Structure

```
src/
├── index.js            # Entry point
├── app.js              # Express setup
├── config/email.js     # Nodemailer transporter
├── services/email.js   # Email sending logic
├── routes/email.js     # API routes
├── middleware/validate.js  # Request validation
├── templates/          # Email templates
└── public/             # Web interface
```

## Adding Templates

1. Create a file in `src/templates/` (e.g., `reset-password.js`)
2. Export a function that accepts `data` and returns an HTML string
3. Register it in `src/services/email.js`:
```js
const { resetPasswordTemplate } = require('../templates/reset-password');
const templates = {
  welcome: welcomeTemplate,
  'reset-password': resetPasswordTemplate,
};
```

## Scripts

| Command       | Description                    |
|---------------|--------------------------------|
| `npm start`   | Start the server               |
| `npm run dev` | Start with auto-restart        |
