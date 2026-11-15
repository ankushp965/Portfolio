import React, { useState } from 'react';
import { 
  Terminal, 
  Download, 
  Eye, 
  Menu, 
  X
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Overview', id: 'home' },
    { name: 'Architecture', id: 'architecture' },
    { name: 'Impact', id: 'metrics' },
    { name: 'Console', id: 'terminal-console' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certs & Edu', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030407]/90 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          
          {/* Brand Logo / Terminal Prompt */}
          <div 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
          >
            <div className="p-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-400/50 transition-all shadow-[0_0_10px_rgba(14,165,233,0.15)]">
              <Terminal size={17} />
            </div>
            <span className="font-mono font-bold text-slate-100 text-sm sm:text-base tracking-tight">
              &gt;_ <span className="text-sky-400">ankush</span>.devops
            </span>
          </div>

          {/* Clean, Non-Squished Availability Status Badge */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono whitespace-nowrap flex-shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium">Available for Roles</span>
          </div>

          {/* Desktop Navigation Links (Segmented bar) */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1 font-mono text-xs overflow-x-auto py-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-2.5 py-1.5 text-slate-300 hover:text-sky-400 hover:bg-white/[0.05] rounded-md transition-all whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Action Icons & Resume CTAs */}
          <div className="hidden md:flex items-center space-x-2.5 border-l border-white/[0.08] pl-3.5 flex-shrink-0">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-md transition-colors"
            >
              <FaGithub size={17} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-white/[0.06] rounded-md transition-colors"
            >
              <FaLinkedin size={17} />
            </a>

            {/* Quick Preview Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all hover:border-slate-600 whitespace-nowrap"
            >
              <Eye size={13} className="text-sky-400" />
              <span>Preview</span>
            </button>

            {/* Download Resume Button */}
            <a
              href={personalInfo.resumeDownloadUrl}
              download="Ankush_Prajapati_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 rounded-lg border border-sky-400/40 shadow-sm shadow-sky-500/25 transition-all hover:scale-[1.02] whitespace-nowrap"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="p-1.5 text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/30 rounded-md"
              title="Preview Resume"
            >
              <Eye size={16} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#060913] border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-3 font-mono">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for DevOps Roles</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left px-3 py-2 text-sm text-slate-300 hover:text-sky-400 hover:bg-slate-900 rounded"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400">
                <FaLinkedin size={20} />
              </a>
            </div>

            <a
              href={personalInfo.resumeDownloadUrl}
              download="Ankush_Prajapati_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-sky-600 text-white rounded font-mono font-medium"
            >
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
