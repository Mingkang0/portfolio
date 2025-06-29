"use client";

import { useEffect, useState } from "react";
import { FileSearch, Smartphone, Download } from "lucide-react";
import { Button } from "../ui/button";

interface ResumeViewerWithFallbackProps {
  pdfUrl: string;
}

export default function ResumeViewerWithFallback({ pdfUrl }: ResumeViewerWithFallbackProps) {
  const [isClient, setIsClient] = useState(false);
  const [deviceType, setDeviceType] = useState<"desktop" | "mobile" | null>(null);

  useEffect(() => {
    setIsClient(true);
    detectDevice();
  }, []);

  const detectDevice = () => {
    if (typeof window === "undefined") return;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

    setDeviceType(isMobile ? "mobile" : "desktop");
  };

  const renderDownloadButton = (
    <a href={pdfUrl} download className="inline-flex">
      <Button size="lg" className="gap-2">
        <Download className="h-4 w-4" />
        Download Resume
      </Button>
    </a>
  );

  if (!isClient || deviceType === null) {
    return (
      <div className="flex justify-center items-center h-[100vh] border rounded-xl shadow p-8 bg-background text-foreground">
        <div className="text-center">
          <FileSearch className="w-12 h-12 mx-auto animate-pulse text-primary mb-4" />
          <p className="text-xl font-medium">Preparing resume view...</p>
        </div>
      </div>
    );
  }

  if (deviceType === "desktop") {
    return (
      <>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
          {renderDownloadButton}
        </div>

        <div className="bg-background border rounded-xl shadow-sm p-2 mb-8 h-[120vh] overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full rounded-xl"
            title="Resume PDF"
          />
        </div>
      </>
    );
  }

  return (
    <div className="bg-background border rounded-xl shadow-sm p-8 mb-8 flex items-center justify-center">
      <div className="text-center max-w-md">
        <Smartphone className="w-16 h-16 mx-auto mb-6 text-primary/70" />
        <h2 className="text-2xl font-bold mb-3">Mobile Device Detected</h2>
        <p className="text-muted-foreground mb-6">
          For the best experience on mobile, please download the resume and open it in your device’s PDF viewer.
        </p>
        <div className="flex justify-center">
          {renderDownloadButton}
        </div>
      </div>
    </div>
  );
}