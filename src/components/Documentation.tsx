import React from 'react';
import { motion } from 'motion/react';
import { Camera, ExternalLink } from 'lucide-react';

const images = [
  {
    url: 'https://picsum.photos/seed/ocean1/800/600',
    title: 'Survei Lapangan',
    category: 'Research'
  },
  {
    url: 'https://picsum.photos/seed/beach/600/800',
    title: 'Beach Clean Up',
    category: 'Action'
  },
  {
    url: 'https://picsum.photos/seed/community/800/800',
    title: 'Edukasi Masyarakat',
    category: 'Education'
  },
  {
    url: 'https://picsum.photos/seed/ocean2/600/600',
    title: 'Observasi Perairan',
    category: 'Research'
  },
  {
    url: 'https://picsum.photos/seed/kids/800/500',
    title: 'Sekolah Pesisir',
    category: 'Education'
  },
  {
    url: 'https://picsum.photos/seed/trash/500/800',
    title: 'Pengelolaan Sampah',
    category: 'Action'
  }
];

export const Documentation = () => {
  return (
    <section id="documentation" className="section-padding bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 glass rounded-lg text-ocean-aqua">
                <Camera className="w-6 h-6" />
              </div>
              <h2 className="heading-lg">Dokumentasi</h2>
            </div>
            <p className="text-white/60">Momen-momen berharga dalam perjalanan POSEIDON ITB 2026.</p>
          </div>
          <button className="hidden sm:flex glass-button text-sm">
            Lihat Galeri Lengkap
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-2xl break-inside-avoid"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-ocean-aqua mb-1">{img.category}</span>
                <h4 className="text-lg font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 sm:hidden">
          <button className="glass-button w-full">
            Lihat Galeri Lengkap
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
