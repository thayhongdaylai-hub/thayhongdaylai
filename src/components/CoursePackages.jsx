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
    <section id="courses" style={{ padding: '5rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <div className="badge badge-emerald">
            <Sparkles size={16} />
            <span>Học Phí Trọn Gói • Minh Bạch 100%</span>
          </div>
          <h2 className="section-title">
            Các Gói Đào Tạo <span className="text-gradient">Lái Xe Ô Tô & Xe Máy</span>
          </h2>
          <p className="section-subtitle">
            Cam kết không phát sinh bất kỳ chi phí phụ nào trong suốt quá trình học. Hỗ trợ đóng trả góp 0% lãi suất.
          </p>

          {/* Filter Tabs */}
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.4rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '9999px',
            marginTop: '2rem'
          }}>
            {[
              { id: 'all', label: 'Tất Cả Gói Học' },
              { id: 'bike', label: 'Xe Máy (A - A1)' },
              { id: 'car', label: 'Ô Tô (B - C1)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.75rem',
            marginTop: '2rem',
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
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '13px',
                      background: course.iconBg,
                      border: `1px solid ${course.iconBorder}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={22} color={course.iconColor} />
                    </div>
                    <span
                      className={`badge ${course.badgeColor}`}
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        letterSpacing: '0.01em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title & Subtitle */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem', minHeight: '3.2rem', lineHeight: 1.25, color: 'var(--text-main)' }}>
                    {course.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.35rem', minHeight: '40px', lineHeight: 1.45 }}>
                    {course.subtitle}
                  </p>

                  {/* Price Section */}
                  <div style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--bg-card-hover)',
                    borderRadius: '1rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      Học phí trọn gói:
                    </div>
                    <span style={{
                      fontSize: '1.85rem',
                      fontFamily: "'Google Sans', 'Quicksand', sans-serif",
                      fontWeight: 800,
                      color: 'var(--accent-emerald)',
                      lineHeight: 1.15
                    }}>
                      {course.price}
                    </span>
                  </div>

                  {/* Features List */}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Quyền lợi gói học:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {course.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          <Check size={16} color="var(--accent-emerald)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
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
                  style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
                >
                  <span>Đăng Ký Khóa Học Này</span>
                  <ArrowRight size={18} color="#051A10" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
