import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Send, Gift, MapPin, Phone, Mail } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: 'b',
    branch: 'hanoi',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');

  useEffect(() => {
    if (initialData) {
      if (initialData.courseName) {
        const c = initialData.courseName.toUpperCase();
        if (c.includes('A1')) setFormData(prev => ({ ...prev, course: 'a1' }));
        else if (c.includes('MÔ TÔ') || c.includes('PKL') || c.includes('A2') || c.includes('A')) setFormData(prev => ({ ...prev, course: 'moto' }));
        else if (c.includes('C1')) setFormData(prev => ({ ...prev, course: 'c1' }));
        else if (c.includes('CE')) setFormData(prev => ({ ...prev, course: 'ce' }));
        else if (c.includes('D1')) setFormData(prev => ({ ...prev, course: 'd1' }));
        else if (c.includes('D2')) setFormData(prev => ({ ...prev, course: 'd2' }));
        else if (c.includes('HẠNG D') || c.includes('NÂNG HẠNG D')) setFormData(prev => ({ ...prev, course: 'd' }));
        else if (c.includes('NÂNG HẠNG C') || c === 'C') setFormData(prev => ({ ...prev, course: 'up-c' }));
        else if (c.includes('B')) setFormData(prev => ({ ...prev, course: 'b' }));
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = 'THAYHONG-' + Math.floor(100000 + Math.random() * 900000);
    setVoucherCode(randomCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 200,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '540px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2.25rem',
        position: 'relative',
        borderRadius: '1.75rem',
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-card-hover)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-muted)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Header Promo Banner */}
            <div className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
              <Sparkles size={16} />
              <span>Tặng ngay Voucher 1.000.000đ khi đăng ký Online</span>
            </div>

            <h3 style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
              Đăng Ký Tư Vấn Khóa Học
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Điền thông tin bên dưới, Thầy Hồng sẽ trực tiếp liên hệ tư vấn và xếp lịch học phù hợp nhất cho bạn trong 5 phút.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.05rem' }}>
              {/* Full Name */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Họ và tên học viên <span style={{ color: 'var(--accent-red)' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Số điện thoại Zalo <span style={{ color: 'var(--accent-red)' }}>*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0983 406 221"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Course Select & Branch */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Chọn khóa học / Nâng hạng:
                  </label>
                  <select
                    value={formData.course}
                    onChange={e => setFormData({ ...formData, course: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  >
                    <optgroup label="Khóa Học Tiêu Chuẩn">
                      <option value="a1">Hạng Xe Máy A1 - 1.100.000đ</option>
                      <option value="moto">Hạng Mô Tô PKL & Côn Tay - 3.000.000đ</option>
                      <option value="b">Ô TÔ Hạng B - 20.000.000đ</option>
                      <option value="c1">Ô TÔ Hạng C1 - 24.000.000đ</option>
                    </optgroup>
                    <optgroup label="Khóa Nâng Hạng GPLX">
                      <option value="up-c">Nâng Hạng C (B lên C) - 17.000.000đ</option>
                      <option value="d1">Nâng Hạng D1 (B/C lên D1) - 18.000.000đ</option>
                      <option value="d2">Nâng Hạng D2 (C/D1 lên D2) - 18.000.000đ</option>
                      <option value="d">Nâng Hạng D (C/D2 lên D) - 18.000.000đ</option>
                      <option value="ce">Nâng Hạng CE (C lên CE) - 19.000.000đ</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Địa điểm đăng ký / Học:
                  </label>
                  <select
                    value={formData.branch}
                    onChange={e => setFormData({ ...formData, branch: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  >
                    <option value="hanoi">Hà Nội (Thượng Thanh, Long Biên)</option>
                    <option value="bacninh">Bắc Ninh (Dương Lôi, Từ Sơn)</option>
                    <option value="online">Hỗ trợ thu hồ sơ Online tận nơi</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.95rem', marginTop: '0.5rem', fontSize: '1rem' }}
              >
                <Send size={18} color="#051A10" />
                <span>Gửi Đăng Ký & Nhận Ưu Đãi</span>
              </button>
            </form>

            {/* Direct Contact & Address Footer in Modal */}
            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.55rem',
              fontSize: '0.82rem',
              color: 'var(--text-muted)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span><strong>Hà Nội:</strong> Số 14 Ngõ 190/10 Phố Thượng Thanh, Long Biên, Hà Nội.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span><strong>Bắc Ninh:</strong> Phố Dương Lôi, Phường Từ Sơn, Tỉnh Bắc Ninh.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span><strong>Hotline Thầy Hồng:</strong> 0983.406.221 - 0336.611.194</span>
              </div>
            </div>
          </>
        ) : (
          /* Success Dialog State */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'var(--accent-emerald-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={42} color="var(--accent-emerald)" />
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              Đăng Ký Thành Công!
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Cảm ơn học viên <strong>{formData.fullName}</strong>. Thầy Hồng sẽ trực tiếp gọi điện hỗ trợ bạn qua SĐT Zalo <strong>{formData.phone}</strong> trong vòng 5 phút.
            </p>

            {/* Voucher Card */}
            <div style={{
              background: 'var(--bg-card-hover)',
              border: '2px dashed var(--accent-emerald)',
              borderRadius: '1.25rem',
              padding: '1.25rem',
              marginBottom: '2rem'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-emerald)', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <Gift size={16} />
                <span>Mã Voucher Ưu Đãi Của Bạn:</span>
              </div>
              <div style={{
                fontSize: '1.8rem',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 800,
                color: 'var(--accent-emerald)',
                letterSpacing: '0.08em'
              }}>
                {voucherCode}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                Vui lòng chụp màn hình hoặc đọc mã này cho Thầy Hồng để nhận ưu đãi!
              </div>
            </div>

            <div style={{
              padding: '1rem',
              borderRadius: '12px',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem'
            }}>
              <div><strong>📍 Cơ sở Hà Nội:</strong> Số 14 Ngõ 190/10 Phố Thượng Thanh, Long Biên, Hà Nội.</div>
              <div><strong>📍 Cơ sở Bắc Ninh:</strong> Phố Dương Lôi, Phường Từ Sơn, Tỉnh Bắc Ninh.</div>
              <div><strong>📞 Hotline Thầy Hồng:</strong> 0983.406.221 - 0336.611.194</div>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-secondary"
              style={{ width: '100%', padding: '0.9rem' }}
            >
              Hoàn Tất & Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
