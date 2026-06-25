'use client';

import { Phone, MessageSquare } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#020617]/95 border-t border-white/10 backdrop-blur-xl px-4 py-3 pb-5 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      {/* Call button */}
      <a
        href="tel:+919442101823"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold rounded-xl text-sm transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 text-[#00FFFF]" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20want%20to%20know%20more%20about%20WhatsApp%20Automation%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-sm shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all active:scale-95 animate-pulse"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>WhatsApp Us</span>
      </a>
    </div>
  );
}
