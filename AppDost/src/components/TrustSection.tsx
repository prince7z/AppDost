import { motion } from 'motion/react';
import { Shield, Award, Clock, Lock } from 'lucide-react';

export function TrustSection() {
  const trustItems = [
    { icon: Shield, title: 'Reliability', color: '#0049ff' },
    { icon: Award, title: 'Quality', color: '#00c7b7' },
    { icon: Clock, title: 'On-time Delivery', color: '#0049ff' },
    { icon: Lock, title: 'Data Security', color: '#00c7b7' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1f2937] mb-4">
            Trusted by Businesses, Loved by Innovators
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            We've helped startups, SMEs, and enterprises bring their ideas to life — on time and beyond expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#f3f4f6]">
                <item.icon size={32} style={{ color: item.color }} />
              </div>
              <h3 className="text-[#1f2937]">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
