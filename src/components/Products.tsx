import React from 'react';
import { motion } from 'motion/react';
import { 
  Palmtree, 
  Trash2, 
  GraduationCap, 
  Stethoscope, 
  Users, 
  Waves, 
  Globe, 
  Recycle, 
  ClipboardCheck 
} from 'lucide-react';

const products = [
  {
    id: 'MANPES',
    name: 'MANPES',
    full: 'Restorasi Wisata',
    desc: 'Pengembangan dan pemulihan kawasan wisata pesisir berbasis keberlanjutan.',
    icon: Palmtree
  },
  {
    id: 'KOMPOS',
    name: 'KOMPOS',
    full: 'Pembuatan Tong Sampah & TPS',
    desc: 'Penyediaan infrastruktur pengelolaan sampah yang memadai bagi masyarakat.',
    icon: Trash2
  },
  {
    id: 'KULAP',
    name: 'KULAP',
    full: 'Sekolah Pesisir',
    desc: 'Program edukasi kelautan dan oseanografi bagi generasi muda di pesisir.',
    icon: GraduationCap
  },
  {
    id: 'SELAM',
    name: 'SELAM',
    full: 'Medical Check Up',
    desc: 'Pemeriksaan kesehatan gratis dan sosialisasi pola hidup sehat bagi warga.',
    icon: Stethoscope
  },
  {
    id: 'MITBEN',
    name: 'MITBEN',
    full: 'Sosialisasi Lingkungan',
    desc: 'Peningkatan kesadaran masyarakat akan pentingnya menjaga ekosistem laut.',
    icon: Users
  },
  {
    id: 'ARUS',
    name: 'ARUS',
    full: 'Beach Clean Up',
    desc: 'Aksi nyata pembersihan sampah di sepanjang garis pantai Dusun Kalijaga.',
    icon: Waves
  },
  {
    id: 'ETER',
    name: 'ETER',
    full: 'Website & Dokumentasi',
    desc: 'Publikasi digital dan pengarsipan seluruh rangkaian kegiatan POSEIDON.',
    icon: Globe
  },
  {
    id: 'TRANSED',
    name: 'TRANSED',
    full: 'Inovasi Pengelolaan Sampah',
    desc: 'Penerapan teknologi tepat guna untuk pengolahan limbah pesisir.',
    icon: Recycle
  },
  {
    id: 'PEMOD',
    name: 'PEMOD',
    full: 'Pelaporan Keberlanjutan',
    desc: 'Penyusunan laporan komprehensif untuk evaluasi dampak jangka panjang.',
    icon: ClipboardCheck
  }
];

export const Products = () => {
  return (
    <section id="products" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4">Produk Poseidon</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Rangkaian program kerja strategis yang dirancang untuk memberikan dampak nyata dan berkelanjutan bagi masyarakat pesisir.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card group"
            >
              <div className="mb-6 inline-flex p-4 glass rounded-2xl text-ocean-aqua group-hover:bg-ocean-aqua group-hover:text-white transition-all duration-500">
                <product.icon className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold font-display">{product.name}</h3>
                <span className="text-[10px] px-2 py-0.5 glass rounded-full opacity-60">PROKER</span>
              </div>
              <h4 className="text-sm font-medium text-ocean-aqua mb-4 uppercase tracking-wider">{product.full}</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
