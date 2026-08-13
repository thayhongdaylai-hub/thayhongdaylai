import React, { useState } from 'react';
import { Bike, Car, Truck, Check, Sparkles, Clock, ShieldCheck, ArrowRight, Tag } from 'lucide-react';

export default function CoursePackages({ onSelectCourse }) {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 'a',
      category: 'bike',
      badge: 'Tay Côn & SH',
      badgeColor: 'badge-blue',
      icon: Bike,
      name: 'Xe Máy Hạng A (Tay Côn) - A02 (SH)',
      subtitle: 'Xe tay côn, xe tay ga SH, xe trên 125cc',
      originalPrice: '3.500.000đ',
      price: '3.000.000đ',
      duration: '1 - 2 tuần',
      schedule: 'Lịch thi linh hoạt hàng tuần',
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
      name: 'Xe Máy Hạng A1 (125cc Trở Xuống)',
      subtitle: 'Xe máy thông thường từ 125cc trở xuống',
      originalPrice: '1.600.000đ',
      price: '1.300.000đ',
      duration: '1 - 2 tuần',
      schedule: 'Lịch thi Thứ 7 / Chủ Nhật',
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
      name: 'Ô tô Hạng B',
      subtitle: 'Xe gia đình & kinh doanh 4 - 9 chỗ',
      originalPrice: '22.000.000đ',
      price: '19.000.000đ',
      duration: '3.5 tháng',
      schedule: 'Học 1-Thầy-1-Trò (Tự chọn giờ)',
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
      name: 'Ô tô Hạng C1',
      subtitle: 'Xe ô tô tải trọng từ 3.500kg đến 7.500kg',
      originalPrice: '27.000.000đ',
      price: '24.000.000đ',
      duration: '4.5 - 5 tháng',
      schedule: 'Lịch học linh hoạt',
      features: [
        'Học phí trọn gói 24.000.000đ (Trọn gói từ A-Z)',
        'Đào tạo kỹ năng vận tải hàng hóa đường dài chuyên nghiệp',
        'Thực hành trên xe tải chuẩn thi sát hạch',
        'Chạy đủ km DAT chuẩn quy định mới nhất của GTVT',
        'Hỗ trợ bảo lưu khóa học & sắp xếp lịch thi nhanh'
      ]
    },
    /* Các gói Nâng Hạng */
    {
      id: 'up_c',
      category: 'upgrade',
      badge: 'Nâng Hạng C',
      badgeColor: 'badge-orange',
      icon: Truck,
      name: 'Nâng Hạng C (7T5 Trở Lên)',
      subtitle: 'Nâng hạng lái xe tải trọng lớn trên 7.5 tấn',
      originalPrice: '19.500.000đ',
      price: '17.000.000đ',
      duration: '1.5 - 2 tháng',
      schedule: 'Lịch thi sát hạch nhanh',
      features: [
        'Học phí trọn gói 17.000.000đ (Đã gồm hồ sơ + lệ phí thi)',
        'Thực hành 100% Chạy DAT trên xe tải trọng lớn trên 7.5 tấn',
        'Tài liệu bộ câu hỏi chuẩn GTVT + App mẹo thi độc quyền',
        'Hỗ trợ sắp xếp lịch thi nâng hạng sớm nhất'
      ]
    },
    {
      id: 'up_d1',
      category: 'upgrade',
      badge: 'Nâng Hạng D1',
      badgeColor: 'badge-blue',
      icon: Car,
      name: 'Nâng Hạng D1 (16 Chỗ)',
      subtitle: 'Nâng hạng chở người đến 16 chỗ ngồi',
      originalPrice: '20.500.000đ',
      price: '18.000.000đ',
      duration: '1.5 - 2 tháng',
      schedule: 'Lịch thi sát hạch liên tục',
      features: [
        'Học phí trọn gói 18.000.000đ (Trọn gói không phát sinh)',
        'Xe tập thực hành chạy DAT 16 chỗ của trường',
        'Đào tạo kỹ năng vận tải hành khách an toàn chuyên nghiệp',
        'Tặng phần mềm ôn thi lý thuyết chuẩn 100%'
      ]
    },
    {
      id: 'up_d2',
      category: 'upgrade',
      badge: 'Nâng Hạng D2',
      badgeColor: 'badge-blue',
      icon: Car,
      name: 'Nâng Hạng D2 (29 Chỗ)',
      subtitle: 'Nâng hạng chở người từ 16 đến 29 chỗ',
      originalPrice: '20.500.000đ',
      price: '18.000.000đ',
      duration: '1.5 - 2 tháng',
      schedule: 'Lịch thi hàng tuần',
      features: [
        'Học phí trọn gói 18.000.000đ (Cam kết trọn gói từ A-Z)',
        'Thực hành xe 29 chỗ tiêu chuẩn sát hạch',
        'Hỗ trợ hoàn thiện đầy đủ hồ sơ kinh nghiệm lái xe',
        'Tặng phần mềm ôn thi lý thuyết chuẩn 100%'
      ]
    },
    {
      id: 'up_d',
      category: 'upgrade',
      badge: 'Nâng Hạng D',
      badgeColor: 'badge-emerald',
      icon: Car,
      name: 'Nâng Hạng D (Trên 29 Chỗ)',
      subtitle: 'Nâng hạng lái xe khách lớn trên 29 chỗ',
      originalPrice: '20.500.000đ',
      price: '18.000.000đ',
      duration: '1.5 - 2 tháng',
      schedule: 'Sắp xếp lịch thi ưu tiên',
      features: [
        'Học phí trọn gói 18.000.000đ (Đã gồm lệ phí thi + bằng)',
        'Đào tạo thực hành xe 45 chỗ của trường',
        'Kỹ năng xử lý tình huống giao thông xe khách đường dài',
        'Hỗ trợ tư vấn thủ tục nhanh chóng'
      ]
    },
    {
      id: 'up_ce',
      category: 'upgrade',
      badge: 'Nâng Hạng CE',
      badgeColor: 'badge-orange',
      icon: Truck,
      name: 'Nâng Hạng CE (Sơ Mi Rơ Moóc Trên 7T5)',
      subtitle: 'Lái xe đầu kéo container, sơ mi rơ moóc',
      originalPrice: '22.000.000đ',
      price: '19.000.000đ',
      duration: '2 tháng',
      schedule: 'Lịch thi sát hạch chuyên nghiệp',
      features: [
        'Học phí trọn gói 19.000.000đ (Không phụ thu thêm chi phí)',
        'Tập thực hành xe đầu kéo container ghép xe sa hình của trường',
        'Tặng phần mềm ôn thi lý thuyết chuẩn 100%'
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
            Các Gói Đào Tạo <span className="text-gradient">Lái Xe Ô Tô, Xe Máy & Nâng Hạng</span>
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
              { id: 'car', label: 'Ô Tô (B - C1)' },
              { id: 'upgrade', label: 'Nâng Hạng Bằng' }
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
                      fontFamily: "'Outfit', sans-serif",
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
