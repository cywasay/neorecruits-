"use client";

import * as React from "react";
import { Upload, Mail, Phone, User, FileText, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function JobDetailApply({ job }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    cvFile: null,
    cvFileName: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState("idle"); // idle, success, error
  const [cvError, setCvError] = React.useState("");
  const [submittedEmail, setSubmittedEmail] = React.useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setCvError("Please upload a PDF or Word document");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setCvError("File size must be less than 5MB");
        return;
      }

      setCvError("");
      setFormData((prev) => ({
        ...prev,
        cvFile: file,
        cvFileName: file.name,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (!formData.cvFile) {
      setCvError("Please upload your CV");
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("coverLetter", formData.coverLetter);
      formDataToSend.append("cvFile", formData.cvFile);
      formDataToSend.append("jobId", job.id.toString());
      formDataToSend.append("jobTitle", job.title);
      formDataToSend.append("company", job.company);
      formDataToSend.append("submittedAt", new Date().toISOString());

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedEmail(formData.email);
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          coverLetter: "",
          cvFile: null,
          cvFileName: "",
        });
        // Email confirmation and application received status handled by API
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#e5e5e5] shadow-lg p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2677]">Apply for this Job</h2>
          <p className="text-sm text-[#0b2677]/70">
            Fill out the form below to submit your application. We'll send you a confirmation email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="h-12 bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@email.com"
              className="h-12 bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 4 123 4567"
              className="h-12 bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50"
            />
          </div>

          {/* CV Upload */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
              <FileText className="w-4 h-4" />
              CV / Resume *
            </label>
            <div className="relative">
              <input
                type="file"
                id="cvFile"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="cvFile"
                className="flex items-center justify-center gap-2 w-full h-12 px-4 bg-[#f4f4f4] border-2 border-dashed border-[#e5e5e5] rounded-md cursor-pointer hover:border-[#9a01cd] transition-colors duration-300 text-[#0b2677] text-sm font-medium"
              >
                <Upload className="w-5 h-5 text-[#9a01cd]" />
                {formData.cvFileName || "Upload CV (PDF, DOC, DOCX)"}
              </label>
            </div>
            {formData.cvFileName && (
              <p className="text-xs text-[#9a01cd] flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                {formData.cvFileName}
              </p>
            )}
            {cvError && <p className="text-xs text-red-600">{cvError}</p>}
            <p className="text-xs text-[#0b2677]/50">Maximum file size: 5MB</p>
          </div>

          {/* Cover Letter */}
          <div className="space-y-2">
            <label htmlFor="coverLetter" className="text-sm font-semibold text-[#0b2677]">
              Cover Letter (Optional)
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us why you're interested in this position and how your skills align with the role..."
              className="w-full px-4 py-3 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50 resize-none"
            />
          </div>

          {/* Submit Status */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Application Submitted Successfully!</span>
              </div>
              <p>We've sent a confirmation email to {submittedEmail || "your email"}. Our team will review your application and get back to you soon.</p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
              There was an error submitting your application. Please try again or contact us directly.
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 sm:h-14 bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-[#0b2677]/50 text-center">
            By submitting this application, you agree to our privacy policy. We'll send you a confirmation email and update you on your application status.
          </p>
        </form>
      </div>
    </div>
  );
}
