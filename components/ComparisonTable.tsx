'use client';

import { X, Check } from 'lucide-react';

type ComparisonRow = {
  feature: string;
  manual: string;
  automated: string;
  isNegative: boolean; // Manual is negative
};

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Response Speed",
    manual: "Takes 2–3 hours (or next day if after-hours)",
    automated: "Under 30 seconds, 24/7/365",
    isNegative: true
  },
  {
    feature: "After-Hours Support",
    manual: "Inquiries are ignored or lost overnight",
    automated: "Instant automated greeting & lead qualification",
    isNegative: true
  },
  {
    feature: "Staffing Overhead",
    manual: "Requires full-time staff to answer chat queries (₹15k+/mo)",
    automated: "Zero extra staff needed. AI handles repetitive chats",
    isNegative: true
  },
  {
    feature: "Follow-Up Retention",
    manual: "Forgot to reply, no customer database tracked",
    automated: "Automated broadcast and CRM retargeting list built",
    isNegative: true
  },
  {
    feature: "Inquiry Capture Rate",
    manual: "Around 50–60% of web visitors drop off due to friction",
    automated: "95%+ capture rate using floating WhatsApp widgets",
    isNegative: true
  }
];

export default function ComparisonTable() {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          MANUAL VS. AUTOMATED
        </h2>
        <p className="text-slate-400 mt-3 text-sm md:text-base">
          See the direct operational impact of automating your business communication.
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 backdrop-blur-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="p-6 text-sm font-bold uppercase tracking-wider text-slate-400">Feature</th>
              <th className="p-6 text-sm font-bold uppercase tracking-wider text-red-400">Manual Process</th>
              <th className="p-6 text-sm font-bold uppercase tracking-wider text-[#00FFFF]">SaivaTech Automation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-semibold text-white">{row.feature}</td>
                <td className="p-6 text-slate-400 text-sm flex items-start gap-2.5">
                  <X className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                  <span>{row.manual}</span>
                </td>
                <td className="p-6 text-slate-300 text-sm bg-[#00FFFF]/5">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4.5 h-4.5 text-[#00FFFF] shrink-0 mt-0.5" />
                    <span>{row.automated}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked View */}
      <div className="md:hidden space-y-6">
        {COMPARISON_DATA.map((row, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-sm space-y-4">
            <h4 className="text-[#00FFFF] font-bold text-lg border-b border-white/5 pb-2">{row.feature}</h4>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block">Manual Process</span>
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{row.manual}</span>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/5">
                <span className="text-[10px] font-mono text-[#00FFFF] uppercase tracking-widest block">SaivaTech Automation</span>
                <div className="flex items-start gap-2 text-sm text-white">
                  <Check className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                  <span>{row.automated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
