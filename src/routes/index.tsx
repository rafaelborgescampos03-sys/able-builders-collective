import { createFileRoute } from "@tanstack/react-router";

import { AbleSummit } from "@/components/able/AbleSummit";
import { AbleTable } from "@/components/able/AbleTable";
import { Experiences } from "@/components/able/Experiences";
import { BuilderKit } from "@/components/able/BuilderKit";
import { Builders } from "@/components/able/Builders";
import { Content } from "@/components/able/Content";
import { FinalCTA } from "@/components/able/FinalCTA";
import { Footer } from "@/components/able/Footer";
import { FoundationWall } from "@/components/able/FoundationWall";
import { Hero } from "@/components/able/Hero";
import { Manifesto } from "@/components/able/Manifesto";
import { Navbar } from "@/components/able/Navbar";
import { Pillars } from "@/components/able/Pillars";
import { Sessions } from "@/components/able/Sessions";
import { Stats } from "@/components/able/Stats";

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
        <AbleSummit />
        <FoundationWall />
        <BuilderKit />
        <Content />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
