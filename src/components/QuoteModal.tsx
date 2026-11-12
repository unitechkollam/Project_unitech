import React, { useState, useEffect } from 'react';
import { X, Send, AlertCircle, Droplets, CheckCircle2 } from 'lucide-react';
import { SUPPLY_ITEMS } from '../data/siteContent';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialCategory }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(initialCategory || SUPPLY_ITEMS[0].title);
  const [quantityNotes, setQuantityNotes] = useState('');
  const [role, setRole] = useState<'Dealer' | 'Technician' | 'RO plant installer' | 'Industrial buyer' | 'Shop owner'>('Dealer');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (!phone.trim() || cleanPhone.length < 10) {
      newErrors.phone = 'Valid 10-digit phone required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = `*UNITECH Quote Request*\n\n*Name:* ${name.trim()}\n*Phone:* ${phone.trim()}\n*Role:* ${role}\n*Category:* ${category}\n*Details / Quantities:* ${quantityNotes.trim() || 'Please share standard wholesale price list'}\n\n_Sent via UNITECH website_`;

    const whatsappUrl = `https://wa.me/918138048474?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="bg-white dark:bg-[#0B1E38] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#1565C0] dark:text-[#00BCD4] uppercase tracking-wider mb-2">
          <Droplets className="w-4 h-4 text-[#00BCD4]" />
          <span>Direct Wholesale Pricing</span>
        </div>
        <h3 id="quote-modal-title" className="text-xl font-bold text-[#0B3C6F] dark:text-white font-heading">
          Request Wholesale Quote
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5">
          Get competitive trade rates and delivery lead times for Kollam and Kerala directly from our warehouse.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
              Your Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="e.g. Anandhu (Water Care)"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#1565C0]"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              placeholder="+91 9876543210"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#1565C0]"
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
              Equipment Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#1565C0]"
            >
              {SUPPLY_ITEMS.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title} ({item.subtitle})
                </option>
              ))}
              <option value="General Wholesale Order">General Mixed Wholesale Order</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
              I am a:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {(['Dealer', 'Technician', 'RO plant installer', 'Shop owner', 'Industrial buyer'] as const).map(
                (r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-2 px-2.5 rounded-md border text-center font-medium transition-colors cursor-pointer ${
                      role === r
                        ? 'bg-[#0B3C6F] text-white border-[#0B3C6F] dark:bg-[#1565C0]'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {r}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-1">
              Quantity / Requirements (Optional)
            </label>
            <textarea
              rows={2}
              value={quantityNotes}
              onChange={(e) => setQuantityNotes(e.target.value)}
              placeholder="e.g. Need 10 units FRP 1054 and 2 bags Katalox Light"
              className="w-full px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#1565C0]"
            />
          </div>

          {/* Orange Request Quote Button with navy text per brand rules */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#FF8F00] text-[#0B3C6F] hover:bg-[#FFA000] active:bg-[#F57C00] font-semibold text-sm py-3 px-4 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF8F00]"
            >
              <Send className="w-4 h-4 text-[#0B3C6F]" />
              <span>Request Quote via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
