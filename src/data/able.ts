import session1 from "@/assets/session-1.jpg";
import session2 from "@/assets/session-2.jpg";
import session3 from "@/assets/session-3.jpg";

/** Placeholder content — replace with CMS/database data later. */

export type Builder = {
  name: string;
  role: string;
  company: string;
  category: string;
  instagram?: string;
  linkedin?: string;
};

export const builders: Builder[] = [
  {
    name: "Rafael Campos",
    role: "Founder & CEO",
    company: "ABLE",
    category: "Comunidade",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Isadora Nery",
    role: "Head of Brand & Marketing",
    company: "ABLE",
    category: "Marketing",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Danilo Reis",
    role: "Founder",
    company: "Rastro Films",
    category: "Audiovisual",
    instagram: "#",
  },
];

export type Session = {
  guest: string;
  company: string;
  topic: string;
  episode: string;
  image: string;
  href: string;
};

export const sessions: Session[] = [
  {
    guest: "Rafael Campos",
    company: "ABLE",
    topic: "Como construir uma comunidade que constrói empresas",
    episode: "Session 01",
    image: session1,
    href: "#",
  },
  {
    guest: "Marina Toledo",
    company: "Empresa X",
    topic: "Escalar produto sem perder o que importa",
    episode: "Session 02",
    image: session2,
    href: "#",
  },
  {
    guest: "Bruno Vasques & Luiza Prado",
    company: "Empresa Y",
    topic: "Sociedade, confiança e decisões difíceis",
    episode: "Session 03",
    image: session3,
    href: "#",
  },
];

export type FoundationBlock = { name: string; year: string; number: string };

export const foundation: FoundationBlock[] = [
  { name: "RANCHERIO", year: "2026", number: "#001" },
  { name: "FRIATO", year: "2026", number: "#002" },
  { name: "TERRAL", year: "2026", number: "#003" },
  { name: "SICOOB", year: "2026", number: "#004" },
  { name: "ORION", year: "2026", number: "#005" },
  { name: "VALE ALTA", year: "2026", number: "#006" },
  { name: "CERRADO CO.", year: "2026", number: "#007" },
  { name: "NORTE CAPITAL", year: "2026", number: "#008" },
];

export type Article = {
  title: string;
  category: string;
  format: string;
  readTime: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: "O custo invisível de construir sozinho",
    category: "Empreendedorismo",
    format: "Artigo",
    readTime: "6 min",
    href: "#",
  },
  {
    title: "Liderança não é cargo. É responsabilidade.",
    category: "Liderança",
    format: "Entrevista",
    readTime: "11 min",
    href: "#",
  },
  {
    title: "Marca antes de escala: por que a ordem importa",
    category: "Marketing",
    format: "Artigo",
    readTime: "8 min",
    href: "#",
  },
  {
    title: "Goiânia como novo polo de fundadores",
    category: "Negócios",
    format: "Vídeo",
    readTime: "14 min",
    href: "#",
  },
  {
    title: "Execução: o único diferencial que não se copia",
    category: "Carreira",
    format: "Artigo",
    readTime: "5 min",
    href: "#",
  },
  {
    title: "Ferramentas que fundadores realmente usam",
    category: "Tecnologia",
    format: "Lista",
    readTime: "7 min",
    href: "#",
  },
];

export const contentCategories = [
  "Empreendedorismo",
  "Negócios",
  "Liderança",
  "Marketing",
  "Tecnologia",
  "Carreira",
  "Lifestyle",
];

/** Easily editable community metrics. */
export const stats = [
  { value: "+100", label: "Builders" },
  { value: "+20", label: "Empresas" },
  { value: "+10", label: "Sessions" },
  { value: "+1.000", label: "Conexões" },
];
