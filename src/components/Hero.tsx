import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Eye, 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  GitBranch, 
  Activity, 
  CheckCircle2, 
  RefreshCw 
} from 'lucide-react';
import { FaAws } from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [hudTab, setHudTab] = useState<'cluster' | 'security' | 'telemetry'>('cluster');
  const [simulatedPing, setSimulatedPing] = useState(14);
  const [uptimeSeconds, setUptimeSeconds] = useState(14820);

  useEffect(() => {
    const timer = setInterval(() => {
      setSimulatedPing(Math.floor(12 + Math.random() * 5));
      setUptimeSeconds(prev => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden dev-grid-bg">
      {/* Minimal Monochrome Radial Fade Mask */}
      <div className="absolute inset-0 bg-[#030407]/80 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Modern Developer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Large, Beautiful Status Pill with High-Visibility Glowing Icon */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
              </span>
              <span className="font-semibold tracking-wide">
                {personalInfo.statusBadge.text}
              </span>
              <span className="text-emerald-500/60 hidden sm:inline">&bull; Full-Time</span>
            </div>

            {/* Terminal Command Line Sub-Prompt */}
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400/90 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-lg w-fit">
              <span className="text-emerald-400">➜</span>
              <span className="text-slate-400">ankush@cloud-node:~$</span>
              <span className="text-slate-200">terraform apply --auto-approve</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.08] mb-3">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-lg sm:text-2xl font-bold font-mono text-slate-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                  {personalInfo.role}
                </span>
                <span className="text-slate-600 hidden sm:inline">&bull;</span>
                <span className="text-slate-400 text-base sm:text-lg font-normal">
                  Cloud Platform &amp; DevSecOps
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans max-w-2xl">
              Automating resilient <strong>AWS infrastructure</strong> with <strong>Terraform</strong>, enforcing declarative <strong>GitOps (Argo CD)</strong> continuous delivery, and engineering <strong>cloud-native Kubernetes</strong> platforms with progressive canary rollouts and shift-left <strong>DevSecOps</strong> security gates.
            </p>

            {/* Quick Tech Badge Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#090a0f] border border-white/[0.08] text-zinc-200 font-mono text-xs">
                <FaAws size={14} className="text-amber-400" /> AWS Cloud
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#090a0f] border border-white/[0.08] text-zinc-200 font-mono text-xs">
                <SiTerraform size={14} className="text-sky-400" /> Terraform
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#090a0f] border border-white/[0.08] text-zinc-200 font-mono text-xs">
                <SiKubernetes size={14} className="text-sky-400" /> Kubernetes (EKS)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#090a0f] border border-white/[0.08] text-zinc-200 font-mono text-xs">
                <GitBranch size={14} className="text-emerald-400" /> Argo CD GitOps
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#090a0f] border border-white/[0.08] text-zinc-200 font-mono text-xs">
                <ShieldCheck size={14} className="text-emerald-400" /> DevSecOps Gates
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={() => scrollTo('architecture')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono text-sm font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Server size={16} />
                <span>View Architecture</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => scrollTo('terminal-console')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#090a0f] hover:bg-zinc-800 text-zinc-200 hover:text-white font-mono text-sm font-medium border border-white/[0.08] transition-all"
              >
                <Terminal size={17} className="text-sky-400" />
                <span>DevOps Console</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#090a0f]/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-sm font-medium border border-white/[0.06] transition-colors"
              >
                <Eye size={16} className="text-emerald-400" />
                <span>Preview Resume</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE CLOUD INFRASTRUCTURE HUD CARD */}
          <div className="lg:col-span-5">
            <div className="dev-card rounded-2xl overflow-hidden shadow-2xl relative">
              
              {/* HUD Window Header */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-300 ml-2 flex items-center gap-1.5">
                    <Activity size={13} className="text-emerald-400" />
                    LIVE INFRASTRUCTURE HUD
                  </span>
                </div>
                
                <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{simulatedPing}ms</span>
                </div>
              </div>

              {/* HUD Navigation Tabs */}
              <div className="px-4 py-2 bg-slate-950/60 border-b border-white/[0.06] flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setHudTab('cluster')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    hudTab === 'cluster'
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  EKS Cluster
                </button>
                <button
                  onClick={() => setHudTab('security')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    hudTab === 'security'
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  DevSecOps Gates
                </button>
                <button
                  onClick={() => setHudTab('telemetry')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    hudTab === 'telemetry'
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Telemetry Feed
                </button>
              </div>

              {/* HUD Content Area */}
              <div className="p-5 font-mono text-xs space-y-4 min-h-[280px]">
                
                {hudTab === 'cluster' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                      <span>AWS Region</span>
                      <span className="text-slate-200 font-semibold">ap-south-1 (Mumbai)</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                      <span>Kubernetes Engine</span>
                      <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                        <SiKubernetes size={13} /> EKS v1.31 Spot Worker Nodes
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                      <span>GitOps Continuous Delivery</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 size={13} /> Argo CD Synced (HEAD)
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                      <span>Progressive Canary Deployments</span>
                      <span className="text-emerald-400 font-semibold">Active (Argo Rollouts + Prometheus)</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>System Uptime</span>
                      <span className="text-slate-200 font-semibold">{uptimeSeconds}s (99.99%)</span>
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                      <span className="text-sky-400 font-semibold block mb-1">&gt; Active Topology:</span>
                      AWS VPC (Public/Private) &bull; EKS 1.31 Spot Nodes &bull; Argo Rollouts &bull; Kyverno CEL Guardrails
                    </div>
                  </div>
                )}

                {hudTab === 'security' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-400" />
                        <span className="text-slate-200">SAST (SonarQube &amp; Bandit)</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">PASSED (0 Bugs)</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-400" />
                        <span className="text-slate-200">SCA (pip-audit &amp; Trivy)</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">0 Critical CVEs</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-400" />
                        <span className="text-slate-200">DAST (OWASP ZAP)</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">PASSED</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-400" />
                        <span className="text-slate-200">EC2 Health-Check Gate</span>
                      </div>
                      <span className="text-emerald-400 font-semibold">HTTP 200 OK</span>
                    </div>
                  </div>
                )}

                {hudTab === 'telemetry' && (
                  <div className="space-y-2 text-[11px] font-mono leading-relaxed text-slate-300">
                    <div className="text-slate-500">[2026-11-15 00:45:12Z] CloudWatch agent connected.</div>
                    <div className="text-emerald-400">[OK] Prometheus scraping 12 targets in production.</div>
                    <div className="text-sky-300">[INFO] Argo CD synced revision c27e8a1 to cluster.</div>
                    <div className="text-emerald-400">[OK] Multi-AZ RDS MySQL replication latency: 0.2ms.</div>
                    <div className="text-slate-400">[TELEMETRY] CloudWatch Agent custom metrics (CPU, RAM, Disk) published.</div>
                    <div className="text-emerald-400">[READY] LangGraph troubleshooting webhook listener active.</div>
                  </div>
                )}

              </div>

              {/* HUD Window Footer */}
              <div className="px-5 py-2.5 bg-slate-950/80 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-slate-500">Node: worker-ap-south-1a</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <RefreshCw size={11} className="animate-spin" /> Live Stream
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
