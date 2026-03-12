'use client';

import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <button
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('open-contact'));
        }
      }}
      className="bg-accent text-[#04080D] px-10 py-6 text-lg font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-4 group"
    >
      Contact Us Today
      <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" strokeWidth={3} />
    </button>
  );
}
