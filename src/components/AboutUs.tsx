import React from 'react';
import { Droplet, Warehouse, Wrench, Shield, Image as ImageIcon, MapPin, PhoneCall } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-[#F3F7FA] dark:bg-[#081528] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Story & Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1565C0]/10 text-[#1565C0] dark:text-[#00BCD4] text-xs font-semibold uppercase tracking-wider mb-4">
              About UNITECH
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3C6F] dark:text-white font-heading tracking-tight mb-6">
              A Complete Water Treatment Equipments Partner in Kollam
            </h2>

            {/* Required Primary Statement */}
            <p className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
              UNITECH has more than 9+ years of experience supplying dealers, technicians, plant installers and shops.
            </p>

            {/* Authentic Brand Story */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Founded in Kollam with a mission to make dependable water filtration and purification engineering easily accessible across Kerala, UNITECH bridges premier manufacturers directly with regional trade professionals. We eliminate prolonged logistics wait times by maintaining extensive ready inventory in Karunagappally and Decent Jn, empowering installers to deliver reliable clean water solutions to homes, commercial properties, and industries.
            </p>

            {/* Core Operational Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="p-4 rounded-xl bg-white dark:bg-[#0B1E38] border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-[#1565C0] dark:text-[#00BCD4] flex items-center justify-center shrink-0 mt-0.5">
                  <Warehouse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B3C6F] dark:text-white font-heading">
                    Dual Warehousing
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Central bulk depot at Thazhava, Karunagappally &amp; quick trade pickup at Chandra Complex, Decent Jn.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#0B1E38] border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-900/40 text-[#2E7D32] dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B3C6F] dark:text-white font-heading">
                    Technician-First Support
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    We supply exact fittings, multiport valves, and media sizing suited to local Kerala water quality challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Call Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0B3C6F] dark:bg-[#1565C0] text-white hover:bg-[#082d54] text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#00BCD4]" />
                <span>Visit Our Locations</span>
              </a>
              <a
                href="tel:+918138048474"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium px-5 py-3 rounded-lg transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#2E7D32]" />
                <span>Call Main Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Facility Showcase & Clearly Labeled Placeholder Card */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#0B1E38] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-md">
              {/* Warehouse / Showroom Photo */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-sm group">
                <img
                  src={getAssetUrl('/assets/aistudio/unitech_facilities_showcase.png')}
                  alt="UNITECH Locations - Decent Jn Kollam Shop and Thazhava Karunagappally Warehouse"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 pointer-events-none">
                  <span>Decent Jn (Shop)</span>
                  <span className="text-[#00BCD4]">·</span>
                  <span>Thazhava (Warehouse)</span>
                </div>
              </div>

              {/* Verified Profile Card */}
              <div className="bg-[#F3F7FA] dark:bg-slate-900/70 rounded-xl p-4 border border-slate-200/60 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-[#0B3C6F] dark:text-white">Business Type</span>
                  <span>B2B Wholesale &amp; Trade Distribution</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 py-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-[#0B3C6F] dark:text-white">Headquarters</span>
                  <span>Kollam, Kerala, India</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 pt-2">
                  <span className="font-semibold text-[#0B3C6F] dark:text-white">Trade Coverage</span>
                  <span>All Kerala Dealers, Installers &amp; Shops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
