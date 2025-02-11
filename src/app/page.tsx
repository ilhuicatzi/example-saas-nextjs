import HeroSection from "@/components/HomePage/HeroSection";
import FeatureSection from "@/components/HomePage/FeatureSection";

export default function Home() {
  return (
    <main className="flex flex-col items-start p-8 pb-20 gap-16 sm:p-20">
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
