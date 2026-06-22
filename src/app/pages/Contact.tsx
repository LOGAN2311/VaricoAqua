import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Linkedin,
  Twitter,
  Globe2,
  CheckCircle2,
  Building2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "Technologies (PBRs)",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const enquiryTypes = [
    "Technologies (PBRs)",
    "Consumables & Media",
    "Consultation Services",
    "Technical Support",
    "Other",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your inquiry. Our engineering team will contact you shortly.",
    );
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Direct Line",
      value: "+44 (0)1905 640 728",
      link: "tel:+441905640728",
    },
    {
      icon: Mail,
      label: "Engineering Inquiry",
      value: "info@variconaqua.com",
      link: "mailto:info@variconaqua.com",
    },
    {
      icon: MapPin,
      label: "Global Headquarters",
      value: "Unit 2 Orchard St, Worcester, WR5 3DW, UK",
      link: "https://maps.google.com/?q=Unit+2+Orchard+St,+Worcester,+WR5+3DW,+United+Kingdom",
    },
    {
      icon: Clock,
      label: "Operation Hours",
      value: "Mon - Fri: 08:30 - 17:30 GMT",
    },
  ];

  return (
    <div className="bg-white selection:bg-[#6633CC]/10 selection:text-[#6633CC]">
      {/* ─────────────────────────────────────────────────────────────────
         HERO SECTION
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Engineering Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#6633CC]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#A877EE]/10 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#6633CC 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center justify-items-center">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6633CC]/5 border border-[#6633CC]/10 mb-6">
                <Sparkles className="w-3 h-3 text-[#6633CC]" />
                <span className="text-[10px] font-black tracking-[0.2em] text-[#6633CC] uppercase">
                  Let's Scale Together
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-[#1A1A2E] leading-tight mb-6">
                Connect with our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6633CC] to-[#A877EE]">
                  &nbsp;Team
                </span>
              </h1>
              {/* <p className="text-xl text-[#6B7280] leading-relaxed font-body">
                Whether you're planning a pilot study or a global-scale
                production facility, our engineers are ready to assist with
                technical specifications and feasibility mapping.
              </p> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
         MAIN CONTACT GRID
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-black text-[#1A1A2E] mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-9">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-5 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#6633CC]/10 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#6633CC] group-hover:border-[#6633CC] transition-all duration-300">
                        <item.icon className="w-5 h-5 text-[#6633CC] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-1.5">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-lg font-display font-semibold text-[#1A1A2E]/60 hover:text-[#6633CC] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-display font-semibold text-[#1A1A2E]/60">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recruitment / Socials Card */}
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#6633CC] via-[#7C4EE4] to-[#A877EE] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6633CC]/20 blur-[50px]" />
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold mb-4">
                    Scientific Network
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Join over 15,000 biotechnology professionals following our
                    latest research updates and system installations worldwide.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/50 flex items-center justify-center hover:bg-white/10 transition-all"
                    >
                      <Linkedin className="w-5 h-5 text-[#C4A8FF]" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/50 flex items-center justify-center hover:bg-white/10 transition-all"
                    >
                      <Twitter className="w-5 h-5 text-[#C4A8FF]" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/50 flex items-center justify-center hover:bg-white/10 transition-all"
                    >
                      <Globe2 className="w-5 h-5 text-[#C4A8FF]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2.5rem] border border-[#6633CC]/10 p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(102,51,204,0.08)]"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-[#1A1A2E] uppercase tracking-widest ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#F8F5FF] border border-transparent focus:border-[#6633CC]/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-[#6B7280]/40 text-[#1A1A2E] font-medium"
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-[#1A1A2E] uppercase tracking-widest ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full bg-[#F8F5FF] border border-transparent focus:border-[#6633CC]/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-[#6B7280]/40 text-[#1A1A2E] font-medium"
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-[#1A1A2E] uppercase tracking-widest ml-1">
                        Company / Institution
                      </label>
                      <input
                        type="text"
                        placeholder="Organization Name"
                        className="w-full bg-[#F8F5FF] border border-transparent focus:border-[#6633CC]/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-[#6B7280]/40 text-[#1A1A2E] font-medium"
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-[#1A1A2E] uppercase tracking-widest ml-1">
                        Enquiry Type
                      </label>
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full bg-[#F8F5FF] border border-transparent focus:border-[#6633CC]/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all text-[#1A1A2E] font-medium flex items-center justify-between group"
                        >
                          <span
                            className={
                              formData.subject
                                ? "text-[#1A1A2E]"
                                : "text-[#6B7280]/40"
                            }
                          >
                            {formData.subject}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#6633CC] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute z-50 left-0 right-0 mt-2 bg-white border border-[#6633CC]/10 rounded-2xl shadow-[0_10px_25px_-5px_rgba(102,51,204,0.1)] overflow-hidden"
                            >
                              <div className="p-1.5">
                                {enquiryTypes.map((type) => (
                                  <button
                                    key={type}
                                    type="button"
                                    onClick={() => {
                                      setFormData({
                                        ...formData,
                                        subject: type,
                                      });
                                      setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-5 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                                      formData.subject === type
                                        ? "bg-[#6633CC] text-white"
                                        : "text-[#1A1A2E] hover:bg-[#F8F5FF]"
                                    }`}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-[#1A1A2E] uppercase tracking-widest ml-1">
                      Message
                    </label>
                    <textarea
                      required
                      placeholder="Describe your project requirements..."
                      rows={5}
                      className="w-full bg-[#F8F5FF] border border-transparent focus:border-[#6633CC]/30 focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-[#6B7280]/40 text-[#1A1A2E] font-medium resize-none"
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#6633CC] hover:bg-[#5729B0] text-white font-display font-black uppercase tracking-[0.2em] text-[13px] py-4 rounded-2xl shadow-[0_20px_40px_-12px_rgba(102,51,204,0.35)] transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    Send Enquiry <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 justify-center text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6633CC]" />
                    Secure Data Transmission Guaranteed
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
         OFFICES SECTION
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-[#6633CC]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-black text-[#1A1A2E] mb-4">
              Innovation Centres
            </h2>
            <p className="text-[#6B7280] max-w-lg mx-auto">
              Strategic hubs driving phycology engineering across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "Worcester, UK",
                type: "Manufacturing & R&D",
                icon: Building2,
              },
              { city: "London, UK", type: "Administration", icon: Globe2 },
              {
                city: "Global Support",
                type: "Distribution Network",
                icon: Globe2,
              },
            ].map((office, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-[#6633CC]/10 hover:border-[#6633CC]/30 transition-all group bg-white shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F8F5FF] flex items-center justify-center mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#6633CC] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <office.icon className="w-6 h-6 text-[#6633CC] relative z-10 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-display font-bold text-xl text-[#1A1A2E] mb-2">
                  {office.city}
                </h4>
                <p className="text-sm text-[#6B7280] mb-4">{office.type}</p>
                <div className="flex items-center gap-2 text-[#6633CC] text-[11px] font-black uppercase tracking-widest cursor-pointer">
                  View Details <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
