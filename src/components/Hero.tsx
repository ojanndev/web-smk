import { useEffect, useState } from "react";


const Hero = () => {
  const images = ["bg-fahd.jpg", "bg-fahd-1.jpg", "bg-fahd-2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Images dengan fade */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-black/40" />

      {/* Konten */}
      <div className="container mx-auto px-4 py-20 relative z-30">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-white tracking-wide">
              Akreditasi A
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Selamat Datang di <br />
            <span className="text-[#D4A373]">SMK Fahd Islamic School</span>
          </h1>

          {/* Deskripsi */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
            SMK Fahd Islamic School menyediakan pendidikan vokasional terbaik
            dengan fasilitas lengkap, guru kompeten, dan kurikulum berbasis
            industri Islami untuk mencetak generasi unggul.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
