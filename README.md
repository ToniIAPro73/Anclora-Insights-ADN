# Anclora Insights: Business DNA Portal

> **Sello Editorial de Alta Autoridad** | Transformando el conocimiento en
> experiencias intelectuales de excelencia

## Visión

Anclora Insights es un portal inteligente diseñado para arquitectos de marca y
líderes estratégicos que demandan rigor, elegancia y profundidad en la definición
de su identidad corporativa. Combinamos curaduría extrema, inteligencia
artificial avanzada y diseño de lujo para crear experiencias que elevan el
conocimiento a su máxima expresión.

## Características Distintivas

### 🧬 **Business DNA**

Descubre los pilares fundamentales de tu marca: Curaduría Extrema, Rigor
Intelectual, Tactilidad Digital y Exclusividad Premium. Generamos arquitecturas
conceptuales que transforman la visión estratégica en narrativas cohesivas.

### 📘 **Brand Book Premium**

Crea memoriales editoriales de tu marca con la elegancia de una publicación de
lujo. Diseño responsivo, tipografía refinada y narrativas estructuradas para
comunicar tu identidad con autoridad.

### ✍️ **Editorial Assistant**

Asistente de contenido impulsado por IA que garantiza coherencia narrativa y
excelencia lingüística. Perfecciona tu voz de marca con sugerencias que respetan
tu identidad única.

### 🎨 **Contrast Checker**

Verifica la legibilidad y accesibilidad de tu paleta de marca. Nuestras
herramientas garantizan que cada combinación de colores cumple con estándares
de accesibilidad WCAG.

### 📋 **Print Brand Guidelines**

Exporta tus directrices de marca en PDF de alta fidelidad, listos para impresión
y distribución. Cada documento refleja el nivel de excelencia que define a
Anclora Group.

---

## Requisitos Previos

- **Node.js** 18.0 o superior
- **Clave API de Google Gemini** (obtén la tuya en [Google AI Studio](https://aistudio.google.com))

## Instalación y Ejecución

### 1. Clonar y Configurar el Entorno

```bash
git clone <repository-url>
cd anclora-insights-adn
npm install
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
GEMINI_API_KEY=tu_clave_api_gemini_aqui
```

### 3. Iniciar en Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.
Antes de arrancar, el comando libera automáticamente cualquier proceso que esté
escuchando en ese puerto.

### 4. Construcción para Producción

```bash
npm run build
npm start
```

---

## Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Estilos**: Tailwind CSS 4 + Motion (animaciones fluidas)
- **Backend**: Express.js
- **IA**: Google Gemini API
- **Exportación**: html2canvas + jsPDF
- **Iconografía**: Lucide React
- **Build Tool**: Vite

---

## Arquitectura del Proyecto

```txt
src/
├── components/          # Componentes de la interfaz
│   ├── BusinessDNA.tsx
│   ├── BrandBook.tsx
│   ├── EditorialAssistant.tsx
│   ├── ContrastChecker.tsx
│   └── PrintBrandGuidelines.tsx
├── lib/
│   └── pdfGenerator.ts  # Generación de PDFs
├── App.tsx              # Componente raíz
└── types.ts             # Definiciones TypeScript
```

---

## Filosofía de Diseño

Cada elemento de Anclora Insights refleja nuestro compromiso con:

- **Curaduría Extrema**: No acumulamos; destilamos la esencia
- **Rigor Intelectual**: Análisis fundamentados en profundidad y verdad
- **Tactilidad Digital**: La calidez del libro físico en el entorno digital
- **Exclusividad Premium**: Experiencias diseñadas para mentes exigentes

---

## Desarrollo

### Comandos Disponibles

```bash
npm run dev      # Libera el puerto 3000 e inicia el servidor de desarrollo
npm run build    # Construye para producción
npm run start    # Inicia aplicación en producción
npm run clean    # Limpia artefactos de build
npm run lint     # Valida tipos con TypeScript
```

### Estructura de Commits

Mantén claridad en tu historial de cambios:

```text
feat: Añadir nueva funcionalidad
fix: Corregir comportamiento existente
style: Cambios en estilos o diseño
docs: Actualizar documentación
refactor: Reorganizar código sin cambiar funcionalidad
```

---

## Contribuciones

Anclora Insights es una expresión de excelencia. Las contribuciones deben
mantener este estándar de calidad, elegancia y rigor intelectual.

---

## Licencia

Copyright © 2026 Anclora Group. Todos los derechos reservados.

---

**Diseñado para líderes que entienden que la verdadera autoridad requiere
profundidad, tiempo y verdad inalterable.**
