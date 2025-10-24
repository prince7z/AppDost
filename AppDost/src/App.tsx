import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { CareersSection } from './components/CareersSection';
import { BlogSection } from './components/BlogSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <AboutSection />
        <CareersSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
