'use client';

import React from 'react';
import MainLayout from '@/components/MainLayout';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, History, Target, Users, Shield, Award, Lightbulb, Scale } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const coreValues = [
    {
      icon: <Scale className="w-10 h-10 text-indigo-600" />,
      title: t.about.values.integrity,
      desc: "Upholding the highest moral standards in every interaction and project."
    },
    {
      icon: <Award className="w-10 h-10 text-indigo-600" />,
      title: t.about.values.quality,
      desc: "A meticulous approach to every detail, ensuring lasting value and excellence."
    },
    {
      icon: <Shield className="w-10 h-10 text-indigo-600" />,
      title: t.about.values.safety,
      desc: "Zero tolerance for accidents. Protecting our workforce and the public is non-negotiable."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-indigo-600" />,
      title: t.about.values.innovation,
      desc: "Pioneering new technologies and methodologies to solve modern construction challenges."
    }
  ];

  const milestones = [
    { year: "1999", title: "Inception", desc: "MCS Property was established as a dedicated engineering unit." },
    { year: "2010", title: "Scale-up", desc: "Expanded into mega-scale mining and infrastructure projects." },
    { year: "2016", title: "Landmark achievement", desc: "Completion of the Shangri-La Complex, Ulaanbaatar." },
    { year: "2024", title: "Regional impact", desc: "Leading sustainable construction across Central Asia." }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/about-hero/1920/1080" 
            alt="Corporate" 
            fill 
            className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 pb-20 flex flex-col justify-end">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-6 uppercase tracking-tight">
                    {t.nav.about}
                  </h1>
                  <p className="text-xl md:text-3xl text-indigo-400 font-display font-bold italic tracking-wide">
                    {t.about.subtitle}
                  </p>
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
           <div className="relative">
              <div className="sticky top-32">
                <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-6">Our DNA</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight mb-10">
                  {t.about.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed font-light first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-indigo-600">
                  {t.about.detail}
                </p>
              </div>
           </div>
           <div className="flex flex-col space-y-12">
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl">
                 <Image 
                    src="https://picsum.photos/seed/story/800/1000" 
                    alt="Workplace" 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                 />
              </div>
              <div className="grid grid-cols-2 gap-8">
                 <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <div className="text-indigo-600 font-display font-black text-4xl mb-2">25+</div>
                    <div className="text-slate-900 font-bold text-xs uppercase tracking-widest">{t.about.experience}</div>
                 </div>
                 <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <div className="text-indigo-600 font-display font-black text-4xl mb-2">60+</div>
                    <div className="text-slate-900 font-bold text-xs uppercase tracking-widest">{t.about.projects}</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* History & Vision Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24">
             <div className="w-full lg:w-1/2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">{t.about.history.title}</h4>
                <p className="text-2xl text-slate-700 leading-relaxed font-medium mb-16 underline decoration-indigo-600 decoration-4 underline-offset-8">
                   {t.about.history.text}
                </p>
                
                <div className="space-y-12">
                   {milestones.map((m, i) => (
                     <div key={m.year} className="flex gap-6 relative group">
                        {i !== milestones.length - 1 && <div className="absolute left-6 top-12 bottom-0 w-px bg-slate-200"></div>}
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform">
                           <span className="text-[10px] font-black text-indigo-600">{m.year}</span>
                        </div>
                        <div className="pb-8">
                           <h5 className="text-lg font-display font-bold text-slate-900 mb-2">{m.title}</h5>
                           <p className="text-slate-500 text-sm">{m.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="w-full lg:w-1/2 flex items-center">
                <div className="bg-slate-900 p-16 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                   <h4 className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-10">{t.about.vision.title}</h4>
                   <p className="text-3xl md:text-4xl font-display font-bold leading-tight mb-12 italic">
                      &quot;{t.about.vision.text}&quot;
                   </p>
                   <div className="w-20 h-1 bg-indigo-600"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">{t.about.values.title}</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((v, i) => (
                <motion.div 
                  key={v.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-slate-50 rounded-4xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                   <div className="mb-10">{v.icon}</div>
                   <h3 className="text-xl font-display font-bold text-slate-900 mb-6">{v.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Global Presence or Partners (Mocking as it's common for high-res about pages) */}
      <section className="py-32 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                 <h2 className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-4">Integrated Management</h2>
                 <h3 className="text-4xl font-display font-bold text-white mb-6 underline decoration-indigo-600 decoration-2 underline-offset-8">Certified Excellence</h3>
                 <p className="text-slate-400">
                    Our operations are governed by an Integrated Management System, strictly adhering to ISO 9001, ISO 14001, and ISO 45001 standards.
                 </p>
              </div>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
              {['ISO 9001', 'ISO 14001', 'ISO 45001', 'National Leader'].map(label => (
                <div key={label} className="border border-white/10 p-10 rounded-2xl flex items-center justify-center text-white text-xs font-black uppercase tracking-widest text-center">
                   {label}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-12 uppercase tracking-tighter">
               Building the <span className="text-indigo-600">Unbuilt</span>
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-slate-900 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all transform hover:scale-105 shadow-xl max-w-full text-center"
            >
              Contact Us for Collaboration
            </Link>
        </div>
      </section>
    </MainLayout>
  );
}
