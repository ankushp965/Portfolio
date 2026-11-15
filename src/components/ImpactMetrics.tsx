import React from 'react';
import { Zap, Clock, Shield, CheckCircle, Server } from 'lucide-react';
import { impactMetrics } from '../data/portfolioData';

const iconMap = {
  zap: Zap,
  clock: Clock,
  server: Server,
  shield: Shield,
  check: CheckCircle,
};

export const ImpactMetrics: React.FC = () => {
  return (
    <section id="metrics" className="py-14 border-y border-white/[0.06] bg-[#050811]/70 relative dev-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-1 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-semibold px-3 py-1 border border-sky-500/30">
            PRODUCTION TELEMETRY
          </div>
          <div className="h-px bg-white/[0.08] flex-grow"></div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">BENCHMARKED CLOUD METRICS</span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {impactMetrics.map((metric) => {
            const IconComponent = iconMap[metric.iconName] || Zap;
            return (
              <div 
                key={metric.id}
                className="dev-card rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 text-sky-400 border border-white/[0.06]">
                    <IconComponent size={20} />
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest font-semibold">
                    PROD
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-100 tracking-tight mb-1">
                  {metric.value}
                </div>

                <div className="font-mono text-xs font-semibold text-slate-200 mb-2">
                  {metric.label}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
