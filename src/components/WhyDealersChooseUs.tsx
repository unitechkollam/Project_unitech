import React from 'react';
import { PackageCheck, BadgePercent, Layers, MapPin, CheckCircle } from 'lucide-react';

export const WhyDealersChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Bulk Stock Ready',
      tagline: 'Instant order fulfillment',
      description: 'Extensive inventory maintained at our Karunagappally warehouse and Kollam shop. No waiting for interstate consignments for your urgent client projects.',
      icon: PackageCheck,
      color: 'text-[#1565C0] dark:text-[#00BCD4]',
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      border: 'border-blue-100 dark:border-blue-900/50',
    },
    {
      title: 'Dealer Pricing',
      tagline: 'Margins that protect your trade',
      description: 'Direct wholesale price tiers tailored for regional dealers, certified technicians, RO plant installers, and retail shops to ensure healthy profit margins.',
      icon: BadgePercent,
      color: 'text-[#2E7D32] dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/40',
      border: 'border-emerald-100 dark:border-emerald-900/50',
    },
    {
      title: 'One-Stop Range',
      tagline: 'Complete water treatment ecosystem',
      description: 'From heavy FRP filter vessels and multiport valves to filtration media, booster pumps, and microscopic connectors — everything sourced from one trusted partner.',
      icon: Layers,
      color: 'text-[#0B3C6F] dark:text-cyan-300',
      bg: 'bg-sky-50 dark:bg-sky-950/40',
      border: 'border-sky-100 dark:border-sky-900/50',
    },
    {
      title: 'Two Locations',
      tagline: 'Strategic dual coverage in Kollam',
      description: 'Convenient counter pickup at Chandra Complex, Decent Jn for daily runs, and large-scale bulk dispatches from our central warehouse in Thazhava, Karunagappally.',
      icon: MapPin,
      color: 'text-[#00BCD4] dark:text-cyan-400',
      bg: 'bg-cyan-50 dark:bg-cyan-950/40',
      border: 'border-cyan-100 dark:border-cyan-900/50',
    },
  ];

  return (
    <section id="why-unitech" className="py-16 md:py-24 bg-[#F3F7FA] dark:bg-[#081528] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            The Wholesale Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3C6F] dark:text-white font-heading tracking-tight">
            Why Dealers Choose UNITECH
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Built from the ground up to support trade professionals, water engineers, and retail shops with dependable logistics and authentic components.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white dark:bg-[#0B1E38] rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#1565C0]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${pillar.bg} ${pillar.border} border flex items-center justify-center mb-5 ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B3C6F] dark:text-white font-heading">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-medium text-[#2E7D32] dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Wholesale Trade Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
