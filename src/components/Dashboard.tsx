import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Database, FileText, TrendingUp, Droplets } from 'lucide-react';

const surveyData = [
  { name: 'Jan', value: 400, quality: 85 },
  { name: 'Feb', value: 300, quality: 82 },
  { name: 'Mar', value: 600, quality: 88 },
  { name: 'Apr', value: 800, quality: 92 },
  { name: 'May', value: 500, quality: 90 },
  { name: 'Jun', value: 900, quality: 95 },
];

const reports = [
  {
    title: 'Laporan Kualitas Air Pesisir',
    date: '12 Maret 2026',
    desc: 'Analisis parameter fisik dan kimia perairan di sekitar Dusun Kalijaga.',
    image: 'https://picsum.photos/seed/water-test/400/250'
  },
  {
    title: 'Survei Batimetri Jongor',
    date: '05 April 2026',
    desc: 'Pemetaan kedalaman laut untuk mendukung restorasi wisata bahari.',
    image: 'https://picsum.photos/seed/bathymetry/400/250'
  }
];

export const Dashboard = () => {
  return (
    <section id="data" className="section-padding bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 glass rounded-lg text-ocean-aqua">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="heading-lg">Hasil Data & Survei</h2>
            </div>
            <p className="text-white/60 max-w-xl">
              Visualisasi data real-time dari hasil observasi lapangan dan analisis laboratorium tim POSEIDON.
            </p>
          </div>
          <button className="glass-button text-sm">
            <FileText className="w-4 h-4" />
            Unduh Laporan Lengkap (PDF)
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Main Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card min-h-[400px]"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-ocean-aqua" />
                Tren Kualitas Perairan
              </h3>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-ocean-aqua" />
                <span className="text-xs opacity-60">Indeks Kualitas</span>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={surveyData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#48cae4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#48cae4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.5)" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 18, 51, 0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(8px)'
                    }}
                  />
                  <Area type="monotone" dataKey="quality" stroke="#48cae4" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card flex items-center gap-4"
            >
              <div className="p-4 bg-ocean-aqua/20 rounded-2xl">
                <Droplets className="w-8 h-8 text-ocean-aqua" />
              </div>
              <div>
                <div className="text-sm opacity-60">Salinitas Rata-rata</div>
                <div className="text-2xl font-bold">32.5 <span className="text-sm font-normal opacity-60">PSU</span></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card flex items-center gap-4"
            >
              <div className="p-4 bg-ocean-cerulean/20 rounded-2xl">
                <TrendingUp className="w-8 h-8 text-ocean-cerulean" />
              </div>
              <div>
                <div className="text-sm opacity-60">Kecerahan Perairan</div>
                <div className="text-2xl font-bold">4.2 <span className="text-sm font-normal opacity-60">Meter</span></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card"
            >
              <h4 className="text-sm font-bold mb-4 opacity-80">Status Lingkungan</h4>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-ocean-aqua h-full w-[75%]" />
              </div>
              <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest opacity-60">
                <span>Buruk</span>
                <span>Sangat Baik</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reports.map((report, idx) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group flex flex-col sm:flex-row gap-6 overflow-hidden"
            >
              <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden rounded-xl">
                <img 
                  src={report.image} 
                  alt={report.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="sm:w-2/3 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-ocean-aqua mb-2">{report.date}</span>
                <h4 className="text-lg font-bold mb-2 group-hover:text-ocean-aqua transition-colors">{report.title}</h4>
                <p className="text-sm text-white/60 mb-4">{report.desc}</p>
                <button className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
