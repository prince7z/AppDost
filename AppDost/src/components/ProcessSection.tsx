import { motion } from 'motion/react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Discovery',
      desc: 'We listen, understand, and plan your digital roadmap.',
      color: '#0049ff'
    },
    {
      number: '2',
      icon: Palette,
      title: 'Design',
      desc: 'Wireframes and UI prototypes bring your vision to life.',
      color: '#00c7b7'
    },
    {
      number: '3',
      icon: Code,
      title: 'Development',
      desc: 'Robust coding and iterative testing ensure top performance.',
      color: '#0049ff'
    },
    {
      number: '4',
      icon: Rocket,
      title: 'Deployment & Support',
      desc: 'Launch confidently — we\'ll handle the maintenance.',
      color: '#00c7b7'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1f2937] mb-4">Our Approach</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0049ff] via-[#00c7b7] to-[#0049ff]" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-white shadow-lg border-2"
                   style={{ borderColor: step.color }}>
                <step.icon size={28} style={{ color: step.color }} />
              </div>
              <div className="text-sm text-[#0049ff] mb-2">{step.title}</div>
              <p className="text-[#6b7280] text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
