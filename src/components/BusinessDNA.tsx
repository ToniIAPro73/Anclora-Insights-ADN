import { motion } from "motion/react";
import { BookOpen, Compass, ShieldCheck, Award, Eye, Heart, Feather } from "lucide-react";
import { BrandPillar } from "../types";

interface BusinessDNAProps {
  darkMode: boolean;
}

const pillars: BrandPillar[] = [
  {
    title: "Curaduría Extrema",
    icon: "BookOpen",
    description: "No acumulamos información; destilamos la esencia. Cada libro, cada ensayo, cada párrafo que lleva nuestro sello ha superado un riguroso filtro de relevancia conceptual y elegancia narrativa.",
    quote: "La curaduría no es solo selección, es un acto de resistencia contra el caos informativo."
  },
  {
    title: "Rigor Intelectual",
    icon: "Compass",
    description: "Nuestros análisis de insights se fundamentan en fuentes primarias, datos contrastados y el pensamiento crítico de líderes globales. Evitamos la superficialidad del titular rápido.",
    quote: "La autoridad intelectual se gana con profundidad, paciencia y verdad inalterable."
  },
  {
    title: "Tactilidad Digital",
    icon: "Feather",
    description: "Traducimos la calidez y permanencia del libro físico al entorno digital. Espaciados amplios, tipografía de alta legibilidad, texturas sutiles y transiciones pausadas.",
    quote: "Queremos que el lector sienta el peso de las ideas, incluso en una pantalla digital."
  },
  {
    title: "Exclusividad Premium",
    icon: "Award",
    description: "Pertenecemos a Anclora Group, lo que nos sitúa en una esfera de distinción y compromiso absoluto con la excelencia. Diseñamos experiencias intelectuales para mentes exigentes.",
    quote: "El conocimiento de alto nivel exige una presentación a su altura."
  }
];

