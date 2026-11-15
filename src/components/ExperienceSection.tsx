import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Server } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative dev-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-semibold border border-sky-500/30 mb-2">
              <Briefcase size={13} />
              <span>PRODUCTION PLATFORMS DELIVERED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">
              Professional DevOps Experience
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-sans">
            Production cloud infrastructure, automated GitOps delivery, and enterprise platform engineering.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experienceData.map((exp) => (
            <div 
              key={exp.id}
              className="dev-card rounded-2xl p-6 sm:p-10 shadow-2xl"
            >
              {/* Company & Role Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 font-mono">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30">
                      Full-time
                    </span>
                  </div>
                  <h4 className="text-lg font-mono font-medium text-sky-400 mt-1">
                    {exp.company}
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-white/[0.06]">
                    <Calendar size={13} className="text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-white/[0.06]">
                    <MapPin size={13} className="text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* High-Impact Platforms Built */}
              <div className="space-y-10">
                {exp.projects.map((proj, pIdx) => (
                  <div 
                    key={pIdx}
                    className="bg-slate-950/70 border border-white/[0.06] rounded-xl p-6 hover:border-sky-500/30 transition-all"
                  >
                    {/* Platform Title & Metrics Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <h5 className="text-lg font-bold text-slate-100 font-mono flex items-center gap-2">
                          <Server size={18} className="text-sky-400" />
                          {proj.title}
                        </h5>
                        <p className="text-xs font-mono text-slate-400 mt-1">
                          {proj.subtitle}
                        </p>
                      </div>

                      <div className="inline-flex self-start sm:self-auto items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                        <CheckCircle2 size={13} />
                        <span>{proj.metricsBadge}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-6">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed font-sans">
                          <ChevronRight size={16} className="text-sky-400 mt-1 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Architecture Details Box */}
                    {proj.architectureDetails && (
                      <div className="mb-6 p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] font-mono text-xs text-slate-400 leading-relaxed">
                        <span className="text-sky-400 font-semibold mr-2">&gt; Architecture Topology:</span>
                        {proj.architectureDetails}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-500 mr-2">Tech:</span>
                      {proj.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
