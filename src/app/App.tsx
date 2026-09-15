import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Consumables } from "./pages/Consumables";
import Technologies from "./pages/Technologies";
import CaseStudies from "./pages/CaseStudies";
import { Services } from "./pages/Services";
import logo from "../assets/Varicon-aqua-brand.png";

/* ─────────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-[99] w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200/80"
          : "bg-white border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex flex-1 items-center justify-start">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Varicon Aqua"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-8">
          {/* 1. HOME */}
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#6633CC]"
          >
            Home
          </Link>

          {/* 2. TECHNOLOGIES */}
          <div className="group relative">
            <Link
              to="/technologies"
              className="inline-flex items-center gap-x-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-[#6633CC] py-5"
            >
              <span>Technologies</span>
              <svg
                className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#6633CC]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Dropdown Menu Level 1 */}
            <div className="absolute left-0 top-full z-10 w-64 pointer-events-none opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
              <div className="mt-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                {/* Sub Item 1: Phyco-Range */}
                <div className="group/sub relative">
                  <Link
                    to="/technologies"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-gray-50 hover:text-[#6633CC]"
                  >
                    <span>Phyco-Range</span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  {/* Sub-Sub Dropdown Level 2 */}
                  <div className="absolute left-full top-0 ml-2 w-56 opacity-0 pointer-events-none translate-x-2 transition-all duration-200 ease-out group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
                    <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                      <Link
                        to="/technologies"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Phyco-Flow™
                      </Link>
                      <Link
                        to="/technologies"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Phyco-Lift™
                      </Link>
                      <Link
                        to="/technologies"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Phyco-Bubble™
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Sub Item 2: Aquaculture */}
                <div className="group/sub relative">
                  <Link
                    to="/technologies"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-gray-50 hover:text-[#6633CC]"
                  >
                    <span>Aquaculture</span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-full top-0 ml-2 w-56 opacity-0 pointer-events-none translate-x-2 transition-all duration-200 ease-out group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
                    <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                      <Link
                        to="/technologies"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        High-Density Rotifer (HDRS)
                      </Link>
                      <Link
                        to="/technologies"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Artemia Harvesters
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Sub Item 3: Downstream Processing */}
                <div className="group/sub relative">
                  <Link
                    to="#"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-gray-50 hover:text-[#6633CC]"
                  >
                    <span>Downstream Processing</span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-full top-0 ml-2 w-56 opacity-0 pointer-events-none translate-x-2 transition-all duration-200 ease-out group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
                    <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                      <Link
                        to="#"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Centrifuge Systems
                      </Link>
                      <Link
                        to="#"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Membrane Filtration
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Sub Item 4: Control Systems */}
                <div className="group/sub relative">
                  <Link
                    to="#"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-gray-50 hover:text-[#6633CC]"
                  >
                    <span>Control Systems</span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-full top-0 ml-2 w-56 opacity-0 pointer-events-none translate-x-2 transition-all duration-200 ease-out group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
                    <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                      <Link
                        to="#"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        VariConnect™ Monitoring
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CONSUMABLES */}
          <div className="group relative">
            <Link
              to="/consumables"
              className="inline-flex items-center gap-x-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-[#6633CC] py-5"
            >
              <span>Consumables</span>
              <svg
                className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#6633CC]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Dropdown Menu Level 1 */}
            <div className="absolute left-0 top-full z-10 w-64 pointer-events-none opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
              <div className="mt-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                {/* Sub Item 1: Cell-Hi Range */}
                <div className="group/sub relative">
                  <Link
                    to="/consumables"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-gray-50 hover:text-[#6633CC]"
                  >
                    <span>Cell-Hi Nutrient Range</span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-full top-0 ml-2 w-56 opacity-0 pointer-events-none translate-x-2 transition-all duration-200 ease-out group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
                    <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                      <Link
                        to="/consumables"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Cell-Hi F2P (Saltwater)
                      </Link>
                      <Link
                        to="/consumables"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Cell-Hi JWP (Freshwater)
                      </Link>
                      <Link
                        to="/consumables"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Cell-Hi BIO (Organic)
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Sub Item 2: Live Feed Products */}
                <div className="group/sub relative">
                  <Link
                    to="/consumables"
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-gray-50 hover:text-[#6633CC]"
                  >
                    <span>Live Feed Products</span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-full top-0 ml-2 w-56 opacity-0 pointer-events-none translate-x-2 transition-all duration-200 ease-out group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
                    <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                      <Link
                        to="/consumables"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Premium Artemia Cysts
                      </Link>
                      <Link
                        to="/consumables"
                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#6633CC]"
                      >
                        Rotifer Inocula
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. SERVICES */}
          <Link
            to="/services"
            className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#6633CC]"
          >
            Services
          </Link>

          {/* 4. INFORMATION */}
          <div className="group relative">
            <button
              className="inline-flex items-center gap-x-1.5 text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-[#6633CC] py-5"
            >
              <span>Information</span>
              <svg
                className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#6633CC]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute left-0 top-full z-10 w-48 pointer-events-none opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0">
              <div className="mt-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                <Link
                  to="/about"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-gray-50 hover:text-[#6633CC]"
                >
                  About Us
                </Link>
                <Link
                  to="/case-studies"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-gray-50 hover:text-[#6633CC]"
                >
                  Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* 5. CONTACT */}
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#6633CC]"
          >
            Contact
          </Link>
        </nav>

        {/* Permanent Action Section */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#6633CC] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-[#7e4edd] hover:shadow-md hover:-translate-y-0.5"
          >
            Get Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600 hover:text-[#7e4edd]"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="text-sm font-medium text-gray-700">
                Home
              </Link>
              <Link to="/technologies" className="text-sm font-medium text-gray-700">
                Technologies
              </Link>
              <Link to="/consumables" className="text-sm font-medium text-gray-700">
                Consumables
              </Link>
              <Link to="/services" className="text-sm font-medium text-gray-700">
                Services
              </Link>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 pt-2">Information</p>
              <Link to="/about" className="text-sm font-medium text-gray-700 pl-2">
                About Us
              </Link>
              <Link to="/case-studies" className="text-sm font-medium text-gray-700 pl-2">
                Case Studies
              </Link>
              <Link to="/contact" className="text-sm font-bold text-[#6633CC]">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#1A1A2E] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-5">
              <img
                src={logo}
                alt="Varicon Aqua"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              World-leading algae cultivation engineering. Concept to
              cultivation since 2004. Unit 2 Orchard Street, Worcester, WR5 3DW,
              United Kingdom.
            </p>
            <p className="font-data text-xs text-white/25">
              Reg. No. 03231267 · VAT GB 849518680
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-data text-[10px] font-semibold text-white/50 uppercase tracking-[0.18em] mb-5">
              Technologies
            </h4>
            <ul className="space-y-3">
              {[
                "Phyco-Flow",
                "Phyco-Lift",
                "Phyco-Bubble",
                "Phyco-Tainer",
                "Variconnect™",
                "HDRS Systems",
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-data text-[10px] font-semibold text-white/50 uppercase tracking-[0.18em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Market Research",
                "Feasibility Studies",
                "Plant Design",
                "Business Planning",
                "Optimisation",
                "3D Prototyping",
              ].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-data text-[10px] font-semibold text-white/50 uppercase tracking-[0.18em] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150"
                >
                  Case Studies
                </Link>
              </li>
              {["News", "Privacy Policy", "Terms"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-data text-xs text-white/30">
            © 2026 Varicon Aqua Ltd. All rights reserved.
          </p>
          <p className="font-data text-xs text-white/18 italic">
            Algae cultivation made easy.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="font-body" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/consumables" element={<Consumables />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}
