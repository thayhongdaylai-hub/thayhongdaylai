import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  Download,
  Scale,
  CheckCircle2,
  ArrowUp,
  Phone,
  Clock,
  Printer,
  ExternalLink
} from 'lucide-react';
import { LEGAL_DATA } from '../data/legalData';

// Official Facebook Fanpage Icon SVG
const FacebookIcon = ({ size = 16, color = '#1877F2' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Helper to make URLs clickable in legal text
const renderTextWithLinks = (text) => {
  if (typeof text !== 'string') return text;
  const urlRegex = /(https?:\/\/[^\s,)]+)/g;
  if (!urlRegex.test(text)) return text;

  const parts = text.split(urlRegex);
  return parts.map((part, idx) => {
    if (part.startsWith('http://') || part.startsWith('https://')) {
      const isFacebook = part.includes('facebook.com');
      return (
        <a
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: isFacebook ? '#60A5FA' : '#93C5FD',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            fontWeight: 600,
            wordBreak: 'break-all'
          }}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export const LEGAL_CONFIG = {
  privacy: {
    id: 'privacy',
    title: 'Chính sách bảo mật',
    tabLabel: 'CHÍNH SÁCH BẢO MẬT',
    mobileMain: 'Chính Sách',
    mobileSub: 'Bảo Mật',
    subtitle: 'Quy định thu thập, quản lý và bảo mật dữ liệu cá nhân học viên',
    pdfUrl: '/dieu-luat/chinh-sach-bao-mat.pdf',
    icon: ShieldCheck
  },
  terms: {
    id: 'terms',
    title: 'Điều khoản sử dụng',
    tabLabel: 'ĐIỀU KHOẢN SỬ DỤNG',
    mobileMain: 'Điều Khoản',
    mobileSub: 'Sử Dụng',
    subtitle: 'Quy chế đào tạo, quyền lợi và trách nhiệm giữa học viên & trung tâm',
    pdfUrl: '/dieu-luat/dieu-khoan-su-dung.pdf',
    icon: Scale
  },
  refund: {
    id: 'refund',
    title: 'Chính sách đăng ký, hủy và hoàn tiền',
    tabLabel: 'CHÍNH SÁCH ĐĂNG KÝ, HUỶ, HOÀN TIỀN',
    mobileMain: 'Đăng Ký, Huỷ',
    mobileSub: '& Hoàn Tiền',
    subtitle: 'Quy trình tiếp nhận hồ sơ, bảo lưu lịch thi & chính sách hoàn học phí minh bạch',
    pdfUrl: '/dieu-luat/chinh-sach-dang-ky-huy-hoan-tien.pdf',
    icon: FileText
  }
};

export default function LegalModal({ isOpen, initialDoc = 'privacy', onClose }) {
  const [activeDocId, setActiveDocId] = useState(initialDoc || 'privacy');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollContainerRef = useRef(null);

  // Sync activeDocId whenever initialDoc changes upon opening
  useEffect(() => {
    if (initialDoc && LEGAL_CONFIG[initialDoc]) {
      setActiveDocId(initialDoc);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [initialDoc, isOpen]);

  // Handle ESC key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentConfig = LEGAL_CONFIG[activeDocId] || LEGAL_CONFIG.privacy;
  const currentContent = LEGAL_DATA[activeDocId] || LEGAL_DATA.privacy;
  const DocIcon = currentConfig.icon;

  const handleTabChange = (docId) => {
    if (docId !== activeDocId) {
      setActiveDocId(docId);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

  const handleScroll = (e) => {
    setShowBackToTop(e.currentTarget.scrollTop > 400);
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="legal-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(5, 10, 24, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.4rem, 2vw, 1.25rem)',
        animation: 'legalFadeIn 0.2s ease-out'
      }}
    >
      <div
        className="legal-modal-container"
        style={{
          width: '100%',
          maxWidth: '1020px',
          height: '92vh',
          maxHeight: '920px',
          background: 'var(--bg-card, #0F172A)',
          border: '1.5px solid var(--border-color, #1E293B)',
          borderRadius: '20px',
          boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.07)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'legalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Header Bar with Document Tabs & Controls */}
        <div className="legal-modal-header">
          {/* Top Control Bar (Row 1 on Mobile, Right on Desktop) */}
          <div className="legal-header-top-bar">
            <div className="legal-header-brand-badge">
              <ShieldCheck size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
              <span>QUY CHẾ &amp; PHÁP LÝ</span>
            </div>

            {/* Action Buttons */}
            <div className="legal-header-actions">
              {/* Download Original PDF button */}
              <a
                href={currentConfig.pdfUrl}
                download
                className="legal-header-btn"
                title="Tải bản PDF gốc về máy"
              >
                <Download size={14} color="#F59E0B" />
                <span className="legal-btn-text">Tải PDF</span>
              </a>

              {/* Print Button */}
              <button
                onClick={() => window.print()}
                className="legal-header-btn"
                title="In văn bản"
              >
                <Printer size={14} color="var(--primary, #3B82F6)" />
                <span className="legal-btn-text">In</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Đóng cửa sổ"
                title="Đóng (ESC)"
                className="legal-close-btn"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          {/* 3 Document Tabs (Row 2 on Mobile, Left on Desktop) */}
          <nav className="legal-tabs-list" aria-label="Mục điều khoản pháp lý">
            {Object.values(LEGAL_CONFIG).map((doc) => {
              const isActive = doc.id === activeDocId;
              const TabIcon = doc.icon;
              return (
                <button
                  key={doc.id}
                  onClick={() => handleTabChange(doc.id)}
                  className={`legal-tab-btn ${isActive ? 'active' : ''}`}
                  title={doc.tabLabel}
                >
                  <TabIcon
                    size={14}
                    className="legal-tab-icon"
                    style={{ color: isActive ? '#FFFFFF' : 'var(--primary, #3B82F6)', flexShrink: 0 }}
                  />
                  <span className="tab-label-desktop">{doc.tabLabel}</span>
                  <span className="tab-label-mobile">
                    <span className="tab-mobile-main">{doc.mobileMain}</span>
                    <span className="tab-mobile-sub">{doc.mobileSub}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Document Reading Body (Clean Typography Format like the User Reference) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="legal-reading-body"
          style={{
            flex: 1,
            position: 'relative',
            background: '#0B0F19',
            overflowY: 'auto',
            padding: '2.5rem clamp(1rem, 4vw, 3.5rem) 4rem clamp(1rem, 4vw, 3.5rem)'
          }}
        >
          <div
            className="legal-content-wrapper"
            style={{
              maxWidth: '840px',
              margin: '0 auto',
              color: '#CBD5E1',
              fontFamily: "'Google Sans', 'Quicksand', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
            }}
          >
            {/* Document Header */}
            <header style={{ marginBottom: '2.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.3rem 0.75rem', borderRadius: '8px', background: 'rgba(29, 78, 216, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', color: '#60A5FA', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.9rem' }}>
                <DocIcon size={14} />
                <span>Văn Bản Pháp Lý Chính Thức</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.35rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  margin: '0 0 0.65rem 0',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em'
                }}
              >
                {currentContent.title || currentConfig.title}
              </h1>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.88rem',
                  color: '#94A3B8',
                  fontWeight: 500
                }}
              >
                <Clock size={15} color="#94A3B8" />
                <span>{currentContent.date || 'Cập nhật lần cuối: 07/09/2026'}</span>
              </div>
            </header>

            {/* Document Intro Paragraphs */}
            {currentContent.intro && currentContent.intro.length > 0 && (
              <div
                className="legal-intro-box"
                style={{
                  paddingBottom: '1.5rem',
                  marginBottom: '2rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {currentContent.intro.map((p, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: '1.02rem',
                      lineHeight: 1.75,
                      color: '#E2E8F0',
                      marginBottom: '1rem',
                      textAlign: 'justify'
                    }}
                  >
                    {renderTextWithLinks(p.text)}
                  </p>
                ))}
              </div>
            )}

            {/* Document Numbered Sections */}
            <div className="legal-sections-container">
              {currentContent.sections && currentContent.sections.map((sec) => (
                <section
                  key={sec.number}
                  id={`section-${sec.number}`}
                  style={{
                    marginBottom: '2.5rem'
                  }}
                >
                  {/* Section Heading */}
                  <h2
                    style={{
                      fontSize: '1.28rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginTop: '1.5rem',
                      marginBottom: '0.9rem',
                      lineHeight: 1.35,
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '0.4rem'
                    }}
                  >
                    <span style={{ color: '#60A5FA' }}>{sec.number}.</span>
                    <span>{sec.heading}</span>
                  </h2>

                  {/* Section Paragraphs, Subheadings and Bullet Points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {sec.content.map((item, cIdx) => {
                      if (item.type === 'subheading') {
                        return (
                          <h3
                            key={cIdx}
                            style={{
                              fontSize: '1.06rem',
                              fontWeight: 700,
                              color: '#93C5FD',
                              marginTop: '1rem',
                              marginBottom: '0.35rem',
                              lineHeight: 1.45
                            }}
                          >
                            {item.text}
                          </h3>
                        );
                      }

                      if (item.type === 'bullet') {
                        return (
                          <div
                            key={cIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.65rem',
                              paddingLeft: '0.35rem',
                              lineHeight: 1.7,
                              fontSize: '0.96rem',
                              color: '#E2E8F0'
                            }}
                          >
                            <span style={{ color: '#60A5FA', fontSize: '1.1rem', lineHeight: '1.4rem' }}>•</span>
                            <span style={{ textAlign: 'justify' }}>{renderTextWithLinks(item.text)}</span>
                          </div>
                        );
                      }

                      return (
                        <p
                          key={cIdx}
                          style={{
                            fontSize: '0.96rem',
                            lineHeight: 1.75,
                            color: '#CBD5E1',
                            margin: 0,
                            textAlign: 'justify'
                          }}
                        >
                          {renderTextWithLinks(item.text)}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Official Closing Commitment Statement if present */}
            {currentContent.closing && (
              <div
                style={{
                  marginTop: '2rem',
                  marginBottom: '1rem',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(30, 41, 59, 0.5)',
                  borderLeft: '4px solid #3B82F6',
                  borderRadius: '0 12px 12px 0',
                  color: '#E2E8F0',
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic'
                }}
              >
                {currentContent.closing}
              </div>
            )}

            {/* Bottom Official Seal & Contact Note */}
            <div
              style={{
                marginTop: '3.5rem',
                padding: '1.5rem',
                background: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60A5FA', fontWeight: 800, fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} color="#10B981" />
                <span>HIỆU LỰC &amp; THẨM QUYỀN BAN HÀNH</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Văn bản này có giá trị áp dụng chính thức và có hiệu lực đối với tất cả học viên, khách hàng và cá nhân tham gia các khóa học tại hệ thống <strong>Thầy Hồng Dạy Lái</strong> (Hà Nội &amp; Bắc Ninh).
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.85rem',
                  paddingTop: '0.65rem',
                  borderTop: '1px dashed rgba(255, 255, 255, 0.12)',
                  fontSize: '0.88rem',
                  color: '#E2E8F0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={15} color="#F59E0B" />
                  <span>
                    Hotline/Zalo tư vấn &amp; giải đáp quy chế:{' '}
                    <a
                      href="tel:0336611194"
                      style={{ color: '#FBBF24', fontWeight: 800, textDecoration: 'none' }}
                    >
                      0336.611.194
                    </a>
                  </span>
                </div>

                <a
                  href="https://www.facebook.com/share/1GuWF1te7x/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legal-fanpage-btn"
                  title="Truy cập Fanpage Facebook Thầy Hồng Dạy Lái"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(24, 119, 242, 0.15)',
                    border: '1px solid rgba(24, 119, 242, 0.35)',
                    color: '#60A5FA',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FacebookIcon size={15} />
                  <span>FANPAGE : Thầy Hồng Dạy Lái .</span>
                  <ExternalLink size={13} style={{ opacity: 0.8 }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top floating button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            title="Cuộn lên đầu trang"
            style={{
              position: 'absolute',
              bottom: '1.75rem',
              right: '2rem',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--primary, #1D4ED8)',
              color: '#FFFFFF',
              border: '1.5px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>

      <style>{`
        @keyframes legalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes legalSlideUp {
          from { opacity: 0; transform: scale(0.96) translateY(14px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        /* Desktop Header Layout */
        .legal-modal-header {
          padding: 0.85rem 1.25rem;
          background: var(--bg-card-hover, #131B2E);
          border-bottom: 1px solid var(--border-color, #1E293B);
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 0.85rem;
        }
        .legal-header-top-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          order: 2;
        }
        .legal-header-brand-badge {
          display: none;
        }
        .legal-header-actions {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .legal-header-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.8rem;
          border-radius: 9px;
          background: var(--bg-main, #0B0F19);
          border: 1px solid var(--border-color, #1E293B);
          color: var(--text-main, #F1F5F9);
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .legal-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: var(--bg-main, #0B0F19);
          border: 1px solid var(--border-color, #1E293B);
          color: var(--text-main, #F1F5F9);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .legal-close-btn:hover {
          background: rgba(239, 68, 68, 0.2) !important;
          border-color: #EF4444 !important;
          color: #EF4444 !important;
        }
        .legal-tabs-list {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          overflow-x: auto;
          scrollbar-width: none;
          flex: 1;
          order: 1;
        }
        .legal-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.52rem 0.95rem;
          border-radius: 10px;
          border: 1px solid var(--border-color, #1E293B);
          background: var(--bg-card, #0F172A);
          color: var(--text-muted, #94A3B8);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.01em;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .legal-tab-btn.active {
          border-color: var(--primary, #3B82F6) !important;
          background: var(--primary, #1D4ED8) !important;
          color: #FFFFFF !important;
          font-weight: 800 !important;
          box-shadow: 0 3px 12px rgba(29, 78, 216, 0.35) !important;
        }
        .tab-label-desktop {
          display: inline;
        }
        .tab-label-mobile {
          display: none;
        }

        .legal-header-btn:hover {
          border-color: var(--primary, #3B82F6) !important;
          background: rgba(29, 78, 216, 0.15) !important;
          color: #60A5FA !important;
        }
        .legal-fanpage-btn:hover {
          background: rgba(24, 119, 242, 0.28) !important;
          border-color: #3B82F6 !important;
          color: #FFFFFF !important;
        }
        .legal-tab-btn:not(.active):hover {
          background: rgba(255, 255, 255, 0.05) !important;
          color: #FFFFFF !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        .legal-reading-body::-webkit-scrollbar {
          width: 8px;
        }
        .legal-reading-body::-webkit-scrollbar-track {
          background: #0B0F19;
        }
        .legal-reading-body::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        .legal-reading-body::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }

        /* Mobile specific layout (max-width: 768px) */
        @media (max-width: 768px) {
          .legal-modal-backdrop {
            align-items: center !important;
            padding: max(3.25rem, calc(env(safe-area-inset-top, 0px) + 2.75rem)) 0.65rem max(1.25rem, env(safe-area-inset-bottom, 0px)) 0.65rem !important;
          }
          .legal-modal-container {
            height: calc(100dvh - max(4.75rem, calc(env(safe-area-inset-top, 0px) + 4rem))) !important;
            max-height: calc(100dvh - max(4.75rem, calc(env(safe-area-inset-top, 0px) + 4rem))) !important;
            border-radius: 18px !important;
          }
          .legal-modal-header {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.75rem !important;
            padding: 1.65rem 0.85rem 0.85rem 0.85rem !important;
          }
          .legal-header-top-bar {
            width: 100% !important;
            justify-content: space-between !important;
            order: 1 !important;
            padding: 0.15rem 0.2rem !important;
          }
          .legal-header-brand-badge {
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.4rem !important;
            font-size: 0.74rem !important;
            font-weight: 800 !important;
            color: #60A5FA !important;
            text-transform: uppercase !important;
            letter-spacing: 0.03em !important;
          }
          .legal-btn-text {
            display: none !important;
          }
          .legal-tabs-list {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.35rem !important;
            width: 100% !important;
            order: 2 !important;
            overflow: visible !important;
          }
          .legal-tab-btn {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.45rem 0.2rem !important;
            border-radius: 9px !important;
            min-height: 52px !important;
            width: 100% !important;
            white-space: normal !important;
            text-align: center !important;
          }
          .legal-tab-icon {
            margin-bottom: 0.15rem !important;
          }
          .tab-label-desktop {
            display: none !important;
          }
          .tab-label-mobile {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            line-height: 1.15 !important;
          }
          .tab-mobile-main {
            font-size: 0.72rem !important;
            font-weight: 800 !important;
            color: inherit !important;
          }
          .tab-mobile-sub {
            font-size: 0.64rem !important;
            font-weight: 600 !important;
            opacity: 0.88 !important;
            color: inherit !important;
          }
          .legal-reading-body {
            padding: 1.25rem 0.85rem 3.5rem 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
}
