import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<NextResponse<{ success: boolean }>> {
  const { page, gpsLocation } = await req.json();

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  let locationText = 'Unknown location';
  try {
    const geoRes = await fetch(`https://ipwho.is/${ip}`);
    const geo = await geoRes.json();

    if (geo.success !== false) {
      locationText = `${geo.city || 'Unknown city'}, ${geo.region || ''}, ${geo.country || 'Unknown country'}`;
    }
  } catch (e) {
    console.error('Geo lookup failed:', e);
  }

  const gpsText = gpsLocation
    ? `${gpsLocation.lat}, ${gpsLocation.lng} (https://www.google.com/maps?q=${gpsLocation.lat},${gpsLocation.lng})`
    : 'Not granted / unavailable';

  await resend.emails.send({
    from: 'Portfolio Alert <notify@susansapkota.com.np>',
    to: 'susansapkota986@gmail.com',
    subject: '👀 Someone visited your portfolio!',
    text: `A visitor just opened your portfolio at: ${page}\nLocation (IP-based): ${locationText}\nExact GPS: ${gpsText}\nIP: ${ip}\nTime: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })}`,
  });

  return NextResponse.json({ success: true });
}