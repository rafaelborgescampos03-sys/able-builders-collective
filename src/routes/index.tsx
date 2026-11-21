import { createFileRoute } from "@tanstack/react-router";


import { Experiences } from "@/components/able/Experiences";

import { FinalCTA } from "@/components/able/FinalCTA";
import { Footer } from "@/components/able/Footer";
import { MentorQuotes } from "@/components/able/MentorQuotes";
import { Hackathon } from "@/components/able/Hackathon";
import { Hero } from "@/components/able/Hero";
import { Manifesto } from "@/components/able/Manifesto";
import { Navbar } from "@/components/able/Navbar";
import { Sessions } from "@/components/able/Sessions";


const title = "ABLE — Building the future.";
const description =
  "Comunidade privada de jovens empreendedores, builders e líderes que estão construindo empresas, projetos e carreiras. De Goiânia para o Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Hackathon />
        <Manifesto />
        <Experiences />
        <Sessions />
        <MentorQuotes />
        
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
