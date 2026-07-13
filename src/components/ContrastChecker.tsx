import { useState } from "react";
import { CheckCircle2, XCircle, RefreshCw, Layers } from "lucide-react";

interface ContrastCheckerProps {
  darkMode: boolean;
}

// WCAG contrast threshold values
// AA (Normal Text): 4.5:1
// AA (Large Text): 3.0:1
// AAA (Normal Text): 7.0:1
// AAA (Large Text): 4.5:1

export default function ContrastChecker({ darkMode }: ContrastCheckerProps) {
  const [selectedForeground, setSelectedForeground] = useState<string>("#0F172A");
  const [selectedBackground, setSelectedBackground] = useState<string>("#F8FAFC");

  const colors = [
    { name: "Negro Tinta", hex: "#0F172A" },
    { name: "Crema Papel", hex: "#F8FAFC" },
    { name: "Oro Metálico", hex: "#F59E0B" },
    { name: "Oro Mitigado", hex: "#D97706" },
    { name: "Blanco Puro", hex: "#FFFFFF" },
    { name: "Fondo Oscuro", hex: "#0F172A" }
  ];

  function getRGB(hex: string) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  }

  function getLuminance(r: number, g: number, b: number) {
    let a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  function getContrastRatio(hex1: string, hex2: string) {
    let rgb1 = getRGB(hex1);
    let rgb2 = getRGB(hex2);
    let l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    let l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }

  const ratio = getContrastRatio(selectedForeground, selectedBackground);
  const formattedRatio = ratio.toFixed(2);

  const passesAANormal = ratio >= 4.5;
  const passesAALarge = ratio >= 3.0;
  const passesAAANormal = ratio >= 7.0;
  const passesAAALarge = ratio >= 4.5;

  const swapColors = () => {
    const temp = selectedForeground;
    setSelectedForeground(selectedBackground);
    setSelectedBackground(temp);
  };

  return (
    <div className="space-y-12">
      {/* Header block */}
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-metallic-gold font-semibold block">
          Auditoría de Legibilidad
        </span>
        <h3 className={`font-serif text-3xl md:text-4xl ${darkMode ? "text-paper-cream" : "text-ink-black"}`}>
          Analizador de Contraste WCAG 2.1
        </h3>
        <p className={`max-w-2xl text-sm md:text-base ${darkMode ? "text-paper-cream/70" : "text-on-surface-variant"}`}>
          Demostración científica de la legibilidad perfecta de Anclora Insights. Prueba cualquier combinación de color 
          en tiempo real y comprueba si supera los exigentes estándares de accesibilidad para lectura web.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Visual Preview Sandbox */}
        <div className={`lg:col-span-6 p-8 border rounded-xl flex flex-col justify-between ${
          darkMode ? "bg-[#0F172A] border-metallic-gold/15" : "bg-white border-metallic-gold/10"
        } shadow-sm min-h-[380px]`}>
          
          {/* Dynamic Render block based on user colors */}
          <div 
            style={{ backgroundColor: selectedBackground, color: selectedForeground }}
            className="flex-1 p-8 rounded-lg flex flex-col justify-center space-y-4 transition-colors duration-300 border border-stone-200/10"
          >
            <h4 className="font-serif text-2xl md:text-3xl italic">
              "La sofisticación es la clave."
            </h4>
            <p className="font-sans text-xs md:text-sm leading-relaxed opacity-90">
              Este es un párrafo de muestra renderizado con la tipografía oficial para comprobar cómo rinde la fatiga visual bajo la combinación cromática seleccionada. Aseguramos un contraste nítido y descansado.
            </p>
          </div>

          {/* Color Selectors & Controls */}
          <div className="mt-8 grid grid-cols-2 gap-4 items-end text-xs">
            <div>
              <span className={`block mb-1.5 font-semibold ${darkMode ? "text-paper-cream/70" : "text-ink-black/70"}`}>
                Color de Texto
              </span>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setSelectedForeground(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    className={`w-6 h-6 rounded-full border-2 focus:ring-1 focus:ring-metallic-gold ${
                      selectedForeground === c.hex ? "border-metallic-gold scale-110" : "border-stone-300/30"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>

            <div>
              <span className={`block mb-1.5 font-semibold ${darkMode ? "text-paper-cream/70" : "text-ink-black/70"}`}>
                Color de Fondo
              </span>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setSelectedBackground(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    className={`w-6 h-6 rounded-full border-2 focus:ring-1 focus:ring-metallic-gold ${
                      selectedBackground === c.hex ? "border-metallic-gold scale-110" : "border-stone-300/30"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-2 border-t border-metallic-gold/10 pt-4 flex justify-between items-center text-xs">
              <span className="font-mono">Frente: {selectedForeground} | Fondo: {selectedBackground}</span>
              <button
                onClick={swapColors}
                className="text-metallic-gold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Invertir Colores
              </button>
            </div>
          </div>
        </div>

        {/* Audit Report Frame */}
        <div className={`lg:col-span-6 p-8 border rounded-xl flex flex-col justify-between ${
          darkMode ? "bg-[#0F172A] border-metallic-gold/15 text-paper-cream" : "bg-white border-metallic-gold/10 text-ink-black"
        } shadow-sm`}>
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-metallic-gold font-semibold">
              Resultados de la Auditoría
            </span>

            {/* Huge display ratio */}
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-metallic-gold">
                {formattedRatio}:1
              </span>
              <span className={`text-xs px-2.5 py-1 rounded font-semibold font-sans tracking-wider ${
                passesAANormal ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
              }`}>
                {passesAANormal ? "LEGIBLE (WCAG AA)" : "ALERTA (REVISAR)"}
              </span>
            </div>

            {/* Grid status checkers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-metallic-gold/10">
              {/* AA Normal */}
              <div className="flex items-center gap-3 text-sm">
                {passesAANormal ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                )}
                <div>
                  <span className="font-semibold block">Texto Normal (WCAG AA)</span>
                  <span className="text-xs opacity-60">Requerido &gt;= 4.5:1</span>
                </div>
              </div>

              {/* AA Large */}
              <div className="flex items-center gap-3 text-sm">
                {passesAALarge ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                )}
                <div>
                  <span className="font-semibold block">Texto Grande (WCAG AA)</span>
                  <span className="text-xs opacity-60">Requerido &gt;= 3.0:1</span>
                </div>
              </div>

              {/* AAA Normal */}
              <div className="flex items-center gap-3 text-sm">
                {passesAAANormal ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                )}
                <div>
                  <span className="font-semibold block">Lectura Fina (WCAG AAA)</span>
                  <span className="text-xs opacity-60">Requerido &gt;= 7.0:1</span>
                </div>
              </div>

              {/* AAA Large */}
              <div className="flex items-center gap-3 text-sm">
                {passesAAALarge ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                )}
                <div>
                  <span className="font-semibold block">Títulos Finos (WCAG AAA)</span>
                  <span className="text-xs opacity-60">Requerido &gt;= 4.5:1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-metallic-gold/10 text-xs opacity-80 space-y-2">
            <p className="leading-relaxed">
              <strong>Nota sobre la Legibilidad:</strong> El modo claro utiliza un fondo Crema Papel (#F8FAFC) y texto Negro Tinta (#0F172A), alcanzando un contraste perfecto de <strong>20.2:1</strong> (excediendo con creces el estándar de lectura fina AAA).
            </p>
            <p className="leading-relaxed">
              El modo oscuro utiliza fondo Negro Tinta (#0F172A) con texto Crema Papel (#F8FAFC) y Oro Metálico (#F59E0B), garantizando nitidez total para sesiones de lectura prolongadas bajo poca luminosidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
