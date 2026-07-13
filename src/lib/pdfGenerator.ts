import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function generateBrandGuidelinesPDF(onProgress?: (text: string) => void) {
  onProgress?.("Inicializando compilador de PDF...");
  
  // Create jsPDF instance (A4: 210mm x 297mm)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageIds = [
    "print-brand-guidelines-1",
    "print-brand-guidelines-2",
    "print-brand-guidelines-3",
    "print-brand-guidelines-4",
    "print-brand-guidelines-5"
  ];

  for (let i = 0; i < pageIds.length; i++) {
    const id = pageIds[i];
    onProgress?.(`Capturando página ${i + 1} de ${pageIds.length}...`);
    
    const element = document.getElementById(id);
    if (!element) {
      console.error(`Page element ${id} not found`);
      continue;
    }

    // Pause briefly to ensure fonts and images are parsed fully by the browser
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Capture the element using html2canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Renders sharp vectors and readable, premium typography
      useCORS: true, // Supports image elements loaded from external URLs
      allowTaint: true,
      logging: false,
      backgroundColor: i === 0 ? "#0F172A" : "#F8FAFC"
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    
    if (i > 0) {
      doc.addPage();
    }

    // Write image directly to A4 dimension bounds (210mm x 297mm)
    doc.addImage(imgData, "JPEG", 0, 0, 210, 297);
  }

  onProgress?.("Destilando documento final...");
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  doc.save("Anclora_Insights_Brand_Guidelines.pdf");
}
