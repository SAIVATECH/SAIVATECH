import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-24 right-6 z-50 hidden md:block">
      <div className="relative group">
        <a
          href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20want%20to%20know%20more%20about%20WhatsApp%20Automation%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-slate-900 text-sm font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg select-none pointer-events-none">
          WhatsApp Us 👋
        </span>
      </div>
    </div>
  );
}
