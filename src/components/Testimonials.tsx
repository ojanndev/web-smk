import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';

const Testimonials = () => {
  // Data testimonials yang disesuaikan untuk SMK Fahd Islamic School
  const testimonials = [
    {
      quote: "SMK Fahd Islamic School memberikan pendidikan terbaik dengan memadukan ilmu teknologi dan nilai-nilai Islam. Anak saya berkembang sangat baik di sini.",
      author: "Ibu Siti Nurhaliza",
      role: "Orang Tua Siswa",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c169a8af?w=100&h=100&fit=crop"
    },
    {
      quote: "Fasilitas laboratorium yang lengkap dan guru-guru yang berpengalaman membuat saya siap menghadapi dunia kerja. Alhamdulillah sekarang sudah bekerja di perusahaan IT ternama.",
      author: "Ahmad Fauzan",
      role: "Alumni Jurusan RPL",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      quote: "Lingkungan sekolah yang Islami dan program pembinaan akhlak yang baik membentuk karakter siswa menjadi lebih baik. Sangat merekomendasikan sekolah ini.",
      author: "Ustadz Abdullah",
      role: "Guru Pendidikan Agama",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      quote: "Program magang di industri dan kerjasama dengan berbagai perusahaan memudahkan lulusan untuk mendapat pekerjaan. SMK Fahd benar-benar mempersiapkan masa depan siswa.",
      author: "Fatimah Zahra",
      role: "Alumni Jurusan Akuntansi",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3]">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#D4A373] font-medium text-sm md:text-base uppercase tracking-wide mb-2 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#3C2A21]">
            Apa Kata Mereka?
          </h2>
          <p className="text-[#5C4033] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Testimoni dari siswa, alumni, guru, dan orang tua tentang pengalaman berkesan 
            di SMK Fahd Islamic School.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white/80 backdrop-blur-sm border border-[#D4A373]/20 shadow-xl rounded-2xl p-8 md:p-12 hover:bg-white/90 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 md:h-6 md:w-6 text-[#D4A373] fill-[#D4A373] mx-0.5" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl lg:text-2xl text-[#3C2A21] mb-8 leading-relaxed text-center italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-3 border-[#D4A373] shadow-lg"
                      />
                      <div className="ml-4 text-center md:text-left">
                        <p className="font-bold text-[#3C2A21] text-lg md:text-xl">
                          {testimonial.author}
                        </p>
                        <p className="text-sm md:text-base text-[#5C4033] font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 md:mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  currentIndex === index 
                    ? 'w-10 bg-[#D4A373] shadow-lg' 
                    : 'w-3 bg-[#D4A373]/40 hover:bg-[#D4A373]/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;