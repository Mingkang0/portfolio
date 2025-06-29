"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories, softSkills } from "@/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/10 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-8 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Technologies and tools I&apos;ve mastered throughout my internship and academic projects.
          </p>
        </motion.div>

        <Tabs defaultValue="technical" className="mx-auto max-w-3xl">
          <TabsList className="mb-8 grid w-full grid-cols-3">
            <TabsTrigger
              value="technical"
              className="cursor-pointer text-foreground"
            >
              Technical Skills
            </TabsTrigger>
            <TabsTrigger
              value="soft"
              className="cursor-pointer text-foreground"
            >
              Soft Skills
            </TabsTrigger>
            <TabsTrigger
              value="languages"
              className="cursor-pointer text-foreground"
            >
              Languages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-8 justify-center"
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  custom={index}
                  variants={fadeIn}
                  className={`bg-white dark:bg-muted rounded-xl shadow-md p-6
                  ${skillCategories.length % 2 === 1 && index === skillCategories.length - 1 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
                  `}
                >
                  <h3 className="flex text-lg font-semibold mb-4 text-primary gap-4 items-center">
                    <category.icon className="w-5 h-5 text-primary" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </TabsContent>

          <TabsContent value="soft">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="languages">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-6 sm:grid-cols-2"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>English (Fluent)</span>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Mandarin (Fluent)</span>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Bahasa Malaysia (Fluent)</span>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Japanese (Intermediate)</span>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}