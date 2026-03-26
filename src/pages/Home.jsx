import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import HighlightsSection from "../components/sections/HighlightsSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ExperienceSection from "../components/sections/ExperienceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <HeroSection />
        <HighlightsSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>

      <Footer />
    </div>
  );
}