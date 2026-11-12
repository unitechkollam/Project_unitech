import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandsStrip } from './components/BrandsStrip';
import { WhatWeSupply } from './components/WhatWeSupply';
import { WhyDealersChooseUs } from './components/WhyDealersChooseUs';
import { CustomersSection } from './components/CustomersSection';
import { AboutUs } from './components/AboutUs';
import { AreasWeServe } from './components/AreasWeServe';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('unitech_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategoryForQuote, setSelectedCategoryForQuote] = useState<string | undefined>(undefined);
  const [prefilledContactItem, setPrefilledContactItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('unitech_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('unitech_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenQuoteModal = (category?: string) => {
    setSelectedCategoryForQuote(category);
    setQuoteModalOpen(true);
  };

  const handleGetWholesalePrice = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F7FA] dark:bg-[#071324] text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Sticky Header with Logo and Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onGetWholesalePrice={handleGetWholesalePrice}
          onRequestQuote={() => handleOpenQuoteModal()}
        />

        {/* 2. Brands Strip */}
        <BrandsStrip />

        {/* 3. What We Supply (Six Simple Cards) */}
        <WhatWeSupply
          onRequestQuote={(category) => {
            setPrefilledContactItem(category);
            handleOpenQuoteModal(category);
          }}
        />

        {/* 4. Why Dealers Choose UNITECH */}
        <WhyDealersChooseUs />

        {/* 5. Our Customers (100+ Customers, Logo Strip) */}
        <CustomersSection />

        {/* 6. About Us (7+ Years of Experience, Story, Warehouses) */}
        <AboutUs />

        {/* 7. Areas We Serve (Regional Distribution Network across Southern Kerala) */}
        <AreasWeServe />

        {/* 8. Contact (Enquiry Form, 2 Locations, Tap-to-call, Interactive Map) */}
        <ContactSection prefilledItem={prefilledContactItem} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating WhatsApp Chat Button */}
      <FloatingWhatsApp />

      {/* Request Quote Interactive Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialCategory={selectedCategoryForQuote}
      />
    </div>
  );
}
