import React from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Zap, 
  ArrowUpRight 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const featuredProject = projectsData.find(p => p.featured) || projectsData[0];
  const otherProjects = projectsData.filter(p => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-24 relative dev-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-semibold border border-sky-500/30 mb-2">
              <Zap size={13} />
              <span>PRODUCTION ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">
              Featured DevOps Projects
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-sans">
            Self-healing Kubernetes clusters, declarative GitOps workflows, and production-tested automation.
          </p>
        </div>

        {/* 1. FLAGSHIP FEATURED PROJECT: Self-Healing Kubernetes */}
        <div className="dev-card border-2 border-sky-500/40 rounded-3xl p-6 sm:p-10 mb-14 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Top Bar: Badges & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
                FLAGSHIP CLOUD ARCHITECTURE
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {featuredProject.status}
              </span>
            </div>

            {featuredProject.githubUrl && (
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-mono text-xs font-semibold transition-all hover:scale-105 shadow-md"
              >
                <FaGithub size={16} />
                <span>View on GitHub</span>
                <ArrowUpRight size={14} className="text-sky-400" />
              </a>
            )}
          </div>

          {/* Title & Tagline */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono mb-2">
            {featuredProject.title}
          </h3>
          <p className="text-sm sm:text-base font-mono text-sky-400 mb-6">
            {featuredProject.tagline}
          </p>

          {/* Metrics Pill Ribbon */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {featuredProject.metrics.map((m, mIdx) => (
              <span 
                key={mIdx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/80 border border-white/[0.08] text-slate-200 text-xs font-mono"
              >
                <CheckCircle2 size={13} className="text-emerald-400" />
                {m}
              </span>
            ))}
          </div>

          {/* Architecture Step Flow Box */}
          {featuredProject.architectureSteps && (
            <div className="mb-8 p-6 rounded-2xl bg-slate-950/80 border border-white/[0.06]">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Layers size={14} className="text-sky-400" />
                End-to-End Self-Healing Workflow
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {featuredProject.architectureSteps.map((step, sIdx) => (
                  <div key={sIdx} className="bg-slate-900/80 border border-white/[0.06] rounded-xl p-4 relative hover:border-sky-500/40 transition-colors">
                    <div className="font-mono text-xs font-bold text-sky-400 mb-1.5">
                      0{sIdx + 1}. {step.step}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description Bullets */}
          <div className="space-y-3 mb-8">
            {featuredProject.description.map((bullet, bIdx) => (
              <div key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed font-sans">
                <ChevronRight size={16} className="text-sky-400 mt-1 flex-shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
            {featuredProject.tags.map((tag, tIdx) => (
              <span 
                key={tIdx}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-sky-300 border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 2. OTHER FEATURED PRODUCTION PLATFORMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div 
              key={project.id}
              className="dev-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    {project.status}
                  </span>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors p-1"
                      aria-label="GitHub link"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>

                <h4 className="text-xl font-bold font-mono text-slate-100 mb-2">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-sky-400/90 mb-4">
                  {project.tagline}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((m, mIdx) => (
                    <span 
                      key={mIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-950 text-emerald-400 border border-white/[0.06] text-xs font-mono"
                    >
                      &bull; {m}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-300 leading-relaxed font-sans">
                  {project.description.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0"></span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-400 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
