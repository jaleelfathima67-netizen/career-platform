import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Features } from "@/components/sections/Features";
import { LeadCapture } from "@/components/sections/LeadCapture";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <LeadCapture />
    </>
  );
}
