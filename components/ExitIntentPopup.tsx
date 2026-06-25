'use client';

import { useState, useEffect } from 'react';
import { X, Gift, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check session storage so it doesn't annoy users on every page move
    const shownBefore = sessionStorage.getItem('exit_popup_shown');
    if (shownBefore) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves out of the top of the viewport (indicating closing tab/window)
      if (e.clientY < 20 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exit_popup_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-[#0a0f1c]/95 border border-[#00FFFF]/20 rounded-3xl p-8 md:p-10 shadow-[0_0_65px_rgba(0,255,255,0.25)] overflow-hidden"
          >
            {/* Background glowing circle */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#00FFFF]/10 rounded-full blur-[50px] pointer-events-none" />

            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#00FFFF]/15 border border-[#00FFFF]/30 flex items-center justify-center text-[#00FFFF] mb-6">
                <Gift className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono text-[#00FFFF] uppercase tracking-[0.2em] font-semibold mb-2 block">
                Wait! Before you leave...
              </span>
              
              <h3 className="text-3xl font-black text-white leading-tight mb-4">
                Claim Your Free 15-Minute Automation Audit
              </h3>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                We'll analyze your business and show you exactly where you're losing customer leads. Zero technical skills required.
              </p>

              <div className="w-full space-y-3">
                <a
                  href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20saw%20your%20exit%20offer%20and%20want%20to%20claim%20my%20Free%2015-Minute%20Automation%20Audit.%20My%20business%20type%20is%3A%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#00FFFF] hover:bg-[#00e5e5] text-black font-bold rounded-xl text-sm transition-transform active:scale-[0.98] shadow-[0_0_25px_rgba(0,255,255,0.2)]"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Claim Free Audit on WhatsApp</span>
                </a>
                
                <button
                  onClick={closePopup}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-medium rounded-xl text-xs transition-colors"
                >
                  No thanks, I'll continue manually
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
