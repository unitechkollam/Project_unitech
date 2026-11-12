import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071F3A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/80">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="inline-flex items-center justify-start w-fit max-w-[210px] group focus-visible:outline-2 focus-visible:outline-[#00BCD4] rounded-lg"
              aria-label="UNITECH - A Complete Water Treatment Equipments"
            >
              <img
                src={getAssetUrl('assets/aistudio/image_bc9b2d96.png')}
                alt="UNITECH - A Complete Water Treatment Equipments Logo"
                width={195}
                height={60}
                className="w-[170px] sm:w-[195px] h-auto object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed pr-4">
              Leading wholesale B2B distributor of water filtration media, FRP filter vessels, multiport valves, domestic purifiers, and industrial RO plant spares in Kollam &amp; Karunagappally, Kerala.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://wa.me/918138048474?text=Hello%20UNITECH,%20I%20am%20inquiry%20from%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#2E7D32] hover:bg-[#256628] text-white text-xs font-semibold transition-colors shadow-xs w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Trade WhatsApp: +91 8138048474</span>
              </a>

              {/* Social Media Links */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs text-slate-400 font-medium">Follow Us:</span>
                <a
                  href="https://www.instagram.com/unitech_water/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-slate-200 hover:text-white border border-slate-700/80 hover:border-pink-500/50 text-xs font-medium transition-all group"
                  aria-label="Follow UNITECH on Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:text-white transition-colors" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/unitechkerala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#1877F2] text-slate-200 hover:text-white border border-slate-700/80 hover:border-[#1877F2]/50 text-xs font-medium transition-all group"
                  aria-label="Follow UNITECH on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-white transition-colors" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location 1: Kollam Shop NAP Block (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              UNITECH Kollam Shop
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
                <span>Chandra Complex, Decent Jn, Kollam, Kerala, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00BCD4] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+918138048474" className="hover:text-white transition-colors font-medium">
                    +91 8138048474
                  </a>
                  <a href="tel:+919562112931" className="hover:text-white transition-colors font-medium">
                    +91 9562112931
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00BCD4] shrink-0" />
                <a href="mailto:unitechkollam@gmail.com" className="hover:text-white transition-colors">
                  unitechkollam@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location 2: Office and Warehouse NAP Block (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              UNITECH Office &amp; Warehouse
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                <span>Thazhava, Karunagappally, Kollam, Kerala, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                <a href="tel:+918111902730" className="hover:text-white transition-colors font-medium">
                  +91 8111902730
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2E7D32] shrink-0" />
                <a href="mailto:unitechkollam@gmail.com" className="hover:text-white transition-colors">
                  unitechkollam@gmail.com
                </a>
              </div>
              <div className="text-[11px] text-slate-400 pt-1">
                Central depot for bulk filtration media, industrial vessels &amp; pallet dispatches.
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#what-we-supply" className="hover:text-white transition-colors">
                  What We Supply
                </a>
              </li>
              <li>
                <a href="#why-unitech" className="hover:text-white transition-colors">
                  Why Dealers Choose Us
                </a>
              </li>
              <li>
                <a href="#customers" className="hover:text-white transition-colors">
                  Our Customers
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#areas-we-serve" className="hover:text-white transition-colors">
                  Areas We Serve
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} UNITECH. All rights reserved. A Complete Water Treatment Equipments.
          </div>
          <div className="flex items-center gap-6">
            <span>Kollam &amp; Karunagappally, Kerala</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-3 py-1.5 rounded-md transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#00BCD4]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
