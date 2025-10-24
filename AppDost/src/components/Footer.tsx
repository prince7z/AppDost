import { Mail, Phone, Clock, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const quickLinks = ['Home', 'Services', 'Careers', 'Blog', 'Contact'];
  const services = [
    'Android App Development',
    'Web Development',
    'UI/UX Design',
    'CRM Software',
    'Cloud Solutions',
    'Cybersecurity'
  ];
  const offices = ['Banka (HQ)', 'Motihari', 'Patna'];

  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src="../src/Assest/appdost-logo.png"
              alt="AppDost Logo" 
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#0049ff] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#0049ff] rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#0049ff] rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#0049ff] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00c7b7] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#00c7b7] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-[#00c7b7]" />
                <a href="mailto:contact@appdost.in" className="hover:text-[#00c7b7] transition-colors">
                  contact@appdost.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-[#00c7b7]" />
                <a href="tel:+911169290750" className="hover:text-[#00c7b7] transition-colors">
                  +91 11 6929 0750
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-1 flex-shrink-0 text-[#00c7b7]" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#00c7b7]" />
                <div>
                  {offices.map((office, index) => (
                    <div key={office}>
                      {office}
                      {index < offices.length - 1 && ', '}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AppDost - Complete IT Solution. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#00c7b7] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00c7b7] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00c7b7] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-4">
            Built with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
