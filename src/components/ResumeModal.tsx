import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="bg-[#090a0f] border border-white/[0.1] rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#05060a] border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-white/[0.05] text-white">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-white">
                {personalInfo.name} — DevOps Resume
              </h3>
              <p className="font-mono text-[11px] text-zinc-400">
                PDF Preview &bull; Verified Production Telemetry
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Direct Download Button */}
            <a
              href={personalInfo.resumeDownloadUrl}
              download="Ankush_Prajapati_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold shadow-sm transition-colors"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            {/* Open in New Window */}
            <a
              href={personalInfo.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs border border-white/[0.08] transition-colors"
              title="Open in new tab"
            >
              <ExternalLink size={13} />
              <span>Full Tab</span>
            </a>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Frame */}
        <div className="flex-grow bg-slate-900 w-full relative overflow-hidden flex flex-col">
          <iframe
            src={personalInfo.resumeDownloadUrl}
            className="w-full h-full border-none bg-white"
            title={`${personalInfo.name} Resume`}
          />
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-5 py-2.5 bg-[#05060a] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>Targeting: DevOps, Cloud Platform &amp; DevSecOps Engineering Roles</span>
          <button
            onClick={onClose}
            className="hover:text-zinc-200 transition-colors"
          >
            Press ESC or click close
          </button>
        </div>

      </div>
    </div>
  );
};

