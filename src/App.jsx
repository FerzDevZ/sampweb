import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { CATEGORIES, CONTENT } from './data/content';

// --- UTILS ---
const Icon = ({ name, size = 14, className = "" }) => {
  const LucideIcon = Icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : <Icons.HelpCircle size={size} className={className} />;
};

// --- COMPONENTS ---

const StatusPanel = ({ onMenuClick }) => {
  const [cpu, setCpu] = useState(1.8);
  useEffect(() => {
    const interval = setInterval(() => setCpu(prev => Math.abs(parseFloat(prev) + (Math.random() - 0.2)).toFixed(1)), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4 py-3 px-6 md:px-10 bg-[#060606]/95 border-b border-white/5 text-[9px] font-mono text-neutral-500 tracking-tighter backdrop-blur-xl sticky top-0 z-[100] w-full">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-2 text-orange-600 hover:bg-orange-600/10 transition-colors"
      >
        <Icons.Menu size={20} />
      </button>

      <div className="flex items-center gap-2 overflow-hidden">
        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse shrink-0" />
        <span className="font-bold tracking-[0.1em] text-neutral-300 uppercase truncate">Secure_Node_AF</span>
      </div>

      <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-4">
        <div className="flex items-center gap-2">
          <Icons.Cpu size={12} className="text-orange-600/40" />
          <span>LOAD: {cpu}%</span>
        </div>
      </div>

      <div className="flex items-center gap-3 ml-auto shrink-0">
        <Icons.ShieldCheck size={12} className="text-orange-600/50" />
        <span className="uppercase font-black text-[8px] tracking-widest text-[#FF5500] hidden xs:inline">Elite.v5.4</span>
      </div>
    </div>
  );
};

const Sidebar = ({ active, setActive, isOpen, onClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] lg:hidden"
          />
        )}
      </AnimatePresence>

      <div className={`fixed inset-y-0 left-0 w-80 bg-[#080808] border-r border-[#151515] flex flex-col z-[120] transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 md:p-10 border-b border-white/5 shrink-0 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-orange-600/10 border border-orange-600/20">
              <Icons.Terminal size={20} className="text-orange-600" />
            </div>
            <div>
              <h1 className="text-2xl font-black italic tracking-tighter leading-none text-white uppercase">PAWN<span className="text-orange-600">.</span>DOCS</h1>
              <p className="text-[8px] font-black uppercase text-neutral-600 tracking-[.5em] mt-2">Vanguard_Sys</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 text-neutral-500 hover:text-white">
            <Icons.X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-10 custom-scrollbar scroll-smooth">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="space-y-1">
              <h3 className="px-4 text-[9px] font-black text-neutral-700 tracking-[0.6em] mb-4 uppercase flex items-center gap-3">
                <div className="w-1 h-1 bg-orange-600/30" />
                {cat.label}
              </h3>
              <div className="space-y-0.5">
                {cat.items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActive(item.id);
                      onClose();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left group flex flex-col px-5 py-4 transition-all relative outline-none ${active === item.id ? 'bg-white text-black translate-x-1' : 'hover:bg-white/[0.03] text-neutral-500 hover:text-white'}`}
                  >
                    <div className="flex items-center gap-4 mb-1 relative z-10">
                      <Icon name={item.icon} size={14} className={active === item.id ? "text-orange-600" : "text-neutral-700 group-hover:text-neutral-400"} />
                      <span className="text-[11px] font-black uppercase tracking-tight">{item.title}</span>
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-widest pl-7 relative z-10 ${active === item.id ? 'text-black/40' : 'text-neutral-700'}`}>
                      {item.subtitle}
                    </span>
                    {active === item.id && (
                      <motion.div
                        layoutId="activeBumper"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-600 z-20"
                        initial={false}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
    </>
  );
};

const ContentModule = ({ id }) => {
  const detail = CONTENT[id] || CONTENT['install'];

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-6 md:px-12 py-10 md:py-20 relative overflow-hidden flex flex-col items-center"
    >
      <div className="w-full max-w-6xl relative">
        {/* Background Index (Lowered Opacity and Adjusted Position) */}
        <div className="absolute top-[-40px] left-[-20px] text-[150px] md:text-[200px] font-black text-white/[0.01] pointer-events-none select-none italic leading-none uppercase tracking-tighter hidden lg:block">
          {detail.title.substring(0, 5)}
        </div>

        <header className="mb-16 md:mb-24 relative z-10 pr-4 md:pr-0">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-center gap-4 uppercase text-[10px] font-black tracking-[0.4em] text-orange-600/60">
                <div className="w-8 md:w-12 h-[1px] bg-orange-600/40" />
                DOKUMENTASI_INTEL
              </div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.85] text-white uppercase break-words">
                {detail.title.split('_').join('\n')}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:flex gap-8 md:gap-12 border-l-2 border-orange-600/30 pl-8 py-4 bg-gradient-to-r from-orange-600/5 to-transparent pr-8">
              {Object.entries(detail.meta).map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1.5 shrink-0">
                  <span className="text-[9px] font-black text-neutral-700 uppercase tracking-[0.2em]">{k}</span>
                  <span className="text-xs md:text-sm font-bold text-neutral-300 uppercase tracking-tighter truncate">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[1px] w-full mt-10 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-20 relative z-10 w-full overflow-hidden">
          <div className="xl:col-span-8 w-full min-w-0">
            <div
              className="prose-elite w-full max-w-full overflow-hidden"
              dangerouslySetInnerHTML={{ __html: detail.body }}
            />
          </div>

          <div className="xl:col-span-4 space-y-12 md:space-y-16 w-full min-w-0">
            <div className="p-8 md:p-10 border border-white/5 bg-white/[0.02] shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-6 md:w-8 h-px bg-orange-600" />
                <h6 className="text-[10px] font-black text-orange-600 flex items-center gap-3 uppercase tracking-[0.4em]">
                  MODUL_INTEL
                </h6>
              </div>
              <ul className="space-y-6 md:space-y-8 text-[11px] text-neutral-400 font-bold uppercase leading-relaxed tracking-tight">
                <li className="flex gap-4 border-b border-white/5 pb-6">
                  <span className="text-orange-600 font-black text-base italic leading-none">01</span>
                  <span>Validasi memori pada setiap siklus.</span>
                </li>
                <li className="flex gap-4 border-b border-white/5 pb-6">
                  <span className="text-orange-600 font-black text-base italic leading-none">02</span>
                  <span>Pisahkan thread database utama.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-orange-600 font-black text-base italic leading-none">03</span>
                  <span>Redundansi anti-cheat berkala.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 md:p-10 border border-white/5 bg-black/80 font-mono text-[9px] leading-[2.2] text-neutral-800 uppercase font-black tracking-widest relative overflow-hidden">
              <div className="flex justify-between border-b border-white/5 pb-4 mb-4 text-orange-600/40">
                <span className="flex items-center gap-2"><Icons.Database size={10} /> SYS_DUMP</span>
              </div>
              <div className="truncate">SEG_A: LOAD_SUCCESS</div>
              <div className="truncate">SEG_B: VERIFY_OK</div>
              <div className="mt-6 flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex-1 h-2 bg-white/5 relative overflow-hidden" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [active, setActive] = useState('install');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060606] text-white selection:bg-orange-600 selection:text-black font-mono overflow-x-hidden">
      <div className="fixed inset-0 bg-[#060606] noise opacity-[0.1] pointer-events-none z-[200] mix-blend-screen" />
      <div className="fixed inset-0 brutalist-grid opacity-[0.05] pointer-events-none z-10" />

      <Sidebar
        active={active}
        setActive={setActive}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="lg:pl-80 relative min-h-screen flex flex-col z-20 w-full overflow-x-hidden">
        <StatusPanel onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="flex-1 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <ContentModule id={active} />
          </AnimatePresence>
        </div>

        <div className="hidden md:flex fixed bottom-10 right-10 flex-col items-end gap-2 opacity-30 pointer-events-none z-50">
          <div className="h-[1px] w-12 bg-white" />
          <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white">X_PROTO.v5.4</span>
        </div>
      </main>

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[60%] h-[60%] bg-orange-600/5 blur-[250px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-white/[0.01] blur-[150px] rounded-full" />
      </div>
    </div>
  );
}

export default App;
