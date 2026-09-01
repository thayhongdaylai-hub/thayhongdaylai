import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, ArrowRight, UserCheck, Clock, ThumbsUp, Compass, Phone, Star, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { STUDENT_PHOTOS } from '../data/galleryData';

export default function AboutTeacher({ onOpenRegister }) {
  const teacherPhotos = STUDENT_PHOTOS.map(p => p.src);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % teacherPhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, teacherPhotos.length]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIdx(prev => (prev === 0 ? teacherPhotos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIdx(prev => (prev + 1) % teacherPhotos.length);
  };

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
    if (distance > 40) handleNext();
    else if (distance < -40) handlePrev();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const advantages = [
    {
      icon: HeartHandshake,
      title: 'Hướng Dẫn Tận Tâm',
      desc: 'Phương châm 1-Thầy-1-Trò, phong cách văn minh - lịch sự, giảng dạy kiên nhẫn, kèm cặp tỉ mỉ từng kỹ năng cho học viên.',
      badge: '1 Kèm 1'
    },
    {
      icon: Compass,
      title: 'Kinh Nghiệm Thực Tế',
      desc: 'Học thực chiến trên đường phố thật, xử lý điểm mù, đường đèo dốc, ngã tư đông đúc và kỹ năng lái xe an toàn suốt đời.',
      badge: 'Thực Chiến'
    },
    {
      icon: Clock,
      title: 'Lộ Trình Học Rõ Ràng',
      desc: 'Giáo trình chuẩn Bộ GTVT 2026, minh bạch học phí trọn gói 100%, ký cam kết hợp đồng không phát sinh bất kỳ phụ phí nào.',
      badge: 'Minh Bạch'
    },
    {
      icon: UserCheck,
      title: 'Hỗ Trợ Học Viên Tối Đa',
      desc: 'Thời gian học linh hoạt theo lịch rảnh của học viên , hỗ trợ đưa đón và làm thủ tục hồ sơ nhanh.',
      badge: 'Linh Hoạt'
    },
    {
      icon: Award,
      title: 'Tỷ Lệ Thi Đỗ Cao (99%)',
      desc: 'Cung cấp tài liệu độc quyền 250 câu ( cho xe máy ) và 600 câu ( cho ô tô ) + 120 tình huống mô phỏng và tặng giờ tập xe chip sát hạch giúp tự tin thi đạt ngay lần đầu.',
      badge: 'Tỷ Lệ Đậu 99%'
    }
  ];

  return (
    <section id="about-teacher" style={{
      padding: '5rem 0',
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="badge badge-gold">
            <Sparkles size={15} />
            <span>Cam Kết Chất Lượng Đào Tạo Hàng Đầu</span>
          </div>
          <h2 className="section-title">
            Ưu Điểm Vượt Trội Tại <span className="text-gradient">Thầy Hồng Dạy Lái</span>
          </h2>
          <p className="section-subtitle">
            Hơn 10 năm đồng hành cùng hàng trăm học viên . Đảm bảo vững vàng tay lái, thông thạo luật giao thông và tự tin nhận bằng.
          </p>
        </div>

        {/* Top 5 Advantages Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {advantages.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="modern-card"
                style={{
                  padding: '1.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
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
                      <IconComp size={24} color="var(--primary)" />
                    </div>
                    <span className="badge badge-blue">
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  marginTop: '1.25rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  fontSize: '0.86rem'
                }}>
                  <CheckCircle2 size={16} />
                  <span>Cam kết chuẩn chất lượng</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Teacher Visual & Profile Summary Banner with Full Photo Gallery */}
        <div className="modern-card teacher-profile-grid" style={{
          padding: '2rem',
          background: 'var(--bg-card)',
          borderRadius: '20px',
          display: 'grid',
          gridTemplateColumns: '360px 1fr',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {/* Interactive Teacher Photo Slider Box */}
          <div style={{ position: 'relative' }}>
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                position: 'relative',
                width: '100%',
                height: '310px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#0B1120',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {/* Layer 1: Ambient Blurred Background */}
              <img
                src={teacherPhotos[currentIdx]}
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'blur(28px) brightness(0.65)',
                  transform: 'scale(1.2)',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />

              {/* Layer 2: Foreground Image 100% In Frame */}
              <img
                src={teacherPhotos[currentIdx]}
                alt="Thầy Hồng Dạy Lái Thực Tế"
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
                  filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.45))'
                }}
              />

              {/* Top Photo Counter */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 10,
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontWeight: 700
              }}>
                {currentIdx + 1}/{teacherPhotos.length}
              </div>

              {/* Bottom Teacher Badge */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                zIndex: 10,
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
              }}>
                <ShieldCheck size={14} color="#FBBF24" />
                <span>Giảng Viên Sát Hạch Uy Tín</span>
              </div>

              {/* Prev & Next Arrows */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '8px',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  color: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 10,
                  transition: 'all 0.2s ease'
                }}
                aria-label="Ảnh trước"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '8px',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  color: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 10,
                  transition: 'all 0.2s ease'
                }}
                aria-label="Ảnh kế tiếp"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Profile Description */}
          <div>
            <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Star size={14} fill="#F59E0B" color="#F59E0B" />
              <span>Giáo Viên Dạy Lái Tiêu Biểu</span>
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.65rem' }}>
              Trực Tiếp Đồng Hành Cùng Thầy Hồng
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              "Với phương châm <strong>Dạy Lái Bằng Cái Tâm</strong>, tôi luôn lắng nghe và kiên nhẫn kèm cặp từng học viên. Dù bạn là người mới bắt đầu chưa từng cầm vô lăng hay từng có tâm lý sợ lái xe, tôi cam kết giúp bạn vững tay lái và đỗ kỳ thi sát hạch một cách nhẹ nhàng nhất."
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
              <button
                onClick={() => onOpenRegister()}
                className="btn btn-gold"
                style={{ padding: '0.85rem 1.65rem', borderRadius: '10px' }}
              >
                <Sparkles size={16} />
                <span>Đăng Ký Học Cùng Thầy Hồng</span>
              </button>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'var(--bg-card)',
                border: '1.5px solid var(--border-color)',
                borderRadius: '10px',
                padding: '0.3rem 0.5rem',
                gap: '0.35rem',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.45rem 0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.88rem' }}>
                  <Phone size={15} />
                  <span>Zalo:</span>
                </div>
                <a
                  href="https://zalo.me/0983406221"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.45rem 0.7rem',
                    borderRadius: '8px',
                    background: 'var(--primary-tint)',
                    color: 'var(--primary)',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    textDecoration: 'none'
                  }}
                  title="Nhắn Zalo Thầy Hồng: 0983.406.221"
                >
                  0983.406.221
                </a>
                <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>•</span>
                <a
                  href="https://zalo.me/0336611194"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.45rem 0.7rem',
                    borderRadius: '8px',
                    background: 'var(--primary-tint)',
                    color: 'var(--primary)',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    textDecoration: 'none'
                  }}
                  title="Nhắn Zalo Thầy Hồng: 0336.611.194"
                >
                  0336.611.194
                </a>
              </div>

              {/* Facebook Fanpage Button */}
              <a
                href="https://www.facebook.com/share/1GuWF1te7x/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'var(--bg-card)',
                  border: '1.5px solid #1877F2',
                  color: '#1877F2',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
                title="Fanpage Facebook Thầy Hồng Dạy Lái"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>FANPAGE</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .teacher-profile-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
