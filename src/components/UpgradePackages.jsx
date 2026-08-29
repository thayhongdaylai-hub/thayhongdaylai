import React from 'react';
import {
  TrendingUp,
  Truck,
  Bus,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

export default function UpgradePackages({ onSelectUpgrade }) {
  const upgradeList = [
    {
      id: 'up-c',
      targetGrade: 'Nâng Hạng C',
      route: 'Nâng từ Hạng B lên C',
      vehicleDesc: 'Lái xe ô tô tải & chuyên dùng tải trọng lớn trên 7.5 tấn',
      price: '17.000.000đ',
      duration: '1.5 - 2 tháng',
      experienceReq: 'Từ 03 năm lái xe an toàn & 50.000km',
      badge: 'Phổ Biến Nhất',
      badgeColor: 'badge-gold',
      icon: Truck,
      iconColor: 'var(--primary)',
      iconBg: 'var(--primary-tint)',
      features: [
        'Thực hành bổ túc trên xe tải tiêu chuẩn',
        'Tặng 1 tiếng xe chip tại sân thi sát hạch',
        'Hỗ trợ thủ tục hồ sơ Online nhanh chóng'
      ]
    },
    {
      id: 'up-d1',
      targetGrade: 'Nâng Hạng D1',
      route: 'Nâng từ Hạng B / C lên D1',
      vehicleDesc: 'Lái xe ô tô chở người từ 9 đến 16 chỗ',
      price: '18.000.000đ',
      duration: '1.5 - 2 tháng',
      experienceReq: 'Đủ 24 tuổi, 03 năm kinh nghiệm lái xe',
      badge: 'Chạy Dịch Vụ / Tour',
      badgeColor: 'badge-blue',
      icon: Bus,
      iconColor: 'var(--primary)',
      iconBg: 'var(--primary-tint)',
      features: [
        'Lái xe chở học sinh, nhân viên công ty & xe hợp đồng du lịch',
        'Tặng 1 tiếng xe chip tại sân thi sát hạch',
        'Hỗ trợ trọn gói tài liệu 600 câu & 120 tình huống mô phỏng',
        'Hỗ trợ thủ tục hồ sơ Online nhanh chóng'
      ]
    },
    {
      id: 'up-d2',
      targetGrade: 'Nâng Hạng D2',
      route: 'Nâng từ Hạng C / D1 lên D2',
      vehicleDesc: 'Lái xe ô tô chở người từ 17 đến 29 chỗ',
      price: '18.000.000đ',
      duration: '2 tháng',
      experienceReq: 'Đủ 24 tuổi, 03 năm kinh nghiệm lái xe',
      badge: 'Xe Hợp Đồng',
      badgeColor: 'badge-blue',
      icon: Bus,
      iconColor: 'var(--primary)',
      iconBg: 'var(--primary-tint)',
      features: [
        'Lái xe chở học sinh, nhân viên công ty & xe hợp đồng du lịch',
        'Tặng 1 tiếng xe chip tại sân thi sát hạch',
        'Hỗ trợ trọn gói tài liệu 600 câu & 120 tình huống mô phỏng',
        'Hỗ trợ thủ tục hồ sơ Online nhanh chóng'
      ]
    },
    {
      id: 'up-d',
      targetGrade: 'Nâng Hạng D',
      route: 'Nâng từ Hạng C / D2 lên D',
      vehicleDesc: 'Lái xe ô tô chở người trên 29 chỗ & xe khách giường nằm',
      price: '18.000.000đ',
      duration: '2 - 2.5 tháng',
      experienceReq: 'Đủ 24 tuổi, bằng THCS trở lên & 3-5 năm kinh nghiệm',
      badge: 'Hạng Cao Cấp',
      badgeColor: 'badge-purple',
      icon: Award,
      iconColor: '#7E22CE',
      iconBg: '#FAF5FF',
      features: [
        'Lái xe chở học sinh, nhân viên công ty & xe hợp đồng du lịch',
        'Tặng 1 tiếng xe chip tại sân thi sát hạch',
        'Hỗ trợ trọn gói tài liệu 600 câu & 120 tình huống mô phỏng',
        'Hỗ trợ thủ tục hồ sơ Online nhanh chóng'
      ]
    },
    {
      id: 'up-ce',
      targetGrade: 'Nâng Hạng CE',
      route: 'Nâng từ Hạng C lên CE',
      vehicleDesc: 'Lái xe ô tô đầu kéo Container & Sơ-mi rơ-moóc tải trọng lớn',
      price: '19.000.000đ',
      duration: '2 tháng',
      experienceReq: 'Đủ 24 tuổi, có bằng C từ 03 năm trở lên',
      badge: 'Thu Nhập Cao',
      badgeColor: 'badge-gold',
      icon: Truck,
      iconColor: 'var(--accent-gold-dark)',
      iconBg: 'var(--accent-gold-tint)',
      features: [
        'Lái đầu kéo container chuyên dụng',
        'Kỹ năng ghép rơ-moóc, lùi chuồng hẹp và quay đầu an toàn',
        'Tặng 1 tiếng xe chip tại sân thi sát hạch',
        'Hỗ trợ trọn gói tài liệu 600 câu & 120 tình huống mô phỏng',
        'Hỗ trợ thủ tục hồ sơ Online nhanh chóng'
      ]
    }
  ];

  return (
    <section id="upgrades" style={{ padding: '5rem 0', background: 'var(--bg-main)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <div className="badge badge-blue">
            <TrendingUp size={15} />
            <span>Nâng Cấp Bằng Lái • Mở Rộng Cơ Hội Thu Nhập</span>
          </div>
          <h2 className="section-title">
            Các Gói <span className="text-gradient">Nâng Hạng Giấy Phép Lái Xe</span>
          </h2>
          <p className="section-subtitle">
            Chương trình đào tạo nâng hạng chuyên nghiệp chuẩn GTVT dành cho các bác tài. Học phí trọn gói minh bạch 100%, hỗ trợ hồ sơ và thủ tục nhanh chóng.
          </p>
        </div>

        {/* Upgrade Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {upgradeList.map(item => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="modern-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)'
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
                      background: item.iconBg || 'var(--primary-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={24} color={item.iconColor || 'var(--primary)'} />
                    </div>
                    <span className={`badge ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Route */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                    {item.targetGrade}
                  </h3>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    marginBottom: '0.75rem'
                  }}>
                    <span>{item.route}</span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {item.vehicleDesc}
                  </p>

                  {/* Experience Requirement Pill */}
                  <div style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    marginBottom: '1.25rem'
                  }}>
                    <strong>Yêu cầu:</strong> {item.experienceReq}
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-item">
                        <CheckCircle2 size={16} color="var(--primary)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectUpgrade(item.targetGrade)}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '0.92rem',
                    borderRadius: '10px',
                    justifyContent: 'center'
                  }}
                >
                  <span>Tư Vấn Hồ Sơ {item.targetGrade}</span>
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
