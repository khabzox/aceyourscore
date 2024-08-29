import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  try {
    const formData = await request.json();

    const { name, email, phone, date, time, profileImage } = formData;

    if (!email || !name || !phone || !date || !time) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_BURNER_USERNAME,
        pass: process.env.NEXT_PUBLIC_BURNER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "AceYourScore <info@aceyourscore.com>",
      to: email,
      subject: `AceYourScore | Your Booking is in Progress`,
      html: `
      <div style="font-family: Arial, sans-serif; color: #e2ded4; background-color: #002b5b; padding: 20px; border-radius: 8px; box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2); max-width: 600px; margin: auto;">
        <h2 style="color: #ea5455; text-align: center;">Thank you for your booking, ${name}!</h2>
        <p style="font-size: 16px;">Hi ${name},</p>
        <p style="font-size: 16px; color: rgba(255, 255, 255, 0.74);">Thank you for your booking. Your request is currently being processed, and we will get back to you shortly.</p>
        
        <div style="background-color: rgba(30, 62, 118, 0.7); padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="font-size: 16px; margin: 0;"><strong>Your Details:</strong></p>
          <p style="font-size: 14px; margin: 5px 0; color: #e2ded4;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 14px; margin: 5px 0; color: #e2ded4;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 14px; margin: 5px 0; color: #e2ded4;"><strong>Phone Number:</strong> ${phone}</p>
          <p style="font-size: 14px; margin: 5px 0; color: #e2ded4;"><strong>Date:</strong> ${date}</p>
          <p style="font-size: 14px; margin: 5px 0; color: #e2ded4;"><strong>Time:</strong> ${time}</p>
        </div>
  
        <p style="font-size: 16px;">If you have any questions, feel free to reply to this email or contact us at <a href="mailto:info@aceyourscore.com" style="color: #ea5455; text-decoration: none; font-weight: bold;">info@aceyourscore.com</a>.</p>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="https://www.aceyourscore.com" style="background-color: #ea5455; color: #e2ded4; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; display: inline-block; transition: background-color 0.3s ease; hover: background-color: #e2ded4; color: #002b5b;">Visit Our Website</a>
        </div>
        
        <p style="text-align: center; font-size: 14px; color: rgba(255, 255, 255, 0.74); margin-top: 20px;">Best regards,</p>
        <p style="text-align: center; font-size: 14px; font-weight: bold; color: #ea5455;">AceYourScore Team</p>
      </div>
    `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Could not send message", error: error.message },
      { status: 500 }
    );
  }
}
