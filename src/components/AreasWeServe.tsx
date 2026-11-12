import React from 'react';
import { MapPin, Truck, CheckCircle2 } from 'lucide-react';

export const AreasWeServe: React.FC = () => {
  const districts = [
    {
      name: 'Kollam',
      role: 'Shop & Central Warehouse',
      detail: 'Direct counter pickup and local delivery from our Decent Jn shop and Karunagappally warehouse. Your local water purifier dealer and wholesale water filter media source in Kollam.',
      isPhysicalLocation: true,
    },
    {
      name: 'Thiruvananthapuram',
      role: 'Regular Supply Route',
      detail: 'Wholesale supply of activated carbon, FRP filter vessels, and commercial RO spares delivered promptly to technicians and plant installers in the capital district.',
      isPhysicalLocation: false,
    },
    {
      name: 'Alappuzha',
      role: 'Regular Supply Route',
      detail: 'Dependable water treatment equipment supplier serving filtration contractors, iron removal plant builders, and regional hardware shops across Alappuzha.',
      isPhysicalLocation: false,
    },
    {
      name: 'Pathanamthitta',
      role: 'Regular Supply Route',
      detail: 'Dispatching water purifier spares, multiport valves, filter cartridges, and media bags directly to technicians and service centres across Pathanamthitta.',
      isPhysicalLocation: false,
    },
    {
      name: 'Kottayam',
      role: 'Regular Supply Route',
      detail: 'Commercial RO plant parts, high-pressure pumps, membranes, and softening resin supplied with reliable road freight to Kottayam dealers.',
      isPhysicalLocation: false,
    },
  ];

  return (
    <section id="areas-we-serve" className="py-16 md:py-20 bg-white dark:bg-[#071324] border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1565C0]/10 text-[#1565C0] dark:text-[#00BCD4] text-xs font-semibold uppercase tracking-wider mb-3">
            Regional Supply Network
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3C6F] dark:text-white font-heading tracking-tight">
            Areas We Serve in Kerala
          </h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            We supply dealers, technicians and RO plant installers across Thiruvananthapuram (Trivandrum), Kollam, Alappuzha (Alleppey), Pathanamthitta and Kottayam.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Our physical stocking shop and warehouse are located exclusively in Kollam district (at Decent Jn and Karunagappally). For all other districts, we provide daily road dispatch, direct freight booking, and prompt trade deliveries.
          </p>
        </div>

        {/* 5 Districts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {districts.map((district) => (
            <div
              key={district.name}
              className={`rounded-xl p-5 border transition-all ${
                district.isPhysicalLocation
                  ? 'bg-blue-50/60 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/60 shadow-xs'
                  : 'bg-[#F3F7FA] dark:bg-[#0B1E38] border-slate-200/80 dark:border-slate-800/80'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  {district.isPhysicalLocation ? (
                    <MapPin className="w-4 h-4 text-[#1565C0] dark:text-[#00BCD4] shrink-0" />
                  ) : (
                    <Truck className="w-4 h-4 text-[#2E7D32] dark:text-emerald-400 shrink-0" />
                  )}
                  <h3 className="text-base font-bold text-[#0B3C6F] dark:text-white font-heading">
                    {district.name}
                  </h3>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    district.isPhysicalLocation
                      ? 'bg-[#0B3C6F] text-white dark:bg-cyan-900/80 dark:text-cyan-200'
                      : 'bg-emerald-100 text-[#2E7D32] dark:bg-emerald-950 dark:text-emerald-300'
                  }`}
                >
                  {district.role}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {district.detail}
              </p>
            </div>
          ))}

          {/* Trade Dispatch Guarantee card */}
          <div className="rounded-xl p-5 bg-gradient-to-br from-[#0B3C6F] to-[#1565C0] text-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BCD4]" />
                <h3 className="text-base font-bold text-white font-heading">
                  Kerala Trade Dispatch
                </h3>
              </div>
              <p className="text-xs text-cyan-100 leading-relaxed">
                Wholesale RO spare parts, filter vessel stock, and media consignments dispatched within 24 hours to your workshop, project site, or retail counter.
              </p>
            </div>
            <div className="pt-3 border-t border-white/20 mt-3 flex items-center justify-between text-xs">
              <span className="text-cyan-200">Wholesale trade hotline:</span>
              <a href="tel:+918138048474" className="font-semibold text-white hover:text-cyan-300 underline">
                +91 8138048474
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
