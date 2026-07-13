export interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  usage: string;
  type: "primary" | "secondary" | "neutral" | "support";
}

export interface LogoVariation {
  id: string;
  name: string;
  description: string;
  url: string;
  recommendedUse: string;
  filterClass?: string;
  bgColorClass: string;
}

export interface FontSpecimen {
  name: string;
  family: string;
  weight: string;
  size: string;
  lineHeight: string;
  description: string;
  exampleText: string;
}

export interface EditorialGuideline {
  term: string;
  replacement: string;
  why: string;
  category: "forbidden" | "recommended";
}

export interface BrandPillar {
  title: string;
  icon: string;
  description: string;
  quote: string;
}
