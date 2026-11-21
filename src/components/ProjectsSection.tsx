import React from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Zap, 
  ArrowUpRight,
  ShieldCheck,
  Terminal,
  Activity,
  Clock,
  Server,
  ShieldAlert
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
              <span>CLOUD-NATIVE ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">
              Featured DevOps Projects
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-sans">
            Cloud-native Kubernetes platforms, GitOps progressive delivery, and policy guardrails.
          </p>
        </div>

        {/* 1. FLAGSHIP FEATURED PROJECT: FinTech Cloud-Native Payment Platform */}
        <div className="dev-card border-2 border-sky-500/40 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Top Bar: Badges, Date & GitHub Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
                FLAGSHIP PROJECT
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Demo-scale project
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800/80 text-slate-300 border border-white/[0.08] flex items-center gap-1.5">
                <Clock size={12} className="text-sky-400" />
                {featuredProject.date || 'November 2026'}
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

          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 font-mono mb-2">
            {featuredProject.title}
          </h3>
          <p className="text-base sm:text-lg font-mono text-sky-400 mb-6">
            {featuredProject.subtitle || featuredProject.tagline}
          </p>

          {/* Executive Summary */}
          {featuredProject.executiveSummary && (
            <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#060813] border border-sky-500/20 text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-2">
                <Layers size={14} />
                Executive Summary
              </div>
              <p>{featuredProject.executiveSummary}</p>
            </div>
          )}

          {/* 4 Exact Metric Cards */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Activity size={14} className="text-emerald-400" />
                Empirical Test Benchmarks &amp; Efficiency
              </h4>
              <span className="text-[11px] font-mono text-slate-500">Live Infrastructure Measurements</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Metric 1 */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-500/60 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>Availability</span>
                    <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-bold">k6 (50 VUs)</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400 mb-1">
                    1,632/1,632
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-200 mb-2">
                    Payment Transactions Succeeded
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    100% transaction availability during 1m50s k6 load ramp.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-white/[0.06] text-[11px] font-mono text-amber-300/90 leading-snug">
                  Note: p95 latency was 2.41s, exceeding the 500ms SLO target likely due to a local kubectl port-forward tunnel (SPDY connection multiplexing bottleneck, not verified with ALB re-test before teardown).
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-sky-500/30 flex flex-col justify-between hover:border-sky-500/60 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>Canary Strategy</span>
                    <span className="text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded text-[10px] font-bold">Argo Rollouts</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-sky-400 mb-1">
                    Auto-Abort
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-200 mb-2">
                    Prometheus 500 Error Guardrail
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    25% &rarr; 50% &rarr; 100% traffic progression with 30s pause steps. Zero manual intervention required.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 leading-snug">
                  Prometheus AnalysisTemplate queried HTTP 500 error rate every 10s and automatically aborted rollout in ~20s upon simulated error injection.
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-purple-500/30 flex flex-col justify-between hover:border-purple-500/60 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>Worker Compute</span>
                    <span className="text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded text-[10px] font-bold">AWS Spot Nodes</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-purple-400 mb-1">
                    ~60% Savings
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-200 mb-2">
                    Estimated EC2 Compute Savings
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    2x c7i-flex.large Spot worker nodes vs On-Demand list rates.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 leading-snug">
                  ~$52.56/mo Spot vs ~$131.10/mo On-Demand list pricing for AWS ap-south-1 Mumbai; Spot rates vary dynamically.
                </div>
              </div>

              {/* Metric 4 */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-teal-500/30 flex flex-col justify-between hover:border-teal-500/60 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>Vulnerability Audit</span>
                    <span className="text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded text-[10px] font-bold">pip-audit</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-teal-400 mb-1">
                    14 CVEs
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-200 mb-2">
                    Starlette Vulnerabilities Patched
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                    Identified by pip-audit in CI and patched across all services.
                  </p>
                </div>
                <div className="pt-2.5 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 leading-snug">
                  Patched by pinning fastapi&gt;=0.115.0 and starlette&gt;=1.1.0. Trivy container scan ran in reporting mode (exit-code: 0, does not block CI).
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Diagram Flow Component */}
          <div className="mb-10 p-6 rounded-2xl bg-slate-950/90 border border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/[0.06]">
              <div>
                <h4 className="font-mono text-sm font-bold text-white flex items-center gap-2">
                  <Server size={16} className="text-sky-400" />
                  Cloud Infrastructure &amp; Progressive Delivery Architecture
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Multi-service payment topology on AWS EKS 1.31 orchestrated by Argo CD &amp; Argo Rollouts.
                </p>
              </div>
              <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/30 self-start sm:self-auto">
                AWS ap-south-1 (Mumbai)
              </span>
            </div>

            {/* Visual Topology Diagram Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Step 1: IaC & Network */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-sky-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-sky-400 font-bold uppercase tracking-wider">01. Provisioning</span>
                    <span className="text-[10px] font-mono text-slate-400">Terraform IaC</span>
                  </div>
                  <h5 className="font-mono text-sm font-bold text-white mb-2">VPC &amp; Spot Compute</h5>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    <li>&bull; VPC (10.0.0.0/16)</li>
                    <li>&bull; Public / Private subnets</li>
                    <li>&bull; Single NAT Gateway</li>
                    <li>&bull; 2x c7i-flex.large Spot nodes</li>
                    <li>&bull; S3 + DynamoDB remote state</li>
                  </ul>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-500">
                  Base Cloud Fabric
                </div>
              </div>

              {/* Step 2: GitOps Engine */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">02. GitOps Delivery</span>
                    <span className="text-[10px] font-mono text-slate-400">In-Cluster Argo CD</span>
                  </div>
                  <h5 className="font-mono text-sm font-bold text-white mb-2">Declarative Sync</h5>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    <li>&bull; Helm v3 Chart packages</li>
                    <li>&bull; Automated sync to payments ns</li>
                    <li>&bull; Git repository as single truth</li>
                    <li>&bull; 3 Private AWS ECR repos</li>
                    <li>&bull; GitHub Actions CI gates</li>
                  </ul>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-500">
                  Continuous Reconciliation
                </div>
              </div>

              {/* Step 3: Microservices & Rollouts */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">03. Workloads</span>
                    <span className="text-[10px] font-mono text-slate-400">Argo Rollouts</span>
                  </div>
                  <h5 className="font-mono text-sm font-bold text-white mb-2">Canary &amp; Storage</h5>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    <li>&bull; payment-api (Canary 25/50/100)</li>
                    <li>&bull; ledger microservice</li>
                    <li>&bull; notification microservice</li>
                    <li>&bull; PostgreSQL 15 (Recreate strategy)</li>
                    <li>&bull; psycopg2-binary driver fix</li>
                  </ul>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-500">
                  FastAPI + PostgreSQL
                </div>
              </div>

              {/* Step 4: Guardrails & Metrics */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-rose-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-rose-400 font-bold uppercase tracking-wider">04. Guardrails</span>
                    <span className="text-[10px] font-mono text-slate-400">Prometheus &amp; Kyverno</span>
                  </div>
                  <h5 className="font-mono text-sm font-bold text-white mb-2">Automated Abort &amp; CEL</h5>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    <li>&bull; AnalysisTemplate 500 query</li>
                    <li>&bull; 10s scrape, failureLimit: 2</li>
                    <li>&bull; Kyverno disallow :latest tag</li>
                    <li>&bull; Kyverno non-root policy</li>
                    <li>&bull; Mandatory CPU/memory limits</li>
                  </ul>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-500">
                  Admission &amp; SRE Guardrails
                </div>
              </div>
            </div>

            {/* Architecture Flow Summary Ribbon */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] flex items-center gap-3 font-mono text-xs text-slate-300">
              <span className="text-sky-400 font-semibold flex-shrink-0">&gt; Data Flow:</span>
              <span className="overflow-x-auto whitespace-nowrap">
                k6 Load (50 VUs) &rarr; Ingress &rarr; Argo Rollouts (payment-api 25% / 50% / 100%) &rarr; Ledger &amp; Notification &rarr; PostgreSQL 15 | Prometheus 10s analysis auto-aborts on 500 error spike
              </span>
            </div>
          </div>

          {/* Problem vs Solution Breakdown */}
          <div className="mb-10">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <ShieldCheck size={14} className="text-sky-400" />
              Problem vs. Solution Engineering Breakdown
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/[0.06]">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold mb-2">
                  <ShieldAlert size={15} />
                  <span>The Risk</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                  Deploying microservice updates directly to full traffic risks pushing faulty revisions, causing transaction dropouts and database state corruption.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-2 pt-3 border-t border-white/[0.06]">
                  <CheckCircle2 size={15} />
                  <span>The Solution</span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Argo Rollouts progressive canary steps (25% &rarr; 50% &rarr; 100%) paired with Prometheus AnalysisTemplates that halt traffic and abort if HTTP 500 errors spike.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/[0.06]">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold mb-2">
                  <ShieldAlert size={15} />
                  <span>The Risk</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                  Manual cluster configurations risk runtime drifts, unvetted privileged containers, unbounded memory consumption, and untracked :latest image tags.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-2 pt-3 border-t border-white/[0.06]">
                  <CheckCircle2 size={15} />
                  <span>The Solution</span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Argo CD in-cluster GitOps keeps state aligned with Helm manifests, while Kyverno CEL ValidatingPolicies in enforce mode block unvetted specs and mandate resource limits.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/[0.06]">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold mb-2">
                  <ShieldAlert size={15} />
                  <span>The Risk</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                  Running standard On-Demand compute nodes for temporary load benchmarking and infrastructure validation inflates operational cloud cost.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-2 pt-3 border-t border-white/[0.06]">
                  <CheckCircle2 size={15} />
                  <span>The Solution</span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Provisioned 2x c7i-flex.large Spot worker nodes via Terraform, reducing compute run costs by ~60% vs On-Demand list rates in ap-south-1 Mumbai.
                </p>
              </div>
            </div>
          </div>

          {/* Real Challenges Solved (Deep Engineering Debugging) */}
          <div className="mb-10">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Terminal size={14} className="text-sky-400" />
              Technical Challenges Solved During Implementation
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Challenge 1 */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/[0.08] hover:border-sky-500/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30">
                    Database Driver
                  </span>
                  <span className="text-xs font-mono text-slate-500">CrashLoopBackOff</span>
                </div>
                <h5 className="font-mono text-sm font-bold text-slate-100 mb-2">
                  SQLAlchemy 2.0 / psycopg v3 Pod Crash
                </h5>
                <div className="space-y-2 text-xs font-sans">
                  <p className="text-slate-400">
                    <strong className="text-slate-200 font-mono">Issue: </strong>
                    SQLAlchemy 2.0 defaulted to psycopg v3, which crashed pods on initialization due to missing binary C extensions in lightweight container environments.
                  </p>
                  <p className="text-emerald-400">
                    <strong className="text-slate-200 font-mono">Resolution: </strong>
                    Explicitly declared the <code className="bg-slate-900 px-1 py-0.5 rounded text-emerald-300">postgresql+psycopg2</code> dialect in connection strings across all microservices, restoring stable initialization.
                  </p>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/[0.08] hover:border-sky-500/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                    Kubernetes Storage
                  </span>
                  <span className="text-xs font-mono text-slate-500">Volume Lock Conflict</span>
                </div>
                <h5 className="font-mono text-sm font-bold text-slate-100 mb-2">
                  PostgreSQL RollingUpdate Storage Conflict
                </h5>
                <div className="space-y-2 text-xs font-sans">
                  <p className="text-slate-400">
                    <strong className="text-slate-200 font-mono">Issue: </strong>
                    Standard RollingUpdate deployment strategy attempted to start a replacement pod before shutting down the existing pod, causing PersistentVolume locks and port 5432 contention.
                  </p>
                  <p className="text-emerald-400">
                    <strong className="text-slate-200 font-mono">Resolution: </strong>
                    Reconfigured the Postgres deployment strategy to <code className="bg-slate-900 px-1 py-0.5 rounded text-emerald-300">Recreate</code>, guaranteeing the old pod terminates and releases volume locks first.
                  </p>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/[0.08] hover:border-sky-500/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
                    Admission Policy
                  </span>
                  <span className="text-xs font-mono text-slate-500">Kyverno CEL Violation</span>
                </div>
                <h5 className="font-mono text-sm font-bold text-slate-100 mb-2">
                  PostgreSQL Root Startup vs Kyverno Policy
                </h5>
                <div className="space-y-2 text-xs font-sans">
                  <p className="text-slate-400">
                    <strong className="text-slate-200 font-mono">Issue: </strong>
                    Postgres official container requires initial root execution (UID 0) to initialize data directory permissions before dropping privileges, triggering admission rejection under Kyverno non-root policy.
                  </p>
                  <p className="text-emerald-400">
                    <strong className="text-slate-200 font-mono">Resolution: </strong>
                    Configured a scoped Kyverno admission exemption specifically targeting <code className="bg-slate-900 px-1 py-0.5 rounded text-emerald-300">app: postgres</code> while keeping non-root enforcement strict on all microservices.
                  </p>
                </div>
              </div>
            </div>
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

        {/* 2. OTHER PRODUCTION PLATFORMS */}
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
