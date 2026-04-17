'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  from: 'bot' | 'user';
  text: string;
};

type Step = 'greeting' | 'name' | 'business' | 'service' | 'budget' | 'time' | 'confirm';

const SERVICE_OPTIONS = [
  'Website Development',
  'AI Chatbot',
  'WhatsApp Automation',
  'Full Digital Package',
];

const BUDGET_OPTIONS = ['₹5K – ₹25K', '₹25K – ₹50K', '₹50K – ₹1L', '₹1L+'];

const TIME_OPTIONS = ['Morning (9–12)', 'Afternoon (12–4)', 'Evening (4–7)'];

export default function LeadChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>('greeting');
  const [input, setInput] = useState('');
  const [leadData, setLeadData] = useState({ name: '', business: '', service: '', budget: '', time: '' });
  const [showPulse, setShowPulse] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Auto-show popup after page load
  useEffect(() => {
    const showTimer = setTimeout(() => setShowPopup(true), 2000);
    const hideTimer = setTimeout(() => setShowPopup(false), 10000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  // Show greeting when opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hey there! 👋 I'm Rolex. I can help you book a free strategy call in under 60 seconds.");
        setTimeout(() => {
          addBotMessage("What's your name?");
          setStep('name');
        }, 800);
      }, 400);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { from: 'bot', text }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { from: 'user', text }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    processInput(input.trim());
    setInput('');
  };

  const handleOptionClick = (value: string) => {
    processInput(value);
  };

  const processInput = (value: string) => {
    addUserMessage(value);

    setTimeout(() => {
      switch (step) {
        case 'name':
          setLeadData(prev => ({ ...prev, name: value }));
          addBotMessage(`Great to meet you, ${value}! 🚀 What's your business or project about?`);
          setStep('business');
          break;

        case 'business':
          setLeadData(prev => ({ ...prev, business: value }));
          addBotMessage("Awesome! Which service are you most interested in?");
          setStep('service');
          break;

        case 'service':
          setLeadData(prev => ({ ...prev, service: value }));
          addBotMessage("What's your approximate budget for this project?");
          setStep('budget');
          break;

        case 'budget':
          setLeadData(prev => ({ ...prev, budget: value }));
          addBotMessage("Perfect! When would you prefer your free strategy call?");
          setStep('time');
          break;

        case 'time':
          setLeadData(prev => {
            const finalData = { ...prev, time: value };
            // Show confirmation after state updates
            setTimeout(() => {
              addBotMessage(
                `Here's your booking summary:\n\n` +
                `👤 Name: ${finalData.name}\n` +
                `💼 Business: ${finalData.business}\n` +
                `🛠 Service: ${finalData.service}\n` +
                `💰 Budget: ${finalData.budget}\n` +
                `🕐 Preferred Time: ${value}\n\n` +
                `Tap "Book on WhatsApp" below to confirm your free strategy call! 👇`
              );
              setStep('confirm');
            }, 300);
            return finalData;
          });
          break;

        default:
          break;
      }
    }, 500);
  };

  const handleBookOnWhatsApp = () => {
    const text =
      `🚀 New Strategy Call Booking via SaivaTech Chatbot\n\n` +
      `👤 Name: ${leadData.name}\n` +
      `💼 Business: ${leadData.business}\n` +
      `🛠 Service: ${leadData.service}\n` +
      `💰 Budget: ${leadData.budget}\n` +
      `🕐 Preferred Time: ${leadData.time}\n\n` +
      `Please confirm my free strategy call. Thank you!`;

    window.open(`https://wa.me/919442101823?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleReset = () => {
    setMessages([]);
    setStep('greeting');
    setLeadData({ name: '', business: '', service: '', budget: '', time: '' });
    setIsOpen(false);
  };

  // Determine which quick-reply options to show
  const getOptions = (): string[] => {
    switch (step) {
      case 'service': return SERVICE_OPTIONS;
      case 'budget': return BUDGET_OPTIONS;
      case 'time': return TIME_OPTIONS;
      default: return [];
    }
  };

  const options = getOptions();
  const showInput = step === 'name' || step === 'business';

  return (
    <>
      {/* Chat Toggle Button + Popup */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
            {/* Popup bubble */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-white text-slate-900 px-4 py-2.5 rounded-2xl rounded-br-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-w-[200px] cursor-pointer"
                  onClick={() => { setIsOpen(true); setShowPulse(false); setShowPopup(false); }}
                >
                  <p className="text-sm font-semibold">Chat with Rolex 🤖</p>
                  <p className="text-xs text-slate-500 mt-0.5">Book a free strategy call!</p>
                  {/* Close button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowPopup(false); }}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-700 text-white rounded-full flex items-center justify-center text-[10px] hover:bg-slate-600 transition-colors"
                  >
                    ✕
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bot button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => { setIsOpen(true); setShowPulse(false); setShowPopup(false); }}
              className="w-14 h-14 bg-[#00FFFF] text-black rounded-full shadow-[0_4px_25px_rgba(0,255,255,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center relative"
              aria-label="Open chatbot"
            >
              <Bot className="w-6 h-6" />
              {showPulse && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
              )}
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-4rem)] flex flex-col rounded-3xl border border-white/10 bg-[#0a0f1c]/95 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,255,0.1)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0a0f1c]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#00FFFF]/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#00FFFF]" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Rolex</p>
                  <p className="text-[#00FFFF] text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] animate-pulse" />
                    Online now
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.from === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-[#00FFFF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-[#00FFFF]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === 'user'
                        ? 'bg-[#00FFFF] text-black rounded-br-md'
                        : 'bg-white/5 text-slate-200 border border-white/10 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.from === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator when waiting */}
              {messages.length > 0 && messages[messages.length - 1].from === 'user' && step !== 'confirm' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-center"
                >
                  <div className="w-7 h-7 rounded-full bg-[#00FFFF]/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#00FFFF]" />
                  </div>
                  <div className="flex gap-1 px-4 py-3 bg-white/5 rounded-2xl border border-white/10">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Reply Options */}
            {options.length > 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-[#00FFFF]/30 text-[#00FFFF] bg-[#00FFFF]/5 hover:bg-[#00FFFF]/15 transition-colors duration-200"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Book on WhatsApp Button */}
            {step === 'confirm' && (
              <div className="px-4 pb-2 flex flex-col gap-2">
                <button
                  onClick={handleBookOnWhatsApp}
                  className="w-full py-3 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:bg-[#1fb855] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book on WhatsApp
                </button>
                <button
                  onClick={handleReset}
                  className="text-slate-500 text-xs hover:text-white transition-colors py-1"
                >
                  Start over
                </button>
              </div>
            )}

            {/* Text Input */}
            {showInput && (
              <div className="px-4 pb-4 pt-2">
                <form
                  onSubmit={e => { e.preventDefault(); handleSend(); }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={step === 'name' ? 'Type your name...' : 'Describe your project...'}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00FFFF]/50 transition-colors"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 flex items-center justify-center bg-[#00FFFF] text-black rounded-xl hover:bg-[#00e5e5] transition-colors flex-shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
