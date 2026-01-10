import { JobDetailHero } from "./_components/JobDetailHero";
import { JobDetailOverview } from "./_components/JobDetailOverview";
import { JobDetailResponsibilities } from "./_components/JobDetailResponsibilities";
import { JobDetailRequirements } from "./_components/JobDetailRequirements";
import { JobDetailBenefits } from "./_components/JobDetailBenefits";
import { JobDetailCompanyInfo } from "./_components/JobDetailCompanyInfo";
import { JobDetailSimilarJobs } from "./_components/JobDetailSimilarJobs";
import { JobDetailApply } from "./_components/JobDetailApply";

// Mock job data - In production, this would come from a database
const jobData = {
  1: {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "Dubai, UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    salaryMin: 80000,
    salaryMax: 120000,
    posted: "2 days ago",
    postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    industry: "Technology & Digital",
    experience: "Senior Level (5-10 years)",
    overview:
      "We're seeking an experienced Senior Software Engineer to join our dynamic team. You'll work on cutting-edge AI projects and collaborate with top talent in the industry. This role offers the opportunity to shape the future of technology while working in a fast-paced, innovative environment.",
    responsibilities: [
      "Design and develop scalable software solutions using React, Node.js, and cloud technologies",
      "Lead code reviews and mentor junior developers",
      "Collaborate with cross-functional teams to deliver high-quality products",
      "Implement AI/ML models and integrate them into production systems",
      "Optimize application performance and ensure security best practices",
      "Participate in architectural decisions and technical planning",
      "Write clean, maintainable, and well-documented code",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of professional software development experience",
      "Strong proficiency in React, Node.js, and JavaScript/TypeScript",
      "Experience with AI/ML technologies and frameworks",
      "Knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Experience with databases (SQL and NoSQL)",
      "Excellent problem-solving and communication skills",
      "Proven track record of delivering high-quality software projects",
    ],
    benefits: [
      "Competitive salary package with performance bonuses",
      "Comprehensive health insurance",
      "Flexible working hours and remote work options",
      "Professional development budget for courses and certifications",
      "25 days annual leave",
      "Company equity participation",
      "Modern office space with cutting-edge technology",
      "Team building events and company retreats",
    ],
    companyInfo: {
      name: "Tech Innovations Inc.",
      description:
        "Tech Innovations Inc. is a leading technology company specializing in AI-powered solutions. We've been at the forefront of digital transformation for over 10 years, helping businesses leverage cutting-edge technology to achieve their goals.",
      industry: "Technology & Digital",
      size: "500-1000 employees",
      website: "https://techinnovations.com",
      founded: "2013",
      address: "Business Bay, Dubai, UAE",
      mapLocation: { lat: 25.1972, lng: 55.2744 }, // Dubai coordinates
    },
  },
  // Add more job data entries as needed
};

export default async function JobDetailPage({ params }) {
  const { id } = await params;
  const job = jobData[id] || jobData[1]; // Fallback to first job if not found

  return (
    <main className="flex flex-col w-full">
      <JobDetailHero job={job} />
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-7xl mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <JobDetailOverview job={job} />
                <JobDetailResponsibilities job={job} />
                <JobDetailRequirements job={job} />
                <JobDetailBenefits job={job} />
                <JobDetailCompanyInfo job={job} />
                <JobDetailSimilarJobs currentJobId={job.id} />
              </div>
              {/* Sidebar - Apply Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <JobDetailApply job={job} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
