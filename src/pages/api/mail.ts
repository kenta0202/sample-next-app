/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable import/no-anonymous-default-export */
import { createTransport } from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: "try-nodemailer@gmail.com",
    to: process.env.NEXT_PUBLIC_MAIL_TO,
    subject: "お問い合わせ",
    text: req.body,
  });

  res.status(200).json({
    success: true,
  });
};

export default handler;
