'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center space-x-2 text-white mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold">M</div>
            <span className="font-display font-bold text-lg tracking-tight">
              MCS <span className="text-indigo-400">PROPERTY</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Leading engineering and project management company in Mongolia, committed to world-class standards and sustainable excellence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">{t.nav.home}</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">{t.nav.projects}</Link></li>
            <li><Link href="/career" className="hover:text-white transition-colors">{t.nav.career}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">{t.nav.services}</h4>
          <ul className="space-y-4 text-sm">
            <li>{t.services.architectural.title}</li>
            <li>{t.services.engineering.title}</li>
            <li>{t.services.construction.title}</li>
            <li>{t.services.management.title}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">{t.nav.contact}</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-indigo-400 shrink-0" />
              <span>{t.contact.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-indigo-400 shrink-0" />
              <span>{t.contact.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-indigo-400 shrink-0" />
              <span>{t.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-800 text-xs flex flex-col md:flex-row items-center justify-between">
        <p>© 2026 MCS Property LLC. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
