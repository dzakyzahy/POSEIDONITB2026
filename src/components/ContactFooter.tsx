import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, User, MessageSquare, Send, MapPin, Instagram, Twitter, Globe, CheckCircle, AlertCircle } from 'lucide-react';

const locations = [
  {
    name: 'Kampus ITB Ganesha',
    city: 'Bandung',
    image: 'https://picsum.photos/seed/itb-ganesha/400/300'
  },
  {
    name: 'Kampus ITB Cirebon',
    city: 'Cirebon',
    image: 'https://picsum.photos/seed/itb-cirebon/400/300'
  },
  {
    name: 'Lokasi Pengmas',
    city: 'Dusun Kalijaga, Cirebon',
    image: 'https://picsum.photos/seed/jongor/400/300'
  }
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const ContactLocation = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('Pesan Anda telah terkirim! Terima kasih.');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Gagal mengirim pesan. Silakan coba lagi.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-8">Hubungi Kami</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-60 ml-1">Nama Lengkap</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full glass bg-white/5 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-ocean-aqua/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium opacity-60 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input 
                    name="email"
                    type="email" 
                    required
                    placeholder="email@example.com"
                    className="w-full glass bg-white/5 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-ocean-aqua/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium opacity-60 ml-1">Pesan</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-white/40" />
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    placeholder="Apa yang ingin Anda sampaikan?"
                    className="w-full glass bg-white/5 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-ocean-aqua/50 transition-all resize-none"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="glass-button w-full bg-ocean-aqua/20 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Kirim Pesan
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm font-medium bg-green-400/10 p-4 rounded-xl border border-green-400/20"
                >
                  <CheckCircle className="w-5 h-5" />
                  {message}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm font-medium bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                >
                  <AlertCircle className="w-5 h-5" />
                  {message}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-8">Lokasi Kami</h2>
            <div className="space-y-6">
              {locations.map((loc, idx) => (
                <div key={loc.name} className="glass-card flex items-center gap-6 p-4 group">
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={loc.image} 
                      alt={loc.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{loc.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-white/60 mt-1">
                      <MapPin className="w-4 h-4 text-ocean-aqua" />
                      {loc.city}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 glass-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-2xl tracking-tighter">
                POSEIDON <span className="text-ocean-aqua">2026</span>
              </span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Program pengabdian masyarakat berkelanjutan oleh Himpunan Mahasiswa Oseanografi "TRITON" ITB.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#hero" className="hover:text-ocean-aqua transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-ocean-aqua transition-colors">Tentang Kami</a></li>
              <li><a href="#products" className="hover:text-ocean-aqua transition-colors">Program Kerja</a></li>
              <li><a href="#contact" className="hover:text-ocean-aqua transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 glass rounded-xl hover:bg-ocean-aqua transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass rounded-xl hover:bg-ocean-aqua transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass rounded-xl hover:bg-ocean-aqua transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© 2026 POSEIDON ITB. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
