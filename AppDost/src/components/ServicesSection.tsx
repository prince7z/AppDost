import { motion } from 'motion/react';
import { Smartphone, Globe, Palette, Database, Cloud, ShieldCheck } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: 'Android App Development',
      text: 'Powerful, secure, and scalable Android apps built with precision and performance.',
      color: '#0049ff'
    },
    {
      icon: Globe,
      title: 'Web Development',
      text: 'Fast, responsive, and SEO-optimized websites crafted to convert visitors into customers.',
      color: '#00c7b7'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      text: 'Intuitive and visually engaging designs focused on user delight and retention.',
      color: '#0049ff'
    },
    {
      icon: Database,
      title: 'CRM Software',
      text: 'Custom CRM solutions that help you manage, track, and grow your business relationships effortlessly.',
      color: '#00c7b7'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      text: 'Seamless, scalable, and secure cloud infrastructure for modern business operations.',
      color: '#0049ff'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      text: 'Protect your digital assets with enterprise-grade cybersecurity practices and tools.',
      color: '#00c7b7'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1f2937] mb-4">Our Core Expertise</h2>
          <p className="text-[#6b7280] max-w-3xl mx-auto">
            Whether you're launching a startup or scaling an enterprise, AppDost provides complete digital solutions to fit your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#f3f4f6] rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon size={28} style={{ color: service.color }} />
              </div>
              <h3 className="text-[#1f2937] mb-3">{service.title}</h3>
              <p className="text-[#6b7280]">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
