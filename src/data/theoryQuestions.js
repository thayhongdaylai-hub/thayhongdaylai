// ==========================================================================
// NGÂN HÀNG CÂU HỎI LÝ THUYẾT SÁT HẠCH LÁI XE VIỆT NAM (250 & 600 CÂU)
// ĐẦY ĐỦ BỘ 60 CÂU HỎI ĐIỂM LIỆT CHỐNG TRƯỢT THEO QUY CHUẨN BỘ GTVT
// Phân loại: Xe Máy (A, A1) & Ô Tô (B, C-1, D)
// ==========================================================================

export const LICENSE_CONFIGS = {
  A1: {
    key: 'A1',
    name: 'Hạng A-1 (Mô tô < 175cc/125cc)',
    badgeName: 'Hạng A-1',
    vehicleType: 'motorbike',
    totalQuestions: 25,
    durationMinutes: 19,
    passingScore: 21,
    description: 'Dành cho xe máy 2 bánh. Đề thi gồm 25 câu, đạt từ 21/25 câu và không sai câu điểm liệt.'
  },
  A: {
    key: 'A',
    name: 'Hạng A (Mô tô phân khối lớn)',
    badgeName: 'Hạng A',
    vehicleType: 'motorbike',
    totalQuestions: 25,
    durationMinutes: 19,
    passingScore: 23,
    description: 'Dành cho mô tô phân khối lớn. Đề thi gồm 25 câu, đạt từ 23/25 câu và không sai câu điểm liệt.'
  },
  B: {
    key: 'B',
    name: 'Hạng B (B1 / B2 Ô tô dưới 9 chỗ & tải < 3.5T)',
    badgeName: 'Hạng B',
    vehicleType: 'car',
    totalQuestions: 30,
    durationMinutes: 20,
    passingScore: 27,
    description: 'Dành cho ô tô số tự động và số sàn. Đề thi gồm 30 câu, đạt từ 27/30 câu và không sai câu điểm liệt.'
  },
  C1: {
    key: 'C1',
    name: 'Hạng C-1 (Xe tải & Ô tô chuyên dùng)',
    badgeName: 'Hạng C-1',
    vehicleType: 'car',
    totalQuestions: 35,
    durationMinutes: 22,
    passingScore: 32,
    description: 'Dành cho người lái xe tải trọng tải lớn. Đề thi gồm 35 câu, đạt từ 32/35 câu và không sai câu điểm liệt.'
  },
  D: {
    key: 'D',
    name: 'Hạng D (Xe khách trên 9 chỗ - 30 chỗ)',
    badgeName: 'Hạng D',
    vehicleType: 'car',
    totalQuestions: 45,
    durationMinutes: 26,
    passingScore: 41,
    description: 'Dành cho lái xe ô tô chở người từ 10 đến 30 chỗ ngồi. Đề thi gồm 45 câu, đạt từ 41/45 câu và không sai câu điểm liệt.'
  }
};

