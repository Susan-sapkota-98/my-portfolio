import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { page } = await req.json();

  // Get visitor IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0] ||
    req.headers.get('x-real-ip') ||
    'unknown';

  // Look up location from IP
  let locationText = 'Unknown location';
  if (ip !== 'unknown') {
    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
      const geo = await geoRes.json();
      locationText = `${geo.city || 'Unknown city'}, ${geo.region || ''}, ${geo.country_name || 'Unknown country'}`;
    } catch (e) {
      console.error('Geo lookup failed:', e);
    }
  }

  await resend.emails.send({
    from: 'Portfolio Alert <notify@susansapkota.com.np>',
    to: 'susansapkota986@gmail.com',
    subject: '👀 Someone visited your portfolio!',
    text: `A visitor just opened your portfolio at: ${page}\nLocation (IP-based): ${locationText}\nIP: ${ip}\nTime: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })}`,
  });

  return NextResponse.json({ success: true });
}