import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDF_PAGE_WIDTH_MM = 210;
const PDF_PAGE_HEIGHT_MM = 297;
const PRINT_PAGE_WIDTH_PX = 800;
const PRINT_PAGE_HEIGHT_PX = 1131;

const pageIds = [
  "print-brand-guidelines-1",
  "print-brand-guidelines-2",
  "print-brand-guidelines-3",
  "print-brand-guidelines-4",
  "print-brand-guidelines-5"
];

async function waitForRenderAssets(elements: HTMLElement[]) {
  if ("fonts" in document) {
    await document.fonts.ready;
  }

  const images = elements.flatMap((element) => Array.from(element.querySelectorAll("img")));

  await Promise.all(
    images.map(async (image) => {
      if (image.complete) {
        return;
      }

      if ("decode" in image) {
        try {
          await image.decode();
          return;
        } catch {
          // Fall back to load/error listeners below.
        }
      }

      await new Promise<void>((resolve) => {
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      });
    })
  );
}

export async function generateBrandGuidelinesPDF(onProgress?: (text: string) => void) {
  try {
    onProgress?.("Inicializando compilador de PDF...");

    // Create jsPDF instance (A4: 210mm x 297mm)
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    const pages = pageIds.map((id) => {
      const element = document.getElementById(id);

      if (!(element instanceof HTMLElement)) {
        throw new Error(`No se encontró la página imprimible: ${id}`);
      }

      return { id, element };
    });

    onProgress?.("Cargando tipografías e imágenes...");
    await waitForRenderAssets(pages.map((page) => page.element));

    for (let i = 0; i < pages.length; i++) {
      const { id, element } = pages[i];
      onProgress?.(`Capturando página ${i + 1} de ${pages.length}...`);

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        imageTimeout: 15000,
        logging: false,
        backgroundColor: i === 0 ? "#0F172A" : "#F8FAFC",
        width: PRINT_PAGE_WIDTH_PX,
        height: PRINT_PAGE_HEIGHT_PX,
        windowWidth: PRINT_PAGE_WIDTH_PX,
        windowHeight: PRINT_PAGE_HEIGHT_PX,
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDocument) => {
          const clonedElement = clonedDocument.getElementById(id);

          if (clonedElement) {
            clonedElement.style.position = "relative";
            clonedElement.style.left = "0";
            clonedElement.style.top = "0";
            clonedElement.style.width = `${PRINT_PAGE_WIDTH_PX}px`;
            clonedElement.style.height = `${PRINT_PAGE_HEIGHT_PX}px`;
          }
        }
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);

      if (i > 0) {
        doc.addPage();
      }

      doc.addImage(imgData, "JPEG", 0, 0, PDF_PAGE_WIDTH_MM, PDF_PAGE_HEIGHT_MM);
    }

    onProgress?.("Destilando documento final...");
    await new Promise((resolve) => setTimeout(resolve, 300));

    onProgress?.("¡Descargando...!");
    doc.save("Anclora_Insights_Brand_Guidelines.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}
