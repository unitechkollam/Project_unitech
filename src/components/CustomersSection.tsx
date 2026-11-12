import React from 'react';

export const CustomersSection: React.FC = () => {

  return (
    <section id="customers" className="py-16 md:py-24 bg-white dark:bg-[#071324] transition-colors duration-200 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1565C0]/10 text-[#1565C0] dark:text-[#00BCD4] text-xs font-semibold uppercase tracking-wider mb-3">
            Proven Trade Reputation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3C6F] dark:text-white font-heading tracking-tight">
            Trusted by 300+ Customers Across Kerala
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Supplying water technicians, commercial RO plant contractors, regional dealers, and hardware shops with dependable quality and honest trade partnership.
          </p>
        </div>

        {/* Customer Logo Slot Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F3F7FA] dark:bg-[#0B1E38] border border-slate-200/90 dark:border-slate-800 text-center shadow-xs">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-[#0B3C6F] dark:text-[#00BCD4] uppercase tracking-wider block mb-1">
              Businesses That Trust UNITECH
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Proud to supply trusted water treatment companies, commercial RO plant contractors, and regional dealers across Kerala.
            </p>

            {/* Grid of customer logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5 items-stretch">
              {/* Logo 1: PUREC Enviro Solutions */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 flex flex-col items-center justify-center min-h-[115px] shadow-xs hover:border-[#1565C0] dark:hover:border-cyan-400 transition-all duration-200 group">
                <div className="w-full h-14 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg px-2 py-1">
                  <img
                    src="/assets/aistudio/purec_enviro_7348aa6c.png"
                    alt="PUREC Enviro Solutions"
                    className="max-h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 mt-2 text-center line-clamp-1">
                  PUREC Enviro Solutions
                </span>
              </div>

              {/* Logo 2: Aqua Fix Solutions */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 flex flex-col items-center justify-center min-h-[115px] shadow-xs hover:border-[#1565C0] dark:hover:border-cyan-400 transition-all duration-200 group">
                <div className="w-full h-14 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg px-2 py-1">
                  <img
                    src="/assets/aistudio/aqua-fix-logo-small_022466c5.png"
                    alt="Aqua Fix Solutions"
                    className="max-h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 mt-1 text-center line-clamp-1">
                  Aqua Fix Solutions
                </span>
              </div>

              {/* Logo 3: Hyox Water Scientists */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 flex flex-col items-center justify-center min-h-[115px] shadow-xs hover:border-[#1565C0] dark:hover:border-cyan-400 transition-all duration-200 group">
                <div className="w-full h-14 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg px-2 py-1">
                  <img
                    src="/assets/aistudio/hyox_logo_enhanced-Picsart-AiImageEnhancer_75d2e8d4.png"
                    alt="Hyox Water Scientists"
                    className="max-h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 mt-2 text-center line-clamp-1">
                  Hyox Water Scientists
                </span>
              </div>

              {/* Logo 4: Hydro Matrix */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 flex flex-col items-center justify-center min-h-[115px] shadow-xs hover:border-[#1565C0] dark:hover:border-cyan-400 transition-all duration-200 group">
                <div className="w-full h-14 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg px-2 py-1">
                  <img
                    src="/assets/aistudio/Hydro_Matrix_Water_Engineering_Logo_9bbf01f0.png"
                    alt="Hydro Matrix"
                    className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 mt-2 text-center line-clamp-1">
                  Hydro Matrix
                </span>
              </div>

              {/* Logo 5: Royal Aqua Engineers */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 flex flex-col items-center justify-center min-h-[115px] shadow-xs hover:border-[#1565C0] dark:hover:border-cyan-400 transition-all duration-200 group">
                <div className="w-full h-14 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg px-2 py-1">
                  <img
                    src="/assets/aistudio/royal_aqua_fae47b1a.png"
                    alt="Royal Aqua Engineers"
                    className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 mt-2 text-center line-clamp-1">
                  Royal Aqua Engineers
                </span>
              </div>

              {/* Logo 6: H2O Solutions */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 flex flex-col items-center justify-center min-h-[115px] shadow-xs hover:border-[#1565C0] dark:hover:border-cyan-400 transition-all duration-200 group">
                <div className="w-full h-14 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg px-2 py-1">
                  <img
                    src="/assets/aistudio/H2O_SOLUTIONS_c03236d2.png"
                    alt="H2O Solutions"
                    className="max-h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 mt-2 text-center line-clamp-1">
                  H2O Solutions
                </span>
              </div>

              {/* Last slot: And More */}
              <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-cyan-950/30 border-2 border-dashed border-[#1565C0]/35 dark:border-cyan-500/35 rounded-xl p-3 flex flex-col items-center justify-center min-h-[115px] text-center shadow-xs hover:border-[#1565C0] dark:hover:border-cyan-400 transition-all duration-200">
                <span className="text-base sm:text-lg font-bold text-[#0B3C6F] dark:text-[#00BCD4] font-heading tracking-tight">
                  and more...
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  300+ Partners Across Kerala
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
