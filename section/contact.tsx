"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ContactSection() {

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-4 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I&apos;m always open to discussing new opportunities, collaborations, or just connecting with like-minded professionals. Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="justify-self-center "
          >
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-muted/30 p-3">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-muted/30 p-3">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href={`${personalInfo.contact.linkedin}`}
                    target="_blank"
                    className="break-all text-muted-foreground transition-colors hover:text-primary"
                  >
                    {personalInfo.contact.linkedin}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-muted/30 p-3">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href={`${personalInfo.contact.github}`}
                    target="_blank"
                    className="break-all text-muted-foreground transition-colors hover:text-primary"
                  >
                    {personalInfo.contact.github}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}