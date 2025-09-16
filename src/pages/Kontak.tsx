import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User,
  MessageCircle,
  Facebook,
  Instagram,
  Globe
} from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/utils/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Kontak = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "Kontak - SMK Fahd Islamic School";
  }, []);

  const kontakInfo = [
    {
      icon: Phone,
      title: "Nomor Telepon",
      info: "(021) 8765-4321",
      description: "Hubungi kami untuk informasi umum"
    },
    {
      icon: Mail,
      title: "Email Resmi",
      info: "info@smkfahdislamic.sch.id",
      description: "Kirim email untuk pertanyaan detail"
    },
    {
      icon: MapPin,
      title: "Alamat Sekolah",
      info: "Jl. Pendidikan No. 123, Jakarta Selatan",
      description: "Lokasi kampus SMK Fahd Islamic School"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      info: "Senin - Jumat: 07:00 - 16:00",
      description: "Sabtu: 07:00 - 12:00"
    }
  ];

  const adminKontak = [
    {
      nama: "Ahmad Fadhil, S.Pd",
      jabatan: "Kepala Sekolah",
      telepon: "0812-3456-7890",
      email: "kepsek@smkfahdislamic.sch.id",
      foto: "https://picsum.photos/200/200?random=1"
    },
    {
      nama: "Siti Nurhaliza, S.Pd",
      jabatan: "Wakil Kepala Sekolah",
      telepon: "0821-9876-5432",
      email: "wakasek@smkfahdislamic.sch.id",
      foto: "https://picsum.photos/200/200?random=2"
    },
    {
      nama: "Muhammad Rizki, S.Kom",
      jabatan: "Admin TU & IT Support",
      telepon: "0856-1234-5678",
      email: "admin@smkfahdislamic.sch.id",
      foto: "https://picsum.photos/200/200?random=3"
    },
    {
      nama: "Fatimah Zahra, S.E",
      jabatan: "Staff Administrasi",
      telepon: "0813-5555-7777",
      email: "administrasi@smkfahdislamic.sch.id",
      foto: "https://picsum.photos/200/200?random=4"
    }
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://facebook.com/smkfahdislamic",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com/smkfahdislamic",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      name: "Website",
      icon: Globe,
      link: "https://smkfahdislamic.sch.id",
      color: "text-amber-600 hover:text-amber-700"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url("bg-fahd-2.jpg")', // GANTI DENGAN GAMBAR ASLI SEKOLAHMU
          }}
        >
          {/* Overlay gelap agar teks mudah dibaca */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Decorative elements (opsional, biarkan jika ingin efek ringan) */}
       
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Hubungi Kami
          </h1>

          {/* Deskripsi */}
            <div className="h-1 w-24 bg-white mx-auto mb-6 rounded-full" />
            <p className="text-lg text-white/90  max-w-2xl mx-auto leading-relaxed">
              Informasi kontak dan lokasi SMK Fahd Islamic School
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Informasi Kontak Umum */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                Informasi Kontak
              </h2>
              <p className="text-amber-700/80 max-w-2xl mx-auto">
                Hubungi kami melalui berbagai channel komunikasi yang tersedia
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kontakInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200/50 hover:shadow-lg transition-all duration-300 text-center group">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-200 transition-colors">
                        <item.icon className="h-8 w-8 text-amber-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">{item.title}</h3>
                    <p className="text-amber-700 font-semibold mb-2">{item.info}</p>
                    <p className="text-amber-600/80 text-sm">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Kontak Admin */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                Kontak Admin
              </h2>
              <p className="text-amber-700/80 max-w-2xl mx-auto">
                Tim admin yang siap membantu kebutuhan informasi Anda
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adminKontak.map((admin, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-amber-200/50 hover:shadow-lg transition-all duration-300 text-center group">
                    <div className="mb-4">
                      <img 
                        src={admin.foto}
                        alt={admin.nama}
                        className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-amber-200 group-hover:border-amber-300 transition-colors"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-1">{admin.nama}</h3>
                    <p className="text-amber-600 text-sm font-medium mb-3">{admin.jabatan}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center text-sm text-amber-700">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{admin.telepon}</span>
                      </div>
                      <div className="flex items-center justify-center text-sm text-amber-700">
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="truncate">{admin.email}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Button 
                        size="sm" 
                        className="bg-amber-600 hover:bg-amber-700 text-white w-full"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Hubungi
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lokasi dan Maps */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                Lokasi Sekolah
              </h2>
              <p className="text-amber-700/80 max-w-2xl mx-auto">
                Temukan lokasi SMK Fahd Islamic School dengan mudah
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Alamat Detail */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-amber-200/50 h-full">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">Alamat Lengkap</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Alamat:</h4>
                      <p className="text-amber-700">
                        Jl. Pendidikan No. 123<br />
                        Kelurahan Ragunan<br />
                        Kecamatan Pasar Minggu<br />
                        Jakarta Selatan 12550
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Transportasi:</h4>
                      <ul className="text-amber-700 space-y-1 text-sm">
                        <li>• TransJakarta: Koridor 6 (Ragunan)</li>
                        <li>• Bus Kota: Jurusan Blok M - Ragunan</li>
                        <li>• Angkot: M20, B21</li>
                        <li>• KRL: Stasiun Pasar Minggu (3 km)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Landmark:</h4>
                      <ul className="text-amber-700 space-y-1 text-sm">
                        <li>• Kebun Binatang Ragunan (500m)</li>
                        <li>• Pasar Minggu Plaza (2 km)</li>
                        <li>• RS Fatmawati (3 km)</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Google Maps Embed */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="p-4 bg-white/80 backdrop-blur-sm border-amber-200/50 h-full">
                  <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.764244416889!2d106.82000281532313!3d-6.291976062799894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f237cbe80cfb%3A0x6c2d93ab1cb79e9d!2sRagunan%2C%20Ps.%20Minggu%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1647235829456!5m2!1sen!2sid"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi SMK Fahd Islamic School"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => window.open('https://goo.gl/maps/example', '_blank')}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Buka di Google Maps
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Social Media */}
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-amber-800 mb-6">
                Ikuti Media Sosial Kami
              </h3>
              <div className="flex justify-center space-x-6">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition-all duration-300 transform hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
                      <social.icon className="h-6 w-6" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Kontak;
