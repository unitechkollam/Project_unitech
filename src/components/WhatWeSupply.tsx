import React from 'react';
import { SUPPLY_ITEMS, SupplyCategory } from '../data/siteContent';
import { Check, Image as ImageIcon } from 'lucide-react';

interface WhatWeSupplyProps {
  onRequestQuote: (categoryTitle?: string) => void;
}

export const WhatWeSupply: React.FC<WhatWeSupplyProps> = ({ onRequestQuote }) => {
  return (
    <section id="what-we-supply" className="py-16 md:py-24 bg-white dark:bg-[#071324] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1565C0]/10 dark:bg-cyan-900/30 text-[#1565C0] dark:text-[#00BCD4] text-xs font-semibold uppercase tracking-wider mb-3">
            Wholesale Equipment &amp; Spares
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3C6F] dark:text-white font-heading tracking-tight">
            What We Supply
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Reliable B2B inventory for water treatment plants, domestic softeners, commercial RO systems, and local retail supply across Kollam and Kerala.
          </p>
        </div>

        {/* Six Simple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SUPPLY_ITEMS.map((item: SupplyCategory) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#F3F7FA] dark:bg-[#0B1E38] rounded-2xl border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 group"
            >
              {/* Image / Graphic Visual Container */}
              <div className="relative h-52 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                {item.imageUrl ? (
                  <div
                    className={`relative w-full h-full overflow-hidden flex items-center justify-center ${
                      item.id === 'multiport-valves'
                        ? 'bg-white dark:bg-slate-100 p-2'
                        : 'bg-slate-100 dark:bg-slate-950'
                    }`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                        item.id === 'multiport-valves'
                          ? 'object-contain mix-blend-multiply scale-115'
                          : 'object-cover object-center'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <>
                    {/* Visual Technical Water-Themed SVG illustration */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.imageFallbackGradient} opacity-60`} />

                    {/* Subtle Geometric Graphic Indicator */}
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/70 dark:border-slate-700 flex items-center justify-center text-[#1565C0] dark:text-[#00BCD4] mb-2 group-hover:scale-105 transition-transform duration-200">
                      <CategorySvgIcon categoryId={item.id} />
                    </div>

                    {/* Replaceable Label */}
                    <div className="relative z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 dark:bg-black/75 backdrop-blur-xs text-[11px] font-mono text-cyan-200 border border-white/10">
                      <ImageIcon className="w-3 h-3 text-[#00BCD4]" />
                      <span>{item.imagePlaceholderText}</span>
                    </div>
                  </>
                )}

                {/* Item Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white/95 dark:bg-slate-900/95 text-[#0B3C6F] dark:text-cyan-300 shadow-sm border border-slate-200/80 dark:border-slate-700 backdrop-blur-xs">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0B3C6F] dark:text-white font-heading group-hover:text-[#1565C0] dark:group-hover:text-[#00BCD4] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-[#2E7D32] dark:text-emerald-400 mt-0.5 mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Item Bullet / Pill-Free Breakdown */}
                  <div className="border-t border-slate-200/80 dark:border-slate-700/80 pt-3 mb-5">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                      Key Specifications &amp; Range:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                      {item.items.map((subItem, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button: Orange Request Quote with navy text per brand rules */}
                <div className="pt-2">
                  <button
                    onClick={() => onRequestQuote(item.title)}
                    type="button"
                    className="w-full bg-[#FF8F00] text-[#0B3C6F] hover:bg-[#FFA000] active:bg-[#F57C00] font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg shadow-xs hover:shadow transition-all flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF8F00]"
                  >
                    Request Quote for {item.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Clean vector icons for each of the 6 categories
const CategorySvgIcon: React.FC<{ categoryId: string }> = ({ categoryId }) => {
  switch (categoryId) {
    case 'filter-vessels':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="7" y="4" width="10" height="16" rx="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="8" y1="20" x2="16" y2="20" />
        </svg>
      );
    case 'multiport-valves':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="2" x2="12" y2="7" />
          <line x1="12" y1="17" x2="12" y2="22" />
          <line x1="2" y1="12" x2="7" y2="12" />
          <line x1="17" y1="12" x2="22" y2="12" />
        </svg>
      );
    case 'filtration-media':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="8" cy="8" r="2.5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="16" cy="7" r="2" fill="currentColor" fillOpacity="0.3" />
          <circle cx="12" cy="14" r="3" fill="currentColor" fillOpacity="0.3" />
          <circle cx="7" cy="17" r="2" fill="currentColor" fillOpacity="0.3" />
          <circle cx="17" cy="16" r="2.5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      );
    case 'water-purifiers':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <circle cx="12" cy="14" r="2" />
        </svg>
      );
    case 'purifier-spares':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="2" width="12" height="6" rx="1" />
          <path d="M12 8v10" />
          <path d="M8 18h8" />
          <circle cx="12" cy="20" r="1.5" />
        </svg>
      );
    case 'ro-plant-parts':
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="7" width="18" height="10" rx="2" />
          <line x1="7" y1="7" x2="7" y2="17" />
          <line x1="17" y1="7" x2="17" y2="17" />
          <line x1="3" y1="12" x2="21" y2="12" strokeDasharray="2 2" />
        </svg>
      );
    default:
      return null;
  }
};
