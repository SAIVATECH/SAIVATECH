'use client';

import { useState } from 'react';
import { HelpCircle, Calculator, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [inquiries, setInquiries] = useState(20);
  const [saleValue, setSaleValue] = useState(2000);
  const [closeRate, setCloseRate] = useState(10);

  // Calculations
  const monthlyInquiries = inquiries * 30;
  
  // Current revenue based on manual process (where roughly 45% of inquiries are abandoned due to slow response times)
  const currentSales = Math.round(monthlyInquiries * (closeRate / 100));
  const currentRevenue = currentSales * saleValue;

  // Automated process: replies in 30s + automatic follow-ups yields a ~40% relative lift in close rates
  const automatedCloseRate = Math.min(closeRate * 1.4, 100);
  const automatedSales = Math.round(monthlyInquiries * (automatedCloseRate / 100));
  const automatedRevenue = automatedSales * saleValue;

  const monthlyLift = automatedRevenue - currentRevenue;
  const annualLift = monthlyLift * 12;

  return (
    <div className="w-full glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/10">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00FFFF]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF]">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">WhatsApp Automation ROI Calculator</h3>
          <p className="text-slate-400 text-sm">See how much revenue you are missing with manual delayed replies.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Controls */}
        <div className="space-y-8">
          {/* Slider 1: Daily Inquiries */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-medium text-sm flex items-center gap-1.5">
                Daily Customer Inquiries
                <span className="group relative cursor-help text-slate-500 hover:text-slate-300">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-light">
                    How many people WhatsApp or call you for business per day.
                  </span>
                </span>
              </label>
              <span className="text-[#00FFFF] font-mono font-bold bg-[#00FFFF]/10 px-3 py-1 rounded-md text-sm">
                {inquiries} / day
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={inquiries}
              onChange={(e) => setInquiries(parseInt(e.target.value))}
              className="w-full accent-[#00FFFF] h-2 bg-slate-800 rounded-lg cursor-pointer appearance-none"
            />
            <div className="flex justify-between text-xs text-slate-600 font-mono">
              <span>5</span>
              <span>100</span>
              <span>200</span>
            </div>
          </div>

          {/* Slider 2: Average Sale Value */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-medium text-sm flex items-center gap-1.5">
                Average Sale Value (Ticket Size)
                <span className="group relative cursor-help text-slate-500 hover:text-slate-300">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-light">
                    Average amount a client pays you for a service or purchase.
                  </span>
                </span>
              </label>
              <span className="text-[#00FFFF] font-mono font-bold bg-[#00FFFF]/10 px-3 py-1 rounded-md text-sm">
                ₹{saleValue.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={saleValue}
              onChange={(e) => setSaleValue(parseInt(e.target.value))}
              className="w-full accent-[#00FFFF] h-2 bg-slate-800 rounded-lg cursor-pointer appearance-none"
            />
            <div className="flex justify-between text-xs text-slate-600 font-mono">
              <span>₹500</span>
              <span>₹25,000</span>
              <span>₹50,000</span>
            </div>
          </div>

          {/* Slider 3: Current Close Rate */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-medium text-sm flex items-center gap-1.5">
                Current Inquiry Close Rate
                <span className="group relative cursor-help text-slate-500 hover:text-slate-300">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 font-light">
                    Percentage of daily inquiries that successfully buy from you.
                  </span>
                </span>
              </label>
              <span className="text-[#00FFFF] font-mono font-bold bg-[#00FFFF]/10 px-3 py-1 rounded-md text-sm">
                {closeRate}%
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={closeRate}
              onChange={(e) => setCloseRate(parseInt(e.target.value))}
              className="w-full accent-[#00FFFF] h-2 bg-slate-800 rounded-lg cursor-pointer appearance-none"
            />
            <div className="flex justify-between text-xs text-slate-600 font-mono">
              <span>1%</span>
              <span>25%</span>
              <span>50%</span>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
                Estimated Monthly Revenue Boost
              </span>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00FFFF]">
                +₹{monthlyLift.toLocaleString('en-IN')}
              </div>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                By capturing missed inquiries with an automated 30-second response on WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  Annual Revenue Lift
                </span>
                <span className="text-lg md:text-xl font-bold text-white">
                  +₹{annualLift.toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  Extra Bookings / Mo
                </span>
                <span className="text-lg md:text-xl font-bold text-emerald-400">
                  +{automatedSales - currentSales} clients
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-3 mt-4">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-300">
                Speed-to-lead automation increases close rates by up to <strong>40%</strong>.
              </span>
            </div>
          </div>

          <div className="mt-8 relative z-10">
            <a
              href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20just%20calculated%20my%20ROI.%20I%20have%20around%20inquiries%20per%20day.%20I%20want%20to%20claim%20my%20free%20WhatsApp%20automation%20audit."
              className="w-full flex items-center justify-center py-4 bg-[#00FFFF] text-black font-bold rounded-xl text-sm transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,255,255,0.15)]"
            >
              Claim Your Free Audit & Setup Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
