import React, { useState } from 'react';
import { Bike, Car, Truck, Check, Sparkles, Clock, ShieldCheck, ArrowRight, Tag } from 'lucide-react';

export default function CoursePackages({ onSelectCourse }) {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 'a1',
      category: 'bike',
      badge: 'Phổ biến nhất',
      badgeColor: 'badge-emerald',
      icon: Bike,
      name: 'Bằng Xe Máy A1',
      subtitle: 'Xe máy thông thường (dưới 175cc)',
      originalPrice: '850.000đ',
      price: '650.000đ',
      duration: '1 - 2 tuần',
      schedule: 'Lịch thi Thứ 7 / Chủ Nhật',
      features: [
        'Học phí trọn gói 100% (Đã gồm lệ phí thi + bằng)',
        'Tặng tài liệu 200 câu hỏi chuẩn GTVT + App mẹo thi',
        'Tập xe chip vòng số 8 miễn phí trước ngày thi',
        'Hỗ trợ thu hồ sơ tận nhà hoặc đăng ký Online'
      ]
    },
    {
      id: 'a2',
      category: 'bike',
      badge: 'Đam mê PKL',
      badgeColor: 'badge-blue',
      icon: Bike,
      name: 'Bằng Mô Tô A2',
      subtitle: 'Xe phân khối lớn (trên 175cc)',
      originalPrice: '2.200.000đ',
      price: '1.850.000đ',
      duration: '2 - 3 tuần',
      schedule: 'Lịch thi linh hoạt hàng tuần',
      features: [
        'Cấp xe tập PKL (Rebel 250 / Z300 / LA250) miễn phí',
        'Giảng viên hướng dẫn kỹ thuật thăng bằng & cua vòng 8',
        'Tài liệu 450 câu hỏi & bộ mẹo ghi nhớ nhanh',
        'Hỗ trợ đổi bằng nhựa PET siêu bền'
      ]
    },
    {
      id: 'b1',
      category: 'car',
      badge: 'Khuyên Dùng Gia Đình',
      badgeColor: 'badge-emerald',
      icon: Car,
      name: 'Bằng Ô Tô B1 (Số Tự Động)',
      subtitle: 'Xe gia đình 4-9 chỗ số tự động',
      originalPrice: '12.500.000đ',
      price: '10.500.000đ',
      duration: '3.5 tháng',
      schedule: 'Học 1-Thầy-1-Trò (Tự chọn giờ)',
      features: [
        'Chạy đủ 800km DAT đường trường có camera giám sát',
        'Thực hành 100% trên xe Toyota Vios đời mới lạnh mát',
        'Giờ học tự chọn (Có lớp Thứ 7, CN không phụ thu)',
        'Phòng cabin mô phỏng 3D chuẩn quy định GTVT',
        'Hỗ trợ chia làm 2 - 3 lần đóng (Trả góp 0%)'
      ]
    },
    {
      id: 'b2',
      category: 'car',
      badge: 'Kinh Doanh & Grab',
      badgeColor: 'badge-orange',
      icon: Car,
      name: 'Bằng Ô Tô B2 (Số Sàn)',
      subtitle: 'Lái xe số sàn, xe kinh doanh dịch vụ',
      originalPrice: '13.500.000đ',
      price: '11.500.000đ',
      duration: '3.5 - 4 tháng',
      schedule: 'Sáng / Chiều / Tối / Cuối tuần',
      features: [
        'Chạy đủ 810km DAT (Bao gồm chạy đêm & đường trường)',
        'Luyện tập thành thạo 11 bài sa hình sát hạch',
        'Được quyền chọn giáo viên & đổi giáo viên nếu muốn',
        'Tặng bộ đĩa đĩa CD 120 tình huống mô phỏng sát hạch',
        'Cam kết không phụ thu tiền xăng xe, giáo viên'
      ]
    },
    {
      id: 'c',
      category: 'truck',
      badge: 'Chuyên Nghiệp',
      badgeColor: 'badge-blue',
      icon: Truck,
      name: 'Bằng Xe Tải Hạng C',
      subtitle: 'Xe tải trọng tải lớn trên 3.5 tấn',
      originalPrice: '18.500.000đ',
      price: '16.500.000đ',
      duration: '5 tháng',
      schedule: 'Lịch học linh hoạt',
      features: [
        'Đào tạo kỹ năng vận tải hàng hóa đường dài chuyên nghiệp',
        'Thực hành lái xe tải Jac / Hyundai đời mới tải trọng lớn',
        'Đủ điều kiện nâng hạng D, E sau này',
        'Hỗ trợ giới thiệu việc làm tại các tập đoàn vận tải'
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
            gap: '0.5rem',
            padding: '0.4rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '9999px',
            marginTop: '2rem'
          }}>
            {[
              { id: 'all', label: 'Tất Cả Gói Học' },
              { id: 'bike', label: 'Xe Máy (A1 - A2)' },
              { id: 'car', label: 'Ô Tô (B1 - B2)' },
              { id: 'truck', label: 'Xe Tải (Hạng C)' }
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
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
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
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'var(--accent-emerald-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={26} color="var(--accent-emerald)" />
                    </div>
                    <span className={`badge ${course.badgeColor}`}>{course.badge}</span>
                  </div>

                  {/* Course Title & Subtitle */}
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>{course.name}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    {course.subtitle}
                  </p>

                  {/* Price Section */}
                  <div style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--bg-card-hover)',
                    borderRadius: '1rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem'
                  }}>
                    <span style={{
                      fontSize: '1.85rem',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      color: 'var(--accent-emerald)'
                    }}>
                      {course.price}
                    </span>
                    <span style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-light)',
                      textDecoration: 'line-through'
                    }}>
                      {course.originalPrice}
                    </span>
                  </div>

                  {/* Meta info */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      <Clock size={16} color="var(--accent-blue)" />
                      <span>Thời gian đào tạo: <strong>{course.duration}</strong></span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      <ShieldCheck size={16} color="var(--accent-emerald)" />
                      <span>Lịch thi: <strong>{course.schedule}</strong></span>
                    </div>
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
