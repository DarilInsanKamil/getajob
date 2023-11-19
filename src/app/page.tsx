import HeroSection from "./ui/landingpage/hero-section";
import FeatureSection from "./ui/landingpage/features-section";
import CtaSection from "./ui/landingpage/cta-section";
import ListJobSection from "./ui/landingpage/listjob-section";
import TestimoniSection from "./ui/landingpage/testimoni-section";
import type { Metadata } from "next";
import { fetchAllJob } from "./lib/data";
import FaqSection from "./ui/landingpage/faq-section";
import SearchSection from "./ui/landingpage/search-section";
export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  // const dataJob = await fetchAllJob();

  return (
    <main className="mt-16">
      <HeroSection />
      <SearchSection />
      <FeatureSection />
      <CtaSection />
      {/* <ListJobSection dataJob={dataJob} /> */}
      <TestimoniSection />
      <FaqSection />
    </main>
  );
}
