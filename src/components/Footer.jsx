import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      padding: '4.5rem 0 2rem 0',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '3rem',
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
                <ShieldCheck size={26} color="#051A10" />
              </div>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>
                 THẦY HỒNG<span className="text-gradient"> DẠY LÁI</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Trung tâm đào tạo & sát hạch lái xe hàng đầu Việt Nam. Cấp giấy phép đào tạo số 128/GP-GTVT do Sở Giao Thông Vận Tải thẩm định.
            </p>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="var(--accent-emerald)" />
              <span>Thời gian làm việc: 7h30 - 20h00 (Cả T7 & CN)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Các Hạng Đào Tạo
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><a href="#courses">Bằng Xe Máy A1 (Dưới 175cc)</a></li>
              <li><a href="#courses">Bằng Mô Tô A2 (Xe PKL)</a></li>
              <li><a href="#courses">Bằng Ô Tô B1 (Số Tự Động)</a></li>
              <li><a href="#courses">Bằng Ô Tô B2 (Số Sàn Dịch Vụ)</a></li>
              <li><a href="#courses">Bằng Xe Tải Hạng C</a></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Hỗ Trợ Học Viên
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><a href="#roadmap">Lộ trình đào tạo chuẩn GTVT</a></li>
              <li><a href="#calculator">Tính dự toán học phí</a></li>
              <li><a href="#facilities">Hệ thống sân tập chuẩn ISO</a></li>
              <li><a href="#faq">Câu hỏi thường gặp</a></li>
              <li><a href="#">Chính sách hoàn tiền 100%</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Trụ Sở & Sân Tập
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Hà Nội:</strong> 18 Cầu Giấy, Q. Cầu Giấy & Sân tập Sài Đồng, Long Biên</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>TP.HCM:</strong> 256 Võ Văn Ngân, Thủ Đức & Sân tập Tân Bình</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span>Hotline 24/7: <strong>0988.123.456</strong></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
                 <span>Email: tuyensinh@thayhongdaylai.edu.vn</span>
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
             © 2026 Trung Tâm Đào Tạo Lái Xe Thầy Hồng Dạy Lái. Tất cả quyền được bảo lưu.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-light)' }}>
            <a href="#">Điều khoản sử dụng</a>
            <a href="#">Chính sách bảo mật</a>
            <a href="#">Giấy phép GTVT</a>
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
