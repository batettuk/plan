'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.projects, href: '/projects' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="w-10 h-10 bg-indigo-600 group-hover:bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-600/10 transition-colors">M</div>
          <span className={`font-display font-black text-xl tracking-wider transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            MCS <span className={`font-medium ${scrolled ? 'text-indigo-600' : 'text-indigo-400'}`}>PROPERTY</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className={`flex items-center space-x-4 ml-4 pl-4 border-l transition-colors duration-500 ${scrolled ? 'border-slate-200' : 'border-white/20'}`}>
            <button 
              onClick={() => setLang(lang === 'en' ? 'mn' : 'en')}
              className={`flex items-center space-x-1 text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-slate-400 hover:text-indigo-600' : 'text-slate-300 hover:text-indigo-400'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'MN' : 'EN'}</span>
            </button>
            <Link 
              href="/contact"
              className={`inline-block text-xs font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-[1.03] ${
                scrolled 
                  ? 'bg-slate-900 text-white hover:bg-slate-800' 
                  : 'bg-white text-slate-950 hover:bg-indigo-600 hover:text-white'
              }`}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors duration-500 ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-display font-semibold text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                <button 
                  onClick={() => {
                    setLang(lang === 'en' ? 'mn' : 'en');
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 text-sm font-bold text-indigo-600"
                >
                  <Globe className="w-4 h-4" />
                  <span>Switch to {lang === 'en' ? 'Mongolian' : 'English'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
