import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/siteContent';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Navigation, ExternalLink, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  prefilledItem?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledItem }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'Dealer' | 'Technician' | 'RO plant installer' | 'Industrial buyer' | 'Shop owner'>('Dealer');
  const [requirements, setRequirements] = useState('');

  const [errors, setErrors] = useState<{ name?: string; phone?: string; requirements?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);

  // If prefilledItem changes from another section
  useEffect(() => {
    if (prefilledItem) {
      setRequirements((prev) =>
        prev ? `${prev}\nInterested in: ${prefilledItem}` : `Interested in wholesale supply for: ${prefilledItem}`
      );
    }
  }, [prefilledItem]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; requirements?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation for 10 digits or international formats
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!requirements.trim()) {
      newErrors.requirements = 'Please specify the equipment, media, or spares you need';
    } else if (requirements.trim().length < 5) {
      newErrors.requirements = 'Please provide a little more detail about your requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // Build WhatsApp message
    const message = `*UNITECH Wholesale Enquiry*\n\n*Name:* ${name.trim()}\n*Phone:* ${phone.trim()}\n*Role / Business:* ${role}\n*Requirement:* ${requirements.trim()}\n\n_Sent via UNITECH Official Website_`;

    const whatsappUrl = `https://wa.me/918138048474?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const activeLocation = CONTACT_INFO.locations[activeLocationIndex];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-[#071324] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1565C0]/10 text-[#1565C0] dark:text-[#00BCD4] text-xs font-semibold uppercase tracking-wider mb-3">
            Wholesale Enquiries &amp; Counter Sales
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3C6F] dark:text-white font-heading tracking-tight">
            Connect with UNITECH Water Treatment
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Send your bulk equipment requirements directly to our Kollam sales desk via WhatsApp, or visit either of our two stocking locations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form with Validation */}
          <div className="lg:col-span-7 bg-[#F3F7FA] dark:bg-[#0B1E38] rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700/80 mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0B3C6F] dark:text-white font-heading">
                  Quick Wholesale Enquiry Form
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Instant trade quote dispatched to your WhatsApp
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] dark:text-emerald-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center animate-in fade-in duration-300">
                <CheckCircle className="w-12 h-12 text-[#2E7D32] dark:text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Enquiry Formatted Successfully!
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                  Your enquiry has been formatted and opened in WhatsApp (+91 8138048474). If WhatsApp didn't open automatically, you can tap below.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/918138048474?text=${encodeURIComponent(
                      `*UNITECH Wholesale Enquiry*\nName: ${name}\nPhone: ${phone}\nRole: ${role}\nNeed: ${requirements}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#256628] text-white font-semibold px-6 py-2.5 rounded-lg text-sm shadow transition-colors"
                  >
                    <span>Open in WhatsApp Again</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setRequirements('');
                    }}
                    type="button"
                    className="w-full sm:w-auto bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Enter your full name or company name"
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border text-slate-900 dark:text-white text-sm focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 dark:border-slate-700 focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                    Phone / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                      +91
                    </span>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="9876543210"
                      className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-slate-900 border text-slate-900 dark:text-white text-sm focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                          : 'border-slate-300 dark:border-slate-700 focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/20'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Role Selector: "I am a" */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2">
                    I am a: <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(['Dealer', 'Technician', 'RO plant installer', 'Industrial buyer', 'Shop owner'] as const).map(
                      (itemRole) => (
                        <button
                          key={itemRole}
                          type="button"
                          onClick={() => setRole(itemRole)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer ${
                            role === itemRole
                              ? 'bg-[#0B3C6F] text-white border-[#0B3C6F] dark:bg-[#1565C0] dark:border-[#1565C0] shadow-xs'
                              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-slate-400'
                          }`}
                        >
                          {itemRole}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* What do you need Textarea */}
                <div>
                  <label htmlFor="enquiry-needs" className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1.5">
                    What do you need? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="enquiry-needs"
                    rows={4}
                    value={requirements}
                    onChange={(e) => {
                      setRequirements(e.target.value);
                      if (errors.requirements) setErrors({ ...errors, requirements: undefined });
                    }}
                    placeholder="List the items, sizes or quantities needed (e.g. 5 FRP vessels 1054, 50 bags Katalox Light, 10 booster pumps, RO membranes, etc.)"
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border text-slate-900 dark:text-white text-sm focus:outline-none transition-colors ${
                      errors.requirements
                        ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-300 dark:border-slate-700 focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/20'
                    }`}
                  />
                  {errors.requirements && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.requirements}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button (WhatsApp Direct) */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#256628] active:bg-[#1e5220] text-white font-semibold text-base py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#2E7D32]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp (+91 8138048474)</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                  Submitting directly opens WhatsApp with your prefilled equipment list.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Two Locations with Tap-to-Call + Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#0B3C6F] dark:text-white font-heading">
                Our Two Stocking Locations
              </h3>

              {/* Location 1: Kollam Shop */}
              <div className="bg-[#F3F7FA] dark:bg-[#0B1E38] rounded-xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="text-base font-bold text-[#0B3C6F] dark:text-white font-heading">
                      Kollam Shop (Counter Sales &amp; Pickup)
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Chandra Complex, Decent Jn, Kollam, Kerala
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-[#0B3C6F] dark:bg-blue-900/50 dark:text-cyan-300 shrink-0">
                    Retail &amp; Trade Shop
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-200 mt-3 pt-3 border-t border-slate-200/70 dark:border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#1565C0] dark:text-[#00BCD4] shrink-0" />
                    <span>Phones: </span>
                    <a
                      href="tel:+918138048474"
                      className="font-semibold text-[#0B3C6F] dark:text-cyan-300 hover:underline"
                    >
                      +91 8138048474
                    </a>
                    <span>, </span>
                    <a
                      href="tel:+919562112931"
                      className="font-semibold text-[#0B3C6F] dark:text-cyan-300 hover:underline"
                    >
                      +91 9562112931
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#1565C0] dark:text-[#00BCD4] shrink-0" />
                      <span>Email: </span>
                      <a
                        href="mailto:unitechkollam@gmail.com"
                        className="font-medium text-[#1565C0] dark:text-cyan-300 hover:underline"
                      >
                        unitechkollam@gmail.com
                      </a>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/xmhHUJLm6SV6kvGq9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#1565C0] dark:text-[#00BCD4] hover:underline font-semibold"
                    >
                      <span>Google Map</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location 2: Office and Warehouse */}
              <div className="bg-[#F3F7FA] dark:bg-[#0B1E38] rounded-xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="text-base font-bold text-[#0B3C6F] dark:text-white font-heading">
                      Office &amp; Central Warehouse
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Thazhava, Karunagappally, Kollam, Kerala
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-[#2E7D32] dark:bg-emerald-900/50 dark:text-emerald-300 shrink-0">
                    Bulk Storage
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-200 mt-3 pt-3 border-t border-slate-200/70 dark:border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#2E7D32] dark:text-emerald-400 shrink-0" />
                    <span>Phone: </span>
                    <a
                      href="tel:+918111902730"
                      className="font-semibold text-[#2E7D32] dark:text-emerald-400 hover:underline"
                    >
                      +91 8111902730
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#2E7D32] dark:text-emerald-400 shrink-0" />
                      <span>Truck loading &amp; warehouse pickup</span>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/8KpTnpYyNBrcqy7R8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#2E7D32] dark:text-emerald-400 hover:underline font-semibold"
                    >
                      <span>Google Map</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map Area */}
            <div className="bg-[#F3F7FA] dark:bg-[#0B1E38] rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                  <button
                    onClick={() => setActiveLocationIndex(0)}
                    type="button"
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                      activeLocationIndex === 0
                        ? 'bg-[#0B3C6F] text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                    }`}
                  >
                    Kollam Shop (Decent Jn)
                  </button>
                  <button
                    onClick={() => setActiveLocationIndex(1)}
                    type="button"
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                      activeLocationIndex === 1
                        ? 'bg-[#0B3C6F] text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                    }`}
                  >
                    Warehouse (Karunagappally)
                  </button>
                </div>

                <a
                  href={activeLocation.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-[#0B3C6F] text-white hover:bg-[#1565C0] transition-colors whitespace-nowrap shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#00BCD4]" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Map Iframe with exact pin */}
              <div className="relative w-full h-60 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800">
                <iframe
                  title={`Map of UNITECH ${activeLocation.name}`}
                  src={activeLocation.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1565C0] dark:text-[#00BCD4] shrink-0" />
                  <span className="font-semibold text-[#0B3C6F] dark:text-cyan-300">{activeLocation.businessName}</span>
                </div>
                <a
                  href={activeLocation.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1565C0] dark:text-[#00BCD4] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
