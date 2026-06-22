import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Beaker,
  Zap,
  Filter,
  BarChart3,
  Search,
  ChevronRight,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   CASE STUDIES DATA
───────────────────────────────────────────────────────────────── */

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  category: string;
  description: string;
  image: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "bogazichi",
    title: "Pioneering Algae Biotechnology in Turkey",
    client: "Bogazici University",
    location: "Istanbul, Turkey",
    category: "R&D & Biofuels",
    description:
      "Researchers at Bogazici explore a diverse range of algae species, evaluating their potential in sustainable biofuels, innovative food products, and extraction of high-value bioactive compounds.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    impactMetrics: [
      { label: "Species Evaluated", value: "12+" },
      { label: "Research Focus", value: "Biofuels" },
    ],
    tags: ["Laboratory Scale", "Energy", "Extraction"],
  },
  {
    id: "opbio",
    title: "Advancing Specialized Strains for Food Production",
    client: "OPBio",
    location: "Okinawa, Japan",
    category: "Nutraceuticals",
    description:
      "Dedicated to advancing algae-based biotechnology through the development of specialised strains for novel applications. Among their diverse algae portfolio is Pavlova, a strain gaining recognition for its nutritional benefits.",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    impactMetrics: [
      { label: "Key Strain", value: "Pavlova" },
      { label: "Sector", value: "Food Tech" },
    ],
    tags: ["Okinawa", "Bio-Processing", "Innovation"],
  },
  {
    id: "heirbaut",
    title: "Chlorella Production: From Farm to Novel Food",
    client: "Heirbaut aLgriculture",
    location: "Temse, Belgium",
    category: "Sustainable Agriculture",
    description:
      "A forward-thinking farm-based enterprise seeking to produce Chlorella-a nutrient-rich microalgae-as a novel food stream, tapping into emerging consumer demand for sustainable, high-quality protein sources.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    impactMetrics: [
      { label: "Primary Product", value: "Chlorella" },
      { label: "Business Model", value: "Circular" },
    ],
    tags: ["Agri-Tech", "Protein", "Circular Economy"],
  },
];

/* ─────────────────────────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────────────────────────── */

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-[#6633CC]/30 hover:shadow-xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" /> */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 text-[10px] font-bold tracking-widest uppercase">
            {study.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 mb-2 text-[#6633CC] font-mono text-[11px] uppercase tracking-widest font-bold">
          <Globe className="w-3 h-3" />
          {study.location}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6633CC] transition-colors">
          {study.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3">
          {study.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {study.impactMetrics.map((metric, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-4"
            >
              <div className="text-[10px] text-slate-400 uppercase font-normal tracking-widest mb-1">
                {metric.label}
              </div>
              <div className="text-lg font-semibold text-slate-700">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* <button className="w-full py-4 rounded-2xl bg-[#6633CC]/5 border border-[#6633CC]/10 text-[#6633CC] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#6633CC] hover:text-white transition-all">
          Read Case Study{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button> */}
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("All Cases");

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeTab === "All Cases") return true;
    if (activeTab === "Biofuels") return study.category.includes("Biofuels");
    return study.category === activeTab;
  });

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 selection:bg-[#6633CC]/10 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* NO GRID BACKGROUND */}

      {/* ORB DECORATION */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#6633CC]/5 blur-[150px] -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#6633CC]/5 blur-[120px] translate-y-1/2 -translate-x-1/4 z-0 pointer-events-none" />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <header className="pt-32 pb-20 px-6 border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/5 border border-[#6633CC]/10 text-[#6633CC] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <BarChart3 className="w-3 h-3" /> Impact Catalog
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black leading-[0.9] mb-8 italic text-slate-900">
                From Laboratory <br />
                <span className="text-[#6633CC]">To Impact.</span>
              </h1>
              <p className="text-xl text-slate-500 font-body leading-relaxed max-w-2xl mx-auto">
                Real-world implementation of Varicon Aqua technology across
                universities, biotech firms, and industrial agriculture
                facilities worldwide.
              </p>
            </motion.div>
          </div>
        </header>

        {/* SEARCH & FILTER STRIP */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              {[
                "All Cases",
                "Aquaculture",
                "Sustainable Agriculture",
                "Nutraceuticals",
                "Biofuels",
              ].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveTab(filter)}
                  className={`px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all ${activeTab === filter ? "bg-[#6633CC] text-white shadow-lg" : "text-slate-500 hover:text-[#6633CC] hover:bg-[#6633CC]/5"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search regions or tech..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#6633CC] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* MAIN FEED */}
        <main className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredStudies.map((study) => (
                  <motion.div
                    layout
                    key={study.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaseStudyCard study={study} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>

        {/* PARTNER CTA */}
        <section className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto rounded-[3rem] bg-slate-50 border border-slate-200 p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6633CC]/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-8">
              Have a project in mind? <br />
              <span className="text-slate-400">
                Let's build the future together.
              </span>
            </h2>

            <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
              Whether you are an academic researcher or a commercial operator,
              our engineering team is ready to design your next bioprocess
              solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-10 py-5 bg-[#6633CC] text-white font-black text-[13px] uppercase tracking-[0.2em] rounded-full transition-all hover:scale-105 shadow-[0_20px_40px_rgba(102,51,204,0.3)]">
                Contact Sales
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-black text-[13px] uppercase tracking-[0.2em] rounded-full transition-all hover:bg-slate-50">
                View Resources
              </button>
            </div>
          </motion.div>
        </section>

        {/* FOOTER MINI */}
        <footer className="py-12 px-6 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-xs font-mono tracking-widest uppercase">
            Varicon Aqua Solutions © 2026 // Precision Cultivation Systems
          </p>
        </footer>
      </div>
    </div>
  );
}
