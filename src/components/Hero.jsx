import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, Users, Phone, ChevronLeft, ChevronRight, Camera, Star, Maximize2, X } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  const galleryPhotos = [
    '/images/gallery/1788023503238_204090055134776357_2543730497231762877_7e9b4c78c6268845613a8d2bae8b2879.jpg',
    '/images/gallery/1788023044901_204090055134776357_2543730497231762877_f125425a703ff6d37e4c69f3cea1fe18.jpg',
    '/images/gallery/1788023092366_204090055134776357_2543730497231762877_4ce09257c0d1e631a7c2f92fafbcd3fd.jpg',
    '/images/gallery/1788023503206_204090055134776357_2543730497231762877_37abaa60a3ba5b83b39f01f2a9524d72.jpg',
    '/images/gallery/1788023503256_204090055134776357_2543730497231762877_19c1ab1ce36d2bcdf44f6ee078f73493.jpg',
    '/images/gallery/1788023503271_204090055134776357_2543730497231762877_e8ef0f5da7a95b6e2135f83fe825cf77.jpg',
    '/images/gallery/1788023503285_204090055134776357_2543730497231762877_2c50792b0d9eaaad32cb91b168df6791.jpg',
    '/images/gallery/1788023503297_204090055134776357_2543730497231762877_905f27ca86aaa9cb25ff6dbd08590b86.jpg',
    '/images/gallery/1788023503306_204090055134776357_2543730497231762877_a3c8cb1e6805851149a5ec8fbcf64ea6.jpg',
    '/images/gallery/1788023503316_204090055134776357_2543730497231762877_1cbe969375d62ca3e1b26b1be18aad53.jpg',
    '/images/gallery/1788023503325_204090055134776357_2543730497231762877_fa8aa721b5d52f77fcef44dcec3c66cf.jpg',
    '/images/gallery/1788023503334_204090055134776357_2543730497231762877_7e7222968d3e4bb9784bab22a2d52ac4.jpg',
    '/images/gallery/1788023503345_204090055134776357_2543730497231762877_e0298ec31f78821d6f0ce188cba5c0f0.jpg',
    '/images/gallery/1788023503353_204090055134776357_2543730497231762877_d2f1d92cb9917bf9f7eecad5445860f5.jpg',
    '/images/gallery/1788023503361_204090055134776357_2543730497231762877_8ca0d4abbfd8b237b3bf5551d0c8242a.jpg',
    '/images/gallery/1788023503369_204090055134776357_2543730497231762877_08d18a2acc93f007ff92a6b2b5e53a8c.jpg',
    '/images/gallery/1788023503377_204090055134776357_2543730497231762877_82ec91416f316d4c110aab892f0c97db.jpg',
    '/images/gallery/1788023503385_204090055134776357_2543730497231762877_5ce025c095c0c6a37d52cb09dd45a1e6.jpg'
  ];

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
          <div>
            {/* Trust Badge */}
            <div className="badge badge-gold" style={{ marginBottom: '1.25rem', fontSize: '0.85rem' }}>
              <Sparkles size={15} />
              <span>Trung Tâm Đào Tạo & Sát Hạch GPLX Chuẩn GTVT</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              lineHeight: 1.18
            }}>
              <span style={{ color: 'var(--text-main)' }}>THẦY HỒNG </span>
              <span className="text-gradient">DẠY LÁI</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              maxWidth: '560px'
            }}>
              Đào tạo lái xe ô tô và xe máy – Hướng dẫn tận tâm, dễ hiểu, thực tế
            </p>

            {/* Key Advantages Bullet List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span><strong>1-Kèm-1 Tận Tâm:</strong> Văn minh - Lịch sự , kèm cặp tỉ mỉ từng kỹ năng.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span><strong>Học Phí Minh Bạch 100%:</strong> Hợp đồng rõ ràng, cam kết không phát sinh.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span><strong>Tỷ Lệ Thi Đỗ 99%:</strong> Bộ mẹo 600 câu + 120 tình huống mô phỏng độc quyền.</span>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => onOpenRegister && onOpenRegister({ title: 'Đăng Ký Học Lái Xe 2026' })}
                className="btn btn-primary"
                style={{
                  padding: '0.95rem 1.75rem',
                  fontSize: '1.02rem',
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-primary)'
                }}
              >
                <span>ĐĂNG KÝ HỌC NGAY</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#theory-exam"
                className="btn btn-gold"
                style={{
                  padding: '0.95rem 1.6rem',
                  fontSize: '1.02rem',
                  borderRadius: '14px',
                  boxShadow: 'var(--shadow-gold)',
                  textDecoration: 'none'
                }}
              >
                <span>THI THỬ LÝ THUYẾT</span>
                <Zap size={18} />
              </a>
            </div>

            {/* Quick Contact Line: Phone & Fanpage */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.85rem'
            }}>
              {/* Phone Contacts */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.5rem',
                borderRadius: '12px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--primary)',
                  fontWeight: 800,
                  fontSize: '0.92rem'
                }}>
                  <Phone size={16} />
                  <span>GỌI TƯ VẤN:</span>
                </div>
                <a href="https://zalo.me/0983406221" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: 800, textDecoration: 'none' }}>0983.406.221</a>
                <span style={{ color: 'var(--text-light)' }}>•</span>
                <a href="https://zalo.me/0336611194" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: 800, textDecoration: 'none' }}>0336.611.194</a>
              </div>
            </div>

            {/* Rating summary */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '1.75rem',
              fontSize: '0.88rem',
              color: 'var(--text-muted)'
            }}>
              <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                <Star size={16} fill="#F59E0B" />
                <Star size={16} fill="#F59E0B" />
                <Star size={16} fill="#F59E0B" />
                <Star size={16} fill="#F59E0B" />
                <Star size={16} fill="#F59E0B" />
              </div>
              <span><strong>4.9/5.0</strong> đánh giá xuất sắc từ hơn <strong>850+ học viên</strong></span>
            </div>
          </div>

          {/* Right Column: Wide & Expansive Outer Frame */}
          <div style={{ position: 'relative', width: '100%' }}>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '1.25rem',
          marginTop: '3.5rem'
        }}>
          <div className="modern-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'var(--primary-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Award size={24} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>10+ Năm</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Kinh nghiệm đào tạo</div>
            </div>
          </div>

          <div className="modern-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'var(--accent-gold-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Users size={24} color="var(--accent-gold-dark)" />
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>850+</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Học viên đã nhận bằng</div>
            </div>
          </div>

          <div className="modern-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'var(--accent-emerald-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={24} color="var(--accent-emerald)" />
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>99%</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Tỷ lệ đỗ kỳ sát hạch</div>
            </div>
          </div>

          <div className="modern-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'var(--primary-tint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Zap size={24} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.1 }}>1 Kèm 1</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Văn minh & Lịch sự</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
