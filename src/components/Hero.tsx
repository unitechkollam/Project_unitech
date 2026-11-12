import React from 'react';
import { ArrowRight, CheckCircle2, Droplets, MapPin, Award, Users } from 'lucide-react';

interface HeroProps {
  onGetWholesalePrice: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetWholesalePrice, onRequestQuote }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3C6F] via-[#104882] to-[#1565C0] text-white pt-10 pb-20 md:pt-16 md:pb-28">
      {/* Gentle Floating Water Bubbles / Ripple Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00BCD4]/15 rounded-full blur-3xl animate-water-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2E7D32]/15 rounded-full blur-2xl" />

        {/* Floating Bubble Elements */}
        <div className="absolute top-12 left-[10%] w-16 h-16 rounded-full border border-cyan-300/30 bg-cyan-400/10 backdrop-blur-[2px] animate-bubble-slow" />
        <div className="absolute top-36 right-[15%] w-24 h-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-[2px] animate-bubble-medium" />
        <div className="absolute bottom-28 left-[25%] w-12 h-12 rounded-full border border-cyan-200/30 bg-cyan-300/15 animate-bubble-fast" />
        <div className="absolute top-1/2 right-[8%] w-8 h-8 rounded-full border border-white/25 bg-white/10 animate-bubble-slow" />
        <div className="absolute bottom-40 right-[30%] w-14 h-14 rounded-full border border-cyan-400/20 bg-cyan-500/10 animate-bubble-medium" />

        {/* Subtle Water Rings */}
        <svg
          className="absolute -top-20 -left-20 w-[450px] h-[450px] opacity-15 stroke-cyan-300 fill-none"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="40" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="95" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Headline & Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-cyan-200 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
              <Droplets className="w-4 h-4 text-[#00BCD4]" />
              <span>A Complete Water Treatment Equipments</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white font-heading leading-tight md:leading-[1.15] mb-6 text-balance">
              Wholesale Water Treatment Equipment &amp; RO Spares in <span className="text-[#00BCD4]">Kerala</span>
            </h1>

            {/* Short Subtext */}
            <p className="text-base sm:text-lg text-slate-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Supplying trusted B2B trade dealers, water technicians, RO plant installers, and retail shops across Kerala with verified bulk inventory and direct dealer pricing.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-cyan-100 font-medium mb-9">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] bg-white rounded-full" />
                <span>Ready Bulk Stock in Kollam</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] bg-white rounded-full" />
                <span>Direct Dealer Wholesale Margins</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] bg-white rounded-full" />
                <span>Two Strategic Warehouse Locations</span>
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Get Wholesale Price Button */}
              <button
                onClick={onGetWholesalePrice}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0B3C6F] hover:bg-slate-100 active:bg-slate-200 font-semibold text-base px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Get Wholesale Price</span>
                <ArrowRight className="w-4 h-4 text-[#1565C0]" />
              </button>

              {/* Orange Request Quote Button (Navy text per brand rules) */}
              <button
                onClick={onRequestQuote}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF8F00] text-[#0B3C6F] hover:bg-[#FFA000] font-semibold text-base px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF8F00]"
              >
                <span>Request Quote</span>
              </button>

              {/* About Us Button */}
              <a
                href="#about-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white hover:bg-white/10 font-medium text-base px-6 py-3.5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>About Us</span>
              </a>
            </div>
          </div>

          {/* Hero Feature Visual Card / Water Tech Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-cyan-300">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-white">UNITECH Wholesale Hub</h2>
                    <p className="text-xs text-cyan-200">Decent Jn &amp; Thazhava, Kollam</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#2E7D32] text-white rounded-md shadow-sm">
                  Active Stock
                </span>
              </div>

              {/* Quick Supply Highlights */}
              <div className="space-y-3 mb-6">
                <div className="bg-white/10 rounded-xl p-3.5 flex items-start gap-3 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#00BCD4]/20 flex items-center justify-center shrink-0 text-cyan-200 mt-0.5">
                    <span className="text-xs font-bold">FRP</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Filter Vessels &amp; Multiport Valves</h3>
                    <p className="text-xs text-slate-200 mt-0.5">All standard sizes in-stock for residential &amp; industrial filters.</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-3.5 flex items-start gap-3 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/30 flex items-center justify-center shrink-0 text-emerald-300 mt-0.5">
                    <span className="text-xs font-bold">MED</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Bulk Media: Katalox, Resin &amp; Carbon</h3>
                    <p className="text-xs text-slate-200 mt-0.5">DMI 65, MnO2, Zeo Safe, Anthracite &amp; graded sands.</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-3.5 flex items-start gap-3 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/30 flex items-center justify-center shrink-0 text-sky-200 mt-0.5">
                    <span className="text-xs font-bold">RO</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">RO Plant Parts, Spares &amp; Purifiers</h3>
                    <p className="text-xs text-slate-200 mt-0.5">Membranes, dosing pumps, booster pumps, cartridges &amp; fittings.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-cyan-100">
                <span>Immediate pickup &amp; delivery</span>
                <a
                  href="tel:+918138048474"
                  className="font-medium text-white hover:text-cyan-300 underline underline-offset-2"
                >
                  Quick Dispatch Hotline
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip (Exact verified metrics: 7+ years of experience, 100+ customers, 2 locations in Kollam) */}
        <div className="mt-16 pt-10 border-t border-white/15">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/20 text-[#00BCD4] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-white tabular-nums">7+</div>
                <div className="text-sm text-cyan-100 font-medium">Years of Experience</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-white tabular-nums">100+</div>
                <div className="text-sm text-cyan-100 font-medium">Customers</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-400/20 text-cyan-200 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-white tabular-nums">2</div>
                <div className="text-sm text-cyan-100 font-medium">Locations in Kollam</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave-Shaped Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-10 sm:h-14 lg:h-18 fill-[#F3F7FA] dark:fill-[#081528] transition-colors duration-200"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
