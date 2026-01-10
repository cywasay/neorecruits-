import { NextResponse } from "next/server";

// This API route handles:
// 1. Job application form submission with CV upload
// 2. Email confirmation to candidate
// 3. Email notification to hiring team
// 4. Application received status record

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const coverLetter = formData.get("coverLetter") || "";
    const cvFile = formData.get("cvFile");
    const jobId = formData.get("jobId");
    const jobTitle = formData.get("jobTitle");
    const company = formData.get("company");
    const submittedAt = formData.get("submittedAt");

    // Validate required fields
    if (!name || !email || !phone || !cvFile || !jobId || !jobTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate file
    if (!(cvFile instanceof File)) {
      return NextResponse.json(
        { error: "Invalid file upload" },
        { status: 400 }
      );
    }

    // File validation
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(cvFile.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload PDF or Word document." },
        { status: 400 }
      );
    }

    if (cvFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size exceeds 5MB limit" },
        { status: 400 }
      );
    }

    // TODO: Implement actual functionality:
    // 1. Save CV file to storage (AWS S3, Google Cloud Storage, or local storage)
    // 2. Save application data to database (admin dashboard record)
    // 3. Send confirmation email to candidate
    // 4. Send notification email to hiring team/recruiters

    // For now, just log the data and simulate processing
    console.log("Job Application Received:", {
      name,
      email,
      phone,
      jobId,
      jobTitle,
      company,
      submittedAt,
      cvFileName: cvFile.name,
      cvFileSize: cvFile.size,
      cvFileType: cvFile.type,
      coverLetterLength: coverLetter.length,
    });

    // Simulate file upload and processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, save the file:
    // const fileBuffer = Buffer.from(await cvFile.arrayBuffer());
    // await saveFileToStorage(fileBuffer, cvFile.name, jobId);
    // await saveApplicationToDatabase({ name, email, phone, jobId, jobTitle, company, submittedAt, cvFileUrl, coverLetter });

    // TODO: Send emails
    // await sendConfirmationEmailToCandidate(email, name, jobTitle, company);
    // await sendNotificationEmailToTeam(email, name, jobTitle, company, cvFileUrl);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: {
          name,
          email,
          jobId,
          jobTitle,
          company,
          submittedAt,
          applicationId: `APP-${Date.now()}`, // Generate application ID
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing job application:", error);
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    );
  }
}
