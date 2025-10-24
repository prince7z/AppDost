import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Lightbulb, Users, Heart } from 'lucide-react';

export function AboutSection() {
  const values = [
    { icon: Lightbulb, label: 'Innovation', color: '#0049ff' },
    { icon: Target, label: 'Transparency', color: '#00c7b7' },
    { icon: Heart, label: 'Commitment', color: '#0049ff' },
    { icon: Users, label: 'Client Success', color: '#00c7b7' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#1f2937] mb-6">Who We Are</h2>
            <p className="text-[#6b7280] mb-6">
              Founded in 2025, AppDost is a collective of developers, designers, and strategists passionate about crafting meaningful digital products. We don't just code — we collaborate, innovate, and elevate your vision.
            </p>
            <p className="text-[#6b7280] mb-8">
              Our mission is to empower brands and businesses through intelligent, user-centric digital solutions that drive real results.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <value.icon size={20} style={{ color: value.color }} />
                  </div>
                  <span className="text-[#1f2937]">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjEyMjI3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AppDost team collaboration"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0049ff]/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
