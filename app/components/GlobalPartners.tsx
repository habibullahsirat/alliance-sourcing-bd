import Hero from "./globalpartners/Hero";
import Partners from "./globalpartners/Partners";
import Strengths from "./globalpartners/Strengths";
import FAQS from "./globalpartners/FAQS";
import CTA from "./globalpartners/CTA";

export default function GlobalPartners() {
  return (
    <main className="flex flex-col w-full bg-white">
      <Hero />
      <Partners />
      <Strengths />
      <FAQS />
      <CTA />
    </main>
  );
}
