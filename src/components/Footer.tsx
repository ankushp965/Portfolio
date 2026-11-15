import React from 'react';
import { ArrowUp, Terminal, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#030407] border-t border-white/[0.06] font-mono text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Name & Prompt */}
        <div className="flex items-center gap-2 text-zinc-400">
          <Terminal size={14} className="text-zinc-500" />
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        </div>

        {/* Center: System Status */}
        <div className="flex items-center gap-2 text-zinc-400">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Deployed with GitHub Actions &bull; ap-south-1</span>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#090a0f] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.06] transition-colors"
        >
          <span>Top</span>
          <ArrowUp size={12} />
        </button>

      </div>
    </footer>
  );
};

