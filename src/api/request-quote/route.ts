// src/app/api/request-quote/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // basic server-side validation
    if (!data || !data.email || !data.productInterest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    // check honeypot
    if (data.honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // TODO: integrate with SMTP, SendGrid, or CRM webhook here.
    // Example webhook (pseudo):
    // await fetch(process.env.CRM_WEBHOOK_URL!, { method: 'POST', headers: {...}, body: JSON.stringify(data) });

    // For now: simple log on server (visible in terminal)
    console.log("New quote request:", JSON.stringify(data, null, 2));

    // Return success
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Request quote error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
