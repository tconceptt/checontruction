"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact', handleOpen);
    return () => window.removeEventListener('open-contact', handleOpen);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[101] p-4"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="relative h-48 bg-gray-900">
                {/* Map/Location Background */}
                <div className="absolute inset-0 opacity-40 mix-blend-luminosity bg-[url('/images/contact-bg.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white hover:text-accent transition-colors bg-black/20 p-2 rounded-full backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-1 bg-accent"></div>
                    <span className="text-accent font-black uppercase tracking-[0.2em] text-xs">Reach Out</span>
                  </div>
                  <h3 className="text-3xl font-light text-white tracking-tight">Contact <span className="font-semibold">Us</span></h3>
                </div>
              </div>
              
              <div className="p-8">
                <ul className="space-y-8">
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Headquarters</p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Cheergs Building, Bole Road<br />
                        Addis Ababa, Ethiopia<br />
                        PO Box 12345
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Direct Line</p>
                      <p className="text-gray-500 text-sm">
                        +251 911 234 567
                      </p>
                      <p className="text-gray-400 text-xs mt-1">Mon-Fri, 8:00 AM - 6:00 PM</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a href="mailto:info@checonstruction.com" className="text-primary hover:text-accent transition-colors text-sm font-medium">
                        info@checonstruction.com
                      </a>
                    </div>
                  </li>
                </ul>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-10 bg-primary text-white py-4 rounded font-semibold hover:bg-primary-dark transition-all text-sm uppercase tracking-widest"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}