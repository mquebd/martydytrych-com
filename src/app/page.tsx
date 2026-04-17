import { Hero } from "@/components/Hero";
import { Speaking } from "@/components/Speaking";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <Speaking />
      <Articles />
      <Contact />
    </main>
  );
}
