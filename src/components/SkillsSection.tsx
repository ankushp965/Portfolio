import React, { useState } from 'react';
import { 
  Cloud, 
  Terminal, 
  Server, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { 
  FaAws 
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiTerraform, 
  SiDocker, 
  SiPrometheus, 
  SiGrafana, 
  SiGithubactions, 
  SiLinux, 
  SiPython, 
  SiNginx, 
  SiPostgresql, 
  SiMysql 
} from 'react-icons/si';
import { skillCategories } from '../data/portfolioData';

const pillarIcons: Record<string, React.ElementType> = {
  'cloud-aws': Cloud,
  'iac-config': Terminal,
  'containers-gitops': Server,
  'cicd-devsecops': ShieldCheck,
  'monitoring-sre': Activity,
  'ai-infra': Cpu,
};

// Map popular skill names to official tech icons
const skillIconMap: Record<string, React.ElementType> = {
  'AWS EC2': FaAws,
  'AWS EKS': FaAws,
  'AWS ECR': FaAws,
  'AWS S3': FaAws,
  'Terraform': SiTerraform,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'GitHub Actions': SiGithubactions,
  'Linux': SiLinux,
  'Python': SiPython,
  'Nginx Reverse Proxy': SiNginx,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative dev-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-semibold border border-sky-500/30 mb-2">
              <Layers size={13} />
              <span>CORE CLOUD &amp; PLATFORM DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">
              DevOps &amp; Infrastructure Skills Matrix
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-md font-sans">
            Production cloud engineering competencies spanning multi-AZ networking, immutable IaC, declarative GitOps, and SRE observability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-xl transition-all ${
              selectedCategory === 'all'
                ? 'bg-sky-600 text-white font-semibold shadow-md shadow-sky-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/[0.06]'
            }`}
          >
            All Pillars ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white font-semibold shadow-md shadow-sky-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/[0.06]'
              }`}
            >
              {cat.badge}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComponent = pillarIcons[cat.id] || Server;
            return (
              <div 
                key={cat.id}
                className="dev-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-inner">
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <h3 className="font-mono text-base font-bold text-slate-100">
                          {cat.title}
                        </h3>
                        <span className="font-mono text-[11px] text-sky-400/90 font-medium">
                          {cat.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Badges with Official Logos */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {cat.skills.map((skill, idx) => {
                    const TechIcon = skillIconMap[skill];
                    return (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-sky-300 text-xs rounded-lg font-mono border border-white/[0.06] hover:border-sky-500/30 transition-all hover:scale-[1.02]"
                      >
                        {TechIcon && <TechIcon size={12} className="text-sky-400" />}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
