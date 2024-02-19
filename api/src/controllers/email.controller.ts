import { RequestHandler } from "express";
import nodemailer from "nodemailer";
export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "amjpodcast2021@gmail.com",
        pass: "kktopivkjuembwin",
      },
    });
    const mailOptions = {
      from: "amjpodcast2021@gmail.com",
      to: email,
      subject: "hi from Zolu from Nodemailer",
      text: "This is a test email sent using Zol.",
    };
    await transporter.sendMail(mailOptions);
    res.json("Email sent!");
  } catch (error) {
    res.status(500).json(error);
  }
};
