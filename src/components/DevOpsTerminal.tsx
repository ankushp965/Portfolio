import React, { useState } from 'react';
import { 
  Terminal as TerminalIcon, 
  GitMerge, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export const DevOpsTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'pipeline'>('terminal');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // Terminal state
  const [currentInput, setCurrentInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string | string[] }>>([
    {
      command: 'kubectl get pods -n payments',
      output: [
        "NAME                                    READY   STATUS    RESTARTS   AGE",
        "payment-api-7b89d494f6-82xkz            1/1     Running   0          2d4h",
        "ledger-684f88bdc6-n9wql                 1/1     Running   0          2d4h",
        "notification-5975dbb9cf-v72pm           1/1     Running   0          2d4h",
        "postgres-5d46fb7476-q8rm9               1/1     Running   0          2d4h",
        "argo-rollouts-747f485db-xkdls           1/1     Running   0          18d",
        "prometheus-server-5d6cbdf54-mk89q       2/2     Running   0          18d"
      ]
    }
  ]);

  // Pipeline step active state
  const [selectedPipelineStep, setSelectedPipelineStep] = useState<number>(2);

  const pipelineStages = [
    {
      step: 1,
      title: "1. Code Push & Lint",
      tool: "GitHub Actions + Flake8",
      description: "Triggered on push/PR to main. Flake8 enforces Python PEP 8 compliance and catches syntax errors before build.",
      gate: "Passing Lint Check",
      color: "border-sky-500 text-sky-400 bg-sky-500/10"
    },
    {
      step: 2,
      title: "2. SAST Security Gate",
      tool: "SonarQube & Bandit",
      description: "Deep static application security testing scanning for hardcoded secrets, SQL injections, insecure deserialization, and anti-patterns.",
      gate: "Quality Gate: 0 Critical / 0 High",
      color: "border-emerald-500 text-emerald-400 bg-emerald-500/10"
    },
    {
      step: 3,
      title: "3. SCA Dependency Scan",
      tool: "pip-audit & Trivy",
      description: "Scans third-party Python packages and container base images against CVE vulnerability databases.",
      gate: "Vulnerability Threshold < CVSS 7.0",
      color: "border-purple-500 text-purple-400 bg-purple-500/10"
    },
    {
      step: 4,
      title: "4. Build & Push ECR",
      tool: "Docker + AWS ECR",
      description: "Multi-stage Docker build producing lightweight runtime images tagged with Git SHA, pushed securely to private AWS ECR.",
      gate: "Image Digest Verification",
      color: "border-amber-500 text-amber-400 bg-amber-500/10"
    },
    {
      step: 5,
      title: "5. GitOps / Deploy",
      tool: "Argo CD & SSH Gate",
      description: "Argo CD synchronizes declarative Helm manifests to AWS EKS cluster, or SSH deploy with automated health-check polling.",
      gate: "HTTP 200 /healthz Polling Gate",
      color: "border-teal-500 text-teal-400 bg-teal-500/10"
    },
    {
      step: 6,
      title: "6. DAST Dynamic Test",
      tool: "OWASP ZAP",
      description: "Automated dynamic runtime security scanning against deployed endpoints checking for header misconfigurations and XSS/CORS vulnerabilities.",
      gate: "DAST Scan Report: Passed",
      color: "border-rose-500 text-rose-400 bg-rose-500/10"
    },
    {
      step: 7,
      title: "7. SRE Telemetry",
      tool: "CloudWatch & Prometheus",
      description: "CloudWatch custom metrics (5-min intervals) with SNS email alarms, and Prometheus scraping canary metrics for Argo Rollouts AnalysisTemplates.",
      gate: "Prometheus Canary Evaluation",
      color: "border-indigo-500 text-indigo-400 bg-indigo-500/10"
    }
  ];

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setTerminalHistory([]);
      setCurrentInput('');
      return;
    }

    const matched = terminalCommands.find(
      c => c.command.toLowerCase().includes(trimmed.toLowerCase()) || trimmed.toLowerCase().includes(c.command.toLowerCase().split(' ')[0])
    );

    let outputResult: string | string[];

    if (matched) {
      outputResult = matched.output;
    } else if (trimmed.toLowerCase() === 'help') {
      outputResult = [
        "Available commands:",
        "  • kubectl get pods -n payments",
        "  • terraform plan -target=module.aws_infrastructure",
        "  • argocd app get fintech-payment-platform-eks",
        "  • trivy image ankush/payment-api:latest",
        "  • cloudwatch get-alarm-history --alarm-name HighCPUAlert",
        "  • clear"
      ];
    } else {
      outputResult = `command not found: ${trimmed}. Type 'help' or click the quick command pills below.`;
    }

    setTerminalHistory(prev => [...prev, { command: trimmed, output: outputResult }]);
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(currentInput);
    }
  };

  const copyCommandOutput = (text: string | string[], index: number) => {
    const stringified = Array.isArray(text) ? text.join('\n') : text;
    navigator.clipboard.writeText(stringified);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="terminal-console" className="py-24 relative overflow-hidden dev-grid-bg">
      {/* Background Mask */}
      <div className="absolute inset-0 bg-[#030407]/90 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] text-emerald-400 font-mono text-xs font-semibold border border-white/[0.08] mb-2">
              <Sparkles size={13} className="text-emerald-400" />
              <span>LIVE CLI &amp; RUNTIME ENVIRONMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono">
              DevOps Terminal Console
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-white/[0.08] self-start sm:self-auto font-mono text-xs shadow-lg">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'terminal'
                  ? 'bg-sky-600 text-white font-semibold shadow-md shadow-sky-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TerminalIcon size={14} />
              <span>Interactive CLI</span>
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-sky-600 text-white font-semibold shadow-md shadow-sky-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GitMerge size={14} />
              <span>DevSecOps Flow</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE TERMINAL */}
        {activeTab === 'terminal' && (
          <div className="dev-card rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08]">
            {/* Terminal Window Top Bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-900/90 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
                <span className="ml-2 font-mono text-xs text-slate-300 font-medium">
                  ankush@aws-control-plane: ~ (zsh)
                </span>
              </div>
              <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
                <span className="hidden sm:inline text-slate-500">AWS: ap-south-1</span>
                <button
                  onClick={() => setTerminalHistory([])}
                  className="flex items-center gap-1 hover:text-slate-200 transition-colors"
                  title="Clear Console"
                >
                  <RotateCcw size={12} />
                  <span>clear</span>
                </button>
              </div>
            </div>

            {/* Quick Command Pills */}
            <div className="p-3.5 bg-slate-950/70 border-b border-white/[0.06] flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-slate-500 mr-1">Suggested commands:</span>
              {terminalCommands.filter(c => c.command !== 'help').map((cmd) => (
                <button
                  key={cmd.command}
                  onClick={() => handleRunCommand(cmd.command)}
                  className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-slate-700/60 hover:border-sky-500/40 transition-all flex items-center gap-1.5"
                >
                  <ChevronRight size={11} className="text-sky-400" />
                  <span>{cmd.command.split(' ')[0]} {cmd.command.split(' ')[1]}</span>
                </button>
              ))}
            </div>

            {/* Terminal Screen & History */}
            <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm min-h-[360px] max-h-[500px] overflow-y-auto space-y-5 bg-[#050811]/90">
              <div className="text-slate-500 text-xs pb-2 border-b border-white/[0.04]">
                Type commands in the input below, or click any of the suggested commands above to inspect real AWS, Kubernetes, Terraform, or Trivy outputs.
              </div>

              {terminalHistory.map((item, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex items-center justify-between text-sky-400">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">➜</span>
                      <span className="text-slate-500">~</span>
                      <span className="text-slate-100 font-semibold">{item.command}</span>
                    </div>
                    <button
                      onClick={() => copyCommandOutput(item.output, index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200"
                      title="Copy output"
                    >
                      {copiedIndex === index ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    </button>
                  </div>

                  <div className="pl-4 text-slate-300 leading-relaxed font-mono">
                    {Array.isArray(item.output) ? (
                      item.output.map((line, idx) => (
                        <div 
                          key={idx} 
                          className={
                            line.includes('Running') || line.includes('Synced') || line.includes('PASSED') || line.includes('Healthy')
                              ? 'text-emerald-400'
                              : line.includes('Plan:') || line.includes('+ resource')
                              ? 'text-sky-300'
                              : line.includes('WARN') || line.includes('Threshold')
                              ? 'text-amber-400'
                              : 'text-slate-300'
                          }
                        >
                          {line}
                        </div>
                      ))
                    ) : (
                      <div>{item.output}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Active Command Input Line */}
              <div className="flex items-center gap-2 text-sky-400 pt-3">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-slate-500">~</span>
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'kubectl get pods' or 'terraform plan' and press Enter..."
                  className="flex-grow bg-transparent text-slate-100 outline-none font-mono text-xs sm:text-sm placeholder:text-slate-600"
                />
                <button
                  onClick={() => handleRunCommand(currentInput)}
                  className="px-2.5 py-1 rounded bg-sky-600/30 hover:bg-sky-600/60 text-sky-300 border border-sky-500/30 text-xs flex items-center gap-1"
                >
                  <Play size={11} /> Run
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VISUAL DEVSECOPS PIPELINE */}
        {activeTab === 'pipeline' && (
          <div className="dev-card rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/[0.08]">
            <div className="mb-8">
              <h3 className="font-mono text-xl font-bold text-slate-100 flex items-center gap-2.5">
                <ShieldCheck className="text-emerald-400" />
                Shift-Left DevSecOps Continuous Delivery Pipeline
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl font-sans">
                Interactive blueprint of the production automated security gates and deployment pipeline. Click any stage to inspect tools, scan parameters, and deployment gates.
              </p>
            </div>

            {/* Pipeline Stage Chips / Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {pipelineStages.map((stage) => (
                <button
                  key={stage.step}
                  onClick={() => setSelectedPipelineStep(stage.step)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedPipelineStep === stage.step
                      ? `${stage.color} ring-2 ring-sky-400/40 shadow-lg scale-[1.02]`
                      : 'bg-slate-900/60 border-white/[0.06] text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="font-mono text-[11px] font-bold text-slate-400 mb-1">
                    Step {stage.step}
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-200 line-clamp-1">
                    {stage.title.split('. ')[1]}
                  </div>
                  <div className="mt-2 text-[10px] text-slate-500 font-mono">
                    {stage.tool.split(' ')[0]}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Stage Detail Card */}
            {(() => {
              const current = pipelineStages.find(s => s.step === selectedPipelineStep) || pipelineStages[1];
              return (
                <div className="bg-slate-900/90 border border-white/[0.08] rounded-xl p-6 font-mono shadow-inner">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-base font-bold text-sky-400 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      Stage Detail: {current.title}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {current.gate}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    {current.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-slate-500">Security &amp; Automation Tooling:</span>
                    <span className="px-3 py-1 rounded-md bg-slate-800 text-sky-300 border border-slate-700/80 font-semibold">
                      {current.tool}
                    </span>
                  </div>
                </div>
              );
            })()}

          </div>
        )}

      </div>
    </section>
  );
};
