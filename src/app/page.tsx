import Hero from "@/components/homepage/Hero";
import Performance from "@/components/homepage/Performance";

import Testimonials from "@/components/homepage/Testimonials";
import FinalCTA from "@/components/homepage/FinalCTA";
import Pricing from "@/components/homepage/ Pricing";
import Features from "@/components/homepage/Features";
import ThreatStats from "@/components/homepage/ThreatStats";
import DeviceSupport from "@/components/homepage/DeviceSupport";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Performance />
      <Pricing/>
      <Testimonials />
      <Features/>
      <FinalCTA />
      <ThreatStats/>
      <DeviceSupport/>
    </>
  );
}
