import rafaelCamposPhoto from "@/assets/rafael-campos.jpg.asset.json";
import sessionThiagoMalta from "@/assets/session-thiago-malta.jpg";
import foundationB2 from "@/assets/foundation-b2-eventos.png.asset.json";


/** Placeholder content — replace with CMS/database data later. */

export type Builder = {
  name: string;
  role: string;
  company: string;
  category: string;
  age: number;
  education: string;
  location: string;
  founded: string[];
  photo?: string;
  instagram?: string;
};

export const builders: Builder[] = [
  {
    name: "Rafael Campos",
    role: "Founder & CEO",
    company: "ABLE",
    category: "Comunidade",
    age: 23,
    education: "Graduando em Engenharia Civil na UFG",
    location: "Goiânia, Goiás",
    founded: ["AURA Group", "ARUÊ Club", "ABLE Ecosystem"],
    photo: rafaelCamposPhoto.url,
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
    guest: "Thiago Malta",
    company: "B2 Eventos",
    topic: "Como ele fatura +100 milhões com eventos?",
    episode: "Session 01",
    image: sessionThiagoMalta,
    href: "#",
  },
];

export type FoundationBlock = {
  name: string;
  year: string;
  number: string;
  guest?: string;
  image?: string;
};

export const foundation: FoundationBlock[] = [
  {
    name: "B2 EVENTOS",
    year: "2026",
    number: "#001",
    guest: "Thiago Malta",
    image: foundationB2.url,
  },
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
