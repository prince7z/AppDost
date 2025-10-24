import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export function ProblemSolutionSection() {
  const problems = [
    'Unclear communication and delays',
    'Outdated designs that don\'t convert',
    'Tech teams that disappear after launch'
  ];

  const solutions = [
    'Transparent process and weekly updates',
    'Modern design built for engagement',
    'Post-launch support that actually supports'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f3f4f6] to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1f2937] mb-4">
            We Know What Businesses Struggle With
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <X size={20} className="text-red-600" />
              </div>
              <h3 className="text-[#1f2937]">Common Frustrations</h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 text-[#6b7280]">
                  <X size={20} className="text-red-500 mt-1 flex-shrink-0" />
                  <span>{problem}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0049ff] to-[#00c7b7] rounded-2xl p-8 shadow-lg text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Check size={20} className="text-white" />
              </div>
              <h3>AppDost Fixes That.</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-white mt-1 flex-shrink-0" />
                  <span>{solution}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
