"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, CheckCircle2, Crown, Flame } from 'lucide-react';

export default function LegendaryCodePage() {
  const [copied, setCopied] = useState(false);
  const REDEEM_CODE = "RAGNAR-FF10-FREE";

  const handleCopy = () => {
    navigator.clipboard.writeText(REDEEM_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500); // إخفاء النجاح بعد 2.5 ثانية
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative font-mono overflow-hidden">
      
      {/* Background Overlay (For Dark Vibe) */}
      <div className="absolute inset-0 bg-legend-dark opacity-95"></div>
      
      {/* Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl relative z-10 p-1 rounded-3xl group"
      >
        {/* Border Gradient (Legendary Red/Blue) */}
        <div className="absolute inset-0 bg-gradient-to-r from-legend-blue via-legend-cyan/30 to-legend-red rounded-3xl blur-sm group-hover:blur-md transition-all"></div>
        
        {/* Inner Card */}
        <div className="bg-black/95 p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
          
          {/* Top Icons */}
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
            <motion.div animate={{ rotate: [0, 360, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
              <Crown className="text-legend-red" size={24} />
            </motion.div>
            <h1 className="font-legend text-2xl font-black text-center text-white italic tracking-wider">LEGENDARY REDEEM</h1>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Flame className="text-legend-blue" size={24} />
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {!copied ? (
              // -- Interface 1: Before Copy --
              <motion.div key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} className="text-center space-y-8">
                <div>
                  <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">// Redemptio_Protocol_Activated</h2>
                  <p className="font-legend text-3xl md:text-4xl text-white font-black">YOUR CODE</p>
                </div>
                
                {/* Code Display (Cyber-Red/Blue text) */}
                <motion.div 
                  className="bg-[#05050A] p-6 rounded-2xl border border-white/5 relative group cursor-pointer"
                  onClick={handleCopy}
                  whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <p className="text-2xl md:text-3xl font-black tracking-[0.15em] bg-gradient-to-r from-legend-blue to-legend-red bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                    {REDEEM_CODE}
                  </p>
                  <span className="absolute -top-3 left-4 bg-legend-red/10 px-3 py-1 text-[10px] text-legend-red rounded-full border border-legend-red/20 font-bold uppercase">FREE ACCESS</span>
                </motion.div>
                
                {/* Copy Button */}
                <button 
                  onClick={handleCopy}
                  className="w-full bg-white text-black font-black py-5 rounded-xl transition-all uppercase flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <Copy size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  COPY CODE
                  
                  {/* Hover Accent (Red/Blue gradient) */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-legend-blue to-legend-red"></div>
                </button>
              </motion.div>
            ) : (
              // -- Interface 2: After Copy (Success) --
              <motion.div key="copied" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center space-y-6 py-10">
                <motion.div animate={{ scale: [0.8, 1.1, 1] }} transition={{ duration: 0.5 }}>
                  <CheckCircle2 size={80} className="text-legend-blue mx-auto" />
                </motion.div>
                
                <h2 className="font-legend text-4xl text-white font-black">CODE COPIED!</h2>
                
                <p className="text-gray-400 text-sm italic">
                  Redemption confirmed. Access granted.<br/>
                  System is resetting...
                </p>
                
                {/* Loader bar */}
                <div className="w-1/2 mx-auto h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div animate={{ scaleX: [0, 1] }} transition={{ duration: 2.5, ease: "linear" }} className="h-full bg-gradient-to-r from-legend-blue to-legend-red origin-left"></motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      {/* Footer Text */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-gray-700 font-bold uppercase tracking-widest z-10">
        Ragnar OS // Secure redeem protocol // FF10
      </div>
    </div>
  );
}
