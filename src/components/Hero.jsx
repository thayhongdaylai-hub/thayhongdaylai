import React, { useState, useEffect, useRef } from 'react';
import { Award, CheckCircle2, ArrowRight, Shield, Zap, Sparkles, Users, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const HERO_GALLERY_IMAGES = [
  { src: '/images/gallery/1788023044901_204090055134776357_2543730497231762877_f125425a703ff6d37e4c69f3cea1fe18.jpg', title: 'Thầy Hồng hướng dẫn học viên thực hành xe tập lái' },
  { src: '/images/gallery/1788023092366_204090055134776357_2543730497231762877_4ce09257c0d1e631a7c2f92fafbcd3fd.jpg', title: 'Thực hành lái xe sa hình thi sát hạch' },
  { src: '/images/gallery/1788023503206_204090055134776357_2543730497231762877_37abaa60a3ba5b83b39f01f2a9524d72.jpg', title: 'Kèm lái 1 thầy 1 trò tận tâm' },
  { src: '/images/gallery/1788023503238_204090055134776357_2543730497231762877_7e9b4c78c6268845613a8d2bae8b2879.jpg', title: 'Học viên nhận bằng lái sau kỳ thi sát hạch' },
  { src: '/images/gallery/1788023503256_204090055134776357_2543730497231762877_19c1ab1ce36d2bcdf44f6ee078f73493.jpg', title: 'Đào tạo kỹ năng lái xe thực chiến an toàn' },
  { src: '/images/gallery/1788023503271_204090055134776357_2543730497231762877_e8ef0f5da7a95b6e2135f83fe825cf77.jpg', title: 'Sân tập lái xe tiêu chuẩn sát hạch' },
  { src: '/images/gallery/1788023503285_204090055134776357_2543730497231762877_2c50792b0d9eaaad32cb91b168df6791.jpg', title: 'Dàn xe tập lái đời mới có máy lạnh' },
  { src: '/images/gallery/1788023503297_204090055134776357_2543730497231762877_905f27ca86aaa9cb25ff6dbd08590b86.jpg', title: 'Học viên tự tin vững tay lái đường phố' },
  { src: '/images/gallery/1788023503306_204090055134776357_2543730497231762877_a3c8cb1e6805851149a5ec8fbcf64ea6.jpg', title: 'Thầy Hồng tận tình chỉ dẫn từng kỹ thuật' },
  { src: '/images/gallery/1788023503316_204090055134776357_2543730497231762877_1cbe969375d62ca3e1b26b1be18aad53.jpg', title: 'Hình ảnh thực tế lớp học lái xe Thầy Hồng' },
  { src: '/images/gallery/1788023503325_204090055134776357_2543730497231762877_fa8aa721b5d52f77fcef44dcec3c66cf.jpg', title: 'Không khí buổi học sôi nổi, nhiệt tình' },
  { src: '/images/gallery/1788023503334_204090055134776357_2543730497231762877_7e7222968d3e4bb9784bab22a2d52ac4.jpg', title: 'Thực hành bài thi lùi chuồng & ghép ngang' },
  { src: '/images/gallery/1788023503345_204090055134776357_2543730497231762877_e0298ec31f78821d6f0ce188cba5c0f0.jpg', title: 'Xe tập lái được bảo dưỡng định kỳ an toàn' },
  { src: '/images/gallery/1788023503353_204090055134776357_2543730497231762877_d2f1d92cb9917bf9f7eecad5445860f5.jpg', title: 'Học viên vui vẻ nhận bằng tốt nghiệp' },
  { src: '/images/gallery/1788023503361_204090055134776357_2543730497231762877_8ca0d4abbfd8b237b3bf5551d0c8242a.jpg', title: 'Hỗ trợ ôn thi lý thuyết và thực hành 100%' },
  { src: '/images/gallery/1788023503369_204090055134776357_2543730497231762877_08d18a2acc93f007ff92a6b2b5e53a8c.jpg', title: 'Học viên vượt qua kỳ thi sát hạch điểm cao' },
  { src: '/images/gallery/1788023503377_204090055134776357_2543730497231762877_82ec91416f316d4c110aab892f0c97db.jpg', title: 'Chụp hình kỷ niệm cùng Thầy Hồng Dạy Lái' },
  { src: '/images/gallery/1788023503385_204090055134776357_2543730497231762877_5ce025c095c0c6a37d52cb09dd45a1e6.jpg', title: 'Tự tin cầm lái an toàn trên mọi hành trình' }
];

export default function Hero({ onOpenRegister }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HERO_GALLERY_IMAGES.length);
    }, 3500);

    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentImageIndex(prev => (prev - 1 + HERO_GALLERY_IMAGES.length) % HERO_GALLERY_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentImageIndex(prev => (prev + 1) % HERO_GALLERY_IMAGES.length);
  };

  return (
    <section style={{
      position: 'relative',
      padding: '5rem 0 4rem 0',
      background: 'var(--gradient-hero)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column */}
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              <span>Trên 10 Năm Kinh Nghiệm Đào Tạo Lái Xe • Giảng Viên Chuẩn Sát Hạch GTVT</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              letterSpacing: '-0.04em',
              marginBottom: '1.25rem',
              lineHeight: 1.15
            }}>
              THẦY HỒNG DẠY LÁI{' '}
              <span className="text-gradient">Đồng Hành Tận Tâm, Vững Vàng Tay Lái</span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              fontWeight: 400,
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '640px',
              lineHeight: 1.7
            }}>
              Xin chào! Tôi là <strong>Thầy Hồng</strong> — Giảng viên đào tạo lái xe ô tô & xe máy với trên 10 năm kinh nghiệm thực chiến. Với tôn chỉ <em>"Học thật – Lái thật – An toàn trên mọi nẻo đường"</em>, tôi trực tiếp đồng hành kèm 1-Thầy-1-Trò, giúp hơn 15.000+ học viên từ chưa biết gì trở nên tự tin làm chủ tay lái và đạt tỷ lệ đỗ sát hạch 99%.
            </p>

            {/* Key USPs */}
            <div className="usp-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.85rem',
              marginBottom: '2.5rem'
            }}>
              {[
                'Trên 10 năm kinh nghiệm giảng dạy & kèm lái chuẩn GTVT',
                'Kèm 1 Thầy / 1 Trò tận tâm, phương pháp sư phạm dễ hiểu',
                'Thực hành thực chiến đường phố, sa hình & xử lý tình huống',
                'Học phí trọn gói 100% minh bạch, hỗ trợ lý thuyết và thực hành'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-muted)' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onOpenRegister()}
                className="btn btn-primary"
                style={{ padding: '1rem 2rem', fontSize: '1.02rem' }}
              >
                <span>Học Cùng Thầy Hồng (Giảm 1.000.000đ)</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="#theory-exam"
                className="btn btn-secondary"
                style={{ padding: '1rem 1.8rem', fontSize: '1.02rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Sparkles size={18} color="var(--accent-emerald)" />
                <span>Thi Thử Lý Thuyết Online</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image Carousel with 18 Photos */}
          <div style={{ position: 'relative' }}>
            <div
              className="hero-slider-box"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                height: '460px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}
            >
              {/* Images Container with dual-layer to fit entire face and car */}
              {HERO_GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: currentImageIndex === idx ? 1 : 0,
                    visibility: currentImageIndex === idx ? 'visible' : 'hidden',
                    transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-out',
                    transform: currentImageIndex === idx ? 'scale(1)' : 'scale(1.03)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Layer 1: Ambient Blurred Background */}
                  <img
                    src={img.src}
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      filter: 'blur(28px) brightness(0.55)',
                      transform: 'scale(1.2)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Layer 2: Sharp Main Image with Contain so no face is cut off */}
                  <img
                    src={img.src}
                    alt={img.title}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      display: 'block',
                      zIndex: 2
                    }}
                  />
                </div>
              ))}

              {/* Top Right Photo Count Pill */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(10px)',
                color: '#FFFFFF',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                zIndex: 4
              }}>
                <Camera size={13} color="var(--accent-emerald)" />
                <span>{currentImageIndex + 1} / {HERO_GALLERY_IMAGES.length} Ảnh thực tế</span>
              </div>

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="slider-nav-btn slider-prev-btn"
                aria-label="Ảnh trước"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '1rem',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 5,
                  transition: 'all 0.25s ease'
                }}
              >
                <ChevronLeft size={22} color="#1E293B" />
              </button>

              <button
                onClick={handleNext}
                className="slider-nav-btn slider-next-btn"
                aria-label="Ảnh sau"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '1rem',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 5,
                  transition: 'all 0.25s ease'
                }}
              >
                <ChevronRight size={22} color="#1E293B" />
              </button>

              {/* Bottom Pagination Dots */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                zIndex: 3,
                background: 'rgba(0, 0, 0, 0.45)',
                backdropFilter: 'blur(8px)',
                padding: '0.35rem 0.65rem',
                borderRadius: '9999px'
              }}>
                {HERO_GALLERY_IMAGES.slice(0, 8).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentImageIndex(dotIdx)}
                    aria-label={`Ảnh ${dotIdx + 1}`}
                    style={{
                      width: currentImageIndex === dotIdx ? '18px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      background: currentImageIndex === dotIdx ? 'var(--accent-emerald)' : 'rgba(255,255,255,0.6)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  />
                ))}
                {HERO_GALLERY_IMAGES.length > 8 && (
                  <span style={{ color: '#FFFFFF', fontSize: '0.68rem', marginLeft: '0.2rem', fontWeight: 700 }}>
                    +{HERO_GALLERY_IMAGES.length - 8}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="glass-card stats-row" style={{
          marginTop: '3.5rem',
          padding: '2rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {[
            { value: '10+ Năm', label: 'Kinh nghiệm đào tạo thực chiến', icon: Shield },
            { value: '15,000+', label: 'Học viên tự tin cầm lái', icon: Users },
            { value: '99%', label: 'Tỷ lệ đỗ kỳ sát hạch lần đầu', icon: Award },
            { value: '1 Kèm 1', label: 'Tận tâm, không quát mắng', icon: Zap }
          ].map((stat, idx) => (
            <div key={idx} className="stat-item" style={{
              borderRight: idx < 3 ? '1px solid var(--border-color)' : 'none',
              paddingRight: idx < 3 ? '1.5rem' : '0'
            }}>
              <div style={{
                fontSize: '2.2rem',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 800,
                color: 'var(--accent-emerald)',
                marginBottom: '0.2rem'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .slider-nav-btn {
          opacity: 0.85;
          transform: translateY(-50%) scale(0.95);
        }
        .hero-slider-box:hover .slider-nav-btn {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
        .slider-nav-btn:hover {
          background: #FFFFFF !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-slider-box { height: 380px !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
          .stat-item { border-right: none !important; padding-right: 0 !important; }
        }
        @media (max-width: 576px) {
          .usp-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: 1fr !important; }
          .hero-slider-box { height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
