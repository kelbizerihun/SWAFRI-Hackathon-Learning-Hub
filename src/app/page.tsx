import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CoursesSection from "@/components/CoursesSection";
import AIBanner from "@/components/AIBanner";
import StatsBanner from "@/components/StatsBanner";
import EventsSection from "@/components/EventsSection";
import JobsSection from "@/components/JobsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <CoursesSection />
      <AIBanner />
      <StatsBanner />
      <EventsSection />
      <JobsSection />
      <Footer />
    </main>
  );
}
