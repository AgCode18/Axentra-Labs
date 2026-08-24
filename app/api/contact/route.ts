import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
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

    // Google authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // Add data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("en-IN"),
            name,
            email,
            phone,
            company || "",
            service,
            budget || "",
            message,
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