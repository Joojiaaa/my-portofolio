import React, { useState } from 'react';
import { 
  FolderGit2, 
  Globe, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Sparkles, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [copied, setCopied] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Informasi Kontak & Sosial Media
  const userEmail = 'Jiananggreni@gmail.com';
  const githubProfile = 'https://github.com/Joojiaaa';
  const linkedinProfile = 'https://www.linkedin.com/in/jiananggreni-jenistiani';
  const tiktokProfile = 'https://www.tiktok.com/@Jei_here';
  const instagramProfile = 'https://www.instagram.com/Joojiaaa_';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Demo simulasi AI
  const handleAiSimulate = (e) => {
    e.preventDefault();
    if (!aiInput.trim()) return;
    
    setIsAnalyzing(true);
    setAiOutput('');
    
    setTimeout(() => {
      setAiOutput(`[AI Analysis Result]\n> Sentiment Score: 0.96 (Positive)\n> Extracted Keywords: ["React", "Web Engineering", "Machine Learning"]\n> Status: Code optimized successfully with 35% performance gain.`);
      setIsAnalyzing(false);
    }, 1200);
  };

  // Daftar Proyek dari Repositori GitHub Jian Anggreni
  const projects = [
    {
      title: 'Interactive Web Portfolio',
      category: 'se',
      desc: 'Portofolio web interaktif berkinerja tinggi berbasis React, Vite, dan Tailwind CSS v4 dengan integrasi widget simulasi AI.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Lucide React'],
      github: 'https://github.com/Joojiaaa/my-portofolio',
      demo: 'https://github.com/Joojiaaa/my-portofolio'
    },
    {
      title: 'Proyek Jurnal Rekayasa Web',
      category: 'se',
      desc: 'Pengembangan aplikasi web modern dengan fokus pada arsitektur perangkat lunak yang scalable dan efisien.',
      tags: ['React', 'JavaScript', 'Tailwind', 'Web Dev'],
      github: 'https://github.com/Joojiaaa/proyek-jurnal-rekayasa-web',
      demo: 'https://github.com/Joojiaaa/proyek-jurnal-rekayasa-web'
    },
    {
      title: 'System Monitoring Kelompok',
      category: 'se',
      desc: 'Sistem pemantauan dan manajemen performa berbasis kolaborasi kelompok secara real-time.',
      tags: ['React', 'Node.js', 'Dashboard', 'Monitoring'],
      github: 'https://github.com/Qadri2012/monitoring-kelompok',
      demo: 'https://github.com/Qadri2012/monitoring-kelompok'
    },
    {
      title: 'Jurnal Project & Web Analytics',
      category: 'ai',
      desc: 'Aplikasi berbasis jurnal interaktif yang dilengkapi pemrosesan data dan visualisasi analitik.',
      tags: ['React', 'Python', 'Data Analytics', 'AI Integration'],
      github: 'https://github.com/Joojiaaa/jurnal_project',
      demo: 'https://github.com/Joojiaaa/jurnal_project'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg text-cyan-400">
            <Terminal className="w-5 h-5" />
            <span>jian.portfolio</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Tentang</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Proyek</a>
            <a href="#demo" className="hover:text-cyan-400 transition-colors">Demo AI</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Kontak</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 justify-between">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Software Engineer & AI Enthusiast</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Jian Anggreni</span>
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Spesialis dalam merancang web aplikasi modern berbasis <strong className="text-slate-200">React</strong> dan mengembangkan solusi teknologi yang mengintegrasikan <strong className="text-slate-200">Kecerdasan Buatan (AI)</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
              >
                Lihat Proyek <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={githubProfile}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 transition-all"
              >
                <FolderGit2 className="w-4 h-4 text-cyan-400" /> GitHub
              </a>
              <a 
                href={linkedinProfile}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-blue-950/60 border border-blue-800/60 text-blue-300 font-semibold hover:bg-blue-900/60 transition-all"
              >
                <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
                </svg> LinkedIn
              </a>
              <a 
                href={tiktokProfile}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 hover:border-pink-500/50 transition-all"
              >
                <svg className="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.63a6.34 6.34 0 1 0 6.34 6.34V9.38a8.16 8.16 0 0 0 4.77 1.52V7.45a4.85 4.85 0 0 1-1-.76z"/>
                </svg> TikTok
              </a>
              <a 
                href={instagramProfile}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 hover:border-purple-500/50 transition-all"
              >
                <svg className="w-4 h-4 fill-current text-purple-400" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg> Instagram
              </a>
            </div>
          </div>

          <div className="w-full md:w-80 p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-500 font-mono">STATUS</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Open for Work
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-400">Main Tech Stack:</p>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'JavaScript', 'Tailwind', 'Python', 'Git'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO INTERAKTIF AI */}
      <section id="demo" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Live Interactive AI Widget Demo</h2>
          </div>
          <p className="text-slate-400 text-sm mb-6">
            Uji simulasi pemrosesan data dan integrasi API AI secara langsung:
          </p>

          <form onSubmit={handleAiSimulate} className="space-y-4">
            <div className="flex gap-3">
              <input 
                type="text"
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Contoh: Analisis optimasi rekayasa web ini..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button 
                type="submit"
                disabled={isAnalyzing}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-sm transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {isAnalyzing ? 'Processing...' : 'Analyze AI'}
              </button>
            </div>
          </form>

          {aiOutput && (
            <div className="mt-4 p-4 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 whitespace-pre-wrap leading-relaxed">
              {aiOutput}
            </div>
          )}
        </div>
      </section>

      {/* PROYEK */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Proyek & Case Studies</h2>
            <p className="text-slate-400 text-sm mt-1">Daftar proyek dari repositori GitHub Jian Anggreni</p>
          </div>

          <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 self-start">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'all' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Semua
            </button>
            <button 
              onClick={() => setActiveTab('se')}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'se' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              Software Eng
            </button>
            <button 
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === 'ai' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'}`}
            >
              AI System
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{project.category} project</span>
                  <div className="flex gap-2 text-slate-400">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white" title="Lihat di GitHub"><FolderGit2 className="w-4 h-4" /></a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-cyan-400" title="Link Demo"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{project.desc}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAK */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto text-center border-t border-slate-800/80">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Mari Bekerja Sama</h2>
          <p className="text-slate-400 text-sm">
            Tertarik berkolaborasi atau diskusi seputar proyek rekayasa web & AI? Hubungi saya lewat kontak berikut:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-3 p-3 bg-slate-900 border border-slate-800 rounded-lg w-full sm:w-auto flex-1 min-w-[260px]">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-mono text-slate-200 truncate">{userEmail}</span>
              <button 
                onClick={handleCopyEmail}
                className="ml-auto p-1.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 transition-colors"
                title="Salin Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a 
              href={linkedinProfile} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-blue-950/60 border border-blue-800/60 rounded-lg text-blue-300 hover:bg-blue-900/60 transition-all font-medium text-xs px-5 whitespace-nowrap"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/>
              </svg>
              LinkedIn
            </a>

            <a 
              href={tiktokProfile} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:bg-slate-800 hover:border-pink-500/50 transition-all font-medium text-xs px-5 whitespace-nowrap"
            >
              <svg className="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.63a6.34 6.34 0 1 0 6.34 6.34V9.38a8.16 8.16 0 0 0 4.77 1.52V7.45a4.85 4.85 0 0 1-1-.76z"/>
              </svg>
              TikTok
            </a>

            <a 
              href={instagramProfile} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:bg-slate-800 hover:border-purple-500/50 transition-all font-medium text-xs px-5 whitespace-nowrap"
            >
              <svg className="w-4 h-4 fill-current text-purple-400" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-600 border-t border-slate-900">
        <p>© 2026 Jian Anggreni. Built with React, Vite & Tailwind CSS.</p>
      </footer>

    </div>
  );
}