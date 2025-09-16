import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Eye, 
  Target, 
  Heart, 
  Users, 
  Award, 
  Building2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  User
} from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';

const ProfileSchool = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Selayang Pandang', icon: Building2 },
    { id: 'vision', name: 'Visi & Misi', icon: Target },
    { id: 'founder', name: 'Pendiri Sekolah', icon: User },
    { id: 'teachers', name: 'Para Guru', icon: Users },
  ];

  const teachers = [
    {
      id: 1,
      name: "Drs. H. Ahmad Mukhlis, M.Pd",
      position: "Kepala Sekolah",
      subject: "Manajemen Pendidikan",
      experience: "25 Tahun",
      education: "S2 Manajemen Pendidikan UNJ",
      photo: "https://picsum.photos/300/300?random=1",
      achievements: ["Kepala Sekolah Berprestasi 2023", "Sertifikasi ISO 9001"]
    },
    {
      id: 2,
      name: "Siti Aisyah, S.Pd, M.M",
      position: "Wakil Kepala Sekolah",
      subject: "Bahasa Indonesia",
      experience: "20 Tahun",
      education: "S2 Manajemen Pendidikan",
      photo: "https://picsum.photos/300/300?random=2",
      achievements: ["Guru Berprestasi Tingkat Provinsi 2022"]
    },
    {
      id: 3,
      name: "Ir. Muhammad Faisal, M.T",
      position: "Koordinator Jurusan TKJ",
      subject: "Teknik Komputer & Jaringan",
      experience: "15 Tahun",
      education: "S2 Teknik Informatika ITB",
      photo: "https://picsum.photos/300/300?random=3",
      achievements: ["Sertifikasi Cisco CCNA", "Trainer Microsoft Certified"]
    },
    {
      id: 4,
      name: "Fatimah Az-Zahra, S.Pd",
      position: "Koordinator Jurusan RPL",
      subject: "Rekayasa Perangkat Lunak",
      experience: "12 Tahun",
      education: "S1 Teknik Informatika UI",
      photo: "https://picsum.photos/300/300?random=4",
      achievements: ["Oracle Certified Professional", "Scrum Master Certified"]
    },
    {
      id: 5,
      name: "Dr. Abdul Rahman, M.Pd.I",
      position: "Koordinator Pendidikan Agama",
      subject: "Pendidikan Agama Islam",
      experience: "18 Tahun",
      education: "S3 Pendidikan Islam UIN Syarif Hidayatullah",
      photo: "https://picsum.photos/300/300?random=5",
      achievements: ["Hafidz 30 Juz", "Penulis Buku Akhlak Remaja"]
    },
    {
      id: 6,
      name: "Nurul Hidayah, S.E, M.Ak",
      position: "Koordinator Jurusan AKL",
      subject: "Akuntansi & Keuangan",
      experience: "14 Tahun",
      education: "S2 Akuntansi UNPAD",
      photo: "https://picsum.photos/300/300?random=6",
      achievements: ["Certified Public Accountant", "Konsultan Keuangan UMKM"]
    }
  ];

  const founderInfo = {
    name: "KH. Dr. Fahd bin Abdullah Al-Makki",
    title: "Pendiri SMK Fahd Islamic School",
    birthYear: "1955",
    education: [
      "Doktor Pendidikan Islam - Universitas Al-Azhar, Mesir",
      "Magister Syariah - Universitas Islam Madinah, Saudi Arabia",
      "Sarjana Dakwah - Institut Agama Islam Negeri Jakarta"
    ],
    biography: "Beliau adalah seorang ulama dan pendidik yang berdedikasi tinggi dalam pengembangan pendidikan Islam di Indonesia. Dengan pengalaman lebih dari 30 tahun di bidang pendidikan, KH. Dr. Fahd mendirikan SMK Fahd Islamic School pada tahun 2009 dengan visi menciptakan generasi muslim yang tidak hanya unggul dalam IPTEK tetapi juga berakhlak mulia.",
    achievements: [
      "Pendiri 5 lembaga pendidikan Islam di Indonesia",
      "Penulis 15 buku tentang pendidikan Islam",
      "Penerima penghargaan Tokoh Pendidikan Islam Nasional 2020",
      "Pembina Yayasan Pendidikan Islam Fahd"
    ],
    philosophy: "Pendidikan adalah investasi terbaik untuk masa depan umat. Melalui integrasi ilmu dunia dan akhirat, kita dapat melahirkan generasi yang mampu memimpin peradaban Islam di era modern.",
    photo: "https://picsum.photos/400/400?random=7"
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Profil Sekolah</h3>
                  </div>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span><strong>Didirikan:</strong> 2009</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span><strong>Alamat:</strong> Jl. Pendidikan Raya No. 123, Jakarta Selatan</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      <span><strong>Akreditasi:</strong> A (Unggul)</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span><strong>Jumlah Siswa:</strong> 850+ Siswa Aktif</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span><strong>Telepon:</strong> (021) 8765-4321</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span><strong>Email:</strong> info@smkfahd.sch.id</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Program Keahlian</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Teknik Komputer & Jaringan",
                      "Rekayasa Perangkat Lunak",
                      "Akuntansi & Keuangan Lembaga",
                      "Bisnis Daring & Pemasaran"
                    ].map((program, index) => (
                      <div key={index} className="bg-gradient-to-r from-amber-100 to-orange-100 p-3 rounded-lg border border-amber-300">
                        <span className="text-sm font-medium text-slate-800">{program}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Tentang SMK Fahd Islamic School</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    SMK Fahd Islamic School adalah sekolah menengah kejuruan yang mengintegrasikan pendidikan 
                    vokasional dengan nilai-nilai Islam. Didirikan pada tahun 2009, sekolah ini telah berkembang 
                    menjadi salah satu institusi pendidikan terpercaya di Indonesia.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Dengan menggabungkan kurikulum nasional dan kurikulum berbasis kompetensi industri, 
                    kami berkomitmen menghasilkan lulusan yang tidak hanya kompeten secara teknis, 
                    tetapi juga berakhlak mulia dan siap menghadapi tantangan dunia kerja.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-700">850+</div>
                      <div className="text-sm text-slate-600">Siswa Aktif</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">45+</div>
                      <div className="text-sm text-slate-600">Tenaga Pendidik</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-700">15+</div>
                      <div className="text-sm text-slate-600">Tahun Pengalaman</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Fasilitas Unggulan</h3>
                  <div className="space-y-2">
                    {[
                      "Laboratorium Komputer Terkini",
                      "Workshop Praktik Industri",
                      "Perpustakaan Digital",
                      "Masjid & Ruang Sholat",
                      "Aula Serbaguna",
                      "Lapangan Olahraga",
                      "Kantin Halal & Sehat",
                      "Asrama Siswa"
                    ].map((facility, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                        <span className="text-slate-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'vision':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Visi</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed italic">
                  "Menjadi Sekolah Menengah Kejuruan Islam terdepan yang menghasilkan lulusan 
                  beriman, bertaqwa, berakhlak mulia, dan berkompeten tinggi di bidang teknologi 
                  informasi serta bisnis untuk menghadapi tantangan global."
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Misi</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Menyelenggarakan pendidikan kejuruan berkualitas tinggi yang berlandaskan nilai-nilai Islam",
                    "Mengintegrasikan kurikulum nasional dengan pembelajaran berbasis industri 4.0",
                    "Mengembangkan karakter siswa yang berakhlak mulia dan bertanggung jawab",
                    "Membekali siswa dengan keterampilan teknis yang sesuai dengan kebutuhan industri modern",
                    "Membangun kemitraan strategis dengan dunia usaha dan industri (DUDI)",
                    "Menciptakan lingkungan belajar yang Islami, inovatif, dan kondusif"
                  ].map((mission, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Nilai-Nilai Inti</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "IMAN & TAQWA",
                    description: "Mengutamakan ketaatan kepada Allah SWT dalam setiap aspek pendidikan dan kehidupan"
                  },
                  {
                    title: "EXCELLENCE",
                    description: "Berkomitmen memberikan pendidikan berkualitas tinggi dengan standar internasional"
                  },
                  {
                    title: "INNOVATION",
                    description: "Mengembangkan kreativitas dan inovasi dalam pembelajaran dan teknologi"
                  },
                  {
                    title: "INTEGRITY",
                    description: "Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas dalam setiap tindakan"
                  },
                  {
                    title: "COLLABORATION",
                    description: "Membangun kerjasama yang sinergis dengan semua stakeholder pendidikan"
                  },
                  {
                    title: "EMPOWERMENT",
                    description: "Memberdayakan siswa untuk menjadi pribadi yang mandiri dan bermanfaat bagi masyarakat"
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <h4 className="text-lg font-bold text-slate-800 mb-3">{value.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'founder':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="text-center">
                    <img 
                      src={founderInfo.photo}
                      alt={founderInfo.name}
                      className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-amber-300 shadow-xl mb-6"
                    />
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{founderInfo.name}</h3>
                    <p className="text-amber-700 font-semibold mb-4">{founderInfo.title}</p>
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-xl border border-amber-200">
                      <p className="text-slate-700 text-sm">
                        <strong>Tahun Lahir:</strong> {founderInfo.birthYear}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Riwayat Pendidikan</h4>
                    <div className="space-y-3">
                      {founderInfo.education.map((edu, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2" />
                          <p className="text-slate-700">{edu}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Biografi</h4>
                    <p className="text-slate-700 leading-relaxed">{founderInfo.biography}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Prestasi & Penghargaan</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {founderInfo.achievements.map((achievement, index) => (
                        <div key={index} className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg border border-amber-200">
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-amber-600 mr-2" />
                            <span className="text-slate-800 text-sm font-medium">{achievement}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-600">
                <h4 className="text-lg font-bold text-slate-800 mb-3">Filosofi Pendidikan</h4>
                <p className="text-slate-700 italic leading-relaxed">"{founderInfo.philosophy}"</p>
              </div>
            </div>
          </motion.div>
        );

      case 'teachers':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent mb-4">
                Tenaga Pendidik & Kependidikan
              </h3>
              <p className="text-slate-700 max-w-2xl mx-auto">
                Tim guru profesional dan berpengalaman yang siap membimbing siswa meraih prestasi terbaik
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher) => (
                <div 
                  key={teacher.id}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="text-center mb-4">
                    <img 
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-amber-200 group-hover:border-amber-400 transition-colors duration-300 mb-4"
                    />
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{teacher.name}</h4>
                    <p className="text-amber-700 font-semibold text-sm mb-2">{teacher.position}</p>
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1 rounded-full inline-block">
                      <span className="text-amber-800 text-xs font-medium">{teacher.subject}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Pengalaman:</span>
                      <span className="text-slate-800 font-medium">{teacher.experience}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-600">Pendidikan:</span>
                      <p className="text-slate-800 font-medium text-xs mt-1">{teacher.education}</p>
                    </div>
                    
                    {teacher.achievements && teacher.achievements.length > 0 && (
                      <div>
                        <span className="text-slate-600 text-sm">Prestasi:</span>
                        <div className="space-y-1 mt-2">
                          {teacher.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center">
                              <Award className="h-3 w-3 text-amber-600 mr-2" />
                              <span className="text-slate-800 text-xs">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200/50">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">Komitmen Para Pendidik</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full w-fit mx-auto mb-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-bold text-slate-800 mb-2">Profesional</h5>
                  <p className="text-slate-600 text-sm">Bersertifikat dan berpengalaman di bidangnya</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full w-fit mx-auto mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-bold text-slate-800 mb-2">Peduli</h5>
                  <p className="text-slate-600 text-sm">Memberikan perhatian penuh kepada setiap siswa</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full w-fit mx-auto mb-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-bold text-slate-800 mb-2">Berdedikasi</h5>
                  <p className="text-slate-600 text-sm">Berkomitmen tinggi dalam mendidik generasi Islam</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full w-fit mx-auto mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-bold text-slate-800 mb-2">Berprestasi</h5>
                  <p className="text-slate-600 text-sm">Terus berinovasi dan meraih pencapaian terbaik</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="profile-school" className="py-16 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent">
            Profile SMK Fahd Islamic School
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Mengenal lebih dekat sekolah menengah kejuruan Islam yang berkomitmen mencetak generasi unggul
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white/70 backdrop-blur-sm text-slate-800 hover:bg-white/90 border border-amber-200/50'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default ProfileSchool;
