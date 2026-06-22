import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Users,
  Target,
  History,
  Globe2,
  ArrowRight,
  Award,
  Microscope,
  Building2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Layers,
  TrendingUp,
  FlaskConical,
  Beaker,
  Factory,
  Zap,
} from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="bg-white selection:bg-[#6633CC]/10 selection:text-[#6633CC]"
    >
      {/* ─────────────────────────────────────────────────────────────────
         HERO SECTION — High-End Engineering Reveal
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Abstract Engineering Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-[#6633CC]/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#C4A8FF]/10 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#6633CC 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6633CC]/5 border border-[#6633CC]/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#6633CC]" />
                <span className="text-[10px] font-black tracking-[0.2em] text-[#6633CC] uppercase">
                  Established 2004
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-display font-black text-[#1A1A2E] leading-[0.95] mb-10 tracking-tight">
                Engineering the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6633CC] via-[#8B5CF6] to-[#C4A8FF]">
                  Blue Economy
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-xl text-[#6B7280] leading-relaxed font-body mb-12">
                For over three decades, Varicon Aqua has been the global leader
                in algal biotechnology, deliverying precision-engineered
                solutions that transform research into industrial reality.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { label: "Systems Deployed", val: "400+" },
                  { label: "Global Reach", val: "20+ Countries" },
                  { label: "Expertise", val: "30+ Years" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center px-8 border-r border-[#6633CC]/10 last:border-r-0"
                  >
                    <span className="text-3xl font-black text-[#1A1A2E]">
                      {stat.val}
                    </span>
                    <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#6633CC] to-transparent" />
          <span className="text-[9px] font-black tracking-[0.3em] text-[#6633CC] uppercase vertical-text">
            Scroll
          </span>
        </motion.div> */}
      </section>

      {/* ─────────────────────────────────────────────────────────────────
         THE JOURNEY — Vertical Interactive Timeline
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-gradient-to-br from-[#6633CC] via-[#7C4EE4] to-[#A877EE] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Three Decades of <br />
                <span className="text-[#C4A8FF]">Innovation.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                From our roots in London to becoming a global authority in
                aquaculture engineering, our journey is defined by a relentless
                pursuit of technical excellence.
              </p>

              <div className="relative pl-9 space-y-16">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />

                {[
                  {
                    year: "1994",
                    title: "The Foundation",
                    desc: "Founded in London to address the growing demand for specialized aquaculture technology.",
                  },
                  {
                    year: "2010",
                    title: "Phyco-™ Technology",
                    desc: "Launched our flagship tubular photobioreactor range, setting new industry standards.",
                  },
                  {
                    year: "2024",
                    title: "Global Expansion",
                    desc: "Now serving 400+ clients across 6 continents with bespoke industrial solutions.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute left-[-52px] top-0 w-8 h-8 rounded-full bg-[#6633CC] border-4 border-[#C4A8FF] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                    <div className="text-[#C4A8FF] font-black text-2xl mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="sticky top-40 h-[600px] rounded-[48px] overflow-hidden group">
              <img
                src="https://www.variconaqua.com/wp-content/uploads/2025/03/8.png"
                alt="Varicon Aqua Industrial Lab"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#6633CC] flex items-center justify-center shrink-0">
                      <Factory className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-black mb-1">
                        HQ Inhouse Lab
                      </div>
                      <div className="text-white/60 text-sm">
                        Where engineering meets biology
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
         CORE PILLARS — Bento Grid Layout
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#F8F5FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-6">
              Built on <span className="text-[#6633CC]">Core Pillars</span>
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
              Our multidisciplinary approach combines engineering precision with
              biological expertise to deliver unparalleled cultivation results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Vertical Integration */}
            <motion.div
              whileHover={{ y: -10 }}
              className="col-span-1 md:col-span-2 p-12 rounded-[48px] bg-white border border-[#6633CC]/5 shadow-xl shadow-[#6633CC]/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                <Layers className="w-64 h-64 text-[#6633CC]" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#6633CC]/5 flex items-center justify-center mb-10 text-[#6633CC] group-hover:bg-[#6633CC] group-hover:text-white transition-all duration-500">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-[#1A1A2E] mb-6">
                  Vertical Integration
                </h3>
                <p className="text-[#6B7280] text-lg leading-relaxed max-w-md">
                  We control every aspect of the process from the initial design
                  and 3D modeling to in-house fabrication and global
                  installation. This end-to-end oversight guarantees the
                  reliability our clients demand.
                </p>
                <div className="mt-auto pt-12 flex items-center gap-4 text-[#6633CC] font-bold text-sm tracking-widest uppercase">
                  <span>Learn about our process</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: Expertise */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-12 rounded-[48px] bg-gradient-to-br from-[#6633CC] via-[#7C4EE4] to-[#A877EE] text-white shadow-2xl shadow-[#6633CC]/20 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-10 text-white group-hover:scale-110 transition-all duration-500">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black mb-6">Scientific Rigor</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                With a deep understanding of algal physiology, our systems are
                optimized to provide the ideal environment for high-density
                culture growth.
              </p>
            </motion.div>

            {/* Pillar 3: Scale */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-12 rounded-[48px] bg-gradient-to-br from-[#6633CC] via-[#7C4EE4] to-[#A877EE] text-white group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-10 text-white group-hover:scale-110 transition-all duration-500">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-black mb-6">Proven Scalability</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Whether it's a 5L laboratory setup or a 400,000L industrial
                farm, our technology scales seamlessly to meet your production
                goals.
              </p>
            </motion.div>

            {/* Pillar 4: Global */}
            <motion.div
              whileHover={{ y: -10 }}
              className="col-span-1 md:col-span-2 p-12 rounded-[48px] bg-white border border-[#6633CC]/5 shadow-xl shadow-[#6633CC]/5 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F8F5FF]" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="shrink-0 w-32 h-32 rounded-3xl bg-[#6633CC]/5 flex items-center justify-center">
                  <Globe2 className="w-12 h-12 text-[#6633CC]" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#1A1A2E] mb-4">
                    Global Network
                  </h3>
                  <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                    Our reach extends across 20+ countries, with project
                    managers and support teams ready to deploy anywhere in the
                    world. We bridge the distance with remote monitoring and
                    dedicated on-site consulting.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 rounded-full bg-[#6633CC]/5 text-[#6633CC] text-[10px] font-black tracking-widest uppercase">
                      Europe
                    </span>
                    <span className="px-4 py-2 rounded-full bg-[#6633CC]/5 text-[#6633CC] text-[10px] font-black tracking-widest uppercase">
                      Asia
                    </span>
                    <span className="px-4 py-2 rounded-full bg-[#6633CC]/5 text-[#6633CC] text-[10px] font-black tracking-widest uppercase">
                      Americas
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
         THE TEAM — Scientific Leadership
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A2E] mb-8">
                Guided by <span className="text-[#6633CC]">Experts.</span>
              </h2>
              <p className="text-[#6B7280] text-lg">
                Our multidisciplinary team comprises engineers, biologists, and
                project managers with a singular focus: your cultivation
                success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Ned",
                role: "Executive Board",
                img: "https://www.variconaqua.com/wp-content/uploads/2025/03/7.png",
              },
              {
                name: "Jacob",
                role: "Engineering Lead",
                img: "https://www.variconaqua.com/wp-content/uploads/2025/03/2.png",
              },
              {
                name: "Nathan",
                role: "Senior Consultant",
                img: "https://www.variconaqua.com/wp-content/uploads/2025/03/5.png",
              },
              {
                name: "Marco",
                role: "Project Manager",
                img: "https://www.variconaqua.com/wp-content/uploads/2025/03/9.png",
              },
              {
                name: "Joe",
                role: "Technical Specialist",
                img: "https://www.variconaqua.com/wp-content/uploads/2025/03/3.png",
              },
              {
                name: "Marco",
                role: "Culture Specialist",
                img: "https://www.variconaqua.com/wp-content/uploads/2025/03/4.png",
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-[#F8F5FF] mb-8 relative">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6633CC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-black text-[#1A1A2E] mb-1">
                    {m.name}
                  </h3>
                  <div className="text-[11px] font-black text-[#6633CC] uppercase tracking-[0.2em]">
                    {m.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
         FINAL CTA — Scalable Future
      ───────────────────────────────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[64px] bg-gradient-to-br from-[#6633CC] via-[#7C4EE4] to-[#A877EE] overflow-hidden px-8 py-12 md:p-24 text-center group">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6633CC]/30 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-[1.2]">
                Let's Build the <br />
                <span className="text-transparent bg-clip-text bg-[#C4A8FF]">
                  Bio-Future.
                </span>
              </h2>
              <p className="text-white/60 text-xl mb-14 leading-relaxed">
                Ready to take your aquaculture project from laboratory research
                to industrial scale? Consult with our engineering experts today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#6633CC] text-white hover:bg-[#cab2fb] hover:text-[#1A1A2E] font-black text-xs tracking-[0.2em] uppercase rounded-2xl transition-all shadow-xl shadow-[#6633CC]/40 hover:-translate-y-1">
                  Start Your Project
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black text-xs tracking-[0.2em] uppercase rounded-2xl border border-white/10 transition-all hover:border-white/20">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
