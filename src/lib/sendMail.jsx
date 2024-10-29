'use server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,          // Use 465 if secure is true
  secure: false,      // Use true for port 465 (SSL) and false for port 587 (TLS)
  auth: {
    user: "muhammad.bil4l22@gmail.com",
    pass: "abppdubqmdgdfzzy",
  },
});

export async function sendMail({
  email,
  subject,
  text,
  html,
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error('Something Went Wrong', error);
    return;
  }
  const info = await transporter.sendMail({
    from: email,
    to: "balishah29@gmail.com",
    subject: subject,
    text: text,
    html: html || '',
  });
  console.log('Message Sent', info.messageId);
  return info;
}
