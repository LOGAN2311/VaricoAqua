import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Cpu,
  Activity,
  Droplets,
  Fish,
  Leaf,
  Atom,
  CheckCircle2,
  BarChart2,
  Database,
  Settings,
  Shield,
  Zap,
  RefreshCw,
  TrendingUp,
  Globe,
  Award,
  Users,
} from "lucide-react";
import heroBackground from "../../assets/Hero_Bg.png";
// Use better local images for these placeholders if they exist, or fix paths
import aquacultureImg from "../../assets/HDRS™ Rotifer System.png";
import industriesAquacultureImg from "../../assets/Aquaculture.png";
import industriesBiotechnologyImg from "../../assets/Biotechnology.png";
import industriesAgricultureImg from "../../assets/Agriculture.png";

/* ─────────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden ">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Algae cultivation facility"
          className="w-full h-full object-cover scale-105"
        />

        {/* Radial center highlight for content emphasis */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(21,5,34,0.08),_rgba(21,5,34,0.32)_28%,_rgba(21,5,34,0.7)_58%,_rgba(21,5,34,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18),_rgba(255,255,255,0)_50%,_rgba(8,8,16,0.18)_100%)]" />
        {/* Liquid Glass Blobs - Matching Video Biology (Teal/Purple) */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 150, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className=" bg-[#6633CC]/1 rounded-full blur-[5px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -150, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className=" bg-[#6633CC]/1 pointer-events-none"
        />
      </div>

      <div className=" mx-auto px-6 relative z-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative py-20 px-8 md:px-24 rounded-[4rem]   "
        >
          <span className="text-[#FFFFFF] text-[18px] font-thin mb-8 block text-shadow-2xl">
            Est. 2004 • Worcester, UK • World-Leading Algae Engineering
            Solutions
          </span>
          <h1 className="font-display font-black text-[clamp(48px,9vw,88px)] text-[#FFFFFF]  leading-[1.2] mb-10 italic tracking-normal">
            <span className="text-shadow-lg/30 text-shadow-[#6633CC]">
              Concept
            </span>{" "}
            <br />
            <span className="text-[#8b5bfb] text-shadow-xs text-shadow-[#FFFFFF]">
              to Cultivation
            </span>
          </h1>
          <p className="font-body text-[#FFFFFF] max-w-2xl mx-auto text-[1.3em] mb-12 leading-relaxed">
            From photobioreactors to fully automated control systems, Varicon
            Aqua engineers the precision infrastructure that scales algae
            cultivation from lab bench to industrial production, worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="#cta"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(102, 51, 204, 0.5)",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-[#6633CC] to-[#8B5CF6] text-white font-display font-black text-[13px] tracking-[0.2em] uppercase rounded-full transition-all flex items-center gap-3 relative overflow-hidden group"
            >
              <span className="relative z-10">Buy Now</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#6633CC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.5)",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-[#FFFFFF] text-[#FFFFFF] font-display font-black text-[13px] tracking-[0.2em] uppercase rounded-full backdrop-blur-xs transition-all flex items-center gap-3"
            >
              Talk to Expert
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-data text-[9px] text-white/30 uppercase tracking-[0.3em] rotate-90 origin-left translate-x-1 translate-y-10">
          SCROLL
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
      </motion.div> */}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   STATS STRIP
───────────────────────────────────────────────────────────────── */
function StatsStrip() {
  const stats = [
    {
      value: "40+",
      label: "Years of Expertise",
      caption: "Decades of industry experience",
    },
    {
      value: "400+",
      label: "Global Installations",
      caption: "Systems deployed worldwide",
    },
    {
      value: "3",
      label: "Industries Served",
      caption: "Key growth sectors",
    },
    {
      value: "400,000L",
      label: "Litres Deployed",
      caption: "Scalable cultivation systems",
    },
  ];

  return (
    <section className="bg-white border-y border-[#6633CC]/8 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/10 border border-[#6633CC]/25 text-[#6633CC] text-[11px] font-semibold tracking-wider uppercase mb-6">
            Proven Performance
          </p>
          <h2 className="font-display font-black text-[clamp(32px,5vw,36px)] text-[#1A1A2E] mb-4">
            Global Leadership in Algal Engineering
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#6633CC]/8 border border-[#6633CC]/8 rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-8 py-10 text-center leading-8"
            >
              <div className="font-display font-black text-[clamp(36px,5vw,52px)] text-[#6633CC] leading-none mb-1.5">
                {s.value}
              </div>
              <div className="font-body text-sm font-semibold text-[#1A1A2E] mb-1">
                {s.label}
              </div>
              <div className="font-data text-[11px] text-[#6B7280] tracking-wider">
                {s.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUCT_TABS = [
  {
    id: "pbr",
    label: "Phyco-Range PBRs",
    Icon: Layers,
    hero: {
      name: "Phyco-Flow System",
      tag: "Tubular Photobioreactor",
      description:
        "Industrial-scale closed-loop tubular photobioreactor delivering unmatched volumetric productivity. Engineered for maximum light utilisation with full integration of pH, CO₂, and temperature control loops. Available from 600L R&D units to 30,000L+ commercial installations.",
      specs: [
        { k: "Volume Range", v: "600L – 30,000L+" },
        { k: "Light Efficiency", v: "Up to 98% utilisation" },
        { k: "Temp. Control", v: "±0.5 °C precision" },
        { k: "CO₂ Delivery", v: "Automated pH loop" },
      ],
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&h=380&fit=crop&auto=format",
    },
    cards: [
      {
        Icon: Droplets,
        title: "Phyco-Lift",
        desc: "Airlift PBR for gentle culture mixing with minimal shear stress, ideal for fragile strains.",
        bg: "bg-white",
      },
      {
        Icon: Activity,
        title: "Phyco-Bubble",
        desc: "Bubble column design for high-density production with simplified gas management.",
        bg: "bg-white",
      },
      {
        Icon: Layers,
        title: "Phyco-Tainer",
        desc: "Containerised, plug-and-play PBR for rapid deployment in any global location.",
        bg: "bg-white",
      },
    ],
  },
  {
    id: "aqua",
    label: "Aquaculture Systems",
    Icon: Fish,
    hero: {
      name: "HDRS Live Feed Platform",
      tag: "High-Density Rearing System",
      description:
        "Purpose-engineered high-density rearing systems for larval fish and shellfish production. Integrates microalgae supply, Artemia, and rotifer culture in an automated closed-loop platform delivering consistent live feed quality at any production scale.",
      specs: [
        { k: "Rearing Density", v: "Up to 500 larvae/L" },
        { k: "Feed Dosing", v: "Continuous automated" },
        { k: "Water Quality", v: "Real-time monitoring" },
        { k: "Scale", v: "R&D to commercial" },
      ],
      image: aquacultureImg,
    },
    cards: [
      {
        Icon: RefreshCw,
        title: "Artemia Harvester",
        desc: "High-efficiency harvesting and enrichment systems for Artemia n-nauplii and rotifers.",
        bg: "bg-white",
      },
      {
        Icon: Shield,
        title: "Biosecure Design",
        desc: "Closed containment architecture preventing cross-contamination across rearing units.",
        bg: "bg-white",
      },
      {
        Icon: TrendingUp,
        title: "Yield Analytics",
        desc: "Real-time production dashboards with daily yield reporting and batch traceability.",
        bg: "bg-white",
      },
    ],
  },
  {
    id: "control",
    label: "Variconnect™ Control",
    Icon: Cpu,
    hero: {
      name: "Variconnect™ Platform",
      tag: "SCADA-Grade Automation",
      description:
        "Proprietary cultivation automation platform with full IoT connectivity and cloud telemetry. Monitors and controls pH, temperature, dissolved oxygen, light intensity, and nutrient dosing across your entire facility from a single unified dashboard.",
      specs: [
        { k: "Parameters Monitored", v: "12+ simultaneous" },
        { k: "Logging Interval", v: "Every 30 seconds" },
        { k: "Connectivity", v: "4G · Ethernet · WiFi" },
        { k: "Interface", v: "Web app + REST API" },
      ],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=380&fit=crop&auto=format",
    },
    cards: [
      {
        Icon: BarChart2,
        title: "Live Telemetry",
        desc: "Real-time sensor dashboards with configurable alarm thresholds and SMS alerts.",
        bg: "bg-white",
      },
      {
        Icon: Database,
        title: "Full Data Logging",
        desc: "Complete audit trail with exportable CSV, JSON, and direct database integration.",
        bg: "bg-white",
      },
      {
        Icon: Settings,
        title: "Remote Control",
        desc: "Adjust cultivation parameters from anywhere in the world via secure web interface.",
        bg: "bg-white",
      },
    ],
  },
  {
    id: "consumables",
    label: "Consumables",
    Icon: Atom,
    hero: {
      name: "Cell-Hi Nutrient Range",
      tag: "Precision Cultivation Media",
      description:
        "Scientifically formulated nutrient media developed for commercial microalgae cultivation. The Cell-Hi range provides optimal macro and micro-nutrient profiles across freshwater, marine, and high-productivity applications including specialist formulations for EPA, pigment, and biomass targets.",
      specs: [
        { k: "Formulations", v: "6 specialist variants" },
        { k: "Target Species", v: "20+ algae strains" },
        { k: "Format", v: "Concentrated liquid" },
        { k: "Certification", v: "Food-grade compliant" },
      ],
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&h=380&fit=crop&auto=format",
    },
    cards: [
      {
        Icon: Leaf,
        title: "Cell-Hi-F2P & WP",
        desc: "General purpose marine and freshwater microalgae nutrient solution.",
        bg: "bg-[#EBF7F9]",
      },
      {
        Icon: Zap,
        title: "Cell-Hi-HP",
        desc: "High-performance formulation engineered for maximum growth rate and productivity.",
        bg: "bg-[#F1F7FB]",
      },
      {
        Icon: Globe,
        title: "Live Feed Products",
        desc: "Reed Mariculture algae pastes, Inve Artemia, and specialist hatchery chemicals.",
        bg: "bg-[#FBF7F1]",
      },
    ],
  },
];

function ProductBento() {
  const [activeTab, setActiveTab] = useState("pbr");
  const tab = PRODUCT_TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="products" className="py-28 bg-[#F8F5FF]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/10 border border-[#6633CC]/25 text-[#6633CC] text-[11px] font-semibold tracking-wider uppercase mb-6">
            Cultivation Ecosystem
          </p>
          <h2 className="font-display font-black text-[clamp(32px,5vw,52px)] text-[#1A1A2E] mb-4">
            Engineering for Every Scale
          </h2>
          <p className="font-body text-[#6B7280] max-w-xl mx-auto text-base leading-relaxed">
            Explore our integrated ecosystem of cultivation solutions from our
            flagship.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PRODUCT_TABS.map((t) => {
            const TabIcon = t.Icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === t.id
                    ? "bg-[#6633CC] text-white shadow-[0_4px_16px_rgba(102,51,204,0.3)]"
                    : "bg-[#F8F5FF] text-[#4B5563] border border-[#6633CC]/12 hover:border-[#6633CC]/30 hover:text-[#6633CC]"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            <div className="lg:col-span-2 rounded-2xl border border-[#6633CC]/12 bg-white overflow-hidden group shadow-sm">
              <div className="relative h-52 overflow-hidden bg-[#F3EEFF]">
                <img
                  src={tab.hero.image}
                  alt={tab.hero.name}
                  className="w-full h-full object-cover group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                />
                <div
                  className="absolute inset-0"
                  // style={{
                  //   background:
                  //     "linear-gradient(to bottom, transparent 20%, rgba(255,255,255,0.95) 100%)",
                  // }}
                />
                <div className="absolute top-4 left-5">
                  <span className="px-3 py-1 rounded-full bg-[#6633CC] text-white text-[10px] font-data font-semibold tracking-[0.14em] uppercase shadow-lg">
                    {tab.hero.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 pt-5">
                <h3 className="font-display font-bold text-2xl text-[#1A1A2E] mb-2">
                  {tab.hero.name}
                </h3>
                <p className="font-body text-sm text-[#6B7280] leading-relaxed mb-6">
                  {tab.hero.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {tab.hero.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-[#F8F5FF] border border-[#6633CC]/8 px-4 py-3"
                    >
                      <div className="font-data text-[10px] text-[#6B7280] mb-1 uppercase tracking-[0.12em]">
                        {spec.k}
                      </div>
                      <div className="font-body text-sm font-semibold text-[#1A1A2E]">
                        {spec.v}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[#6633CC] hover:gap-3 transition-all duration-200">
                  View Full Specifications <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {tab.cards.map((card, i) => {
                const CardIcon = card.Icon;
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-2xl border border-[#6633CC]/10 ${card.bg || "bg-white"} p-5 hover:border-[#6633CC]/30 hover:shadow-md transition-all duration-200 group shadow-sm`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#6633CC]/10 border border-[#6633CC]/15 flex items-center justify-center mb-3.5 group-hover:bg-[#6633CC]/18 transition-colors duration-200">
                      <CardIcon className="w-5 h-5 text-[#6633CC]" />
                    </div>
                    <h4 className="font-display font-bold text-base text-[#1A1A2E] mb-1.5">
                      {card.title}
                    </h4>
                    <p className="font-body text-xs text-[#6B7280] leading-relaxed">
                      {card.desc}
                    </p>
                    <button className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#6633CC]/60 hover:text-[#6633CC] transition-colors duration-150">
                      Learn more <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const industries = [
    {
      Icon: Fish,
      title: "Aquaculture",
      accent: "#6633CC",
      description:
        "Supplying algal feedstock for shellfish hatcheries and juvenile fish production. Our systems deliver consistent, high-quality live feed at any production scale.",
      applications: [
        "Oyster & mussel hatcheries",
        "Juvenile finfish rearing",
        "Shrimp larviculture",
        "Live rotifer & Artemia culture",
      ],
      image: industriesAquacultureImg,
    },
    {
      Icon: Atom,
      title: "Biotechnology",
      accent: "#8855DD",
      description:
        "Novel compound discovery, high-value pigment extraction, and bioactive molecule production at pilot to commercial scale with full downstream processing.",
      applications: [
        "High-value pigment extraction",
        "Omega-3 & EPA production",
        "Pharmaceutical precursors",
        "University & R&D facilities",
      ],
      image: industriesBiotechnologyImg,
    },
    {
      Icon: Leaf,
      title: "Agriculture",
      accent: "#6633CC",
      description:
        "Introducing novel microalgae crops for soil biostimulant, protein supplement, and sustainable fertiliser applications supporting the circular bioeconomy.",
      applications: [
        "Biostimulant production",
        "Crop protein supplementation",
        "Wastewater bioremediation",
        "Circular bioeconomy systems",
      ],
      image: industriesAgricultureImg,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-[#F8F5FF] relative overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#6633CC]/4 blur-[140px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/10 border border-[#6633CC]/25 text-[#6633CC] text-[11px] font-semibold tracking-wider uppercase mb-6">
            Industries We Serve
          </p>
          <h2 className="font-display font-black text-[clamp(32px,5vw,52px)] text-[#1A1A2E] mb-4">
            Living Science at Every Scale
          </h2>
          <p className="font-body text-[#6B7280] max-w-lg mx-auto text-base">
            Three industries. One integrated platform. Precision cultivation
            engineered to meet the unique biological and commercial demands of
            each sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {industries.map((ind, i) => {
            const IndIcon = ind.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-[#6633CC]/10 bg-white overflow-hidden group hover:shadow-[0_8px_40px_rgba(102,51,204,0.12)] transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden bg-[#F3EEFF]">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 100%, white 100%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-5">
                    <div
                      className="w-9 h-9 p-5 rounded-4xl  flex items-center justify-center"
                      style={{
                        backgroundColor: `${ind.accent}15`,
                        border: `1px solid ${ind.accent}30`,
                      }}
                    >
                      <IndIcon
                        className="w-5 h-5 bg-white"
                        style={{ color: ind.accent }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-[#1A1A2E] mb-2">
                    {ind.title}
                  </h3>
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed mb-5">
                    {ind.description}
                  </p>
                  <ul className="space-y-2">
                    {ind.applications.map((app, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-xs text-[#4B5563]"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: ind.accent }}
                        />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  const metrics = [
    { label: "pH", value: "7.42", unit: "", trend: "+0.01" },
    { label: "Temp", value: "22.5", unit: "°C", trend: "−0.3" },
    { label: "DO", value: "8.2", unit: "mg/L", trend: "+0.4" },
    { label: "OD680", value: "1.84", unit: "A", trend: "+0.12" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6633CC]/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/10 border border-[#6633CC]/25 text-[#6633CC] text-[11px] font-semibold tracking-wider uppercase mb-6">
              <Cpu className="w-3 h-3" /> Variconnect™ Platform
            </span>
            <h2 className="font-display font-black text-[clamp(30px,4.5vw,48px)] text-[#1A1A2E] mb-5 leading-10">
              VariConnect
              <br />
              <span className="font-medium text-xl">
                <span className="text-[#1A1A2E] font-normal text-2xl" />
                Monitor Real-time Data,
                <span />
                <span className="text-[#6633CC]">
                  &nbsp;Automate Your Cultivation
                </span>
              </span>
            </h2>
            <p className="font-body text-[#6B7280] leading-relaxed mb-8 text-base">
              Variconnect is our proprietary SCADA-grade cultivation automation
              platform. It monitors 12+ parameters simultaneously at 30-second
              intervals, triggers smart alerts, and gives you full remote
              control of your entire facility from any device.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Automated pH, CO₂, and nutrient dosing loops",
                "Full audit trail with exportable data logs",
                "4G, Ethernet & WiFi connectivity options",
                "REST API for third-party platform integration",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-[#1A1A2E]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#6633CC] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#6633CC] text-white hover:bg-[#5522BB] transition-all duration-200 shadow-[0_4px_20px_rgba(102,51,204,0.3)]"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            style={{ y: panelY }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl border border-[#6633CC]/15 bg-white overflow-hidden p-6 shadow-[0_8px_48px_rgba(102,51,204,0.1)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-data text-[10px] text-[#6B7280] uppercase tracking-widest mb-0.5">
                    Variconnect™ - Live View
                  </div>
                  <div className="font-display font-bold text-[#1A1A2E] text-sm">
                    Phyco-Flow Unit 3 Production Hall B
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#6633CC]/5 border border-[#6633CC]/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6633CC] animate-pulse" />
                  <span className="font-data text-[10px] text-[#6633CC] font-semibold tracking-wider">
                    LIVE
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="rounded-xl bg-[#F8F5FF] border border-[#6633CC]/8 p-4"
                  >
                    <div className="font-data text-[10px] text-[#6B7280] uppercase tracking-widest mb-1.5">
                      {m.label}
                    </div>
                    <div className="flex items-end gap-1 mb-1">
                      <span className="font-display font-black text-2xl text-[#1A1A2E]">
                        {m.value}
                      </span>
                      <span className="font-data text-[11px] text-[#6B7280] mb-1">
                        {m.unit}
                      </span>
                    </div>
                    <div className="font-data text-[10px] text-[#6633CC]">
                      {m.trend} last 30 min
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  const phases = [
    {
      num: "01",
      Icon: Users,
      title: "Discovery & Consultation",
      desc: "Deep-dive into your production goals, species requirements, site constraints, and commercial targets.",
      outcome: "Project Brief Defined",
    },
    {
      num: "02",
      Icon: Activity,
      title: "Feasibility Study",
      desc: "Pilot-to-industrial scale evaluation covering species selection, yield modelling, and ROI forecasting.",
      outcome: "Viability Confirmed",
    },
    {
      num: "03",
      Icon: Cpu,
      title: "System Design",
      desc: "Bespoke engineering drawings, P&ID schematics, and 3D CAD models tailored to your facility.",
      outcome: "Engineering Package Issued",
    },
    {
      num: "04",
      Icon: Settings,
      title: "Manufacturing",
      desc: "In-house fabrication at our Worcester facility with in-process QC and full material traceability.",
      outcome: "System Built & Tested",
    },
    {
      num: "05",
      Icon: Zap,
      title: "Installation & Commissioning",
      desc: "Expert site teams commission each system with full parametric calibration and operator training.",
      outcome: "Facility Go-Live",
    },
    {
      num: "06",
      Icon: Shield,
      title: "Ongoing Support",
      desc: "Long-term after-sales support, optimisation consultancy, consumables supply, and remote diagnostics.",
      outcome: "Continuous Optimisation",
    },
  ];

  return (
    <section
      id="process"
      className="py-28 bg-[#F8F5FF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-data text-[11px] font-medium tracking-[0.28em] uppercase text-[#6633CC] mb-3">
            Implementation Pipeline
          </p>
          <h2 className="font-display font-black text-[clamp(32px,5vw,52px)] text-[#1A1A2E] mb-4">
            Six Phases. Zero Guesswork.
          </h2>
          <p className="font-body text-[#6B7280] max-w-lg mx-auto text-base">
            A proven end-to-end process that takes your algae cultivation
            project from initial brief to a fully operational, optimised
            commercial facility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {phases.map((phase, i) => {
            const PhaseIcon = phase.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
                className="relative rounded-2xl bg-white border border-[#6633CC]/10 p-6 overflow-hidden group hover:shadow-[0_8px_32px_rgba(102,51,204,0.12)] hover:border-[#6633CC]/25 transition-all duration-300"
              >
                <div className="absolute -top-20 -right-2 font-display font-black leading-none select-none pointer-events-none text-[96px] text-[#6633CC]/5">
                  {phase.num}
                </div>
                <div className="flex items-start gap-3 mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl top-[200px] bg-[#6633CC]/10 border border-[#6633CC]/18 flex items-center justify-center shrink-0">
                    <PhaseIcon className="w-5 h-5 text-[#6633CC]" />
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded-md font-data text-[10px] font-bold tracking-[0.14em] uppercase bg-[#6633CC]/10 text-[#6633CC]">
                    Phase {phase.num}
                  </div>
                </div>
                <h4 className="font-display font-bold text-base text-[#1A1A2E] mb-2 relative z-10">
                  {phase.title}
                </h4>
                <p className="font-body text-sm text-[#6B7280] leading-relaxed mb-4 relative z-10">
                  {phase.desc}
                </p>
                <div className="relative z-10 flex items-center gap-1.5 pt-3 border-t border-[#6633CC]/8">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6633CC] shrink-0" />
                  <span className="font-data text-[11px] font-medium text-[#6633CC]">
                    {phase.outcome}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const steps = [
    {
      title: "Connect",
      description:
        "Reach out to us and start the conversation around your ideas and goals.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Discover",
      description:
        "We understand your needs and uncover opportunities that create value.",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Strategize",
      description: "We define a clear direction and map the best way forward.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Design",
      description: "We shape ideas into thoughtful and practical solutions.",
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Prepare",
      description:
        "We lay the groundwork for smooth execution and future growth.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Print",
      description:
        "We bring concepts to life with 3D prototypes for faster validation.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slightly slower for better readability of the flow
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
        mass: 1,
      },
    },
  };

  const lineVariants: any = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineDownVariants: any = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="services"
      className="py-28 bg-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          variants={containerVariants}
          className="w-full py-8 px-6 sm:py-16 sm:px-12 bg-white border border-slate-200 shadow-sm rounded-[2.5rem] text-slate-800 overflow-hidden"
        >
          {/* --- SaaS Header Section --- */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6 border-b border-slate-100 pb-10">
            <motion.div variants={cardVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/10 border border-[#6633CC]/25 text-[#6633CC] text-[11px] font-semibold tracking-wider uppercase mb-6">
                {/* <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></span> */}
                Support, Consultancy & Engineering
              </span>
              <h2 className="text-4xl font-black tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
                Driven by a passion for innovation.
              </h2>
              <p className="max-w-2xl text-slate-500 leading-relaxed text-sm">
                We are a world leading engineering and consumables supplier,
                supporting the algae & aquaculture sectors since 2004.
              </p>
            </motion.div>
          </div>

          {/* --- Continuous Flow Matrix --- */}
          <div className="relative w-full ">
            {/* Animated Spark Flow (Reference Styled) */}
            <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-3 z-0 pointer-events-none bg-violet-400/40">
              <motion.div
                animate={{
                  left: ["8.33%", "8.33%", "91.66%", "91.66%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  times: [0, 0.05, 0.95, 1],
                  ease: "linear",
                }}
                className="absolute top-1/2 -translate-y-1/2 w-32 h-[12px] flex items-center justify-center"
              >
                {/* Trail */}
                <div className="absolute right-0 w-32 h-[12px] "></div>
                {/* Spark / Icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex-shrink-0 text-[#6633CC] drop-shadow-[0_0_12px_rgba(102,51,204,0.6)] bg-white rounded-full p-1 border border-violet-200 relative z-10"
                >
                  <Leaf className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>

            {/* Straight Row of steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
              {/* Connector Line Background Removed */}

              {steps.map((step, idx) => {
                const centerTime = idx / 5;
                const startTime = Math.max(0, centerTime - 0.1);
                const endTime = Math.min(1, centerTime + 0.1);

                return (
                  <motion.div
                    key={idx}
                    animate={{
                      borderColor: [
                        "#e2e8f0",
                        "#e2e8f0",
                        "#6633CC",
                        "#e2e8f0",
                        "#e2e8f0",
                      ],
                      scale: [1, 1, 1.1, 1, 1],
                      zIndex: [10, 10, 30, 10, 10],
                      boxShadow: [
                        "0 0 0 rgba(102,51,204,0)",
                        "0 0 0 rgba(102,51,204,0)",
                        "0 20px 25px -5px rgba(102,51,204,0.15)",
                        "0 0 0 rgba(102,51,204,0)",
                        "0 0 0 rgba(102,51,204,0)",
                      ],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      times: [0, startTime, centerTime, endTime, 1],
                      ease: "easeInOut",
                    }}
                    className="group relative bg-white border-1 rounded-2xl p-3 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-full h-32 rounded-xl overflow-hidden mb-4 border border-slate-100 bg-slate-50">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                        Step 0{idx + 1}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-violet-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote:
        "The BioFence has been an invaluable tool to our research program. Its reliability and precise control have significantly advanced our algae cultivation studies.",
      author: "Dr. Patrick J. McGinn",
      role: "Research Scientist",
      org: "NRC Canada",
    },
    {
      quote:
        "We operate a 30,000L Phyco-Flow system and couldn't be more satisfied. The engineering quality and support from Varicon Aqua are world-class.",
      author: "Berat Haznedaroglu, PhD",
      role: "Associate Professor",
      org: "Bogazici University",
    },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#F8F5FF] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/10 border border-[#6633CC]/25 text-[#6633CC] text-[11px] font-semibold tracking-wider uppercase mb-6">
          Testimonials
        </div>
        <h2 className="font-display font-black text-[clamp(32px,5vw,52px)] text-[#1A1A2E] mb-4">
          Global Recognisation
        </h2>
        <p className="font-body text-[#6B7280] max-w-lg mx-auto text-base mb-12">
          Trusted by leading research institutions and commercial producers
          around the world.
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white p-12 md:p-16 rounded-[2rem] shadow-[0_8px_48px_rgba(102,51,204,0.06)] border border-[#6633CC]/5"
          >
            <blockquote className="text-2xl md:text-3xl font-display font-semibold text-[#1A1A2E] leading-tight mb-10 italic">
              "{quotes[active].quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="font-display font-black text-lg text-[#6633CC] mb-1">
                {quotes[active].author}
              </div>
              <div className="font-data text-xs text-[#6B7280] uppercase tracking-widest">
                {quotes[active].role} · {quotes[active].org}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-10">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-[#6633CC]" : "bg-[#6633CC]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="cta"
      className="py-28 relative overflow-hidden text-white text-center"
    >
      {/* High-End Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6633CC] via-[#7C4EE4] to-[#A877EE]" />

      {/* Ambient Radial Overlays */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[clamp(32px,6vw,56px)] font-display font-black mb-8 italic leading-none text-white">
            Ready to Scale <br />
            Your Cultivation?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-body">
            Join the global leaders in industrial biotechnology. Talk to our
            engineering team today about your next production facility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 bg-white text-[#6633CC] rounded-2xl font-display font-black uppercase tracking-widest text-[13px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:scale-105 hover:bg-[#F3EEFF] transition-all active:scale-95">
              Get Quote
            </button>
            <button className="px-8 py-3.5 bg-transparent border-2 border-white/40 text-white rounded-2xl font-display font-black uppercase tracking-widest text-[13px] backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95">
              Talk to Expert
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <ProductBento />
      <TechShowcase />
      <Industries />
      {/* <Pipeline /> */}
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}
