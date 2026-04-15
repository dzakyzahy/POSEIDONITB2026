import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, BarChart3, Droplets } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const title = "POSEIDON ITB 2026";
  const subtitle = "\"Menjaga Nadi Samudra, Menumbuhkan Pesisir Berkelanjutan\"";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-ocean-aqua/20 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-cerulean/20 rounded-full blur-[120px] pointer-events-none" 
      />
      
      {/* Floating Bubbles Parallax */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{ 
            y: useTransform(scrollY, [0, 1000], [0, -200 * (i + 1)]),
            opacity: useTransform(scrollY, [0, 500], [0.3, 0])
          }}
          className="absolute pointer-events-none"
          initial={{ 
            x: Math.random() * 100 - 50 + "%", 
            top: Math.random() * 100 + "%" 
          }}
        >
          <Droplets 
            className="text-ocean-aqua/20" 
            size={20 + Math.random() * 40} 
          />
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
        >
          <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium mb-6 text-ocean-aqua">
            Persembahan Oseanografi ITB untuk Indonesia
          </motion.span>
          
          <h1 className="heading-xl mb-6 text-balance">
            {title.split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                variants={itemVariants}
                className="inline-block mr-[0.2em]"
              >
                {word === "ITB" || word === "2026" ? (
                  <span className="text-ocean-aqua">{word}</span>
                ) : word}
              </motion.span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed text-balance font-light italic">
            {subtitle.split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                variants={itemVariants}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#about" className="glass-button w-full sm:w-auto bg-white/10">
              Pelajari Lebih Lanjut
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#data" className="glass-button w-full sm:w-auto bg-ocean-cerulean/20">
              Lihat Laporan
              <BarChart3 className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};
