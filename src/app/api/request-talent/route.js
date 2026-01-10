import { NextResponse } from "next/server";

// This API route handles:
// 1. Lead capture - storing the request
// 2. Auto email notification to the team
// 3. Admin dashboard record

export async function POST(request) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = [
      "companyName",
      "email",
      "phone",
      "roleType",
      "quantity",
      "location",
      "timeline",
    ];

    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // TODO: Implement actual functionality:
    // 1. Save to database (admin dashboard)
    // 2. Send email notification to team
    // 3. Send confirmation email to client

    // For now, just log the data
    console.log("Talent Request Received:", formData);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Talent request submitted successfully",
        data: formData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing talent request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
