import React, { useState } from 'react';
import { Calculator, CheckCircle2, Gift, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';

export default function CostCalculator({ onOpenRegisterWithDetails }) {
  const [courseType, setCourseType] = useState('b');
  const [schedule, setSchedule] = useState('weekday');
  const [paymentMode, setPaymentMode] = useState('full');

  const courseRates = {
    a1: { name: 'Hạng Xe Máy A1 (125cc)', basePrice: 1100000, initialDeposit: 500000 },
    moto: { name: 'Hạng Mô Tô (PKL / Côn Tay)', basePrice: 3000000, initialDeposit: 1000000 },
    b: { name: 'Ô TÔ Hạng B', basePrice: 20000000, initialDeposit: 5000000 },
    c1: { name: 'Ô TÔ Hạng C1 (Xe Tải)', basePrice: 24000000, initialDeposit: 6000000 }
  };

  const selectedCourse = courseRates[courseType] || courseRates.b;
  let discount = 0;
  if (schedule === 'weekday') discount += 200000;
  if (paymentMode === 'full') discount += 500000;

  const finalPrice = Math.max(selectedCourse.basePrice - discount, 0);

  return (
    <section id="calculator" style={{ padding: '5rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <div className="badge badge-emerald">
            <Sparkles size={16} />
            <span>Minh Bạch Học Phí 100%</span>
          </div>
          <h2 className="section-title">
            Công Cụ Tính Học Phí <span className="text-gradient">Tự Động & Nhận Ưu Đãi</span>
          </h2>
          <p className="section-subtitle">
            Chọn nhu cầu học của bạn để xem dự toán học phí chính xác và các chương trình khuyến mãi hiện có.
          </p>
        </div>

        <div className="glass-card calc-card" style={{
          padding: '2.5rem',
          maxWidth: '1050px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          
          {/* Left Form controls */}
          <div>
            {/* Step 1: Course Selection */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
                1. Chọn hạng bằng muốn học:
              </label>
              <div className="course-select-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {[
                  { id: 'a1', label: 'Xe Máy A1 (1.1Tr)' },
                  { id: 'moto', label: 'Mô Tô PKL (3.0Tr)' },
                  { id: 'b', label: 'Ô Tô Hạng B (20Tr)' },
                  { id: 'c1', label: 'Ô Tô Hạng C1 (24Tr)' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCourseType(opt.id)}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '0.85rem',
                      border: courseType === opt.id ? '2px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                      background: courseType === opt.id ? 'var(--accent-emerald-glow)' : 'var(--bg-card)',
                      color: courseType === opt.id ? 'var(--accent-emerald)' : 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Schedule preference */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
                2. Chọn khung giờ rảnh để học:
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  { id: 'weekday', title: 'Ngày thường (Thứ 2 - Thứ 6)', note: 'Ưu đãi giảm thêm 200.000đ' },
                  { id: 'weekend', title: 'Cuối tuần (Thứ 7 & Chủ Nhật)', note: 'Không phụ thu học phí' },
                  { id: 'evening', title: 'Buổi tối linh hoạt', note: 'Phù hợp người đi làm công sở' }
                ].map(sch => (
                  <label
                    key={sch.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '0.85rem',
                      border: schedule === sch.id ? '1px solid var(--accent-blue)' : '1px solid var(--border-color)',
                      background: schedule === sch.id ? 'var(--accent-blue-glow)' : 'var(--bg-card)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="schedule"
                      checked={schedule === sch.id}
                      onChange={() => setSchedule(sch.id)}
                      style={{ accentColor: 'var(--accent-blue)' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>{sch.title}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{sch.note}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div>
              <label style={{ fontSize: '0.95rem', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
                3. Hình thức đóng học phí:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setPaymentMode('full')}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '0.85rem',
                    border: paymentMode === 'full' ? '2px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                    background: paymentMode === 'full' ? 'var(--accent-emerald-glow)' : 'var(--bg-card)',
                    color: paymentMode === 'full' ? 'var(--accent-emerald)' : 'var(--text-main)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  Trả Thẳng 1 Lần (-500k)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMode('installment')}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '0.85rem',
                    border: paymentMode === 'installment' ? '2px solid var(--accent-blue)' : '1px solid var(--border-color)',
                    background: paymentMode === 'installment' ? 'var(--accent-blue-glow)' : 'var(--bg-card)',
                    color: paymentMode === 'installment' ? 'var(--accent-blue)' : 'var(--text-main)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer'
                  }}
                >
                  Trả Góp 0% Lãi Suất
                </button>
              </div>
            </div>
          </div>

          {/* Right Price Breakdown Box */}
          <div style={{
            background: 'var(--bg-card-hover)',
            border: '1px solid var(--border-highlight)',
            borderRadius: '1.25rem',
            padding: '2rem',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--accent-emerald)',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <Calculator size={16} />
              <span>Dự Toán Học Phí Trọn Gói</span>
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
              {selectedCourse.name}
            </h3>

            {/* Price list item */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Giá niêm yết:</span>
                <span style={{ textDecoration: 'line-through' }}>{selectedCourse.basePrice.toLocaleString('vi-VN')}đ</span>
              </div>
              
              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  <span>Ưu đãi áp dụng:</span>
                  <span>-{discount.toLocaleString('vi-VN')}đ</span>
                </div>
              )}

              {paymentMode === 'installment' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-blue)', fontWeight: 600 }}>
                  <span>Tiền cọc làm hồ sơ ban đầu:</span>
                  <span>{selectedCourse.initialDeposit.toLocaleString('vi-VN')}đ</span>
                </div>
              )}
            </div>

            {/* Total Highlight */}
            <div style={{
              borderTop: '1px solid var(--border-color)',
              paddingTop: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                Tổng học phí thực tế phải đóng:
              </div>
              <div style={{
                fontSize: '2.3rem',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 800,
                color: 'var(--accent-emerald)'
              }}>
                {finalPrice.toLocaleString('vi-VN')}đ
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '0.2rem' }}>
                ✓ Đã bao gồm lệ phí thi + tài liệu + khám sức khỏe + xe tập
              </div>
            </div>

            {/* Gift inclusions */}
            <div style={{
              background: 'var(--bg-main)',
              borderRadius: '0.85rem',
              padding: '1rem',
              marginBottom: '1.75rem',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>
                <Gift size={15} />
                <span>Quà tặng kèm theo:</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <li>• Mũ bảo hiểm cao cấp tem chứng nhận Thầy Hồng Dạy Lái</li>
                <li>• Tài liệu 600 câu hỏi & bộ đĩa 120 tình huống mô phỏng</li>
                <li>• Bộ mẹo lý thuyết học nhanh thi đậu 100%</li>
              </ul>
            </div>

            {/* Submit button */}
            <button
              onClick={() => onOpenRegisterWithDetails({
                courseName: selectedCourse.name,
                finalPrice: `${finalPrice.toLocaleString('vi-VN')}đ`,
                schedule,
                paymentMode
              })}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.95rem' }}
            >
              <span>Giữ Suất Học Phí Ưu Đãi Này</span>
              <ArrowRight size={18} color="#051A10" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .calc-card { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 576px) {
          .course-select-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
