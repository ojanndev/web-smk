import { AnimatedBackground } from "@/components/ui/animated-background";

const AboutSection = () => {
  const schoolImages = [
    "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1011/1200/600",
    "https://picsum.photos/id/1016/1200/600",
    "https://picsum.photos/id/1016/1200/600",
  ];

  return (
    <section id="about" className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-teal-600 font-medium text-sm md:text-base uppercase tracking-wide">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-800">
            SMK Fahd Islamic School
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
          
          {/* Left Content - Text */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                SMK Fahd Islamic School berada di bawah Yayasan Islam Fahd, 
                merupakan entitas dengan beragam unit kerja profesional 
                dari kategori berbeda seperti <strong>pendidikan, bisnis, dakwah,</strong> 
                serta <strong>konsultan multimedia.</strong>
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                SMK Fahd Islamic School berkomitmen menghadirkan kontribusi terbaik 
                dalam bidang yang dikuasai untuk membawa kemaslahatan kaum muslimin. 
                Kami menggabungkan pendidikan vokasional berkualitas tinggi dengan 
                nilai-nilai Islam untuk mencetak generasi yang kompeten dan berakhlak mulia.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h4 className="font-bold text-amber-800 mb-2">Akreditasi A</h4>
                <p className="text-gray-600 text-sm">Terakreditasi resmi dengan standar pendidikan terbaik</p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                <h4 className="font-bold text-amber-800 mb-2">Berbasis Islam</h4>
                <p className="text-gray-600 text-sm">Integrasi nilai-nilai Islam dalam setiap aspek pembelajaran</p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-amber-800 mb-2">Kurikulum Industri</h4>
                <p className="text-gray-600 text-sm">Sesuai kebutuhan dunia kerja dan teknologi terkini</p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h4 className="font-bold text-amber-800 mb-2">Fasilitas Lengkap</h4>
                <p className="text-gray-600 text-sm">Laboratorium dan workshop berstandar industri</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {schoolImages.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                  <img
                    src={image}
                    alt={`Kegiatan SMK Fahd ${index + 1}`}
                    className="w-full h-[120px] md:h-[180px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="mt-6 md:mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-md">
                <div className="text-2xl md:text-3xl font-bold text-teal-600">15+</div>
                <div className="text-xs md:text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-md">
                <div className="text-2xl md:text-3xl font-bold text-amber-600">500+</div>
                <div className="text-xs md:text-sm text-gray-600">Alumni Sukses</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-md">
                <div className="text-2xl md:text-3xl font-bold text-green-600">5</div>
                <div className="text-xs md:text-sm text-gray-600">Program Keahlian</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;