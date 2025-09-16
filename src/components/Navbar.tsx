import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil Sekolah', href: '/profile-sekolah' },
    { name: 'Gallery Sekolah', href: '/gallery-sekolah' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F5DC]/90 backdrop-blur-md py-3 shadow-lg shadow-[#D4A373]/20'
          : 'py-4 sm:py-6 bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo + Nama Sekolah */}
        <div className="flex items-center space-x-3">
          <img
            src="logo-fahd.png"
            alt="Logo Fahd Islamic School"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 hover:scale-105"
            loading="lazy"
            sizes="(max-width: 640px) 40px, 48px"
          />
          <h1
            className={`text-xl sm:text-2xl font-bold transition-colors duration-500 ${
              isScrolled ? 'text-[#8B5E3C]' : 'text-white'
            }`}
          >
            Fahd Islamic School
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {menuItems.map((item, index) => {
            const isActive = activePath === item.href;
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`${
                    isScrolled
                      ? 'text-[#5C4033] hover:text-[#D4A373]'
                      : 'text-white hover:text-[#D4A373]'
                  } transition-all duration-500 relative group text-sm lg:text-base ${
                    isActive ? 'font-bold text-[#D4A373]' : 'font-medium'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4A373] transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Tombol daftar */}
        <div className="hidden md:flex items-center">
          <a href="/pendaftaran-siswa-baru">
            <Button
              className="bg-[#D4A373] hover:bg-[#8B5E3C] text-white px-4 sm:px-6 py-2 font-medium transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base"
            >
              Daftar Siswa Baru
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'text-[#5C4033] hover:bg-[#F5F5DC]/40'
              : 'text-white hover:bg-white/20'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-[#F5F5DC]/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-xl shadow-[#D4A373]/20 transition-all duration-300 ease-in-out"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item, index) => {
                const isActive = activePath === item.href;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={`block py-2 pl-4 border-l-2 transition-colors text-base ${
                        isActive
                          ? 'font-bold text-[#D4A373] border-[#D4A373]'
                          : 'text-[#5C4033] hover:text-[#D4A373] border-transparent hover:border-[#D4A373]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li className="pt-4">
                <a href="/pendaftaran-siswa-baru">
                  <Button
                    className="bg-[#D4A373] hover:bg-[#8B5E3C] text-white w-full font-medium transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Daftar Siswa Baru
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;