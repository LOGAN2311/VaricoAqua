import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  BarChart2,
  ClipboardList,
  Factory,
  TrendingUp,
  Target,
  ShieldCheck,
  Printer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import servicesTeamImg from "../../assets/magnific_dtobBsgXSL.png";
import phycoTainerImg from "../../assets/Phyco-Tainer.png";
import variconCTCImg from "../../assets/Varicon CTC.png";
import phycoConicalImg from "../../assets/Phyco-Conical.png";
import phycoFlowImg from "../../assets/Phyco-Flow.png";
import phycoLiftImg from "../../assets/Phyco-Lift.png";
import phycoBubbleImg from "../../assets/Phyco-Bubble.png";

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 1,
    icon: BarChart2,
    title: "Market Research",
    description:
      "We provide comprehensive market analysis to help you identify growth opportunities and make well-informed, strategic decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=240",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Feasibility Studies",
    description:
      "Conduct feasibility studies to ascertain the technical, financial, and operational viability of your project, ensuring the right foundation for success.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400&h=240",
  },
  {
    id: 3,
    icon: Factory,
    title: "Plant Design",
    description:
      "Develop customised, efficient facility designs that optimise output and profitability, guiding you from concept to commissioning.",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400&h=240",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Business Plan Development",
    description:
      "Create robust, strategic business plans that set out clear objectives, operational frameworks, and financial forecasts.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=240",
  },
  {
    id: 5,
    icon: Target,
    title: "Optimisation Strategies",
    description:
      "Identify process enhancements, implement best practices, and drive operational excellence to maximise your return on investment.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400&h=240",
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Critical Assessments",
    description:
      "Thorough evaluations of your existing systems and processes, uncover bottlenecks and minimise risk through actionable, results-oriented solutions.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=240",
  },
  {
    id: 7,
    icon: Printer,
    title: "3D Printing",
    description:
      "We frequently utilise advanced 3D printing technologies in-house to accelerate prototyping, reduce lead times, and are happy to offer tailored solutions for your unique requirements.",
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80&w=400&h=240",
  },
];

const PRODUCTS = [
  {
    id: 1,
    title: "Phyco-Tainer",
    description:
      "The Phyco-Tainer™ is a compact, flexible, and scalable algae production facility designed for both research and commercial applications.",
    image: phycoTainerImg,
  },
  {
    id: 2,
    title: "Varicon CTC",
    description:
      "The Varicon Aqua CTC™ is a high-efficiency, temperature-controlled temperature chamber designed to meet the stringent requirements of scientists and production specialists working with phototrophic organisms.",
    image: variconCTCImg,
  },
  {
    id: 3,
    title: "Phyco-Conical",
    description:
      "The Phyco-Conical is an efficient and cost-effective drift photobioreactor designed for tolerability and inoculum production, available in a range of volumes from 60 to 370 litres to suit various experimental and production needs.",
    image: phycoConicalImg,
  },
  {
    id: 4,
    title: "Phyco-Flow™",
    description:
      "Flagship scalable serpentine photobioreactor designed for commercial outdoor and indoor scaling applications.",
    image: phycoFlowImg,
  },
  {
    id: 5,
    title: "Phyco-Lift™",
    description:
      "Advanced vertical airlift-column photobioreactor optimized to provide a delicate framework for shear-sensitive strains.",
    image: phycoLiftImg,
  },
  {
    id: 6,
    title: "Phyco-Bubble™",
    description:
      "A compact, entry-level airlift column configuration bringing precise parameter settings into laboratory tasks.",
    image: phycoBubbleImg,
  },
];

/* ─────────────────────────────────────────────────────────────────
   SERVICES PAGE
───────────────────────────────────────────────────────────────── */
export function Services() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = PRODUCTS.length - itemsPerView;

  const prev = () => setCarouselIndex((i) => Math.max(0, i - 1));
  const next = () => setCarouselIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="bg-white selection:bg-[#6633CC]/10 selection:text-[#6633CC]">

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6633CC]/20 bg-[#6633CC]/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6633CC]" />
                <span className="text-[11px] font-semibold text-[#6633CC] uppercase tracking-widest">
                  What We Offer
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] text-gray-900 mb-6">
                Services<br />
                <span className="text-[#6633CC]">Varicon Aqua.</span>
              </h1>

              <p className="text-base text-gray-500 leading-relaxed max-w-md mb-8">
                End-to-end expertise and strategic solutions to support your
                algae cultivation journey from research to real-world impact.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6633CC] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#7e4edd] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore Case Studies
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-[#6633CC] hover:text-[#6633CC] transition-all duration-200"
                >
                  Contact Our Team
                </Link>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={servicesTeamImg}
                alt="Varicon Aqua team at exhibition"
                className="w-full h-[360px] lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES LIST ────────────────────────────────────────── */}
      <section className="py-16 bg-[#f6f4fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-5 px-6 py-6 sm:px-8">

                    {/* Bullet dot */}
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#6633CC]/30 group-hover:bg-[#6633CC] transition-colors duration-200" />

                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#6633CC]/8 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#6633CC]" />
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0 w-44 rounded-xl overflow-hidden hidden sm:block">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-44 object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ height: "132px" }}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#6633CC] group-hover:border-[#6633CC] transition-all duration-200 ml-2">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PHYCO-RANGE CAROUSEL ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-semibold text-[#6633CC] uppercase tracking-[0.18em] mb-3">
                Our Solutions
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Phyco-range<br />Photobioreactors.
              </h2>
            </div>
            <Link
              to="/technologies"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-[#6633CC] hover:text-[#6633CC] transition-all duration-200"
            >
              View All Solutions
            </Link>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Prev arrow */}
            <button
              onClick={prev}
              disabled={carouselIndex === 0}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center disabled:opacity-30 hover:border-[#6633CC] hover:text-[#6633CC] transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Track */}
            <div className="overflow-hidden mx-6">
              <motion.div
                className="flex gap-6"
                animate={{ x: `calc(-${carouselIndex * (100 / itemsPerView)}% - ${carouselIndex * 24 / itemsPerView}px)` }}
                transition={{ type: "spring", stiffness: 300, damping: 35 }}
              >
                {PRODUCTS.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="bg-gray-50 p-6 flex items-center justify-center h-48">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                        {product.description}
                      </p>
                      <Link
                        to="/technologies"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6633CC] hover:gap-2.5 transition-all duration-200"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              disabled={carouselIndex >= maxIndex}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center disabled:opacity-30 hover:border-[#6633CC] hover:text-[#6633CC] transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  carouselIndex === i ? "bg-[#6633CC] w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
