import React, { useState } from 'react';
import { Bike, Car, Truck, Check, Sparkles, ArrowRight } from 'lucide-react';

export default function CoursePackages({ onSelectCourse }) {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 'a',
      category: 'bike',
      badge: 'Tay Côn & SH',
      badgeColor: 'badge-blue',
      icon: Bike,
      iconColor: 'var(--accent-blue)',
      iconBg: 'var(--accent-blue-glow)',
      iconBorder: 'rgba(59, 130, 246, 0.3)',
      name: 'Xe Máy Hạng A (Tay Côn) - A02 (SH)',
      subtitle: 'Xe tay côn, xe tay ga SH, xe trên 125cc',
      price: '3.000.000đ',
      features: [
        'Học phí trọn gói 3.000.000đ (Đã gồm hồ sơ + thi)',
        'Cấp xe tập tay côn / SH miễn phí trước ngày thi',
        'Giảng viên hướng dẫn kỹ thuật thăng bằng & cua vòng 8',
        'Tài liệu bộ câu hỏi chuẩn GTVT + App mẹo thi độc quyền'
      ]
    },
    {
      id: 'a1',
      category: 'bike',
      badge: 'Phổ biến nhất',
      badgeColor: 'badge-emerald',
      icon: Bike,
      iconColor: 'var(--accent-emerald)',
      iconBg: 'var(--accent-emerald-glow)',
      iconBorder: 'rgba(0, 229, 153, 0.3)',
      name: 'Xe Máy Hạng A1 (125cc Trở Xuống)',
      subtitle: 'Xe máy thông thường từ 125cc trở xuống',
      price: '1.300.000đ',
      features: [
        'Học phí trọn gói 1.300.000đ (Cam kết không phát sinh)',
        'Tặng tài liệu câu hỏi chuẩn GTVT + App mẹo thi',
        'Tập xe chip vòng số 8 miễn phí tại sân sát hạch',
        'Hỗ trợ thu hồ sơ tận nhà hoặc đăng ký Online'
      ]
    },
    {
      id: 'b',
      category: 'car',
      badge: 'Gia Đình & Dịch Vụ',
      badgeColor: 'badge-emerald',
      icon: Car,
      iconColor: 'var(--accent-emerald)',
      iconBg: 'var(--accent-emerald-glow)',
      iconBorder: 'rgba(0, 229, 153, 0.3)',
      name: 'Ô tô Hạng B',
      subtitle: 'Xe gia đình & kinh doanh 4 - 9 chỗ',
      price: '19.000.000đ',
      features: [
        'Học phí trọn gói 19.000.000đ (Hỗ trợ chia nhỏ 2-3 lần đóng)',
        'Chạy đủ 800km DAT đường trường có camera giám sát',
        'Thực hành 100% trên xe đời mới máy lạnh mát mẻ',
        'Giờ học linh hoạt (Thứ 7, Chủ Nhật không phụ thu)',
        'Cam kết đào tạo đến khi lấy bằng, không phát sinh chi phí'
      ]
    },
    {
      id: 'c1',
      category: 'car',
      badge: 'Chuyên Nghiệp',
      badgeColor: 'badge-orange',
      icon: Truck,
      iconColor: 'var(--accent-orange)',
      iconBg: 'rgba(245, 158, 11, 0.15)',
      iconBorder: 'rgba(245, 158, 11, 0.3)',
      name: 'Ô tô Hạng C1',
      subtitle: 'Xe ô tô tải trọng từ 3.500kg đến 7.500kg',
      price: '24.000.000đ',
      features: [
        'Học phí trọn gói 24.000.000đ (Trọn gói từ A-Z)',
        'Đào tạo kỹ năng vận tải hàng hóa đường dài chuyên nghiệp',
        'Thực hành trên xe tải chuẩn thi sát hạch',
        'Chạy đủ km DAT chuẩn quy định mới nhất của GTVT',
        'Hỗ trợ bảo lưu khóa học & sắp xếp thi sát hạch nhanh'
      ]
    }
  ];

  const filteredCourses = courses.filter(c => {
    if (filter === 'all') return true;
    return c.category === filter;
  });

  return (
    <section id="courses" style={{ padding: '4rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-title-wrapper" style={{ marginBottom: '2.5rem' }}>
          <div className="badge badge-emerald">
            <Sparkles size={15} />
            <span>Học Phí Trọn Gói • Minh Bạch 100%</span>
          </div>
          <h2 className="section-title">
            Các Gói Đào Tạo <span className="text-gradient">Lái Xe Ô Tô & Xe Máy</span>
          </h2>
          <p className="section-subtitle">
            Cam kết không phát sinh bất kỳ chi phí phụ nào trong suốt quá trình học. Hỗ trợ đóng trả góp 0% lãi suất.
          </p>

          {/* Filter Tabs (Horizontal Scrollable on Mobile) */}
          <div
            className="no-scrollbar"
            style={{
              display: 'inline-flex',
              maxWidth: '100%',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              WebkitOverflowScrolling: 'touch',
              gap: '0.4rem',
              padding: '0.35rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '9999px',
              marginTop: '1.5rem'
            }}
          >
            {[
              { id: 'all', label: 'Tất Cả Gói Học' },
              { id: 'bike', label: 'Xe Máy (A - A1)' },
              { id: 'car', label: 'Ô Tô (B - C1)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  background: filter === tab.id ? 'var(--gradient-emerald)' : 'transparent',
                  color: filter === tab.id ? '#051A10' : 'var(--text-muted)',
                  transition: 'all 0.25s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {filteredCourses.map(course => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  borderRadius: '1.25rem'
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: course.iconBg,
                      border: `1px solid ${course.iconBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={20} color={course.iconColor} />
                    </div>
                    <span
                      className={`badge ${course.badgeColor}`}
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.01em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title & Subtitle */}
                  <h3 style={{ fontSize: '1.22rem', fontWeight: 800, marginBottom: '0.35rem', lineHeight: 1.3, color: 'var(--text-main)' }}>
                    {course.name}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.45 }}>
                    {course.subtitle}
                  </p>

                  {/* Price Section */}
                  <div style={{
                    padding: '0.85rem 1.15rem',
                    background: 'var(--bg-card-hover)',
                    borderRadius: '0.85rem',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
                      Học phí trọn gói:
                    </div>
                    <span style={{
                      fontSize: '1.65rem',
                      fontFamily: "'Google Sans', 'Quicksand', sans-serif",
                      fontWeight: 800,
                      color: 'var(--accent-emerald)',
                      lineHeight: 1.15
                    }}>
                      {course.price}
                    </span>
                  </div>

                  {/* Features List */}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Quyền lợi gói học:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {course.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                          <Check size={15} color="var(--accent-emerald)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action CTA */}
                <button
                  onClick={() => onSelectCourse(course.name)}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem' }}
                >
                  <span>Đăng Ký Khóa Học Này</span>
                  <ArrowRight size={17} color="#051A10" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
