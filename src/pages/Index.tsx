
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/About';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
// import Pricing from '@/components/Pricing';
// import FAQ from '@/components/FAQ';
// import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
// import ProfileSchool from '@/components/ProfileSchool';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "SMK Fahd Islamic School";
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <PhotoGallery />
      <Features />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <CTA /> */}
      <Footer />
      {/* <ProfileSchool /> */}
    </div>
  );
};

export default Index;
