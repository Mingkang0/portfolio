"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { personalInfo } from "@/data";
import Image from "next/image";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/20 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative overflow-hidden rounded-lg col-span-3 lg:col-span-1 justify-self-center"
          >
            <div className="absolute inset-0 z-10 -m-1 rounded-lg border border-primary/20" />
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-tr from-primary/20 to-secondary/20 blur-sm" />
            <Image
              src={personalInfo.profilePicture}
              alt="About Me"
              width={400}
              height={300}
              className="relative z-0 h-[300px] rounded-lg object-cover border border-border/100 shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="col-span-3 lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="mb-4 text-2xl font-semibold">Summary</h3>
            {personalInfo.summary}
            <div className="flex gap-2">
              <Link
                href="/resume"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full",
                )}
              >
                <FileText className="mr-1 h-4 w-4" /> View Resume
              </Link>
              <Link
                href="/#contact"
                className={cn(buttonVariants(), "rounded-full")}
              >
                <Mail className="mr-1 h-4 w-4" /> Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}