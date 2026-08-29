import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Send, Gift } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: 'b',
    branch: 'hn_nvc',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');

  const courseMap = {
    'a': 'Xe Máy Hạng A (Tay Côn) - A02 (SH) - 3 Triệu',
    'a1': 'Xe Máy Hạng A1 (125cc Trở Xuống) - 1.3 Triệu',
    'b': 'Ô tô Hạng B - 19 Triệu',
    'c1': 'Ô tô Hạng C1 - 24 Triệu',
    'up_c': 'Nâng Hạng C (7T5 Trở Lên) - 17 Triệu',
    'up_d1': 'Nâng Hạng D1 (16 Chỗ) - 18 Triệu',
    'up_d2': 'Nâng Hạng D2 (29 Chỗ) - 18 Triệu',
    'up_d': 'Nâng Hạng D (Trên 29 Chỗ) - 18 Triệu',
    'up_ce': 'Nâng Hạng CE (Sơ Mi Rơ Moóc Trên 7T5) - 19 Triệu'
  };

  const branchMap = {
    'hn_nvc': 'Hà Nội: 304 Nguyễn Văn Cừ / Long Biên',
    'hn_vh': 'Hà Nội: Số 14 / Ngách 190/11 / Phường Việt Hưng / Long Biên',
    'bn_ts': 'Bắc Ninh: Phố Dương Lôi / Phường Từ Sơn'
  };

  useEffect(() => {
    if (initialData && initialData.courseName) {
      const cName = initialData.courseName.toUpperCase();
      if (cName.includes('CE')) setFormData(prev => ({ ...prev, course: 'up_ce' }));
      else if (cName.includes('D1')) setFormData(prev => ({ ...prev, course: 'up_d1' }));
      else if (cName.includes('D2')) setFormData(prev => ({ ...prev, course: 'up_d2' }));
      else if (cName.includes('NÂNG HẠNG D') || (cName.includes('HẠNG D') && !cName.includes('D1') && !cName.includes('D2'))) setFormData(prev => ({ ...prev, course: 'up_d' }));
      else if (cName.includes('NÂNG HẠNG C') || cName.includes('HẠNG C (')) setFormData(prev => ({ ...prev, course: 'up_c' }));
      else if (cName.includes('A1')) setFormData(prev => ({ ...prev, course: 'a1' }));
      else if (cName.includes('A02') || cName.includes('SH') || cName.includes('TAY CÔN') || cName.includes('HẠNG A')) setFormData(prev => ({ ...prev, course: 'a' }));
      else if (cName.includes('C1')) setFormData(prev => ({ ...prev, course: 'c1' }));
      else if (cName.includes('B')) setFormData(prev => ({ ...prev, course: 'b' }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const randomCode = 'VD-' + Math.floor(100000 + Math.random() * 900000);
    setVoucherCode(randomCode);

    const courseText = courseMap[formData.course] || formData.course;
    const branchText = branchMap[formData.branch] || formData.branch;
    const timeText = new Date().toLocaleString('vi-VN');

    try {
      await fetch('https://formsubmit.co/ajax/thayhongdaylai@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[ĐĂNG KÝ HỌC MỚI] ${formData.fullName} - ${courseText}`,
          'Họ và tên học viên': formData.fullName,
          'Số điện thoại / Zalo': formData.phone,
          'Hạng bằng đăng ký': courseText,
          'Khu vực địa điểm đăng ký': branchText,
          'Mã Voucher ưu đãi': randomCode,
          'Thời gian đăng ký': timeText
        })
      });
    } catch (err) {
      console.warn('Gửi email đăng ký warning:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
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
        maxWidth: '520px',
        padding: '2.5rem',
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

            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>
              Đăng Ký Tư Vấn Khóa Học
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Điền thông tin bên dưới, chuyên viên tư vấn của Thầy Hồng sẽ gọi lại cho bạn trong vòng 5 phút.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {/* Full Name */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
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
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  Số điện thoại Zalo <span style={{ color: 'var(--accent-red)' }}>*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0988 123 456"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Course Select */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                    Chọn hạng bằng:
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
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <optgroup label="Hạng Bằng Đào Tạo Lần Đầu">
                      <option value="a">Xe Máy Hạng A (Tay Côn) - A02 (SH) - 3 Triệu</option>
                      <option value="a1">Xe Máy Hạng A1 (125cc Trở Xuống) - 1.3 Triệu</option>
                      <option value="b">Ô tô Hạng B - 19 Triệu</option>
                      <option value="c1">Ô tô Hạng C1 - 24 Triệu</option>
                    </optgroup>
                    <optgroup label="Khóa Học Nâng Hạng Bằng">
                      <option value="up_c">Nâng Hạng C (7T5 Trở Lên) - 17 Triệu</option>
                      <option value="up_d1">Nâng Hạng D1 (16 Chỗ) - 18 Triệu</option>
                      <option value="up_d2">Nâng Hạng D2 (29 Chỗ) - 18 Triệu</option>
                      <option value="up_d">Nâng Hạng D (Trên 29 Chỗ) - 18 Triệu</option>
                      <option value="up_ce">Nâng Hạng CE (Sơ Mi Rơ Moóc Trên 7T5) - 19 Triệu</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                    Khu vực sân tập:
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
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option value="hn_nvc">Hà Nội: 304 Nguyễn Văn Cừ / Long Biên</option>
                    <option value="hn_vh">Hà Nội: Số 14 / Ngách 190/11 / Phường Việt Hưng / Long Biên</option>
                    <option value="bn_ts">Bắc Ninh: Phố Dương Lôi / Phường Từ Sơn</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', fontSize: '1rem', opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
              >
                {isSubmitting ? (
                  <span>Đang gửi thông tin về Gmail...</span>
                ) : (
                  <>
                    <Send size={18} color="#051A10" />
                    <span>Gửi Đăng Ký & Nhận Ưu Đãi</span>
                  </>
                )}
              </button>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', textAlign: 'center', marginTop: '0.2rem' }}>
                🔒 Thông tin của bạn được bảo mật tuyệt đối 100% theo quy định GTVT.
              </div>
            </form>
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

            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
              Đăng Ký Thành Công!
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Cảm ơn học viên <strong>{formData.fullName}</strong>. Chuyên viên tuyển sinh của Thầy Hồng sẽ gọi điện hỗ trợ bạn theo SĐT Zalo <strong>{formData.phone}</strong> trong vòng 5 phút.
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
                <span>Mã Voucher Giảm 1.000.000đ Của Bạn:</span>
              </div>
              <div style={{
                fontSize: '1.8rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                color: 'var(--accent-emerald)',
                letterSpacing: '0.08em'
              }}>
                {voucherCode}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                Vui lòng chụp màn hình hoặc đọc mã này cho tư vấn viên để nhận ưu đãi!
              </div>
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
