"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import {
  Github,
  Mail,
  Linkedin,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";
import { useMotionValue } from "framer-motion";
import { personalInfo } from "@/data";

export function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);

  // Mouse parallax effect
  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const { left, top, width, height } =
          ref.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Card parallax effect
  const cardRotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);

  const cardRotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const socialIcons = [
    {
      icon: <Github className="h-5 w-5" />,
      href: personalInfo.contact.github,
      color: "hover:bg-zinc-800 dark:hover:bg-zinc-700",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: personalInfo.contact.linkedin,
      color: "hover:bg-blue-600",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${personalInfo.contact.email}`,
      color: "hover:bg-red-500",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      href: "/resume",
      color: "hover:bg-green-500",
    },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden pt-8 w-full"
    >
      {/* Optimized background animations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary background - static gradient to improve performance */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60" />
        {/* Static secondary blob */}
        <div className="absolute -right-1/4 top-1/2 h-1/2 w-1/2 rounded-full bg-gradient-to-bl from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />

        {/* Static grid pattern */}
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.02]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 items-start justify-items-center min-w-0">
          {/* Enhanced Main Content with Modern UI but simplified animations */}
          {/* Optimized 3D Card */}
          <motion.div
            className="relative hidden md:block xl:flex col-span-3 xl:col-span-1 justify-self-center"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="w-[400px] overflow-hidden border border-border/50 bg-background/80 p-6 shadow-xl"
              style={{
                transformStyle: "preserve-3d",
                rotateX: cardRotateX,
                rotateY: cardRotateY,
                transition: "box-shadow 2s ease",
              }}
              whileHover={{
                scale: 1.02,
                rotateZ: 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Card content with simplified animations */}
              {(() => {
                const codeContent = {
                  skills: ["React", "Laravel", "Next.js", "Tailwind CSS", "ASP.NET"],
                  passion:
                    "Building user-friendly applications that solve real-world problems",
                };

                return (
                  <motion.div
                    className="mb-8 border border-border/30 bg-muted/80 p-4 font-mono text-sm"
                    style={{ transform: "translateZ(25px)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >

                    <div className="mt-1">
                      <div>
                        <span className="text-purple-500 dark:text-purple-400">
                          skills:
                        </span>{" "}
                        [
                        <div className="pl-6">
                          {codeContent.skills.map((skill, i) => (
                            <span key={i} className="flex items-center">
                              <span className="block text-green-500 dark:text-green-400">
                                &apos;{skill}&apos;
                                {i < codeContent.skills.length - 1 ? "," : ""}
                              </span>
                            </span>
                          ))}
                        </div>
                        ],
                      </div>

                      <div className="mt-2">
                        <span className="text-purple-500 dark:text-purple-400">
                          passion:
                        </span>{" "}
                        <span className="text-green-500 dark:text-green-400">
                          &apos;{codeContent.passion}&apos;
                        </span>
                        ,
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          </motion.div>
          <div className="col-span-3 lg:col-span-2">
            <motion.h1
              className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.23, 1.0, 0.32, 1.0] }}
                >
                  <span className="inline-block text-black dark:text-white">
                    Hi, I&apos;m&nbsp;
                  </span>
                  {isMounted && (
                    <TypeAnimation
                      sequence={[
                        "S", 100,
                        "Sh", 100,
                        "Sho", 100,
                        "Sho ", 100,
                        "Sho M", 100,
                        "Sho Mi", 100,
                        "Sho Min", 100,
                        "Sho Ming", 100,
                        "Sho Ming ", 100,
                        "Sho Ming K", 100,
                        "Sho Ming Ka", 100,
                        "Sho Ming Kan", 100,
                        "Sho Ming Kang", 2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="inline-block bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent"
                    />
                  )}
                </motion.div>
              </div>
              <div className="mt-2 text-2xl text-muted-foreground sm:text-3xl md:text-4xl">
                Software Engineer
              </div>
            </motion.h1>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <p className="mb-10 max-w-xl pr-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Creating innovative solutions with a focus on user experience and performance. Passionate about building applications that make a difference.
              </p>

              {/* Static decorative element instead of animated */}
              <div className="absolute -left-6 top-0 h-full w-1 rounded bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />
            </motion.div>

            {/* Simplified button section */}
            <motion.div
              className="mb-6 flex flex-col gap-4 sm:flex-row sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="group relative w-full gap-2 overflow-hidden rounded-full px-6 py-3 text-sm shadow-lg shadow-primary/10 hover:shadow-primary/20 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                asChild
              >
                <Link href="#projects">
                  <span className="relative z-10 font-medium">
                    View My Projects
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" />

                  {/* Keep hover animation as it provides important user feedback */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary to-indigo-500"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </Link>
              </Button>
            </motion.div>

            {/* Simplified social icons section with minimal animations */}
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300",
                    "border border-border/30 text-muted-foreground",
                    "hover:border-primary/30 hover:text-primary hover:shadow-sm",
                    "bg-background/50 backdrop-blur-sm",
                    "transform transition-transform hover:-translate-y-1 active:scale-95",
                  )}
                  aria-label={social.href || "Social media link"}
                >
                  {social.icon}

                  {/* Static highlight effect - pure CSS for better performance */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </a>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}