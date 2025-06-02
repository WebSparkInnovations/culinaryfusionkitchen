'use server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,          
  secure: false,      
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASSWORD,      
  },
});

export async function sendMail({
  email,
  name,
  subject,
  text,
  html,
}) {
  try {
    await transporter.verify();
    console.log('SMTP Configuration Verified');
  } catch (error) {
    console.error('SMTP Verification Error:', error);
    return { success: false, error: 'SMTP configuration failed: ' + error.message };
  }

  try {
    const fromAddress = `"${name || 'Booking Request'}" <cfkdummy@gmail.com>`;

    const info = await transporter.sendMail({
      from: fromAddress,
      to: "cfkdummy@gmail.com",
      subject,
      text,
      html: html || '',
    });

    console.log('Message Sent Successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error Sending Email:', error);
    return { success: false, error: error.message || 'Failed to send email' };
  }
}
