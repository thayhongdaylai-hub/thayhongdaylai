import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ArrowRight,
  ShieldCheck,
  Loader2
} from 'lucide-react';
import { STUDENT_PHOTOS } from '../data/galleryData';

export default function StudentGallery({ onOpenRegister }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isLightboxLoading, setIsLightboxLoading] = useState(true);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  const thumbStripRef = useRef(null);
  const isInitialMount = useRef(true);

  // Preload neighboring images into browser cache for instant transitions
  useEffect(() => {
    if (!STUDENT_PHOTOS || STUDENT_PHOTOS.length === 0) return;
    const total = STUDENT_PHOTOS.length;
    const nextIdx1 = (currentIndex + 1) % total;
    const nextIdx2 = (currentIndex + 2) % total;
    const prevIdx1 = (currentIndex - 1 + total) % total;

    const indicesToPreload = [currentIndex, nextIdx1, nextIdx2, prevIdx1];
    indicesToPreload.forEach((idx) => {
      const item = STUDENT_PHOTOS[idx];
      if (item) {
        if (item.thumb) {
          const imgT = new Image();
          imgT.src = item.thumb;
        }
        if (item.src) {
          const imgF = new Image();
          imgF.src = item.src;
        }
      }
    });
  }, [currentIndex]);

  // Reset loading state when currentIndex changes
  useEffect(() => {
    setIsImageLoading(true);
    setIsLightboxLoading(true);
  }, [currentIndex]);

  // Auto slide every 5.5 seconds (only when not paused and lightbox is closed)
  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STUDENT_PHOTOS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen]);

  // Safely scroll only the thumbnail strip container horizontally without scrolling the window
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const container = thumbStripRef.current;
    if (container && container.children && container.children[currentIndex]) {
      const activeThumb = container.children[currentIndex];
      const targetScroll =
        activeThumb.offsetLeft - container.clientWidth / 2 + activeThumb.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? STUDENT_PHOTOS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % STUDENT_PHOTOS.length);
  }, []);

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
  }, [lightboxOpen, handleNext, handlePrev]);

  // Touch Swipe for mobile with vertical scroll preservation
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX !== null && touchEndX !== null && touchStartY !== null && touchEndY !== null) {
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;
      // Trigger horizontal swipe only if horizontal delta is larger than vertical delta
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
    setTouchEndX(null);
    setTouchEndY(null);
  };

  const currentPhoto = STUDENT_PHOTOS[currentIndex] || STUDENT_PHOTOS[0];

  return (
    <section
      id="student-gallery"
      style={{
        position: 'relative',
        padding: '4rem 0 3.5rem 0',
        background: 'var(--bg-main)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <div className="container" style={{ maxWidth: '1120px' }}>
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Camera size={15} />
            <span>Kho Ảnh Thực Tế ({STUDENT_PHOTOS.length} Ảnh)</span>
          </div>

          <h2
            className="section-title"
            style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.3rem)', marginBottom: 0 }}
          >
            Hình Ảnh Thầy Hồng Và Các <span className="text-gradient">Học Viên Thực Tế</span>
          </h2>
        </div>

        {/* Single Slider Frame Card */}
        <div
          className="modern-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            padding: 'clamp(0.5rem, 2vw, 0.85rem)',
            borderRadius: '20px',
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
              height: 'clamp(280px, 58vw, 520px)',
              borderRadius: '14px',
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
            {/* Ambient Background Gradient */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  'radial-gradient(circle at center, rgba(30, 58, 138, 0.4) 0%, #0B1120 100%)',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            />

            {/* Low-res Fast Thumbnail Placeholder (loads instantly, guarantees NO blank box) */}
            <img
              src={currentPhoto.thumb || currentPhoto.src}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: isImageLoading ? 'blur(4px)' : 'none',
                opacity: isImageLoading ? 0.9 : 0,
                transition: 'opacity 0.3s ease, filter 0.3s ease',
                zIndex: 2,
                pointerEvents: 'none'
              }}
            />

            {/* High-res Main Foreground Image */}
            <img
              src={currentPhoto.src}
              alt={`Học viên Thầy Hồng ${currentIndex + 1}`}
              onLoad={() => setIsImageLoading(false)}
              onError={(e) => {
                // Fallback to thumb if main image fails to load
                if (currentPhoto.thumb && e.target.src !== currentPhoto.thumb) {
                  e.target.src = currentPhoto.thumb;
                }
                setIsImageLoading(false);
              }}
              style={{
                position: 'relative',
                zIndex: 3,
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                transition: 'opacity 0.3s ease',
                opacity: isImageLoading ? 0 : 1
              }}
            />

            {/* Subtle Loading Spinner when fetching high-res image */}
            {isImageLoading && (
              <div
                style={{
                  position: 'absolute',
                  zIndex: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none'
                }}
              >
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(6px)',
                    padding: '0.65rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60A5FA',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
                  }}
                >
                  <Loader2 size={22} className="spin-animation" />
                </div>
              </div>
            )}

            {/* Top Left: Zoom Button */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Maximize2 size={13} />
                <span>Phóng to</span>
              </div>
            </div>

            {/* Top Right: Counter Badge */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 800
                }}
              >
                {currentIndex + 1} / {STUDENT_PHOTOS.length}
              </div>
            </div>

            {/* Navigation Arrows: Left & Right */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                width: '42px',
                height: '42px',
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
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                width: '42px',
                height: '42px',
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
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Horizontal Thumbnails Carousel Strip across full card width */}
          <div
            ref={thumbStripRef}
            className="no-scrollbar"
            style={{
              display: 'flex',
              gap: '0.45rem',
              overflowX: 'auto',
              padding: '0.75rem 0.2rem 0.2rem 0.2rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
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
                  width: '56px',
                  height: '56px',
                  minWidth: '56px',
                  flexShrink: 0,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border:
                    currentIndex === idx
                      ? '2.5px solid var(--primary)'
                      : '1px solid var(--border-color)',
                  padding: 0,
                  background: '#0B1120',
                  cursor: 'pointer',
                  opacity: currentIndex === idx ? 1 : 0.65,
                  transform: currentIndex === idx ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: currentIndex === idx ? 'var(--shadow-primary)' : 'none',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                aria-label={`Xem ảnh ${idx + 1}`}
              >
                <img
                  src={photo.thumb || photo.src}
                  alt={`Học viên ${idx + 1}`}
                  width="56"
                  height="56"
                  onError={(e) => {
                    if (e.target.src !== photo.src) {
                      e.target.src = photo.src;
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div
          style={{
            background:
              'linear-gradient(135deg, rgba(29, 78, 216, 0.12) 0%, rgba(245, 158, 11, 0.08) 100%)',
            border: '1.5px solid var(--border-color)',
            borderRadius: '20px',
            padding: '1.75rem 1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.35rem'
              }}
            >
              <ShieldCheck size={20} color="var(--primary)" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>
                Bạn Muốn Là Học Viên Tiếp Theo Vững Tay Lái &amp; Đậu Bằng?
              </h3>
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Cam kết đồng hành 1-Kèm-1 Văn minh - Lịch sự, hỗ trợ đưa đón và học phí trọn gói minh
              bạch 100%.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              width: '100%',
              maxWidth: '460px'
            }}
          >
            <button
              onClick={() =>
                onOpenRegister && onOpenRegister({ title: 'Đăng Ký Học Lái Xe Thực Tế' })
              }
              className="btn btn-primary"
              style={{
                flex: 1,
                padding: '0.85rem 1.25rem',
                fontSize: '0.92rem',
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
                justifyContent: 'center',
                gap: '0.45rem',
                padding: '0.85rem 1.25rem',
                fontSize: '0.92rem',
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
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
              width: '44px',
              height: '44px',
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
            <X size={24} />
          </button>

          {/* Photo Counter */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              color: '#FFFFFF',
              background: 'rgba(0,0,0,0.6)',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 700
            }}
          >
            {currentIndex + 1} / {STUDENT_PHOTOS.length}
          </div>

          {/* Main Fullscreen Image Frame */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '94vw',
              maxHeight: '84vh',
              width: '100%',
              height: '84vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default'
            }}
          >
            {/* Low-res background for lightbox */}
            <img
              src={currentPhoto.thumb || currentPhoto.src}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                maxWidth: '100%',
                maxHeight: '84vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                filter: isLightboxLoading ? 'blur(4px)' : 'none',
                opacity: isLightboxLoading ? 0.9 : 0,
                transition: 'opacity 0.25s ease',
                zIndex: 1
              }}
            />

            {/* High-res Lightbox Image */}
            <img
              src={currentPhoto.src}
              alt={`Học viên Thầy Hồng ${currentIndex + 1}`}
              onLoad={() => setIsLightboxLoading(false)}
              onError={(e) => {
                if (currentPhoto.thumb && e.target.src !== currentPhoto.thumb) {
                  e.target.src = currentPhoto.thumb;
                }
                setIsLightboxLoading(false);
              }}
              style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '100%',
                maxHeight: '84vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '14px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.85)',
                transition: 'opacity 0.25s ease',
                opacity: isLightboxLoading ? 0 : 1
              }}
            />

            {/* Spinner for lightbox */}
            {isLightboxLoading && (
              <div
                style={{
                  position: 'absolute',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none'
                }}
              >
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(6px)',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    color: '#60A5FA'
                  }}
                >
                  <Loader2 size={26} className="spin-animation" />
                </div>
              </div>
            )}
          </div>

          {/* Prev / Next controls */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
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
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
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
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  );
}
