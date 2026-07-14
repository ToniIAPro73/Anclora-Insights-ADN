import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Copy, Check, Feather, FileText, AlertCircle, RefreshCw } from "lucide-react";

interface EditorialAssistantProps {
  darkMode: boolean;
}

const loadingMessages = [
  "Destilando conceptos esenciales...",
  "Eliminando el ruido irrelevante...",
  "Alineando con el rigor estratégico de Anclora Group...",
  "Ajustando el ritmo y la calidez intelectual...",
  "Estructurando argumentos en párrafos sintéticos...",
  "Inyectando la autoridad de nuestra voz editorial..."
];

export default function EditorialAssistant({ darkMode }: EditorialAssistantProps) {
  const [activeTab, setActiveTab] = useState<"rewrite" | "generate" | "book-summary">("rewrite");
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentMessageIdx, setCurrentMessageIdx] = useState<number>(0);

  // Rotate messages during load
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isLoading) {
      interval = setInterval(() => {
        setCurrentMessageIdx((prev) => (prev + 1) % loadingMessages.length);
      }, 2500);
    } else {
      setCurrentMessageIdx(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleProcess = async () => {
    if (!inputText.trim()) {
      setErrorMsg("Por favor, ingresa algún texto o tema de entrada.");
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setOutputText("");

    try {
      const response = await fetch("/api/editorial-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: activeTab,
          prompt: inputText,
          textToAdapt: inputText
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error inesperado al invocar la IA.");
      }

      setOutputText(data.text || "");
    } catch (err) {
      console.error(err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "No se pudo conectar con el servidor. Verifica que el servidor de desarrollo esté corriendo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presetExamples = {
    rewrite: "¡Hola a todos! En este post del blog corporativo les traemos un súper tip ultra rápido que les va a volar la cabeza para liderar mejor sus equipos y conseguir un éxito masivo ya mismo. ¡Hagan click aquí abajo y no se lo pierdan por nada del mundo!",
    generate: "La paradoja de la atención sostenida en la economía de la distracción digital y cómo los líderes creativos pueden reconectar con el pensamiento profundo.",
    "book-summary": "Un libro de desarrollo estratégico que explore cómo el aburrimiento constructivo impulsa las ideas disruptivas en directores ejecutivos altamente estresados."
  };

  const loadExample = () => {
    setInputText(presetExamples[activeTab]);
    setErrorMsg(null);
  };

  return (
    <div className="space-y-12">
      {/* Intro header */}
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-metallic-gold font-semibold block">
          Generador de Insights
        </span>
        <h3 className={`font-serif text-3xl md:text-4xl ${darkMode ? "text-paper-cream" : "text-ink-black"}`}>
          Copiloto de Redacción Editorial IA
        </h3>
        <p className={`max-w-2xl text-sm md:text-base ${darkMode ? "text-paper-cream/70" : "text-on-surface-variant"}`}>
          Una herramienta estratégica respaldada por Gemini que te ayuda a redactar, depurar y estructurar textos 
          con el rigor y el tono exacto de Anclora Insights.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Control Panel & Input */}
        <div className="lg:col-span-6 space-y-6">
          {/* Operation selector tab */}
          <div className={`p-1.5 flex rounded-lg ${darkMode ? "bg-black/40" : "bg-stone-100"}`}>
            {(["rewrite", "generate", "book-summary"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setInputText("");
                  setOutputText("");
                  setErrorMsg(null);
                }}
                className={`flex-1 py-2 text-center rounded-md font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? darkMode
                      ? "bg-[#0F172A] text-metallic-gold border border-metallic-gold/30 shadow-sm"
                      : "bg-white text-ink-black border border-metallic-gold/15 shadow-sm"
                    : "text-stone-400 hover:text-stone-300"
                }`}
              >
                {tab === "rewrite" && "Adaptar Tono"}
                {tab === "generate" && "Crear Ensayo"}
                {tab === "book-summary" && "Estructurar Libro"}
              </button>
            ))}
          </div>

          {/* Textarea container */}
          <div className={`p-6 border rounded-xl flex flex-col justify-between ${
            darkMode ? "bg-[#0F172A] border-metallic-gold/15 text-paper-cream" : "bg-white border-metallic-gold/10 text-ink-black"
          } shadow-sm min-h-[350px]`}>
            <div className="space-y-4 flex-1 flex flex-col">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-metallic-gold font-semibold">
                  {activeTab === "rewrite" && "Texto Original"}
                  {activeTab === "generate" && "Tema o Título del Ensayo"}
                  {activeTab === "book-summary" && "Idea del Libro"}
                </span>
                <button
                  onClick={loadExample}
                  className="text-xs text-metallic-gold hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Cargar Ejemplo
                </button>
              </div>

              <textarea
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setErrorMsg(null);
                }}
                placeholder={
                  activeTab === "rewrite" 
                    ? "Pega el texto comercial o borrador informal que deseas elevar..." 
                    : activeTab === "generate"
                    ? "Introduce las ideas fundamentales o el tema sobre el que deseas un ensayo..."
                    : "Describe la tesis de tu libro, la audiencia potencial y el enfoque..."
                }
                className="w-full flex-1 min-h-[180px] bg-transparent border-none outline-none resize-none text-sm leading-relaxed placeholder-stone-400 py-2 focus:ring-0"
              />
            </div>

            {errorMsg && (
              <div className="text-xs text-red-400 bg-red-500/10 p-3 rounded mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              onClick={handleProcess}
              disabled={isLoading}
              className={`w-full py-3.5 rounded-lg font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                isLoading
                  ? "bg-stone-500/10 text-stone-500 cursor-not-allowed border border-stone-500/20"
                  : "bg-ink-black text-metallic-gold border border-metallic-gold/30 hover:bg-[#0F172A]"
              }`}
            >
              {isLoading ? "Procesando con rigor..." : "Destilar con IA"}
              <Sparkles className="w-4 h-4 text-metallic-gold" />
            </button>
          </div>
        </div>

        {/* Right Output Display Frame */}
        <div className="lg:col-span-6">
          <div className={`p-6 border rounded-xl flex flex-col justify-between ${
            darkMode ? "bg-[#0F172A] border-metallic-gold/15 text-paper-cream" : "bg-white border-metallic-gold/10 text-ink-black"
          } shadow-sm min-h-[420px] relative overflow-hidden`}>
            
            <AnimatePresence mode="wait">
              {isLoading ? (
                /* Beautiful loader */
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-6"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-metallic-gold/20 border-t-metallic-gold animate-spin"></div>
                    <Feather className="w-6 h-6 text-metallic-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <span className="text-xs uppercase tracking-widest text-metallic-gold font-semibold block">
                      Filtro Editorial de Anclora
                    </span>
                    <motion.p
                      key={currentMessageIdx}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs opacity-80 italic"
                    >
                      "{loadingMessages[currentMessageIdx]}"
                    </motion.p>
                  </div>
                </motion.div>
              ) : outputText ? (
                /* Rendered output */
                <motion.div
                  key="output"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-grow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-metallic-gold/15 pb-3">
                      <span className="text-xs uppercase tracking-widest text-metallic-gold font-semibold flex items-center gap-2">
                        <FileText className="w-4 h-4 text-metallic-gold" />
                        Resultado Curado por Anclora
                      </span>
                      <button
                        onClick={handleCopy}
                        className="text-xs text-metallic-gold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" /> ¡Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" /> Copiar Texto
                          </>
                        )}
                      </button>
                    </div>

                    <div className="py-2 text-sm leading-relaxed max-h-[280px] overflow-y-auto whitespace-pre-wrap font-serif italic pr-2">
                      {outputText}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-metallic-gold/15 flex justify-between items-center text-xs opacity-70">
                    <span className="font-sans">Tono: Riguroso, unhurried, intelectual.</span>
                    <span className="font-mono">Anclora Insights Editorial Engine v1.0</span>
                  </div>
                </motion.div>
              ) : (
                /* Empty state */
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-grow flex flex-col items-center justify-center p-12 text-center space-y-4"
                >
                  <Feather className="w-12 h-12 text-metallic-gold/30" />
                  <div className="space-y-1">
                    <h4 className={`font-serif text-lg ${darkMode ? "text-paper-cream/80" : "text-ink-black/80"}`}>
                      Esperando Entrada
                    </h4>
                    <p className="text-xs text-stone-400 max-w-xs mx-auto">
                      Ingresa tus ideas o textos originales en el panel izquierdo y haz clic en "Destilar con IA" 
                      para ver la magia de la curaduría editorial.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
