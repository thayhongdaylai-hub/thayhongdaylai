import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, BookOpen, Gift } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursePackages from './components/CoursePackages';
import AboutTeacher from './components/AboutTeacher';
import UpgradePackages from './components/UpgradePackages';
import TheoryExam from './components/TheoryExam';
import Roadmap from './components/Roadmap';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import TestModal from './components/TestModal';

// Helper function to detect real-time day/night theme
const getTimeBasedTheme = () => {
  const hour = new Date().getHours();
  // 06:00 to 17:59 -> Light Mode (Sáng)
  // 18:00 to 05:59 -> Dark Mode (Tối)
  return (hour >= 6 && hour < 18) ? 'light' : 'dark';
};

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('thayhong_theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return getTimeBasedTheme();
  });

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Check real-time clock periodically if user hasn't explicitly locked a manual preference
  useEffect(() => {
    const interval = setInterval(() => {
      const saved = localStorage.getItem('thayhong_theme');
      if (!saved) {
        setTheme(getTimeBasedTheme());
      }
    }, 60000); // check every 1 minute
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('thayhong_theme', next);
      return next;
    });
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
        <Hero
          onOpenRegister={() => handleOpenRegister()}
          onOpenTestModal={() => setIsTestOpen(true)}
        />
        <CoursePackages onSelectCourse={handleSelectCourse} />
        <AboutTeacher onOpenRegister={() => handleOpenRegister()} />
        <UpgradePackages onSelectUpgrade={handleSelectCourse} />
        <TheoryExam />
        <Roadmap onOpenRegister={() => handleOpenRegister()} />
        <Facilities />
        <Testimonials />
        <FAQ />
        <CTASection onOpenRegister={() => handleOpenRegister()} />
      </main>
      <Footer />

      {/* Sticky Mobile Floating Action Bar with Clear Phone Numbers */}
      <div className="mobile-bottom-bar">
        <a
          href="https://zalo.me/0983406221"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bottom-btn"
          title="Gọi / Zalo Thầy Hồng: 0983.406.221"
        >
          <Phone size={17} color="var(--primary)" />
          <span style={{ fontWeight: 800 }}>0983.406.221</span>
        </a>

        <a
          href="https://zalo.me/0336611194"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bottom-btn"
          title="Zalo Tư Vấn: 0336.611.194"
        >
          <MessageSquare size={17} color="var(--primary)" />
          <span style={{ fontWeight: 800 }}>0336.611.194</span>
        </a>

        <button
          onClick={() => handleOpenRegister({ note: 'Đăng ký nhanh từ điện thoại' })}
          className="mobile-bottom-btn highlight"
          title="Đăng ký nhận voucher 1.000.000đ"
        >
          <Sparkles size={16} color="#0F172A" />
          <span style={{ fontWeight: 900 }}>ĐĂNG KÝ HỌC</span>
        </button>
      </div>

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialData={modalDetails}
      />
      <TestModal
        isOpen={isTestOpen}
        onClose={() => setIsTestOpen(false)}
      />
    </div>
  );
}
