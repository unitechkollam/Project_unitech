import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs py-2 px-3.5 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="flex flex-col">
            <span className="font-bold text-[#0B3C6F] dark:text-[#00BCD4]">Need Wholesale Prices?</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">Chat with UNITECH on WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 ml-1"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/918138048474?text=Hello%20UNITECH,%20I%20am%20interested%20in%20wholesale%20water%20treatment%20equipments"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with UNITECH Wholesale on WhatsApp (+91 8138048474)"
        className="w-14 h-14 rounded-full bg-[#2E7D32] hover:bg-[#256628] active:scale-95 text-white flex items-center justify-center shadow-2xl hover:shadow-[#2E7D32]/40 transition-all duration-200 relative focus-visible:outline-2 focus-visible:outline-white"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
