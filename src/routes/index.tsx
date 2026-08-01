import { createFileRoute } from "@tanstack/react-router";


import { Experiences } from "@/components/able/Experiences";

import { Builders } from "@/components/able/Builders";
import { Sponsors } from "@/components/able/Sponsors";
import { FinalCTA } from "@/components/able/FinalCTA";
import { Footer } from "@/components/able/Footer";
import { FoundationWall } from "@/components/able/FoundationWall";
import { Hero } from "@/components/able/Hero";
import { Manifesto } from "@/components/able/Manifesto";
import { Navbar } from "@/components/able/Navbar";
import { Pillars } from "@/components/able/Pillars";
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
        <Manifesto />
        <Pillars />
        <Builders />
        <Sessions />
        <Experiences />
        
        <FoundationWall />
        
        <Sponsors />
        
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
