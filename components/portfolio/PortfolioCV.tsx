"use client";

import {
  AboutSection,
  SkillsSection,
  ExperienceSection,
  TechStackSection,
  ProjectsSection,
  ResourcesSection,
  EducationSection,
  RecognitionSection,
  RecommendationSection,
  LinksSection,
  Footer,
  ExtrasSection,
  ProfileCard,
} from "./index";
import { SectionNav } from "./SectionNav";

export function PortfolioCV() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-8 xl:gap-12">
        <ProfileCard />

        <div className="lg:ml-80 xl:ml-96 lg:pl-8 flex-1 p-4 lg:p-8 space-y-12">
          <section id="about"><AboutSection /></section>
          <section id="skills"><SkillsSection /></section>
          <section id="experience"><ExperienceSection /></section>
          <section id="techstack"><TechStackSection /></section>
          <section id="projects"><ProjectsSection /></section>
          <section id="resources"><ResourcesSection /></section>
          <section id="education"><EducationSection /></section>
          <section id="recognition"><RecognitionSection /></section>
          <section id="recommendations"><RecommendationSection /></section>
          <section id="extras"><ExtrasSection /></section>
          <section id="links"><LinksSection /></section>
          <Footer />
        </div>
      </div>

      <SectionNav />
    </div>
  );
}
