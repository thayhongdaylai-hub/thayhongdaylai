// ==========================================================================
// NGÂN HÀNG 600 CÂU HỎI SÁT HẠCH LÝ THUYẾT LÁI XE CƠ GIỚI ĐƯỜNG BỘ
// Ban hành bởi Cục Cảnh sát giao thông - Bộ Công an (Bộ đề thi chuẩn 2025)
// Đầy đủ 100% 600 câu hỏi, đáp án gạch chân chuẩn & 319 hình ảnh trích xuất từ PDF
// ==========================================================================

import OFFICIAL_600_QUESTIONS from './official600Questions.json';
import MOTORCYCLE_250_QUESTIONS from './motorcycle250Questions.json';

export const LICENSE_CONFIGS = {
  B: {
    key: 'B',
    name: 'Hạng B (Ô tô số tự động & số sàn chở người đến 8 chỗ)',
    badgeName: 'Hạng B Ô Tô',
    vehicleType: 'car',
    totalQuestions: 30,
    durationMinutes: 20,
    passingScore: 27,
    description: 'Dành cho người lái xe ô tô chở người đến 8 chỗ và xe tải dưới 3.500kg. Đề thi gồm 30 câu, đạt từ 27/30 câu và không sai câu điểm liệt.'
  },
  C1: {
    key: 'C1',
    name: 'Hạng C1 (Xe tải 3.500kg - 7.500kg)',
    badgeName: 'Hạng C1 Tải',
    vehicleType: 'car',
    totalQuestions: 35,
    durationMinutes: 22,
    passingScore: 32,
    description: 'Dành cho xe ô tô tải có khối lượng từ 3.500kg đến 7.500kg. Đề thi gồm 35 câu, đạt từ 32/35 câu và không sai câu điểm liệt.'
  },
  C: {
    key: 'C',
    name: 'Hạng C (Xe tải nặng trên 7.500kg)',
    badgeName: 'Hạng C Tải Nặng',
    vehicleType: 'car',
    totalQuestions: 40,
    durationMinutes: 24,
    passingScore: 36,
    description: 'Dành cho xe ô tô tải khối lượng toàn bộ trên 7.500kg. Đề thi gồm 40 câu, đạt từ 36/40 câu và không sai câu điểm liệt.'
  },
  D1: {
    key: 'D1',
    name: 'Hạng D1 (Xe chở người 8 - 16 chỗ)',
    badgeName: 'Hạng D1 (16 Chỗ)',
    vehicleType: 'car',
    totalQuestions: 45,
    durationMinutes: 26,
    passingScore: 41,
    description: 'Dành cho xe ô tô chở người từ 8 đến 16 chỗ ngồi. Đề thi gồm 45 câu, đạt từ 41/45 câu và không sai câu điểm liệt.'
  },
  D2: {
    key: 'D2',
    name: 'Hạng D2 (Xe chở người 16 - 29 chỗ)',
    badgeName: 'Hạng D2 (29 Chỗ)',
    vehicleType: 'car',
    totalQuestions: 45,
    durationMinutes: 26,
    passingScore: 41,
    description: 'Dành cho xe ô tô chở người từ 16 đến 29 chỗ ngồi. Đề thi gồm 45 câu, đạt từ 41/45 câu và không sai câu điểm liệt.'
  },
  D: {
    key: 'D',
    name: 'Hạng D (Xe khách trên 29 chỗ)',
    badgeName: 'Hạng D Xe Khách',
    vehicleType: 'car',
    totalQuestions: 45,
    durationMinutes: 26,
    passingScore: 41,
    description: 'Dành cho xe ô tô chở người trên 29 chỗ ngồi, xe buýt. Đề thi gồm 45 câu, đạt từ 41/45 câu và không sai câu điểm liệt.'
  },
  CE: {
    key: 'CE',
    name: 'Hạng CE (Xe đầu kéo sơ-mi rơ-moóc)',
    badgeName: 'Hạng CE Đầu Kéo',
    vehicleType: 'car',
    totalQuestions: 45,
    durationMinutes: 26,
    passingScore: 41,
    description: 'Dành cho người lái xe ô tô đầu kéo kéo sơ mi rơ moóc, container. Đề thi gồm 45 câu, đạt từ 41/45 câu và không sai câu điểm liệt.'
  },
  A1: {
    key: 'A1',
    name: 'Hạng A1 (Mô tô hai bánh đến 125cm³ hoặc xe máy điện)',
    badgeName: 'Hạng A1 Xe Máy',
    vehicleType: 'motorbike',
    totalQuestions: 25,
    durationMinutes: 19,
    passingScore: 21,
    description: 'Bộ 250 câu xe máy A1. Đề thi chuẩn 25 câu (8 quy tắc, 1 điểm liệt, 1 văn hóa, 1 kỹ thuật, 8 biển báo, 6 sa hình), làm trong 19 phút, đạt từ 21/25 câu và không sai câu điểm liệt.'
  },
  A: {
    key: 'A',
    name: 'Hạng A (Mô tô hai bánh phân khối lớn trên 125cm³)',
    badgeName: 'Hạng A (PKL)',
    vehicleType: 'motorbike',
    totalQuestions: 25,
    durationMinutes: 19,
    passingScore: 23,
    description: 'Bộ 250 câu mô tô PKL Hạng A. Đề thi chuẩn 25 câu (8 quy tắc, 1 điểm liệt, 1 văn hóa, 1 kỹ thuật, 8 biển báo, 6 sa hình), làm trong 19 phút, đạt từ 23/25 câu và không sai câu điểm liệt.'
  }
};

