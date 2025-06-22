import { Link } from "wouter";
import { Mail, Phone, Globe, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/saanviyoga", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/saanviyoga", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/@saanviyoga", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
  ];

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Saanvi Yoga
                </h3>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span className="flex items-center">
                    <Phone className="w-3 h-3 mr-1" />
                    +91 9971410725
                  </span>
                  <span className="flex items-center">
                    <Mail className="w-3 h-3 mr-1" />
                    help@saanviyoga.live
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Transform your mind and soul with authentic yoga instruction from certified teacher Sneh Chauhan. Online classes designed for all levels.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={social.href} 
                    aria-label={social.label}
                    className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4 text-saffron">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-gray-300 hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Button>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-semibold text-lg mb-4 text-orange-400">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-gray-300 hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Button>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
              © 2024 Saanvi Yoga Studio. All rights reserved. | Instructor: Sneh Chauhan - Certified by Ministry of AYUSH & Art of Living
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span className="flex items-center">
                <Globe className="w-3 h-3 mr-1" />
                Online Classes Worldwide
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
