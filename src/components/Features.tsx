import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Laptop, 
  Heart,
  Building,
  Target,
  Shield
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Akreditasi A",
      description: "Terakreditasi A oleh BAN-S/M dengan standar pendidikan nasional yang terjamin kualitasnya."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pendidikan Islami",
      description: "Memadukan kurikulum vokasional dengan nilai-nilai Islam untuk membentuk karakter unggul."
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Fasilitas Modern",
      description: "Laboratorium komputer, workshop, dan fasilitas pembelajaran berstandar industri."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Guru Berpengalaman",
      description: "Tenaga pengajar profesional dan bersertifikat dengan pengalaman industri yang mumpuni."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Kerjasama Industri",
      description: "Partnerships dengan perusahaan terkemuka untuk magang dan penyerapan lulusan."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Kurikulum Tepat Sasaran",
      description: "Kurikulum yang disesuaikan dengan kebutuhan dunia kerja dan perkembangan teknologi."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Alumni Sukses",
      description: "Track record alumni yang sukses berkarir di berbagai perusahaan dan wirausaha mandiri."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Program Keahlian Lengkap",
      description: "5 program keahlian: RPL, TKJ, Multimedia, Akuntansi, dan Pemasaran Online."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Lingkungan Islami",
      description: "Suasana belajar yang kondusif dengan nuansa Islami dan pembinaan akhlak mulia."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3]">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#D4A373] font-medium text-sm md:text-base uppercase tracking-wide mb-2 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#3C2A21]">
            Keunggulan SMK Fahd Islamic School
          </h2>
          <p className="text-[#5C4033] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Kami menghadirkan pendidikan vokasional terbaik yang memadukan keunggulan akademik, 
            keterampilan industri, dan pembentukan karakter Islami untuk masa depan yang gemilang.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl 
                         transition-all duration-500 p-6 md:p-8 text-center border border-white/50
                         hover:border-[#D4A373]/30 hover:-translate-y-2 min-h-[260px] flex flex-col justify-center"
            >
              {/* Icon dengan animasi */}
              <div className="bg-gradient-to-br from-[#D4A373] to-[#B8956A] rounded-2xl w-16 h-16 
                              flex items-center justify-center mb-6 mx-auto text-white shadow-lg
                              group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#3C2A21] 
                             group-hover:text-[#D4A373] transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#5C4033] text-sm md:text-base leading-relaxed 
                            group-hover:text-[#4A3429] transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-white/50">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3C2A21] mb-4">
              Siap Bergabung Bersama Kami?
            </h3>
            <p className="text-[#5C4033] mb-6 text-base md:text-lg">
              Jadilah bagian dari keluarga besar SMK Fahd Islamic School dan raih masa depan gemilang!
            </p>
            <button className="bg-gradient-to-r from-[#D4A373] to-[#B8956A] text-white 
                               px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold 
                               hover:from-[#B8956A] hover:to-[#A0845C] transform hover:scale-105 
                               transition-all duration-300 shadow-lg hover:shadow-xl">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;