const nodemailer = require('nodemailer');
const twilio = require('twilio');

// Load environment variables
require('dotenv').config();

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
};

const generateWelcomeMessage = (client) => {
    return `
      Dear ${client.chairperson_name || client.building_name},
  
      Welcome to ${client.company_name || 'Dev Elevator'}! We are delighted to have you with us.
      Your service with us begins on ${formatDate(client.from_date)} and will continue until ${formatDate(client.to_date)}.
  
      Here are the details of your subscription:
      - Building Name: ${client.building_name}
      - Service Period: ${formatDate(client.from_date)} to ${formatDate(client.to_date)}
      - Maintenance Charge: Rs.${client.maintenance_charge}
  
      We're committed to providing you with the best service experience possible. Should you have any questions or require assistance, please don't hesitate to contact us.
  
      Warm regards,  
      ${client.sender_name || 'The Team'}  
      ${client.sender_position || ''}  
      ${client.company_name || ''}  
      ${client.sender_phone || ''}  
      ${client.sender_email || ''}
    `;
  };  

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

const sendWhatsAppMessage = async (to, message) => {
  await twilioClient.messages.create({
    from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
    to: `whatsapp:${to}`,
    body: message,
  });
};

const sendSMS = async (to, message) => {
  await twilioClient.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
    body: message,
  });
};

const sendWelcomeMessage = async (client) => {
  const message = generateWelcomeMessage(client);
//   const message = `Welcome ${client.building_name}! Your client profile has been successfully created/updated.`;
// console.log("CLient Data", client)
  // Email
  if (client.email) {
    await sendEmail(client.email, `Welcome to ${client.company_name || 'Dev Elevator'}`, message);
  }

//   WhatsApp
//   if (client.phonenumber) {
//     const whatsappMessage = `
//       Welcome to ${client.company_name || 'Our Service'}!
//       Dear ${client.chairperson_name || client.building_name},
//       Your service starts on ${client.from_date} and ends on ${client.to_date}.
//       Thank you for choosing us!
//     `;
//     await sendWhatsAppMessage(client.phonenumber, whatsappMessage);
//   }

  // SMS
  if (client.phonenumber) {
    const smsMessage = `Welcome to ${client.company_name || 'Dev Elevator'}! Your mantainace & service starts on ${formatDate(client.from_date)} and ends on ${formatDate(client.to_date)}.`;
    await sendSMS(client.phonenumber, smsMessage);
  }
};

module.exports = {
  sendWelcomeMessage,
};
