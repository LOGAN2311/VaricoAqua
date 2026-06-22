import { motion } from "motion/react";
import { useState } from "react";

// Import local assets
import phycoFlowImg from "../../assets/Phyco-Flow.png";
import phycoLiftImg from "../../assets/Phyco-Lift.png";
import phycoBubbleImg from "../../assets/Phyco-Bubble.png";
import phycoPondImg from "../../assets/Phyco-Pond.png";
import phycoConicalImg from "../../assets/Phyco-Conical.png";
import variconCTCImg from "../../assets/Varicon CTC.png";
import phycoTainerImg from "../../assets/Phyco-Tainer.png";
import hdrsImg from "../../assets/HDRS™ Rotifer System.png";
import harvesterImg from "../../assets/Artemia Rotifer Harvester.png";
import centrifugesImg from "../../assets/Industrial Centrifuges.png";
import membraneImg from "../../assets/Membrane Filtration.png";

const technologies = [
  {
    id: 1,
    phase: "phyco-range",
    category: "TUBULAR PBR",
    title: "Phyco-Flow™",
    description:
      "Flagship scalable serpentine photobioreactor designed for commercial outdoor and indoor scaling applications.",
    tag: "Pilot & Commercial Scale",
    image: phycoFlowImg,
  },
  {
    id: 2,
    phase: "phyco-range",
    category: "AIRLIFT COLUMN",
    title: "Phyco-Lift™",
    description:
      "Advanced vertical airlift-column photobioreactor optimized to provide a delicate framework for shear-sensitive strains.",
    tag: "Lab & Pilot Scale",
    image: phycoLiftImg,
  },
  {
    id: 3,
    phase: "phyco-range",
    category: "ANALYTICAL SCREENING",
    title: "Phyco-Bubble™",
    description:
      "A compact, entry-level airlift column configuration bringing precise parameter settings into laboratory tasks.",
    tag: "Experimental Lab Setup",
    image: phycoBubbleImg,
  },
  {
    id: 4,
    phase: "phyco-range",
    category: "OPEN RACEWAY",
    title: "Phyco-Pond™",
    description:
      "High-rate open pond (HRAP) engineering configurations optimized completely for high-efficiency, cost-conscious bulk volumes.",
    tag: "Bulk Open Scale",
    image: phycoPondImg,
  },
  {
    id: 5,
    phase: "phyco-range",
    category: "INOCULUM ACCELERATION",
    title: "Phyco-Conical™",
    description:
      "Cost-effective, specialized conical airlift modules running clean cultures from 60L up directly into scale production volumes.",
    tag: "60 - 370 Litres",
    image: phycoConicalImg,
  },
  {
    id: 6,
    phase: "phyco-range",
    category: "CLIMATE CHAMBERS",
    title: "Varicon CTC™",
    description:
      "Controlled Temperature Chambers built to secure absolute environmental and light stability for accurate metabolic profiling.",
    tag: "Precision Incubation",
    image: variconCTCImg,
  },
  {
    id: 7,
    phase: "phyco-range",
    category: "CONTAINERIZED FACILITY",
    title: "Phyco-Tainer™",
    description:
      "A complete modular laboratory and cultivation layout integrated safely within weather-proof shipping container footprints.",
    tag: "Plug & Play Lab",
    image: phycoTainerImg,
  },
  {
    id: 8,
    phase: "aquaculture",
    category: "HATCHERY FEED FEEDING",
    title: "HDRS™ Rotifer System",
    description:
      "The High-Density Rotifer System automates live feed logistics, eliminating unstable traditional manual batch cultures.",
    tag: "Automated Yield Loop",
    image: hdrsImg,
  },
  {
    id: 9,
    phase: "aquaculture",
    category: "CONCENTRATION",
    title: "Artemia / Rotifer Harvester",
    description:
      "Specialized low-shear concentrator units that wash and cleanly strain living feeds without reducing overall viability.",
    tag: "Low-Shear Filtration",
    image: harvesterImg,
  },
  {
    id: 10,
    phase: "downstream",
    category: "MECHANICAL HARVESTING",
    title: "Industrial Centrifuges",
    description:
      "Heavy separation solutions built intentionally for high-density cream concentrates and processing large liquid footprints.",
    tag: "Biomass Recovery",
    image: centrifugesImg,
  },
  {
    id: 11,
    phase: "downstream",
    category: "CROSS-FLOW PURIFICATION",
    title: "Membrane Filtration",
    description:
      "Sub-micron scale microfiltration and ultrafiltration loops designed for seamless, continuous component isolation.",
    tag: "Sub-Micron Isolation",
    image: membraneImg,
  },
];

const phases = [
  { id: "all", label: "All Technologies" },
  { id: "phyco-range", label: "Phyco-Range Photobioreactors" },
  { id: "aquaculture", label: "Aquaculture Live Feed Production" },
  { id: "downstream", label: "Downstream Processing" },
];

export default function Technologies() {
  const [activePhase, setActivePhase] = useState("all");

  const filteredTech = technologies.filter(
    (tech) => activePhase === "all" || tech.phase === activePhase,
  );

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 selection:bg-[#6633CC]/10 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* HERO SECTION */}
      <header className="pt-32 pb-20 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/5 border border-[#6633CC]/10 text-[#6633CC] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Complete System Catalogue
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-[0.9] mb-8 italic text-slate-900">
              Our Bioprocess <br />
              <span className="text-[#6633CC]">Ecosystem.</span>
            </h1>
            <p className="text-xl text-slate-500 font-body leading-relaxed max-w-2xl mx-auto">
              Explore Varicon Aqua's complete portfolio of advanced
              photobioreactors, automated hatchery feed infrastructures, and
              industrial processing systems.
            </p>
          </motion.div>
        </div>
      </header>

      {/* CONTENT HUB */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* SYSTEM TAB SWITCHER */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 shadow-inner overflow-x-auto max-w-full">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activePhase === phase.id
                    ? "bg-white text-slate-900 shadow-md transform scale-105"
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN PRODUCT SYSTEM CARDS ARRAY */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTech.map((tech) => (
            <motion.div
              layout
              key={tech.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group glass-card rounded-2xl p-6 bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#6633CC]/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-52 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-6">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#6633CC]/0 group-hover:bg-[#6633CC]/10 transition-colors duration-500"></div>
                </div>
                <span className="text-xs font-mono font-bold text-[#6633CC] tracking-widest block mb-2 uppercase">
                  {tech.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6633CC] transition-colors">
                  {tech.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {tech.description}
                </p>
              </div>
              <div className="text-[11px] font-mono bg-slate-100 text-slate-600 px-3 py-2 rounded-lg border border-slate-200 inline-block w-max group-hover:bg-[#6633CC]/5 group-hover:text-[#6633CC] group-hover:border-[#6633CC] transition-colors">
                {tech.tag}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
