"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "@/components/EventCard";
import {
  Clock,
  Terminal,
  Activity,
  Calendar,
  FolderOpen,
  X,
  Minus,
  Maximize2,
  Cpu,
  Wifi,
  Battery,
  MapPin,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Hook for countdown
const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const distance = new Date(targetDate).getTime() - new Date().getTime();
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

// Window Component (Glassmorphism Modal)
const OSWindow = ({ title, icon: Icon, onClose, children, isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed inset-4 md:inset-10 z-50 flex flex-col glass-panel rounded-2xl overflow-hidden shadow-2xl holographic-border"
    >
      {/* Window Header */}
      <div className="bg-slate-50/80 border-b border-cyan-200/50 px-4 py-3 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-2 text-slate-700 font-mono text-sm uppercase tracking-wide">
          <Icon className="w-4 h-4 text-cyan-600" />
          {title}
        </div>
        <div className="flex items-center gap-2">
          <button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors flex items-center justify-center group">
            <Minus className="w-2 h-2 text-slate-500 opacity-0 group-hover:opacity-100" />
          </button>
          <button className="w-3 h-3 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors flex items-center justify-center group">
            <Maximize2 className="w-2 h-2 text-slate-500 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors flex items-center justify-center group shadow-[0_0_10px_rgba(248,113,113,0.5)]"
          >
            <X className="w-2 h-2 text-white opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>
      {/* Window Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 bg-white/50 relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/20 via-white/0 to-indigo-100/20" />
        <div className="relative z-10 max-w-5xl mx-auto h-full">{children}</div>
      </div>
    </motion.div>
  );
};

// App Icon Component
const AppIcon = ({ title, icon: Icon, onClick, className = "", delay = 0 }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`group flex flex-col items-center gap-3 w-28 ${className}`}
    >
      <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center shadow-[0_4px_20px_rgba(14,165,233,0.1)] group-hover:shadow-[0_8px_30px_rgba(14,165,233,0.3)] transition-all duration-300 border border-cyan-100 group-hover:border-cyan-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="w-8 h-8 text-cyan-600 transition-transform duration-300 group-hover:scale-110 relative z-10 drop-shadow-sm" />
      </div>
      <span className="text-xs font-mono font-medium text-slate-600 bg-white/60 px-2 py-1 rounded backdrop-blur-sm border border-slate-200/50 tracking-wider shadow-sm uppercase group-hover:text-cyan-700 transition-colors">
        {title}
      </span>
    </motion.button>
  );
};

export default function OSDesktop() {
  const [activeWindow, setActiveWindow] = useState(null); // 'about', 'events', 'schedule', 'register'
  const time = useCountdown("2026-03-13T08:30:00");
  const [isBooting, setIsBooting] = useState(true);

  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setCurrentTime(
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    
    // Simulate boot sequence
    const bootTimer = setTimeout(() => setIsBooting(false), 2500);
    
    return () => {
      clearInterval(timer);
      clearTimeout(bootTimer);
    };
  }, []);

  // Events Content
  const techEvents = [
    { title: "Tech Con", desc: "Present your research papers in this competitive paper presentation event.", part: "2 participants/team", dur: "7 min + 3 min Q&A", type: "technical" },
    { title: "Web Matrix", desc: "Design and develop a website with HTML and CSS based on a spot topic.", part: "Individual", dur: "45 minutes", type: "technical" },
    { title: "Compile & Conquer", desc: "A thrilling coding challenge that tests your problem-solving skills under pressure.", part: "Individual", dur: "45 minutes", type: "technical" }
  ];

  const nonTechEvents = [
    { title: "Intelliquest", desc: "A thrilling quiz competition that tests your knowledge and quick thinking.", part: "Individual", dur: "30 minutes", type: "non-technical" },
    { title: "Prompt2Pixel", desc: "Unleash your creativity by generating images from text prompts.", part: "Individual", dur: "Multiple rounds", type: "non-technical" },
    { title: "ImageXplore", desc: "Explore the world of images and discover hidden patterns and connections.", part: "Individual", dur: "Multiple rounds", type: "non-technical" },
  ];

  if (isBooting) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-mono text-cyan-600 selection:bg-cyan-200 p-6 flex-col relative overflow-hidden">
        {/* Holographic boot grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center justify-center max-w-sm w-full"
        >
          <div className="w-20 h-20 mb-8 rounded-3xl glass-panel flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.3)] border-2 border-cyan-400 relative overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-transparent opacity-30" 
            />
            <Activity className="w-10 h-10 text-cyan-600 animate-pulse relative z-10" />
          </div>
          
          <h1 className="text-2xl font-black text-slate-800 tracking-widest uppercase mb-2">INNOVSPACE_OS</h1>
          <p className="text-xs font-bold text-cyan-600 tracking-[0.3em] mb-12">SYSTEM INITIALIZING</p>

          <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden mb-4 shadow-inner">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] text-slate-400 uppercase tracking-widest w-full text-center space-y-1"
          >
            <p>Loading Kernel Modules...</p>
            <p className="text-cyan-600">Mounting /sys/events [OK]</p>
            <p>Establishing secure connection...</p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-grid text-slate-800 font-sans overflow-hidden relative selection:bg-cyan-200">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-200/20 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-200/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

      {/* Top Nav / Status Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-xl border-b border-cyan-100/50 shadow-sm h-12 px-4 flex items-center justify-between text-xs font-mono font-medium text-slate-600">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-cyan-700">
            <Activity className="w-4 h-4 animation-pulse" />
            <span className="font-bold tracking-widest hidden sm:inline">INNOVSPACE_OS</span>
            <span className="font-bold tracking-widest sm:hidden">INSP_OS</span>
          </div>
          <div className="hidden md:flex items-center gap-4 border-l border-slate-200 pl-4">
            <span className="text-slate-500">SYS.VERSION: 26.0</span>
            <span className="text-slate-500">STATUS: ONLINE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-slate-500 border-r border-slate-200 pr-4">
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-4 h-4 text-cyan-600" />
          <span className="text-slate-800 font-bold">{currentTime || "00:00"}</span>
        </div>
      </header>

      {/* Desktop Workspace */}
      <main className="pt-20 px-6 md:px-12 h-screen flex flex-col md:flex-row gap-8 relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Left Column: Clock Widget & System Status */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden holographic-border shadow-lg space-y-4"
          >
            <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase font-bold tracking-wider mb-2">
              <Clock className="w-4 h-4" /> System Launch Countdown
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { v: time.days, l: "DAYS" },
                { v: time.hours, l: "HRS" },
                { v: time.minutes, l: "MIN" },
                { v: time.seconds, l: "SEC" }
              ].map((t, i) => (
                <div key={i} className="bg-white/60 rounded-xl p-3 shadow-inner shadow-cyan-100 border border-white">
                  <div className="text-2xl lg:text-3xl font-bold font-mono text-slate-800 tracking-tighter">
                    {t.v.toString().padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-cyan-700 font-bold tracking-widest mt-1">{t.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Announcement Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden holographic-border shadow-lg"
          >
            <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 mb-2 tracking-tighter leading-tight">
              InnovSPACE<span className="text-cyan-500">&apos;26</span>
            </h1>
            <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">Technical Symposium</h2>
            <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 border border-cyan-100 rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-600 font-medium font-mono leading-relaxed">
                Dept of Computer Science & Engineering<br/>
                St. Xavier&apos;s Catholic College of Engg.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-600 bg-white/80 p-3 rounded-lg border border-slate-100">
              <MapPin className="w-4 h-4 text-cyan-600" />
              Conference Hall (8:30 A.M)
            </div>
          </motion.div>
        </div>

        {/* Right Column: App Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 p-4">
            <AppIcon delay={0.3} title="sys.info" icon={Terminal} onClick={() => setActiveWindow('about')} />
            <AppIcon delay={0.4} title="events.exe" icon={FolderOpen} onClick={() => setActiveWindow('events')} />
            <AppIcon delay={0.5} title="timeline.dat" icon={Calendar} onClick={() => setActiveWindow('schedule')} />
            <a href="https://forms.gle/uaEGNdwzi3tKqGJ59" target="_blank" rel="noopener noreferrer">
              <AppIcon delay={0.7} title="register.sh" icon={ExternalLink} />
            </a>
          </div>
        </div>

      </main>

      {/* Windows Layer */}
      <AnimatePresence>
        
        {/* ABOUT WINDOW */}
        <OSWindow 
          isActive={activeWindow === 'about'} 
          title="sys.info [Read-Only]" 
          icon={Terminal} 
          onClose={() => setActiveWindow(null)}
        >
          <div className="space-y-8 font-mono">
            <div>
              <h2 className="text-3xl font-black text-slate-800 mb-2 border-b-2 border-cyan-200 inline-block pb-1">System Overview</h2>
              <p className="text-lg text-slate-600 mt-4 leading-relaxed max-w-3xl">
                Join us for an exciting technical symposium featuring a variety of <span className="text-cyan-600 font-bold bg-cyan-50 px-1 rounded">technical and non-technical modules</span>. Showcase your skills, connect with peers, and conquer the system to win <span className="text-indigo-500 font-bold bg-indigo-50 px-1 rounded">exciting bounties!</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 border border-slate-200 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-600" /> Staff Coordinators
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-cyan-400" />Dr. A. Bamila Virgin Louis (HoD)</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-cyan-400" />Dr. R. Barona (Faculty Advisor)</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-cyan-400" />Mrs. M. C. Sheeba (Asst. Advisor)</li>
                </ul>
              </div>

              <div className="bg-white/80 border border-slate-200 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-indigo-600" /> Student Coordinators
                </h3>
                 <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-indigo-400" />Miss S.P. Kethzia (Secretary)</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-indigo-400" />Ph: 9626144221</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-indigo-400" />Mr. A. Ebin (Joint Secretary)</li>
                </ul>
              </div>
            </div>
          </div>
        </OSWindow>

        {/* EVENTS WINDOW */}
        <OSWindow 
          isActive={activeWindow === 'events'} 
          title="events.exe [Directory]" 
          icon={FolderOpen} 
          onClose={() => setActiveWindow(null)}
        >
          <div className="space-y-12 pb-8">
            <div className="mx-auto text-center mb-8">
               <h2 className="text-3xl font-black text-slate-800 mb-2 inline-block">Event Modules Database</h2>
               <div className="h-1 w-24 bg-cyan-400 mx-auto rounded-full mt-2" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">/sys/technical</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techEvents.map((evt, i) => (
                  <EventCard key={i} title={evt.title} description={evt.desc} participants={evt.part} duration={evt.dur} type={evt.type} delay={i * 0.1} />
                ))}
              </div>
            </div>

            <div className="h-px bg-slate-200 w-full my-8" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">/sys/non_technical</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {nonTechEvents.map((evt, i) => (
                  <EventCard key={i} title={evt.title} description={evt.desc} participants={evt.part} duration={evt.dur} type={evt.type} delay={i * 0.1} />
                ))}
              </div>
            </div>
          </div>
        </OSWindow>

        {/* SCHEDULE WINDOW (Timeline process) */}
        <OSWindow 
          isActive={activeWindow === 'schedule'} 
          title="timeline.dat [Execution Process]" 
          icon={Calendar} 
          onClose={() => setActiveWindow(null)}
        >
          <div className="max-w-2xl mx-auto space-y-8 pb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-8 border-b-2 border-cyan-200 inline-block pb-2">Execution Process</h2>
            
            <div className="relative border-l-2 border-cyan-200 pl-8 ml-4 space-y-10">
              {/* Timeline Items */}
              {[
                { time: "08:30 AM", title: "System Initialization", subtitle: "Registration & Assembly" },
                { time: "09:00 AM", title: "Boot Sequence", subtitle: "Inauguration Ceremony" },
                { time: "10:00 AM", title: "Process Execution", subtitle: "Technical Modules Commence" },
                { time: "12:30 PM", title: "System Pause", subtitle: "Lunch Break" },
                { time: "01:30 PM", title: "Secondary Process Execution", subtitle: "Non-Technical Modules Commence" },
                { time: "03:30 PM", title: "System Terminate & Commit", subtitle: "Valedictory & Prize Distribution" }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10" />
                  <div className="glass-panel bg-white/60 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" />
                    <span className="text-xs font-mono font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded inline-block mb-3">{item.time}</span>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-slate-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </OSWindow>
        
      </AnimatePresence>

      {/* Desktop Footer Nav / Dock hint */}
      {/* <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-slate-400 tracking-widest hidden md:block">
         SYSTEM READY. CLICK AN APP MODULE TO INITIATE.
      </div> */}
    </div>
  );
}
