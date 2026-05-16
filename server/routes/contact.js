const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // send email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial; padding:20px;">
          <h2>New Contact Message</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="background:#f4f4f4;padding:15px;border-radius:8px;">
            ${message}
          </div>
        </div>
      `,
    });

    // auto reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You For Contacting Me",
      html: `
        <div style="font-family: Arial; padding:20px;">
          <h2>Thanks for reaching out!</h2>

          <p>
            Hi ${name},
          </p>

          <p>
            I received your message successfully.
            I will contact you soon.
          </p>

          <br/>

          <p>
            Regards,
          </p>

          <h3>Gaurav Pareta</h3>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

module.exports = router;