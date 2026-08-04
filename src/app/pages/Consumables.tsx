import { motion } from "motion/react";
import {
  Beaker,
  Leaf,
  Droplets,
  FlaskConical,
  Zap,
  ShieldCheck,
  Box,
  Truck,
  ChevronRight,
  Filter,
  Microscope,
  Waves,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   CONSUMABLES DATA
───────────────────────────────────────────────────────────────── */

interface Spec {
  label: string;
  value: string;
}

interface ConsumableItem {
  sku: string;
  tag: string;
  tagType: "marine" | "fresh" | "org" | "partner";
  title: string;
  formula: string;
  description: string;
  specs: Spec[];
  icon: React.ReactNode;
}

const IN_HOUSE_CONSUMABLES: ConsumableItem[] = [
  {
    sku: "SYS.CH-F2P",
    tag: "Marine Powder",
    tagType: "marine",
    title: "Cell-Hi F2P",
    formula: "[ Guillard F/2 Baseline ]",
    description:
      "Highly soluble dry powder formulation designed to eliminate liquid shipping weight while maintaining exact profile matches.",
    specs: [
      { label: "Application", value: "Marine Algae" },
      { label: "Solubility", value: "100% Instantly Soluble" },
    ],
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    sku: "SYS.CH-WP",
    tag: "Bivalve Focus",
    tagType: "marine",
    title: "Cell-Hi WP",
    formula: "[ Walnes Powder Protocol ]",
    description:
      "Concentrated trace element formula configured precisely for dense flagellate, diatom, and larval system configurations.",
    specs: [
      { label: "Yield Rate", value: "1kg / 12,500L" },
      { label: "Target Flora", value: "Marine Flagellates" },
    ],
    icon: <Filter className="w-5 h-5" />,
  },
  {
    sku: "SYS.CH-JWP",
    tag: "Freshwater Base",
    tagType: "fresh",
    title: "Cell-Hi JWP",
    formula: "[ Jaworski Method Matrix ]",
    description:
      "Calibrated nutrient profile engineered to secure ideal growth kinetics across complex freshwater microalgal strains.",
    specs: [
      { label: "Water Type", value: "Freshwater Only" },
      { label: "Configuration", value: "Trace Elements Blends" },
    ],
    icon: <Waves className="w-5 h-5" />,
  },
  {
    sku: "SYS.CH-HP",
    tag: "Enriched",
    tagType: "fresh",
    title: "Cell-Hi HP",
    formula: "[ High Performance Compound ]",
    description:
      "Booster compound packed with enhanced multi-element matrices to push target systems to premium division speed spikes.",
    specs: [
      { label: "Output Tier", value: "Accelerated" },
      { label: "Yield Profile", value: "Max Density Boost" },
    ],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    sku: "SYS.CH-SP",
    tag: "Alkaline",
    tagType: "fresh",
    title: "Cell-Hi SP",
    formula: "[ Zarrouk Medium Adaptation ]",
    description:
      "Pre-blended dry base developed exclusively to mirror high-alkalinity parameters required by stable Spirulina loops.",
    specs: [
      { label: "Optimization", value: "Spirulina Spec" },
      { label: "Media Type", value: "High Alkalinity Blends" },
    ],
    icon: <FlaskConical className="w-5 h-5" />,
  },
  {
    sku: "SYS.CH-BIO",
    tag: "Organic Liquid",
    tagType: "org",
    title: "Cell-Hi Bio",
    formula: "[ Plant-Based Fluid Concentrate ]",
    description:
      "Strictly certified organic liquid allocation completely free of synthetic urea elements for hyper-controlled purity pipelines.",
    specs: [
      { label: "Urea Level", value: "0.0% Purity" },
      { label: "Certification", value: "100% Organic Derived" },
    ],
    icon: <Leaf className="w-5 h-5" />,
  },
];

const DISTRIBUTIONS: ConsumableItem[] = [
  {
    sku: "DIST.INVE",
    tag: "Partner Brand",
    tagType: "partner",
    title: "INVE Aquaculture",
    formula: "[ Official UK Distribution Pipeline ]",
    description:
      "Direct allocation sourcing high-hatch Artemia cysts, specialized larval diets, and premium hatchery health technologies.",
    specs: [
      { label: "Availability", value: "Cysts & Diets" },
      { label: "Logistics Tier", value: "Direct Sourced" },
    ],
    icon: <Box className="w-5 h-5" />,
  },
  {
    sku: "DIST.REED",
    tag: "Partner Brand",
    tagType: "partner",
    title: "Reed Mariculture",
    formula: "[ Instant Algae® Europe Supply ]",
    description:
      "Authorized logistical infrastructure providing intact, marine microalgae whole-cell liquid concentrates directly to facilities.",
    specs: [
      { label: "Form Factor", value: "Liquid Concentrate" },
      { label: "Cell Matrix", value: "Intact Whole Cell Feeds" },
    ],
    icon: <Truck className="w-5 h-5" />,
  },
];

/* ─────────────────────────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────────────────────────── */

interface ConsumableCardProps {
  data: ConsumableItem;
  isPartner?: boolean;
}

function ConsumableCard({ data, isPartner = false }: ConsumableCardProps) {
  const tagStyles: Record<ConsumableItem["tagType"], string> = {
    marine: "bg-purple-50 text-purple-700 border-purple-200",
    fresh: "bg-purple-50 text-purple-700 border-purple-200",
    org: "bg-purple-50 text-purple-700 border-purple-200",
    partner: "bg-purple-50 text-purple-700 border-purple-200",
  };

  const cardColors: Record<string, string> = {
    "SYS.CH-F2P": "bg-[#EBF7F9]", // Cyan-ish
    "SYS.CH-WP": "bg-[#FBF4EF]", // Warm Peach
    "SYS.CH-JWP": "bg-[#F8F5FF]", // Soft Purple
    "SYS.CH-HP": "bg-[#F1F7FB]", // Soft Blue
    "SYS.CH-SP": "bg-[#F8F5FF]", // Soft Purple
    "SYS.CH-BIO": "bg-[#F5F3F9]", // Lavender
    "DIST.INVE": "bg-[#FBF7F1]", // Sand/Tan
    "DIST.REED": "bg-[#FBF2EF]", // Rosy Peach
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`group ${cardColors[data.sku] || "bg-white"} border border-slate-100 rounded-3xl p-8 h-[380px] flex flex-col justify-between transition-all duration-300 hover:border-[#6633CC]/30 hover:shadow-[0_20px_50px_-12px_rgba(102,51,204,0.12)]`}
    >
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="font-mono text-[10px] text-slate-600 font-bold tracking-widest">
            {data.sku}
          </span>
          <span
            className={`text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border ${tagStyles[data.tagType]}`}
          >
            {data.tag}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-2">
          <div
            className={`p-2.5 rounded-xl transition-colors duration-300 ${
              isPartner
                ? "bg-orange-50 text-[#6633CC] group-hover:bg-orange-100"
                : "bg-[#F8F5FF] text-[#6633CC] group-hover:bg-[#6633CC]/10"
            }`}
          >
            {data.icon}
          </div>
          <h3 className="text-xl font-black text-[#6633CC] tracking-tight group-hover:text-[#6633CC] transition-colors">
            {data.title}
          </h3>
        </div>

        <div
          className={`font-mono text-[11px] font-bold mb-5 ${isPartner ? "text-[#6633CC]" : "text-[#6633CC]"}`}
        >
          {data.formula}
        </div>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 group-hover:text-slate-600 transition-colors">
          {data.description}
        </p>
      </div>

      <div className="border-t border-[#6633CC]/5 pt-6 grid grid-cols-2 gap-4">
        {data.specs.map((spec: Spec, i: number) => (
          <div key={i} className="flex flex-col gap-0.5">
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
              {spec.label}
            </span>
            <span className="text-xs font-semibold text-slate-700">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Consumables() {
  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 selection:bg-[#6633CC]/10 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* ORB DECORATION */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#6633CC]/5 blur-[150px] -translate-y-1/2 translate-x-1/4 z-0 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[#6633CC]/5 blur-[120px] translate-y-1/2 -translate-x-1/4 z-0 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-32 pb-20 px-6 border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/5 border border-[#6633CC]/10 text-[#6633CC] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Beaker className="w-3 h-3" /> Tech Consumables
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-black leading-[0.9] mb-8 italic text-slate-900">
                Bio-Tech Nutrient <br className="hidden md:block" />
                <span className="text-[#6633CC]">Matrices.</span>
              </h1>
              <p className="text-xl text-slate-500 font-body leading-relaxed max-w-2xl mx-auto">
                Verified technical parameters for in-house standard formulations
                and global brand distributions. Engineered for precision
                cultivation from R&D to commercial scale.
              </p>
            </motion.div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section 1 */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">
                Cell-Hi Formulations
              </h2>
              <div className="h-px w-full bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {IN_HOUSE_CONSUMABLES.map((item, idx) => (
                <motion.div
                  key={item.sku}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ConsumableCard data={item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">
                Ecosystem Distributions
              </h2>
              <div className="h-px w-full bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DISTRIBUTIONS.map((item, idx) => (
                <motion.div
                  key={item.sku}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <ConsumableCard data={item} isPartner={true} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-12 bg-gradient-to-r from-[#6633CC] to-[#8B5CF6] rounded-[2.5rem] text-center relative overflow-hidden group shadow-[0_32px_64px_-16px_rgba(102,51,204,0.3)]"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a custom formulation?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
              Our lab team can engineer site-specific nutrient blends tailored
              to your local water chemistry and target strains.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-[#6633CC] hover:bg-slate-50 font-bold rounded-full transition-all group flex items-center gap-2"
              >
                Consult an Engineer
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold rounded-full border border-white/40 transition-all"
              >
                Request Price List
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Consumables;
