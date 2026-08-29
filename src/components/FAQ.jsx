import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Hồ sơ đăng ký học lái xe ô tô & xe máy bao gồm những giấy tờ gì?',
      a: 'Bạn chỉ cần mang theo bản gốc hoặc ảnh chụp CCCD/CMND (còn hạn sử dụng). Thầy Hồng Dạy Lái sẽ hỗ trợ bạn chụp ảnh 3x4 đúng chuẩn GTVT và hướng dẫn bạn hoàn thiện hồ sơ trọn gói nhanh chóng.'
    },
    {
      q: 'Học phí tại trung tâm có thực sự trọn gói 100% không? Có phát sinh phụ phí không?',
      a: 'Cam kết 100% học phí trên hợp đồng là trọn gói cuối cùng! Đã bao gồm: lệ phí hồ sơ GTVT, khám sức khỏe, tài liệu học, giờ chạy DAT 800km, xe chip cảm ứng sa hình, xăng xe và tiền công giảng viên. Nếu phát sinh bất kỳ khoản phí ngoài hợp đồng, trung tâm hoàn tiền 200%.'
    },
    {
      q: 'Tôi bận làm việc hành chính từ Thứ 2 đến Thứ 6 thì có sắp xếp học được không?',
      a: 'Hoàn toàn được! Lịch học thực hành 1-Thầy-1-Trò cực kỳ linh hoạt từ 7h00 sáng đến 20h00 tối tất cả các ngày trong tuần (bao gồm Thứ 7 & Chủ Nhật). Học viên được tự do chọn khung giờ rảnh phù hợp với công việc.'
    },
    {
      q: 'Phương thức thanh toán học phí như thế nào? Có trả góp không?',
      a: 'Trung tâm hỗ trợ chia học phí làm 2 - 3 đợt đóng hoặc hỗ trợ trả góp 0% lãi suất. Đợt 1 bạn chỉ cần đóng từ 3.000.000đ để nộp hồ sơ lên Sở GTVT và bắt đầu xếp lớp học ngay.'
    },
    {
      q: 'Chưa từng chạm vào vô lăng ô tô thì học có khó không? Tỷ lệ đậu thế nào?',
      a: '95% học viên của Thầy Hồng đều chưa từng lái ô tô trước khi nhập học. Lộ trình đào tạo từ cơ bản trên cabin mô phỏng 3D đến thực hành thực tế 1-Kèm-1 giúp bạn làm quen xe rất dễ dàng. Tỷ lệ đậu kỳ sát hạch luôn đạt 99%.'
    }
  ];

  return (
    <section id="faq" style={{
      padding: '5rem 0',
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        <div className="section-title-wrapper" style={{ marginBottom: '2.5rem' }}>
          <div className="badge badge-blue">
            <Sparkles size={15} />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="section-title">
            Câu Hỏi Thường Gặp <span className="text-gradient">(FAQ)</span>
          </h2>
          <p className="section-subtitle">
            Những thắc mắc phổ biến nhất của học viên trước khi nộp hồ sơ nhập học lái xe.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="modern-card"
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  border: isOpen ? '1.5px solid var(--primary)' : '1px solid var(--border-color)',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.15rem 1.25rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--primary)' : 'var(--text-main)',
                    fontSize: 'clamp(0.95rem, 3vw, 1.05rem)',
                    fontWeight: 700
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} color={isOpen ? 'var(--primary)' : 'var(--text-muted)'} style={{ flexShrink: 0 }} />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    color={isOpen ? 'var(--primary)' : 'var(--text-muted)'}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.25rem 1.25rem 1.25rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    borderTop: '1px dashed var(--border-color)',
                    paddingTop: '0.85rem'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
