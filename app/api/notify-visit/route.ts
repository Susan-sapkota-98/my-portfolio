import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  req: Request
): Promise<NextResponse<{ success: boolean }>> {
  try {
    const { page, gpsLocation } = await req.json();

    // Get visitor IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // IP-BASED LOCATION

    let locationText = "Unknown location";

    try {
      const geoRes = await fetch(`https://ipwho.is/${ip}`);
      const geo = await geoRes.json();

      if (geo.success !== false) {
        locationText = `${geo.city || "Unknown city"}, ${
          geo.region || "Unknown region"
        }, ${geo.country || "Unknown country"}`;
      }
    } catch (error) {
      console.error("Geo lookup failed:", error);
    }

    // GPS LOCATION
    let gpsText = "Not granted / unavailable";

    if (
      gpsLocation &&
      typeof gpsLocation.lat === "number" &&
      typeof gpsLocation.lng === "number"
    ) {
      gpsText =
        `Latitude: ${gpsLocation.lat}\n` +
        `Longitude: ${gpsLocation.lng}\n` +
        `Accuracy: ±${gpsLocation.accuracy ?? "unknown"} meters\n` +
        `Google Maps: https://www.google.com/maps?q=${gpsLocation.lat},${gpsLocation.lng}`;
    }

    // SEND EMAIL
    await resend.emails.send({
      from: "Portfolio Alert <notify@susansapkota.com.np>",
      to: "susansapkota986@gmail.com",
      subject: "👀 Someone visited your portfolio!",

      text:
        `A visitor just opened your portfolio.\n\n` +

        `Page:\n${page}\n\n` +

        `Location (IP-based):\n${locationText}\n\n` +

        `Exact GPS:\n${gpsText}\n\n` +

        `IP Address:\n${ip}\n\n` +

        `Time:\n${new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kathmandu",
        })}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notify visit error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}