import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { page } = await req.json();

  await resend.emails.send({
    from: 'Portfolio Alert <notify@susansapkota.com.np>',
    to: 'susansapkota986@gmail.com',
    subject: '👀 Someone visited your portfolio!',
    text: `A visitor just opened your portfolio at: ${page}\nTime: ${new Date().toLocaleString()}`,
  });

  return NextResponse.json({ success: true });
}