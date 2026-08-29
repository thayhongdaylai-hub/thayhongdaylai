import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ArrowRight, Shield, Zap, Sparkles, Users, Phone, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentImgIndex(prev => (prev + 1) % galleryPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, galleryPhotos.length]);

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
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section id="about-teacher" style={{
      position: 'relative',
      padding: '3.5rem 0 2.5rem 0',
      background: 'var(--gradient-hero)',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Glow Circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '15%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'var(--accent-emerald-glow)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'var(--accent-blue-glow)',
        filter: 'blur(120px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Teacher Introduction & Key Commitments */}
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '1rem', fontSize: '0.82rem' }}>
              <Sparkles size={15} />
              <span>Thầy Hồng Dạy Lái • 10+ Năm Kinh Nghiệm Đào Tạo</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.75rem, 5vw, 3.2rem)',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              THẦY HỒNG DẠY LÁI - <span className="text-gradient">UY TÍN - TẬN TÂM - CHẤT LƯỢNG</span>
            </h1>

            {/* Teacher Introduction Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 229, 153, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)',
              border: '1.5px solid var(--accent-emerald)',
              boxShadow: '0 8px 30px rgba(0, 229, 153, 0.18)',
              borderRadius: '1.25rem',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                fontSize: 'clamp(1rem, 3.5vw, 1.18rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                letterSpacing: '0.01em'
              }}>
                <Shield size={22} color="var(--accent-emerald)" />
                <span>TRUNG TÂM ĐÀO TẠO & SÁT HẠCH THẦY HỒNG</span>
              </div>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: 1.55,
                marginBottom: '0.85rem'
              }}>
                Với <strong>hơn 10 năm kinh nghiệm</strong> trực tiếp giảng dạy cho hơn <strong>850 học viên</strong>, Thầy Hồng cam kết dạy <strong>1-Thầy-1-Trò</strong> tận tâm, không quát mắng, kèm cặp từng học viên đến khi vững tay lái và đỗ sát hạch ngay lần đầu.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{
                  background: 'var(--gradient-emerald)',
                  color: '#051A10',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  boxShadow: '0 4px 12px var(--accent-emerald-glow)'
                }}>
                  <Zap size={15} fill="#051A10" color="#051A10" /> HỌC PHÍ TRỌN GÓI 100%
                </span>

                <span style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  color: '#FF5C5C',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <CheckCircle2 size={15} color="#FF5C5C" /> KHÔNG PHÁT SINH PHÍ
                </span>

                <span style={{
                  background: 'var(--accent-blue-glow)',
                  color: 'var(--accent-blue)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <Sparkles size={15} color="var(--accent-blue)" /> 1 THẦY - 1 TRÒ - 1 XE
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                onClick={() => onOpenRegister && onOpenRegister({ note: 'Đăng Ký Ngay Hôm Nay - Giảm Ngay 1.000.000' })}
                className="btn btn-primary hero-cta-btn"
                style={{
                  padding: '0.9rem 1.6rem',
                  fontSize: 'clamp(0.92rem, 3.5vw, 1.05rem)',
                  fontWeight: 800,
                  width: '100%',
                  maxWidth: '480px'
                }}
              >
                <span>ĐĂNG KÝ NGAY - GIẢM 1.000.000Đ</span>
                <ArrowRight size={18} color="#051A10" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Card (Swipeable Photo Gallery) */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-card"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                padding: '0.5rem',
                boxShadow: 'var(--shadow-lg)',
                borderRadius: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                touchAction: 'pan-y'
              }}
            >
              {/* Image Frame with smart backdrop blur */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(280px, 60vw, 440px)',
                borderRadius: '1.15rem',
                overflow: 'hidden',
                background: '#0B0E14',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Blurred backdrop fill */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${galleryPhotos[currentImgIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(25px) brightness(0.55)',
                  transform: 'scale(1.15)',
                  zIndex: 0
                }}></div>

                {/* Main sharp image */}
                <img
                  key={currentImgIndex}
                  src={galleryPhotos[currentImgIndex]}
                  alt="Hình ảnh thực tế Thầy Hồng và học viên đào tạo sát hạch"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    userSelect: 'none',
                    WebkitUserDrag: 'none'
                  }}
                />

                {/* Left / Right Nav Arrows */}
                <button
                  onClick={handlePrev}
                  aria-label="Ảnh trước"
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Ảnh kế tiếp"
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Bottom Gallery Counter Pill */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  zIndex: 10,
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <Camera size={13} color="var(--accent-emerald)" />
                  <span>Ảnh Thực Tế Thầy Hồng • {currentImgIndex + 1} / {galleryPhotos.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="glass-card stats-row" style={{
          marginTop: '2.5rem',
          padding: '1.25rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          textAlign: 'center'
        }}>
          {[
            { value: '10+ Năm', label: 'Kinh nghiệm đào tạo', icon: Award },
            { value: '850+', label: 'Học viên tốt nghiệp', icon: Users },
            { value: '99%', label: 'Tỷ lệ thi đỗ lần đầu', icon: Shield },
            { value: '100%', label: 'Học phí trọn gói', icon: Zap }
          ].map((stat, idx) => {
            return (
              <div key={idx} className="stat-item" style={{
                borderRight: idx < 3 ? '1px solid var(--border-color)' : 'none',
                paddingRight: idx < 3 ? '1rem' : '0'
              }}>
                <div style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.1rem)',
                  fontFamily: "'Google Sans', 'Quicksand', sans-serif",
                  fontWeight: 800,
                  color: 'var(--accent-emerald)',
                  marginBottom: '0.1rem'
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'clamp(0.78rem, 2.5vw, 0.88rem)', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
          .stat-item:nth-child(even) { border-right: none !important; }
        }
        @media (max-width: 576px) {
          .hero-cta-btn { width: 100% !important; justify-content: center; }
          .stats-row { padding: 1rem !important; gap: 0.75rem !important; }
        }
      `}</style>
    </section>
  );
}

