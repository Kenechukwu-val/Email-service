function welcomeTemplate({ name, verifyLink }) {
    return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
      <h1>Welcome, ${name}!</h1>
      <p>Thanks for signing up. Please verify your email:</p>
      <a href="${verifyLink}" style="display: inline-block; padding: 10px 20px; background: #4f46e5; color: white; text-decoration: none; border-radius: 5px;">
        Verify Email
      </a>
      <p style="margin-top: 30px; color: #666;">If you didn't create an account, ignore this email.</p>
    </body>
    </html>
  `;
}

module.exports = { welcomeTemplate };