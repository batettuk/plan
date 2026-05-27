'use client';

import React, { useRef } from 'react';
import MainLayout from '@/components/MainLayout';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronRight, ArrowRight, Building2, HardHat, Ruler, Briefcase, Zap, ShieldCheck, Milestone, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Effects
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.12]);
  const opacityBg = useTransform(scrollY, [0, 800], [0.45, 0.2]);
  const yContent = useTransform(scrollY, [0, 800], [0, -40]);

  const smoothBgY = useSpring(yBg, { stiffness: 90, damping: 20 });
  const smoothBgScale = useSpring(scaleBg, { stiffness: 90, damping: 20 });

  const services = [
    { icon: <Ruler className="w-8 h-8" />, ...t.services.architectural },
    { icon: <Zap className="w-8 h-8" />, ...t.services.engineering },
    { icon: <Building2 className="w-8 h-8" />, ...t.services.construction },
    { icon: <HardHat className="w-8 h-8" />, ...t.services.management },
    { icon: <Briefcase className="w-8 h-8" />, ...t.services.project },
    { icon: <ShieldCheck className="w-8 h-8" />, ...t.services.consulting },
  ];

  const stats = [
    { value: '20+', label: t.about.experience },
    { value: '60+', label: t.about.projects },
    { value: '200+', label: t.about.engineers },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[95vh] flex items-center overflow-hidden bg-slate-950">
        
        {/* Parallax Background Layer & Blueprint Overlays */}
        <motion.div 
          style={{ y: smoothBgY, scale: smoothBgScale }}
          className="absolute inset-0 z-0 select-none"
        >
          <Image 
            src="https://picsum.photos/seed/construction-skyline/1920/1080" 
            alt="Corporate Engineering Concept" 
            fill 
            className="object-cover opacity-50 grayscale contrast-125 brightness-75 transition-all duration-700"
            priority
            referrerPolicy="no-referrer"
          />
          
          {/* Subtle architectural design coordinate-grid layout (representing original blueprint drawings & tech look) */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
          
          {/* Additional architectural lines */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="120" cy="120" r="1.5" fill="indigo" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Outer elegant color gradients overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent"></div>
        </motion.div>

        {/* Content Block */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
            style={{ y: yContent }}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-8 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
              <span>Pioneering Landmark Developments</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.95] sm:leading-[0.88] tracking-tighter mb-10 uppercase select-none break-words"
            >
              <span className="block text-slate-100">{t.hero.title.split(' ')[0]}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-white">{t.hero.title.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-300 mb-14 leading-relaxed font-light max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link 
                href="/projects" 
                className="group flex items-center justify-center space-x-3 bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-900/10 hover:shadow-indigo-600/20 hover:scale-[1.03]"
              >
                <span>{t.hero.cta}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/about" 
                className="group flex items-center justify-center space-x-2 text-white font-bold text-sm tracking-wider px-8 py-5 rounded-full border border-white/15 hover:bg-white/5 transition-all text-center"
              >
                <span>{t.nav.about}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/40 cursor-pointer hidden md:flex hover:text-white/80 transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
        >
           <span className="text-[10px] font-black uppercase tracking-[0.25em]">Scroll Down</span>
           <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center py-1.5">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
              />
           </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">{t.nav.services}</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">{t.services.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 group bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-900 transition-all duration-500"
              >
                <div className="text-indigo-600 bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 group-hover:text-white transition-colors mb-4 italic">
                  {service.title}
                </h4>
                <p className="text-slate-600 group-hover:text-slate-400 transition-colors leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                        src="https://picsum.photos/seed/building/800/600" 
                        alt="Project" 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                    <div className="text-indigo-600 font-display font-black text-5xl mb-1">20+</div>
                    <div className="text-slate-900 font-bold text-xs uppercase tracking-widest">{t.about.experience}</div>
                </div>
            </div>
            
            <div className="w-full lg:w-1/2">
                <h2 className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-4 tracking-[0.3em]">{t.nav.about}</h2>
                <h3 className="text-4xl font-display font-bold text-white mb-8 leading-tight">{t.about.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                    {t.about.detail}
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-12">
                   {stats.map(s => (
                       <div key={s.label}>
                           <div className="text-white text-2xl font-bold mb-1">{s.value.split(' ')[0]}</div>
                           <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{s.label.split(' ')[1]}</div>
                       </div>
                   ))}
                </div>

                <Link 
                  href="/about" 
                  className="inline-flex items-center space-x-2 text-indigo-400 font-bold group"
                >
                  <span>Learn more about our heritage</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                   <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">{t.projects.featured}</h2>
                   <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">{t.projects.shangrila.name}</h3>
                </div>
                <Link href="/projects" className="text-indigo-600 hover:text-indigo-800 font-bold text-sm transition-colors block md:hidden mb-2">
                    {t.projects.viewAll} →
                </Link>
                <Link href="/projects" className="text-slate-400 hover:text-indigo-600 font-bold text-sm transition-colors hidden md:block">
                    {t.projects.viewAll}
                </Link>
            </div>
            
            <div className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                 <Image 
                    src="https://picsum.photos/seed/shangrila/1600/900" 
                    alt="Shangri-La" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent opacity-90"></div>
                 <div className="absolute bottom-0 left-0 p-6 sm:p-12 w-full md:w-2/3">
                    <p className="text-white text-base sm:text-xl leading-relaxed font-light mb-6">
                        {t.projects.shangrila.desc}
                    </p>
                    <div className="flex items-center space-x-8 sm:space-x-12">
                        <div>
                            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Area</div>
                            <div className="text-white font-bold">181,200 m²</div>
                        </div>
                        <div>
                            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Rooms</div>
                            <div className="text-white font-bold">290</div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>
    </MainLayout>
  );
}
