import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // 入力バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "全ての項目を入力してください。" },
        { status: 400 }
      );
    }

    // Nodemailerトランスポート設定
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // メール内容の設定
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `【お問合せ】${name}様より`,
      html: `
        <p><strong>【名前】</strong>: ${name}</p>
        <p><strong>【メールアドレス】</strong>: ${email}</p>
        <p><strong>【メッセージ】</strong></p>
        <p>${message}</p>
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "メールが送信されました。" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "メールの送信中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
