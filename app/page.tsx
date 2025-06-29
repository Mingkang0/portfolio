import { FooterSection } from "@/section/footer";
import { SkillsSection } from "@/section/skills";
import { AboutSection } from "@/section/about";
import { ExperiencesSection } from "@/section/experience";
import { ContactSection } from "@/section/contact";
import { EducationsSection } from "@/section/educations";
import { IntroSection } from "@/section/intro";
import { ProjectsSection } from "@/section/projects";

export default function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ExperiencesSection />
      <EducationsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
