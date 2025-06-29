"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data";
import { ProjectCard } from "@/components/project/project-card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 400; // Adjust if needed
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Here are some of the projects I've worked on, showcasing my skills in web development, design, and problem-solving. Each project reflects my passion for creating impactful solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Scroll Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background border border-border/40 p-2 rounded-full shadow hover:bg-muted"
            onClick={() => scroll("left")}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background border border-border/40 p-2 rounded-full shadow hover:bg-muted"
            onClick={() => scroll("right")}
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Scrollable Projects */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-[380px] max-w-sm flex-shrink-0">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}