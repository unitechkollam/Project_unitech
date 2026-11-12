import React from 'react';
import { BRANDS } from '../data/siteContent';
import { ShieldCheck } from 'lucide-react';

export const BrandsStrip: React.FC = () => {
  return (
    <section className="py-12 bg-[#F3F7FA] dark:bg-[#081528] transition-colors duration-200 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1565C0] dark:text-[#00BCD4] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              <span>Authorized Wholesale Brands</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B3C6F] dark:text-white font-heading mt-1">
              Top Water Treatment Brands We Distribute
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Direct access to premier manufacturers ensuring certified components, standard warranties, and consistent bulk supply.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4 pt-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-gradient-to-br from-white via-[#F0F7FF] to-[#E1F5FE] dark:from-[#0B1E38] dark:via-[#0E2849] dark:to-[#0B3C6F] rounded-xl py-4 px-3 sm:px-4 border border-[#1565C0]/20 dark:border-cyan-500/20 shadow-xs hover:shadow-md hover:border-[#1565C0]/60 dark:hover:border-cyan-400/60 hover:-translate-y-0.5 transition-all duration-200 text-center flex items-center justify-center min-h-[58px] group cursor-default"
            >
              <span className="text-sm sm:text-base font-bold text-[#0B3C6F] dark:text-cyan-200 group-hover:text-[#1565C0] dark:group-hover:text-white font-heading transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
