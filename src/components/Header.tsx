import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onRequestQuote: (item?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'What We Supply', href: '#what-we-supply' },
    { label: 'Why UNITECH', href: '#why-unitech' },
    { label: 'Our Customers', href: '#customers' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Areas We Serve', href: '#areas-we-serve' },
    { label: 'Locations & Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F3F7FA] border-b border-slate-200/90 shadow-xs transition-colors duration-200">
      {/* Top micro contact bar for quick trade phone access */}
      <div className="bg-[#0B3C6F] text-white/90 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="font-medium text-[#00BCD4]">B2B Wholesale Distributor · Kollam &amp; Karunagappally</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline">Chandra Complex, Decent Jn &amp; Thazhava</span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 text-xs">
            <a
              href="tel:+918138048474"
              className="flex items-center gap-1 hover:text-[#00BCD4] transition-colors font-medium whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#00BCD4]" />
              <span>+91 8138048474</span>
            </a>
            <span className="text-white/40">·</span>
            <a
              href="https://wa.me/918138048474?text=Hello%20UNITECH,%20I%20am%20inquiry%20from%20your%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#2E7D32] bg-white/90 hover:bg-white px-2 py-0.5 rounded text-[11px] font-semibold transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3 text-[#2E7D32]" />
              <span>WhatsApp</span>
            </a>
            <span className="text-white/40">·</span>
            <a
              href="https://www.instagram.com/unitech_water/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-300 hover:text-white transition-colors"
              aria-label="UNITECH Instagram"
              title="Follow @unitech_water on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span className="hidden md:inline text-[11px] font-medium">Insta</span>
            </a>
            <span className="text-white/40">·</span>
            <a
              href="https://www.facebook.com/unitechkerala/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sky-300 hover:text-white transition-colors"
              aria-label="UNITECH Facebook"
              title="Follow unitechkerala on Facebook"
            >
              <Facebook className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden md:inline text-[11px] font-medium">FB</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 py-1">
          {/* Zone 1: Oval Blended Brand Logo & Tagline */}
          <a
            href="#"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-2 focus-visible:outline-[#1565C0] rounded-xl group py-0.5"
            aria-label="UNITECH - A Complete Water Treatment Equipments"
          >
            <img
              src={getAssetUrl('assets/aistudio/image_bc9b2d96.png')}
              alt="UNITECH - A Complete Water Treatment Equipments Logo"
              width={135}
              height={95}
              className="w-[100px] h-[75px] sm:w-[135px] sm:h-[95px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-200"
              style={{
                maskImage: 'radial-gradient(ellipse at center, #000 72%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, #000 72%, transparent 100%)',
              }}
            />
            <span className="text-xs text-[#2E7D32] font-semibold tracking-tight leading-tight hidden sm:block max-w-[160px]">
              A Complete Water Treatment Equipments
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#1565C0] transition-colors py-1 relative group focus-visible:outline-2 focus-visible:outline-[#1565C0] rounded"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1565C0] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Dark Mode & Primary Quote Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              type="button"
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-600 hover:text-[#0B3C6F] hover:bg-slate-200/70 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#1565C0] cursor-pointer"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Orange Request Quote Button (Only used for Request Quote with navy text per brand rules) */}
            <button
              onClick={() => onRequestQuote()}
              type="button"
              className="bg-[#FF8F00] text-[#0B3C6F] hover:bg-[#FFA000] active:bg-[#F57C00] font-semibold text-sm px-4 sm:px-5 py-2.5 min-h-[44px] flex items-center justify-center rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF8F00]"
            >
              Request Quote
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-700 hover:bg-slate-200/70 rounded-lg focus-visible:outline-2 focus-visible:outline-[#1565C0] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F3F7FA] border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-blue-50/80 hover:text-[#1565C0] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full bg-[#FF8F00] text-[#0B3C6F] font-semibold py-3 px-4 rounded-lg text-center shadow hover:bg-[#FFA000] transition-colors"
              >
                Request Quote
              </button>
              <a
                href="tel:+918138048474"
                className="w-full flex items-center justify-center gap-2 bg-[#0B3C6F] text-white py-2.5 px-4 rounded-lg text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#00BCD4]" />
                <span>Call Kollam Office: +91 8138048474</span>
              </a>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://www.instagram.com/unitech_water/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-pink-500/10 text-pink-700 dark:text-pink-400 py-2.5 px-3 rounded-lg text-xs font-semibold hover:bg-pink-500/20 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/unitechkerala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-500/10 text-[#1877F2] dark:text-blue-400 py-2.5 px-3 rounded-lg text-xs font-semibold hover:bg-blue-500/20 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