// ==========================================================================
// TOÀN BỘ 60 CÂU HỎI ĐIỂM LIỆT CHÍNH THỨC CỦA BỘ GTVT (CRITICAL QUESTIONS)
// ==========================================================================
export const CRITICAL_60_QUESTIONS = [
  {
    id: 'crit-01',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?',
    options: [
      'Bị nghiêm cấm.',
      'Không bị nghiêm cấm.',
      'Không bị nghiêm cấm, nếu có chất ma túy ở mức nhẹ có thể điều khiển phương tiện tham gia giao thông.',
      'Chỉ bị nghiêm cấm khi chở hàng hóa nguy hiểm.'
    ],
    correctIndex: 0,
    explanation: 'Theo Luật Giao thông đường bộ, hành vi điều khiển phương tiện tham gia giao thông mà trong cơ thể có chất ma túy là hành vi bị NGHIÊM CẤM tuyệt đối trong mọi trường hợp.'
  },
  {
    id: 'crit-02',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?',
    options: [
      'Bị nghiêm cấm tùy từng trường hợp.',
      'Không bị nghiêm cấm.',
      'Bị nghiêm cấm.',
      'Được phép khi có việc gấp.'
    ],
    correctIndex: 2,
    explanation: 'Chạy quá tốc độ, giành đường, vượt ẩu là các hành vi gây mất an toàn giao thông nghiêm trọng và BỊ NGHIÊM CẤM hoàn toàn.'
  },
  {
    id: 'crit-03',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Người điều khiển xe mô tô, xe gắn máy, xe ô tô trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Không bị nghiêm cấm.',
      'Không bị nghiêm cấm nếu nồng độ cồn trong máu ở mức nhẹ.',
      'Chỉ bị nghiêm cấm vào ban đêm.'
    ],
    correctIndex: 0,
    explanation: 'Luật Phòng chống tác hại của rượu bia quy định: Nghiêm cấm tuyệt đối điều khiển phương tiện giao thông khi trong máu hoặc hơi thở có nồng độ cồn (Nồng độ cồn = 0).'
  },
  {
    id: 'crit-04',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi điều khiển xe qua đường sắt, người lái xe phải thực hiện thao tác nào dưới đây để đảm bảo an toàn?',
    options: [
      'Khi có chuông báo hoặc thanh chắn đã hạ xuống, phải dừng xe tạm thời đúng khoảng cách an toàn tối thiểu 5 mét tính từ ray gần nhất, kéo phanh tay, chờ tàu qua.',
      'Nhanh chóng tăng ga vượt qua đường sắt trước khi thanh chắn hạ xuống hoàn toàn.',
      'Nếu không thấy tàu đến thì có thể luồn lách qua thanh chắn để tiết kiệm thời gian.'
    ],
    correctIndex: 0,
    explanation: 'Khi có tín hiệu đèn đỏ, chuông báo hoặc thanh chắn đóng, phải dừng xe cách ray gần nhất tối thiểu 5 mét, không được tự ý vượt rào chắn.'
  },
  {
    id: 'crit-05',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Người lái xe không được lùi xe ở những khu vực nào dưới đây?',
    options: [
      'Ở khu vực cho phép đỗ xe.',
      'Ở khu vực đường ngõ hẻm rộng.',
      'Ở khu vực cấm dừng và trên phần đường dành cho người đi bộ qua đường, nơi đường bộ giao nhau, đường bộ giao cắt đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc.',
      'Cả ý 1 và ý 2.'
    ],
    correctIndex: 2,
    explanation: 'Tuyệt đối KHÔNG ĐƯỢC lùi xe ở đường cao tốc, trong hầm đường bộ, đường giao nhau, giao cắt đường sắt, đường dành cho người đi bộ hoặc nơi tầm nhìn bị che khuất.'
  },
  {
    id: 'crit-06',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi điều khiển xe mô tô, ô tô rẽ trái tại nơi đường giao nhau, người lái xe phải nhường đường cho các đối tượng nào?',
    options: [
      'Nhường đường cho người đi bộ đang qua đường, nhường đường cho xe đi ngược chiều.',
      'Bấm còi liên tục và vượt lên trước các xe khác.',
      'Chỉ nhường đường cho xe có trọng tải lớn hơn.'
    ],
    correctIndex: 0,
    explanation: 'Khi chuyển hướng rẽ trái, người lái xe phải nhường đường cho người đi bộ đang qua đường và các xe đang đi thẳng từ hướng ngược chiều tới.'
  },
  {
    id: 'crit-07',
    types: ['motorbike'],
    category: 'critical',
    isCritical: true,
    question: 'Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được mang vác vật cồng kềnh hay không?',
    options: [
      'Được mang vác tùy trường hợp.',
      'Không được mang, vác.',
      'Được mang vác nhưng phải chằng buộc cẩn thận.',
      'Được mang vác nếu đi quãng đường ngắn.'
    ],
    correctIndex: 1,
    explanation: 'Người ngồi trên xe mô tô, xe gắn máy không được mang, vác vật cồng kềnh vì sẽ làm mất cân bằng xe, cản trở tầm nhìn và gây nguy hiểm trực tiếp cho người tham gia giao thông.'
  },
  {
    id: 'crit-08',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi lái xe trên đường cao tốc, người lái xe phát hiện phía trước có chướng ngại vật hoặc xe hỏng, cần phải làm gì?',
    options: [
      'Phanh gấp ngay lập tức giữa làn đường đang chạy.',
      'Bật đèn tín hiệu khẩn cấp, quan sát an toàn phía sau, giảm tốc độ và chuyển dần sang làn dừng khẩn cấp, đặt biển cảnh báo nguy hiểm cách xe tối thiểu 150m.',
      'Lách nhanh sang làn bên cạnh mà không cần bật đèn xi-nhan.'
    ],
    correctIndex: 1,
    explanation: 'Quy tắc an toàn trên cao tốc: Bật đèn khẩn cấp (hazard), quan sát an toàn rồi đưa xe vào làn khẩn cấp, đặt vật cảnh báo cách xe tối thiểu 150m theo chiều xe chạy.'
  },
  {
    id: 'crit-09',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi dừng đỗ xe ô tô trên đường dốc, người lái xe phải thực hiện những thao tác nào dưới đây để đảm bảo an toàn?',
    options: [
      'Đánh lái về phía lề đường (nếu xuống dốc) hoặc đánh lái ra ngoài (nếu lên dốc có vỉa hè), kéo chặt phanh tay, cài số thấp (số 1 hoặc số lùi R đối với số sàn, về P đối với số tự động) và chèn bánh xe nếu dốc cao.',
      'Chỉ cần về số N và kéo nhẹ phanh tay.',
      'Tắt máy và để cần số ở vị trí trung gian (số 0).'
    ],
    correctIndex: 0,
    explanation: 'Khi đỗ xe trên dốc: Luôn kéo chặt phanh tay, cài số kết hợp đánh lái chặn hướng bánh xe vào lề/vỉa hè để phòng ngừa xe bị tuột dốc nếu phanh hỏng.'
  },
  {
    id: 'crit-10',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi vượt xe tại các đoạn đường vòng, đầu dốc và các vị trí có tầm nhìn bị hạn chế có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép vượt nếu xe phía trước đi quá chậm.',
      'Được phép nếu bấm còi báo hiệu liên tục.'
    ],
    correctIndex: 0,
    explanation: 'Vượt xe nơi đường cua dốc, tầm nhìn che khuất cực kỳ nguy hiểm do không thể quan sát xe ngược chiều, do đó BỊ NGHIÊM CẤM tuyệt đối.'
  },
  {
    id: 'crit-11',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi đua xe, cổ vũ đua xe, tổ chức đua xe trái phép trên đường bộ có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Không bị nghiêm cấm nếu đua ở đoạn đường vắng.',
      'Được phép nếu có sự đồng ý của người đi đường.'
    ],
    correctIndex: 0,
    explanation: 'Đua xe, cổ vũ đua xe, tổ chức đua xe trái phép là hành vi vi phạm pháp luật đặc biệt nghiêm trọng và BỊ NGHIÊM CẤM tuyệt đối.'
  },
  {
    id: 'crit-12',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện (chưa đủ tuổi, không có GPLX, có nồng độ cồn, ma túy) để điều khiển xe tham gia giao thông có bị nghiêm cấm không?',
    options: [
      'Không bị nghiêm cấm.',
      'Bị nghiêm cấm.',
      'Được phép nếu là người thân trong gia đình.'
    ],
    correctIndex: 1,
    explanation: 'Giao xe cho người không đủ điều kiện điều khiển phương tiện là hành vi BỊ NGHIÊM CẤM và có thể bị truy cứu trách nhiệm hình sự nếu gây tai nạn.'
  },
  {
    id: 'crit-13',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Sau khi gây tai nạn giao thông, người lái xe có hành vi bỏ trốn để trốn tránh trách nhiệm hoặc cố ý không cứu giúp người bị nạn có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Không bị nghiêm cấm.',
      'Chỉ bị phạt hành chính nhẹ.'
    ],
    correctIndex: 0,
    explanation: 'Bỏ trốn sau khi gây tai nạn hoặc cố ý không cứu giúp người bị nạn là hành vi vi phạm đạo đức người lái xe và BỊ NGHIÊM CẤM theo pháp luật.'
  },
  {
    id: 'crit-14',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi không chấp hành hiệu lệnh dừng xe của Cảnh sát giao thông hoặc người có thẩm quyền điều khiển giao thông có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Không bị nghiêm cấm nếu đang vội.',
      'Được phép đi tiếp nếu thấy mình không vi phạm.'
    ],
    correctIndex: 0,
    explanation: 'Người tham gia giao thông có nghĩa vụ chấp hành nghiêm chỉnh hiệu lệnh của người điều khiển giao thông. Chống đối hoặc không chấp hành là hành vi BỊ NGHIÊM CẤM.'
  },
  {
    id: 'crit-15',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi điều khiển xe chạy lùi hoặc chạy ngược chiều trên đường cao tốc có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm tuyệt đối (trừ các xe ưu tiên đang đi làm nhiệm vụ khẩn cấp).',
      'Được phép nếu lỡ đi quá nút giao.',
      'Được phép chạy lùi ở làn dừng khẩn cấp.'
    ],
    correctIndex: 0,
    explanation: 'Lùi xe hoặc chạy ngược chiều trên cao tốc là hành vi cực kỳ nguy hiểm, gây tai nạn thảm khốc và BỊ NGHIÊM CẤM tuyệt đối.'
  },
  {
    id: 'crit-16',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi điều khiển xe cơ giới đi ngược chiều trên đường một chiều hoặc đi vào đường có biển "Cấm đi ngược chiều" có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Không bị nghiêm cấm nếu đường vắng xe.',
      'Được phép đi một đoạn ngắn để quay đầu.'
    ],
    correctIndex: 0,
    explanation: 'Đi ngược chiều trên đường 1 chiều hoặc nơi có biển cấm là hành vi BỊ NGHIÊM CẤM tuyệt đối.'
  },
  {
    id: 'crit-17',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Người lái xe có được phép điều khiển phương tiện đi vào khu vực cấm, đường có biển báo cấm loại phương tiện đó không?',
    options: [
      'Không được phép (trừ trường hợp xe ưu tiên đang làm nhiệm vụ).',
      'Được phép nếu xe không chở khách.',
      'Được phép nếu đi vào ban đêm.'
    ],
    correctIndex: 0,
    explanation: 'Tuyệt đối không được đi vào khu vực cấm hoặc đường cấm phương tiện của mình.'
  },
  {
    id: 'crit-18',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi dừng xe, đỗ xe tùy tiện trên phần đường xe chạy của đường cao tốc có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép dừng đỗ để nghỉ ngơi.',
      'Được phép dừng đỗ để chụp ảnh.'
    ],
    correctIndex: 0,
    explanation: 'Trên cao tốc chỉ được dừng đỗ ở trạm dừng nghỉ hoặc làn dừng khẩn cấp khi xe gặp sự cố kỹ thuật bất khả kháng.'
  },
  {
    id: 'crit-19',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi có tín hiệu của xe ưu tiên (Cứu hỏa, Quân sự, Công an, Cứu thương phát còi, cờ, đèn ưu tiên), người lái xe phải làm gì?',
    options: [
      'Phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường, không được gây cản trở xe được quyền ưu tiên.',
      'Tăng tốc độ chạy trước xe ưu tiên.',
      'Bấm còi to để cảnh báo xe ưu tiên.'
    ],
    correctIndex: 0,
    explanation: 'Bắt buộc phải giảm tốc độ, tấp sát lề phải và nhường đường tuyệt đối cho xe ưu tiên đang phát tín hiệu làm nhiệm vụ.'
  },
  {
    id: 'crit-20',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Người lái xe có được phép vượt xe khác trên cầu hẹp chỉ có một làn xe hay không?',
    options: [
      'Không được vượt.',
      'Được vượt nếu xe phía trước đi chậm.',
      'Được vượt nếu có tầm nhìn thoáng.'
    ],
    correctIndex: 0,
    explanation: 'Cấm vượt xe trên cầu hẹp có một làn xe vì không có khoảng trống an toàn để chuyển làn.'
  },
  {
    id: 'crit-21',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Trong hầm đường bộ, người lái xe có được phép quay đầu xe hay không?',
    options: [
      'Không được quay đầu xe.',
      'Được quay đầu xe nếu hầm rộng.',
      'Được quay đầu xe vào ban đêm.'
    ],
    correctIndex: 0,
    explanation: 'Trong hầm đường bộ: CẤM lùi xe, CẤM quay đầu xe, CẤM vượt xe (nơi không cho phép), chỉ được dừng đỗ ở nơi quy định.'
  },
  {
    id: 'crit-22',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Trong hầm đường bộ, người lái xe có được phép lùi xe hay không?',
    options: [
      'Không được lùi xe.',
      'Được lùi xe nếu bật đèn khẩn cấp.',
      'Được lùi xe nếu có người xi-nhan phía sau.'
    ],
    correctIndex: 0,
    explanation: 'Trong hầm đường bộ, hành vi lùi xe là hành vi BỊ NGHIÊM CẤM tuyệt đối.'
  },
  {
    id: 'crit-23',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi rào chắn đường sắt đang dịch chuyển hoặc chuông báo reo, người tham gia giao thông có được vượt rào chắn không?',
    options: [
      'Không được vượt rào chắn.',
      'Được vượt nếu thấy tàu còn ở xa.',
      'Được vượt nếu đi xe máy nhanh.'
    ],
    correctIndex: 0,
    explanation: 'Nghiêm cấm vượt rào chắn đường sắt khi chắn đang dịch chuyển hoặc đã đóng hoàn toàn.'
  },
  {
    id: 'crit-24',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi chở người trên mui xe, nóc xe, trong thùng xe tải chở hàng (trừ trường hợp làm nhiệm vụ khẩn cấp có phép) có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Không bị nghiêm cấm nếu đi gần.',
      'Được phép nếu người ngồi bám chắc.'
    ],
    correctIndex: 0,
    explanation: 'Nghiêm cấm chở người trên nóc, mui, bậc lên xuống hoặc thùng xe tải trái quy định pháp luật.'
  },
  {
    id: 'crit-25',
    types: ['motorbike'],
    category: 'critical',
    isCritical: true,
    question: 'Người điều khiển xe mô tô hai bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy xe khác, vật khác trên đường không?',
    options: [
      'Không được phép.',
      'Được phép nếu xe kia hết xăng.',
      'Được phép nếu đường vắng.'
    ],
    correctIndex: 0,
    explanation: 'Xe mô tô 2 bánh, xe gắn máy không được kéo, đẩy xe khác, vật khác hoặc chở đồ cồng kềnh.'
  },
  {
    id: 'crit-26',
    types: ['motorbike'],
    category: 'critical',
    isCritical: true,
    question: 'Người điều khiển xe mô tô hai bánh, xe gắn máy có được phép sử dụng điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) khi đang lái xe không?',
    options: [
      'Không được phép.',
      'Được phép sử dụng nếu có tai nghe Bluetooth.',
      'Được phép khi đi tốc độ chậm.'
    ],
    correctIndex: 0,
    explanation: 'Luật quy định: Người đang điều khiển xe mô tô, xe gắn máy KHÔNG ĐƯỢC sử dụng điện thoại di động hoặc thiết bị âm thanh (trừ máy trợ thính).'
  },
  {
    id: 'crit-27',
    types: ['motorbike'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi buông cả hai tay hoặc dùng chân để điều khiển xe mô tô hai bánh có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép nếu biểu diễn xiếc trên đường vắng.',
      'Không bị nghiêm cấm.'
    ],
    correctIndex: 0,
    explanation: 'Buông cả hai tay hoặc dùng chân lái xe là hành vi đe dọa trực tiếp tính mạng và BỊ NGHIÊM CẤM hoàn toàn.'
  },
  {
    id: 'crit-28',
    types: ['motorbike'],
    category: 'critical',
    isCritical: true,
    question: 'Người điều khiển xe mô tô hai bánh, xe gắn máy có được phép đi xe dàn hàng ngang (từ 3 xe trở lên) không?',
    options: [
      'Không được phép.',
      'Được phép nếu đi theo đoàn du lịch.',
      'Được phép nếu đi chậm.'
    ],
    correctIndex: 0,
    explanation: 'Đi xe mô tô dàn hàng ngang gây cản trở giao thông nghiêm trọng và là hành vi bị cấm.'
  },
  {
    id: 'crit-29',
    types: ['motorbike'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi sử dụng chân chống hoặc vật khác quệt xuống đường khi xe mô tô đang chạy có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép nếu để tạo tia lửa đẹp.',
      'Không bị nghiêm cấm.'
    ],
    correctIndex: 0,
    explanation: 'Quệt chân chống xuống đường gây nguy cơ ngã xe, cháy nổ nhiên liệu và BỊ NGHIÊM CẤM tuyệt đối.'
  },
  {
    id: 'crit-30',
    types: ['motorbike'],
    category: 'critical',
    isCritical: true,
    question: 'Người điều khiển, người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải đội mũ bảo hiểm như thế nào là đúng quy chuẩn?',
    options: [
      'Phải đội mũ bảo hiểm đạt chuẩn có cài quai đúng quy cách.',
      'Chỉ cần đội mũ khi đi trên quốc lộ.',
      'Đội mũ bảo hiểm nhưng không cần cài quai.'
    ],
    correctIndex: 0,
    explanation: 'Bắt buộc phải đội mũ bảo hiểm đạt chuẩn chất lượng và cài quai đúng quy cách khi tham gia giao thông.'
  },
  {
    id: 'crit-31',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi đón, trả hành khách trên đường cao tốc có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép nếu xe đón trả khách nhanh dưới 1 phút.',
      'Được phép ở làn dừng xe khẩn cấp.'
    ],
    correctIndex: 0,
    explanation: 'Đón trả khách trên đường cao tốc là hành vi cực kỳ nguy hiểm, bị nghiêm cấm và xử phạt rất nặng.'
  },
  {
    id: 'crit-32',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Điều khiển xe cơ giới tham gia giao thông mà hệ thống hãm (phanh) không có hoặc không có hiệu lực có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép nếu đi với tốc độ dưới 20 km/h.',
      'Được phép nếu đường bằng phẳng.'
    ],
    correctIndex: 0,
    explanation: 'Xe mất phanh hoặc không có phanh bị cấm lưu thông tuyệt đối trên đường bộ.'
  },
  {
    id: 'crit-33',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Điều khiển xe cơ giới không có đèn chiếu sáng trong điều kiện sương mù, thời tiết xấu hoặc ban đêm có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép nếu đi theo sau xe khác có đèn.',
      'Được phép nếu đường có đèn đường sáng.'
    ],
    correctIndex: 0,
    explanation: 'Không bật đèn hoặc xe không có đèn chiếu sáng ban đêm/sương mù là hành vi bị nghiêm cấm.'
  },
  {
    id: 'crit-34',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Thời gian làm việc của người lái xe ô tô không được lái xe liên tục quá bao nhiêu giờ?',
    options: [
      'Không quá 4 giờ liên tục.',
      'Không quá 6 giờ liên tục.',
      'Không quá 8 giờ liên tục.'
    ],
    correctIndex: 0,
    explanation: 'Quy định an toàn lao động lái xe: Không được lái xe liên tục quá 4 giờ (phải nghỉ giải lao tối thiểu 15 phút).'
  },
  {
    id: 'crit-35',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Thời gian làm việc trong một ngày của người lái xe ô tô không được lái xe quá bao nhiêu giờ?',
    options: [
      'Không quá 10 giờ trong một ngày.',
      'Không quá 12 giờ trong một ngày.',
      'Không quá 8 giờ trong một ngày.'
    ],
    correctIndex: 0,
    explanation: 'Tổng thời gian lái xe của 1 tài xế không được vượt quá 10 giờ trong vòng 24 giờ.'
  },
  {
    id: 'crit-36',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Người lái xe không được dừng, đỗ xe tại các vị trí nào dưới đây?',
    options: [
      'Trên miệng cống thoát nước, miệng hầm đường điện, đường điện thoại cao thế, chỗ dành riêng cho xe chữa cháy lấy nước.',
      'Nơi có biển báo cho phép đỗ xe.',
      'Ở làn đường phía trước gara xe gia đình khi có sự đồng ý.'
    ],
    correctIndex: 0,
    explanation: 'Cấm dừng đỗ trên miệng cống thoát nước, hầm điện thoại, hầm cáp điện và trụ nước chữa cháy.'
  },
  {
    id: 'crit-37',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi gặp tín hiệu đèn giao thông màu vàng (chưa qua vạch dừng), người lái xe phải xử lý như thế nào?',
    options: [
      'Phải dừng lại trước vạch dừng; trường hợp đã đi quá vạch dừng thì được đi tiếp.',
      'Tăng ga vượt thật nhanh qua ngã tư.',
      'Bấm còi to và tiếp tục đi.'
    ],
    correctIndex: 0,
    explanation: 'Đèn vàng: Phải dừng trước vạch dừng. Trừ trường hợp xe đã tiến vượt qua vạch dừng thì được tiếp tục đi.'
  },
  {
    id: 'crit-38',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi lái xe ban đêm trong khu đô thị và khu đông dân cư có hệ thống chiếu sáng công cộng, người lái xe phải sử dụng loại đèn nào?',
    options: [
      'Chỉ được bật đèn chiếu gần (đèn cốt).',
      'Được bật đèn chiếu xa (đèn pha).',
      'Bật cả đèn pha và đèn cốt.'
    ],
    correctIndex: 0,
    explanation: 'Trong đô thị/khu đông dân cư ban đêm: NGHIÊM CẤM bật đèn chiếu xa (pha) gây chói mắt nguy hiểm cho xe ngược chiều, chỉ được bật đèn chiếu gần (cốt).'
  },
  {
    id: 'crit-39',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Tại nơi có vạch kẻ đường dành cho người đi bộ qua đường, khi có người đi bộ đang qua đường, người lái xe phải làm gì?',
    options: [
      'Phải giảm tốc độ, nhường đường cho người đi bộ qua đường an toàn.',
      'Bấm còi liên tục để người đi bộ tránh đường.',
      'Tăng tốc vượt lên phía trước người đi bộ.'
    ],
    correctIndex: 0,
    explanation: 'Luôn phải giảm tốc độ và nhường đường cho người đi bộ đang đi trên vạch kẻ đường sang đường.'
  },
  {
    id: 'crit-40',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi điều khiển xe ô tô xuống đường dốc cao, dài, thao tác nào dưới đây là NGUY HIỂM và BỊ NGHIÊM CẤM?',
    options: [
      'Về số Mo (số 0, số N) hoặc tắt máy thả trôi xe.',
      'Về số thấp và kết hợp phanh chân hãm tốc.',
      'Giữ đều ga ở dải tốc độ an toàn.'
    ],
    correctIndex: 0,
    explanation: 'Về Mo hoặc tắt máy khi đổ dốc sẽ làm mất trợ lực phanh, mất trợ lực lái và cháy phanh gây tai nạn thảm khốc.'
  },
  {
    id: 'crit-41',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi xe ô tô gặp sự cố kỹ thuật buộc phải dừng trên làn dừng khẩn cấp của đường cao tốc vào ban đêm, người lái xe phải làm gì?',
    options: [
      'Bật đèn tín hiệu khẩn cấp (hazard), đặt biển tam giác cảnh báo nguy hiểm cách xe tối thiểu 150 mét về phía sau xe.',
      'Tắt hết đèn để tiết kiệm bình ắc-quy.',
      'Đứng giữa đường vẫy tay xin giúp đỡ.'
    ],
    correctIndex: 0,
    explanation: 'Bắt buộc phải bật đèn hazard và đặt cọc tiêu/biển báo phản quang cách đuôi xe tối thiểu 150m trên cao tốc.'
  },
  {
    id: 'crit-42',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Người lái xe ô tô có được phép lùi xe tại nơi đường bộ giao nhau (ngã ba, ngã tư) không?',
    options: [
      'Không được phép lùi xe.',
      'Được phép nếu bật đèn cảnh báo nguy hiểm.',
      'Được phép nếu có người chỉ đường.'
    ],
    correctIndex: 0,
    explanation: 'Cấm lùi xe ở nơi đường bộ giao nhau vì luồng giao thông cắt ngang rất phức tạp và nguy hiểm.'
  },
  {
    id: 'crit-43',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Người lái xe ô tô có được phép lùi xe trên phần đường dành cho người đi bộ qua đường không?',
    options: [
      'Không được phép lùi xe.',
      'Được phép lùi xe nếu không có người đi bộ.',
      'Được phép lùi xe vào ban đêm.'
    ],
    correctIndex: 0,
    explanation: 'Cấm lùi xe trên phần đường dành cho người đi bộ qua đường.'
  },
  {
    id: 'crit-44',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi điều khiển xe chở hàng vượt quá tải trọng thiết kế hoặc vượt quá tải trọng cho phép của cầu, đường có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép nếu hàng hóa là nông sản dễ hư hỏng.',
      'Không bị nghiêm cấm nếu chạy chậm.'
    ],
    correctIndex: 0,
    explanation: 'Chở quá tải trọng phá hoại kết cấu hạ tầng giao thông và gây mất an toàn nghiêm trọng, BỊ NGHIÊM CẤM.'
  },
  {
    id: 'crit-45',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Chủ phương tiện có được phép tự ý thay đổi tổng thành, hệ thống khung, động cơ, phanh của xe cơ giới trái với thiết kế của nhà sản xuất đã được đăng kiểm không?',
    options: [
      'Không được phép (Bị nghiêm cấm).',
      'Được phép thay đổi để xe chạy nhanh hơn.',
      'Được phép nếu mua linh kiện chính hãng.'
    ],
    correctIndex: 0,
    explanation: 'Tự ý thay đổi kết cấu, tổng thành kỹ thuật xe trái thiết kế được duyệt là hành vi vi phạm pháp luật và bị cấm.'
  },
  {
    id: 'crit-46',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi sử dụng Giấy phép lái xe giả hoặc Giấy phép lái xe đã bị cơ quan có thẩm quyền tước quyền sử dụng để lái xe tham gia giao thông có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép nếu đang trên đường đi nộp phạt.',
      'Không bị nghiêm cấm.'
    ],
    correctIndex: 0,
    explanation: 'Sử dụng GPLX giả hoặc đang bị tước GPLX là hành vi vi phạm pháp luật và bị xử lý nghiêm minh.'
  },
  {
    id: 'crit-47',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Xe ô tô kéo một rơ moóc có được phép kéo thêm một xe ô tô khác hoặc kéo thêm một rơ moóc thứ hai không?',
    options: [
      'Không được phép.',
      'Được phép nếu có nối thanh kéo cứng.',
      'Được phép nếu chạy tốc độ dưới 30 km/h.'
    ],
    correctIndex: 0,
    explanation: 'Xe ô tô kéo rơ-moóc KHÔNG ĐƯỢC phép kéo thêm xe khác hoặc rơ-moóc thứ hai.'
  },
  {
    id: 'crit-48',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi mở cửa xe ô tô xuống đường, người lái xe và hành khách cần thực hiện thao tác nào để đảm bảo an toàn tuyệt đối?',
    options: [
      'Quan sát gương chiếu hậu và nhìn phía sau, chỉ mở hé cánh cửa khi đảm bảo an toàn, sau đó mới mở cửa ở mức cần thiết để xuống xe.',
      'Mở toang cửa xe thật nhanh để xuống cho lẹ.',
      'Mở cửa phía bên tay trái mà không cần nhìn gương.'
    ],
    correctIndex: 0,
    explanation: 'Mở cửa xe ô tô bất cẩn là nguyên nhân của nhiều vụ tai nạn tử vong cho người đi xe máy. Phải quan sát kỹ phía sau và mở hé trước khi bước ra.'
  },
  {
    id: 'crit-49',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi xe ô tô đang chạy ở tốc độ cao trên mặt đường ướt, trơn trượt, hành vi nào dưới đây cực kỳ nguy hiểm có thể làm xe bị lật hoặc quay ngang xe?',
    options: [
      'Đạp phanh gấp và đánh lái đột ngột.',
      'Giữ chắc tay lái, nhả ga từ từ và rà phanh nhẹ nhàng.',
      'Duy trì khoảng cách an toàn với xe phía trước.'
    ],
    correctIndex: 0,
    explanation: 'Phanh gấp kết hợp đánh lái trên đường trơn sẽ làm bánh xe mất độ bám, khiến xe bị văng đuôi hoặc lật nhào.'
  },
  {
    id: 'crit-50',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi lái xe qua vũng nước sâu hoặc đường ngập nước, người lái xe cần thực hiện thao tác nào dưới đây?',
    options: [
      'Quan sát ước lượng độ sâu, về số thấp (số 1 đối với xe số sàn, chế độ D1/L đối với xe số tự động), giữ đều chân ga vừa phải để tránh nước tràn vào ống xả.',
      'Tăng hết ga phóng thật nhanh qua vũng nước.',
      'Vừa đi vừa nhấp nhả côn liên tục.'
    ],
    correctIndex: 0,
    explanation: 'Đi qua đường ngập: Về số thấp, giữ đều ga không giảm ga đột ngột để áp lực khí xả đẩy nước không chui vào ống pô.'
  },
  {
    id: 'crit-51',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi qua phà, qua cầu phao, mọi người trên xe (trừ người già yếu, bệnh tật, phụ nữ có thai và lái xe) phải làm gì?',
    options: [
      'Phải xuống xe, không được ngồi trên xe khi xe lên xuống phà.',
      'Được ngồi nguyên trên xe.',
      'Chỉ người ngồi ghế sau mới phải xuống xe.'
    ],
    correctIndex: 0,
    explanation: 'Quy định qua phà, cầu phao: Mọi hành khách phải xuống xe đi bộ lên phà để đảm bảo an toàn nếu xe gặp sự cố chìm đắm.'
  },
  {
    id: 'crit-52',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi xe ô tô kéo đẩy xe khác trên đường cao tốc (khi xe kia vẫn tự vận hành bình thường) có bị cấm không?',
    options: [
      'Bị cấm.',
      'Được phép nếu bật đèn cảnh báo nguy hiểm.',
      'Được phép nếu đi ở làn bên phải.'
    ],
    correctIndex: 0,
    explanation: 'Trên cao tốc nghiêm cấm việc kéo đẩy xe khác tùy tiện.'
  },
  {
    id: 'crit-53',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi chuyển làn đường hoặc chuyển hướng rẽ xe, người lái xe bắt buộc phải thực hiện thao tác nào trước tiên?',
    options: [
      'Phải quan sát gương chiếu hậu, bật đèn xi-nhan báo hiệu trước một khoảng cách an toàn và chỉ chuyển hướng khi không gây nguy hiểm cho xe khác.',
      'Cứ rẽ xe trước rồi mới bật đèn xi-nhan sau.',
      'Bấm còi rồi đánh lái rẽ ngay.'
    ],
    correctIndex: 0,
    explanation: 'Chuyển làn/rẽ xe: Quan sát an toàn -> Bật xi-nhan báo trước -> Giảm tốc độ -> Chuyển hướng êm dịu.'
  },
  {
    id: 'crit-54',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi xin vượt xe phía trước, người lái xe KHÔNG ĐƯỢC vượt trong trường hợp nào dưới đây?',
    options: [
      'Khi xe phía trước có tín hiệu rẽ trái hoặc đang vượt xe khác, hoặc có xe đi ngược chiều tới gần.',
      'Khi xe phía trước đã giảm tốc độ và nhấp nháy đèn xin nhường đường.',
      'Khi mặt đường phía trước hoàn toàn khô ráo và thông thoáng.'
    ],
    correctIndex: 0,
    explanation: 'Không được vượt khi xe phía trước chưa nhường đường, đang có tín hiệu rẽ hoặc có xe ngược chiều trong vùng nguy hiểm.'
  },
  {
    id: 'crit-55',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi đỗ xe ô tô song song với một xe khác đang đỗ bên lề đường (gây cản trở giao thông) có bị cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Được phép nếu đường rộng.',
      'Được phép nếu đỗ dưới 5 phút.'
    ],
    correctIndex: 0,
    explanation: 'Cấm đỗ xe song song với xe khác đang đỗ (đỗ xe hàng hai, hàng ba) làm thu hẹp lòng đường xe chạy.'
  },
  {
    id: 'crit-56',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Hành vi làm rơi vãi dầu nhớt, hóa chất độc hại, phế thải xây dựng trên mặt đường bộ có bị nghiêm cấm không?',
    options: [
      'Bị nghiêm cấm.',
      'Không bị cấm nếu rơi vãi lượng nhỏ.',
      'Được phép nếu có xe quét rác đi sau.'
    ],
    correctIndex: 0,
    explanation: 'Rơi vãi dầu mỡ, vật liệu xây dựng gây trơn trượt, tai nạn chết người và là hành vi bị nghiêm cấm theo pháp luật.'
  },
  {
    id: 'crit-57',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Vận chuyển hàng nguy hiểm, chất dễ cháy nổ trên đường bộ phải tuân thủ quy định nào dưới đây?',
    options: [
      'Phải có giấy phép vận chuyển do cơ quan có thẩm quyền cấp, phương tiện phải có biển biểu trưng hàng nguy hiểm và trang bị đầy đủ dụng cụ chữa cháy.',
      'Chỉ cần bọc kín hàng hóa và chạy vào ban đêm.',
      'Không cần giấy phép nếu chỉ chở số lượng ít.'
    ],
    correctIndex: 0,
    explanation: 'Vận chuyển hàng nguy hiểm bắt buộc phải có giấy phép chuyên dụng và tuân thủ quy trình phòng chống cháy nổ nghiêm ngặt.'
  },
  {
    id: 'crit-58',
    types: ['motorbike', 'car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi xe phía sau có tín hiệu xin vượt, nếu đủ điều kiện an toàn, người điều khiển phương tiện phía trước phải xử lý như thế nào?',
    options: [
      'Phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe xin vượt.',
      'Tăng ga chạy nhanh hơn để không cho xe sau vượt.',
      'Đánh lái sang bên trái để chặn đầu xe sau.'
    ],
    correctIndex: 0,
    explanation: 'Khi đủ điều kiện an toàn, phương tiện phía trước phải giảm tốc và nhường đường về bên phải cho xe sau vượt.'
  },
  {
    id: 'crit-59',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Người lái xe và người ngồi trên hàng ghế có trang bị dây an toàn của xe ô tô khi tham gia giao thông trên đường bộ có bắt buộc phải thắt dây an toàn không?',
    options: [
      'Bắt buộc phải thắt dây an toàn.',
      'Chỉ bắt buộc đối với người lái xe.',
      'Chỉ bắt buộc khi chạy trên đường cao tốc.'
    ],
    correctIndex: 0,
    explanation: 'Quy định bắt buộc: Tất cả người ngồi ở vị trí có trang bị dây an toàn trên xe ô tô đều phải thắt dây an toàn khi xe đang chạy.'
  },
  {
    id: 'crit-60',
    types: ['car'],
    category: 'critical',
    isCritical: true,
    question: 'Khi chở trẻ em dưới 10 tuổi và chiều cao dưới 1,35 mét trên xe ô tô, người lái xe phải tuân thủ quy tắc an toàn nào?',
    options: [
      'Không được cho trẻ em ngồi cùng hàng ghế với người lái xe (ghế phụ phía trước), phải sử dụng thiết bị an toàn (ghế an toàn cho trẻ em) phù hợp.',
      'Cho trẻ em ngồi ghế trước để dễ trông nom.',
      'Cho trẻ em đứng trên ghế phụ phía trước.'
    ],
    correctIndex: 0,
    explanation: 'Quy định mới: Trẻ em dưới 10 tuổi hoặc cao dưới 1.35m không được ngồi hàng ghế trước và bắt buộc phải dùng thiết bị an toàn (ghế chuyên dụng trẻ em).'
  }
];

