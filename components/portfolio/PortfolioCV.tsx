"use client";

import {
  // ProfileCard,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  TechStackSection,
  ProjectsSection,
  EducationSection,
  RecognitionSection,
  RecommendationSection,
  LinksSection,
  ContactSection,
  Footer,
  ExtrasSection,
  ProfileCard,
} from "./index";

export function PortfolioCV() {
  return (
    <div className="min-h-screen  ">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-8 xl:gap-12">
        {/* Fixed Profile Card - Desktop */}
        <ProfileCard />

        {/* Main Content - Scrollable with proper margin */}
        <div className="lg:ml-80 xl:ml-96 lg:pl-8 flex-1 p-4 lg:p-8 space-y-12">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <EducationSection />
          <RecognitionSection />
          <RecommendationSection />
          <ExtrasSection />
          <LinksSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
