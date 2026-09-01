import React, { useState, useEffect, useRef } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { STUDENT_PHOTOS } from '../data/galleryData';

export default function StudentGallery({ onOpenRegister }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const thumbStripRef = useRef(null);

  // Auto slide every 4.5 seconds
  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % STUDENT_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen]);

  // Auto scroll active thumbnail into view
  useEffect(() => {
    if (thumbStripRef.current) {
      const activeThumb = thumbStripRef.current.children[currentIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
  }, [currentIndex]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? STUDENT_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex(prev => (prev + 1) % STUDENT_PHOTOS.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Touch Swipe for mobile
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const currentPhoto = STUDENT_PHOTOS[currentIndex] || STUDENT_PHOTOS[0];

  return (
    <section id="student-gallery" style={{
      position: 'relative',
      padding: '4.5rem 0 4rem 0',
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container" style={{ maxWidth: '1120px' }}>
        
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Camera size={15} />
            <span>Kho Ảnh Thực Tế</span>
          </div>

          <h2 className="section-title" style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.3rem)', marginBottom: 0 }}>
            Hình Ảnh Thầy Hồng Và Các <span className="text-gradient">Học Viên Thực Tế</span>
          </h2>
        </div>

        {/* Single Slider Frame Card */}
        <div
          className="modern-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            padding: '0.85rem',
            borderRadius: '22px',
            boxShadow: 'var(--shadow-lg)',
            background: 'var(--bg-card)',
            marginBottom: '2.5rem'
          }}
        >
          {/* Main Photo Slider Box */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => setLightboxOpen(true)}
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(330px, 48vw, 520px)',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#0B1120',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-in'
            }}
            title="Bấm để xem ảnh phóng to toàn màn hình"
          >
            {/* Ambient Blurred Background to Fill the Entire Frame */}
            <img
              src={currentPhoto.src}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(32px) brightness(0.55)',
                transform: 'scale(1.25)',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />

            {/* Main Foreground Image */}
            <img
              src={currentPhoto.src}
              alt=""
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.55))'
              }}
            />

            {/* Top Left: Zoom Button */}
            <div style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '0.4rem 0.8rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Maximize2 size={13} />
                <span>Phóng to</span>
              </div>
            </div>

            {/* Top Right: Counter Badge */}
            <div style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <div style={{
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 800
              }}>
                {currentIndex + 1} / {STUDENT_PHOTOS.length}
              </div>
            </div>

            {/* Navigation Arrows: Left & Right */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                top: '50%',
                left: '12px',
                transform: 'translateY(-50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                color: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                zIndex: 20,
                transition: 'all 0.2s ease'
              }}
              aria-label="Ảnh trước"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '12px',
                transform: 'translateY(-50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                color: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                zIndex: 20,
                transition: 'all 0.2s ease'
              }}
              aria-label="Ảnh kế tiếp"
            >
              <ChevronRight size={26} />
            </button>
          </div>

          {/* Horizontal Thumbnails Carousel Strip across full card width */}
          <div
            ref={thumbStripRef}
            className="no-scrollbar"
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              padding: '0.75rem 0.2rem 0.2rem 0.2rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {STUDENT_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                style={{
                  width: '60px',
                  height: '60px',
                  flexShrink: 0,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: currentIndex === idx ? '2.5px solid var(--primary)' : '1px solid var(--border-color)',
                  padding: 0,
                  background: '#0B1120',
                  cursor: 'pointer',
                  opacity: currentIndex === idx ? 1 : 0.6,
                  transform: currentIndex === idx ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: currentIndex === idx ? 'var(--shadow-primary)' : 'none',
                  transition: 'all 0.2s ease'
                }}
                aria-label={`Xem ảnh ${idx + 1}`}
              >
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(29, 78, 216, 0.12) 0%, rgba(245, 158, 11, 0.08) 100%)',
          border: '1.5px solid var(--border-color)',
          borderRadius: '20px',
          padding: '1.85rem 2.25rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <ShieldCheck size={20} color="var(--primary)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
                Bạn Muốn Là Học Viên Tiếp Theo Vững Tay Lái &amp; Đậu Bằng?
              </h3>
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Cam kết đồng hành 1-Kèm-1 Văn minh - Lịch sự, hỗ trợ đưa đón và học phí trọn gói minh bạch 100%.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenRegister && onOpenRegister({ title: 'Đăng Ký Học Lái Xe Thực Tế' })}
              className="btn btn-primary"
              style={{
                padding: '0.85rem 1.65rem',
                fontSize: '0.95rem',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-primary)'
              }}
            >
              <span>ĐĂNG KÝ HỌC NGAY</span>
              <ArrowRight size={17} />
            </button>
            <a
              href="https://www.facebook.com/share/1GuWF1te7x/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.85rem 1.45rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '12px',
                background: '#1877F2',
                color: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(24, 119, 242, 0.4)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>FANPAGE THẦY HỒNG</span>
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            background: 'rgba(11, 17, 32, 0.96)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            cursor: 'zoom-out'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 100000
            }}
            aria-label="Đóng xem to"
          >
            <X size={26} />
          </button>

          {/* Photo Counter */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: '#FFFFFF',
            background: 'rgba(0,0,0,0.6)',
            padding: '0.45rem 1.1rem',
            borderRadius: '9999px',
            fontSize: '0.95rem',
            fontWeight: 700
          }}>
            {currentIndex + 1} / {STUDENT_PHOTOS.length}
          </div>

          {/* Main Fullscreen Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '84vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default'
            }}
          >
            <img
              src={currentPhoto.src}
              alt=""
              style={{
                maxWidth: '100%',
                maxHeight: '84vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 25px 65px rgba(0, 0, 0, 0.85)'
              }}
            />
          </div>

          {/* Prev / Next controls */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.92)',
              border: 'none',
              color: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              zIndex: 100000
            }}
            aria-label="Ảnh trước"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.92)',
              border: 'none',
              color: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              zIndex: 100000
            }}
            aria-label="Ảnh kế tiếp"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