// ==========================================================================
// CÁC CÂU HỎI THƯỜNG (LUẬT, BIỂN BÁO, SA HÌNH, KỸ THUẬT)
// ==========================================================================
export const NORMAL_QUESTIONS = [
  {
    id: 'law-01',
    types: ['motorbike', 'car'],
    category: 'rules',
    isCritical: false,
    question: 'Người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?',
    options: [
      'Đi bên phải theo chiều đi của mình, đi đúng làn đường, phần đường quy định và phải chấp hành hệ thống báo hiệu đường bộ.',
      'Đi bên phải hoặc đi giữa đường nếu đường vắng người.',
      'Đi bên trái theo chiều đi của mình để dễ quan sát xe ngược chiều.'
    ],
    correctIndex: 0,
    explanation: 'Quy tắc cơ bản: Luôn đi bên phải theo chiều đi của mình, đi đúng làn đường quy định và tuân thủ tuyệt đối báo hiệu đường bộ.'
  },
  {
    id: 'law-02',
    types: ['motorbike', 'car'],
    category: 'rules',
    isCritical: false,
    question: 'Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào?',
    options: [
      'Phải nhường đường cho xe đi đến từ bên phải.',
      'Phải nhường đường cho xe đi đến từ bên trái.',
      'Phải nhường đường cho xe có tải trọng lớn hơn.'
    ],
    correctIndex: 0,
    explanation: 'Mẹo nhớ: KHÔNG vòng xuyến -> Nhường BÊN PHẢI. CÓ vòng xuyến -> Nhường BÊN TRÁI.'
  },
  {
    id: 'law-03',
    types: ['motorbike', 'car'],
    category: 'rules',
    isCritical: false,
    question: 'Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào?',
    options: [
      'Phải nhường đường cho xe đi đến từ bên phải.',
      'Phải nhường đường cho xe đi đến từ bên trái.',
      'Phải nhường đường cho xe xin vượt trước.'
    ],
    correctIndex: 1,
    explanation: 'Mẹo nhớ: CÓ vòng xuyến nhường BÊN TRÁI (do các phương tiện đang lưu thông trong vòng xuyến từ bên trái tới).'
  },
  {
    id: 'law-04',
    types: ['motorbike'],
    category: 'rules',
    isCritical: false,
    question: 'Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi-lanh từ 50 cm3 trở lên (Hạng A1)?',
    options: [
      '16 tuổi.',
      '17 tuổi.',
      '18 tuổi.',
      '20 tuổi.'
    ],
    correctIndex: 2,
    explanation: 'Độ tuổi lái xe: Đủ 16 tuổi: lái xe gắn máy dưới 50cm3. Đủ 18 tuổi trở lên: lái xe mô tô A1, A2 và ô tô B1, B2.'
  },
  {
    id: 'law-05',
    types: ['car'],
    category: 'rules',
    isCritical: false,
    question: 'Người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe hạng C-1 (xe ô tô tải trên 3.500 kg)?',
    options: [
      '18 tuổi.',
      '21 tuổi.',
      '24 tuổi.',
      '27 tuổi.'
    ],
    correctIndex: 1,
    explanation: 'Độ tuổi lái xe: Hạng B1, B2: 18 tuổi. Hạng C, C-1: 21 tuổi. Hạng D: 24 tuổi.'
  },
  {
    id: 'law-06',
    types: ['motorbike', 'car'],
    category: 'rules',
    isCritical: false,
    question: 'Khi gặp hiệu lệnh của Cảnh sát giao thông giơ hai tay hoặc một tay dang ngang, người tham gia giao thông phải đi như thế nào?',
    options: [
      'Người tham gia giao thông ở phía trước và phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển giao thông được đi tất cả các hướng.',
      'Người tham gia giao thông ở phía bên phải và bên trái dừng lại; phía trước và sau được đi.',
      'Tất cả các hướng đều phải dừng lại chờ hiệu lệnh tiếp theo.'
    ],
    correctIndex: 0,
    explanation: 'Mẹo CSGT: Giơ 1 tay thẳng đứng -> Tất cả dừng lại. Dang 2 tay (hoặc 1 tay ngang) -> Trước sau DỪNG, Trái phải ĐƯỢC ĐI.'
  },
  {
    id: 'law-07',
    types: ['motorbike', 'car'],
    category: 'rules',
    isCritical: false,
    question: 'Khi gặp hiệu lệnh của Cảnh sát giao thông giơ tay thẳng đứng lên trời, người tham gia giao thông phải làm gì?',
    options: [
      'Người tham gia giao thông ở các hướng đều phải dừng lại, trừ các xe đã ở trong khu vực giao nhau được tiếp tục đi.',
      'Chỉ xe ở phía trước và phía sau dừng lại.',
      'Xe ưu tiên được phép đi tiếp mà không cần giảm tốc độ.'
    ],
    correctIndex: 0,
    explanation: 'Mẹo CSGT: Giơ tay thẳng đứng = Tất cả các hướng dừng lại (trừ phương tiện đã tiến vào bên trong ngã tư thì được đi tiếp).'
  },
  {
    id: 'law-08',
    types: ['motorbike', 'car'],
    category: 'rules',
    isCritical: false,
    question: 'Tốc độ tối đa cho phép đối với xe mô tô hai bánh trên đường bộ trong khu vực đông dân cư (đường đôi có dải phân cách giữa) là bao nhiêu?',
    image: '/images/signs/r420_khu_dong_dan_cu.svg',
    options: [
      '40 km/h.',
      '50 km/h.',
      '60 km/h.',
      '70 km/h.'
    ],
    correctIndex: 2,
    explanation: 'Trong khu đông dân cư: Đường đôi (có dải phân cách giữa) -> Tối đa 60 km/h. Đường hai chiều (không dải phân cách) -> Tối đa 50 km/h.'
  },
  {
    id: 'law-09',
    types: ['car'],
    category: 'rules',
    isCritical: false,
    question: 'Trên đường cao tốc, người lái xe phải dừng xe, đỗ xe như thế nào là đúng quy tắc giao thông?',
    options: [
      'Chỉ được dừng xe, đỗ xe ở nơi quy định; trường hợp buộc phải dừng xe, đỗ xe không đúng nơi quy định thì người lái xe phải đưa xe ra khỏi phần đường xe chạy, nếu không thể được thì phải báo hiệu cho người lái xe khác biết.',
      'Được dừng đỗ xe ở làn đường ngoài cùng bên phải bất cứ lúc nào.',
      'Được dừng đỗ xe ở dải phân cách giữa nếu xe gặp trục trặc nhẹ.'
    ],
    correctIndex: 0,
    explanation: 'Trên đường cao tốc, chỉ được dừng đỗ ở trạm dừng nghỉ hoặc làn dừng khẩn cấp khi xe gặp sự cố bất khả kháng.'
  },
  {
    id: 'law-10',
    types: ['motorbike'],
    category: 'rules',
    isCritical: false,
    question: 'Người điều khiển xe mô tô hai bánh được chở tối đa 2 người trong những trường hợp nào dưới đây?',
    options: [
      'Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật.',
      'Trẻ em dưới 14 tuổi.',
      'Cả ý 1 và ý 2.'
    ],
    correctIndex: 2,
    explanation: 'Xe mô tô được chở tối đa 2 người (tổng 3 người trên xe) khi: 1. Cấp cứu người bệnh; 2. Áp giải tội phạm; 3. Trẻ em dưới 14 tuổi.'
  },
  {
    id: 'law-11',
    types: ['car'],
    category: 'rules',
    isCritical: false,
    question: 'Niên hạn sử dụng của xe ô tô chở người trên 9 chỗ ngồi (tính từ năm sản xuất) là bao nhiêu năm?',
    options: [
      '15 năm.',
      '20 năm.',
      '25 năm.',
      'Không quy định niên hạn.'
    ],
    correctIndex: 1,
    explanation: 'Niên hạn sử dụng: Xe ô tô chở người trên 9 chỗ ngồi -> Không quá 20 năm. Xe ô tô tải chở hàng -> Không quá 25 năm.'
  },
  {
    id: 'law-12',
    types: ['car'],
    category: 'rules',
    isCritical: false,
    question: 'Niên hạn sử dụng của xe ô tô tải chở hàng (tính từ năm sản xuất) là bao nhiêu năm?',
    options: [
      '20 năm.',
      '25 năm.',
      '30 năm.'
    ],
    correctIndex: 1,
    explanation: 'Niên hạn xe tải: Không quá 25 năm tính từ năm sản xuất.'
  },
  {
    id: 'law-13',
    types: ['motorbike', 'car'],
    category: 'rules',
    isCritical: false,
    question: 'Khi lái xe trong khu đô thị và đông dân cư từ 22 giờ đêm đến 5 giờ sáng hôm sau, muốn xin vượt xe khác, người lái xe phải báo hiệu bằng cách nào?',
    options: [
      'Chỉ được báo hiệu bằng đèn (nháy đèn pha/cos).',
      'Báo hiệu bằng còi thật to.',
      'Kết hợp cả còi và đèn liên tục.'
    ],
    correctIndex: 0,
    explanation: 'Từ 22h đêm đến 5h sáng trong khu đô thị: CẤM BẤM CÒI để tránh ô nhiễm tiếng ồn, chỉ được báo hiệu xin vượt bằng cách NHÁY ĐÈN.'
  },
  {
    id: 'law-14',
    types: ['motorbike', 'car'],
    category: 'rules',
    isCritical: false,
    question: 'Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép (hoặc có thể dừng lại) trong các trường hợp nào dưới đây?',
    options: [
      'Khi có biển cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; khi chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế; khi qua nơi đường giao nhau, đường sắt.',
      'Khi qua cầu, cống hẹp; khi lên gần đỉnh dốc, khi xuống dốc.',
      'Cả ý 1 và ý 2.'
    ],
    correctIndex: 2,
    explanation: 'Tất cả các tình huống nguy hiểm, giao cắt, cầu hẹp, dốc cao hoặc tầm nhìn hạn chế đều bắt buộc người lái xe phải giảm tốc độ an toàn.'
  },

  // ==================== CÁC CÂU HỎI BIỂN BÁO (CÓ HÌNH ẢNH MINH HỌA) ====================
  {
    id: 'sign-01',
    types: ['motorbike', 'car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo hiệu dưới đây (Biển P.102: hình tròn nền đỏ, ở giữa có vạch ngang trắng) là biển gì?',
    image: '/images/signs/p102_cam_nguoc_chieu.svg',
    options: [
      'Biển cấm đi ngược chiều.',
      'Biển đường cấm mọi phương tiện.',
      'Biển cấm dừng và đỗ xe.',
      'Biển dừng lại (STOP).'
    ],
    correctIndex: 0,
    explanation: 'Biển P.102: Hình tròn nền đỏ có thanh gạch ngang màu trắng ở giữa là biển báo "Cấm đi ngược chiều". Các phương tiện không được phép đi vào chiều đặt biển.'
  },
  {
    id: 'sign-02',
    types: ['motorbike', 'car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo hiệu dưới đây (Biển W.208: tam giác ngược viền đỏ, nền màu vàng) có ý nghĩa gì?',
    image: '/images/signs/w208_giao_nhau_duong_uu_tien.svg',
    options: [
      'Giao nhau với đường ưu tiên (phải nhường đường cho xe trên đường ưu tiên).',
      'Giao nhau với đường không ưu tiên.',
      'Bắt đầu đoạn đường ưu tiên.',
      'Đường hầm phía trước.'
    ],
    correctIndex: 0,
    explanation: 'Biển W.208 hình tam giác ngược viền đỏ nền vàng là biển "Giao nhau với đường ưu tiên". Phương tiện đi trên nhánh có biển này phải giảm tốc độ và nhường đường cho xe đang đi trên đường ưu tiên.'
  },
  {
    id: 'sign-03',
    types: ['car'],
    category: 'signs',
    isCritical: false,
    question: 'Khi gặp biển báo dưới đây (Biển P.106a: Cấm xe ô tô tải), xe ô tô con có được phép đi vào hay không?',
    image: '/images/signs/p106a_cam_tai.svg',
    options: [
      'Được phép đi vào (vì biển cấm xe tải không cấm ô tô con).',
      'Không được phép đi vào.',
      'Chỉ được đi vào vào ban đêm.',
      'Tùy thuộc vào biển phụ bên dưới.'
    ],
    correctIndex: 0,
    explanation: 'Quy tắc thứ tự cấm: Cấm xe nhỏ thì cấm xe lớn (Cấm ô tô con -> cấm tải -> cấm máy kéo). Ngược lại: Cấm xe lớn KHÔNG cấm xe nhỏ. Do đó biển Cấm xe tải thì xe ô tô con vẫn ĐƯỢC PHÉP ĐI VÀO bình thường.'
  },
  {
    id: 'sign-04',
    types: ['motorbike'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển P.104) cấm loại phương tiện nào đi vào?',
    image: '/images/signs/p104_cam_moto.svg',
    options: [
      'Cấm xe mô tô hai bánh và ba bánh.',
      'Cấm xe đạp và xe gắn máy dưới 50cc.',
      'Cấm tất cả các loại xe ô tô.',
      'Cấm xe thô sơ.'
    ],
    correctIndex: 0,
    explanation: 'Biển P.104: Vòng tròn viền đỏ vẽ xe mô tô có người ngồi lái là biển "Cấm xe mô tô", cấm tất cả mô tô 2 bánh và 3 bánh đi vào (không cấm xe gắn máy dưới 50cc).'
  },
  {
    id: 'sign-05',
    types: ['car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển P.108) có ý nghĩa gì?',
    image: '/images/signs/p108_cam_keo_ro_mooc.svg',
    options: [
      'Cấm xe ô tô kéo rơ-moóc hoặc kéo sơ-mi rơ-moóc.',
      'Cấm tất cả xe ô tô tải.',
      'Cấm xe khách trên 30 chỗ.',
      'Đường dành riêng cho xe container.'
    ],
    correctIndex: 0,
    explanation: 'Biển P.108: Cấm các loại xe cơ giới kéo theo rơ-moóc kể cả xe mô tô, máy kéo kéo rơ-moóc đi vào.'
  },
  {
    id: 'sign-06',
    types: ['car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển DP.135: Hình tròn nền trắng viền xanh, có 5 vạch chéo) báo hiệu điều gì?',
    image: '/images/signs/dp135_het_tat_ca_lenh_cam.svg',
    options: [
      'Hết tất cả các lệnh cấm.',
      'Hết hạn chế tốc độ tối đa.',
      'Cấm vượt mọi phương tiện.',
      'Đường một chiều.'
    ],
    correctIndex: 0,
    explanation: 'Biển DP.135 là biển báo "Hết tất cả các lệnh cấm", báo hiệu đoạn đường hết hiệu lực của mọi biển báo cấm trước đó.'
  },
  {
    id: 'sign-07',
    types: ['motorbike', 'car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển R.301a: Hình tròn nền xanh lam có mũi tên trắng đi thẳng) thuộc loại biển gì?',
    image: '/images/signs/r301a_di_thang.svg',
    options: [
      'Biển hiệu lệnh: Các xe chỉ được đi thẳng.',
      'Biển chỉ dẫn đường một chiều.',
      'Biển báo nguy hiểm đường hẹp.',
      'Biển cấm rẽ trái và rẽ phải.'
    ],
    correctIndex: 0,
    explanation: 'Biển R.301a: Biển hiệu lệnh bắt buộc các phương tiện chỉ được phép đi thẳng, không được rẽ sang hướng khác.'
  },
  {
    id: 'sign-08',
    types: ['car'],
    category: 'signs',
    isCritical: false,
    question: 'Gặp biển báo dưới đây (Biển P.124a: Cấm quay đầu xe), người lái xe ô tô có được phép rẽ trái hay không?',
    image: '/images/signs/p124a_cam_quay_dau.svg',
    options: [
      'Được phép rẽ trái (theo quy chuẩn QCVN 41:2019/BGTVT).',
      'Không được phép rẽ trái.',
      'Chỉ được rẽ trái khi đường vắng.',
      'Bị cấm cả rẽ trái và quay đầu.'
    ],
    correctIndex: 0,
    explanation: 'Quy chuẩn QCVN 41:2019/BGTVT quy định rõ: Biển P.124a "Cấm quay đầu xe" KHÔNG cấm rẽ trái. Gặp biển này phương tiện vẫn được rẽ trái bình thường.'
  },
  {
    id: 'sign-09',
    types: ['motorbike', 'car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển W.218: Tam giác viền đỏ nền vàng vẽ hình vòm cửa) báo hiệu điều gì?',
    image: '/images/signs/w218_cua_chui.svg',
    options: [
      'Báo hiệu phía trước có Cửa chui hoặc Hầm chui giới hạn chiều cao.',
      'Báo hiệu đường ngầm có nước lũ.',
      'Báo hiệu cầu vòm phía trước.',
      'Báo hiệu đường hầm đường sắt.'
    ],
    correctIndex: 0,
    explanation: 'Biển W.218: Cảnh báo phía trước có cửa chui (gầm cầu chui, hầm đường bộ tĩnh không thấp).'
  },
  {
    id: 'sign-10',
    types: ['motorbike', 'car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo hình bát giác màu đỏ chữ STOP dưới đây (Biển P.122) bắt buộc các phương tiện phải xử lý như thế nào?',
    image: '/images/signs/p122_stop.svg',
    options: [
      'Buộc tất cả các xe (kể cả xe ưu tiên) phải dừng lại trước vạch dừng, chỉ đi tiếp khi tuyệt đối an toàn.',
      'Chỉ giảm tốc độ không cần dừng hẳn.',
      'Chỉ áp dụng đối với xe tải nặng.',
      'Được phép đi tiếp nếu không thấy cảnh sát giao thông.'
    ],
    correctIndex: 0,
    explanation: 'Biển P.122 "Dừng lại" (STOP) buộc mọi phương tiện cơ giới và thô sơ phải dừng lại trước vạch dừng để quan sát an toàn.'
  },
  {
    id: 'sign-11',
    types: ['motorbike', 'car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển P.123a) có ý nghĩa gì?',
    image: '/images/signs/p123a_cam_re_trai.svg',
    options: [
      'Cấm rẽ trái (và cấm luôn quay đầu xe theo hướng trái).',
      'Cấm quay đầu xe nhưng được rẽ trái.',
      'Chỉ dẫn hướng đi đường vòng.',
      'Cấm đi thẳng.'
    ],
    correctIndex: 0,
    explanation: 'Biển P.123a: Cấm rẽ trái tại nơi đường giao nhau.'
  },
  {
    id: 'sign-12',
    types: ['motorbike', 'car'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển W.210: Vẽ hàng rào sắt) cảnh báo điều gì?',
    image: '/images/signs/w210_duong_sat_co_rao_chan.svg',
    options: [
      'Báo hiệu giao nhau với đường sắt có rào chắn.',
      'Báo hiệu giao nhau với đường sắt không có rào chắn.',
      'Báo hiệu công trường đang thi công.',
      'Báo hiệu cổng làng.'
    ],
    correctIndex: 0,
    explanation: 'Biển W.210 có hình hàng rào cảnh báo đoạn đường giao cắt đường sắt có rào chắn tự động hoặc có người gác chắn.'
  },
  {
    id: 'sign-13',
    types: ['car', 'motorbike'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo hình thoi màu vàng viền trắng dưới đây (Biển I.401) có ý nghĩa gì?',
    image: '/images/signs/i401_bat_dau_duong_uu_tien.svg',
    options: [
      'Bắt đầu đoạn đường ưu tiên (phương tiện được quyền ưu tiên qua nơi giao nhau).',
      'Hết đoạn đường ưu tiên.',
      'Đường cấm mọi phương tiện.',
      'Giao nhau với đường cùng cấp.'
    ],
    correctIndex: 0,
    explanation: 'Biển I.401 hình thoi vàng là biển chỉ dẫn "Bắt đầu đoạn đường ưu tiên". Phương tiện đi trên đường này được quyền ưu tiên qua nơi giao nhau.'
  },
  {
    id: 'sign-14',
    types: ['car', 'motorbike'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển P.130: Hình tròn xanh viền đỏ có 2 vạch chéo màu đỏ) cấm hành vi nào?',
    image: '/images/signs/p130_cam_dung_do.svg',
    options: [
      'Cấm dừng xe và cấm đỗ xe.',
      'Chỉ cấm đỗ xe (vẫn được dừng xe dưới 5 phút).',
      'Cấm xe tải đi vào.',
      'Hết mọi lệnh cấm.'
    ],
    correctIndex: 0,
    explanation: 'Biển P.130 có 2 vạch đỏ đan chéo chữ X là biển "Cấm dừng xe và đỗ xe". Cả hành vi dừng tạm thời và đỗ xe lâu đều bị nghiêm cấm.'
  },
  {
    id: 'sign-15',
    types: ['car', 'motorbike'],
    category: 'signs',
    isCritical: false,
    question: 'Biển báo dưới đây (Biển P.131a: Hình tròn xanh viền đỏ có 1 vạch chéo đỏ) cấm hành vi nào?',
    image: '/images/signs/p131a_cam_do.svg',
    options: [
      'Cấm đỗ xe (vẫn được phép dừng xe tạm thời để đón trả khách/hàng hóa).',
      'Cấm cả dừng xe và đỗ xe.',
      'Cấm quay đầu xe.',
      'Đường dành riêng cho ô tô.'
    ],
    correctIndex: 0,
    explanation: 'Biển P.131a có 1 vạch chéo là biển "Cấm đỗ xe". Người lái xe vẫn được phép dừng xe tạm thời có bật xi-nhan và người lái không rời khỏi vị trí lái.'
  },

  // ==================== CÁC CÂU HỎI SA HÌNH TÌNH HUỐNG (CÓ HÌNH ẢNH MINH HỌA) ====================
  {
    id: 'sh-01',
    types: ['motorbike', 'car'],
    category: 'sahinh',
    isCritical: false,
    question: 'Trong tình huống sa hình dưới đây, xe nào được quyền đi trước theo đúng quy tắc xe ưu tiên?',
    image: '/images/sahinh/sh_nga_tu_xe_uu_tien.svg',
    options: [
      'Xe Cứu hỏa (Chữa cháy).',
      'Xe Công an.',
      'Xe Cứu thương.',
      'Xe Con.'
    ],
    correctIndex: 0,
    explanation: 'Khẩu quyết xe ưu tiên: "HỎA - SỰ - CÔNG - THƯƠNG". Trong hình có xe Cứu hỏa, Xe Công an, Xe Cứu thương -> Xe Cứu hỏa có quyền ưu tiên cao nhất và được đi trước.'
  },
  {
    id: 'sh-02',
    types: ['motorbike', 'car'],
    category: 'sahinh',
    isCritical: false,
    question: 'Theo tình huống sa hình bên dưới, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?',
    image: '/images/sahinh/sh_nga_tu_bien_uu_tien.svg',
    options: [
      'Xe Con và Xe Mô tô (trên đường ưu tiên) -> Xe Tải (gặp biển nhường đường).',
      'Xe Tải -> Xe Con -> Xe Mô tô.',
      'Xe Mô tô -> Xe Tải -> Xe Con.',
      'Xe nào to hơn được đi trước.'
    ],
    correctIndex: 0,
    explanation: 'Xét theo biển báo: Xe Con và Xe Mô tô nằm trên trục đường có biển I.401 (Đường ưu tiên) nên được đi trước. Xe Tải nằm ở nhánh có biển W.208 (Giao nhau với đường ưu tiên) phải nhường đường đi sau cùng.'
  },
  {
    id: 'sh-03',
    types: ['motorbike', 'car'],
    category: 'sahinh',
    isCritical: false,
    question: 'Tại ngã tư đồng cấp không có biển báo như hình dưới, xe nào được quyền đi đầu tiên?',
    image: '/images/sahinh/sh_nga_tu_dong_cap.svg',
    options: [
      'Xe Mô tô (vì hướng bên tay phải của xe mô tô hoàn toàn không vướng xe khác).',
      'Xe Con.',
      'Xe Tải.',
      'Cả 3 xe đi cùng lúc.'
    ],
    correctIndex: 0,
    explanation: 'Quy tắc bên phải không vướng tại ngã 4 đồng cấp: Hướng Tây trống -> Phía bên phải Xe Mô tô trống -> Xe Mô tô được quyền xuất phát đi đầu tiên -> Sau đó đến Xe Con -> Cuối cùng là Xe Tải.'
  },
  {
    id: 'sh-04',
    types: ['car'],
    category: 'sahinh',
    isCritical: false,
    question: 'Theo tình huống sa hình hướng rẽ bên dưới, thứ tự các xe đi như thế nào là đúng?',
    image: '/images/sahinh/sh_nga_tu_huong_re.svg',
    options: [
      'Xe Con (A) rẽ phải -> Xe Tải (B) đi thẳng -> Xe Khách (C) rẽ trái.',
      'Xe Tải (B) -> Xe Khách (C) -> Xe Con (A).',
      'Xe Khách (C) -> Xe Tải (B) -> Xe Con (A).',
      'Xe Con (A) -> Xe Khách (C) -> Xe Tải (B).'
    ],
    correctIndex: 0,
    explanation: 'Thứ tự ưu tiên theo hướng di chuyển: 1. Xe RẼ PHẢI đi đầu tiên (Xe Con A) -> 2. Xe ĐI THẲNG đi thứ nhì (Xe Tải B) -> 3. Xe RẼ TRÁI phải nhường đường đi sau cùng (Xe Khách C).'
  },
  {
    id: 'sh-05',
    types: ['motorbike', 'car'],
    category: 'sahinh',
    isCritical: false,
    question: 'Trong tình huống ngã ba bên dưới, xe nào phải nhường đường?',
    image: '/images/sahinh/sh_nga_ba_chuyen_huong.svg',
    options: [
      'Xe Con (vì đang chuyển hướng từ đường nhánh phụ ra đường chính).',
      'Xe Mô tô.',
      'Cả hai xe dừng lại nhường nhau.'
    ],
    correctIndex: 0,
    explanation: 'Phương tiện đang đi thẳng trên đường chính (Xe mô tô) có quyền ưu tiên. Xe ô tô con từ đường nhánh rẽ ra bắt buộc phải giảm tốc độ và nhường đường.'
  },
  {
    id: 'sh-06',
    types: ['car', 'motorbike'],
    category: 'sahinh',
    isCritical: false,
    question: 'Trong tình huống dưới đây, người lái xe con muốn đi thẳng thì phải xử lý như thế nào?',
    image: '/images/sahinh/sh_den_tin_hieu_re_phai.svg',
    options: [
      'Phải dừng lại trước vạch dừng vì đèn tín hiệu chính đi thẳng đang đỏ (chỉ đèn phụ rẽ phải là xanh).',
      'Vẫn đi thẳng bình thường theo đèn phụ.',
      'Bấm còi to xin vượt qua ngã tư.'
    ],
    correctIndex: 0,
    explanation: 'Đèn chính màu đỏ áp dụng cho hướng đi thẳng -> Xe con đi thẳng bắt buộc phải dừng trước vạch dừng. Đèn phụ mũi tên xanh chỉ cho phép các phương tiện rẽ phải được lưu thông.'
  },
  {
    id: 'sh-07',
    types: ['car'],
    category: 'sahinh',
    isCritical: false,
    question: 'Trong hình dưới đây, xe tải và xe con đỗ xe như thế nào có đúng quy định không?',
    image: '/images/sahinh/sh_xe_dung_do_bien_cam.svg',
    options: [
      'Cả hai xe đều vi phạm (vì biển phụ mũi tên 2 đầu có hiệu lực cấm cả phía trước và phía sau biển).',
      'Chỉ xe tải vi phạm.',
      'Chỉ xe con vi phạm.',
      'Cả hai xe đều đỗ đúng.'
    ],
    correctIndex: 0,
    explanation: 'Biển P.130 kết hợp biển phụ S.503e (mũi tên chỉ 2 hướng lên xuống) có hiệu lực cấm dừng đỗ ở cả phạm vi TRƯỚC và SAU biển báo -> Cả Xe Tải và Xe Con đều vi phạm.'
  },
  {
    id: 'sh-08',
    types: ['car'],
    category: 'sahinh',
    isCritical: false,
    question: 'Xe con vượt xe tải trong tình huống sa hình dưới đây (đè qua vạch liền màu vàng) có đúng quy tắc giao thông không?',
    image: '/images/sahinh/sh_xe_vuot_vach_lien.svg',
    options: [
      'Không đúng quy tắc giao thông (Vi phạm lỗi đè vạch liền cấm lấn làn).',
      'Đúng quy tắc vì xe tải đi chậm.',
      'Đúng quy tắc nếu bật đèn xi-nhan báo hiệu trước.'
    ],
    correctIndex: 0,
    explanation: 'Vạch liền màu vàng là vạch phân chia 2 chiều xe chạy cấm lấn làn, cấm đè vạch. Xe con lấn làn đè vạch liền để vượt xe tải là hành vi vi phạm pháp luật giao thông.'
  },

  // ==================== CÁC CÂU HỎI KỸ THUẬT LÁI XE ====================
  {
    id: 'tech-01',
    types: ['car'],
    category: 'technic',
    isCritical: false,
    question: 'Khi xuống dốc cao, dài, người lái xe ô tô số tự động hoặc số sàn cần thực hiện thao tác nào để đảm bảo an toàn?',
    options: [
      'Về số thấp (về số 1, số 2 hoặc chế độ L/M/S), kết hợp phanh chân để hãm tốc độ động cơ.',
      'Về số N (số 0) và tắt máy thả trôi xe cho tiết kiệm nhiên liệu.',
      'Chỉ đạp giữ phanh chân liên tục mà không cần về số thấp.'
    ],
    correctIndex: 0,
    explanation: 'Quy tắc vàng xuống dốc cao: "LÊN SỐ NÀO - XUỐNG SỐ ĐÓ", luôn về số thấp để tận dụng lực hãm của động cơ (Engine Braking).'
  },
  {
    id: 'tech-02',
    types: ['car'],
    category: 'technic',
    isCritical: false,
    question: 'Hệ thống chống bó cứng phanh (ABS) trên xe ô tô có tác dụng gì?',
    options: [
      'Giúp bánh xe không bị bó cứng khi phanh gấp trên đường trơn trượt, duy trì khả năng đánh lái điều khiển hướng đi của xe và rút ngắn quãng đường phanh.',
      'Tự động tăng công suất động cơ khi leo dốc.',
      'Giúp xe tự động dừng lại khi tài xế ngủ gật.'
    ],
    correctIndex: 0,
    explanation: 'Hệ thống ABS (Anti-lock Braking System) ngăn hiện tượng bó cứng bánh xe khi phanh ngặt, giúp xe không bị văng trượt mất lái.'
  },
  {
    id: 'tech-03',
    types: ['car'],
    category: 'technic',
    isCritical: false,
    question: 'Khi khởi hành ô tô sử dụng hộp số cơ khí (số sàn) trên đường bằng, người lái xe cần thực hiện thao tác đạp côn như thế nào?',
    options: [
      'Đạp hết hành trình bàn đạp ly hợp (côn), vào số 1, nhả từ từ 1/2 hành trình côn cho xe bắt đầu chuyển động rồi nhả hoàn toàn kết hợp mớm ga.',
      'Đạp 1/2 côn rồi giật cần số vào số 1 thật nhanh.',
      'Đạp ga thật mạnh rồi mới đạp côn.'
    ],
    correctIndex: 0,
    explanation: 'Thao tác côn xe số sàn: "CÔN RA TỪ TỪ - GA VÀO ĐỀU ĐẶN" (Đạp dứt khoát kịch sàn khi ngắt côn, nhả chậm rãi khi bắt đầu lăn bánh).'
  },
  {
    id: 'tech-04',
    types: ['motorbike'],
    category: 'technic',
    isCritical: false,
    question: 'Để giảm tốc độ xe mô tô an toàn, người lái xe cần phối hợp các thao tác nào dưới đây?',
    options: [
      'Giảm ga, sử dụng đồng thời cả phanh trước và phanh sau một cách êm dịu.',
      'Chỉ bóp phanh trước thật mạnh.',
      'Chỉ đạp phanh sau thật mạnh và tăng ga.'
    ],
    correctIndex: 0,
    explanation: 'Khi phanh xe mô tô: Phải nhả ga và kết hợp phanh cả 2 bánh (phanh trước 60-70%, phanh sau 30-40%) để xe dừng êm ái, tránh trượt bánh trước gây ngã xe.'
  }
];


// Tổng hợp toàn bộ ngân hàng câu hỏi
export const QUESTIONS_DATABASE = [...CRITICAL_60_QUESTIONS, ...NORMAL_QUESTIONS];

// ==========================================================================
// THUẬT TOÁN SINH ĐỀ THI NGẪU NHIÊN CHUẨN BỘ GTVT (100% KHÔNG TRÙNG LẶP)
// ==========================================================================
export function generateRandomExam(licenseType = 'B') {
  const config = LICENSE_CONFIGS[licenseType] || LICENSE_CONFIGS.B;
  const targetVehicleType = config.vehicleType;

  // 1. Lọc toàn bộ câu hỏi tương thích với hạng xe này
  const eligibleQuestions = QUESTIONS_DATABASE.filter(q =>
    q.types.includes(targetVehicleType)
  );

  // 2. Tách thành các nhóm: Câu điểm liệt & Câu bình thường
  const criticalQuestions = eligibleQuestions.filter(q => q.isCritical);
  const normalQuestions = eligibleQuestions.filter(q => !q.isCritical);

  // 3. Shuffle (Xáo trộn ngẫu nhiên Fisher-Yates)
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const shuffledCritical = shuffleArray(criticalQuestions);
  const shuffledNormal = shuffleArray(normalQuestions);

  // 4. Chọn số lượng câu hỏi điểm liệt (1 đến 2 câu) và bù đủ tổng số câu quy định
  const numCritical = Math.min(shuffledCritical.length, Math.random() > 0.4 ? 2 : 1);
  const selectedCritical = shuffledCritical.slice(0, numCritical);

  const neededNormal = config.totalQuestions - selectedCritical.length;
  const selectedNormal = shuffledNormal.slice(0, neededNormal);

  // 5. Gộp lại và xáo trộn vị trí câu hỏi để câu điểm liệt phân bố ngẫu nhiên
  const finalExamQuestions = shuffleArray([...selectedCritical, ...selectedNormal]);

  return {
    examId: `EXAM-${licenseType}-${Date.now().toString(36).toUpperCase()}`,
    licenseType,
    config,
    questions: finalExamQuestions,
    createdAt: new Date().toISOString()
  };
}
