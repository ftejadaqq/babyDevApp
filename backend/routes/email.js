module.exports = async (email, password, templateName) => {
  const htmlForgotPasswordTemplate = require("../templates/htmlForgotPassword");
  const textForgotPasswordTemplate = require("../templates/textForgotPassword");
  const htmlThanksForSigningUpTemplate = require("../templates/htmlThanksForSigningUp");
  const textThanksForSigningUpTemplate = require("../templates/textThanksForSigningUp");

  const emailTemplates = {
    htmlForgotPasswordTemplate: htmlForgotPasswordTemplate,
    textForgotPasswordTemplate: textForgotPasswordTemplate,
    htmlThanksForSigningUpTemplate: htmlThanksForSigningUpTemplate,
    textThanksForSigningUpTemplate: textThanksForSigningUpTemplate,
    welcomeTemplate: true,
  };
  // what email and what password do you want them to receive

  console.log(password);
  // -------------------------
  // Nodemailer code from docs
  // -------------------------

  //("use strict");
  const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.montessoribymonth.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: //private, // generated ethereal user
      pass: //private, // generated ethereal password
    },
  });

  let html = "";
  let text = "";
  let subject = "";
  if (templateName === "forgotPasswordTemplate") {
    html = emailTemplates.htmlForgotPasswordTemplate(password);
    text = emailTemplates.textForgotPasswordTemplate(password);
    subject = "Your new password";
  }
  if (templateName === "thanksForSigningUpTemplate") {
    html = emailTemplates.htmlThanksForSigningUpTemplate();
    text = emailTemplates.textThanksForSigningUpTemplate();
    subject = "Thanks for signing up";
  }
  // put other if templates code here

  // send mail with defined transport object
  let info = await transporter.sendMail({
    // await as you need to wait for the answer to console log it
    from: '"Faith Tejada" <faith-tejada@montessoribymonth.com>', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line - two options see above
    text: text, // plain text body // put in password!!
    html: html, // html body // put in password!!
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
