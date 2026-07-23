import React, { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Download, 
  Terminal, 
  Server, 
  Database, 
  Cpu, 
  Cloud, 
  Activity,
  Code,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- Scroll Animation Component ---
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={domRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Components ---
const SkillCard = ({ title, icon: Icon, skills }: { title: string, icon: React.ElementType, skills: string[] }) => (
  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg hover:border-brand-blue/50 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-brand-blue/10 rounded-md text-brand-blue">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-slate-100 font-mono">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="px-3 py-1 bg-slate-900 text-brand-teal text-sm rounded font-mono border border-brand-teal/20">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ title, company, period, description, tech }: { title: string, company: string, period: string, description: string[], tech: string }) => (
  <div className="relative pl-8 md:pl-0">
    <div className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-brand-blue"></div>
    <div className="md:hidden absolute left-1.5 top-5 bottom-0 w-px bg-slate-700"></div>
    
    <div className="md:grid md:grid-cols-4 md:gap-8 mb-12 relative">
      <div className="hidden md:block absolute left-[24.5%] top-2 w-3 h-3 rounded-full bg-brand-blue z-10 transform -translate-x-1.5"></div>
      <div className="hidden md:block absolute left-[24.5%] top-5 bottom-[-3rem] w-px bg-slate-700"></div>
      
      <div className="md:col-span-1 pt-1 mb-2 md:mb-0 text-slate-400 font-mono text-sm md:text-right md:pr-12">
        {period}
      </div>
      <div className="md:col-span-3 bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 transition-colors">
        <h3 className="text-xl font-bold text-slate-100">{title}</h3>
        <h4 className="text-brand-blue font-medium mb-4">{company}</h4>
        <ul className="space-y-3 text-slate-300 text-sm md:text-base">
          {description.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ChevronRight size={16} className="text-brand-teal mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-4 border-t border-slate-700/50">
          <p className="text-sm font-mono text-slate-400">
            <span className="text-brand-teal mr-2">Tech:</span>
            {tech}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, tags, description, github }: { title: string, tags: string[], description: string[], github?: string }) => (
  <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-6 flex flex-col h-full hover:-translate-y-1 hover:border-brand-blue/50 transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-slate-100">{title}</h3>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors">
          <FaGithub size={20} />
        </a>
      )}
    </div>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, idx) => (
        <span key={idx} className="px-2 py-1 bg-slate-900/80 text-brand-teal text-xs rounded font-mono">
          {tag}
        </span>
      ))}
    </div>
    <ul className="space-y-2 text-slate-300 text-sm flex-grow mb-6">
      {description.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-brand-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main App ---
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-brand-blue/30 selection:text-brand-teal">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-mono text-brand-blue font-bold text-xl cursor-pointer" onClick={() => scrollTo('home')}>
              &gt;_ Ankush
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6 font-mono text-sm">
                {navLinks.map((link) => (
                  <button key={link.name} onClick={() => scrollTo(link.id)} className="text-slate-300 hover:text-brand-teal transition-colors">
                    {link.name}
                  </button>
                ))}
                <button onClick={() => scrollTo('contact')} className="text-slate-300 hover:text-brand-teal transition-colors">Contact</button>
              </div>
              
              <div className="flex items-center space-x-4 border-l border-slate-700 pl-6">
                <a href="https://github.com/ankushp965" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ankushp965/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:ankushp965@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
                <a 
                  href="/Ankush_Prajapati_Resume.pdf" 
                  download 
                  className="flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue border border-brand-blue/50 rounded hover:bg-brand-blue hover:text-white transition-all font-mono text-sm"
                >
                  <Download size={16} /> Resume
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-mono">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => scrollTo(link.id)} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-brand-teal hover:bg-slate-800 rounded-md">
                  {link.name}
                </button>
              ))}
              <button onClick={() => scrollTo('contact')} className="block w-full text-left px-3 py-2 text-slate-300 hover:text-brand-teal hover:bg-slate-800 rounded-md">
                Contact
              </button>
              
              <div className="flex items-center space-x-4 px-3 py-4 mt-2 border-t border-slate-800">
                <a href="https://github.com/ankushp965" target="_blank" rel="noopener noreferrer" className="text-slate-400">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ankushp965/" target="_blank" rel="noopener noreferrer" className="text-slate-400">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:ankushp965@gmail.com" className="text-slate-400">
                  <Mail size={20} />
                </a>
              </div>
              <div className="px-3 pb-2">
                <a 
                  href="/Ankush_Prajapati_Resume.pdf" 
                  download 
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-brand-blue/10 text-brand-blue border border-brand-blue/50 rounded font-mono text-sm"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center py-20">
          <FadeInSection>
            <p className="text-brand-teal font-mono mb-4">Hi, my name is</p>
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
              Ankush Prajapati.
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-400 mb-6">
              DevOps Engineer | Platform Engineering | AI Infrastructure
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Building reliable infrastructure and AI-powered systems — from Kubernetes clusters to LangGraph agent pipelines. Based in Mumbai, Maharashtra.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/Ankush_Prajapati_Resume.pdf" 
                download 
                className="flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded hover:bg-brand-blue/90 transition-colors font-mono font-medium shadow-lg shadow-brand-blue/20"
              >
                <Download size={18} /> Download Resume
              </a>
              <button 
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 bg-slate-800 text-slate-200 border border-slate-700 rounded hover:border-slate-500 transition-colors font-mono"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 bg-transparent text-brand-teal border border-brand-teal/50 rounded hover:bg-brand-teal/10 transition-colors font-mono"
              >
                Contact Me
              </button>
            </div>
          </FadeInSection>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-slate-800">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 font-mono"><span className="text-brand-blue">01.</span> About Me</h2>
              <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-5 text-slate-300 text-lg leading-relaxed">
                <p>
                  I'm an engineer with hands-on experience spanning the complete DevOps lifecycle and modern applied AI engineering. My focus lies in designing and building robust systems from the ground up, whether that means provisioning cloud infrastructure and configuring Kubernetes deployments, or developing sophisticated agentic AI pipelines.
                </p>
                <p>
                  My recent work combines traditional platform engineering—like containerization, CI/CD orchestration, and deep observability—with cutting-edge MLOps. I've built and deployed end-to-end production systems that integrate LangGraph-based RAG architectures and multi-agent systems securely within enterprise environments, ensuring zero data leakage and high reliability.
                </p>
                <p>
                  I hold a PG Diploma in Big Data Analytics from CDAC. I am actively targeting roles in DevOps, Platform Engineering, and AI Infrastructure where I can leverage my hybrid skillset to build resilient, scalable platforms.
                </p>
              </div>
              <div className="md:col-span-1 hidden md:flex justify-center items-start">
                <div className="relative group">
                  <div className="absolute inset-0 border-2 border-brand-teal rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <div className="relative bg-slate-800 p-8 rounded text-slate-400 border border-slate-700 h-64 w-64 flex flex-col items-center justify-center gap-4 group-hover:bg-slate-800/80 transition-colors">
                    <Terminal size={48} className="text-brand-blue" />
                    <Cloud size={48} className="text-brand-teal" />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-800">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 font-mono"><span className="text-brand-blue">02.</span> Technical Skills</h2>
              <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard 
                title="DevOps & Infrastructure" 
                icon={Server} 
                skills={['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Prometheus', 'Grafana', 'Alertmanager', 'Helm', 'Azure DevOps', 'Git', 'Linux']} 
              />
              <SkillCard 
                title="Cloud Platforms" 
                icon={Cloud} 
                skills={['Azure AKS', 'Azure App Gateway', 'Blob Storage', 'ADLS Gen2', 'Databricks', 'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS IAM']} 
              />
              <SkillCard 
                title="AI & MLOps" 
                icon={Cpu} 
                skills={['LangGraph', 'Agentic AI', 'Prompt Engineering', 'RAG Pipelines', 'ChromaDB', 'LLM-as-Judge', 'DeepEval', 'LLMOps', 'Phoenix Observability']} 
              />
              <SkillCard 
                title="Backend & APIs" 
                icon={Code} 
                skills={['Python', 'FastAPI', 'REST APIs', 'WebSockets', 'Postman', 'NGINX']} 
              />
              <SkillCard 
                title="Databases" 
                icon={Database} 
                skills={['MySQL', 'MongoDB', 'Redis']} 
              />
              <SkillCard 
                title="Testing & Quality" 
                icon={Activity} 
                skills={['Data Validation', 'Schema Testing', 'Data Quality', 'Synthetic Data', 'SAP BODS']} 
              />
            </div>
          </FadeInSection>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-slate-800">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold text-slate-100 font-mono"><span className="text-brand-blue">03.</span> Experience</h2>
              <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <Briefcase className="text-brand-blue" />
                Solution Engineer
              </h3>
              <p className="text-lg text-slate-400 font-mono mt-1">Quality Kiosk Technologies Pvt. Ltd., Mumbai</p>
              <p className="text-brand-teal font-mono mt-1 mb-8">Sept 2025 – Present</p>
              
              <div className="space-y-4">
                <ExperienceItem 
                  title="Test Data Management & Generation Platform" 
                  company="Self-Service Tester Portal"
                  period="Project"
                  description={[
                    "Architected and built a Self-Service Banking Tester Portal (FastAPI + MySQL backend), used by 15+ QA engineers across core banking domains, cutting synthetic test data turnaround from days to under 10 minutes.",
                    "Containerized the application with Docker and deployed it on AWS EC2, with a GitHub Actions CI/CD pipeline automating the build-test-deploy workflow.",
                    "Integrated GenRocket GMUS via REST API for automated data generation, configured through an interactive Tester Studio UI.",
                    "Engineered a topological sort-based dependency resolver enforcing referential integrity across multi-table parent-child relationships, eliminating FK constraint violations.",
                    "Deployed LangGraph-based AI agents integrated with the portal backend to auto-map natural language requests to data generation configs, reducing manual studio configuration effort."
                  ]}
                  tech="Python, FastAPI, MySQL, Docker, GitHub Actions, AWS EC2, LangGraph, GenRocket GMUS"
                />
                
                <ExperienceItem 
                  title="Enterprise Multi-Agent AI Policy Assistant" 
                  company="Privacy-First AI Architecture"
                  period="Project"
                  description={[
                    "Architected and deployed a privacy-first, Multi-Agent RAG system using LangGraph to process complex, multi-domain enterprise queries (HR, IT, Security) with 100% local execution via Ollama, ensuring zero enterprise data leakage.",
                    "Developed a dynamic multi-agent orchestration graph featuring a Query Rewriter for conversational memory, a Guardrails node for out-of-scope filtering, and an Intent Router that triggered parallel domain-specific agents for multi-topic queries.",
                    "Engineered a hybrid retrieval pipeline combining Dense Vector Search (ChromaDB) and BM25 keyword retrieval, optimized with a Cross-Encoder reranker to improve retrieval precision and minimize context dilution.",
                    "Built an automated LLM-as-a-Judge evaluation suite using DeepEval across 50+ enterprise test cases, measuring faithfulness, answer relevancy, and contextual precision while reducing hallucinations to near-zero.",
                    "Integrated Arize Phoenix observability with OpenTelemetry traces to monitor end-to-end agent execution, retrieval quality, latency, and root-cause analysis."
                  ]}
                  tech="Python, LangGraph, LangChain, FastAPI, React, ChromaDB, DeepEval, Arize Phoenix, Ollama, HuggingFace"
                />

                <ExperienceItem 
                  title="Core Banking Domain Projects" 
                  company="Data Validation & Schema Testing (Commercial Bank of Dubai)"
                  period="Client Engagement"
                  description={[
                    "Worked on core banking domain projects spanning data validation, schema testing, and data quality assurance across multiple banking product lines, validating and remediating 9–10 million records across production banking schemas.",
                    "Authored complex SQL queries for field-level validations, cross-table reconciliations, duplicate detection, null checks, and constraint verification.",
                    "Managed and executed test cases and defect tracking in Azure DevOps.",
                    "Executed and monitored SAP BODS pipeline jobs for ETL processing."
                  ]}
                  tech="SQL, Azure DevOps, SAP BODS, DataChecks"
                />

                <ExperienceItem 
                  title="POC Engagements" 
                  company="Test Data Management (Kotak Life Insurance & Yes Bank)"
                  period="POCs"
                  description={[
                    "Delivered 2 end-to-end POC engagements for test data management and synthetic data generation.",
                    "Leveraged GenRocket GMUS to configure and execute data generation workflows; engineered REST API request bodies to push generated datasets directly into client databases.",
                    "Tested and validated client-facing APIs using Postman."
                  ]}
                  tech="GenRocket GMUS, REST APIs, Postman, Python, CSV pipelines, MySQL"
                />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-800">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 font-mono"><span className="text-brand-blue">04.</span> Featured Projects</h2>
              <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <ProjectCard 
                title="Self-Healing Kubernetes Infrastructure"
                github="https://github.com/ankushp965"
                tags={['Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Helm', 'Prometheus', 'Grafana', 'FastAPI']}
                description={[
                  "Provisioned a Kubernetes cluster and supporting cloud infrastructure using Terraform, replacing manual setup with version-controlled IaC.",
                  "Deployed a containerized application to the cluster via Kubernetes manifests/Helm charts, with automated CI/CD via GitHub Actions.",
                  "Built a Prometheus, Grafana, and Alertmanager observability stack to detect failure patterns in real time.",
                  "Built an automated remediation service that receives webhooks and takes corrective action (restarting crash loops, rolling back releases) with Slack reporting."
                ]}
              />
              <ProjectCard 
                title="Self-Service Banking Tester Portal"
                tags={['FastAPI', 'MySQL', 'Docker', 'AWS EC2', 'LangGraph']}
                description={[
                  "Architected a portal used by 15+ QA engineers to cut synthetic test data turnaround from days to under 10 minutes.",
                  "Engineered a topological sort-based dependency resolver enforcing referential integrity across multi-table parent-child relationships.",
                  "Integrated LangGraph AI agents to auto-map natural language requests to data generation configurations."
                ]}
              />
              <ProjectCard 
                title="Enterprise Multi-Agent AI Policy Assistant"
                tags={['Python', 'LangGraph', 'ChromaDB', 'DeepEval', 'Ollama']}
                description={[
                  "Deployed a privacy-first, Multi-Agent RAG system processing complex enterprise queries with 100% local execution ensuring zero data leakage.",
                  "Developed dynamic orchestration featuring Query Rewriters, Guardrails, and parallel domain-specific Intent Routers.",
                  "Built an automated LLM-as-a-Judge evaluation suite reducing hallucinations to near-zero across 50+ test cases."
                ]}
              />
            </div>
          </FadeInSection>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 border-t border-slate-800">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 font-mono"><span className="text-brand-blue">05.</span> Education</h2>
              <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-slate-800/40 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-brand-teal" size={28} />
                  <h3 className="text-xl font-bold text-slate-100">PG Diploma in Big Data Analytics</h3>
                </div>
                <h4 className="text-brand-blue font-medium text-lg mb-2">Centre for Development of Advanced Computing (CDAC)</h4>
                <p className="text-slate-400 font-mono text-sm">Feb 2025 – Aug 2025</p>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 border-t border-slate-800 text-center max-w-2xl mx-auto">
          <FadeInSection>
            <p className="text-brand-teal font-mono mb-4">06. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Let's Talk Infrastructure</h2>
            <p className="text-slate-400 text-lg mb-10">
              I'm currently looking for new opportunities in DevOps, Platform Engineering, or AI Infrastructure. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <a 
                href="mailto:ankushp965@gmail.com" 
                className="px-8 py-4 bg-brand-blue text-white rounded hover:bg-brand-blue/90 transition-colors font-mono font-medium"
              >
                Say Hello
              </a>
              <a 
                href="/Ankush_Prajapati_Resume.pdf" 
                download 
                className="flex items-center gap-2 px-8 py-4 bg-transparent text-brand-teal border border-brand-teal rounded hover:bg-brand-teal/10 transition-colors font-mono"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
            
            <div className="flex justify-center items-center gap-8 text-slate-400">
              <a href="https://github.com/ankushp965" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors flex items-center gap-2">
                <FaGithub size={24} /> <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ankushp965/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors flex items-center gap-2">
                <FaLinkedin size={24} /> <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href="tel:+918104868833" className="hover:text-brand-teal transition-colors flex items-center gap-2">
                <Terminal size={24} /> <span className="hidden sm:inline">+91 8104868833</span>
              </a>
            </div>
          </FadeInSection>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 font-mono text-sm border-t border-slate-800">
        <p>Built with React & Tailwind CSS. © {new Date().getFullYear()} Ankush Prajapati.</p>
      </footer>
    </div>
  );
}

export default App;
