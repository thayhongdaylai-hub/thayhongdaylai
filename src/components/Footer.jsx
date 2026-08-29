import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      padding: '3.5rem 0 2rem 0',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'var(--gradient-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={22} color="#051A10" />
              </div>
              <span style={{ fontFamily: "'Google Sans', 'Quicksand', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                 THẦY HỒNG<span className="text-gradient"> DẠY LÁI</span>
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Trung tâm đào tạo & sát hạch lái xe hàng đầu Việt Nam. Cấp giấy phép đào tạo số 128/GP-GTVT do Sở Giao Thông Vận Tải thẩm định.
            </p>

            <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Clock size={15} color="var(--accent-emerald)" />
              <span>Thời gian làm việc: 7h30 - 20h00 (Cả T7 & CN)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Các Hạng Đào Tạo
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><a href="#courses">Xe Máy Hạng A (Tay Côn / SH) - 3 Triệu</a></li>
              <li><a href="#courses">Xe Máy Hạng A1 (125cc) - 1.3 Triệu</a></li>
              <li><a href="#courses">Ô tô Hạng B - 19 Triệu</a></li>
              <li><a href="#courses">Ô tô Hạng C1 - 24 Triệu</a></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Hỗ Trợ Học Viên
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><a href="#roadmap">Lộ trình đào tạo chuẩn GTVT</a></li>
              <li><a href="#facilities">Hệ thống sân tập chuẩn ISO</a></li>
              <li><a href="#faq">Câu hỏi thường gặp</a></li>
              <li><a href="#courses">Chính sách học phí minh bạch 100%</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Địa Chỉ & Liên Hệ
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Hà Nội:</strong> Số 14 Ngõ 190/11, Phố Thượng Thanh, Việt Hưng, Hà Nội.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Bắc Ninh:</strong> Phố Dương Lôi, Phường Từ Sơn, Tỉnh Bắc Ninh.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span>Thầy Hồng: <a href="tel:0983406221" style={{ fontWeight: 700, color: 'var(--accent-emerald)' }}>0983.406.221</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span>Thầy Hồng: <a href="tel:0336611194" style={{ fontWeight: 700, color: 'var(--accent-emerald)' }}>0336.611.194</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
                <span>Gmail: <a href="mailto:thayhongdaylai@gmail.com" style={{ color: 'var(--text-muted)' }}>thayhongdaylai@gmail.com</a></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" style={{ flexShrink: 0 }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Fanpage: <a href="https://www.facebook.com/share/1GuWF1te7x/" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', fontWeight: 700 }}>Thầy Hồng Dạy Lái</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.85rem',
          fontSize: '0.82rem'
        }}>
          <div>
             © 2026 Trung Tâm Đào Tạo Lái Xe Thầy Hồng Dạy Lái. Tất cả quyền được bảo lưu.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', color: 'var(--text-light)', flexWrap: 'wrap' }}>
            <a href="#about-teacher">Giới thiệu Thầy Hồng</a>
            <a href="#courses">Bảng giá khóa học</a>
            <a href="#faq">Hỏi đáp</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.75rem !important; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
