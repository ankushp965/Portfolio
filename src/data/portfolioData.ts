/**
 * =========================================================================================
 * PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
 * =========================================================================================
 * 
 * 💡 HOW TO UPDATE YOUR PORTFOLIO IN THE FUTURE:
 * To add a new project, update your skills, change company details, or update certifications,
 * you ONLY need to edit this file!
 * 
 * - Want to add a new project? -> Add an object to the `projects` array below.
 * - Want to update your skills? -> Edit the `skillCategories` array below.
 * - Want to update CKA to 'Certified'? -> Change status to 'Certified' in `certifications`.
 * - Want to add/change metrics? -> Edit the `impactMetrics` array.
 * 
 * No JSX or React code needs to be modified when updating content.
 * =========================================================================================
 */

export interface PersonalInfo {
  name: string;
  role: string;
  subRole: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeDownloadUrl: string;
  statusBadge: {
    text: string;
    available: boolean;
  };
  headlineBio: string;
  aboutParagraphs: string[];
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: 'zap' | 'clock' | 'shield' | 'check' | 'server';
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface ExperienceProject {
  title: string;
  subtitle: string;
  metricsBadge: string;
  bullets: string[];
  techStack: string[];
  architectureDetails?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  projects: ExperienceProject[];
}

export interface ProjectMetricCard {
  value: string;
  label: string;
  subtext: string;
  note?: string;
}

export interface ChallengeItem {
  title: string;
  category: string;
  issue: string;
  resolution: string;
}

export interface ScreenshotPlaceholder {
  id: string;
  title: string;
  subtitle: string;
  command: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  projectScope?: string;
  tagline: string;
  featured: boolean;
  status: 'Production' | 'Live' | 'Open Source' | 'Completed';
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  metrics: string[];
  description: string[];
  executiveSummary?: string;
  metricCards?: ProjectMetricCard[];
  problemVsSolution?: { problem: string; solution: string }[];
  challengesSolved?: ChallengeItem[];
  limitations?: string[];
  screenshots?: ScreenshotPlaceholder[];
  architectureSummary: string;
  architectureSteps?: { step: string; description: string }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: 'In Progress' | 'Certified';
  dateOrExpected: string;
  credentialUrl?: string;
  skillsCovered: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[];
}

// -----------------------------------------------------------------------------
// 1. PERSONAL DETAILS & BRANDING
// -----------------------------------------------------------------------------
export const personalInfo: PersonalInfo = {
  name: "Ankush Prajapati",
  role: "DevOps Engineer",
  subRole: "Cloud Platform • Kubernetes & GitOps • DevSecOps",
  location: "Mumbai, Maharashtra",
  email: "ankushp965@gmail.com",
  phone: "+91 8104868833",
  github: "https://github.com/ankushp965",
  linkedin: "https://www.linkedin.com/in/ankushp965/",
  resumeDownloadUrl: "/resume.pdf",
  statusBadge: {
    text: "Open for DevOps & Platform Roles",
    available: true,
  },
  headlineBio: "Automating resilient AWS infrastructure with Terraform, enforcing declarative GitOps continuous delivery via Argo CD, and engineering cloud-native Kubernetes platforms with progressive canary rollouts and shift-left DevSecOps security.",
  aboutParagraphs: [
    "I am a DevOps Engineer with hands-on experience building, automating, and securing cloud infrastructure and high-velocity CI/CD pipelines.",
    "My core work centers on Infrastructure as Code (Terraform with reusable modules and remote state), container orchestration with AWS EKS and Docker, GitOps continuous delivery through Argo CD, and robust DevSecOps practices integrating SAST (Bandit), SCA (pip-audit, Trivy), and container scanning directly into GitHub Actions.",
    "Beyond traditional cloud operations, I specialize in reliable platform automation—from engineering progressive canary deployments on AWS EKS with Argo Rollouts and Prometheus metrics analysis, to provisioning air-gapped, zero-leakage local AI infrastructure."
  ]
};

// -----------------------------------------------------------------------------
// 2. PRODUCTION IMPACT METRICS
// -----------------------------------------------------------------------------
export const impactMetrics: Metric[] = [
  {
    id: "turnaround",
    value: "< 10 min",
    label: "Data Provisioning Speed",
    subtext: "Down from 5 days for 15+ engineers via AWS self-service platform",
    iconName: "zap"
  },
  {
    id: "release-speed",
    value: "< 5 min",
    label: "CI/CD Deployment Cadence",
    subtext: "Automated pipeline replacing 30+ minutes of manual steps",
    iconName: "clock"
  },
  {
    id: "terraform-modules",
    value: "7 Modules",
    label: "Reusable Terraform Modules",
    subtext: "Replaced 1-2 hours of manual AWS console provisioning",
    iconName: "server"
  },
  {
    id: "canary-rollout",
    value: "100%",
    label: "Canary Rollout Reliability",
    subtext: "Prometheus 500 error analysis auto-aborted failed canary on Argo Rollouts",
    iconName: "shield"
  },
  {
    id: "eval-pass",
    value: "96%",
    label: "Evaluation Faithfulness",
    subtext: "92% test pass rate across 50 enterprise cases with DeepEval & Phoenix",
    iconName: "check"
  }
];

// -----------------------------------------------------------------------------
// 3. TECHNICAL SKILLS MATRIX (Grouped by Enterprise DevOps Pillars)
// -----------------------------------------------------------------------------
export const skillCategories: SkillCategory[] = [
  {
    id: "cloud-aws",
    title: "AWS Cloud & Networking",
    badge: "Cloud Architecture",
    description: "VPC networking, multi-AZ high availability, and least-privilege security",
    skills: [
      "AWS EC2", "AWS EKS", "AWS ECR", "VPC Networking", "Public / Private Subnets",
      "Route Tables", "NAT Gateway", "Internet Gateway", "Security Groups",
      "ALB / NLB", "IAM Least-Privilege", "RDS Multi-AZ (Encrypted)", "AWS S3",
      "Route 53", "AWS Secrets Manager"
    ]
  },
  {
    id: "iac-config",
    title: "Infrastructure as Code & Automation",
    badge: "IaC & Scripting",
    description: "Declarative infrastructure provisioning and automated host bootstrapping",
    skills: [
      "Terraform", "Reusable Modules", "S3-backed Remote State", "State Locking",
      "Terraform User-Data", "Bash Automation", "AWS CLI", "Docker Compose", "Python"
    ]
  },
  {
    id: "containers-gitops",
    title: "Containers, Kubernetes & GitOps",
    badge: "Orchestration",
    description: "Production cluster management and Git-driven continuous delivery",
    skills: [
      "Kubernetes", "AWS EKS 1.31", "Docker", "Helm 3", "Argo CD (GitOps)",
      "Argo Rollouts", "Kyverno (CEL)", "Nginx Reverse Proxy", "Container Networking", "Multi-Stage Dockerfiles"
    ]
  },
  {
    id: "cicd-devsecops",
    title: "CI/CD & DevSecOps",
    badge: "Security Gates",
    description: "Automated pipelines with shift-left static, dependency, and dynamic testing",
    skills: [
      "GitHub Actions", "SonarQube (SAST)", "Bandit (SAST)", "pip-audit (SCA)",
      "npm audit (SCA)", "Trivy (Container SCA)", "OWASP ZAP (DAST)",
      "Quality Gates", "Health-Check Gates"
    ]
  },
  {
    id: "monitoring-sre",
    title: "Monitoring, Observability & SRE",
    badge: "Telemetry",
    description: "Real-time metrics, log aggregation, custom alarms, and distributed tracing",
    skills: [
      "Prometheus", "Grafana", "Alertmanager", "CloudWatch Agent (Custom Metrics)",
      "CloudWatch Alarms (5-min)", "AWS SNS Alerting", "Loki", "Arize Phoenix Tracing"
    ]
  },
  {
    id: "ai-infra",
    title: "Enterprise AI Infrastructure & Databases",
    badge: "AI Platform",
    description: "Zero-leakage local LLM inferencing, vector search, and evaluators",
    skills: [
      "LangGraph", "Ollama (Local LLM)", "ChromaDB (Vector DB)", "BM25 Search",
      "Cross-Encoder Reranking", "DeepEval", "MySQL", "PostgreSQL", "Linux / POSIX"
    ]
  }
];

// -----------------------------------------------------------------------------
// 4. WORK EXPERIENCE
// -----------------------------------------------------------------------------
export const experienceData: ExperienceItem[] = [
  {
    id: "quality-kiosk",
    role: "Solution Engineer (DevOps)",
    company: "Quality Kiosk Technologies Pvt. Ltd.",
    location: "Navi Mumbai, India",
    period: "Sep 2025 – Oct 2026",
    summary: "Spearheaded cloud infrastructure provisioning, containerized delivery pipelines, shift-left DevSecOps security gates, and local AI infrastructure.",
    projects: [
      {
        title: "Self-Service Data Management Platform",
        subtitle: "AWS Infrastructure, Terraform Modules, Docker & GitHub Actions CI/CD",
        metricsBadge: "Turnaround: 5 Days → < 10 Min | Release: 30+ Min → < 5 Min",
        bullets: [
          "Architected and deployed an AWS-hosted self-service platform used by 15+ engineers, cutting synthetic data turnaround from 5 days to under 10 minutes.",
          "Provisioned VPC, public/private subnets, NAT Gateway, EC2, multi-AZ RDS, ECR, and least-privilege IAM using 7 reusable Terraform modules with S3-backed remote state, replacing 1-2 hrs of manual console setup.",
          "Built a GitHub Actions CI/CD pipeline (Flake8, Docker build, ECR push, SSH deploy to EC2) with a health-check gate, cutting release time from 30+ minutes of manual steps to under 5 minutes.",
          "Containerized the application behind an Nginx reverse proxy and secured multi-AZ, encrypted RDS MySQL in a private subnet, reachable only from the app's security group.",
          "Automated EC2 bootstrap with Terraform user-data and Bash scripts (Docker, Compose, AWS CLI) and a deploy script with ECR login and health-check polling."
        ],
        techStack: [
          "AWS (VPC, EC2, RDS, ECR, IAM, S3)", "Terraform", "Docker", "Docker Compose",
          "GitHub Actions", "Nginx", "Bash", "MySQL Multi-AZ"
        ],
        architectureDetails: "AWS VPC (Multi-AZ) -> Public Subnet (Nginx Reverse Proxy on EC2) -> Private Subnet (Encrypted RDS MySQL) with Security Group isolation. Terraform S3 remote state backend."
      },
      {
        title: "Enterprise Multi-Agent AI Policy Assistant",
        subtitle: "Local LLMOps Infrastructure, DevSecOps Security Pipeline & SRE Observability",
        metricsBadge: "92% Pass Rate (46/50) | 96% Faithfulness | Zero Cloud Data Leakage",
        bullets: [
          "Built a privacy-first multi-agent policy assistant (LangGraph, Ollama) for HR, IT, and Security documents with local LLM inference, ensuring zero enterprise policy data leaves the VPC to external cloud providers.",
          "Implemented hybrid retrieval (ChromaDB, BM25, cross-encoder reranking) with query rewriting, guardrails, and intent routing across parallel domain agents.",
          "Evaluated with a DeepEval LLM-as-a-judge suite: achieved 92% pass rate (46/50 test cases, 0.7 threshold) and 96% faithfulness; added Arize Phoenix tracing for agent inspection.",
          "Containerized with Docker and deployed to AWS EC2 via Terraform behind Nginx; automated through GitHub Actions incorporating SAST (SonarQube, Bandit) with quality gates, SCA (pip-audit, npm audit, Trivy), and DAST (OWASP ZAP) stages.",
          "Configured CloudWatch monitoring with CPU, memory, and disk alarms using CloudWatch Agent custom metrics (5-min evaluation periods), with automated incident notifications via SNS email."
        ],
        techStack: [
          "LangGraph", "Ollama", "ChromaDB", "DeepEval", "Arize Phoenix", "Docker",
          "Terraform", "GitHub Actions", "SonarQube", "Bandit", "Trivy", "OWASP ZAP",
          "CloudWatch Agent", "AWS SNS", "Nginx"
        ],
        architectureDetails: "Zero-leakage local Ollama inference on EC2. Multi-stage DevSecOps pipeline in GitHub Actions: Lint -> SAST (SonarQube/Bandit) -> SCA (pip-audit/Trivy) -> DAST (OWASP ZAP) -> Deploy."
      }
    ]
  }
];

// -----------------------------------------------------------------------------
// 5. FEATURED PROJECTS
// -----------------------------------------------------------------------------
export const projectsData: ProjectItem[] = [
  {
    id: "fintech-payment-platform-eks",
    title: "FinTech Cloud-Native Payment Platform on AWS EKS",
    subtitle: "GitOps, Progressive Canary Deployments & Policy Guardrails",
    date: "November 2026",
    projectScope: "Demo-scale project",
    tagline: "GitOps, Progressive Canary Deployments & Policy Guardrails on AWS EKS 1.31",
    featured: true,
    status: "Completed",
    githubUrl: "https://github.com/ankushp965/Payment-Platform",
    executiveSummary: "Multi-service payment application (FastAPI: payment-api, ledger, notification + PostgreSQL 15) on AWS EKS 1.31, provisioned via Terraform (VPC with public/private subnets, single NAT Gateway, 3 ECR repos, Secrets Manager, S3 + DynamoDB remote state). Packaged with Helm v3 and synchronized via Argo CD (in-cluster GitOps). Deployed temporarily for benchmarking and cleanly destroyed post-testing.",
    tags: [
      "AWS EKS 1.31", "Terraform", "Argo CD", "Argo Rollouts", "Prometheus", "Kyverno",
      "Helm", "FastAPI", "PostgreSQL", "Docker", "k6", "GitHub Actions"
    ],
    metrics: [
      "1,632/1,632 payments successful (k6, 50 VUs)",
      "Canary auto-abort on Prometheus 500 spike",
      "~60% estimated EC2 Spot compute savings",
      "14 Starlette CVEs patched via pip-audit"
    ],
    metricCards: [
      {
        value: "1,632 / 1,632",
        label: "Successful Payments",
        subtext: "100% transaction availability during k6 load testing (50 Virtual Users, 1m50s ramp).",
        note: "p95 latency was 2.41s, exceeding the script's 500ms SLO target likely due to a local kubectl port-forward tunnel (SPDY connection multiplexing bottleneck, not verified with ALB re-test before teardown)."
      },
      {
        value: "Auto-Abort",
        label: "Canary Guardrail",
        subtext: "Argo Rollouts 25% -> 50% -> 100% strategy with 30s pause intervals.",
        note: "Prometheus AnalysisTemplate queried HTTP 500 error rate every 10s and automatically aborted the rollout in ~20s (failureLimit: 2) upon simulated 500 error injection; zero manual intervention."
      },
      {
        value: "~60% Savings",
        label: "Spot Compute",
        subtext: "2x c7i-flex.large Spot worker nodes provisioned via Terraform on AWS EKS.",
        note: "Estimated compute savings vs On-Demand (~$52.56/mo vs ~$131.10/mo based on AWS list pricing for ap-south-1 Mumbai; Spot rates vary dynamically)."
      },
      {
        value: "14 CVEs",
        label: "Patched via pip-audit",
        subtext: "14 Starlette CVEs identified by pip-audit in CI pipeline and remediated.",
        note: "Patched by upgrading to fastapi>=0.115.0 and starlette>=1.1.0 across all microservices. Trivy container scan ran in reporting mode with exit-code: 0 (does not block)."
      }
    ],
    problemVsSolution: [
      {
        problem: "Deploying microservice updates directly to traffic risks cascading payment failures and database inconsistencies.",
        solution: "Argo Rollouts progressive canary steps (25% -> 50% -> 100%) with Prometheus AnalysisTemplates continuously evaluating HTTP 500 error rates to abort faulty rollouts automatically."
      },
      {
        problem: "Manual cluster configurations risk runtime drifts, privileged container executions, and missing resource bounds.",
        solution: "Argo CD in-cluster GitOps keeps state aligned with Helm manifests, while Kyverno CEL ValidatingPolicies in enforce mode disallow :latest tags and mandate non-root execution and CPU/memory limits."
      },
      {
        problem: "Running dedicated on-demand compute for cloud infrastructure benchmarks generates unnecessary cloud expense.",
        solution: "Configured Terraform EKS managed node group with 2x c7i-flex.large Spot instances, cutting estimated compute run cost by ~60% vs On-Demand rates."
      }
    ],
    challengesSolved: [
      {
        title: "SQLAlchemy 2.0 / psycopg v3 Pod Crash",
        category: "Database Driver",
        issue: "SQLAlchemy 2.0 defaulted to psycopg v3, which crashed pods on initialization due to missing binary C extensions in lightweight container environments.",
        resolution: "Explicitly declared 'postgresql+psycopg2' dialect in connection strings across all microservices, restoring reliable connectivity with psycopg2-binary."
      },
      {
        title: "Postgres RollingUpdate Lock Conflict",
        category: "Kubernetes Storage",
        issue: "Standard RollingUpdate deployment strategy attempted to start a replacement pod before shutting down the existing instance, causing PersistentVolume storage lock conflicts and port binding errors.",
        resolution: "Configured PostgreSQL deployment with 'Recreate' strategy, guaranteeing the existing pod releases volume locks and stops before the replacement pod mounts storage."
      },
      {
        title: "Postgres Root Startup vs Kyverno Policy",
        category: "Admission Control",
        issue: "Official PostgreSQL image requires initial root execution (UID 0) to chown the data directory before dropping privileges, triggering admission rejection under Kyverno's non-root CEL policy.",
        resolution: "Implemented a scoped Kyverno admission exemption specifically targeting 'app: postgres' within the payments namespace while maintaining non-root enforcement for all application workloads."
      }
    ],
    limitations: [
      "Rollback condition is an absolute 500 count (> 0) rather than an error percentage ratio.",
      "Single in-cluster PostgreSQL pod (no HA / RDS).",
      "Single NAT Gateway (single point of failure).",
      "Demo-scale infrastructure cleanly destroyed after testing."
    ],
    screenshots: [
      {
        id: "argocd",
        title: "Argo CD Application Tree",
        subtitle: "In-Cluster GitOps Synchronization",
        command: "argocd app get fintech-payment-platform-eks",
        badge: "GitOps Synced"
      },
      {
        id: "rollouts",
        title: "Argo Rollouts Watch CLI",
        subtitle: "Progressive Canary 25% -> 50% -> 100%",
        command: "kubectl argo rollouts get rollout payment-api -n payments",
        badge: "Canary Aborted"
      },
      {
        id: "prometheus",
        title: "Prometheus AnalysisTemplate",
        subtitle: "HTTP 500 Error Metric Evaluation",
        command: "sum(rate(http_requests_total{status=~\"5..\"}[1m]))",
        badge: "PromQL Triggered"
      },
      {
        id: "k6",
        title: "k6 Load Test Execution",
        subtitle: "50 Virtual Users Traffic Ramp (1,632 tx)",
        command: "k6 run --vus 50 --duration 1m50s payment-load.js",
        badge: "100% Available"
      }
    ],
    description: [
      "Engineered a multi-service payment platform (FastAPI: payment-api, ledger, notification + PostgreSQL 15) on AWS EKS 1.31, provisioned via modular Terraform.",
      "Provisioned custom VPC networking with public/private subnets, a single NAT Gateway, 3 ECR repositories, Secrets Manager, and S3 + DynamoDB remote state backend.",
      "Packaged microservices with Helm v3 charts and established continuous GitOps delivery using in-cluster Argo CD to reconcile cluster state against Git.",
      "Configured Argo Rollouts with a 25% -> 50% -> 100% canary strategy (30s pauses) paired with Prometheus AnalysisTemplates querying HTTP 500 rates every 10s (failureLimit: 2).",
      "Verified progressive delivery live by injecting simulated 500 errors during rollout: the canary automatically aborted in ~20s and traffic remained safely on the stable revision.",
      "Enforced Kyverno CEL ValidatingPolicies in enforce mode across the payments namespace to disallow :latest image tags, enforce CPU/memory limits, and mandate non-root execution (with scoped exemption for Postgres).",
      "Automated CI via GitHub Actions with Flake8 linting, Bandit SAST, pip-audit dependency scanning, Trivy container scanning (reporting mode with exit-code: 0), and ECR push on main."
    ],
    architectureSummary: "Client Traffic / k6 -> Ingress -> Argo Rollouts (payment-api 25%/50%/100%) -> Ledger & Notification -> PostgreSQL 15 (Recreate). Prometheus queries HTTP 500 rate every 10s to auto-abort. Enforced by Kyverno CEL policies.",
    architectureSteps: [
      { step: "Terraform IaC", description: "VPC (public/private subnets, single NAT Gateway), EKS 1.31 with 2x c7i-flex.large Spot nodes, 3 ECR repos, Secrets Manager, S3+DynamoDB remote state." },
      { step: "Argo CD GitOps", description: "In-cluster Argo CD continuously monitors Git and synchronizes Helm v3 multi-service manifests to the payments namespace." },
      { step: "Canary & Prometheus", description: "Argo Rollouts routes 25% -> 50% -> 100% traffic; Prometheus AnalysisTemplate checks HTTP 500 rate every 10s and aborts rollout in ~20s on errors." },
      { step: "Kyverno Policy Guardrails", description: "Kyverno CEL policies enforce non-root execution (postgres exempted), disallow :latest image tags, and mandate container CPU/memory limits." }
    ]
  },
  {
    id: "self-service-platform",
    title: "Self-Service Cloud Data Platform",
    tagline: "Automated AWS Multi-Tier Infrastructure with Terraform Modules & Automated CI/CD",
    featured: false,
    status: "Live",
    tags: [
      "AWS VPC", "Terraform", "Multi-AZ RDS", "Docker", "ECR", "GitHub Actions",
      "Nginx", "Bash", "CloudWatch"
    ],
    metrics: [
      "Turnaround: 5 days -> <10 min",
      "Release time: 30+ min -> <5 min",
      "7 Reusable Terraform modules"
    ],
    description: [
      "Architected a production self-service platform supporting 15+ engineers, cutting synthetic data provisioning turnaround from 5 days to under 10 minutes.",
      "Engineered 7 reusable Terraform modules provisioning VPC, public/private subnets, NAT Gateway, multi-AZ RDS MySQL, and ECR with S3 remote state locking.",
      "Implemented automated GitHub Actions CI/CD with Flake8 linting, multi-stage Docker builds, ECR container pushing, and SSH deployment with automated health-check verification.",
      "Automated complete EC2 host bootstrapping via Terraform user-data and Bash scripts installing Docker, Compose, and the AWS CLI."
    ],
    architectureSummary: "Internet -> ALB/Nginx -> EC2 Web App in Public Subnet -> Encrypted Multi-AZ MySQL in Private Subnet. Managed via Terraform."
  },
  {
    id: "private-ai-assistant",
    title: "Enterprise AI Assistant with DevSecOps Gates",
    tagline: "Air-Gapped Local LLM Architecture with Shift-Left Security Scanning & Custom Metrics",
    featured: false,
    status: "Production",
    tags: [
      "LangGraph", "Ollama", "SonarQube", "Bandit", "Trivy", "OWASP ZAP",
      "CloudWatch Agent", "AWS SNS", "DeepEval"
    ],
    metrics: [
      "Zero cloud data leakage",
      "96% Faithfulness benchmark",
      "SAST, SCA, and DAST security gates"
    ],
    description: [
      "Designed a privacy-first multi-agent policy assistant with 100% local LLM inference via Ollama, preventing enterprise policy data from leaving the corporate network.",
      "Integrated shift-left security in GitHub Actions: SAST (SonarQube, Bandit) with quality gates, SCA (pip-audit, Trivy), and DAST (OWASP ZAP).",
      "Configured custom CloudWatch Agent metrics for CPU, memory, and disk health evaluated every 5 minutes, routing threshold alerts to operations via AWS SNS email.",
      "Conducted rigorous testing using DeepEval LLM-as-a-judge evaluation suite, achieving 92% pass rate across 50 test cases and 96% faithfulness."
    ],
    architectureSummary: "Local Ollama on EC2 -> ChromaDB + BM25 Hybrid Retrieval -> DeepEval Quality Benchmarking -> CloudWatch & SNS Telemetry."
  }
];

// -----------------------------------------------------------------------------
// 6. CERTIFICATIONS & EDUCATION
// -----------------------------------------------------------------------------
export const certificationsData: Certification[] = [
  {
    id: "cka",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation / Cloud Native Computing Foundation (CNCF)",
    status: "In Progress",
    dateOrExpected: "Target: 2026",
    skillsCovered: [
      "Cluster Architecture, Installation & Configuration",
      "Workloads & Scheduling",
      "Services & Networking",
      "Storage & Persistent Volumes",
      "Cluster Maintenance & Troubleshooting"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "cdac",
    degree: "PG Diploma in Big Data Analytics",
    institution: "Centre for Development of Advanced Computing (CDAC)",
    period: "Feb 2025 – Aug 2025"
  },
  {
    id: "be",
    degree: "Bachelor of Engineering",
    institution: "Thakur College of Engineering and Technology",
    period: "Jan 2021 – May 2024"
  }
];

// -----------------------------------------------------------------------------
// 7. INTERACTIVE TERMINAL SIMULATOR COMMANDS
// -----------------------------------------------------------------------------
export const terminalCommands: TerminalCommand[] = [
  {
    command: "kubectl get pods -n payments",
    description: "Inspect running payment microservices, database, and controllers",
    output: [
      "NAME                                    READY   STATUS    RESTARTS   AGE",
      "payment-api-7b89d494f6-82xkz            1/1     Running   0          2d4h",
      "ledger-684f88bdc6-n9wql                 1/1     Running   0          2d4h",
      "notification-5975dbb9cf-v72pm           1/1     Running   0          2d4h",
      "postgres-5d46fb7476-q8rm9               1/1     Running   0          2d4h",
      "argo-rollouts-747f485db-xkdls           1/1     Running   0          18d",
      "prometheus-server-5d6cbdf54-mk89q       2/2     Running   0          18d"
    ]
  },
  {
    command: "terraform plan -target=module.aws_infrastructure",
    description: "Verify planned infrastructure changes and remote state",
    output: [
      "# module.aws_infrastructure.aws_vpc.main will be created",
      "+ resource \"aws_vpc\" \"main\" {",
      "    + cidr_block           = \"10.0.0.0/16\"",
      "    + enable_dns_hostnames = true",
      "    + tags                 = { \"Environment\" = \"demo\", \"ManagedBy\" = \"Terraform\" }",
      "  }",
      "# module.aws_infrastructure.aws_eks_node_group.spot_workers will be created",
      "+ resource \"aws_eks_node_group\" \"spot_workers\" {",
      "    + capacity_type        = \"SPOT\"",
      "    + instance_types       = [\"c7i-flex.large\"]",
      "    + scaling_config       = { desired_size = 2, max_size = 3, min_size = 1 }",
      "  }",
      "Plan: 8 to add, 0 to change, 0 to destroy. (State backed by S3 + DynamoDB lock)"
    ]
  },
  {
    command: "argocd app get fintech-payment-platform-eks",
    description: "Check declarative GitOps synchronization state",
    output: [
      "Name:               fintech-payment-platform-eks",
      "Project:            default",
      "Server:             https://kubernetes.default.svc",
      "Namespace:          payments",
      "Repo:               https://github.com/ankushp965/Payment-Platform",
      "Target:             HEAD (main)",
      "Sync Window:        Sync Allowed",
      "Sync Status:        Synced to main",
      "Health Status:      Healthy"
    ]
  },
  {
    command: "trivy image ankush/payment-api:latest",
    description: "Run container vulnerability scan in reporting mode (exit-code: 0)",
    output: [
      "2026-11-14T22:30:15.120Z INFO Vulnerability scanning initiated...",
      "ankush/payment-api:latest (python 3.11-slim)",
      "===================================================",
      "Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)",
      "pip-audit: 14 Starlette CVEs patched (fastapi>=0.115.0, starlette>=1.1.0)",
      "Status: Container scan completed in reporting mode (exit-code: 0, does not block CI)."
    ]
  },
  {
    command: "cloudwatch get-alarm-history --alarm-name HighCPUAlert",
    description: "Review SRE monitoring custom metrics and SNS notifications",
    output: [
      "Timestamp: 2026-11-14T20:15:00Z | Alarm: HighCPUAlert",
      "MetricName: CPUUtilization | Namespace: CWAgentCustom | Period: 300s",
      "StateChange: OK -> OK (Current: 28.4% | Threshold: > 80.0%)",
      "NotificationAction: arn:aws:sns:ap-south-1:ops-alerts-email",
      "Status: Healthy"
    ]
  },
  {
    command: "help",
    description: "List available interactive commands",
    output: [
      "Available commands you can run:",
      "  • kubectl get pods -n payments",
      "  • terraform plan -target=module.aws_infrastructure",
      "  • argocd app get fintech-payment-platform-eks",
      "  • trivy image ankush/payment-api:latest",
      "  • cloudwatch get-alarm-history --alarm-name HighCPUAlert",
      "  • clear (clears the console)"
    ]
  }
];

