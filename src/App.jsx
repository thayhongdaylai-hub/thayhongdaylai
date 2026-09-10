import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, BookOpen, Gift, Sparkles, Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursePackages from './components/CoursePackages';
import UpgradePackages from './components/UpgradePackages';
import MachineryCertificates from './components/MachineryCertificates';
import TheoryExam from './components/TheoryExam';
import Roadmap from './components/Roadmap';
import Facilities from './components/Facilities';
import AboutTeacher from './components/AboutTeacher';
import StudentGallery from './components/StudentGallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import TestModal from './components/TestModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem('thayhong_theme');
        if (saved === 'dark' || saved === 'light') {
          return saved;
        }
      }
    } catch (e) {}
    return 'light'; // Default to clean, professional light theme (nền trắng sạch)
  });

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const search = window.location.search;
      return hash === '#test' || hash === '#thi-thu' || search.includes('test=true') || search.includes('modal=test');
    }
    return false;
  });
  const [modalDetails, setModalDetails] = useState(null);
  const [legalDoc, setLegalDoc] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#chinh-sach-bao-mat' || hash === '#bao-mat') return 'privacy';
      if (hash === '#dieu-khoan-su-dung' || hash === '#dieu-khoan') return 'terms';
      if (hash === '#chinh-sach-hoan-tien' || hash === '#hoan-tien' || hash === '#dieu-luat') return 'refund';
    }
    return null;
  });

  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      const search = window.location.search;
      if (hash === '#test' || hash === '#thi-thu' || search.includes('test=true') || search.includes('modal=test')) {
        setIsTestOpen(true);
      } else if (hash === '#chinh-sach-bao-mat' || hash === '#bao-mat') {
        setLegalDoc('privacy');
      } else if (hash === '#dieu-khoan-su-dung' || hash === '#dieu-khoan') {
        setLegalDoc('terms');
      } else if (hash === '#chinh-sach-hoan-tien' || hash === '#hoan-tien' || hash === '#dieu-luat') {
        setLegalDoc('refund');
      }
    };
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  // Sync theme attribute to documentElement, body, and meta-theme-color immediately
  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        const metaTheme = document.getElementById('meta-theme-color');
        if (metaTheme) {
          metaTheme.setAttribute('content', theme === 'dark' ? '#0B1120' : '#FFFFFF');
        }
      }
    } catch (e) {}
  }, [theme]);

  const toggleTheme = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', next);
          document.body.setAttribute('data-theme', next);
          const metaTheme = document.getElementById('meta-theme-color');
          if (metaTheme) {
            metaTheme.setAttribute('content', next === 'dark' ? '#0B1120' : '#FFFFFF');
          }
        }
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem('thayhong_theme', next);
        }
      } catch (err) {}
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
        onNavigate={() => {
          setIsRegisterOpen(false);
          setIsTestOpen(false);
        }}
      />
      <main>
        <Hero
          onOpenRegister={() => handleOpenRegister()}
          onOpenTestModal={() => setIsTestOpen(true)}
        />
        {/* Ưu Điểm Vượt Trội Tại Thầy Hồng Dạy Lái */}
        <AboutTeacher onOpenRegister={() => handleOpenRegister()} />

        {/* 1. Các Khóa Đào Tạo Lái Xe Chuẩn GTVT */}
        <CoursePackages onSelectCourse={handleSelectCourse} />

        {/* 2. Các Gói Nâng Hạng Giấy Phép Lái Xe */}
        <UpgradePackages onSelectUpgrade={handleSelectCourse} />

        {/* 3. Đào Tạo & Cấp Chứng Chỉ Xe Nâng • Máy Xúc • Máy Cẩu */}
        <MachineryCertificates onSelectMachinery={handleSelectCourse} />

        {/* 4. Thi Thử Lý Thuyết Lái Xe Trực Tuyến */}
        <TheoryExam />

        {/* 5. Lộ Trình Đào Tạo 7 Bước Bài Bản */}
        <Roadmap onOpenRegister={() => handleOpenRegister()} />

        {/* 6. Hệ Thống Sân Tập & Xe Thực Hành */}
        <Facilities />

        {/* 8. Hình Ảnh Thầy Hồng Và Các Học Viên Thực Tế */}
        <StudentGallery onOpenRegister={() => handleOpenRegister()} />

        {/* 9. Học Viên Nói Gì Về Thầy Hồng? */}
        <Testimonials />

        {/* 10. Câu Hỏi Thường Gặp (FAQ) */}
        <FAQ />

        {/* 10. Kêu gọi hành động & Đăng ký tư vấn */}
        <CTASection onOpenRegister={() => handleOpenRegister()} />
      </main>
      <Footer onOpenLegal={(docKey) => setLegalDoc(docKey)} />

      {/* Sticky Mobile Floating Action Bar with Clear Phone Numbers */}
      <div className="mobile-bottom-bar">
        <a
          href="https://zalo.me/0336611194"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bottom-btn"
          title="Hotline / Zalo: 0336.611.194"
        >
          <Phone size={17} color="var(--primary)" />
          <span style={{ fontWeight: 800 }}>0336.611.194</span>
        </a>

        <button
          type="button"
          onClick={toggleTheme}
          className="mobile-bottom-btn"
          aria-label="Chuyển đổi giao diện sáng/tối"
          title={theme === 'dark' ? 'Chuyển sang nền Sáng' : 'Chuyển sang nền Tối'}
          style={{ flex: 0.85 }}
        >
          {theme === 'dark' ? (
            <Sun size={17} color="#FBBF24" />
          ) : (
            <Moon size={17} color="#3B82F6" />
          )}
          <span style={{ fontWeight: 800 }}>{theme === 'dark' ? 'Nền Sáng' : 'Nền Tối'}</span>
        </button>

        <button
          type="button"
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
        onClose={() => {
          setIsTestOpen(false);
          if (typeof window !== 'undefined' && (window.location.hash === '#test' || window.location.hash === '#thi-thu')) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
      />
      <LegalModal
        isOpen={!!legalDoc}
        initialDoc={legalDoc}
        onClose={() => {
          setLegalDoc(null);
          if (typeof window !== 'undefined' && window.location.hash && window.location.hash.includes('chinh-sach')) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
      />
    </div>
  );
}
