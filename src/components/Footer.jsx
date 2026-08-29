import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card-hover)',
      borderTop: '1px solid var(--border-color)',
      padding: '4.5rem 0 2rem 0',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr 1fr 1.4fr',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--gradient-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={26} color="#FFFFFF" />
              </div>
              <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>
                 THẦY HỒNG<span className="text-gradient"> DẠY LÁI</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Đào tạo lái xe chuyên nghiệp & tận tâm. Đồng hành cùng học viên từ lý thuyết đến thực hành thực chiến trên mọi cung đường.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Các Hạng Đào Tạo
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><a href="#courses">Hạng Xe Máy A1 (Xe Phổ Thông 125cc)</a></li>
              <li><a href="#courses">Hạng Mô Tô (Xe PKL, Xe Tay Côn)</a></li>
              <li><a href="#courses">Ô TÔ Hạng B (Số Tự Động & Số Sàn)</a></li>
              <li><a href="#courses">Ô TÔ Hạng C1 (Xe Tải Trọng Tải Lớn)</a></li>
              <li><a href="#upgrades" style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>Nâng Hạng GPLX (C, D1, D2, D, CE)</a></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Hỗ Trợ Học Viên
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><a href="#theory-exam" style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>Thi thử lý thuyết 250 & 600 câu (Mới)</a></li>
              <li><a href="#roadmap">Lộ trình đào tạo chuẩn GTVT</a></li>
              <li><a href="#facilities">Hệ thống sân tập</a></li>
              <li><a href="#faq">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Địa Chỉ & Liên Hệ
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Hà Nội:</strong> Số 14 Ngõ 190/10 Phố Thượng Thanh, Long Biên, Hà Nội.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Bắc Ninh:</strong> Phố Dương Lôi, Phường Từ Sơn, Tỉnh Bắc Ninh.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span>SĐT 1: <a href="tel:0983406221" style={{ fontWeight: 800, color: 'var(--text-main)' }}>0983.406.221</a> (Thầy Hồng)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span>SĐT 2: <a href="tel:0336611194" style={{ fontWeight: 800, color: 'var(--text-main)' }}>0336.611.194</a> (Thầy Hồng)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
                <span>Email: <a href="mailto:thayhongdaylai@gmail.com" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>thayhongdaylai@gmail.com</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem'
        }}>
          <div>
             © 2026 Thầy Hồng Dạy Lái. Tất cả quyền được bảo lưu.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-light)' }}>
            <a href="#">Điều khoản dịch vụ</a>
            <a href="#">Chính sách bảo mật</a>
            <a href="#courses">Bảng giá đào tạo</a>
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
