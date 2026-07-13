import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, BookOpen, Compass, Award, Sparkles, Shield, ArrowUpRight, HelpCircle } from "lucide-react";
import BusinessDNA from "./components/BusinessDNA";
import BrandBook from "./components/BrandBook";
import EditorialAssistant from "./components/EditorialAssistant";
import ContrastChecker from "./components/ContrastChecker";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"dna" | "brandbook" | "assistant" | "legibilidad">("dna");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col ${
      darkMode ? "bg-ink-black text-paper-cream" : "bg-paper-cream text-ink-black"
    }`}>
      {/* High-End Global Announcement Banner */}
      <div className={`w-full py-2.5 px-4 text-center text-[11px] font-mono tracking-widest uppercase border-b ${
        darkMode ? "bg-black/40 border-metallic-gold/10 text-metallic-gold/80" : "bg-[#f5ebd6] border-metallic-gold/15 text-muted-gold"
      }`}>
        <span>Anclora Insights • Sello Editorial de Alta Autoridad de Anclora Group</span>
      </div>

      {/* Main Luxury Header */}
      <header className={`border-b transition-colors duration-500 sticky top-0 z-40 backdrop-blur-md ${
        darkMode ? "bg-ink-black/80 border-metallic-gold/10" : "bg-paper-cream/80 border-metallic-gold/15"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB0Jkwa4H5-ygU_qx29MDcUUzlsxmZzMGySRkz1plgHBpzYTUswAaVYqC8Kuk7g6wtw4W23WAubA2i2SyQI-5DNLS7fwGrYL0w9bucGMlU-Jy2i7Hh-eh05GXijP4Ap-0jTR747PWFj1FWf6ocSoFckoeHXnbGKjuli7ie7A482QXYQOUW6PV1iJzb_0TRwa1Ua0LFTUyT2hXTFgrY56ezXidhS7tWJBChHneVlDzTt6BlNvlMHHiDWmARUDlKha-6WD71EbMKbKtl" 
              alt="Anclora Logo" 
              className={`w-9 h-9 object-contain rounded-full transition-transform duration-500 hover:rotate-12 ${
                !darkMode ? "filter brightness-90 contrast-125" : ""
              }`}
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight">Anclora Insights</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-metallic-gold font-semibold">Business DNA Portal</span>
            </div>
          </div>

          {/* Quick Info & Theme Toggler */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-xs font-mono opacity-80">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-metallic-gold" /> Curation Level: Max</span>
              <span className="w-1.5 h-1.5 rounded-full bg-metallic-gold animate-pulse"></span>
              <span>Editorial Suite Active</span>
            </div>

            {/* Interactive Dark/Light toggle */}
            <button
              onClick={toggleTheme}
              title={darkMode ? "Cambiar a modo papel claro" : "Cambiar a modo cósmico oscuro"}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                darkMode 
                  ? "border-metallic-gold/20 bg-[#0F172A] text-metallic-gold hover:bg-black/30" 
                  : "border-metallic-gold/30 bg-white text-muted-gold hover:bg-[#fbf9f5] shadow-sm"
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Dynamic Editorial Hero Board */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`relative border rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 ${
            darkMode 
              ? "bg-[#0F172A]/60 border-metallic-gold/15" 
              : "bg-white border-metallic-gold/15 shadow-sm"
          }`}
        >
          {/* Decorative background watermarks */}
          <div className="absolute right-0 bottom-0 opacity-5 select-none pointer-events-none translate-x-12 translate-y-12">
            <BookOpen className="w-96 h-96 text-metallic-gold" />
          </div>

          <div className="space-y-6 max-w-2xl z-10">
            <span className="text-[11px] font-mono tracking-widest text-metallic-gold font-semibold uppercase bg-metallic-gold/10 px-3 py-1 rounded">
              Brand book & ADN corporativo
            </span>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight font-bold">
              La sofisticación reside en la eliminación de lo innecesario.
            </h1>
            <p className={`font-sans text-sm md:text-base leading-relaxed ${
              darkMode ? "text-paper-cream/80" : "text-on-surface-variant"
            }`}>
              Bienvenidos al manual de marca definitivo de <strong>Anclora Insights</strong>. Aquí se detalla la visión conceptual 
              y el sistema visual completo de nuestro sello editorial, diseñado para garantizar un ecosistema de lectura elegante, 
              legible y profundamente respetuoso con el intelecto de nuestros lectores.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setActiveTab("assistant")}
                className="px-5 py-2.5 text-xs font-sans font-semibold uppercase tracking-wider rounded bg-metallic-gold text-ink-black hover:bg-muted-gold transition-colors flex items-center gap-2 cursor-pointer"
              >
                Probar Asistente Editorial AI <Sparkles className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveTab("brandbook")}
                className={`px-5 py-2.5 text-xs font-sans font-semibold uppercase tracking-wider rounded border transition-colors cursor-pointer ${
                  darkMode 
                    ? "border-metallic-gold/30 hover:bg-[#0F172A]" 
                    : "border-metallic-gold/40 hover:bg-stone-50"
                }`}
              >
                Explorar Paleta y Tipografía
              </button>
            </div>
          </div>

          {/* Book / Device Mockup Illustration */}
          <div className="w-full md:w-80 shrink-0 relative flex justify-center z-10">
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLs4rmZLO_gz5lAA2RZQis3K7sjzNyt0j98thNYmpOSrydhd1u2PQUUwK1gcD-eUz5y-px1Q12lUNpou1ArPgj7YaVxhuZr2DxFK8sduDAhFMjeDAubPiaVOXWFElNI0UC3UEBj1GS-kCAI79SjQ-OipMqSZqp0HusO4JsHCTRKzAnufskiGyyqd5BzTot_eodq2r-J8g_HZKRyj6-J5by4cmi5tlSwU9S_xfM9iZGH0cBc_2pXx7_klGLJ9" 
              alt="Anclora Book Cover Mockup" 
              className={`w-64 object-contain rounded-lg shadow-xl border ${
                darkMode ? "border-metallic-gold/20" : "border-metallic-gold/10"
              }`}
            />
          </div>
        </motion.div>

        {/* Navigation Tabs Bar */}
        <div className={`p-1 border-b flex overflow-x-auto gap-4 scrollbar-none sticky top-20 z-30 backdrop-blur-sm ${
          darkMode ? "border-metallic-gold/10" : "border-metallic-gold/15"
        }`}>
          {[
            { id: "dna", label: "ADN de Negocio" },
            { id: "brandbook", label: "Brand Book & Manual" },
            { id: "assistant", label: "Asistente Editorial AI" },
            { id: "legibilidad", label: "Auditoría de Legibilidad" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3.5 pt-1 px-4 text-xs font-sans uppercase tracking-[0.15em] font-semibold relative transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "text-metallic-gold"
                  : darkMode
                    ? "text-paper-cream/60 hover:text-paper-cream"
                    : "text-stone-400 hover:text-ink-black"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-line"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-metallic-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Interactive Tab Contents with smooth fade */}
        <div className="py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "dna" && <BusinessDNA darkMode={darkMode} />}
              {activeTab === "brandbook" && <BrandBook darkMode={darkMode} />}
              {activeTab === "assistant" && <EditorialAssistant darkMode={darkMode} />}
              {activeTab === "legibilidad" && <ContrastChecker darkMode={darkMode} />}
            </motion.div>
          </AnimatePresence>
        </div>

      </main>

      {/* Luxury Footer */}
      <footer className={`border-t mt-24 py-16 transition-colors duration-500 ${
        darkMode ? "bg-black/60 border-metallic-gold/10 text-paper-cream/60" : "bg-stone-50 border-metallic-gold/15 text-stone-600"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {/* Branding imprint details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB0Jkwa4H5-ygU_qx29MDcUUzlsxmZzMGySRkz1plgHBpzYTUswAaVYqC8Kuk7g6wtw4W23WAubA2i2SyQI-5DNLS7fwGrYL0w9bucGMlU-Jy2i7Hh-eh05GXijP4Ap-0jTR747PWFj1FWf6ocSoFckoeHXnbGKjuli7ie7A482QXYQOUW6PV1iJzb_0TRwa1Ua0LFTUyT2hXTFgrY56ezXidhS7tWJBChHneVlDzTt6BlNvlMHHiDWmARUDlKha-6WD71EbMKbKtl" 
                alt="Anclora Logo" 
                className={`w-6 h-6 object-contain rounded-full ${
                  !darkMode ? "filter brightness-90 contrast-125" : ""
                }`}
              />
              <span className="font-serif font-bold text-base">Anclora Insights</span>
            </div>
            <p className="text-xs leading-relaxed opacity-85">
              Un sello editorial de Anclora Group dedicado a la destilación conceptual, el análisis de alta autoridad y la difusión de ideas estratégicas duraderas.
            </p>
          </div>

          {/* Philosophy / Direct quote */}
          <div className="space-y-4 font-serif italic text-base">
            <p className="opacity-90 leading-relaxed">
              "La sofisticación consiste en un viaje continuo hacia lo esencial. No busques el adorno que sobrecarga; busca la claridad que ancla."
            </p>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-metallic-gold font-semibold block not-italic">
              — Toni, Director Editorial
            </span>
          </div>

          {/* Copyright, legal references and technical data */}
          <div className="space-y-4 text-xs font-mono opacity-80 md:text-right">
            <div>
              <p>© {new Date().getFullYear()} Anclora Group.</p>
              <p>Todos los derechos reservados.</p>
            </div>
            <div>
              <p>Diseñado bajo "Tactile Minimalism"</p>
              <p className="text-metallic-gold">Frente WCAG AAA Legibility Certified</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
