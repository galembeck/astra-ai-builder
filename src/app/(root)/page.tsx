import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ProcessSection } from "@/components/sections/process-section";

export default function HomePage() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <NewsletterSection />
    </section>
  );
}