export default function BusinessDNA({ darkMode }: BusinessDNAProps) {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "BookOpen": return <BookOpen className="w-6 h-6 text-metallic-gold" />;
      case "Compass": return <Compass className="w-6 h-6 text-metallic-gold" />;
      case "Feather": return <Feather className="w-6 h-6 text-metallic-gold" />;
      case "Award": return <Award className="w-6 h-6 text-metallic-gold" />;
      default: return <BookOpen className="w-6 h-6 text-metallic-gold" />;
    }
  };

  return (
    <div className="space-y-24">
      {/* Editorial Declaration */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto space-y-6 px-4"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-metallic-gold font-semibold block">
          Declaración Editorial
        </span>
        <h2 className={`font-serif text-3xl md:text-5xl italic leading-tight ${
          darkMode ? "text-paper-cream" : "text-ink-black"
        }`}>
          "La curaduría como acto de resistencia en la era de la sobreinformación."
        </h2>
        <div className="w-16 h-px bg-metallic-gold/40 mx-auto"></div>
        <p className={`font-sans text-base md:text-lg leading-relaxed ${
          darkMode ? "text-paper-cream/80" : "text-on-surface-variant"
        }`}>
          En un ecosistema digital saturado de contenido efímero y ruido algorítmico, 
          <strong> Anclora Insights</strong> se erige como un puerto de estabilidad intelectual. 
          Bajo la dirección de Anclora Group, nuestro sello editorial no busca la inmediatez, 
          sino la trascendencia de los datos analizados, devolviéndole al lector el recurso más valioso de todos: el tiempo.
        </p>
      </motion.div>

      {/* Mission & Vision Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`p-8 md:p-12 border rounded-xl relative overflow-hidden group flex flex-col justify-between ${
            darkMode 
              ? "bg-[#0F172A] border-metallic-gold/20 hover:border-metallic-gold/40" 
              : "bg-white border-metallic-gold/15 hover:border-metallic-gold/30"
          } transition-all duration-300 shadow-sm`}
        >
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-full bg-metallic-gold/10 flex items-center justify-center">
              <Eye className="w-6 h-6 text-metallic-gold" />
            </div>
            <h3 className={`font-serif text-2xl md:text-3xl ${
              darkMode ? "text-paper-cream" : "text-ink-black"
            }`}>
              Nuestra Misión
            </h3>
            <p className={`font-sans text-sm md:text-base leading-relaxed ${
              darkMode ? "text-paper-cream/75" : "text-on-surface-variant"
            }`}>
              Destilar la complejidad del mundo globalizado en conocimiento analítico y conceptual de alto valor, 
              proporcionando lecturas rigurosas que equipen a las mentes influyentes para anticipar el futuro, 
              siempre en un formato estético e intelectualmente sofisticado.
            </p>
          </div>
          <div className="mt-8 border-t border-metallic-gold/10 pt-4">
            <span className="text-xs uppercase tracking-widest text-metallic-gold/70 block">
              Propósito Fundamental
            </span>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`p-8 md:p-12 border rounded-xl relative overflow-hidden group flex flex-col justify-between ${
            darkMode 
              ? "bg-[#0F172A] border-metallic-gold/20 hover:border-metallic-gold/40" 
              : "bg-white border-metallic-gold/15 hover:border-metallic-gold/30"
          } transition-all duration-300 shadow-sm`}
        >
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-full bg-metallic-gold/10 flex items-center justify-center">
              <Compass className="w-6 h-6 text-metallic-gold" />
            </div>
            <h3 className={`font-serif text-2xl md:text-3xl ${
              darkMode ? "text-paper-cream" : "text-ink-black"
            }`}>
              Nuestra Visión
            </h3>
            <p className={`font-sans text-sm md:text-base leading-relaxed ${
              darkMode ? "text-paper-cream/75" : "text-on-surface-variant"
            }`}>
              Establecer a Anclora Insights como el sello editorial de referencia absoluto en el análisis estratégico, 
              la economía del conocimiento y el crecimiento personal profundo, siendo reconocidos globalmente 
              por nuestra impecable curaduría y nuestro formato de minimalismo digital táctil.
            </p>
          </div>
          <div className="mt-8 border-t border-metallic-gold/10 pt-4">
            <span className="text-xs uppercase tracking-widest text-metallic-gold/70 block">
              Destino Estratégico
            </span>
          </div>
        </motion.div>
      </div>

      {/* Brand Manifesto block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`p-10 md:p-16 text-center border-l-4 border-metallic-gold relative overflow-hidden ${
          darkMode ? "bg-slate-950/40 text-paper-cream" : "bg-white text-ink-black"
        } shadow-md`}
      >
        <span className="text-3xl md:text-5xl leading-none text-metallic-gold/30 block font-serif mb-4">“</span>
        <blockquote className="font-serif text-xl md:text-3xl italic leading-relaxed max-w-4xl mx-auto mb-8">
          La verdadera sofisticación reside en la eliminación de lo innecesario hasta que solo queda lo esencial. 
          No publicamos para llenar estantes, sino para anclar certezas en un océano de incertidumbre.
        </blockquote>
        <cite className="font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-metallic-gold">
          — El Manifiesto de Anclora
        </cite>
      </motion.div>

      {/* Brand Pillars */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-metallic-gold font-semibold block">
            Nuestros Cuatro Pilares
          </span>
          <h3 className={`font-serif text-3xl md:text-4xl ${darkMode ? "text-paper-cream" : "text-ink-black"}`}>
            El ADN de Nuestro Sello
          </h3>
          <p className={`max-w-2xl mx-auto text-sm md:text-base ${darkMode ? "text-paper-cream/70" : "text-on-surface-variant"}`}>
            Cada decisión que tomamos, desde la tipografía hasta los temas de publicación, 
            está fundamentada en cuatro pilares visuales y conceptuales inalterables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 border rounded-xl relative ${
                darkMode ? "bg-[#0F172A]/80 border-metallic-gold/15" : "bg-white border-metallic-gold/10"
              } hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-metallic-gold/10 flex items-center justify-center">
                    {getIconComponent(pillar.icon)}
                  </div>
                  <h4 className={`font-serif text-xl ${darkMode ? "text-paper-cream" : "text-ink-black"}`}>
                    {pillar.title}
                  </h4>
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-paper-cream/80" : "text-on-surface-variant"}`}>
                  {pillar.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-dashed border-metallic-gold/15">
                <p className={`text-xs italic ${darkMode ? "text-metallic-gold/80" : "text-primary/90"}`}>
                  "{pillar.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
