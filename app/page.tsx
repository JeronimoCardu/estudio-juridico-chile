import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from '@/components/Specialties';
import AboutUs from '@/components/AboutUs';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Specialties />
        <AboutUs />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
