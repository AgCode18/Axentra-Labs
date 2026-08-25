import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    // Get form data
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // CLIENT IP & LOCATION FROM VERCEL HEADERS
    // ==========================================

    const forwardedFor = request.headers.get("x-forwarded-for");

    const ip = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "Unknown";

    const country =
      request.headers.get("x-vercel-ip-country") || "Unknown";

    const region =
      request.headers.get("x-vercel-ip-country-region") || "Unknown";

    const cityHeader =
      request.headers.get("x-vercel-ip-city") || "Unknown";

    let city = "Unknown";

    try {
      city =
        cityHeader !== "Unknown"
          ? decodeURIComponent(cityHeader)
          : "Unknown";
    } catch {
      city = cityHeader;
    }

    const latitude =
      request.headers.get("x-vercel-ip-latitude") || "Unknown";

    const longitude =
      request.headers.get("x-vercel-ip-longitude") || "Unknown";

    const timezone =
      request.headers.get("x-vercel-ip-timezone") || "Unknown";

    // ==========================================
    // GOOGLE SHEETS CONFIGURATION
    // ==========================================

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    );

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.error("Missing Google Sheets environment variables");

      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        { status: 500 }
      );
    }

    // ==========================================
    // GOOGLE AUTHENTICATION
    // ==========================================

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // ==========================================
    // SAVE FORM + LOCATION DATA TO GOOGLE SHEETS
    // ==========================================

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:O",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            // A - Date
            new Date().toLocaleString("en-IN"),

            // B - Name
            name,

            // C - Email
            email,

            // D - Phone
            phone,

            // E - Company
            company || "",

            // F - Service
            service,

            // G - Budget
            budget || "",

            // H - Message
            message,

            // I - IP Address
            ip,

            // J - Country
            country,

            // K - Region
            region,

            // L - City
            city,

            // M - Latitude
            latitude,

            // N - Longitude
            longitude,

            // O - Timezone
            timezone,
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Your project inquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Google Sheets Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit your inquiry.",
      },
      { status: 500 }
    );
  }
}