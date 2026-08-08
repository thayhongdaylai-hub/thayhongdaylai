import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursePackages from './components/CoursePackages';
import Roadmap from './components/Roadmap';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vietdrive_theme') || 'dark';
  });

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vietdrive_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenRegister = (details = null) => {
    setModalDetails(details);
    setIsRegisterOpen(true);
  };

  const handleSelectCourse = (courseName) => {
    handleOpenRegister({ courseName });
  };

  return (
    <div className="app-root">
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenRegister={() => handleOpenRegister()}
      />
      <main>
        <Hero onOpenRegister={() => handleOpenRegister()} />
        <CoursePackages onSelectCourse={handleSelectCourse} />
        <Roadmap onOpenRegister={() => handleOpenRegister()} />
        <Facilities />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialData={modalDetails}
      />
    </div>
  );
}
