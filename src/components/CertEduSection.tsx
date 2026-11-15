import React from 'react';
import { Award, GraduationCap, Calendar } from 'lucide-react';
import { certificationsData, educationData } from '../data/portfolioData';

export const CertEduSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative dev-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-semibold border border-sky-500/30 mb-2">
              <Award size={13} />
              <span>CREDENTIALS &amp; FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">
              Certifications &amp; Education
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* 1. CERTIFICATIONS */}
          <div className="space-y-6">
            <h3 className="font-mono text-lg font-bold text-slate-200 flex items-center gap-2">
              <Award className="text-sky-400" />
              Professional Certifications
            </h3>

            {certificationsData.map((cert) => (
              <div 
                key={cert.id}
                className="dev-card border border-sky-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl group hover:border-sky-500/60 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      {cert.status}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
                      {cert.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-mono text-sky-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-white/[0.08]">
                  <span className="text-xs font-mono text-slate-500 block mb-2 font-medium">
                    Exam Curriculum Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3 py-1 rounded-lg bg-slate-950/80 border border-white/[0.06] text-xs font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* 2. FORMAL EDUCATION */}
          <div className="space-y-6">
            <h3 className="font-mono text-lg font-bold text-slate-200 flex items-center gap-2">
              <GraduationCap className="text-emerald-400" />
              Academic Background
            </h3>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div 
                  key={edu.id}
                  className="dev-card rounded-2xl p-6 sm:p-7 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold font-mono text-slate-100">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/[0.06]">
                      <Calendar size={13} className="text-slate-500" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-mono text-sky-400">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
