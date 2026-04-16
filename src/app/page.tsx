import { Hero } from "@/components/Hero";
import { StartupFounder } from "@/components/StartupFounder";
import { SalesGtm } from "@/components/SalesGtm";
import { Marketing } from "@/components/Marketing";
import { AiTools } from "@/components/AiTools";
import { Industries } from "@/components/Industries";
import { Projects } from "@/components/Projects";
import { Speaking } from "@/components/Speaking";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <StartupFounder />
      <SalesGtm />
      <Marketing />
      <AiTools />
      <Industries />
      <Projects />
      <Speaking />
      <Articles />
      <Contact />
    </main>
  );
}
