import React, { useState } from 'react';
import { 
  GitBranch, 
  ShieldCheck, 
  Layers, 
  Cloud, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';
import { FaAws } from 'react-icons/fa';
import { SiKubernetes, SiDocker, SiPrometheus, SiNginx, SiMysql } from 'react-icons/si';

interface ArchNode {
  id: string;
  name: string;
  layer: 'ingress' | 'compute' | 'data' | 'healing';
  service: string;
  icon: React.ElementType;
  description: string;
  security: string;
  codeSnippet: string;
}

const archNodes: ArchNode[] = [
  {
    id: 'vpc',
    name: 'AWS VPC & Multi-AZ Subnets',
    layer: 'ingress',
    service: 'Networking (VPC 10.0.0.0/16)',
    icon: FaAws,
    description: 'Custom AWS VPC with public and private subnets distributed across ap-south-1a and ap-south-1b with dedicated route tables and NAT Gateway.',
    security: 'Isolated private subnets with no direct public internet ingress.',
    codeSnippet: 'resource "aws_vpc" "main" {\n  cidr_block           = "10.0.0.0/16"\n  enable_dns_hostnames = true\n}'
  },
  {
    id: 'alb',
    name: 'ALB & Nginx Reverse Proxy',
    layer: 'ingress',
    service: 'Ingress & TLS Termination',
    icon: SiNginx,
    description: 'Internet-facing Application Load Balancer routing encrypted HTTPS traffic to Nginx reverse proxy containers with SSL offloading.',
    security: 'AWS WAF rate limiting and TLS 1.3 encryption in transit.',
    codeSnippet: 'upstream api_backend {\n  server 10.0.2.45:8000;\n  keepalive 32;\n}'
  },
  {
    id: 'eks',
    name: 'AWS EKS Managed Cluster',
    layer: 'compute',
    service: 'Kubernetes v1.30',
    icon: SiKubernetes,
    description: 'Highly available Kubernetes control plane with EC2 managed worker nodes running microservices and automated replica scaling.',
    security: 'IAM Roles for Service Accounts (IRSA) enforcing least-privilege pod permissions.',
    codeSnippet: 'module "eks" {\n  source       = "terraform-aws-modules/eks/aws"\n  cluster_name = "production-eks"\n}'
  },
  {
    id: 'argocd',
    name: 'Argo CD (GitOps Engine)',
    layer: 'compute',
    service: 'Continuous Delivery',
    icon: GitBranch,
    description: 'Declarative GitOps controller monitoring Git repository releases and automatically reconciling Kubernetes cluster state with Helm charts.',
    security: 'Zero write credentials on developers local machines; Git is single source of truth.',
    codeSnippet: 'apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: production-workloads'
  },
  {
    id: 'rds',
    name: 'Multi-AZ Encrypted RDS MySQL',
    layer: 'data',
    service: 'Relational Database',
    icon: SiMysql,
    description: 'Multi-AZ MySQL instance with synchronous standby replication, automatic failover, and automated daily snapshots.',
    security: 'KMS-encrypted storage at rest; reachable strictly from application security group in private subnets.',
    codeSnippet: 'resource "aws_db_instance" "mysql" {\n  multi_az          = true\n  storage_encrypted = true\n}'
  },
  {
    id: 'ecr',
    name: 'AWS ECR Container Registry',
    layer: 'data',
    service: 'Docker Image Repository',
    icon: SiDocker,
    description: 'Secure, private container registry with vulnerability image scanning on push and immutable image tags for deterministic rollouts.',
    security: 'KMS encryption, IAM token authentication, and automatic lifecycle purge policies.',
    codeSnippet: 'resource "aws_ecr_repository" "repo" {\n  image_tag_mutability = "IMMUTABLE"\n}'
  },
  {
    id: 'selfhealing',
    name: 'LangGraph Self-Healing Agent',
    layer: 'healing',
    service: 'Autonomous Remediation',
    icon: Cpu,
    description: 'Alertmanager triggers a FastAPI webhook to a LangGraph troubleshooting agent upon CrashLoopBackOff or OOMKilled events to diagnose logs and initiate automated Helm rollback or pod restart.',
    security: 'Scoped Kubernetes RBAC permissions limited to deployment restarts and rollback.',
    codeSnippet: 'def remediate_incident(state: ClusterState):\n  if state.crash_count > 3:\n    execute_helm_rollback(release="api")'
  },
  {
    id: 'prometheus',
    name: 'Prometheus & Alertmanager',
    layer: 'healing',
    service: 'Cluster SRE Observability',
    icon: SiPrometheus,
    description: 'Full cluster telemetry scraping cAdvisor and application metrics with custom alert rules routing critical incident payloads to webhooks and Slack.',
    security: 'Alert rules with hysteresis intervals preventing alert fatigue.',
    codeSnippet: '- alert: PodCrashLooping\n  expr: rate(kube_pod_container_status_restarts_total[5m]) > 0'
  }
];

export const ArchitectureDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'pipeline'>('architecture');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('selfhealing');

  const selectedNode = archNodes.find(n => n.id === selectedNodeId) || archNodes[6];

  const pipelineSteps = [
    {
      id: 1,
      title: "1. Git Push",
      tool: "GitHub Actions",
      type: "Trigger",
      badge: "Main Branch",
      desc: "Developer pushes commit or opens PR. Webhook triggers automated CI workflow.",
      detail: "Runs on Ubuntu-latest with secrets managed via GitHub Actions Secrets."
    },
    {
      id: 2,
      title: "2. Code Quality",
      tool: "Flake8",
      type: "Linting",
      badge: "PEP 8 Verified",
      desc: "Enforces coding style, imports sanity, and catches syntax errors before containerization.",
      detail: "flake8 src/ --max-line-length=100 --exclude=venv"
    },
    {
      id: 3,
      title: "3. SAST Scan",
      tool: "SonarQube & Bandit",
      type: "Static Security",
      badge: "Quality Gate: 0 Bugs",
      desc: "Static application security testing scanning for hardcoded keys, injection vectors, and anti-patterns.",
      detail: "sonar-scanner -Dsonar.projectKey=platform && bandit -r src/"
    },
    {
      id: 4,
      title: "4. SCA Dependency",
      tool: "pip-audit & Trivy",
      type: "Vulnerability Scan",
      badge: "0 Critical CVEs",
      desc: "Checks Python dependencies against PyPI advisory database and base image against CVE registries.",
      detail: "pip-audit --desc on && trivy image --severity HIGH,CRITICAL"
    },
    {
      id: 5,
      title: "5. Build & Push",
      tool: "Docker + AWS ECR",
      type: "Image Artifact",
      badge: "KMS Encrypted ECR",
      desc: "Builds multi-stage Docker image, tags with Git commit SHA, and pushes to private AWS ECR.",
      detail: "docker build -t $AWS_ACCOUNT.dkr.ecr.ap-south-1.amazonaws.com/app:$GITHUB_SHA ."
    },
    {
      id: 6,
      title: "6. GitOps / Deploy",
      tool: "Argo CD & EKS",
      type: "Continuous Delivery",
      badge: "Healthy & Synced",
      desc: "Argo CD reconciles cluster state with Helm chart repo, or automated SSH deploy to EC2.",
      detail: "argocd app sync production-app --prune"
    },
    {
      id: 7,
      title: "7. DAST Testing",
      tool: "OWASP ZAP",
      type: "Dynamic Security",
      badge: "Runtime Scanned",
      desc: "Simulates real-world HTTP traffic against staging endpoint to detect headers and CORS vulnerabilities.",
      detail: "zap-baseline.py -t https://staging.ankush.dev -r zap_report.html"
    },
    {
      id: 8,
      title: "8. Health-Check Gate",
      tool: "Curl & Polling",
      type: "Deployment Verification",
      badge: "HTTP 200 OK",
      desc: "Automated polling loop queries /healthz endpoint ensuring zero deployment downtime.",
      detail: "until curl -s -f http://localhost:8000/healthz; do sleep 5; done"
    },
    {
      id: 9,
      title: "9. SRE Monitoring",
      tool: "CloudWatch & SNS",
      type: "Telemetry & Alerts",
      badge: "Real-time Telemetry",
      desc: "CloudWatch Agent custom metrics (CPU, RAM, Disk on 5-min intervals) with automated SNS email dispatch.",
      detail: "aws cloudwatch put-metric-data --namespace CWAgentCustom"
    }
  ];

  const [activePipelineStep, setActivePipelineStep] = useState(3);
  const currentPipeline = pipelineSteps.find(s => s.id === activePipelineStep) || pipelineSteps[2];

  return (
    <section id="architecture" className="py-24 relative dev-grid-bg border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300 font-mono text-xs font-semibold mb-3">
              <Layers size={13} className="text-emerald-400" />
              <span>SYSTEM BLUEPRINTS &amp; ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              Production Architecture &amp; DevSecOps Pipelines
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-[#090a0f] border border-white/[0.08] font-mono text-xs shadow-lg">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'architecture'
                  ? 'bg-zinc-800 text-white font-semibold shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Cloud size={14} className="text-sky-400" />
              <span>AWS &amp; K8s Topology</span>
            </button>
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-zinc-800 text-white font-semibold shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>DevSecOps Flow</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE AWS CLOUD & KUBERNETES TOPOLOGY */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            
            {/* Main Architecture Diagram Container */}
            <div className="bg-[#090a0f] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              
              {/* Cloud Canvas Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.07] mb-6">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <FaAws size={18} className="text-amber-400" />
                  <span className="font-semibold text-white">AWS Cloud Architecture</span>
                  <span className="text-zinc-500">&bull;</span>
                  <span className="text-zinc-400">Region: ap-south-1 (Mumbai)</span>
                  <span className="text-zinc-500">&bull;</span>
                  <span className="text-zinc-400">VPC: 10.0.0.0/16</span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Click any node below to inspect configuration</span>
                </div>
              </div>

              {/* Architectural Layers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                
                {/* 1. Ingress Layer */}
                <div className="p-4 rounded-xl bg-[#040508] border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-3">
                      1. Ingress &amp; DMZ
                    </span>
                    <div className="space-y-2.5">
                      {archNodes.filter(n => n.layer === 'ingress').map(node => {
                        const Icon = node.icon;
                        const isSelected = selectedNodeId === node.id;
                        return (
                          <div
                            key={node.id}
                            onClick={() => setSelectedNodeId(node.id)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-zinc-800/90 border-amber-400/60 shadow-lg text-white'
                                : 'bg-[#0b0c12] border-white/[0.06] text-zinc-300 hover:border-zinc-600'
                            }`}
                          >
                            <div className="flex items-center gap-2 font-mono text-xs font-semibold mb-1">
                              <Icon size={14} className="text-amber-400" />
                              <span>{node.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-400 block">
                              {node.service}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 mt-4 block">Public Subnet</span>
                </div>

                {/* 2. Compute & Kubernetes Layer */}
                <div className="p-4 rounded-xl bg-[#040508] border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-3">
                      2. Compute &amp; GitOps
                    </span>
                    <div className="space-y-2.5">
                      {archNodes.filter(n => n.layer === 'compute').map(node => {
                        const Icon = node.icon;
                        const isSelected = selectedNodeId === node.id;
                        return (
                          <div
                            key={node.id}
                            onClick={() => setSelectedNodeId(node.id)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-zinc-800/90 border-sky-400/60 shadow-lg text-white'
                                : 'bg-[#0b0c12] border-white/[0.06] text-zinc-300 hover:border-zinc-600'
                            }`}
                          >
                            <div className="flex items-center gap-2 font-mono text-xs font-semibold mb-1">
                              <Icon size={14} className="text-sky-400" />
                              <span>{node.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-400 block">
                              {node.service}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 mt-4 block">Private App Subnet</span>
                </div>

                {/* 3. Data & Storage Layer */}
                <div className="p-4 rounded-xl bg-[#040508] border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-purple-400 block mb-3">
                      3. Data &amp; State
                    </span>
                    <div className="space-y-2.5">
                      {archNodes.filter(n => n.layer === 'data').map(node => {
                        const Icon = node.icon;
                        const isSelected = selectedNodeId === node.id;
                        return (
                          <div
                            key={node.id}
                            onClick={() => setSelectedNodeId(node.id)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-zinc-800/90 border-purple-400/60 shadow-lg text-white'
                                : 'bg-[#0b0c12] border-white/[0.06] text-zinc-300 hover:border-zinc-600'
                            }`}
                          >
                            <div className="flex items-center gap-2 font-mono text-xs font-semibold mb-1">
                              <Icon size={14} className="text-purple-400" />
                              <span>{node.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-400 block">
                              {node.service}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 mt-4 block">Private Data Subnet</span>
                </div>

                {/* 4. Self-Healing & SRE Layer */}
                <div className="p-4 rounded-xl bg-[#040508] border border-emerald-500/20 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-3">
                      4. Self-Healing Loop
                    </span>
                    <div className="space-y-2.5">
                      {archNodes.filter(n => n.layer === 'healing').map(node => {
                        const Icon = node.icon;
                        const isSelected = selectedNodeId === node.id;
                        return (
                          <div
                            key={node.id}
                            onClick={() => setSelectedNodeId(node.id)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-zinc-800/90 border-emerald-400/60 shadow-lg text-white'
                                : 'bg-[#0b0c12] border-white/[0.06] text-zinc-300 hover:border-zinc-600'
                            }`}
                          >
                            <div className="flex items-center gap-2 font-mono text-xs font-semibold mb-1">
                              <Icon size={14} className="text-emerald-400" />
                              <span>{node.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-400 block">
                              {node.service}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400/80 mt-4 block">Automated Remediation</span>
                </div>

              </div>

              {/* Selected Node Inspector Detail Card */}
              <div className="bg-[#05060a] border border-white/[0.08] rounded-xl p-6 font-mono">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-800 text-white">
                      <selectedNode.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{selectedNode.name}</h4>
                      <span className="text-xs text-zinc-400">{selectedNode.service}</span>
                    </div>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 self-start sm:self-auto">
                    Security: {selectedNode.security}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Operational Purpose:</span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {selectedNode.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Infrastructure as Code Specification:</span>
                    <pre className="p-3 rounded-lg bg-[#000000] border border-white/[0.06] text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                      {selectedNode.codeSnippet}
                    </pre>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: INTERACTIVE DEVSECOPS PIPELINE VISUALIZER */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            <div className="bg-[#090a0f] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.07] mb-8">
                <div>
                  <h3 className="font-mono text-lg font-bold text-white flex items-center gap-2">
                    <ShieldCheck size={20} className="text-emerald-400" />
                    Automated DevSecOps Pipeline Flow
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-sans">
                    9-stage automated deployment pipeline with shift-left security gates, container scanning, and health verification.
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  Total Pipeline Duration: ~3m 45s
                </span>
              </div>

              {/* Pipeline Flow Stepper */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2.5 mb-8">
                {pipelineSteps.map((step) => {
                  const isCurrent = activePipelineStep === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActivePipelineStep(step.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isCurrent
                          ? 'bg-zinc-800 border-emerald-500/60 shadow-lg text-white scale-[1.02]'
                          : 'bg-[#040508] border-white/[0.06] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] text-zinc-500">#{step.id}</span>
                        <CheckCircle2 size={12} className={isCurrent ? 'text-emerald-400' : 'text-zinc-600'} />
                      </div>
                      <div className="font-mono text-xs font-bold text-white truncate">
                        {step.title.split('. ')[1]}
                      </div>
                      <div className="font-mono text-[10px] text-zinc-400 mt-1 truncate">
                        {step.tool.split(' ')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Stage Detail Card */}
              <div className="bg-[#05060a] border border-white/[0.08] rounded-xl p-6 font-mono">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] mb-4">
                  <div>
                    <span className="text-xs text-zinc-500 block">Active Pipeline Stage:</span>
                    <h4 className="text-lg font-bold text-white">{currentPipeline.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                      Tool: {currentPipeline.tool}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                      {currentPipeline.badge}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Purpose &amp; Security Gate:</span>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans mb-3">
                      {currentPipeline.desc}
                    </p>
                    <span className="text-xs text-zinc-500">Pipeline Type: <strong className="text-zinc-300">{currentPipeline.type}</strong></span>
                  </div>

                  <div>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">CLI Execution in CI Runner:</span>
                    <div className="p-3 rounded-lg bg-[#000000] border border-white/[0.06] text-xs text-sky-300 overflow-x-auto">
                      <code>{currentPipeline.detail}</code>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
