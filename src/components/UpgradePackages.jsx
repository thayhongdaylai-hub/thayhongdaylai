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
      badgeColor: 'badge-emerald',
      icon: Truck,
      iconColor: 'var(--accent-emerald)',
      iconBg: 'var(--accent-emerald-glow)',
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
      vehicleDesc: 'Lái xe ô tô chở người từ 9 đến 16 chỗ (Transit, Solati, Limousine)',
      price: '18.000.000đ',
      duration: '1.5 - 2 tháng',
      experienceReq: 'Đủ 24 tuổi, 03 năm kinh nghiệm lái xe',
      badge: 'Chạy Dịch Vụ / Tour',
      badgeColor: 'badge-blue',
      icon: Bus,
      iconColor: 'var(--accent-blue)',
      iconBg: 'var(--accent-blue-glow)',
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
      vehicleDesc: 'Lái xe ô tô chở người từ 17 đến 29 chỗ (Samco, Thaco Town)',
      price: '18.000.000đ',
      duration: '2 tháng',
      experienceReq: 'Đủ 24 tuổi, 03 năm kinh nghiệm lái xe',
      badge: 'Xe Hợp Đồng / Tuyến',
      badgeColor: 'badge-orange',
      icon: Bus,
      iconColor: 'var(--accent-orange)',
      iconBg: 'rgba(245, 158, 11, 0.15)',
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
      iconColor: 'var(--accent-purple)',
      iconBg: 'var(--accent-purple-glow)',
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
      badgeColor: 'badge-emerald',
      icon: Truck,
      iconColor: 'var(--accent-emerald)',
      iconBg: 'var(--accent-emerald-glow)',
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
    <section id="upgrades" style={{ padding: '4rem 0 3rem 0', background: 'var(--bg-card)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ marginBottom: '2.5rem' }}>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
            alignItems: 'stretch'
          }}
        >
          {upgradeList.map(item => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '1.25rem',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-main)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  {/* Top Header: Icon & Badge sitting closely side-by-side */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: item.iconBg || 'var(--accent-blue-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComponent size={22} color={item.iconColor || 'var(--accent-blue)'} />
                    </div>
                    <span className={`badge ${item.badgeColor}`} style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      padding: '0.35rem 0.8rem',
                      borderRadius: '9999px'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Route */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.3rem', color: 'var(--text-main)' }}>
                    {item.targetGrade}
                  </h3>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--accent-emerald)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    marginBottom: '0.65rem'
                  }}>
                    <TrendingUp size={14} />
                    <span>{item.route}</span>
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.15rem', lineHeight: 1.45 }}>
                    {item.vehicleDesc}
                  </p>

                  {/* Clean Official Price Section */}
                  <div style={{
                    padding: '0.85rem 1.15rem',
                    background: 'var(--bg-card)',
                    borderRadius: '0.85rem',
                    marginBottom: '1.2rem',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
                      Học phí nâng hạng trọn gói:
                    </div>
                    <span style={{
                      fontSize: '1.65rem',
                      fontFamily: "'Google Sans', 'Quicksand', sans-serif",
                      fontWeight: 800,
                      color: 'var(--accent-emerald)',
                      lineHeight: 1.15
                    }}>
                      {item.price}
                    </span>
                  </div>

                  {/* Features List */}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', marginBottom: '1.35rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Quyền lợi nâng hạng:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                          <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => onSelectUpgrade(item.targetGrade)}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem' }}
                >
                  <span>Đăng Ký {item.targetGrade}</span>
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
