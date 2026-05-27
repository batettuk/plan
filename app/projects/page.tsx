'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Search, Filter, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'residential', 'commercial', 'industrial', 'infrastructure'];

  const projects = [
    {
      id: 1,
      title: t.projects.shangrila.name,
      category: 'commercial',
      image: 'https://picsum.photos/seed/comp1/800/600',
      desc: t.projects.shangrila.desc,
      specs: { area: '181,200 m²', year: '2016' }
    },
    {
      id: 2,
      title: "Bella Vista Residential",
      category: 'residential',
      image: 'https://picsum.photos/seed/res1/800/600',
      desc: "Luxury residential complex offering premium living standards in Ulaanbaatar.",
      specs: { units: '120+', area: '45,000 m²' }
    },
    {
      id: 3,
      title: "Mining Infrastructure Phase I",
      category: 'infrastructure',
      image: 'https://picsum.photos/seed/infra1/800/600',
      desc: "Critical support infrastructure for major mining operations in the Gobi region.",
      specs: { area: '200,000 m²', duration: '24 months' }
    },
    {
      id: 4,
      title: "Sky Resort",
      category: 'commercial',
      image: 'https://picsum.photos/seed/resort/800/600',
      desc: "The first international-standard ski resort in Mongolia.",
      specs: { slopes: '5', capacity: '1,500' }
    },
    {
      id: 5,
      title: "Central Tower",
      category: 'commercial',
      image: 'https://picsum.photos/seed/tower/800/600',
      desc: "Ulaanbaatar's premier A-class office and luxury shopping destination.",
      specs: { floors: '17', area: '15,000 m²' }
    },
    {
      id: 6,
      title: "Renewable Energy Substation",
      category: 'industrial',
      image: 'https://picsum.photos/seed/energy/800/600',
      desc: "Strategic energy project enhancing the reliability of the regional power grid.",
      specs: { capacity: '110kV', type: 'Sustainable' }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
           >
             {t.projects.title}
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-slate-400 max-w-2xl mx-auto text-lg font-light"
           >
             Developing landmarks that define the modern skyline of Mongolia through technical excellence and sustainable practices.
           </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white sticky top-16 z-30 shadow-sm border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
            <div className="flex space-x-8 py-6 min-w-max">
               {categories.map(cat => (
                 <button
                   key={cat}
                   onClick={() => setFilter(cat)}
                   className={`text-sm font-bold uppercase tracking-widest transition-all ${
                     filter === cat 
                     ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' 
                     : 'text-slate-400 hover:text-slate-900 border-b-2 border-transparent pb-1'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
         </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                     <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors"></div>
                     <div className="absolute top-4 right-4 py-1.5 px-3 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600">
                       {project.category}
                     </div>
                  </div>
                  <div className="p-8">
                     <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                       {project.title}
                     </h3>
                     <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                       {project.desc}
                     </p>
                     
                     <div className="flex flex-wrap gap-4 mb-8">
                        {Object.entries(project.specs).map(([key, val]) => (
                           <div key={key} className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 flex items-center space-x-2">
                              <span className="text-[10px] uppercase font-bold text-slate-400">{key}:</span>
                              <span className="text-[10px] font-bold text-slate-900">{val}</span>
                           </div>
                        ))}
                     </div>

                     <button className="flex items-center space-x-2 text-slate-900 font-bold text-xs uppercase tracking-widest group/btn">
                        <span>Project Details</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
