import React from 'react';
import { motion } from 'motion/react';
import { Info, MapPin, Target, ShieldCheck } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 glass rounded-lg text-ocean-aqua">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="heading-lg">Tentang Poseidon</h2>
            </div>
            
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                <strong className="text-white">Identitas Utama:</strong> Persembahan Oseanografi ITB untuk Indonesia (POSEIDON 2026) merupakan program pengabdian masyarakat dari HMO "TRITON" ITB yang menjadi wadah mahasiswa oseanografi dalam menjalankan Tri Dharma Perguruan Tinggi. POSEIDON ITB menjadi ruang bagi mahasiswa untuk mengaktualisasikan ilmu yang dipelajari, tidak hanya sebatas memahami oseanografi di ruang kelas, tetapi juga menghidupkannya dalam realitas pesisir dan kelautan Indonesia.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="glass-card">
                  <div className="flex items-center gap-2 mb-3 text-ocean-aqua">
                    <MapPin className="w-5 h-5" />
                    <h3 className="font-bold">Lokasi</h3>
                  </div>
                  <p className="text-sm">Dusun Kalijaga Blok Jongor, Kabupaten Cirebon, Jawa Barat. Desa binaan hingga tahun 2030.</p>
                </div>
                
                <div className="glass-card">
                  <div className="flex items-center gap-2 mb-3 text-ocean-aqua">
                    <Target className="w-5 h-5" />
                    <h3 className="font-bold">Fokus</h3>
                  </div>
                  <p className="text-sm">Pengabdian pesisir berbasis ilmiah dan berkelanjutan melalui kajian oseanografi dan aksi lapangan.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/ocean-research/800/800"
                alt="Scientific Research"
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-4 glass rounded-xl">
                  <div className="flex items-center gap-2 mb-2 text-ocean-aqua">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="font-bold">Dukungan SDGs</span>
                  </div>
                  <p className="text-xs text-white/70">Mendukung SDG 3 (Kesehatan), SDG 6 (Air Bersih), SDG 8 (Pekerjaan Layak), dan SDG 14 (Ekosistem Laut).</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 p-6 glass rounded-2xl hidden md:block">
              <div className="text-3xl font-bold text-ocean-aqua">2030</div>
              <div className="text-xs uppercase tracking-widest opacity-60">Target Desa Binaan</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 p-8 glass rounded-3xl"
        >
          <h3 className="text-xl font-bold mb-4 text-ocean-aqua">Penyelesaian Masalah</h3>
          <p className="text-white/80 leading-relaxed">
            Wilayah pesisir dihadapkan dengan pencemaran lingkungan, pengelolaan sampah yang belum optimal, tekanan pariwisata, serta kerentanan perubahan iklim. Kondisi tersebut menuntut pendekatan yang tidak hanya teknis, tetapi berkelanjutan dan inklusif.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
