import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

export function PortfolioSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with real-time inventory and payment integration.',
      metrics: { label: 'Conversion Rate', value: '+45%' },
      color: '#0049ff'
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'Patient management system with appointment scheduling and telemedicine features.',
      metrics: { label: 'Active Users', value: '10K+' },
      color: '#00c7b7'
    },
    {
      title: 'CRM Dashboard',
      category: 'Software Solution',
      description: 'Custom CRM with analytics, reporting, and customer relationship tracking.',
      metrics: { label: 'Efficiency Boost', value: '+60%' },
      color: '#0049ff'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-white to-[#f3f4f6]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1f2937] mb-4">Our Work Speaks for Itself</h2>
          <p className="text-[#6b7280] max-w-3xl mx-auto">
            From concept to code — every project we build is designed to perform, scale, and inspire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div
                className="h-48 bg-gradient-to-br flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`
                }}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  {index === 0 && <TrendingUp size={40} style={{ color: project.color }} />}
                  {index === 1 && <Users size={40} style={{ color: project.color }} />}
                  {index === 2 && <Zap size={40} style={{ color: project.color }} />}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#00c7b7] mb-2">{project.category}</div>
                <h3 className="text-[#1f2937] mb-3">{project.title}</h3>
                <p className="text-[#6b7280] mb-4">{project.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-xs text-[#6b7280]">{project.metrics.label}</div>
                    <div className="text-[#0049ff]">{project.metrics.value}</div>
                  </div>
                  <ArrowRight className="text-[#6b7280] group-hover:text-[#0049ff] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#0049ff] text-[#0049ff] hover:bg-[#0049ff]/10"
          >
            View Full Portfolio
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
