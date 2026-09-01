import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#0F172A',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '4rem 0 2.5rem 0',
      color: '#94A3B8'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img
                src="/logo.png"
                alt="Logo Thầy Hồng Dạy Lái"
                width="50"
                height="50"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0,
                  boxShadow: '0 4px 14px rgba(29, 78, 216, 0.4)',
                  border: '2.5px solid rgba(251, 191, 36, 0.8)'
                }}
              />
              <span style={{ fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif", fontSize: '1.35rem', fontWeight: 900, color: '#FFFFFF' }}>
                 THẦY HỒNG<span style={{ color: '#60A5FA' }}> DẠY LÁI</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#CBD5E1', marginBottom: '1.25rem' }}>
              Trung tâm đào tạo & sát hạch lái xe hàng đầu Việt Nam. Cấp giấy phép đào tạo số 128/GP-GTVT do Sở Giao Thông Vận Tải thẩm định.
            </p>

            <div style={{ fontSize: '0.84rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="#60A5FA" />
              <span>Thời gian làm việc: 7h30 - 20h00 ( Cả T7 & CN )</span>
            </div>
          </div>

          {/* Col 2: Training Courses */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Các Hạng Đào Tạo
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li><a href="#courses" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Ô Tô Hạng B ( 4-9 chỗ )</a></li>
              <li><a href="#courses" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Ô Tô Hạng C1 ( Xe Tải )</a></li>
              <li><a href="#courses" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Xe Máy Hạng A1 ( Dưới 125cc )</a></li>
              <li><a href="#courses" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Xe Máy Hạng A ( Trên 125cc )</a></li>
              <li><a href="#courses" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Xe Máy Hạng A02 ( SH / PKL )</a></li>
            </ul>
          </div>

          {/* Col 3: Student Support */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Hỗ Trợ Học Viên
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li><a href="#about-teacher" style={{ color: '#CBD5E1' }}>5 Ưu điểm đào tạo</a></li>
              <li><a href="#theory-exam" style={{ color: '#CBD5E1' }}>Thi thử lý thuyết online 2026</a></li>
              <li><a href="#roadmap" style={{ color: '#CBD5E1' }}>Lộ trình đào tạo 7 bước</a></li>
              <li><a href="#facilities" style={{ color: '#CBD5E1' }}>Hệ thống sân tập chuẩn ISO</a></li>
              <li><a href="#faq" style={{ color: '#CBD5E1' }}>Câu hỏi thường gặp ( FAQ )</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Địa Chỉ & Liên Hệ
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="#60A5FA" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong style={{ color: '#F1F5F9' }}>Hà Nội:</strong> Số 14 Ngõ 190/11, Phố Thượng Thanh, Việt Hưng, Hà Nội.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="#FBBF24" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong style={{ color: '#F1F5F9' }}>Bắc Ninh:</strong> Phố Dương Lôi, Phường Từ Sơn, Tỉnh Bắc Ninh.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
                <span>Thầy Hồng: <a href="https://zalo.me/0983406221" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#FBBF24', textDecoration: 'none' }} title="Mở Zalo Thầy Hồng">0983.406.221</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
                <span>Thầy Hồng: <a href="https://zalo.me/0336611194" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 800, color: '#FBBF24', textDecoration: 'none' }} title="Mở Zalo Thầy Hồng">0336.611.194</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="#60A5FA" style={{ flexShrink: 0 }} />
                <span>Gmail: <a href="mailto:thayhongdaylai@gmail.com" style={{ color: '#CBD5E1' }}>thayhongdaylai@gmail.com</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" style={{ flexShrink: 0 }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Fanpage: <a href="https://www.facebook.com/share/1GuWF1te7x/" target="_blank" rel="noopener noreferrer" style={{ color: '#60A5FA', fontWeight: 700 }}>Thầy Hồng Dạy Lái</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.84rem'
        }}>
          <div>
             © 2026 Trung Tâm Đào Tạo Lái Xe Thầy Hồng Dạy Lái. Tất cả quyền được bảo lưu.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748B', flexWrap: 'wrap' }}>
            <a href="#about-teacher" style={{ color: '#94A3B8' }}>Giới thiệu Thầy Hồng</a>
            <a href="#courses" style={{ color: '#94A3B8' }}>Bảng giá khóa học</a>
            <a href="#faq" style={{ color: '#94A3B8' }}>Hỏi đáp</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