// Toàn bộ 600 câu hỏi chính thức ô tô
export const QUESTIONS_DATABASE = OFFICIAL_600_QUESTIONS;

// Toàn bộ 250 câu hỏi chính thức xe máy A1 - A
export { MOTORCYCLE_250_QUESTIONS };

// Trọn bộ 60 câu hỏi điểm liệt chính thức theo Cục Cảnh sát giao thông (dành cho ô tô)
export const CRITICAL_60_QUESTIONS = OFFICIAL_600_QUESTIONS.filter(q => q.isCritical);

// Trọn bộ 44 câu hỏi điểm liệt xe máy (chọn lọc từ bộ 250 câu)
export const CRITICAL_MOTORCYCLE_QUESTIONS = MOTORCYCLE_250_QUESTIONS.filter(q => q.isCritical);

// Hàm xáo trộn mảng ngẫu nhiên (Fisher-Yates shuffle)
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ==========================================================================
// THUẬT TOÁN TẠO ĐỀ THI SÁT HẠCH NGẪU NHIÊN CHUẨN CỤC CẢNH SÁT GIAO THÔNG
// ==========================================================================
export function generateRandomExam(licenseType = 'B') {
  const config = LICENSE_CONFIGS[licenseType] || LICENSE_CONFIGS.B;
  const isMotorbike = config.vehicleType === 'motorbike';

  if (isMotorbike) {
    // Với mô tô (A1, A), dùng chuẩn bộ 250 câu xe máy theo đúng cơ cấu Bộ Công an:
    const critPool = MOTORCYCLE_250_QUESTIONS.filter(q => q.isCritical);
    const rulesPool = MOTORCYCLE_250_QUESTIONS.filter(q => q.chapter.includes('Quy định chung') && !q.isCritical);
    const ethicsPool = MOTORCYCLE_250_QUESTIONS.filter(q => q.chapter.includes('Văn hóa') && !q.isCritical);
    const techPool = MOTORCYCLE_250_QUESTIONS.filter(q => q.chapter.includes('Kỹ thuật') && !q.isCritical);
    const signsPool = MOTORCYCLE_250_QUESTIONS.filter(q => q.chapter.includes('Báo hiệu') && !q.isCritical);
    const situationsPool = MOTORCYCLE_250_QUESTIONS.filter(q => q.chapter.toLowerCase().includes('sa hình') && !q.isCritical);

    const selCrit = shuffle(critPool).slice(0, 1);
    const selRules = shuffle(rulesPool).slice(0, 8);
    const selEthics = shuffle(ethicsPool).slice(0, 1);
    const selTech = shuffle(techPool).slice(0, 1);
    const selSigns = shuffle(signsPool).slice(0, 8);
    const selSituations = shuffle(situationsPool).slice(0, 6);

    const examQuestions = shuffle([
      ...selCrit,
      ...selRules,
      ...selEthics,
      ...selTech,
      ...selSigns,
      ...selSituations
    ]);

    return {
      examId: `EXAM-${licenseType}-${Date.now().toString(36).toUpperCase()}`,
      licenseType,
      config,
      questions: examQuestions,
      createdAt: new Date().toISOString()
    };
  }

  // Dành cho ô tô (B, C1, C, D1, D2, D, CE) từ ngân hàng 600 câu sát hạch
  const availableQuestions = OFFICIAL_600_QUESTIONS;

  const c1_rules = availableQuestions.filter(q => q.chapter.includes('Quy định chung') && !q.isCritical);
  const c2_ethics = availableQuestions.filter(q => q.chapter.includes('Văn hóa') && !q.isCritical);
  const c3_tech = availableQuestions.filter(q => q.chapter.includes('Kỹ thuật') && !q.isCritical);
  const c4_repair = availableQuestions.filter(q => q.chapter.includes('Cấu tạo') && !q.isCritical);
  const c5_signs = availableQuestions.filter(q => q.chapter.includes('Báo hiệu') && !q.isCritical);
  const c6_situations = availableQuestions.filter(q => q.chapter.includes('sa hình') && !q.isCritical);

  const shuffledCrit = shuffle(CRITICAL_60_QUESTIONS);
  const selectedCrit = shuffledCrit.slice(0, 1);

  let pickCounts = {
    c1: Math.floor(config.totalQuestions * 0.28),
    c2: Math.max(1, Math.floor(config.totalQuestions * 0.05)),
    c3: Math.max(1, Math.floor(config.totalQuestions * 0.08)),
    c4: Math.max(1, Math.floor(config.totalQuestions * 0.06)),
    c5: Math.floor(config.totalQuestions * 0.28),
    c6: Math.floor(config.totalQuestions * 0.22)
  };

  const selectedNormal = [
    ...shuffle(c1_rules).slice(0, pickCounts.c1),
    ...shuffle(c2_ethics).slice(0, pickCounts.c2),
    ...shuffle(c3_tech).slice(0, pickCounts.c3),
    ...shuffle(c4_repair).slice(0, pickCounts.c4),
    ...shuffle(c5_signs).slice(0, pickCounts.c5),
    ...shuffle(c6_situations).slice(0, pickCounts.c6)
  ];

  const currentTotal = selectedCrit.length + selectedNormal.length;
  if (currentTotal < config.totalQuestions) {
    const selectedIds = new Set([...selectedCrit.map(q => q.id), ...selectedNormal.map(q => q.id)]);
    const remaining = shuffle(availableQuestions.filter(q => !selectedIds.has(q.id) && !q.isCritical));
    selectedNormal.push(...remaining.slice(0, config.totalQuestions - currentTotal));
  } else if (currentTotal > config.totalQuestions) {
    selectedNormal.splice(config.totalQuestions - selectedCrit.length);
  }

  const examQuestions = shuffle([...selectedCrit, ...selectedNormal]);

  return {
    examId: `EXAM-${licenseType}-${Date.now().toString(36).toUpperCase()}`,
    licenseType,
    config,
    questions: examQuestions,
    createdAt: new Date().toISOString()
  };
}
