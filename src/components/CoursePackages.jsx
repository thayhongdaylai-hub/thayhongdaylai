import React, { useState } from 'react';
import { Bike, Car, Truck, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CoursePackages({ onSelectCourse }) {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 'b',
      category: 'car',
      badge: 'Phổ Biến Nhất',
      badgeClass: 'badge-gold',
      icon: Car,
      name: 'Ô tô Hạng B',
      subtitle: 'Lái xe ô tô con 4 - 9 chỗ (Gia đình & Dịch vụ)',
      price: '19.000.000đ',
      shortDesc: 'Khóa học lái xe ô tô số tự động (B1) và số sàn (B2) chuẩn mới 2026. Hợp đồng đào tạo minh bạch, cam kết đầu ra vững tay lái.',
      features: [
        'Học phí trọn gói 19.000.000đ ( Hợp đồng đào tạo rõ ràng )',
        'Chạy đủ 810km DAT đường trường',
        'Thực hành 100% của xe thi sát hạch',
        'Lịch học linh hoạt',
        'Hỗ trợ phần mềm 120 tình huống mô phỏng & 600 câu hỏi',
        'Hỗ trợ nhận và đăng ký hồ sơ Online nhanh chóng'
      ]
    },
    {
      id: 'c1',
      category: 'car',
      badge: 'Xe Tải Chuyên Nghiệp',
      badgeClass: 'badge-blue',
      icon: Truck,
      name: 'Ô tô Hạng C1',
      subtitle: 'Lái xe ô tô tải trọng từ 3.500kg đến 7.500kg',
      price: '24.000.000đ',
      shortDesc: 'Đào tạo lái xe tải chuyên nghiệp chuẩn GTVT. Dành cho tài xế kinh doanh vận tải hàng hóa chuyên tuyến và đường dài.',
      features: [
        'Học phí trọn gói 24.000.000đ ( Hợp đồng đào tạo rõ ràng )',
        'Chạy đủ km DAT đường trường chuẩn GTVT',
        'Thực hành 100% trên xe thi sát hạch',
        'Lịch học linh hoạt',
        'Hỗ trợ phần mềm 120 tình huống mô phỏng & 600 câu hỏi',
        'Hỗ trợ nhận và đăng ký hồ sơ Online nhanh chóng'
      ]
    },
    {
      id: 'a1',
      category: 'bike',
      badge: 'Xe Máy Thông Dụng',
      badgeClass: 'badge-blue',
      icon: Bike,
      name: 'Xe Máy Hạng A1',
      subtitle: 'Xe máy thông thường có dung tích dưới 125cc',
      price: '1.300.000đ',
      shortDesc: 'Bằng lái xe máy phổ biến nhất cho học sinh, sinh viên và người đi làm sử dụng xe Vision, Wave, Lead, Sirius...',
      features: [
        'Học phí trọn gói 1.300.000đ ( Đã gồm lệ phí hồ sơ + thi sát hạch ) - ( Hợp đồng đào tạo rõ ràng )',
        'Hỗ trợ tài liệu 250 câu hỏi chuẩn GTVT',
        'Tập xe vòng số 8 miễn phí tại sân sát hạch',
        'Hỗ trợ nhận và đăng ký hồ sơ Online nhanh chóng'
      ]
    },
    {
      id: 'a',
      category: 'bike',
      badge: 'Tay Côn & Trên 125cc',
      badgeClass: 'badge-gold',
      icon: Bike,
      name: 'Xe Máy Hạng A',
      subtitle: 'Xe tay côn & xe mô tô có dung tích trên 125cc',
      price: '3.000.000đ',
      shortDesc: 'Dành cho người điều khiển xe mô tô tay côn (Exciter, Winner, Raider...) và các dòng xe máy có dung tích xi lanh trên 125cc.',
      features: [
        'Học phí trọn gói 3.000.000đ ( Hợp đồng đào tạo rõ ràng )',
        'Cấp xe tập miễn phí trước ngày thi',
        'Giảng viên trực tiếp hướng dẫn kỹ thuật côn số & thăng bằng',
        'Hỗ trợ tài liệu 250 câu hỏi chuẩn GTVT',
        'Hỗ trợ nhận và đăng ký hồ sơ Online nhanh chóng'
      ]
    },
    {
      id: 'a02',
      category: 'bike',
      badge: 'Xe Ga Cao Cấp SH',
      badgeClass: 'badge-purple',
      icon: Bike,
      name: 'Xe Máy Hạng A02',
      subtitle: 'Xe tay ga cao cấp (Honda SH, Vespa, Phân khối lớn)',
      price: '3.000.000đ',
      shortDesc: 'Đào tạo bài bản kỹ năng điều khiển các dòng xe tay ga cỡ lớn, phân khối lớn, giúp tự tin vào cua và xử lý phanh an toàn.',
      features: [
        'Học phí trọn gói 3.000.000đ ( Hợp đồng đào tạo rõ ràng )',
        'Cấp xe tập miễn phí trước ngày thi',
        'Giảng viên trực tiếp hướng dẫn kỹ thuật côn số & thăng bằng',
        'Hỗ trợ tài liệu 250 câu hỏi chuẩn GTVT',
        'Hỗ trợ nhận và đăng ký hồ sơ Online nhanh chóng'
      ]
    }
  ];

  const filteredCourses = courses.filter(c => {
    if (filter === 'all') return true;
    return c.category === filter;
  });

  return (
    <section id="courses" style={{ padding: '5rem 0', background: 'var(--bg-main)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="badge badge-blue">
            <Sparkles size={15} />
            <span>Học Phí Trọn Gói • Minh Bạch 100%</span>
          </div>
          <h2 className="section-title">
            Các Khóa Đào Tạo <span className="text-gradient">Lái Xe Chuẩn GTVT</span>
          </h2>
          <p className="section-subtitle">
            Chương trình đào tạo chất lượng cao cho cả Ô tô và Xe máy. Học viên được trang bị đầy đủ kỹ năng lái xe an toàn và tự tin cầm bằng trên tay.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div
            className="no-scrollbar"
            style={{
              display: 'flex',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              padding: '0.35rem',
              borderRadius: '12px',
              gap: '0.4rem',
              maxWidth: '100%'
            }}
          >
            <button
              onClick={() => setFilter('all')}
              className="btn"
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: 'none',
                background: filter === 'all' ? 'var(--primary)' : 'transparent',
                color: filter === 'all' ? '#FFFFFF' : 'var(--text-muted)',
                boxShadow: filter === 'all' ? 'var(--shadow-primary)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Tất Cả Khóa Học ({courses.length})
            </button>
            <button
              onClick={() => setFilter('car')}
              className="btn"
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: 'none',
                background: filter === 'car' ? 'var(--primary)' : 'transparent',
                color: filter === 'car' ? '#FFFFFF' : 'var(--text-muted)',
                boxShadow: filter === 'car' ? 'var(--shadow-primary)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Ô Tô (Hạng B, C1)
            </button>
            <button
              onClick={() => setFilter('bike')}
              className="btn"
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: 'none',
                background: filter === 'bike' ? 'var(--primary)' : 'transparent',
                color: filter === 'bike' ? '#FFFFFF' : 'var(--text-muted)',
                boxShadow: filter === 'bike' ? 'var(--shadow-primary)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Xe Máy (A1, A, A02)
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}>
          {filteredCourses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="modern-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Header: Icon & Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'var(--primary-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={24} color="var(--primary)" />
                    </div>
                    <span className={`badge ${course.badgeClass}`}>
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title & Subtitle */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                    {course.name}
                  </h3>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-light)', marginBottom: '0.85rem' }}>
                    {course.subtitle}
                  </div>

                  {/* Short Description */}
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {course.shortDesc}
                  </p>

                  {/* Price Tag */}
                  <div style={{
                    background: 'var(--bg-main)',
                    borderRadius: '12px',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>Học phí trọn gói:</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)' }}>
                      {course.price}
                    </span>
                  </div>

                  {/* Features List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                    {course.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-item">
                        <Check size={16} strokeWidth={2.5} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectCourse(course.name)}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    fontSize: '0.95rem',
                    borderRadius: '10px',
                    justifyContent: 'center'
                  }}
                >
                  <span>Xem Chi Tiết & Đăng Ký</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
