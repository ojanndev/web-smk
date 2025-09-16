import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8 text-gray-400">
      <div className="container mx-auto px-4">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Branding */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo-fahd.png"
                alt="SMK Fahd Islamic School Logo"
                className="h-12 w-auto mr-3"
              />
              <h2 className="text-2xl font-bold text-white">
                SMK Fahd Islamic School
              </h2>
            </div>
            <p className="text-gray-400 mb-6">
              Sekolah kejuruan berbasis Islami yang berkomitmen mencetak generasi unggul,
              berakhlak mulia, dan siap menghadapi tantangan masa depan.
            </p>
            {/* Sosial Media */}
            <div className="flex space-x-4">
              <a href="#!" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#!" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#!" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#!" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Program Keahlian */}
          <div>
            <h3 className="text-white font-semibold mb-4">Program Keahlian</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-white transition-colors">Rekayasa Perangkat Lunak (RPL)</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Teknik Komputer & Jaringan (TKJ)</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Multimedia</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Akuntansi</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Bisnis Daring & Pemasaran</a></li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-white transition-colors">Berita Sekolah</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Agenda Kegiatan</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Prestasi Siswa</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">E-Learning</a></li>
              <li><a href="#!" className="hover:text-white transition-colors">Perpustakaan Digital</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li>
                📍 Jl. Pendidikan No. 123, Kota Anda
              </li>
              <li>
                📞 (021) 123-4567
              </li>
              <li>
                ✉️ info@smkfahd.sch.id
              </li>
              <li>
                ⏰ Senin - Jum'at: 07.00 - 16.00
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>
            &copy; {currentYear} SMK Fahd Islamic School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
