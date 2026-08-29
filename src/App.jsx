import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, BookOpen, Gift, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursePackages from './components/CoursePackages';
import UpgradePackages from './components/UpgradePackages';
import Roadmap from './components/Roadmap';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TheoryExam from './components/TheoryExam';
import RegisterModal from './components/RegisterModal';
import TestModal from './components/TestModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vietdrive_theme') || 'light';
  });

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);
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
        <Hero
          onOpenRegister={() => handleOpenRegister()}
          onOpenTestModal={() => setIsTestOpen(true)}
        />
        <CoursePackages onSelectCourse={handleSelectCourse} />
        <UpgradePackages onSelectUpgrade={handleSelectCourse} />
        <TheoryExam />
        <Roadmap onOpenRegister={() => handleOpenRegister()} />
        <Facilities />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {/* Sticky Mobile Floating Action Bar */}
      <div className="mobile-bottom-bar">
        <a href="tel:0983406221" className="mobile-bottom-btn" title="Gọi trực tiếp Thầy Hồng">
          <Phone size={18} color="var(--accent-emerald)" />
          <span>Gọi Thầy</span>
        </a>

        <a
          href="https://zalo.me/0983406221"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bottom-btn"
          title="Chat Zalo cùng Thầy Hồng"
        >
          <MessageSquare size={18} color="var(--accent-blue)" />
          <span>Chat Zalo</span>
        </a>

        <button
          onClick={() => {
            const examSection = document.getElementById('theory-exam');
            if (examSection) {
              examSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              setIsTestOpen(true);
            }
          }}
          className="mobile-bottom-btn"
          title="Luyện thi lý thuyết sát hạch"
        >
          <BookOpen size={18} color="var(--accent-orange)" />
          <span>Thi Thử</span>
        </button>

        <button
          onClick={() => handleOpenRegister({ note: 'Đăng ký nhanh từ điện thoại' })}
          className="mobile-bottom-btn highlight"
          title="Đăng ký nhận voucher 1 triệu"
        >
          <Gift size={18} color="#051A10" />
          <span>Nhận Ưu Đãi</span>
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
