"use client";

import * as React from "react";
import { Building2, Users, MapPin, Calendar, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const roleTypes = [
  "Executive Search",
  "Permanent Staffing",
  "Contract / Temporary",
  "Outsource / RPO",
  "Remote / Virtual",
  "Technical Training",
  "Manpower Supply",
];

export function ServicesRequestForm() {
  const [formData, setFormData] = React.useState({
    companyName: "",
    email: "",
    phone: "",
    roleType: "",
    quantity: "",
    location: "",
    timeline: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // API endpoint for form submission
      // This will handle: email notification + admin dashboard record
      const response = await fetch("/api/request-talent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({
          companyName: "",
          email: "",
          phone: "",
          roleType: "",
          quantity: "",
          location: "",
          timeline: "",
          additionalInfo: "",
        });
        // Auto email notification and admin dashboard record handled by API
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="request-talent" className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-[#e5e5e5]">
            {/* Header */}
            <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
                Request Talent
              </h2>
              <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours to discuss your talent requirements.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Company Name *
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="h-12 bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50"
                />
              </div>

              {/* Contact Information Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="your.email@company.com"
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
              </div>

              {/* Role Type */}
              <div className="space-y-2">
                <label htmlFor="roleType" className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Role Type / Service *
                </label>
                <select
                  id="roleType"
                  name="roleType"
                  required
                  value={formData.roleType}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  {roleTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity & Location Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quantity */}
                <div className="space-y-2">
                  <label htmlFor="quantity" className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Quantity *
                  </label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 5-10 positions"
                    className="h-12 bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location *
                  </label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g., Dubai, UAE"
                    className="h-12 bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50"
                  />
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <label htmlFor="timeline" className="text-sm font-semibold text-[#0b2677] flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Timeline *
                </label>
                <Input
                  id="timeline"
                  name="timeline"
                  type="text"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., Within 30 days, Q1 2025"
                  className="h-12 bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50"
                />
              </div>

              {/* Additional Information */}
              <div className="space-y-2">
                <label htmlFor="additionalInfo" className="text-sm font-semibold text-[#0b2677]">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your requirements, preferred qualifications, or any specific needs..."
                  className="w-full px-4 py-3 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50 resize-none"
                />
              </div>

              {/* Submit Status */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  Thank you! Your request has been submitted successfully. Our team will contact you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  There was an error submitting your request. Please try again or contact us directly.
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
                    Submit Request
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-[#0b2677]/50 text-center">
                By submitting this form, you agree to our privacy policy. We will
                send you an email notification and record this request in our system.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
