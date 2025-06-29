import ResumeViewerWithFallback from "@/components/resume/resume-viewer-fallback";
import { personalInfo } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${personalInfo.name} | Resume`,
  description:
    "Professional resume of Sho Ming Kang, showcasing experience, skills, and education.",
};

export default function ResumePage() {
  return (
    <div className="py-8 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ResumeViewerWithFallback pdfUrl="/resume/MingKangSho_Resume.pdf" />
      </div>
    </div>
  );
}
