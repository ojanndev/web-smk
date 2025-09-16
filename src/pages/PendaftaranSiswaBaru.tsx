import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/utils/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PendaftaranSiswaBaru = () => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    agama: '',
    alamat: '',
    noTelepon: '',
    email: '',
    namaAyah: '',
    namaIbu: '',
    pekerjaanAyah: '',
    pekerjaanIbu: '',
    noTeleponOrtu: '',
    asalSekolah: '',
    tahunLulus: '',
    nilaiUN: '',
    jurusan: '',
    alasanMemilih: ''
  });

  useScrollAnimation();

  useEffect(() => {
    document.title = "Pendaftaran Siswa Baru - SMK Fahd Islamic School";
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulir pendaftaran berhasil dikirim! Tim kami akan menghubungi Anda dalam 1x24 jam.");
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Form Pendaftaran Siswa Baru
            </h1>
            <div className="h-1 w-32 bg-white mx-auto mb-6 rounded-full" />
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Silakan lengkapi data di bawah ini untuk mendaftar
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 md:p-8 bg-white/90 backdrop-blur-sm border border-amber-200/50 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Data Pribadi Siswa */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                    Data Pribadi Siswa
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="namaLengkap" className="text-sm font-medium text-gray-700">Nama Lengkap *</Label>
                      <Input 
                        id="namaLengkap"
                        value={formData.namaLengkap}
                        onChange={(e) => handleInputChange('namaLengkap', e.target.value)}
                        placeholder="Masukkan nama lengkap"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="jenisKelamin" className="text-sm font-medium text-gray-700">Jenis Kelamin *</Label>
                      <Select value={formData.jenisKelamin} onValueChange={(value) => handleInputChange('jenisKelamin', value)}>
                        <SelectTrigger className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="laki-laki">Laki-laki</SelectItem>
                          <SelectItem value="perempuan">Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="tempatLahir" className="text-sm font-medium text-gray-700">Tempat Lahir *</Label>
                      <Input 
                        id="tempatLahir"
                        value={formData.tempatLahir}
                        onChange={(e) => handleInputChange('tempatLahir', e.target.value)}
                        placeholder="Masukkan tempat lahir"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tanggalLahir" className="text-sm font-medium text-gray-700">Tanggal Lahir *</Label>
                      <Input 
                        id="tanggalLahir"
                        type="date"
                        value={formData.tanggalLahir}
                        onChange={(e) => handleInputChange('tanggalLahir', e.target.value)}
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="agama" className="text-sm font-medium text-gray-700">Agama *</Label>
                      <Select value={formData.agama} onValueChange={(value) => handleInputChange('agama', value)}>
                        <SelectTrigger className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Pilih agama" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="islam">Islam</SelectItem>
                          <SelectItem value="kristen">Kristen</SelectItem>
                          <SelectItem value="katolik">Katolik</SelectItem>
                          <SelectItem value="hindu">Hindu</SelectItem>
                          <SelectItem value="budha">Budha</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="noTelepon" className="text-sm font-medium text-gray-700">No. Telepon *</Label>
                      <Input 
                        id="noTelepon"
                        value={formData.noTelepon}
                        onChange={(e) => handleInputChange('noTelepon', e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="example@email.com"
                      className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="alamat" className="text-sm font-medium text-gray-700">Alamat Lengkap *</Label>
                    <Textarea 
                      id="alamat"
                      value={formData.alamat}
                      onChange={(e) => handleInputChange('alamat', e.target.value)}
                      placeholder="Masukkan alamat lengkap"
                      required
                      className="mt-1 w-full h-24 bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Data Orang Tua */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                    Data Orang Tua/Wali
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="namaAyah" className="text-sm font-medium text-gray-700">Nama Ayah *</Label>
                      <Input 
                        id="namaAyah"
                        value={formData.namaAyah}
                        onChange={(e) => handleInputChange('namaAyah', e.target.value)}
                        placeholder="Masukkan nama ayah"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="namaIbu" className="text-sm font-medium text-gray-700">Nama Ibu *</Label>
                      <Input 
                        id="namaIbu"
                        value={formData.namaIbu}
                        onChange={(e) => handleInputChange('namaIbu', e.target.value)}
                        placeholder="Masukkan nama ibu"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="pekerjaanAyah" className="text-sm font-medium text-gray-700">Pekerjaan Ayah *</Label>
                      <Input 
                        id="pekerjaanAyah"
                        value={formData.pekerjaanAyah}
                        onChange={(e) => handleInputChange('pekerjaanAyah', e.target.value)}
                        placeholder="Masukkan pekerjaan ayah"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pekerjaanIbu" className="text-sm font-medium text-gray-700">Pekerjaan Ibu *</Label>
                      <Input 
                        id="pekerjaanIbu"
                        value={formData.pekerjaanIbu}
                        onChange={(e) => handleInputChange('pekerjaanIbu', e.target.value)}
                        placeholder="Masukkan pekerjaan ibu"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="noTeleponOrtu" className="text-sm font-medium text-gray-700">No. Telepon Orang Tua *</Label>
                    <Input 
                      id="noTeleponOrtu"
                      value={formData.noTeleponOrtu}
                      onChange={(e) => handleInputChange('noTeleponOrtu', e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      required
                      className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Data Sekolah Asal & Pilihan Jurusan */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-800 mb-4 border-b-2 border-amber-200 pb-2">
                    Data Sekolah Asal & Pilihan Jurusan
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="asalSekolah" className="text-sm font-medium text-gray-700">Sekolah Asal *</Label>
                      <Input 
                        id="asalSekolah"
                        value={formData.asalSekolah}
                        onChange={(e) => handleInputChange('asalSekolah', e.target.value)}
                        placeholder="Nama sekolah asal"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tahunLulus" className="text-sm font-medium text-gray-700">Tahun Lulus *</Label>
                      <Input 
                        id="tahunLulus"
                        value={formData.tahunLulus}
                        onChange={(e) => handleInputChange('tahunLulus', e.target.value)}
                        placeholder="2024"
                        required
                        className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="nilaiUN" className="text-sm font-medium text-gray-700">Nilai UN/USBN (rata-rata)</Label>
                    <Input 
                      id="nilaiUN"
                      value={formData.nilaiUN}
                      onChange={(e) => handleInputChange('nilaiUN', e.target.value)}
                      placeholder="Contoh: 8.5"
                      className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="jurusan" className="text-sm font-medium text-gray-700">Pilihan Jurusan *</Label>
                    <Select value={formData.jurusan} onValueChange={(value) => handleInputChange('jurusan', value)}>
                      <SelectTrigger className="mt-1 w-full bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                        <SelectValue placeholder="Pilih jurusan yang diminati" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TKJ">TKJ - Teknik Komputer dan Jaringan</SelectItem>
                        <SelectItem value="RPL">RPL - Rekayasa Perangkat Lunak</SelectItem>
                        <SelectItem value="AKL">AKL - Akuntansi dan Keuangan Lembaga</SelectItem>
                        <SelectItem value="BDP">BDP - Bisnis Daring dan Pemasaran</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="alasanMemilih" className="text-sm font-medium text-gray-700">Alasan Memilih SMK Fahd Islamic School *</Label>
                    <Textarea 
                      id="alasanMemilih"
                      value={formData.alasanMemilih}
                      onChange={(e) => handleInputChange('alasanMemilih', e.target.value)}
                      placeholder="Ceritakan alasan Anda memilih sekolah kami..."
                      required
                      className="mt-1 w-full h-24 bg-white border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>
                
                <div className="pt-6 border-t border-amber-200">
                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-medium rounded-lg transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Kirim Pendaftaran
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PendaftaranSiswaBaru;