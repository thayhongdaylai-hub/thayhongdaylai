import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, Users, Phone, ChevronLeft, ChevronRight, Camera, Star, Maximize2, X } from 'lucide-react';
import { STUDENT_PHOTOS } from '../data/galleryData';

export default function Hero({ onOpenRegister }) {
  const galleryPhotos = STUDENT_PHOTOS.map(p => p.src);

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const interval = setInterval(() => {
      setCurrentImgIndex(prev => (prev + 1) % galleryPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, lightboxOpen, galleryPhotos.length]);

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

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex(prev => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex(prev => (prev + 1) % galleryPhotos.length);
  };

  // Touch Swipe for mobile phones
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
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section style={{
      position: 'relative',
      padding: '4rem 0 3.5rem 0',
      background: 'var(--gradient-hero)',
      borderBottom: '1px solid var(--border-color)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1540px' }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.95fr) minmax(0, 1.15fr)',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Headline, Subtitle & CTAs */}
          <div style={{ width: '100%', minWidth: 0 }}>
            {/* Trust Badge */}
            <div
              className="badge badge-gold"
              style={{
                marginBottom: '1.15rem',
                fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                padding: '0.35rem 0.75rem',
                maxWidth: '100%',
                whiteSpace: 'normal',
                lineHeight: 1.35,
                display: 'inline-flex'
              }}
            >
              <Sparkles size={15} style={{ flexShrink: 0 }} />
              <span>Trung Tâm Đào Tạo & Sát Hạch GPLX Chuẩn GTVT</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(1.85rem, 6.5vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              marginBottom: '0.85rem',
              lineHeight: 1.2,
              wordBreak: 'break-word'
            }}>
              <span style={{ color: 'var(--text-main)' }}>THẦY HỒNG </span>
              <span className="text-gradient">DẠY LÁI</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(0.92rem, 3.2vw, 1.15rem)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              lineHeight: 1.55,
              marginBottom: '1.25rem',
              maxWidth: '560px'
            }}>
              Đào tạo lái xe ô tô và xe máy – Hướng dẫn tận tâm, dễ hiểu, thực tế
            </p>

            {/* Key Advantages Bullet List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '1.75rem',
              width: '100%'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong style={{ color: 'var(--text-main)' }}>1-Kèm-1 Tận Tâm:</strong> Văn minh - Lịch sự, kèm cặp tỉ mỉ từng kỹ năng.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong style={{ color: 'var(--text-main)' }}>Học Phí Minh Bạch 100%:</strong> Hợp đồng rõ ràng, cam kết không phát sinh.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong style={{ color: 'var(--text-main)' }}>Tỷ Lệ Thi Đỗ 99%:</strong> Bộ mẹo 600 câu + 120 tình huống mô phỏng độc quyền.</span>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="hero-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem', width: '100%' }}>
              <button
                onClick={() => onOpenRegister && onOpenRegister({ title: 'Đăng Ký Học Lái Xe 2026' })}
                className="btn btn-primary"
                style={{
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.96rem',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem'
                }}
              >
                <span>ĐĂNG KÝ HỌC NGAY</span>
                <ArrowRight size={17} />
              </button>

              <a
                href="#theory-exam"
                className="btn btn-gold"
                style={{
                  padding: '0.85rem 1.45rem',
                  fontSize: '0.96rem',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-gold)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem'
                }}
              >
                <span>THI THỬ LÝ THUYẾT</span>
                <Zap size={17} />
              </a>
            </div>

            {/* Quick Contact Line: Phone Contacts */}
            <div className="hero-phone-box" style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.45rem',
              padding: '0.45rem 0.75rem',
              borderRadius: '12px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              maxWidth: '100%',
              marginBottom: '1.25rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--primary)',
                fontWeight: 800,
                fontSize: '0.86rem',
                flexShrink: 0
              }}>
                <Phone size={15} />
                <span>GỌI TƯ VẤN:</span>
              </div>
              <div className="hero-phone-links" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', fontSize: '0.88rem' }}>
                <a
                  href="https://zalo.me/0983406221"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-main)',
                    fontWeight: 800,
                    textDecoration: 'none',
                    padding: '0.2rem 0.45rem',
                    borderRadius: '6px',
                    background: 'var(--bg-input)'
                  }}
                  title="Nhắn Zalo Thầy Hồng"
                >
                  0983.406.221
                </a>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <a
                  href="https://zalo.me/0336611194"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-main)',
                    fontWeight: 800,
                    textDecoration: 'none',
                    padding: '0.2rem 0.45rem',
                    borderRadius: '6px',
                    background: 'var(--bg-input)'
                  }}
                  title="Nhắn Zalo Tư Vấn"
                >
                  0336.611.194
                </a>
              </div>
            </div>

            {/* Rating summary */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: 'clamp(0.8rem, 2.7vw, 0.88rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.4
            }}>
              <div style={{ display: 'flex', gap: '2px', color: '#F59E0B', flexShrink: 0 }}>
                <Star size={15} fill="#F59E0B" />
                <Star size={15} fill="#F59E0B" />
                <Star size={15} fill="#F59E0B" />
                <Star size={15} fill="#F59E0B" />
                <Star size={15} fill="#F59E0B" />
              </div>
              <span><strong>4.9/5.0</strong> đánh giá xuất sắc từ hơn <strong>850+ học viên</strong></span>
            </div>
          </div>

          {/* Right Column: Wide & Expansive Outer Frame (Visible on Desktop/Tablet, Hidden on Mobile for clean text focus) */}
          <div className="hero-gallery-col" style={{ position: 'relative', width: '100%' }}>
            <div className="modern-card" style={{
              padding: '0.85rem',
              borderRadius: '22px',
              boxShadow: 'var(--shadow-lg)',
              background: 'var(--bg-card)',
              width: '100%'
            }}>
              {/* Photo Box spanning full width of the wide frame */}
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={() => setLightboxOpen(true)}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(340px, 32vw, 420px)',
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
                {/* Ambient Blurred Background to Fill the Entire Wide Frame Seamlessly */}
                <img
                  src={galleryPhotos[currentImgIndex]}
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

                {/* Main Foreground Image Displayed in Full Detail */}
                <img
                  src={galleryPhotos[currentImgIndex]}
                  alt="Thầy Hồng Dạy Lái Xe Thực Tế"
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

                {/* Top Left: Zoom / Fullscreen Button */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  zIndex: 10,
                  background: 'rgba(15, 23, 42, 0.8)',
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
                  <Maximize2 size={14} />
                  <span>Phóng to</span>
                </div>

                {/* Top Right: Counter Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  zIndex: 10,
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 800
                }}>
                  {currentImgIndex + 1} / {galleryPhotos.length}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '12px',
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
                    boxShadow: 'var(--shadow-md)',
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
                    right: '12px',
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
                    boxShadow: 'var(--shadow-md)',
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
                className="no-scrollbar"
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  overflowX: 'auto',
                  padding: '0.55rem 0.2rem 0.2rem 0.2rem',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {galleryPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(idx); }}
                    style={{
                      width: '58px',
                      height: '58px',
                      flexShrink: 0,
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: currentImgIndex === idx ? '2.5px solid var(--primary)' : '1px solid var(--border-color)',
                      padding: 0,
                      background: '#0B1120',
                      cursor: 'pointer',
                      opacity: currentImgIndex === idx ? 1 : 0.6,
                      transform: currentImgIndex === idx ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: currentImgIndex === idx ? 'var(--shadow-primary)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                    aria-label={`Xem ảnh ${idx + 1}`}
                  >
                    <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
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
              padding: '1.5rem',
              cursor: 'zoom-out'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
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

            {/* Counter */}
            <div style={{
              position: 'absolute',
              top: '25px',
              left: '25px',
              color: '#FFFFFF',
              fontSize: '1.05rem',
              fontWeight: 800,
              background: 'rgba(0,0,0,0.6)',
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px'
            }}>
              {currentImgIndex + 1} / {galleryPhotos.length}
            </div>

            {/* Main Fullscreen Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '92vw',
                maxHeight: '84vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default'
              }}
            >
              <img
                src={galleryPhotos[currentImgIndex]}
                alt="Thầy Hồng Dạy Lái Thực Tế"
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
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '54px',
                height: '54px',
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
              <ChevronLeft size={34} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '54px',
                height: '54px',
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
              <ChevronRight size={34} />
            </button>
          </div>
        )}

        {/* 4 Stats Cards */}
        <div className="hero-stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '1.25rem',
          marginTop: '3.5rem'
        }}>
          <div className="modern-card hero-stat-card" style={{ padding: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'var(--primary-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Award size={22} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>10+ Năm</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Kinh nghiệm</div>
            </div>
          </div>

          <div className="modern-card hero-stat-card" style={{ padding: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'var(--accent-gold-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Users size={22} color="var(--accent-gold-dark)" />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>850+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Đã nhận bằng</div>
            </div>
          </div>

          <div className="modern-card hero-stat-card" style={{ padding: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'var(--accent-emerald-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={22} color="var(--accent-emerald)" />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>99%</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Tỷ lệ thi đỗ</div>
            </div>
          </div>

          <div className="modern-card hero-stat-card" style={{ padding: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'var(--primary-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Zap size={22} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>1 Kèm 1</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Văn minh - Tận tâm</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .hero-gallery-col {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            margin-top: 1.75rem !important;
          }
          .hero-stat-card {
            padding: 0.9rem 0.75rem !important;
          }
        }
        @media (max-width: 540px) {
          .hero-cta-group {
            flex-direction: column !important;
            gap: 0.65rem !important;
          }
          .hero-cta-group .btn {
            width: 100% !important;
            justify-content: center !important;
            padding: 0.85rem 1rem !important;
          }
          .hero-phone-box {
            width: 100% !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </section>
  );
}
