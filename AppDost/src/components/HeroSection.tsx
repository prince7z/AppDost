import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white via-[#f3f4f6] to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#0049ff]/10 rounded-full mb-6">
              <span className="text-[#0049ff]">Where ideas find their digital form</span>
            </div>
            
            <h1 className="text-[#1f2937] mb-6">
              Transforming Ideas Into Digital Power.
            </h1>
            
            <p className="text-[#6b7280] mb-8">
              From mobile apps to full-scale software systems — we design, develop, and deliver tech that drives growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('Contact')}
                className="bg-[#0049ff] hover:bg-[#0049ff]/90 text-white"
              >
                Get Free Consultation
              </Button>
              <Button
                onClick={() => scrollToSection('Portfolio')}
                variant="outline"
                className="border-[#0049ff] text-[#0049ff] hover:bg-[#0049ff]/10"
              >
                Explore Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div>
                <div className="text-[#0049ff] mb-1">50+</div>
                <div className="text-[#6b7280] text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-[#0049ff] mb-1">100%</div>
                <div className="text-[#6b7280] text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-[#0049ff] mb-1">24/7</div>
                <div className="text-[#6b7280] text-sm">Support Available</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0049ff]/20 to-[#00c7b7]/20 blur-3xl rounded-full"></div>
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1736066331155-c95740b0bd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3AlMjBwaG9uZXxlbnwxfHx8fDE3NjEzMTMzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern workspace with devices"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#00c7b7] rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm text-[#1f2937]">On-time Delivery</div>
                    <div className="text-xs text-[#6b7280]">Guaranteed</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0049ff] rounded-full flex items-center justify-center text-white">
                    ★
                  </div>
                  <div>
                    <div className="text-sm text-[#1f2937]">Expert Team</div>
                    <div className="text-xs text-[#6b7280]">10+ Years Exp</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
