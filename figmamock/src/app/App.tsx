import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Mail, 
  Linkedin, 
  Phone, 
  FileText,
  Plus,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Monitor,
  MousePointer2,
  Users,
  Zap,
  Check
} from 'lucide-react';
import { PixelBackground } from './components/PixelBackground';

export default function App() {
  return (
    <div className="min-h-screen text-[#1A1A1A] font-['Space_Grotesk'] selection:bg-[#3373FF] selection:text-white pb-20">
      <PixelBackground />
      
      {/* STICKY NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-black tracking-tighter"
          >
            M
          </motion.div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#now" className="hover:opacity-60 transition-opacity">Now</a>
            <a href="#arc" className="hover:opacity-60 transition-opacity">Arc</a>
            <a href="#process" className="hover:opacity-60 transition-opacity">Process</a>
            <a href="#connect" className="hover:opacity-60 transition-opacity">Connect</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 md:pt-64 px-6 mb-40">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-sm font-bold uppercase tracking-[0.4em] mb-4 text-[#EE4266]">Mike Mongeau</h1>
            <h2 className="text-6xl md:text-[160px] font-black leading-[0.85] tracking-[-0.06em] uppercase mb-12">
              Product builder.<br />
              Trust architect.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3373FF] to-[#2EC4B6]">Shipping since 2006.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
              <div className="text-2xl md:text-3xl font-medium leading-tight max-w-xl">
                I build products that earn trust and ship at scale. I lead teams through ambiguity, turn complex policy into simple product, and grow businesses with user love.
              </div>
              <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-black/40">
                <p>Based in Seattle.</p>
                <p>19 years of building. Still learning.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT I'M BUILDING NOW */}
      <section id="now" className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block text-[#3373FF]">What I'm building now</span>
              <h3 className="text-5xl md:text-7xl font-black leading-none mb-8">
                THE TRUST LAYER<br />OF THE INTERNET.
              </h3>
              <p className="text-xl leading-relaxed text-black/70 mb-12 max-w-md">
                As Head of Product at <span className="text-black font-bold">K-ID</span>, I'm leading product, design, and research to make the internet safer for kids and families. We shipped at-scale age verification for brands like Snap, Discord, Twitch, Hasbro, and Supercell.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="px-4 py-2 bg-white border border-black/10 rounded-lg shadow-sm flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase">TIME Best Inventions</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD23F]" />
                  <span className="text-[10px] font-bold">2025</span>
                </div>
                <div className="px-4 py-2 bg-white border border-black/10 rounded-lg shadow-sm flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase">Fast Company</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EE4266]" />
                  <span className="text-[10px] font-bold">Next Big Thing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Account graph growth", value: "5x", bg: "bg-white" },
                { label: "MRR in 3 months", value: "2x", bg: "bg-[#3373FF] text-white" },
                { label: "Verified users", value: "6.3M", bg: "bg-white" },
                { label: "Sales pipeline", value: "$1.5M", bg: "bg-white" },
                { label: "Brands on board", value: "12+", bg: "bg-[#1A1A1A] text-white" },
                { label: "Trust score", value: "High", bg: "bg-white" },
              ].map((stat, i) => (
                <div key={i} className={`p-8 rounded-3xl border border-black/5 flex flex-col justify-end min-h-[180px] shadow-xl ${stat.bg}`}>
                  <span className="text-4xl font-black mb-2">{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER ARC */}
      <section id="arc" className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">Career Arc</h3>
            <p className="text-xl text-black/50 font-medium">19 years of building, told in three phases.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phase 3 */}
            <div className="relative p-10 bg-white border border-black/5 rounded-[2.5rem] shadow-2xl overflow-hidden group">
              <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-[#EE4266]/5 rounded-full blur-3xl group-hover:bg-[#EE4266]/10 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-8 block">2022 — Present</span>
              <h4 className="text-4xl font-black uppercase mb-4 leading-none">Phase 3</h4>
              <p className="text-xl font-bold mb-8 leading-tight">Led product for millions. Now building trust at scale.</p>
              <p className="text-sm text-black/60 mb-12">
                Shaped $32M ARR features for Xbox families. Created safer play for millions of kids. Won TIME Best Inventions. Now leading product at K-ID.
              </p>
              <div className="flex gap-4 mt-auto">
                <span className="px-3 py-1 bg-black text-white rounded text-[10px] font-black uppercase">K-ID</span>
                <span className="px-3 py-1 bg-[#EE4266] text-white rounded text-[10px] font-black uppercase">Xbox</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative p-10 bg-white border border-black/5 rounded-[2.5rem] shadow-2xl overflow-hidden group">
              <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-[#3373FF]/5 rounded-full blur-3xl group-hover:bg-[#3373FF]/10 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-8 block">2017 — 2022</span>
              <h4 className="text-4xl font-black uppercase mb-4 leading-none">Phase 2</h4>
              <p className="text-xl font-bold mb-8 leading-tight">Turned support into growth. AI into seats.</p>
              <p className="text-sm text-black/60 mb-12">
                Scaled customer discovery to 700+ stakeholders. Used AI to grow 1.3M paid seats. Reframed support as a growth engine.
              </p>
              <div className="flex gap-4 mt-auto">
                <span className="px-3 py-1 bg-[#3373FF] text-white rounded text-[10px] font-black uppercase">M365</span>
                <span className="px-3 py-1 bg-black text-white rounded text-[10px] font-black uppercase">Windows</span>
              </div>
            </div>

            {/* Phase 1 */}
            <div className="relative p-10 bg-white border border-black/5 rounded-[2.5rem] shadow-2xl overflow-hidden group">
              <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-[#2EC4B6]/5 rounded-full blur-3xl group-hover:bg-[#2EC4B6]/10 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-8 block">2006 — 2017</span>
              <h4 className="text-4xl font-black uppercase mb-4 leading-none">Phase 1</h4>
              <p className="text-xl font-bold mb-8 leading-tight">Built empathy from the ground up.</p>
              <p className="text-sm text-black/60 mb-12">
                Started at the frontline. Talked to thousands of real customers. Reduced support incidents by 58%. Listening first.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-[#2EC4B6] text-white rounded text-[10px] font-black uppercase">Windows</span>
                <span className="px-3 py-1 bg-black text-white rounded text-[10px] font-black uppercase">SharePoint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECT WINS - GRID STYLE */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#3373FF,transparent_50%)]" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] mb-12 opacity-40">Select Wins</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {[
                { v: "5x", l: "Account graph growth" },
                { v: "+21%", l: "MAU growth" },
                { v: "$32M", l: "ARR shaped" },
                { v: "1.3M", l: "Seats added" },
                { v: "+266%", l: "Account creation" }
              ].map((win, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-6xl font-black mb-2">{win.v}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{win.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW I BUILD */}
      <section id="process" className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <h3 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter italic">How I Build</h3>
            <p className="text-xl font-bold text-[#3373FF] mb-2 uppercase tracking-widest">Products people trust, shipped fast and well.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: "Listen", desc: "Users, data, policy, risk", icon: Users },
              { step: "Frame", desc: "Problem, bets, hypotheses", icon: Monitor },
              { step: "Align", desc: "Legal, design, eng, biz", icon: MousePointer2 },
              { step: "Ship", desc: "Fast, safe, with craft", icon: Zap },
              { step: "Measure", desc: "Growth, trust, engagement", icon: ShieldCheck },
              { step: "Scale", desc: "Platform, GTM, systems", icon: Plus },
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 border border-black/5 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                  <p.icon size={24} />
                </div>
                <h4 className="text-xl font-black uppercase mb-2">{p.step}</h4>
                <p className="text-xs font-medium text-black/50 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 overflow-hidden py-4 border-y border-black/5">
            <div className="flex gap-12 items-center whitespace-nowrap animate-marquee">
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className="flex gap-12 items-center text-xs font-black uppercase tracking-[0.5em] opacity-20 italic">
                  <span>Listen</span><ArrowRight size={14} /><span>Frame</span><ArrowRight size={14} /><span>Align</span><ArrowRight size={14} /><span>Ship</span><ArrowRight size={14} /><span>Measure</span><ArrowRight size={14} /><span>Scale</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER ENERGY */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">Founder Energy</h3>
            <p className="text-xl text-black/50 font-medium">Always building on the side.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SquadUp */}
            <div className="bg-white p-12 rounded-[3rem] border border-black/5 shadow-2xl relative group">
              <div className="absolute top-12 right-12">
                <span className="px-4 py-2 bg-[#FFD23F] text-black rounded-full font-black text-[10px] uppercase tracking-widest">Building 2025</span>
              </div>
              <h4 className="text-5xl font-black uppercase mb-8">SquadUp</h4>
              <p className="text-xl font-bold leading-relaxed mb-8">
                A kid-first platform for safe community beyond IRL. Think "Discord for Kids" — where real friendships, fun, and digital citizenship thrive.
              </p>
              <p className="text-sm text-black/60 mb-12 max-w-md">
                Assembling the founding team and shaping a multi-million ARR opportunity.
              </p>
              <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] group-hover:gap-6 transition-all cursor-pointer">
                Learn more <ArrowRight size={16} />
              </div>
            </div>

            {/* NewsReactor */}
            <div className="bg-[#EE4266] text-white p-12 rounded-[3rem] shadow-2xl relative">
              <div className="absolute top-12 right-12">
                <span className="px-4 py-2 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest">Sold 2006</span>
              </div>
              <h4 className="text-5xl font-black uppercase mb-8">NewsReactor</h4>
              <p className="text-xl font-bold leading-relaxed mb-8">
                Bootstrapped a niche content platform to 15,000+ monthly visits and 5,000+ community users. Negotiated and completed a successful exit.
              </p>
              <p className="text-sm text-white/60 mb-12 max-w-md">
                First proof I could build, grow, and sell.
              </p>
              <div className="flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] opacity-60">
                Mission Complete <Check size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LET'S BUILD - CONTACT */}
      <section id="connect" className="px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#3373FF] to-[#2EC4B6] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-[0.85] mb-12">
                LET'S BUILD<br />WHAT<br />MATTERS.
              </h2>
              <p className="text-2xl font-medium opacity-80 max-w-md">
                Always open to people who build with purpose. Let's create something trustworthy.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:mike@mikemongeau.com" className="block p-8 bg-white text-black rounded-[2rem] hover:scale-[1.02] transition-transform group">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Email</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl md:text-3xl font-black tracking-tight">mike@mikemongeau.com</span>
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </div>
              </a>
              <a href="https://linkedin.com/in/mikemongeau" className="block p-8 bg-black text-white rounded-[2rem] hover:scale-[1.02] transition-transform group">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">LinkedIn</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl md:text-3xl font-black tracking-tight">linkedin.com/in/mikemongeau</span>
                  <Linkedin className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-white/10 rounded-[2rem] backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Phone</p>
                  <p className="text-xl font-bold">763-234-9932</p>
                </div>
                <button className="p-8 bg-white/10 rounded-[2rem] backdrop-blur-md flex flex-col justify-between hover:bg-white/20 transition-colors">
                   <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Resume</p>
                   <div className="flex items-center gap-2">
                     <span className="text-xl font-bold italic">PDF</span>
                     <FileText size={18} />
                   </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-black/5">
          <div className="flex items-center gap-4">
            <span className="font-black italic text-xl tracking-tighter">MIKE MONGEAU</span>
            <div className="w-1 h-1 bg-black/20 rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Seattle, WA</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            Building what matters since 2006.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
