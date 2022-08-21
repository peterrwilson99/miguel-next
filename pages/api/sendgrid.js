import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    console.log("req",req)
  try {
    await sendgrid.send({
      to: process.env.CONTACT_FORM_RECIPIENT, // Your email where you'll receive emails
      from: process.env.CONTACT_FORM_SENDER, // your website email address here
      subject: `Portfolio Website Email - ${req.body.fullname}: ${req.body.subject}`,
      html: `<div>${req.body.fullname} emailed you through your portfolio contact me page. <br/><br/>Name: ${req.body.fullname}<br/>Email: ${req.body.email}<br/>Subject: ${req.body.subject}<br/>Message: <br/>${req.body.message}</div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;