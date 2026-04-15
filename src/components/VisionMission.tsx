import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Heart } from 'lucide-react';

const goals = [
  {
    title: 'Keilmuan Oseanografi',
    desc: 'Mengenalkan keilmuan oseanografi kepada masyarakat pesisir secara inklusif.',
    icon: Lightbulb
  },
  {
    title: 'Solusi Berbasis Riset',
    desc: 'Menjadikan keilmuan oseanografi sebagai dasar perumusan solusi permasalahan pesisir.',
    icon: Target
  },
  {
    title: 'Pemberdayaan Masyarakat',
    desc: 'Menguatkan kapasitas dan kepedulian masyarakat pesisir terhadap lingkungannya.',
    icon: Heart
  }
];

export const VisionMission = () => {
  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ocean-cerulean/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4">Visi & Tujuan</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Misi utama kami adalah menjembatani keilmuan akademik dengan realitas sosial untuk menciptakan pesisir Indonesia yang lebih baik.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, idx) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-ocean-aqua mb-6">
                <goal.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {goal.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 glass rounded-[40px] text-center relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 glass rounded-2xl">
            <span className="text-ocean-aqua font-bold tracking-widest uppercase text-xs">Commitment</span>
          </div>
          <p className="text-2xl md:text-3xl font-display font-medium italic text-white/90 leading-snug">
            "Keberlanjutan pesisir bukan hanya tentang menjaga alam, tapi tentang menghidupkan harapan bagi mereka yang bergantung padanya."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
