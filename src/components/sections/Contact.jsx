"use client";

import * as React from "react";
import { Upload, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    service: "",
    message: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", service: "", message: "", file: null });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormState((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
              Let's Build Your <br className="hidden sm:block" /> Dream Team.
            </h2>
            <p className="text-[#0b2677]/70 leading-relaxed text-sm sm:text-base">
              Whether you're looking for executive leadership, a specialized
              technical team, or a complete RPO solution, NeoRecruits has the
              expertise to deliver.
            </p>

            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#539ce0]/10 flex items-center justify-center text-[#539ce0]">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0b2677] text-sm sm:text-base">
                    Global Reach
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0b2677]/60">
                    Access talent across 40+ countries.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#539ce0]/10 flex items-center justify-center text-[#539ce0]">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0b2677] text-sm sm:text-base">
                    Industry Experts
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0b2677]/60">
                    Recruiters with specialized sector knowledge.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#539ce0]/10 flex items-center justify-center text-[#539ce0]">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0b2677] text-sm sm:text-base">
                    Fast Turnaround
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0b2677]/60">
                    Shortlists delivered in days, not weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2">
            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
              {/* Decorative Gradient Blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#539ce0]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {isSubmitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b2677]">
                    Message Sent!
                  </h3>
                  <p className="text-[#0b2677]/60">
                    Thank you for reaching out. One of our consultants will get
                    back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-bold text-[#0b2677] uppercase tracking-wider"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        className="bg-white border-gray-200 h-12 focus:border-[#539ce0] focus:ring-[#539ce0]/20"
                        placeholder="John Doe"
                        required
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold text-[#0b2677] uppercase tracking-wider"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="bg-white border-gray-200 h-12 focus:border-[#539ce0] focus:ring-[#539ce0]/20"
                        placeholder="john@company.com"
                        required
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-bold text-[#0b2677] uppercase tracking-wider"
                    >
                      Service Required
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        className="w-full h-12 bg-white border border-gray-200 rounded-md px-3 text-sm focus:outline-none focus:border-[#539ce0] focus:ring-4 focus:ring-[#539ce0]/10 transition-shadow appearance-none cursor-pointer"
                        required
                        value={formState.service}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        <option value="executive">Executive Search</option>
                        <option value="contract">Contract Recruitment</option>
                        <option value="permanent">Permanent Recruitment</option>
                        <option value="rpo">
                          RPO (Recruitment Process Outsourcing)
                        </option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold text-[#0b2677] uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full min-h-[120px] bg-white border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#539ce0] focus:ring-4 focus:ring-[#539ce0]/10 transition-shadow resize-y"
                      placeholder="How can we help you?"
                      required
                      value={formState.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0b2677] uppercase tracking-wider">
                      Attachment (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="file"
                        className="flex items-center justify-center w-full h-12 bg-white border border-dashed border-gray-300 rounded-md cursor-pointer hover:border-[#539ce0] hover:text-[#539ce0] transition-colors group"
                      >
                        <Upload className="w-4 h-4 mr-2 text-gray-400 group-hover:text-[#539ce0]" />
                        <span className="text-sm text-gray-500 group-hover:text-[#539ce0]">
                          {formState.file
                            ? formState.file.name
                            : "Upload Job Description or File"}
                        </span>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[#0b2677] hover:bg-[#0b2677]/90 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
