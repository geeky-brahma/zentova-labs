import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const incomingUserAgent = request.headers.get("user-agent") || "Mozilla/5.0";
    const origin = request.headers.get("origin") || process.env.APP_URL || "http://localhost:3000";

    if (!accessKey) {
      throw new Error("WEB3FORMS_ACCESS_KEY is not configured");
    }

    const payload = {
      access_key: accessKey,
      name,
      email,
      message,
      subject: `New Contact Form Submission from ${name}`,
    };

    // Attempt 1: JSON payload
    let web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": incomingUserAgent,
        Origin: origin,
        Referer: `${origin}/`,
      },
      body: JSON.stringify(payload),
    });

    let contentType = web3formsResponse.headers.get("content-type") || "";
    let rawBody = await web3formsResponse.text();

    // Attempt 2 (fallback): multipart form-data payload
    if (!contentType.includes("application/json") || web3formsResponse.status === 403) {
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("name", String(name));
      formData.append("email", String(email));
      formData.append("message", String(message));
      formData.append("subject", `New Contact Form Submission from ${name}`);

      web3formsResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "User-Agent": incomingUserAgent,
          Origin: origin,
          Referer: `${origin}/`,
        },
        body: formData,
      });

      contentType = web3formsResponse.headers.get("content-type") || "";
      rawBody = await web3formsResponse.text();
    }

    if (!contentType.includes("application/json")) {
      throw new Error(`Unexpected Web3Forms response: ${web3formsResponse.status} ${rawBody.slice(0, 120)}`);
    }

    const result = JSON.parse(rawBody) as { success?: boolean; message?: string };

    if (web3formsResponse.ok && result.success) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been received. We'll get back to you soon.",
      });
    } else {
      throw new Error(result.message || "Web3Forms submission failed");
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please email us directly at zentovalabs@gmail.com or call +91-9337683197",
      },
      { status: 500 }
    );
  }
}
