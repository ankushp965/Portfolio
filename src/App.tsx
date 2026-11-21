import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { DevOpsTerminal } from './components/DevOpsTerminal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030407] text-slate-100 selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* 1. Header Navigation */}
      <Navbar onOpenResumeModal={handleOpenResumeModal} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenResumeModal={handleOpenResumeModal} />

        {/* 3. Production Impact Metrics Ribbon */}
        <ImpactMetrics />

        {/* 4. Production Cloud Architecture & DevSecOps Pipeline Blueprints */}
        <ArchitectureDiagram />

        {/* 5. Interactive DevOps Terminal Console */}
        <DevOpsTerminal />

        {/* 6. DevOps & Cloud Skills Matrix */}
        <SkillsSection />

        {/* 7. Professional Experience Track Record */}
        <ExperienceSection />

        {/* 8. Featured Production Projects */}
        <ProjectsSection />

        {/* 10. Contact & Social Connect */}
        <ContactSection onOpenResumeModal={handleOpenResumeModal} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. In-Browser PDF Resume Preview Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={handleCloseResumeModal} 
      />
    </div>
  );
}

export default App;
