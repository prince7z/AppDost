import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Briefcase } from 'lucide-react';

export function CareersSection() {
  const positions = [
    {
      title: 'Senior React Developer',
      type: 'Full-time',
      location: 'Remote / Patna',
      experience: '3+ years'
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote / Banka',
      experience: '2+ years'
    },
    {
      title: 'Android Developer',
      type: 'Full-time',
      location: 'Remote / Motihari',
      experience: '2+ years'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-[#f3f4f6]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1f2937] mb-4">Join Our Team</h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0049ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} className="text-[#0049ff]" />
                  </div>
                  <div>
                    <h3 className="text-[#1f2937] mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-[#6b7280]">
                      <span className="flex items-center gap-1">
                        📍 {position.location}
                      </span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.experience}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-[#0049ff] text-[#0049ff] hover:bg-[#0049ff]/10"
                >
                  Apply Now
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#6b7280] mb-4">
            Don't see your role? Send us your resume anyway!
          </p>
          <Button className="bg-[#0049ff] hover:bg-[#0049ff]/90 text-white">
            Send General Application
          </Button>
        </div>
      </div>
    </section>
  );
}
