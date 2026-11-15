import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Download, 
  Eye, 
  Terminal, 
  Send 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden dev-grid-bg">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Terminal Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/[0.08] text-sky-400 font-mono text-xs font-semibold mb-6 shadow-md">
          <Terminal size={14} />
          <span>CONNECT &bull; LET'S TALK CLOUD INFRASTRUCTURE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 font-mono mb-6">
          Let's Build Scalable Platforms Together
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
          I am actively exploring full-time opportunities in <strong>DevOps</strong>, <strong>Cloud Platform Engineering</strong>, and <strong>DevSecOps</strong>. Have an engineering opening or project in mind? My inbox is always open.
        </p>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          
          {/* Email Card */}
          <div className="dev-card rounded-2xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block">Direct Email</span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm font-bold text-slate-100 hover:text-sky-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-white/[0.06] transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="dev-card rounded-2xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block">Phone / WhatsApp</span>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="font-mono text-sm font-bold text-slate-100 hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-white/[0.06] transition-colors"
              title="Copy phone number"
            >
              {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            </button>
          </div>

        </div>

        {/* Action Buttons & Socials */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-mono text-sm font-semibold shadow-lg shadow-sky-600/30 transition-all hover:scale-105"
          >
            <Send size={16} />
            <span>Send Email</span>
          </a>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-mono text-sm font-medium border border-white/[0.08] transition-all"
          >
            <Eye size={16} className="text-emerald-400" />
            <span>Preview Resume</span>
          </button>

          <a
            href={personalInfo.resumeDownloadUrl}
            download="Ankush_Prajapati_Resume.pdf"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-mono text-sm border border-white/[0.06] transition-all"
          >
            <Download size={16} />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-sky-400 transition-colors"
          >
            <FaGithub size={18} />
            <span>github.com/ankushp965</span>
          </a>

          <span className="text-slate-700 hidden sm:inline">&bull;</span>

          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-sky-400 transition-colors"
          >
            <FaLinkedin size={18} />
            <span>linkedin.com/in/ankushp965</span>
          </a>

          <span className="text-slate-700 hidden sm:inline">&bull;</span>

          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin size={15} />
            <span>{personalInfo.location}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
