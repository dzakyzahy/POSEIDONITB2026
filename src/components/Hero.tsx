import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3 } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ocean-aqua/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-cerulean/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium mb-6 text-ocean-aqua">
            Persembahan Oseanografi ITB untuk Indonesia
          </span>
          <h1 className="heading-xl mb-6 text-balance">
            POSEIDON <span className="text-ocean-aqua">ITB 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            "Menjaga Nadi Samudra, Menumbuhkan Pesisir Berkelanjutan"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#about" className="glass-button w-full sm:w-auto bg-white/10">
              Pelajari Lebih Lanjut
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#data" className="glass-button w-full sm:w-auto bg-ocean-cerulean/20">
              Lihat Laporan
              <BarChart3 className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};
