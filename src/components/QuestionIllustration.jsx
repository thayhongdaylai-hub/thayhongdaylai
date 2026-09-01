import React from 'react';

// Inline Vector Diagrams for 100% bulletproof offline and instant rendering
export const ILLUSTRATIONS = {
  // SA HÌNH TÌNH HUỐNG
  '/images/sahinh/sh_nga_tu_bien_uu_tien.svg': (
    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ maxHeight: '280px' }}>
      <rect width="500" height="400" fill="#15803D" />
      <rect x="180" y="0" width="140" height="400" fill="#334155" />
      <rect x="0" y="130" width="500" height="140" fill="#334155" />
      <line x1="250" y1="0" x2="250" y2="130" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="250" y1="270" x2="250" y2="400" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="0" y1="200" x2="180" y2="200" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="320" y1="200" x2="500" y2="200" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <g transform="translate(330, 280) scale(0.6)">
        <rect x="18" y="40" width="4" height="45" fill="#94A3B8"/>
        <polygon points="20,0 40,20 20,40 0,20" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
        <polygon points="20,5 35,20 20,35 5,20" fill="#FBBF24"/>
      </g>
      <g transform="translate(330, 90) scale(0.6)">
        <rect x="18" y="35" width="4" height="45" fill="#94A3B8"/>
        <polygon points="20,35 0,0 40,0" fill="#FBBF24" stroke="#DC2626" strokeWidth="4"/>
      </g>
      <g transform="translate(265, 300)">
        <rect x="0" y="0" width="36" height="60" rx="8" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2"/>
        <rect x="4" y="14" width="28" height="22" rx="4" fill="#1E293B"/>
        <text x="18" y="52" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE CON</text>
        <path d="M18 -10 L18 -80 L10 -70 M18 -80 L26 -70" stroke="#10B981" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(380, 150)">
        <rect x="0" y="0" width="70" height="36" rx="4" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2"/>
        <rect x="0" y="4" width="22" height="28" rx="2" fill="#BE123C"/>
        <text x="45" y="22" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE TẢI</text>
        <path d="M-10 18 Q-80 18 -80 -60 L-88 -50 M-80 -60 L-72 -50" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(205, 40)">
        <rect x="0" y="0" width="20" height="40" rx="6" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="1.5"/>
        <text x="10" y="24" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="#FFFFFF" textAnchor="middle">MÔ TÔ</text>
        <path d="M10 50 L10 100 Q10 130 -50 130 L-40 122 M-50 130 L-40 138" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </g>
      <rect x="70" y="360" width="360" height="30" rx="8" fill="#0F172A" stroke="#10B981" strokeWidth="1.5"/>
      <text x="250" y="380" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#10B981" textAnchor="middle">Xe Con (trên đường ưu tiên) &amp; Xe Mô Tô được đi trước Xe Tải</text>
    </svg>
  ),

  '/images/sahinh/sh_nga_tu_xe_uu_tien.svg': (
    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ maxHeight: '280px' }}>
      <rect width="500" height="400" fill="#15803D" />
      <rect x="180" y="0" width="140" height="400" fill="#334155" />
      <rect x="0" y="130" width="500" height="140" fill="#334155" />
      <line x1="250" y1="0" x2="250" y2="130" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="250" y1="270" x2="250" y2="400" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="0" y1="200" x2="180" y2="200" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="320" y1="200" x2="500" y2="200" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <g transform="translate(60, 210)">
        <rect x="0" y="0" width="80" height="38" rx="6" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2"/>
        <rect x="55" y="4" width="20" height="30" rx="3" fill="#991B1B"/>
        <circle cx="20" cy="19" r="6" fill="#FBBF24"/>
        <circle cx="65" cy="19" r="7" fill="#38BDF8"/>
        <text x="35" y="24" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle">CỨU HỎA</text>
        <path d="M90 19 L135 19 L125 10 M135 19 L125 28" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(360, 150)">
        <rect x="0" y="0" width="70" height="34" rx="6" fill="#1E3A8A" stroke="#FFFFFF" strokeWidth="2"/>
        <rect x="20" y="0" width="30" height="34" fill="#FFFFFF"/>
        <circle cx="35" cy="17" r="6" fill="#DC2626"/>
        <text x="35" y="22" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#1E3A8A" textAnchor="middle">C.AN</text>
        <path d="M-10 17 L-55 17 L-45 8 M-55 17 L-45 26" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(200, 30)">
        <rect x="0" y="0" width="36" height="65" rx="6" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2"/>
        <rect x="14" y="22" width="8" height="20" fill="#DC2626"/>
        <rect x="8" y="28" width="20" height="8" fill="#DC2626"/>
        <circle cx="18" cy="10" r="5" fill="#38BDF8"/>
        <path d="M18 75 L18 120 L10 110 M18 120 L26 110" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(265, 310)">
        <rect x="0" y="0" width="36" height="60" rx="8" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2"/>
        <rect x="4" y="14" width="28" height="22" rx="4" fill="#1E293B"/>
        <text x="18" y="52" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE CON</text>
        <path d="M18 -10 L18 -55 L10 -45 M18 -55 L26 -45" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <rect x="100" y="360" width="300" height="30" rx="8" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5"/>
      <text x="250" y="380" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#FBBF24" textAnchor="middle">Thứ tự: Xe Cứu hỏa &gt; Công an &gt; Cứu thương &gt; Xe con</text>
    </svg>
  ),

  '/images/sahinh/sh_nga_tu_dong_cap.svg': (
    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ maxHeight: '280px' }}>
      <rect width="500" height="400" fill="#15803D" />
      <rect x="180" y="0" width="140" height="400" fill="#334155" />
      <rect x="0" y="130" width="500" height="140" fill="#334155" />
      <line x1="250" y1="0" x2="250" y2="130" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="250" y1="270" x2="250" y2="400" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="0" y1="200" x2="180" y2="200" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="320" y1="200" x2="500" y2="200" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <g transform="translate(265, 310)">
        <rect x="0" y="0" width="22" height="48" rx="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="11" y="28" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="#FFFFFF" textAnchor="middle">MÔ TÔ</text>
        <path d="M11 -10 L11 -60 L4 -50 M11 -60 L18 -50" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(60, 210)">
        <rect x="0" y="0" width="90" height="35" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4,4"/>
        <text x="45" y="22" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="800" fill="#10B981" textAnchor="middle">PHÍA PHẢI TRỐNG</text>
      </g>
      <g transform="translate(380, 150)">
        <rect x="0" y="0" width="65" height="34" rx="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="32" y="21" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE CON</text>
        <path d="M-10 17 L-60 17 L-50 10 M-60 17 L-50 24" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(200, 30)">
        <rect x="0" y="0" width="38" height="70" rx="4" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="19" y="38" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE TẢI</text>
        <path d="M19 80 L19 130 L12 120 M19 130 L26 120" stroke="#E11D48" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      </g>
      <rect x="60" y="360" width="380" height="30" rx="8" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5"/>
      <text x="250" y="380" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#FBBF24" textAnchor="middle">Thứ tự đi: Xe Mô tô (bên phải trống) -&gt; Xe Con -&gt; Xe Tải</text>
    </svg>
  ),

  '/images/sahinh/sh_nga_tu_huong_re.svg': (
    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ maxHeight: '280px' }}>
      <rect width="500" height="400" fill="#15803D" />
      <rect x="180" y="0" width="140" height="400" fill="#334155" />
      <rect x="0" y="130" width="500" height="140" fill="#334155" />
      <line x1="250" y1="0" x2="250" y2="400" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="0" y1="200" x2="500" y2="200" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <g transform="translate(265, 300)">
        <rect x="0" y="0" width="36" height="55" rx="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="18" y="32" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE CON (A)</text>
        <path d="M18 -5 L18 -40 Q18 -60 70 -60 L60 -68 M70 -60 L60 -52" stroke="#10B981" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(380, 150)">
        <rect x="0" y="0" width="70" height="34" rx="4" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="35" y="21" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE TẢI (B)</text>
        <path d="M-10 17 L-80 17 L-70 10 M-80 17 L-70 24" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(195, 30)">
        <rect x="0" y="0" width="40" height="75" rx="4" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="20" y="42" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE KHÁCH (C)</text>
        <path d="M20 85 L20 150 Q20 200 90 200 L80 192 M90 200 L80 208" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </g>
      <rect x="50" y="360" width="400" height="30" rx="8" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5"/>
      <text x="250" y="380" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#FBBF24" textAnchor="middle">Quy tắc: Xe Rẽ Phải (A) &gt; Xe Đi Thẳng (B) &gt; Xe Rẽ Trái (C)</text>
    </svg>
  ),

  '/images/sahinh/sh_nga_ba_chuyen_huong.svg': (
    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ maxHeight: '280px' }}>
      <rect width="500" height="400" fill="#15803D" />
      <rect x="0" y="130" width="500" height="140" fill="#334155" />
      <rect x="180" y="270" width="140" height="130" fill="#334155" />
      <line x1="0" y1="200" x2="500" y2="200" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <line x1="250" y1="270" x2="250" y2="400" stroke="#FBBF24" strokeWidth="4" strokeDasharray="12,12" />
      <g transform="translate(380, 150)">
        <rect x="0" y="0" width="45" height="20" rx="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5"/>
        <text x="22" y="14" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">MÔ TÔ</text>
        <path d="M-10 10 L-80 10 L-70 3 M-80 10 L-70 17" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(265, 320)">
        <rect x="0" y="0" width="36" height="55" rx="6" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="18" y="32" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE CON</text>
        <path d="M18 -5 L18 -60 Q18 -100 -60 -100 L-50 -108 M-60 -100 L-50 -92" stroke="#E11D48" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      </g>
      <rect x="50" y="30" width="400" height="30" rx="8" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5"/>
      <text x="250" y="50" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#FBBF24" textAnchor="middle">Xe Con (từ đường nhánh rẽ ra) BẮT BUỘC phải nhường đường cho Mô tô</text>
    </svg>
  ),

  '/images/sahinh/sh_den_tin_hieu_re_phai.svg': (
    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ maxHeight: '280px' }}>
      <rect width="500" height="400" fill="#15803D" />
      <rect x="180" y="0" width="140" height="400" fill="#334155" />
      <rect x="0" y="130" width="500" height="140" fill="#334155" />
      <line x1="250" y1="270" x2="320" y2="270" stroke="#FFFFFF" strokeWidth="6" />
      <g transform="translate(330, 220)">
        <rect x="0" y="0" width="22" height="50" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1.5"/>
        <circle cx="11" cy="12" r="7" fill="#EF4444" stroke="#FCA5A5" strokeWidth="2"/>
        <circle cx="11" cy="26" r="6" fill="#78350F"/>
        <circle cx="11" cy="39" r="6" fill="#064E3B"/>
        <rect x="24" y="24" width="28" height="26" rx="4" fill="#0F172A" stroke="#475569" strokeWidth="1.5"/>
        <path d="M30 37 L42 37 L38 32 M42 37 L38 42" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(255, 300)">
        <rect x="0" y="0" width="30" height="50" rx="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5"/>
        <text x="15" y="28" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE CON</text>
        <circle cx="15" cy="-15" r="10" fill="#EF4444"/>
        <line x1="10" y1="-20" x2="20" y2="-10" stroke="#FFFFFF" strokeWidth="2"/>
        <line x1="20" y1="-20" x2="10" y2="-10" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="15" y="-30" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="800" fill="#EF4444" textAnchor="middle">DỪNG LẠI</text>
      </g>
      <g transform="translate(290, 310)">
        <rect x="0" y="0" width="18" height="38" rx="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="1"/>
        <text x="9" y="22" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="900" fill="#FFFFFF" textAnchor="middle">MÔ TÔ</text>
        <path d="M9 -5 L9 -30 Q9 -45 50 -45 L42 -50 M50 -45 L42 -40" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </g>
      <rect x="50" y="360" width="400" height="30" rx="8" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5"/>
      <text x="250" y="380" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#FBBF24" textAnchor="middle">Đèn đỏ đi thẳng: Xe con dừng • Đèn phụ xanh rẽ phải: Mô tô được rẽ</text>
    </svg>
  ),

  '/images/sahinh/sh_xe_dung_do_bien_cam.svg': (
    <svg viewBox="0 0 500 350" width="100%" height="100%" style={{ maxHeight: '280px' }}>
      <rect width="500" height="350" fill="#15803D" />
      <rect x="0" y="80" width="500" height="190" fill="#334155" />
      <line x1="0" y1="175" x2="500" y2="175" stroke="#FBBF24" strokeWidth="4" strokeDasharray="14,14" />
      <rect x="0" y="270" width="500" height="30" fill="#64748B" />
      <g transform="translate(235, 230)">
        <rect x="18" y="30" width="4" height="40" fill="#94A3B8"/>
        <circle cx="20" cy="15" r="18" fill="#2563EB" stroke="#E11D48" strokeWidth="4"/>
        <line x1="7" y1="2" x2="33" y2="28" stroke="#E11D48" strokeWidth="4"/>
        <line x1="33" y1="2" x2="7" y2="28" stroke="#E11D48" strokeWidth="4"/>
        <rect x="6" y="36" width="28" height="20" rx="2" fill="#FFFFFF" stroke="#000000" strokeWidth="1"/>
        <path d="M14 42 L20 38 L26 42 M20 38 L20 54 M14 50 L20 54 L26 50" stroke="#000000" strokeWidth="1.5" fill="none"/>
      </g>
      <g transform="translate(60, 200)">
        <rect x="0" y="0" width="100" height="40" rx="4" fill="#E11D48" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="50" y="24" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE TẢI</text>
        <rect x="15" y="-22" width="70" height="18" rx="4" fill="#DC2626"/>
        <text x="50" y="-10" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="800" fill="#FFFFFF" textAnchor="middle">❌ VI PHẠM</text>
      </g>
      <g transform="translate(320, 205)">
        <rect x="0" y="0" width="80" height="35" rx="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="40" y="22" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE CON</text>
        <rect x="5" y="-22" width="70" height="18" rx="4" fill="#DC2626"/>
        <text x="40" y="-10" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="800" fill="#FFFFFF" textAnchor="middle">❌ VI PHẠM</text>
      </g>
      <rect x="40" y="310" width="420" height="28" rx="6" fill="#0F172A" stroke="#EF4444" strokeWidth="1.5"/>
      <text x="250" y="328" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#EF4444" textAnchor="middle">Biển phụ mũi tên hai đầu: Cấm dừng và đỗ xe cả TRƯỚC và SAU biển</text>
    </svg>
  ),

  '/images/sahinh/sh_xe_vuot_vach_lien.svg': (
    <svg viewBox="0 0 500 350" width="100%" height="100%" style={{ maxHeight: '280px' }}>
      <rect width="500" height="350" fill="#15803D" />
      <rect x="0" y="80" width="500" height="190" fill="#334155" />
      <line x1="0" y1="175" x2="500" y2="175" stroke="#FBBF24" strokeWidth="6" />
      <g transform="translate(240, 195)">
        <rect x="0" y="0" width="90" height="40" rx="4" fill="#64748B" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="45" y="24" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE TẢI</text>
        <path d="M-10 20 L-40 20 L-30 14 M-40 20 L-30 26" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </g>
      <g transform="translate(180, 140)">
        <rect x="0" y="0" width="70" height="34" rx="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="35" y="21" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">XE CON</text>
        <path d="M10 40 L-30 0 L-100 0 L-90 -7 M-100 0 L-90 7" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
        <rect x="0" y="-22" width="70" height="18" rx="4" fill="#DC2626"/>
        <text x="35" y="-10" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="800" fill="#FFFFFF" textAnchor="middle">❌ ĐÈ VẠCH LIỀN</text>
      </g>
      <rect x="50" y="300" width="400" height="30" rx="8" fill="#0F172A" stroke="#EF4444" strokeWidth="1.5"/>
      <text x="250" y="320" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#EF4444" textAnchor="middle">Vạch liền: CẤM lấn làn, CẤM đè vạch -&gt; Xe con vượt là SAI quy tắc</text>
    </svg>
  ),

  // BIỂN BÁO GIAO THÔNG
  '/images/signs/p102_cam_nguoc_chieu.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#E11D48" stroke="#FFFFFF" strokeWidth="8"/>
      <rect x="50" y="125" width="200" height="50" rx="6" fill="#FFFFFF"/>
    </svg>
  ),

  '/images/signs/w208_giao_nhau_duong_uu_tien.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <polygon points="150,275 15,45 285,45" fill="#FBBF24" stroke="#DC2626" strokeWidth="26" strokeLinejoin="round"/>
    </svg>
  ),

  '/images/signs/p106a_cam_tai.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#FFFFFF" stroke="#E11D48" strokeWidth="28"/>
      <g transform="translate(45, 80) scale(0.85)">
        <rect x="20" y="30" width="130" height="75" rx="4" fill="#1E293B"/>
        <path d="M150 55 L180 55 L200 80 L200 105 L150 105 Z" fill="#1E293B"/>
        <path d="M155 60 L175 60 L190 80 L155 80 Z" fill="#FFFFFF"/>
        <circle cx="65" cy="115" r="20" fill="#0F172A"/>
        <circle cx="65" cy="115" r="8" fill="#CBD5E1"/>
        <circle cx="175" cy="115" r="20" fill="#0F172A"/>
        <circle cx="175" cy="115" r="8" fill="#CBD5E1"/>
      </g>
    </svg>
  ),

  '/images/signs/p104_cam_moto.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#FFFFFF" stroke="#E11D48" strokeWidth="28"/>
      <g transform="translate(60, 75) scale(0.85)">
        <circle cx="45" cy="130" r="28" fill="none" stroke="#1E293B" strokeWidth="10"/>
        <circle cx="155" cy="130" r="28" fill="none" stroke="#1E293B" strokeWidth="10"/>
        <circle cx="45" cy="130" r="8" fill="#1E293B"/>
        <circle cx="155" cy="130" r="8" fill="#1E293B"/>
        <path d="M45 130 L90 100 L140 100 L155 130" stroke="#1E293B" strokeWidth="10" fill="none" strokeLinejoin="round"/>
        <path d="M90 100 L80 65 L115 65" stroke="#1E293B" strokeWidth="8" fill="none" strokeLinejoin="round"/>
        <path d="M140 100 L135 60 L145 55" stroke="#1E293B" strokeWidth="8" fill="none" strokeLinejoin="round"/>
        <circle cx="110" cy="40" r="14" fill="#1E293B"/>
        <path d="M100 55 L125 55 L135 90 L105 105 Z" fill="#1E293B"/>
        <path d="M85 85 L65 92" stroke="#1E293B" strokeWidth="8" strokeLinecap="round"/>
      </g>
    </svg>
  ),

  '/images/signs/p108_cam_keo_ro_mooc.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#FFFFFF" stroke="#E11D48" strokeWidth="28"/>
      <g transform="translate(35, 90) scale(0.75)">
        <rect x="20" y="30" width="100" height="70" rx="4" fill="#1E293B"/>
        <circle cx="50" cy="110" r="18" fill="#0F172A"/>
        <circle cx="100" cy="110" r="18" fill="#0F172A"/>
        <line x1="120" y1="85" x2="160" y2="85" stroke="#1E293B" strokeWidth="8"/>
        <path d="M160 55 L200 55 L230 80 L230 100 L160 100 Z" fill="#1E293B"/>
        <circle cx="210" cy="110" r="18" fill="#0F172A"/>
      </g>
    </svg>
  ),

  '/images/signs/dp135_het_tat_ca_lenh_cam.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#FFFFFF" stroke="#0284C7" strokeWidth="8"/>
      <line x1="190" y1="40" x2="60" y2="240" stroke="#1E293B" strokeWidth="12"/>
      <line x1="205" y1="50" x2="75" y2="250" stroke="#1E293B" strokeWidth="12"/>
      <line x1="220" y1="60" x2="90" y2="260" stroke="#1E293B" strokeWidth="12"/>
      <line x1="235" y1="70" x2="105" y2="270" stroke="#1E293B" strokeWidth="12"/>
      <line x1="250" y1="80" x2="120" y2="280" stroke="#1E293B" strokeWidth="12"/>
    </svg>
  ),

  '/images/signs/r301a_di_thang.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#2563EB" stroke="#FFFFFF" strokeWidth="8"/>
      <path d="M150 220 L150 100" stroke="#FFFFFF" strokeWidth="26" strokeLinecap="square"/>
      <polygon points="150,55 105,115 195,115" fill="#FFFFFF"/>
    </svg>
  ),

  '/images/signs/p124a_cam_quay_dau.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#FFFFFF" stroke="#E11D48" strokeWidth="28"/>
      <path d="M175 220 L175 125 Q175 80 135 80 Q95 80 95 125 L95 180" fill="none" stroke="#1E293B" strokeWidth="20" strokeLinecap="round"/>
      <polygon points="70,165 95,215 120,165" fill="#1E293B"/>
      <line x1="50" y1="50" x2="250" y2="250" stroke="#E11D48" strokeWidth="24"/>
    </svg>
  ),

  '/images/signs/p123a_cam_re_trai.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#FFFFFF" stroke="#E11D48" strokeWidth="28"/>
      <path d="M175 220 L175 130 Q175 105 140 105 L95 105" fill="none" stroke="#1E293B" strokeWidth="22" strokeLinecap="round"/>
      <polygon points="105,80 55,105 105,130" fill="#1E293B"/>
      <line x1="50" y1="50" x2="250" y2="250" stroke="#E11D48" strokeWidth="24"/>
    </svg>
  ),

  '/images/signs/p122_stop.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <polygon points="88,15 212,15 285,88 285,212 212,285 88,285 15,212 15,88" fill="#DC2626" stroke="#FFFFFF" strokeWidth="8"/>
      <text x="150" y="172" fontFamily="Arial, Helvetica, sans-serif" fontSize="70" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="4">STOP</text>
    </svg>
  ),

  '/images/signs/w218_cua_chui.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <polygon points="150,25 285,255 15,255" fill="#FBBF24" stroke="#DC2626" strokeWidth="26" strokeLinejoin="round"/>
      <path d="M95 220 L95 150 Q95 105 150 105 Q205 105 205 150 L205 220 Z" fill="#1E293B"/>
    </svg>
  ),

  '/images/signs/w210_duong_sat_co_rao_chan.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <polygon points="150,25 285,255 15,255" fill="#FBBF24" stroke="#DC2626" strokeWidth="26" strokeLinejoin="round"/>
      <g transform="translate(60, 130) scale(0.65)" stroke="#1E293B" strokeWidth="8" fill="none">
        <line x1="10" y1="50" x2="270" y2="50"/>
        <line x1="10" y1="90" x2="270" y2="90"/>
        <line x1="35" y1="30" x2="35" y2="110"/>
        <line x1="75" y1="30" x2="75" y2="110"/>
        <line x1="115" y1="30" x2="115" y2="110"/>
        <line x1="155" y1="30" x2="155" y2="110"/>
        <line x1="195" y1="30" x2="195" y2="110"/>
        <line x1="235" y1="30" x2="235" y2="110"/>
      </g>
    </svg>
  ),

  '/images/signs/i401_bat_dau_duong_uu_tien.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <polygon points="150,15 285,150 150,285 15,150" fill="#FFFFFF" stroke="#64748B" strokeWidth="4"/>
      <polygon points="150,35 265,150 150,265 35,150" fill="#FBBF24" stroke="#000000" strokeWidth="6"/>
    </svg>
  ),

  '/images/signs/p130_cam_dung_do.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#2563EB" stroke="#E11D48" strokeWidth="28"/>
      <line x1="50" y1="50" x2="250" y2="250" stroke="#E11D48" strokeWidth="24"/>
      <line x1="250" y1="50" x2="50" y2="250" stroke="#E11D48" strokeWidth="24"/>
    </svg>
  ),

  '/images/signs/p131a_cam_do.svg': (
    <svg viewBox="0 0 300 300" width="180" height="180">
      <circle cx="150" cy="150" r="140" fill="#2563EB" stroke="#E11D48" strokeWidth="28"/>
      <line x1="50" y1="50" x2="250" y2="250" stroke="#E11D48" strokeWidth="24"/>
    </svg>
  ),

  '/images/signs/r420_khu_dong_dan_cu.svg': (
    <svg viewBox="0 0 320 220" width="220" height="150">
      <rect x="10" y="10" width="300" height="200" rx="12" fill="#2563EB" stroke="#FFFFFF" strokeWidth="6"/>
      <g fill="#FFFFFF" transform="translate(35, 45)">
        <rect x="15" y="60" width="40" height="70"/>
        <polygon points="15,60 35,35 55,60"/>
        <rect x="65" y="30" width="50" height="100"/>
        <polygon points="65,30 90,10 115,30"/>
        <rect x="125" y="50" width="45" height="80"/>
        <polygon points="125,50 147,25 170,50"/>
        <rect x="180" y="70" width="55" height="60"/>
        <polygon points="180,70 207,45 235,70"/>
      </g>
    </svg>
  )
};

export default function QuestionIllustration({ src, alt = "Hình ảnh minh họa câu hỏi" }) {
  if (!src) return null;

  // Clean path string
  const cleanPath = src.trim();
  const inlineSvg = ILLUSTRATIONS[cleanPath];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0.85rem auto 1.35rem auto',
      padding: '0.85rem',
      background: 'var(--bg-card)',
      border: '1.5px solid var(--border-color)',
      borderRadius: '16px',
      boxShadow: 'var(--shadow-sm)',
      maxWidth: '520px',
      width: '100%',
      overflow: 'hidden'
    }}>
      {inlineSvg ? (
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {inlineSvg}
        </div>
      ) : (
        <img
          src={cleanPath}
          alt={alt}
          style={{
            maxHeight: '260px',
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '8px',
            display: 'block'
          }}
        />
      )}
      <div style={{
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        marginTop: '0.55rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem'
      }}>
        <span>🔍 Hình ảnh minh họa chuẩn Bộ GTVT 600 câu hỏi</span>
      </div>
    </div>
  );
}
