import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/utils/useScrollAnimation';

const GallerySekolah = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useScrollAnimation();

  useEffect(() => {
    document.title = "Gallery Sekolah - SMK Fahd Islamic School";
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Kegiatan Belajar Mengajar",
      date: "Maret 2024",
      description: "Dokumentasi kegiatan pembelajaran di kelas",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      id: 2,
      title: "Praktikum Komputer",
      date: "Februari 2024",
      description: "Siswa sedang praktik di laboratorium komputer",
      image: "https://picsum.photos/800/600?random=2"
    },
    {
      id: 3,
      title: "Kegiatan Ekstrakurikuler",
      date: "Januari 2024",
      description: "Berbagai kegiatan ekstrakurikuler siswa",
      image: "https://picsum.photos/800/600?random=3"
    },
    {
      id: 4,
      title: "Upacara Bendera",
      date: "Desember 2023",
      description: "Upacara bendera rutin setiap hari Senin",
      image: "https://picsum.photos/800/600?random=10"
    },
    {
      id: 5,
      title: "Event Sekolah",
      date: "November 2023",
      description: "Berbagai event dan kegiatan sekolah",
      image: "https://picsum.photos/800/600?random=5"
    },
    {
      id: 6,
      title: "Fasilitas Sekolah",
      date: "Oktober 2023",
      description: "Dokumentasi fasilitas sekolah yang lengkap",
      image: "https://picsum.photos/800/600?random=6"
    },
    {
      id: 7,
      title: "Prestasi Siswa",
      date: "September 2023",
      description: "Berbagai prestasi yang diraih siswa",
      image: "https://picsum.photos/800/600?random=7"
    },
    {
      id: 8,
      title: "Kegiatan Keagamaan",
      date: "Agustus 2023",
      description: "Aktivitas keagamaan di lingkungan sekolah",
      image: "https://picsum.photos/800/600?random=8"
    }
  ];

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    const index = galleryItems.findIndex(item => item.id === id);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex].id);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("bg-fahd-2.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-md">
              Gallery Sekolah <br />
              <span className="text-[#D4A373] text-3xl md:text-4xl font-semibold">SMK Fahd Islamic School</span>
            </h1>
            <div className="h-1 w-20 bg-white mx-auto mb-4 rounded" />
            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Dokumentasi kegiatan dan prestasi siswa-siswi SMK Fahd Islamic School
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/90 rounded-lg overflow-hidden shadow-md border border-amber-200/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2 hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-xs md:text-sm text-amber-600 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <p className="text-amber-700/80 text-sm leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-gray-600 hover:text-amber-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-amber-600 transition-colors bg-white/50 rounded-full p-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-amber-600 transition-colors bg-white/50 rounded-full p-2"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {(() => {
              const currentItem = galleryItems[currentImageIndex];
              return currentItem ? (
                <div>
                  <img 
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-amber-800">{currentItem.title}</h3>
                      <div className="text-sm text-amber-600 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {currentItem.date}
                      </div>
                    </div>
                    <p className="text-amber-700/80 text-base leading-relaxed mb-4">{currentItem.description}</p>
                    <div className="text-sm text-amber-600 text-center">
                      {currentImageIndex + 1} dari {galleryItems.length}
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default GallerySekolah;