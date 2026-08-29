import React, { useState } from 'react';
import { Bike, Car, Truck, Check, Sparkles, ArrowRight } from 'lucide-react';

export default function CoursePackages({ onSelectCourse }) {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 'a1',
      category: 'bike',
      badge: 'Phổ Biến Nhất',
      badgeColor: 'badge-emerald',
      icon: Bike,
      name: 'Hạng Xe Máy A1',
      subtitle: 'Xe Phổ Thông 125cc',
      price: '1.100.000đ',
      duration: '1 - 2 tuần',
      schedule: 'Lịch thi Thứ 7 / Chủ Nhật',
      features: [
        'Học phí trọn gói 100% (Đã gồm lệ phí thi + bằng)',
        'Tặng tài liệu 250 câu hỏi chuẩn GTVT + App mẹo thi',
        'Tập xe chip vòng số 8 miễn phí trước ngày thi',
        'Hỗ trợ thu hồ sơ tận nơi hoặc đăng ký Online'
      ]
    },
    {
      id: 'moto',
      category: 'bike',
      badge: 'PKL & Côn Tay',
      badgeColor: 'badge-blue',
      icon: Bike,
      name: 'Hạng Mô Tô',
      subtitle: 'Xe PKL , Xe Tay Côn',
      price: '3.000.000đ',
      duration: '2 - 3 tuần',
      schedule: 'Lịch thi linh hoạt hàng tuần',
      features: [
        'Cấp xe tập PKL & Xe Tay Côn miễn phí',
        'Giảng viên hướng dẫn kỹ thuật thăng bằng & cua vòng số 8',
        'Bộ tài liệu ôn thi chuẩn & mẹo ghi nhớ nhanh',
        'Hỗ trợ thu hồ sơ tận nơi hoặc đăng ký Online'
      ]
    },
    {
      id: 'b',
      category: 'car',
      badge: 'Gia Đình & Dịch Vụ',
      badgeColor: 'badge-emerald',
      icon: Car,
      name: 'Ô TÔ Hạng B',
      subtitle: 'Xe số tự động & số sàn (B1 / B2)',
      price: '20.000.000đ',
      duration: '3 - 3.5 tháng',
      schedule: 'Học 1-Thầy-1-Trò (Tự chọn giờ)',
      features: [
        'Chạy đủ 710km / 810km DAT đường trường có giáo viên đưa đón tận nơi',
        'Bộ tài liệu ôn thi chuẩn & mẹo ghi nhớ nhanh',
        'Giờ học linh hoạt',
        'Luyện tập thành thạo 11 bài thi sa hình sát hạch',
        'Hỗ trợ thu hồ sơ tận nơi hoặc đăng ký Online'
      ]
    },
    {
      id: 'c1',
      category: 'truck',
      badge: 'Tải Trọng Lớn',
      badgeColor: 'badge-orange',
      icon: Truck,
      name: 'Ô TÔ Hạng C1',
      subtitle: 'Xe tải trọng tải lớn trên 3.5 tấn',
      price: '24.000.000đ',
      duration: '5 tháng',
      schedule: 'Lịch học linh hoạt',
      features: [
        'Chạy đủ 825km DAT đường trường có giáo viên đưa đón tận nơi',
        'Bộ tài liệu ôn thi chuẩn & mẹo ghi nhớ nhanh',
        'Giờ học linh hoạt',
        'Luyện tập thành thạo 11 bài thi sa hình sát hạch',
        'Hỗ trợ thu hồ sơ tận nơi hoặc đăng ký Online',
        'Đủ điều kiện nâng hạng C , D , CE sau này',
        'Hỗ trợ Chứng Chỉ Nghiệp Vụ Vận Tải'
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
            Cam kết không phát sinh bất kỳ chi phí phụ nào trong suốt quá trình học. Hỗ trợ đào tạo lý thuyết và thực hành chuẩn sát hạch.
          </p>

          {/* Filter Tabs */}
          <div style={{
            display: 'inline-flex',
            gap: '0.4rem',
            padding: '0.35rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '9999px',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            {[
              { id: 'all', label: 'Tất Cả Gói Học' },
              { id: 'bike', label: 'Xe Máy & Mô Tô' },
              { id: 'car', label: 'Ô Tô Hạng B' },
              { id: 'truck', label: 'Ô Tô Hạng C1' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: filter === tab.id ? 'var(--gradient-emerald)' : 'transparent',
                  color: filter === tab.id ? '#FFFFFF' : 'var(--text-muted)',
                  boxShadow: filter === tab.id ? '0 2px 10px rgba(16,185,129,0.3)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid - 4 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
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
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Badge & Icon - Grouped together nicely */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    marginBottom: '1.35rem'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'var(--accent-emerald-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={25} color="var(--accent-emerald)" />
                    </div>
                    <span className={`badge ${course.badgeColor}`} style={{
                      fontSize: '0.86rem',
                      fontWeight: 800,
                      padding: '0.45rem 0.95rem',
                      whiteSpace: 'nowrap',
                      borderRadius: '9999px',
                      letterSpacing: '0.01em',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                    }}>
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title & Subtitle */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem' }}>{course.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem', minHeight: '38px' }}>
                    {course.subtitle}
                  </p>

                  {/* Clean Official Price Section (No strikethrough) */}
                  <div style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--bg-card-hover)',
                    borderRadius: '1rem',
                    marginBottom: '1.25rem',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      Học phí trọn gói chính thức:
                    </div>
                    <span style={{
                      fontSize: '1.85rem',
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 800,
                      color: 'var(--accent-emerald)',
                      lineHeight: 1.15
                    }}>
                      {course.price}
                    </span>
                  </div>

                  {/* Features List */}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Quyền lợi gói học:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {course.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                          <Check size={15} color="var(--accent-emerald)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
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
                  <ArrowRight size={17} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
