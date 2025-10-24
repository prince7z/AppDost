import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogSection() {
  const blogPosts = [
    {
      title: 'Top 10 Web Development Trends in 2025',
      excerpt: 'Discover the latest technologies and frameworks shaping the future of web development.',
      author: 'AppDost Team',
      date: 'Jan 15, 2025',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBibHVlfGVufDF8fHx8MTc2MTI2NjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'How to Choose the Right CRM for Your Business',
      excerpt: 'A comprehensive guide to selecting CRM software that fits your business needs.',
      author: 'AppDost Team',
      date: 'Jan 10, 2025',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1736066331155-c95740b0bd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3AlMjBwaG9uZXxlbnwxfHx8fDE3NjEzMTMzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Mobile App Security: Best Practices',
      excerpt: 'Essential security measures every mobile app developer should implement.',
      author: 'AppDost Team',
      date: 'Jan 5, 2025',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjEyMjI3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1f2937] mb-4">Latest from Our Blog</h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            Insights, tips, and trends from the world of technology and digital innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0049ff] text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#1f2937] mb-3 group-hover:text-[#0049ff] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#6b7280] mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-[#6b7280] pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#0049ff] text-[#0049ff] hover:bg-[#0049ff]/10"
          >
            View All Articles
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
