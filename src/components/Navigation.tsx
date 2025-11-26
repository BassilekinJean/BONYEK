import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => 
    `px-3 py-2 font-medium transition-colors relative ${
      isActive(path) ? "text-teal-900" : "text-gray-700 hover:text-teal-900"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col justify-center">
              <span className="text-4xl font-extrabold text-teal-900 tracking-widest leading-none" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                BONYEK
              </span>
              <div className="border border-red-500 rounded px-1 py-0.5 mt-1 inline-block">
                 <span className="text-[0.6rem] font-bold text-red-600 uppercase tracking-wider block leading-none">
                   Bureau d'Etudes Techniques
                 </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={linkClass('/')}>
              Accueil
              {isActive('/') && <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-900" />}
            </Link>
            <Link to="/about" className={linkClass('/about')}>
              À propos
              {isActive('/about') && <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-900" />}
            </Link>
            <Link to="/services" className={linkClass('/services')}>
              Services
              {isActive('/services') && <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-900" />}
            </Link>
            <Link to="/projects" className={linkClass('/projects')}>
              Réalisations
              {isActive('/projects') && <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-teal-900" />}
            </Link>
            <Link to="/contact">
              <Button className="bg-teal-900 hover:bg-teal-800 text-white ml-2">
                Contactez-nous
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50">Accueil</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50">À propos</Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50">Services</Link>
              <Link to="/projects" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50">Réalisations</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-teal-900 font-bold hover:bg-gray-50">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
