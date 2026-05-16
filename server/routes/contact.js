const express = require("express");
const router = express.Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Send mail to you
    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "paretagaurav2005@gmail.com",

      subject: `Portfolio Message from ${name}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <div>
          ${message}
        </div>
      `,
    });

    // Auto reply
    await resend.emails.send({

      from: "onboarding@resend.dev",

      to: email,

      subject: "Thanks for contacting me",

      html: `
        <h2>Thank You!</h2>

        <p>
          Hi ${name},
        </p>

        <p>
          I received your message successfully.
        </p>

        <p>
          I will contact you soon.
        </p>

        <br/>

        <p>
          Gaurav Pareta
        </p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;