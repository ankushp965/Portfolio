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

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  featured: boolean;
  status: 'Production' | 'Live' | 'Open Source';
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  metrics: string[];
  description: string[];
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
  headlineBio: "Automating resilient AWS infrastructure with Terraform, enforcing declarative GitOps continuous delivery via Argo CD, and engineering self-healing Kubernetes platforms with shift-left DevSecOps security.",
  aboutParagraphs: [
    "I am a DevOps Engineer with 1+ year of hands-on experience building, automating, and securing production AWS infrastructure and high-velocity CI/CD pipelines.",
    "My core work centers on Infrastructure as Code (Terraform with reusable modules and remote state), container orchestration with AWS EKS and Docker, GitOps continuous delivery through Argo CD, and robust DevSecOps practices integrating SAST (SonarQube, Bandit), SCA (Trivy, pip-audit), and DAST (OWASP ZAP) directly into GitHub Actions.",
    "Beyond traditional cloud operations, I specialize in reliable platform automation—from engineering self-healing Kubernetes workflows that auto-diagnose and remediate CrashLoopBackOff/OOM failures, to provisioning air-gapped, zero-leakage enterprise AI infrastructure."
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
    id: "self-healing",
    value: "100%",
    label: "Automated Pod Remediation",
    subtext: "Alertmanager webhook to LangGraph auto-restart/rollback on EKS",
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
      "Kubernetes", "AWS EKS", "Docker", "Helm 3", "Argo CD (GitOps)",
      "Nginx Reverse Proxy", "Container Networking", "Multi-Stage Dockerfiles"
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
    id: "self-healing-k8s",
    title: "Self-Healing Kubernetes on AWS EKS",
    tagline: "Automated Incident Remediation Loop for Kubernetes via Prometheus & LangGraph",
    featured: true,
    status: "Production",
    githubUrl: "https://github.com/ankushp965/self-healing-kubernetes",
    tags: [
      "Terraform", "AWS EKS", "Argo CD", "Kubernetes", "Helm", "Prometheus",
      "Alertmanager", "LangGraph", "FastAPI", "Docker", "GitHub Actions"
    ],
    metrics: [
      "100% automated failure triage",
      "Instant Helm rollback on bad deployments",
      "Slack incident reasoning dispatch"
    ],
    description: [
      "Provisioned an enterprise-grade AWS EKS cluster, ECR repository, VPC networking, and least-privilege IAM roles entirely through reusable Terraform IaC.",
      "Deployed microservices using Helm charts and established declarative continuous delivery with Argo CD, syncing cluster state directly from Git.",
      "Configured Prometheus rules and Alertmanager webhooks targeting CrashLoopBackOff, OOMKilled, and ImagePullBackOff failure patterns.",
      "Built an autonomous LangGraph troubleshooting agent deployed as a FastAPI webhook service that reads pod logs/events, performs root-cause analysis, triggers automated pod restart or Helm rollback, and broadcasts diagnostic explanations to Slack.",
      "Integrated SAST, SCA, and DAST security gates into GitHub Actions and verified resilient automated recovery by intentionally injecting pod crash loops and memory leaks."
    ],
    architectureSummary: "Prometheus Alert -> Alertmanager Webhook -> FastAPI / LangGraph Agent -> Pod Log Triage -> Automated Helm Rollback / Restart -> Slack Broadcast.",
    architectureSteps: [
      { step: "Provisioning", description: "VPC, public/private subnets, EKS control plane & worker nodes via Terraform with S3 remote state." },
      { step: "GitOps Continuous Delivery", description: "Argo CD monitors Git repository; synchronizes Helm chart releases to EKS cluster." },
      { step: "Detection", description: "Prometheus monitors pod metrics; fires alerts for CrashLoopBackOff and OOMKilled to Alertmanager." },
      { step: "Automated Healing", description: "LangGraph agent receives webhook, investigates pod diagnostics, executes remediation (pod restart or Helm rollback), and posts summary to Slack." }
    ]
  },
  {
    id: "self-service-platform",
    title: "Self-Service Cloud Data Platform",
    tagline: "Automated AWS Multi-Tier Infrastructure with Terraform Modules & Zero-Downtime CI/CD",
    featured: true,
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
    command: "kubectl get pods -n production",
    description: "Inspect running Kubernetes microservices and health status",
    output: [
      "NAME                                    READY   STATUS    RESTARTS   AGE",
      "self-healing-agent-7f99b8b64b-k82zq    1/1     Running   0          4d12h",
      "data-platform-api-5c74776cb6-l8qsm     1/1     Running   0          2d18h",
      "nginx-ingress-controller-6d7f8d6-xmn2  1/1     Running   0          14d",
      "argocd-server-7956dfb4c7-w8nkl        1/1     Running   0          18d",
      "prometheus-k8s-0                       2/2     Running   0          18d"
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
      "    + tags                 = { \"Environment\" = \"production\", \"ManagedBy\" = \"Terraform\" }",
      "  }",
      "# module.aws_infrastructure.aws_rds_cluster.mysql_multi_az will be created",
      "+ resource \"aws_rds_cluster\" \"mysql_multi_az\" {",
      "    + database_name        = \"production_db\"",
      "    + storage_encrypted    = true",
      "  }",
      "Plan: 7 to add, 0 to change, 0 to destroy. (State backed by S3 + DynamoDB lock)"
    ]
  },
  {
    command: "argocd app get self-healing-k8s",
    description: "Check declarative GitOps synchronization state",
    output: [
      "Name:               self-healing-k8s",
      "Project:            default",
      "Server:             https://kubernetes.default.svc",
      "Namespace:          production",
      "Repo:               https://github.com/ankushp965/self-healing-kubernetes",
      "Target:             HEAD (main)",
      "Sync Window:        Sync Allowed",
      "Sync Status:        Synced to main (c27e8a1)",
      "Health Status:      Healthy"
    ]
  },
  {
    command: "trivy image ankush/self-service-platform:latest",
    description: "Run shift-left container vulnerability & SCA scan",
    output: [
      "2026-11-14T22:30:15.120Z INFO Vulnerability scanning initiated...",
      "ankush/self-service-platform:latest (alpine 3.19.1)",
      "===================================================",
      "Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)",
      "SonarQube Quality Gate: PASSED | Bandit: 0 Issues | OWASP ZAP: Clean",
      "Status: Container meets enterprise DevSecOps deployment threshold."
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
      "  • kubectl get pods -n production",
      "  • terraform plan -target=module.aws_infrastructure",
      "  • argocd app get self-healing-k8s",
      "  • trivy image ankush/self-service-platform:latest",
      "  • cloudwatch get-alarm-history --alarm-name HighCPUAlert",
      "  • clear (clears the console)"
    ]
  }
];

