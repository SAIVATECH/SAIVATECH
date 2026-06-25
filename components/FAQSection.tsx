'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    question: "Is WhatsApp Automation suitable for small local shops and businesses?",
    answer: "Absolutely. We specialize in helping traditional retail stores, coaching institutes, gyms, transport companies, and clinics across Tamil Nadu. If you receive customer queries via phone call or WhatsApp, automation will save you time and double your leads."
  },
  {
    question: "Do I need coding or technical knowledge to manage this?",
    answer: "No technical skills are needed from your side. We handle the entire design, setup, hosting, and API approvals. You and your staff will simply receive pre-qualified, ready-to-buy inquiries directly on your WhatsApp or phone, just like a normal message."
  },
  {
    question: "How much does WhatsApp Automation cost?",
    answer: "We have transparent starter packages designed for Tamil Nadu SMBs starting from ₹4,999/month. Our goal is to anchor our cost to be significantly cheaper than hiring a single receptionist or sales assistant, while working 24/7 without taking leave."
  },
  {
    question: "Will my WhatsApp number get blocked?",
    answer: "No. We do not use unofficial spambots or web scrapers. We integrate directly with the official Meta (Facebook) WhatsApp Business Cloud API. This is 100% compliant with WhatsApp's policies and ensures your number remains completely safe."
  },
  {
    question: "How long does it take to go live?",
    answer: "Most basic setups (websites + simple WhatsApp funnels) take 7 to 14 days to go live. More complex custom AI chatbots or CRM integrations take between 2 to 3 weeks."
  },
  {
    question: "What if I am not satisfied with the results? Do you have a guarantee?",
    answer: "Yes, we offer a 90-day performance guarantee. If we don't deliver the promised automation systems or if you see zero improvement in your inquiry handling, we will refund your monthly subscription. We stand behind our work."
  },
  {
    question: "Do you provide local support in Tamil Nadu?",
    answer: "Yes! We are based in Kovilpatti and serve businesses across Tirunelveli, Madurai, Tuticorin, Chennai, and Coimbatore. We provide support via direct phone calls, WhatsApp, and remote desk assistance so you are never left hanging."
  },
  {
    question: "How do I get started?",
    answer: "The easiest way is to book a free 15-minute automation audit. We will hop on a quick call, look at your current client communication process, and show you exactly where you're losing leads and how automation can fix it, completely free of charge."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-12 text-center">
        <HelpCircle className="w-8 h-8 text-[#00FFFF]" />
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <div className="space-y-4">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/10 ${
                isOpen ? 'border-[#00FFFF]/30 bg-slate-900/30' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-semibold text-base md:text-lg focus:outline-none transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#00FFFF]' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-1 text-slate-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
