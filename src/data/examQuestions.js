// Bộ đề thi thử lý thuyết GPLX 2026 chuẩn Cục Đường Bộ Việt Nam
// Độc bản 100%, không trùng lặp câu hỏi giữa các hạng bằng!
// Thời gian làm bài thi chuẩn GTVT: A1 (19p), A (19p), B (20p), C1 (22p), C (24p), D1 (26p), D2 (26p), D (26p), CE (26p)

export const EXAM_DATA = {
  a1: {
    title: "Thi Thử Lý Thuyết Xe Máy Hạng A1",
    subtitle: "Dành cho xe mô tô 2 bánh dung tích dưới 175cm³ (25 câu / 19 phút - Đạt 21/25)",
    timeLimit: 19 * 60,
    passScore: 21,
    total: 25,
    questions: [
  {
    "id": 1,
    "question": "Khái niệm 'Dải phân cách' được hiểu như thế nào là đúng?",
    "options": [
      "A. Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc phân chia phần đường của xe cơ giới và xe thô sơ.",
      "B. Là bộ phận của đường dành riêng cho xe buýt nhanh BRT.",
      "C. Là dải đất trồng cây xanh dọc theo lề đường dành cho người đi bộ."
    ],
    "answer": 0,
    "explanation": "Dải phân cách phân chia mặt đường thành 2 chiều xe chạy riêng biệt hoặc phân chia đường xe cơ giới và xe thô sơ."
  },
  {
    "id": 2,
    "question": "Người điều khiển xe mô tô hai bánh, xe gắn máy có được phép buông cả hai tay hoặc đi xe bằng một bánh không?",
    "options": [
      "A. Được phép nếu đường vắng người.",
      "B. Không được phép.",
      "C. Được phép khi tham gia biểu diễn kỹ thuật."
    ],
    "answer": 1,
    "explanation": "Hành vi buông hai tay, đi xe 1 bánh bị nghiêm cấm hoàn toàn theo Luật GTVT."
  },
  {
    "id": 3,
    "question": "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh có dung tích xi-lanh từ 50 cm³ trở lên?",
    "options": [
      "A. 16 tuổi.",
      "B. 18 tuổi.",
      "C. 20 tuổi."
    ],
    "answer": 1,
    "explanation": "Người đủ 18 tuổi trở lên được điều khiển xe mô tô từ 50cm³ trở lên (bằng A1, A)."
  },
  {
    "id": 4,
    "question": "Biển nào cấm xe mô tô hai bánh đi vào?",
    "options": [
      "A. Biển hình tròn viền đỏ có vẽ hình xe mô tô hai bánh bên trong.",
      "B. Biển hình tròn viền đỏ vẽ hình xe ô tô con.",
      "C. Biển hình tròn viền đỏ vẽ hình xe tải."
    ],
    "answer": 0,
    "explanation": "Biển cấm xe mô tô 2 bánh là biển tròn viền đỏ vẽ hình xe mô tô bên trong."
  },
  {
    "id": 5,
    "question": "Tại nơi đường giao nhau không có đảo an toàn, người điều khiển phương tiện phải nhường đường như thế nào?",
    "options": [
      "A. Nhường đường cho xe đi từ bên phải đến.",
      "B. Nhường đường cho xe đi từ bên trái đến.",
      "C. Xe nào to hơn thì được đi trước."
    ],
    "answer": 0,
    "explanation": "Nơi giao nhau không có vòng xoay (đảo an toàn), nhường đường cho xe đến từ bên phải."
  },
  {
    "id": 6,
    "question": "Tốc độ tối đa cho phép đối với xe mô tô hai bánh trên đường đôi trong khu vực đông dân cư là bao nhiêu?",
    "options": [
      "A. 40 km/h.",
      "B. 50 km/h.",
      "C. 60 km/h."
    ],
    "answer": 2,
    "explanation": "Đường đôi có dải phân cách giữa trong khu đông dân cư, tốc độ tối đa xe mô tô là 60 km/h."
  },
  {
    "id": 7,
    "question": "Tốc độ tối đa cho phép đối với xe mô tô hai bánh trên đường hai chiều (không dải phân cách) trong khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 50 km/h.",
      "B. 60 km/h.",
      "C. 40 km/h."
    ],
    "answer": 0,
    "explanation": "Đường 2 chiều không dải phân cách trong khu đông dân cư, tốc độ tối đa xe mô tô là 50 km/h."
  },
  {
    "id": 8,
    "question": "Người ngồi trên xe mô tô hai bánh phải đội mũ bảo hiểm khi nào?",
    "options": [
      "A. Khi tham gia giao thông trên đường bộ.",
      "B. Chỉ khi đi trên đường cao tốc.",
      "C. Chỉ khi gặp lực lượng chức năng."
    ],
    "answer": 0,
    "explanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách khi tham gia giao thông trên đường bộ."
  },
  {
    "id": 9,
    "question": "Tín hiệu đèn giao thông gồm những màu nào sau đây?",
    "options": [
      "A. Đỏ - Vàng - Xanh.",
      "B. Đỏ - Trắng - Xanh.",
      "C. Đỏ - Cam - Xanh."
    ],
    "answer": 0,
    "explanation": "Tín hiệu đèn giao thông chuẩn quy định là Đỏ - Vàng - Xanh."
  },
  {
    "id": 10,
    "question": "Trường hợp vượt xe, người lái xe mô tô phải xin đường như thế nào?",
    "options": [
      "A. Phát tín hiệu bằng đèn hoặc còi trước khi vượt.",
      "B. Tăng tốc vượt bên phải không xin đường.",
      "C. Bật còi liên tục bất kể ngày đêm."
    ],
    "answer": 0,
    "explanation": "Xe xin vượt phải có báo hiệu bằng đèn hoặc còi trước khi vượt."
  },
  {
    "id": 11,
    "question": "Hành vi sử dụng ô (dù) khi đang điều khiển xe mô tô hai bánh có bị phạt không?",
    "options": [
      "A. Bị xử phạt vi phạm hành chính theo quy định.",
      "B. Không bị phạt nếu trời mưa to.",
      "C. Chỉ bị nhắc nhở."
    ],
    "answer": 0,
    "explanation": "Sử dụng ô dù khi chạy xe mô tô 2 bánh là vi phạm quy định an toàn giao thông."
  },
  {
    "id": 12,
    "question": "Xe mô tô hai bánh được chở tối đa mấy người?",
    "options": [
      "A. 1 người (trừ chở bệnh nhân cấp cứu, trẻ em dưới 14 tuổi, áp giải người vi phạm pháp luật).",
      "B. Chở 2 người thoải mái.",
      "C. Chở 3 người không điều kiện."
    ],
    "answer": 0,
    "explanation": "Quy định chở tối đa 1 người đi kèm, trừ 3 trường hợp đặc biệt được chở 2 người."
  },
  {
    "id": 13,
    "question": "Nồng độ cồn tối đa cho phép trong máu hoặc hơi thở đối với người điều khiển xe mô tô là bao nhiêu?",
    "options": [
      "A. Nghiêm cấm hoàn toàn (Nồng độ cồn phải bằng 0).",
      "B. Dưới 50 mg/100 ml máu.",
      "C. Dưới 0.25 mg/1 lít khí thở."
    ],
    "answer": 0,
    "explanation": "Luật Phòng chống tác hại rượu bia cấm tuyệt đối nồng độ cồn đối với người lái xe."
  },
  {
    "id": 14,
    "question": "Khi gặp xe ưu tiên đang phát tín hiệu còi, đèn ưu tiên, người lái xe mô tô phải làm gì?",
    "options": [
      "A. Giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường.",
      "B. Tăng tốc chạy trước xe ưu tiên.",
      "C. Giữ nguyên tốc độ chạy giữa đường."
    ],
    "answer": 0,
    "explanation": "Bắt buộc nhường đường cho xe ưu tiên đang phát tín hiệu khẩn cấp."
  },
  {
    "id": 15,
    "question": "Biển nào báo hiệu 'Giao nhau với đường ưu tiên'?",
    "options": [
      "A. Biển tam giác ngược (đỉnh hướng xuống) viền đỏ nền vàng.",
      "B. Biển hình thoi màu vàng.",
      "C. Biển hình tròn màu xanh."
    ],
    "answer": 0,
    "explanation": "Biển tam giác ngược đỉnh quay xuống báo hiệu giao nhau với đường ưu tiên."
  },
  {
    "id": 16,
    "question": "Vạch kẻ đường màu vàng đứt nét có ý nghĩa gì?",
    "options": [
      "A. Phân chia hai chiều xe chạy ngược chiều (vạch tim đường), được phép lấn làn đè vạch.",
      "B. Phân chia làn xe cùng chiều.",
      "C. Vạch cấm dừng xe đỗ xe."
    ],
    "answer": 0,
    "explanation": "Vạch vàng đứt nét phân chia 2 chiều xe chạy ngược chiều và cho phép đè vạch khi cần."
  },
  {
    "id": 17,
    "question": "Khi điều khiển xe mô tô qua đoạn đường ngập nước sâu, người lái xe cần thực hiện thao tác kỹ thuật gì?",
    "options": [
      "A. Bật số thấp (số 1 hoặc số 2), giữ đều ga, tránh ngắt côn hoặc giảm ga đột ngột.",
      "B. Đi số cao (số 4) và thả trôi côn.",
      "C. Tăng ga hết cỡ và phanh gấp."
    ],
    "answer": 0,
    "explanation": "Đi số thấp và giữ đều ga giúp ống xả không bị hút nước vào chết máy."
  },
  {
    "id": 18,
    "question": "Biển báo hình tròn, nền xanh thẫm có hình vẽ màu trắng bên trong là loại biển gì?",
    "options": [
      "A. Biển hiệu lệnh.",
      "B. Biển báo cấm.",
      "C. Biển báo nguy hiểm."
    ],
    "answer": 0,
    "explanation": "Biển tròn nền xanh hình vẽ trắng thuộc nhóm biển hiệu lệnh bắt buộc phải chấp hành."
  },
  {
    "id": 19,
    "question": "Khi rẽ trái tại ngã tư, người lái xe mô tô phải nhường đường cho các phương tiện nào?",
    "options": [
      "A. Xe đi ngược chiều đi thẳng và người đi bộ đang qua đường.",
      "B. Xe rẽ phải từ đường nhánh ra.",
      "C. Không cần nhường đường."
    ],
    "answer": 0,
    "explanation": "Khi rẽ trái phải nhường đường cho xe đi ngược chiều đi thẳng và người đi bộ."
  },
  {
    "id": 20,
    "question": "Biển nào chỉ dẫn 'Đường dành cho ô tô'?",
    "options": [
      "A. Biển hình vuông xanh có hình chiếc ô tô con trắng.",
      "B. Biển hình tròn đỏ có gạch chéo hình ô tô.",
      "C. Biển tam giác vàng."
    ],
    "answer": 0,
    "explanation": "Biển hình chữ nhật/vuông xanh vẽ hình ô tô trắng chỉ dẫn đường dành riêng cho ô tô."
  },
  {
    "id": 21,
    "question": "Khi phanh xe mô tô trên đường trơn ướt, kỹ thuật nào an toàn nhất?",
    "options": [
      "A. Sử dụng kết hợp cả phanh trước và phanh sau một cách êm ái, giữ thẳng lái.",
      "B. Phanh gấp phanh trước.",
      "C. Phanh bó cứng bánh sau và ngoặt lái."
    ],
    "answer": 0,
    "explanation": "Sử dụng đồng thời cả 2 phanh êm ái giữ xe cân bằng không bị trượt té."
  },
  {
    "id": 22,
    "question": "Khi đi trong hình số 8 thi thực hành xe máy A1, thí sinh vi phạm lỗi nào sẽ bị trừ 5 điểm?",
    "options": [
      "A. Bánh xe đè vào vạch giới hạn sa hình hoặc chống chân xuống đất 1 lần.",
      "B. Ngã xe hoặc té xe.",
      "C. Đi ngược hình số 8."
    ],
    "answer": 0,
    "explanation": "Mỗi lần đè vạch hoặc chống chân xuống đất trong hình số 8 bị trừ 5 điểm."
  },
  {
    "id": 23,
    "question": "Trường hợp đường hẹp có cọc tiêu hoặc chướng ngại vật, hai xe mô tô đi ngược chiều gặp nhau phải nhường đường như thế nào?",
    "options": [
      "A. Xe có chướng ngại vật phía bên mình phải nhường đường cho xe kia đi trước.",
      "B. Xe không có chướng ngại vật phải nhường đường.",
      "C. Xe đi nhanh hơn được đi trước."
    ],
    "answer": 0,
    "explanation": "Xe bên phía có chướng ngại vật phải dừng lại nhường đường cho xe đối diện đi trước."
  },
  {
    "id": 24,
    "question": "Tại nơi đường giao nhau có tín hiệu đèn xanh, nhưng phía trước đang bị ùn tắc giao thông, người điều khiển xe mô tô phải làm gì?",
    "options": [
      "A. Dừng lại trước vạch dừng, không đi vào nút giao cho đến khi đường phía trước thông thoáng.",
      "B. Tiếp tục chen vào ngã tư làm tắc đường nghiêm trọng hơn.",
      "C. Bật còi và leo lên vỉa hè."
    ],
    "answer": 0,
    "explanation": "Không đi vào nút giao khi phía trước đang ùn tắc dù có đèn xanh."
  },
  {
    "id": 25,
    "question": "Thứ tự ưu tiên xe đi tại ngã tư sa hình theo quy tắc giao thông là gì?",
    "options": [
      "A. Xe vào ngã tư trước -> Xe ưu tiên -> Đường ưu tiên -> Quyền bên phải trống -> Hướng rẽ (Rẽ phải -> Đi thẳng -> Rẽ trái).",
      "B. Xe to đi trước xe nhỏ.",
      "C. Xe rẽ trái đi trước xe đi thẳng."
    ],
    "answer": 0,
    "explanation": "Thứ tự sa hình chuẩn: Xe đã vào giao lộ -> Xe ưu tiên -> Đường ưu tiên -> Bên phải trống -> Rẽ phải -> Đi thẳng -> Rẽ trái."
  }
]
  },

  a: {
    title: "Thi Thử Lý Thuyết Mô Tô Hạng A (Phân Khối Lớn)",
    subtitle: "Dành cho xe mô tô 2 bánh dung tích từ 175cm³ trở lên (25 câu / 19 phút - Đạt 23/25)",
    timeLimit: 19 * 60,
    passScore: 23,
    total: 25,
    questions: [
  {
    "id": 1,
    "question": "Giấy phép lái xe Hạng A được phép điều khiển các loại phương tiện nào sau đây?",
    "options": [
      "A. Xe mô tô hai bánh có dung tích xi-lanh từ 175 cm³ trở lên và toàn bộ xe thuộc hạng A1.",
      "B. Chỉ xe mô tô phân khối lớn trên 400cc.",
      "C. Xe ô tô tải dưới 3.5 tấn."
    ],
    "answer": 0,
    "explanation": "Hạng A lái xe PKL từ 175cc trở lên và bao gồm toàn bộ xe thuộc hạng A1."
  },
  {
    "id": 2,
    "question": "Hệ thống phanh chống bó cứng (ABS) trang bị trên mô tô phân khối lớn có công dụng chính là gì?",
    "options": [
      "A. Tự động điều chỉnh áp suất dầu phanh khi phanh gấp, ngăn bánh xe bị khóa cứng, duy trì khả năng bám đường.",
      "B. Làm cho xe dừng lại tức thì trong khoảng cách 1 mét.",
      "C. Thay thế việc sử dụng phanh chân."
    ],
    "answer": 0,
    "explanation": "Phanh ABS chống bó cứng bánh xe khi phanh đột ngột, giúp người lái kiểm soát tay lái không bị té ngã."
  },
  {
    "id": 3,
    "question": "Khi điều khiển xe mô tô PKL có trọng lượng lớn ôm cua ở tốc độ cao, kỹ thuật rà phanh đúng cách là gì?",
    "options": [
      "A. Giảm tốc độ trước khi vào cua; khi đang ôm cua giữ đều ga, sử dụng phanh sau nhấp rà nhẹ nếu cần.",
      "B. Siết chặt phanh trước đột ngột ngay đỉnh khúc cua.",
      "C. Thả trôi tay ga và bóp hết tay côn khi đang nghiêng xe."
    ],
    "answer": 0,
    "explanation": "Siết phanh trước khi đang nghiêng xe dễ gây khóa bánh trước trượt ngã. Cần rà nhẹ phanh sau để cân bằng xe."
  },
  {
    "id": 4,
    "question": "Kỹ thuật 'Dồn số vắt ga' (Rev-Matching / Downshift Rev Match) trên xe mô tô PKL có tác dụng gì?",
    "options": [
      "A. Vẩy nhẹ tay ga khi trả số thấp giúp đồng tốc độ vòng tua máy với tốc độ hộp số, tránh bị khóa bánh sau.",
      "B. Tăng tốc độ tối đa của xe lên gấp đôi.",
      "C. Tiết kiệm xăng tối đa khi xuống dốc."
    ],
    "answer": 0,
    "explanation": "Rev-matching giúp nạp vòng tua máy tương thích khi về số thấp, chống hiện tượng khựng bánh sau trượt ngã."
  },
  {
    "id": 5,
    "question": "Đồ bảo hộ chuẩn dành cho người điều khiển xe mô tô phân khối lớn trên đường chạy tốc độ cao bao gồm những gì?",
    "options": [
      "A. Mũ bảo hiểm Fullface đạt chuẩn ECE/DOT, áo quần giáp trang bị gù bảo vệ khớp, găng tay da và giầy boots cổ cao.",
      "B. Mũ nửa đầu, áo phông ngắn tay và dép lê.",
      "C. Chỉ cần mũ bảo hiểm là đủ."
    ],
    "answer": 0,
    "explanation": "Đồ giáp bảo hộ đầy đủ giúp bảo vệ tối đa tính mạng và cơ thể khi xảy ra va chạm ở tốc độ cao."
  },
  {
    "id": 6,
    "question": "Trọng tâm của xe mô tô PKL ảnh hưởng như thế nào đến khả năng thăng bằng khi di chuyển tốc độ chậm?",
    "options": [
      "A. Trọng lượng xe nặng làm trọng tâm dễ bị nghiêng đổ nếu đánh lái gấp ở tốc độ chậm; người lái phải giữ lưng thẳng và dùng phanh sau giữ thăng bằng.",
      "B. Xe nặng hơn thì đi chậm càng dễ không bao giờ đổ.",
      "C. Khi đi chậm nên bóp chết phanh trước."
    ],
    "answer": 0,
    "explanation": "Xe PKL có khối lượng nặng, ở tốc độ chậm cần kết hợp phanh sau & tay ga êm ái để giữ cân bằng."
  },
  {
    "id": 7,
    "question": "Khi chạy xe mô tô PKL trên đường cao tốc (nơi quy định cho phép), khoảng cách an toàn với xe phía trước ở tốc độ 100 km/h tối thiểu là bao nhiêu?",
    "options": [
      "A. 70 mét.",
      "B. 35 mét.",
      "C. 10 mét."
    ],
    "answer": 0,
    "explanation": "Ở tốc độ 100 km/h, khoảng cách an toàn tối thiểu theo tiêu chuẩn là 70m."
  },
  {
    "id": 8,
    "question": "Thiết bị 'Trợ lực tay lái' (Steering Damper) trên xe mô tô phân khối lớn có vai trò gì?",
    "options": [
      "A. Dập tắt các dao động rung lắc đột ngột của cổ xe khi xe đi qua gờ giảm tốc hoặc dằn xóc tốc độ cao.",
      "B. Giúp tay lái xoay nhẹ hơn khi dắt xe.",
      "C. Tự động rẽ hướng theo bản đồ GPS."
    ],
    "answer": 0,
    "explanation": "Trợ lực cổ dập tắt dao động vẫy đầu xe ở tốc độ cao, giữ ổn định tay lái."
  },
  {
    "id": 9,
    "question": "Khi điều khiển xe mô tô PKL truyền động bằng xích (sên), độ dãn (độ võng) của xích chuẩn thường là bao nhiêu?",
    "options": [
      "A. Khoảng 20 mm - 30 mm.",
      "B. Khoảng 5 mm - 10 mm (thật căng).",
      "C. Trên 60 mm (rất chùng)."
    ],
    "answer": 0,
    "explanation": "Độ võng chuẩn của xích tải mô tô khoảng 20-30mm. Xích quá căng hay quá chùng đều gây nguy hiểm đứt xích."
  },
  {
    "id": 10,
    "question": "Hiện tượng 'Aquaplaning' (trượt nước) đối với bánh xe mô tô PKL xảy ra khi nào?",
    "options": [
      "A. Lớp nước trên mặt đường nâng lốp xe lên khỏi mặt đường, khiến bánh xe mất hoàn toàn ma sát và khả năng điều khiển.",
      "B. Khi bánh xe đi qua cát khô.",
      "C. Khi phanh xe trên đường nhựa khô ráo."
    ],
    "answer": 0,
    "explanation": "Hiện tượng trượt nước làm bánh xe không bám mặt đường khi chạy tốc độ cao qua vũng nước."
  },
  {
    "id": 11,
    "question": "Nút tắt động cơ khẩn cấp (Engine Kill Switch) màu đỏ trên ghi-đông tay phải xe PKL dùng để làm gì?",
    "options": [
      "A. Ngắt điện hệ thống đánh lửa để tắt máy ngay lập tức trong tình huống ngã xe hoặc kẹt tay ga khẩn cấp.",
      "B. Bật còi báo động chống trộm.",
      "C. Bật đèn sương mù."
    ],
    "answer": 0,
    "explanation": "Nút Engine Kill Switch ngắt điện khẩn cấp tắt máy xe nhanh nhất khi gặp sự cố."
  },
  {
    "id": 12,
    "question": "Khi điều khiển xe mô tô PKL chạy nhóm (Touring đoàn), khoảng cách di chuyển giữa các xe nên sắp xếp theo hình thức nào?",
    "options": [
      "A. Chạy theo đội hình ziczac (so le), giữ khoảng cách an toàn 2 giây giữa các xe so le.",
      "B. Chạy dàn hàng ngang chiếm hết mặt đường.",
      "C. Nối đuôi sát rạt đít xe trước."
    ],
    "answer": 0,
    "explanation": "Đội hình di chuyển so le ziczac giúp mở rộng tầm nhìn và tăng không gian phanh cho từng xe."
  },
  {
    "id": 13,
    "question": "Trước mỗi chuyến đi xa bằng xe PKL, thao tác kiểm tra an toàn 'T-CLOCS' bao gồm kiểm tra những bộ phận nào?",
    "options": [
      "A. Lốp & Bánh xe (Tires), Cáp & Phanh (Controls), Đèn (Lights), Dầu (Oil), Khung gầm & Xích (Chassis), Chân chống (Stands).",
      "B. Chỉ cần kiểm tra mức xăng.",
      "C. Kiểm tra âm thanh loa nhạc."
    ],
    "answer": 0,
    "explanation": "Quy tắc kiểm tra kỹ thuật T-CLOCS đảm bảo an toàn kỹ thuật toàn diện trước chuyến đi."
  },
  {
    "id": 14,
    "question": "Áp suất lốp xe mô tô PKL quá thấp (mềm) sẽ gây ra tác hại gì?",
    "options": [
      "A. Làm xe bị lắc đảo, nặng tay lái, tăng nguy cơ nổ lốp do biến dạng và làm lốp nhanh mòn hai bên mép.",
      "B. Giúp xe chạy nhanh hơn 20 km/h.",
      "C. Không gây ảnh hưởng gì."
    ],
    "answer": 0,
    "explanation": "Áp suất lốp thiếu làm mép lốp biến dạng, tay lái nặng lắc đảo nguy hiểm."
  },
  {
    "id": 15,
    "question": "Khi điều khiển xe PKL vào cua, người lái xe sử dụng kỹ thuật 'Countersteering' (đánh lái ngược) như thế nào?",
    "options": [
      "A. Đẩy nhẹ tay lái bên phải về phía trước để xe nghiêng và rẽ sang bên phải (đẩy bên nào rẽ bên đó).",
      "B. Kéo mạnh tay lái bên phải về phía lòng người.",
      "C. Đứng thẳng lên yên xe."
    ],
    "answer": 0,
    "explanation": "Countersteering ở tốc độ cao: Đẩy tay lái bên nào xe sẽ đè nghiêng rẽ về phía bên đó."
  },
  {
    "id": 16,
    "question": "Hệ thống kiểm soát lực kéo (Traction Control - TCS) trên mô tô PKL hỗ trợ người lái như thế nào?",
    "options": [
      "A. Phát hiện sự chênh lệch tốc độ giữa bánh trước và bánh sau để giảm công suất máy, ngăn bánh sau bị quay trơn trượt.",
      "B. Tự động bóp phanh trước.",
      "C. Giữ cố định ga tự động Cruise Control."
    ],
    "answer": 0,
    "explanation": "TCS chống xoáy bánh sau khi thốc ga đột ngột trên đường trơn trượt."
  },
  {
    "id": 17,
    "question": "Bộ ly hợp chống trượt (Slipper Clutch) trên xe PKL có chức năng chính là gì?",
    "options": [
      "A. Giảm lực ghì động cơ lên bánh sau khi dồn số gấp, ngăn bánh sau bị khóa hoặc dội nẩy.",
      "B. Giúp xe không cần thay nhớt.",
      "C. Tăng lực kéo khi leo dốc đứng."
    ],
    "answer": 0,
    "explanation": "Slipper Clutch giúp việc dồn số gấp không làm ghì khựng nẩy bánh sau."
  },
  {
    "id": 18,
    "question": "Khi di chuyển ban đêm trên đường không có đèn đường, xe PKL chạy tốc độ 80 km/h nên sử dụng đèn như thế nào?",
    "options": [
      "A. Sử dụng đèn chiếu xa (pha) khi đường trống, chủ động hạ đèn chiếu gần (cốt) khi thấy ánh đèn xe đối diện hoặc đi sau xe khác.",
      "B. Giữ liên tục đèn pha chiếu thẳng vào kính xe đi ngược chiều.",
      "C. Tắt toàn bộ đèn để đỡ chói."
    ],
    "answer": 0,
    "explanation": "Dùng đèn pha mở rộng tầm nhìn đường trống, hạ cốt khi có xe đối diện."
  },
  {
    "id": 19,
    "question": "Dung tích dầu phanh (DOT 4/DOT 5.1) trên xe PKL bị biến màu đen hoặc có bọt khí sẽ dẫn đến hậu quả gì?",
    "options": [
      "A. Giảm áp suất thủy lực, làm phanh bị nhẹ (mất phanh hoặc phanh không bám).",
      "B. Làm xe chạy tốn xăng hơn.",
      "C. Phanh ăn hơn bình thường."
    ],
    "answer": 0,
    "explanation": "Dầu phanh thoái hóa bị bọt khí làm phanh hẫng mất lực phanh thủy lực."
  },
  {
    "id": 20,
    "question": "Khi nâng xe PKL bằng chống nâng bánh sau (Paddock Stand), nguyên tắc an toàn là gì?",
    "options": [
      "A. Đặt xe trên bề mặt phẳng cứng, giữ thẳng lái, kê chân chống nghiêng an toàn trước khi gài bẫy nâng.",
      "B. Nâng xe trên mặt đường đất cát dốc nghiêng.",
      "C. Vừa nâng xe vừa nổ máy ga lớn."
    ],
    "answer": 0,
    "explanation": "Nâng xe Paddock Stand phải làm trên mặt phẳng cứng để xe không bị lật nghiêng."
  },
  {
    "id": 21,
    "question": "Hành vi gạt chân chống xe mô tô khi xe đang chạy tốc độ cao nguy hiểm như thế nào?",
    "options": [
      "A. Chân chống quẹt xuống đường có thể móc vào chướng ngại vật làm xe bị lật văng nguy hiểm tính mạng.",
      "B. Không ảnh hưởng gì.",
      "C. Giúp xe chạy đằm hơn."
    ],
    "answer": 0,
    "explanation": "Chân chống chưa gạt lên khi chạy xe nguy cơ va đập mặt đường gây tai nạn nghiêm trọng."
  },
  {
    "id": 22,
    "question": "Người lái xe PKL vượt xe container đường dài cần lưu ý điều gì?",
    "options": [
      "A. Cảnh giác điểm mù của xe container, không đi song song quá lâu, dứt khoát vượt khi đủ điều kiện an toàn.",
      "B. Vượt sát sạt bên hông xe container.",
      "C. Vượt ngay khúc cua hẹp bị che khuất tầm nhìn."
    ],
    "answer": 0,
    "explanation": "Tránh xa điểm mù xe container lớn, vượt nhanh dứt khoát khi tầm nhìn trống."
  },
  {
    "id": 23,
    "question": "Góc quan sát khi đi xe mô tô PKL cần điều chỉnh mắt nhìn như thế nào?",
    "options": [
      "A. Mắt luôn ngẩng cao nhìn xa về phía trước theo hướng xe sắp đi tới, không nhìn chăm chăm vào bánh xe trước.",
      "B. Nhìn chằm chằm vào vạch kẻ đường dưới bánh xe.",
      "C. Nhìn ngoái về phía sau."
    ],
    "answer": 0,
    "explanation": "Mắt nhìn xa định hướng giúp bộ não xử lý quỹ đạo di chuyển chuẩn xác."
  },
  {
    "id": 24,
    "question": "Quy định phạt vi phạm hành chính đối với hành vi nẹt pô (nổ máy gây tiếng ồn lớn trong khu dân cư) là gì?",
    "options": [
      "A. Bị xử phạt tiền và có thể bị tạm giữ phương tiện theo quy định pháp luật.",
      "B. Được khuyến khích nẹt pô đêm.",
      "C. Không bị phạt."
    ],
    "answer": 0,
    "explanation": "Nẹt pô rú ga gây mất an ninh trật tự công cộng bị xử phạt hành chính nghiêm khắc."
  },
  {
    "id": 25,
    "question": "Kỹ thuật phanh khẩn cấp dừng xe ở tốc độ 80 km/h đối với xe PKL trang bị phanh ABS bao gồm các bước nào?",
    "options": [
      "A. Bóp siết dứt khoát phanh trước đồng thời đạp phanh sau, bóp côn ngay trước khi xe dừng hẳn, giữ chặt ghi-đông thẳng lái và hai đùi kẹp chặt bình xăng.",
      "B. Bỏ hai tay khỏi ghi-đông.",
      "C. Ngoặt gấp tay lái sang trái khi đang phanh."
    ],
    "answer": 0,
    "explanation": "Phanh khẩn cấp xe PKL: Siết phanh trước + sau dứt khoát, kẹp đùi vào bình xăng giữ thẳng xe."
  }
]
  },

  b: {
    title: "Thi Thử Lý Thuyết Ô Tô Hạng B (Số Tự Động & Số Sàn)",
    subtitle: "Dành cho xe ô tô chở người đến 9 chỗ, xe tải dưới 3.500kg (30 câu / 20 phút - Đạt 27/30)",
    timeLimit: 20 * 60,
    passScore: 27,
    total: 30,
    questions: [
  {
    "id": 1,
    "question": "Khái niệm 'Hành lang an toàn đường bộ' được hiểu như thế nào là đúng?",
    "options": [
      "A. Là dải đất dọc hai bên đất dành cho đường bộ nhằm bảo đảm an toàn giao thông và bảo vệ công trình đường bộ.",
      "B. Là diện tích lòng đường dành cho xe cơ giới chạy.",
      "C. Là vỉa hè dành cho người đi bộ."
    ],
    "answer": 0,
    "explanation": "Hành lang an toàn đường bộ là dải đất dọc hai bên bảo vệ công trình & an toàn giao thông."
  },
  {
    "id": 2,
    "question": "Khi điều khiển xe ô tô số tự động (Automatic), người lái xe dùng chân như thế nào là đúng?",
    "options": [
      "A. Chỉ sử dụng chân phải để điều khiển cả bàn đạp ga và bàn đạp phanh; chân trái tuyệt đối để trên giá để chân.",
      "B. Chân trái đạp phanh, chân phải đạp ga.",
      "C. Dùng cả hai chân đạp tự do."
    ],
    "answer": 0,
    "explanation": "Lái xe số tự động tuyệt đối chỉ dùng chân phải phụ trách cả ga và phanh để tránh nhầm chân ga."
  },
  {
    "id": 3,
    "question": "Ký hiệu 'P' trên cần số xe ô tô số tự động có ý nghĩa gì?",
    "options": [
      "A. Vị trí đỗ xe (Park) - khóa hộp số khi xe đã dừng hẳn.",
      "B. Vị trí số lùi (Reverse).",
      "C. Vị trí số tiến (Drive)."
    ],
    "answer": 0,
    "explanation": "Số P (Park) dùng khi đỗ xe lâu hoặc dừng hẳn."
  },
  {
    "id": 4,
    "question": "Tác dụng chính của dây an toàn (Seatbelt) trang bị trên xe ô tô là gì?",
    "options": [
      "A. Giữ chặt người ngồi trên ghế không bị văng về phía trước khi xe phanh gấp hoặc va chạm.",
      "B. Giúp người lái xe không bị mỏi lưng.",
      "C. Thay thế cho túi khí."
    ],
    "answer": 0,
    "explanation": "Dây an toàn giữ cơ thể cố định trên ghế, giảm thiểu chấn thương nghiêm trọng khi va chạm."
  },
  {
    "id": 5,
    "question": "Tốc độ tối đa cho phép của xe ô tô con trên đường cao tốc là bao nhiêu?",
    "options": [
      "A. Không vượt quá 120 km/h (hoặc theo biển báo tốc độ quy định trên từng tuyến đường).",
      "B. Tối đa 150 km/h.",
      "C. Chạy tự do không giới hạn."
    ],
    "answer": 0,
    "explanation": "Tốc độ tối đa trên đường cao tốc Việt Nam là 120 km/h trừ khi có biển báo quy định riêng."
  },
  {
    "id": 6,
    "question": "Khi khởi hành xe ô tô số sàn trên đường bằng, thao tác nhả côn (ly hợp) đúng kỹ thuật là gì?",
    "options": [
      "A. Nhả côn từ từ đến điểm bám (xe hơi rung nhẹ) rồi mớm nhẹ tay ga, sau đó nhả hết côn.",
      "B. Nhả côn thật nhanh kịch sàn.",
      "C. Đạp ga hết cỡ rồi mới thả côn."
    ],
    "answer": 0,
    "explanation": "Nhả côn từ từ đến điểm bắt côn rồi tăng ga nhẹ giúp xe đi êm không chết máy."
  },
  {
    "id": 7,
    "question": "Khi đỗ xe ô tô sát lề đường trên đoạn đường dốc xuống, người lái xe nên đánh vô-lăng như thế nào?",
    "options": [
      "A. Đánh vô-lăng về phía lề đường (bên phải) và kéo phanh tay, gài số lùi (hoặc số P).",
      "B. Đánh vô-lăng ra giữa đường.",
      "C. Giữ thẳng vô-lăng và không kéo phanh tay."
    ],
    "answer": 0,
    "explanation": "Đánh lái về phía lề đường dốc xuống để nếu tuột phanh bánh xe sẽ tì vào lề đường dừng lại."
  },
  {
    "id": 8,
    "question": "Biển nào cấm xe ô tô quay đầu?",
    "options": [
      "A. Biển hình tròn viền đỏ có hình mũi tên vòng rẽ trái bị gạch chéo đỏ.",
      "B. Biển hình vuông xanh chỉ dẫn chỗ quay đầu.",
      "C. Biển tam giác vàng."
    ],
    "answer": 0,
    "explanation": "Biển cấm quay đầu là biển tròn viền đỏ có hình mũi tên quay đầu gạch chéo."
  },
  {
    "id": 9,
    "question": "Khi lùi xe ô tô, người lái xe phải quan sát và thao tác như thế nào?",
    "options": [
      "A. Quan sát phía sau qua gương chiếu hậu và camera lùi, bật đèn cảnh báo nguy hiểm/xi-nhan, lùi với tốc độ chậm.",
      "B. Lùi nhanh không cần quan sát gương.",
      "C. Chỉ nhìn về phía trước."
    ],
    "answer": 0,
    "explanation": "Phải quan sát kỹ phía sau và hai bên hông xe, lùi tốc độ chậm an toàn."
  },
  {
    "id": 10,
    "question": "Hệ thống cân bằng điện tử (ESC / ESP) trên ô tô có tác dụng gì?",
    "options": [
      "A. Tự động can thiệp phanh trên từng bánh xe độc lập để ngăn xe bị thừa lái (văng đuôi) hoặc thiếu lái khi vào cua.",
      "B. Tự động tăng tốc độ ô tô.",
      "C. Tiết kiệm nhiên liệu."
    ],
    "answer": 0,
    "explanation": "ESC/ESP can thiệp lực phanh từng bánh để chống văng đuôi mất lái khi ôm cua."
  },
  {
    "id": 11,
    "question": "Tốc độ tối đa cho phép xe ô tô con chạy trong khu vực đông dân cư trên đường đôi là bao nhiêu?",
    "options": [
      "A. 60 km/h.",
      "B. 50 km/h.",
      "C. 40 km/h."
    ],
    "answer": 0,
    "explanation": "Trong khu đông dân cư đường đôi có dải phân cách giữa, xe con được chạy tối đa 60 km/h."
  },
  {
    "id": 12,
    "question": "Công dụng chính của túi khí (Airbag) trang bị trên ô tô con là gì?",
    "options": [
      "A. Nổ bung giảm lực va đập trực tiếp của đầu và ngực người ngồi vào vô-lăng và bảng tablo khi va chạm mạnh.",
      "B. Giúp xe nổi trên mặt nước.",
      "C. Giảm xóc khi qua gờ giảm tốc."
    ],
    "answer": 0,
    "explanation": "Túi khí nổ bung giảm chấn thương vùng đầu & ngực khi xảy ra va chạm nguy hiểm."
  },
  {
    "id": 13,
    "question": "Kỹ thuật khởi hành xe ô tô số sàn ngang dốc (đề-ba dốc) không bị trôi xe là gì?",
    "options": [
      "A. Kéo phanh tay, đạp hết côn gài số 1, nhả côn từ từ đến điểm bám côn, mớm ga vừa đủ rồi hạ phanh tay.",
      "B. Nhả phanh tay trước khi đạp ga.",
      "C. Nhả hết côn đột ngột."
    ],
    "answer": 0,
    "explanation": "Khởi hành ngang dốc dùng phanh tay giữ xe cố định trước khi nhả côn mớm ga."
  },
  {
    "id": 14,
    "question": "Khoảng cách an toàn tối thiểu giữa 2 xe ô tô chạy cùng chiều ở tốc độ 60 - 80 km/h trên đường khô ráo là bao nhiêu?",
    "options": [
      "A. 55 mét.",
      "B. 35 mét.",
      "C. 100 mét."
    ],
    "answer": 0,
    "explanation": "Khoảng cách an toàn tối thiểu ở tốc độ 60-80 km/h theo quy định là 55m."
  },
  {
    "id": 15,
    "question": "Sử dụng phanh tay (phanh đỗ) xe ô tô đúng cách khi nào?",
    "options": [
      "A. Sử dụng khi xe đã dừng hẳn để đỗ xe hoặc giữ xe cố định trên dốc.",
      "B. Giữ phanh tay liên tục khi đang chạy tốc độ cao.",
      "C. Thay thế hoàn toàn cho phanh chân khi xuống dốc."
    ],
    "answer": 0,
    "explanation": "Phanh tay chỉ dùng để đỗ xe cố định khi dừng hẳn hoặc hỗ trợ khởi hành ngang dốc."
  },
  {
    "id": 16,
    "question": "Vạch kẻ đường màu trắng song song đứt nét có ý nghĩa gì?",
    "options": [
      "A. Phân chia các làn xe cùng chiều, người lái xe được phép chuyển làn và đè vạch khi an toàn.",
      "B. Phân chia hai chiều ngược chiều.",
      "C. Vạch cấm chuyển làn."
    ],
    "answer": 0,
    "explanation": "Vạch trắng đứt nét phân chia làn xe cùng chiều và được phép chuyển làn khi cần."
  },
  {
    "id": 17,
    "question": "Khi vượt xe phía trước trên đường 2 chiều, người lái xe ô tô phải thực hiện thao tác gì?",
    "options": [
      "A. Bật đèn tín hiệu xi-nhan rẽ trái, quan sát đường phía trước trống không có xe ngược chiều rồi mới vượt dứt khoát.",
      "B. Bóp còi và vượt ngay khúc cua.",
      "C. Vượt sát bên phải xe trước."
    ],
    "answer": 0,
    "explanation": "Chỉ vượt xe khi đường phía trước hoàn toàn trống không có xe đi ngược chiều."
  },
  {
    "id": 18,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người đến 9 chỗ ngồi (xe con) là bao nhiêu năm?",
    "options": [
      "A. Không quy định niên hạn sử dụng.",
      "B. 20 năm.",
      "C. 25 năm."
    ],
    "answer": 0,
    "explanation": "Theo Luật GTVT, xe ô tô chở người đến 9 chỗ ngồi không áp dụng niên hạn sử dụng."
  },
  {
    "id": 19,
    "question": "Bật đèn sương mù / đèn cảnh báo nguy hiểm (Hazard) trên xe ô tô khi nào?",
    "options": [
      "A. Khi thời tiết sương mù dày đặc, mưa lớn bị hạn chế tầm nhìn hoặc xe gặp sự cố khẩn cấp trên đường.",
      "B. Bật liên tục khi đi trong phố trời nắng.",
      "C. Bật để vượt đèn đỏ."
    ],
    "answer": 0,
    "explanation": "Đèn sương mù/hazard giúp định vị xe trong sương mù, mưa giông nặng hạt hoặc sự cố khẩn cấp."
  },
  {
    "id": 20,
    "question": "Khi xe ô tô bị nổ lốp bánh trước ở tốc độ 80 km/h, kỹ thuật xử lý an toàn nhất là gì?",
    "options": [
      "A. Giữ chặt vô-lăng hai tay hướng thẳng lái, nhả nhẹ tay ga, tuyệt đối không đạp phanh gấp.",
      "B. Đạp kịch sàn phanh chân.",
      "C. Giật mạnh vô-lăng sang trái."
    ],
    "answer": 0,
    "explanation": "Nổ lốp bánh trước: Giữ chặt vô-lăng giữ xe đi thẳng, giảm ga từ từ tránh xe bị lật ngửa."
  },
  {
    "id": 21,
    "question": "Độ sâu rãnh lốp xe ô tô con tối thiểu theo tiêu chuẩn an toàn là bao nhiêu?",
    "options": [
      "A. 1.6 mm.",
      "B. 0.5 mm.",
      "C. 5.0 mm."
    ],
    "answer": 0,
    "explanation": "Độ sâu rãnh lốp tối thiểu an toàn là 1.6mm. Lốp quá mòn dễ gây trượt nước va chạm."
  },
  {
    "id": 22,
    "question": "Biển báo cấm xe ô tô vượt có đặc điểm nhận diện như thế nào?",
    "options": [
      "A. Biển tròn viền đỏ, vẽ hình hai chiếc ô tô (chiếc ô tô con bên trái màu đỏ, chiếc bên phải màu đen).",
      "B. Biển hình thoi màu vàng.",
      "C. Biển tam giác viền đỏ."
    ],
    "answer": 0,
    "explanation": "Biển cấm ô tô vượt vẽ hình ô tô đỏ sóng đôi với ô tô đen."
  },
  {
    "id": 23,
    "question": "Hệ thống ga tự động (Cruise Control) nên sử dụng trong điều kiện đường xá nào?",
    "options": [
      "A. Trên đường cao tốc hoặc đường quốc lộ thông thoáng, lưu lượng giao thông thưa thớt.",
      "B. Trong đô thị ùn tắc giờ cao điểm.",
      "C. Trên đường đèo trơn trượt mưa lớn."
    ],
    "answer": 0,
    "explanation": "Cruise Control duy trì tốc độ tự động nên dùng trên cao tốc đường thưa thớt."
  },
  {
    "id": 24,
    "question": "Quy tắc nhường đường tại vòng xoay (đảo an toàn) có biển báo hiệu là gì?",
    "options": [
      "A. Nhường đường cho xe đi từ bên trái đến.",
      "B. Nhường đường cho xe đi từ bên phải đến.",
      "C. Xe nào lớn hơn đi trước."
    ],
    "answer": 0,
    "explanation": "Tại vòng xoay có biển báo hiệu nhường đường cho xe đi từ bên trái."
  },
  {
    "id": 25,
    "question": "Ý nghĩa vị trí số 'D' (Drive) trên hộp số tự động là gì?",
    "options": [
      "A. Vị trí số tiến thông thường khi xe vận hành trên đường.",
      "B. Số lùi xe.",
      "C. Số mo trung gian."
    ],
    "answer": 0,
    "explanation": "Số D (Drive) là vị trí gài số tiến tự động khi lái xe."
  },
  {
    "id": 26,
    "question": "Biển báo 'Cấm dừng xe và đỗ xe' có đặc điểm gì?",
    "options": [
      "A. Biển hình tròn nền xanh viền đỏ có 2 vạch chéo màu đỏ.",
      "B. Biển hình tròn nền xanh viền đỏ có 1 vạch chéo đỏ.",
      "C. Biển chữ nhật xanh."
    ],
    "answer": 0,
    "explanation": "Biển tròn xanh viền đỏ có 2 gạch chéo chéo đỏ là cấm cả dừng và đỗ xe."
  },
  {
    "id": 27,
    "question": "Khi ô tô bị ngập nước chết máy (nguy cơ thủy kích), người lái xe phải làm gì?",
    "options": [
      "A. Tuyệt đối không bấm đề khởi động lại máy; gọi xe cứu hộ kéo xe về gara kiểm tra.",
      "B. Đạp ga hết cỡ để thoát ngập.",
      "C. Đẩy xe và đề nổ."
    ],
    "answer": 0,
    "explanation": "Cố khởi động khi nước vào xilanh sẽ gãy tay biên cong trục động cơ (thủy kích)."
  },
  {
    "id": 28,
    "question": "Kiểm tra mức dầu động cơ ô tô bằng que thăm dầu (Dipstick) đúng thời điểm nào?",
    "options": [
      "A. Khi động cơ đã tắt máy và đỗ trên mặt đường bằng phẳng (chờ động cơ nguội bớt).",
      "B. Khi xe đang chạy tốc độ 100 km/h.",
      "C. Khi động cơ đang nổ máy ga lớn."
    ],
    "answer": 0,
    "explanation": "Kiểm tra dầu máy khi đỗ đường phẳng và động cơ đã tắt để mức dầu hiển thị chuẩn xác."
  },
  {
    "id": 29,
    "question": "Mở cửa xe ô tô sát lề đường an toàn theo quy tắc 'Dutch Reach' là như thế nào?",
    "options": [
      "A. Dùng tay xa cửa (tay phải) để quay người quan sát kính chiếu hậu và điểm mù phía sau trước khi mở hé cửa.",
      "B. Đẩy cửa ra thật nhanh.",
      "C. Nhắm mắt mở cửa."
    ],
    "answer": 0,
    "explanation": "Dùng tay xa cửa bắt buộc cơ thể xoay nhìn về phía sau tránh va chạm xe máy đi tới."
  },
  {
    "id": 30,
    "question": "Thứ tự ưu tiên qua giao lộ sa hình ngã tư không có đèn tín hiệu là gì?",
    "options": [
      "A. Xe đã vào giao lộ -> Xe ưu tiên -> Đường ưu tiên -> Xe bên phải không vướng -> Hướng rẽ.",
      "B. Xe tải đi trước xe con.",
      "C. Xe đi thẳng nhường xe rẽ trái."
    ],
    "answer": 0,
    "explanation": "Thứ tự sa hình chuẩn: Xe vào giao lộ trước -> Xe ưu tiên -> Đường ưu tiên -> Nhường bên phải -> Hướng rẽ."
  }
]
  },

  c1: {
    title: "Thi Thử Lý Thuyết Ô Tô Hạng C1 (Xe Tải 3.5t - 7.5t)",
    subtitle: "Dành cho xe ô tô tải có khối lượng chuyên chở từ 3.500kg đến 7.500kg (35 câu / 22 phút - Đạt 32/35)",
    timeLimit: 22 * 60,
    passScore: 32,
    total: 35,
    questions: [
  {
    "id": 1,
    "question": "Giấy phép lái xe Hạng C1 được phép điều khiển loại xe ô tô tải nào?",
    "options": [
      "A. Xe ô tô tải có khối lượng chuyên chở theo thiết kế từ 3.500 kg đến 7.500 kg.",
      "B. Xe tải container hạng nặng 30 tấn.",
      "C. Xe khách 45 chỗ."
    ],
    "answer": 0,
    "explanation": "Hạng C1 quy định riêng cho phân khúc xe tải trung từ 3.500 kg đến 7.500 kg."
  },
  {
    "id": 2,
    "question": "Nguyên tắc xếp dỡ phân bổ hàng hóa trên xe tải C1 an toàn là gì?",
    "options": [
      "A. Xếp hàng nặng ở dưới sát sàn thùng xe và cân đối giữa hai bên sàn, cố định dây chằng chắc chắn.",
      "B. Xếp hết hàng nặng lên vị trí cao nhất.",
      "C. Dồn toàn bộ hàng về một bên."
    ],
    "answer": 0,
    "explanation": "Hàng nặng xếp dưới sàn hạ thấp trọng tâm xe, tránh lật xe khi ôm cua."
  },
  {
    "id": 3,
    "question": "Vị trí điểm mù (Dead Zone) nguy hiểm nhất của xe tải C1 nằm ở đâu?",
    "options": [
      "A. Ngay phía sau thùng xe và bên hông cửa phụ dưới gương chiếu hậu.",
      "B. Ngay trên nóc cabin xe.",
      "C. Giữa mặt kính chắn gió."
    ],
    "answer": 0,
    "explanation": "Điểm mù phía sau thùng xe kín và góc bên phụ rất rộng, nguy cơ va chạm cao."
  },
  {
    "id": 4,
    "question": "Khi điều khiển xe tải C1 xuống dốc dài, người lái xe sử dụng kỹ thuật phanh như thế nào?",
    "options": [
      "A. Về số thấp (sử dụng phanh động cơ hãm xe), nhấp rà phanh chân khi cần thiết; tuyệt đối không ngắt côn thả trôi.",
      "B. Về số N thả trôi dốc.",
      "C. Tắt máy xe tải để tiết kiệm dầu."
    ],
    "answer": 0,
    "explanation": "Xuống dốc dài đi số thấp dùng phanh động cơ hãm tốc, tránh cháy má phanh."
  },
  {
    "id": 5,
    "question": "Niên hạn sử dụng đối với xe ô tô tải Hạng C1 là bao nhiêu năm?",
    "options": [
      "A. Không quá 25 năm kể từ năm sản xuất.",
      "B. Không quá 20 năm.",
      "C. Không quy định niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe ô tô tải có niên hạn sử dụng tối đa là 25 năm."
  },
  {
    "id": 6,
    "question": "Thời gian lái xe liên tục tối đa của người điều khiển xe tải C1 là bao nhiêu giờ?",
    "options": [
      "A. Không quá 4 giờ liên tục.",
      "B. Không quá 8 giờ liên tục.",
      "C. Không quá 12 giờ liên tục."
    ],
    "answer": 0,
    "explanation": "Người lái xe tải không được lái xe liên tục quá 4 giờ để chống mệt mỏi gây tai nạn."
  },
  {
    "id": 7,
    "question": "Tổng thời gian làm việc lái xe trong một ngày của tài xế xe tải C1 không được vượt quá bao nhiêu giờ?",
    "options": [
      "A. Không quá 10 giờ trong một ngày.",
      "B. Không quá 14 giờ trong một ngày.",
      "C. Không quá 18 giờ."
    ],
    "answer": 0,
    "explanation": "Tổng thời gian lái xe của 1 người trong ngày tối đa không quá 10 giờ."
  },
  {
    "id": 8,
    "question": "Giới hạn chiều cao xếp hàng hóa trên xe tải C1 thùng hở là bao nhiêu?",
    "options": [
      "A. Không vượt quá chiều cao quy định ghi trong Giấy chứng nhận kiểm định an toàn kỹ thuật.",
      "B. Thích chất cao bao nhiêu cũng được.",
      "C. Cao vượt quá 6 mét."
    ],
    "answer": 0,
    "explanation": "Chiều cao xếp hàng phải tuân thủ đúng quy định kiểm định an toàn của xe."
  },
  {
    "id": 9,
    "question": "Người lái xe tải C1 có bắt buộc phải thắt dây an toàn khi xe đang vận hành không?",
    "options": [
      "A. Bắt buộc thắt dây an toàn tại mọi vị trí ghế trang bị dây an toàn.",
      "B. Không cần thắt dây an toàn.",
      "C. Chỉ thắt khi thấy công an."
    ],
    "answer": 0,
    "explanation": "Luật bắt buộc người lái xe và người ngồi trên xe tải phải thắt dây an toàn."
  },
  {
    "id": 10,
    "question": "Hệ thống phanh hơi khí nén trang bị trên xe tải C1 có ưu điểm gì so với phanh thủy lực?",
    "options": [
      "A. Cho lực phanh lớn, hoạt động tin cậy đối với xe có tải trọng trung bình và lớn.",
      "B. Làm xe chạy tốn xăng.",
      "C. Không cần dầu phanh."
    ],
    "answer": 0,
    "explanation": "Phanh hơi khí nén tạo lực phanh rất lớn đáp ứng tải trọng xe tải."
  },
  {
    "id": 11,
    "question": "Biển báo P.106b 'Cấm xe ô tô tải' có ý nghĩa như thế nào?",
    "options": [
      "A. Cấm các loại xe ô tô tải có khối lượng chuyên chở lớn hơn trị số ghi trên biển báo đi vào.",
      "B. Cấm tất cả xe ô tô con.",
      "C. Cấm xe máy."
    ],
    "answer": 0,
    "explanation": "Biển P.106b cấm xe tải có tải trọng vượt quá trị số ghi trên biển."
  },
  {
    "id": 12,
    "question": "Kiểm tra dây chằng tăng bo hàng hóa (Ratchet Straps) trước khi khởi hành xe tải C1 nhằm mục đích gì?",
    "options": [
      "A. Đảm bảo hàng hóa được chèn buộc cố định, không bị xô lệch trượt rơi vãi xuống đường.",
      "B. Trang trí cho đẹp thùng xe.",
      "C. Tăng trọng lượng xe."
    ],
    "answer": 0,
    "explanation": "Chằng buộc hàng hóa chắc chắn chống xô lệch rơi vãi gây tai nạn nghiêm trọng."
  },
  {
    "id": 13,
    "question": "Thao tác quay đầu xe tải C1 trên đường hẹp phố đông như thế nào là an toàn?",
    "options": [
      "A. Chọn vị trí giao lộ rộng hoặc nơi có biển cho phép quay đầu, tiến lùi chậm có quan sát người phụ lái.",
      "B. Quay đầu ngay giữa cầu hẹp.",
      "C. Cướp làn rẽ gấp."
    ],
    "answer": 0,
    "explanation": "Chỉ quay đầu xe tại nơi cho phép và có tầm quan sát rộng an toàn."
  },
  {
    "id": 14,
    "question": "Khoảng cách an toàn tối thiểu xe tải C1 chạy tốc độ 80 - 100 km/h trên đường cao tốc là bao nhiêu?",
    "options": [
      "A. 70 mét.",
      "B. 35 mét.",
      "C. 20 mét."
    ],
    "answer": 0,
    "explanation": "Tốc độ 80-100 km/h quy định khoảng cách an toàn tối thiểu là 70m."
  },
  {
    "id": 15,
    "question": "Tốc độ tối đa xe tải C1 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 80 km/h.",
      "B. 60 km/h.",
      "C. 100 km/h."
    ],
    "answer": 0,
    "explanation": "Xe tải C1 ngoài khu đông dân cư đường đôi chạy tối đa 80 km/h."
  },
  {
    "id": 16,
    "question": "Vạch kẻ đường màu vàng nét liền đơn (tim đường) có ý nghĩa gì đối với tài xế xe tải?",
    "options": [
      "A. Phân chia 2 chiều xe chạy ngược chiều; xe tuyệt đối không được lấn làn đè lên vạch.",
      "B. Được đè vạch vượt xe.",
      "C. Vạch làn xe buýt."
    ],
    "answer": 0,
    "explanation": "Vạch vàng nét liền cấm tuyệt đối lấn làn đè vạch."
  },
  {
    "id": 17,
    "question": "Tác dụng của van xả nước xả cặn đáy bình chứa khí nén xe tải C1 là gì?",
    "options": [
      "A. Loại bỏ hơi nước ngưng tụ và dầu cặn trong bình khí nén, giữ áp suất khí sạch bảo vệ phanh.",
      "B. Đổ nước làm mát máy.",
      "C. Thay nhớt."
    ],
    "answer": 0,
    "explanation": "Xả đọng bình khí nén hàng ngày ngăn nước làm gỉ sét van phanh."
  },
  {
    "id": 18,
    "question": "Khi xe tải C1 bị sự cố hỏng hóc trên đường cao tốc ban đêm, tài xế phải làm gì?",
    "options": [
      "A. Bật đèn khẩn cấp Hazard, đưa xe vào làn dừng khẩn cấp, đặt cọc tiêu/biển tam giác phản quang phía sau 150m.",
      "B. Dừng xe giữa đường tắt đèn đi ngủ.",
      "C. Đẩy xe chạy lùi."
    ],
    "answer": 0,
    "explanation": "Bật hazard và đặt biển cảnh báo xa 150m để xe sau kịp phát hiện."
  },
  {
    "id": 19,
    "question": "Thao tác chuyển làn xe tải C1 trên đường nhiều làn xe đúng quy định là gì?",
    "options": [
      "A. Quan sát gương chiếu hậu, bật xi-nhan báo hiệu trước, chỉ chuyển từng làn khi đảm bảo an toàn.",
      "B. Tạt đầu xe khác chuyển làn liền lúc 3 làn.",
      "C. Không cần bật xi-nhan."
    ],
    "answer": 0,
    "explanation": "Chuyển làn phải có tín hiệu báo trước và quan sát an toàn."
  },
  {
    "id": 20,
    "question": "Chu kỳ kiểm định an toàn kỹ thuật định kỳ xe ô tô tải C1 sản xuất trên 7 năm là bao nhiêu?",
    "options": [
      "A. 6 tháng một lần.",
      "B. 12 tháng một lần.",
      "C. 24 tháng một lần."
    ],
    "answer": 0,
    "explanation": "Xe tải sản xuất trên 7 năm áp dụng chu kỳ kiểm định 6 tháng/lần."
  },
  {
    "id": 21,
    "question": "Đèn báo áp suất dầu nhớt động cơ trên bảng tablo xe tải sáng đỏ khi đang chạy, tài xế xử lý ra sao?",
    "options": [
      "A. Tắt máy dừng xe ngay sát lề đường an toàn, kiểm tra mức dầu động cơ.",
      "B. Tiếp tục chạy 100km nữa.",
      "C. Tăng tốc ga lớn."
    ],
    "answer": 0,
    "explanation": "Đèn báo áp suất dầu nhớt đỏ báo hiệu thiếu dầu bôi trơn nguy cơ cháy lột dơ-le máy."
  },
  {
    "id": 22,
    "question": "Xe tải C1 chở hàng quá chiều dài thùng xe phía sau vượt quá 10% phải làm gì?",
    "options": [
      "A. Ban ngày treo cờ đỏ kích thước 30x40cm, ban đêm treo đèn đỏ báo hiệu ở điểm tận cùng hàng hóa.",
      "B. Không cần treo gì.",
      "C. Treo vải đen."
    ],
    "answer": 0,
    "explanation": "Chở hàng nhô ra phía sau bắt buộc phải có cờ đỏ ban ngày hoặc đèn đỏ ban đêm."
  },
  {
    "id": 23,
    "question": "Biển báo hình tròn viền đỏ nền trắng có vẽ hình xe tải ghi '5t' có ý nghĩa gì?",
    "options": [
      "A. Cấm xe ô tô tải có khối lượng chuyên chở vượt quá 5 tấn đi vào.",
      "B. Cấm xe nặng trên 50 tấn.",
      "C. Chỉ dẫn đường cho xe 5 tấn."
    ],
    "answer": 0,
    "explanation": "Biển cấm xe tải theo trị số tải trọng ghi trên biển."
  },
  {
    "id": 24,
    "question": "Khi điều khiển xe tải C1 đi qua đường ngầm tràn ngập nước chảy xiết, tài xế xử lý thế nào?",
    "options": [
      "A. Dừng lại kiểm tra mức nước; nếu nước chảy xiết ngập quá bánh xe tuyệt đối không cho xe qua.",
      "B. Tăng ga chạy đại qua.",
      "C. Đi lùi."
    ],
    "answer": 0,
    "explanation": "Nước ngập xiết nguy cơ cuốn trôi xe tải, tuyệt đối không qua khi chưa an toàn."
  },
  {
    "id": 25,
    "question": "Thao tác lùi xe tải C1 vào kho hàng có người phụ lơ xe ra hiệu là như thế nào?",
    "options": [
      "A. Quan sát phụ xe qua gương chiếu hậu, giữ tốc độ lùi chậm và làm theo đúng tín hiệu của phụ xe.",
      "B. Không cần nhìn phụ xe.",
      "C. Đạp ga lùi nhanh."
    ],
    "answer": 0,
    "explanation": "Lùi xe tải lớn cần sự phối hợp quan sát chặt chẽ với người phụ xe."
  },
  {
    "id": 26,
    "question": "Tốc độ xe tải C1 khi đi qua khu vực trường học hoặc nơi có đông trẻ em là bao nhiêu?",
    "options": [
      "A. Giảm tốc độ xuống mức an toàn, chú ý quan sát nhường đường cho người đi bộ.",
      "B. Chạy 80 km/h.",
      "C. Bật còi thật to."
    ],
    "answer": 0,
    "explanation": "Giảm tốc độ chú ý quan sát tuyệt đối an toàn khu vực trường học."
  },
  {
    "id": 27,
    "question": "Khi bánh sau xe tải C1 bị trượt quay trơn trên đường bùn lầy, tài xế thao tác ra sao?",
    "options": [
      "A. Gài khóa vi-sai (nếu có), sử dụng số thấp nhấp nhẹ ga để xe vượt qua lầy.",
      "B. Đạp hết ga cho bánh xoáy tít.",
      "C. Kéo phanh tay kịch sàn."
    ],
    "answer": 0,
    "explanation": "Khóa vi-sai truyền đều lực kéo hai bánh sau giúp xe vượt lầy."
  },
  {
    "id": 28,
    "question": "Trách nhiệm pháp lý khi xe tải C1 chở hàng quá tải tải trọng thiết kế thuộc về ai?",
    "options": [
      "A. Cả chủ xe và người điều khiển xe tải (tài xế).",
      "B. Chỉ phạt người làm hàng.",
      "C. Không ai bị phạt."
    ],
    "answer": 0,
    "explanation": "Chở hàng quá tải xử phạt nghiêm cả tài xế trực tiếp và chủ phương tiện."
  },
  {
    "id": 29,
    "question": "Sử dụng còi hơi xe tải trong khu vực đô thị đông dân cư bị cấm vào khung giờ nào?",
    "options": [
      "A. Từ 22 giờ đêm đến 5 giờ sáng ngày hôm sau.",
      "B. Từ 12h trưa đến 13h chiều.",
      "C. Cấm cả ngày."
    ],
    "answer": 0,
    "explanation": "Luật nghiêm cấm sử dụng còi từ 22h đêm đến 5h sáng trong đô thị."
  },
  {
    "id": 30,
    "question": "Kiểm tra áp suất lốp xe tải C1 chuẩn xác bằng công cụ gì?",
    "options": [
      "A. Sử dụng đồng hồ đo áp suất lốp chuyên dụng khi lốp đang nguội.",
      "B. Dùng chân đá nhẹ vào lốp.",
      "C. Nhìn bằng mắt thường."
    ],
    "answer": 0,
    "explanation": "Dùng đồng hồ đo áp suất chuẩn xác khi lốp nguội."
  },
  {
    "id": 31,
    "question": "Đèn báo lỗi hệ thống phanh ABS xe tải sáng vàng khi xe đang chạy báo hiệu điều gì?",
    "options": [
      "A. Hệ thống phanh ABS gặp sự cố khuyết tật, phanh thường vẫn hoạt động nhưng cần đưa xe đi kiểm tra.",
      "B. Phanh bị hỏng mất hoàn toàn.",
      "C. Phanh hoạt động tốt."
    ],
    "answer": 0,
    "explanation": "Đèn ABS báo lỗi hệ thống hỗ trợ chống bó cứng bị ngắt tác dụng."
  },
  {
    "id": 32,
    "question": "Trường hợp xe tải C1 đang chạy gặp xe phía sau xin vượt, tài xế nên làm gì?",
    "options": [
      "A. Nếu đủ điều kiện an toàn, giảm tốc độ và đi sát về bên phải làn đường báo hiệu cho xe sau vượt.",
      "B. Tăng tốc không cho vượt.",
      "C. Tạt sang trái."
    ],
    "answer": 0,
    "explanation": "Giảm tốc độ nhường đường an toàn khi có xe sau xin vượt."
  },
  {
    "id": 33,
    "question": "Khoảng cách xe tải C1 giữ an toàn khi dừng đỗ sau xe khác trên đường dốc là bao nhiêu?",
    "options": [
      "A. Khoảng cách an toàn tối thiểu từ 3 - 5 mét.",
      "B. Đỗ sát rạt cách 10cm.",
      "C. Đỗ cách 100m."
    ],
    "answer": 0,
    "explanation": "Giữ khoảng cách dừng đỗ ngang dốc tránh xe trước trôi tuột chạm vào."
  },
  {
    "id": 34,
    "question": "Thiết bị giám sát hành trình (hộp đen GPS) xe tải C1 bắt buộc phải ghi nhận dữ liệu gì?",
    "options": [
      "A. Hành trình xe chạy, tốc độ vận hành, thời gian lái xe liên tục của tài xế.",
      "B. Âm thanh trò chuyện trong xe.",
      "C. Giá tiền cước hàng."
    ],
    "answer": 0,
    "explanation": "GPS ghi nhận hành trình, tốc độ và thời gian lái xe để kiểm soát an toàn."
  },
  {
    "id": 35,
    "question": "Sa hình ngã tư có biển báo nguy hiểm xe tải C1 xử lý quyền ưu tiên như thế nào?",
    "options": [
      "A. Tuân thủ theo hiệu lệnh biển báo, nhường đường cho xe trên đường ưu tiên.",
      "B. Xe tải C1 luôn đi trước.",
      "C. Xe nào mạnh ga đi trước."
    ],
    "answer": 0,
    "explanation": "Bắt buộc chấp hành đúng hệ thống biển báo hiệu đường bộ."
  }
]
  },

  c: {
    title: "Thi Thử Lý Thuyết Ô Tô Hạng C (Xe Tải Nặng trên 7.5t)",
    subtitle: "Dành cho xe ô tô tải, xe chuyên dùng tải trọng lớn trên 7.500kg (40 câu / 24 phút - Đạt 36/40)",
    timeLimit: 24 * 60,
    passScore: 36,
    total: 40,
    questions: [
  {
    "id": 1,
    "question": "Giấy phép lái xe Hạng C được phép điều khiển loại xe ô tô tải nào?",
    "options": [
      "A. Xe ô tô tải, xe chuyên dùng có khối lượng chuyên chở thiết kế trên 7.500 kg và toàn bộ xe thuộc hạng B, C1.",
      "B. Xe đầu kéo container.",
      "C. Xe khách 45 chỗ."
    ],
    "answer": 0,
    "explanation": "Hạng C lái xe tải nặng có trọng tải chuyên chở trên 7.500 kg."
  },
  {
    "id": 2,
    "question": "Áp suất hơi khí nén trong bình chứa của xe tải nặng Hạng C phải đạt tối thiểu bao nhiêu bar trước khi xe lăn bánh?",
    "options": [
      "A. Từ 6.0 bar đến 8.0 bar (kim đồng hồ chỉ dải xanh).",
      "B. Dưới 2.0 bar.",
      "C. Trên 20 bar."
    ],
    "answer": 0,
    "explanation": "Áp suất khí nén phanh phải đạt từ 6-8 bar mới đủ lực phanh xả lốc-kê xe chạy."
  },
  {
    "id": 3,
    "question": "Khi điều khiển xe tải nặng Hạng C qua cầu hẹp có biển hạn chế tải trọng 10 tấn, tài xế phải kiểm tra điều gì?",
    "options": [
      "A. Kiểm tra tổng khối lượng bản thân xe cộng hàng hóa trên xe không vượt quá 10 tấn.",
      "B. Chạy thật nhanh qua cầu.",
      "C. Cho xe đi lùi."
    ],
    "answer": 0,
    "explanation": "Tổng trọng lượng thực tế (xe + hàng) không được vượt quá tải trọng biển giới hạn của cầu."
  },
  {
    "id": 4,
    "question": "Kiểm tra hệ thống lốp đôi (lốp kép) phía sau xe tải nặng Hạng C nhằm mục đích gì?",
    "options": [
      "A. Phát hiện lốp bị xì hơi, đá kẹp giữa 2 kẽ lốp gây nổ lốp, bảo đảm áp suất 2 lốp cân bằng.",
      "B. Giúp xe đỡ tốn dầu.",
      "C. Không cần thiết."
    ],
    "answer": 0,
    "explanation": "Loại bỏ đá dắt kẽ lốp đôi chống nổ lốp nguy hiểm trên đường."
  },
  {
    "id": 5,
    "question": "Thao tác lùi xe tải nặng Hạng C vào kho bãi hẹp an toàn nhất là gì?",
    "options": [
      "A. Bật đèn Hazard, lùi chậm quan sát gương chiếu hậu 2 bên và kết hợp sự hướng dẫn của phụ xe.",
      "B. Lùi nhanh không quan sát.",
      "C. Nhắm mắt đạp ga."
    ],
    "answer": 0,
    "explanation": "Lùi xe tải nặng cần lùi tốc độ chậm có người phụ xi-nhan hướng dẫn."
  },
  {
    "id": 6,
    "question": "Quy định đối với xe tải nặng Hạng C chở hàng nguy hiểm (xăng dầu, hóa chất cháy nổ) là gì?",
    "options": [
      "A. Bắt buộc có Giấy phép vận chuyển hàng nguy hiểm, dán biểu trưng nguy hiểm và trang bị bình chữa cháy.",
      "B. Chở bình thường không cần giấy phép.",
      "C. Được chạy quá tốc độ."
    ],
    "answer": 0,
    "explanation": "Hàng nguy hiểm phải tuân thủ nghiêm ngặt quy định phòng chống cháy nổ."
  },
  {
    "id": 7,
    "question": "Niên hạn sử dụng tối đa của xe ô tô tải nặng Hạng C là bao nhiêu năm?",
    "options": [
      "A. 25 năm.",
      "B. 20 năm.",
      "C. 15 năm."
    ],
    "answer": 0,
    "explanation": "Xe ô tô tải có niên hạn sử dụng tối đa 25 năm."
  },
  {
    "id": 8,
    "question": "Thời gian lái xe liên tục tối đa của tài xế xe tải nặng Hạng C không được quá bao nhiêu giờ?",
    "options": [
      "A. Không quá 4 giờ liên tục.",
      "B. Không quá 8 giờ liên tục.",
      "C. Không quá 10 giờ liên tục."
    ],
    "answer": 0,
    "explanation": "Bắt buộc nghỉ ngơi sau tối đa 4 giờ lái xe liên tục."
  },
  {
    "id": 9,
    "question": "Tổng thời gian lái xe trong một ngày của người lái xe tải nặng Hạng C không quá bao nhiêu giờ?",
    "options": [
      "A. Không quá 10 giờ.",
      "B. Không quá 14 giờ.",
      "C. Không quá 16 giờ."
    ],
    "answer": 0,
    "explanation": "Tối đa không quá 10 giờ lái xe trong 1 ngày."
  },
  {
    "id": 10,
    "question": "Vùng điểm mù phía sau thùng xe tải nặng Hạng C dài 9-10 mét kéo dài bao xa?",
    "options": [
      "A. Kéo dài từ 15 đến 20 mét phía sau đuôi xe.",
      "B. Chỉ 1 mét.",
      "C. Không có điểm mù."
    ],
    "answer": 0,
    "explanation": "Điểm mù đít xe tải nặng kéo dài đến 20m, xe sau đi sát rất nguy hiểm."
  },
  {
    "id": 11,
    "question": "Tác dụng của phanh cúp-pô (Exhaust Brake / Phanh khí xả) trên xe tải nặng Hạng C là gì?",
    "options": [
      "A. Dán kín đường ống xả giảm công suất máy hãm tốc độ xe khi xuống dốc, giảm tải cho phanh chính.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Thay phanh đỗ."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô hỗ trợ hãm tốc độ đèo dốc cực kỳ hiệu quả."
  },
  {
    "id": 12,
    "question": "Giới hạn tải trọng trục xe (Axle Load) là gì?",
    "options": [
      "A. Phần khối lượng toàn bộ xe phân bổ lên từng trục xe (trục đơn, trục đôi) không được vượt quá quy định đường bộ.",
      "B. Chiều dài xe.",
      "C. Tốc độ xe."
    ],
    "answer": 0,
    "explanation": "Tải trọng trục xe bảo vệ kết cấu mặt cầu đường không bị hư hỏng."
  },
  {
    "id": 13,
    "question": "Xe tải nặng chở hàng siêu trường siêu trọng là loại hàng hóa nào?",
    "options": [
      "A. Hàng hóa không thể tháo rời, có kích thước hoặc trọng lượng vượt quá quy chuẩn giới hạn đường bộ.",
      "B. Hàng chở trong bao tải.",
      "C. Hàng rau củ."
    ],
    "answer": 0,
    "explanation": "Hàng siêu trường siêu trọng là hàng nguyên khối không tháo rời vượt giới hạn xe."
  },
  {
    "id": 14,
    "question": "Bật đèn cảnh báo khẩn cấp Hazard khi đỗ xe tải nặng hỏng hóc giữa đường nhằm mục đích gì?",
    "options": [
      "A. Báo hiệu cho các phương tiện khác biết xe đang gặp sự cố để chủ động né tránh từ xa.",
      "B. Đèn trang trí.",
      "C. Bật cho đỡ tốn bình."
    ],
    "answer": 0,
    "explanation": "Đèn hazard báo sự cố khẩn cấp giúp các xe khác phát hiện dừng tránh."
  },
  {
    "id": 15,
    "question": "Tốc độ tối đa xe tải nặng trên 3.5t chạy ngoài khu đông dân cư đường đôi là bao nhiêu?",
    "options": [
      "A. 70 km/h.",
      "B. 90 km/h.",
      "C. 50 km/h."
    ],
    "answer": 0,
    "explanation": "Xe tải nặng ngoài khu đông dân cư đường đôi chạy tối đa 70 km/h."
  },
  {
    "id": 16,
    "question": "Hành vi trốn tránh không vào trạm kiểm tra tải trọng xe bị xử lý như thế nào?",
    "options": [
      "A. Bị phạt tiền nặng đối với tài xế và chủ xe, tước quyền sử dụng GPLX theo quy định.",
      "B. Không bị phạt.",
      "C. Nhắc nhở."
    ],
    "answer": 0,
    "explanation": "Trốn trạm cân tải trọng bị xử phạt vi phạm hành chính rất nặng."
  },
  {
    "id": 17,
    "question": "Thao tác kiểm tra chốt bửng thùng xe tải nặng Hạng C trước khi chạy là gì?",
    "options": [
      "A. Đảm bảo tất cả các chốt gài bửng hông và bửng sau đã được khóa chặt an toàn.",
      "B. Để bửng mở bung tự do.",
      "C. Không cần kiểm tra."
    ],
    "answer": 0,
    "explanation": "Bửng hông nảy bung khi chạy gây tai nạn nguy hiểm cho người đi đường."
  },
  {
    "id": 18,
    "question": "Biển tam giác phản quang cảnh báo sự cố ban đêm của xe tải nặng đặt cách đuôi xe bao xa?",
    "options": [
      "A. Đặt cách đuôi xe tối thiểu 50m trên đường thường, 150m trên đường cao tốc.",
      "B. Đặt ngay sát lốp xe.",
      "C. Đặt cách 1m."
    ],
    "answer": 0,
    "explanation": "Đặt biển cảnh báo xa để phương tiện tốc độ cao kịp phanh dừng."
  },
  {
    "id": 19,
    "question": "Quy định dán phù hiệu 'XE TẢI' trên kính chắn gió xe tải nặng Hạng C là gì?",
    "options": [
      "A. Phải dán phù hiệu kinh doanh vận tải do Sở GTVT cấp ở vị trí dễ quan sát góc trên bên phải.",
      "B. Dán ở gầm xe.",
      "C. Không cần dán."
    ],
    "answer": 0,
    "explanation": "Phù hiệu vận tải bắt buộc dán phía trước xe phục vụ kiểm tra."
  },
  {
    "id": 20,
    "question": "Khi lái xe tải nặng Hạng C qua đoạn đường đèo dốc sương mù dày đặc, tài xế phải làm gì?",
    "options": [
      "A. Bật đèn cốt, đèn sương mù, đi tốc độ chậm giữ đúng làn đường, nhấp còi khi qua góc cua hẹp.",
      "B. Bật đèn pha chiếu xa.",
      "C. Chạy 80 km/h."
    ],
    "answer": 0,
    "explanation": "Bật đèn cốt sương mù và đi chậm bóp còi báo hiệu tại góc cua đèo."
  },
  {
    "id": 21,
    "question": "Hộp số tầng Nhanh / Chậm (Rùa - Thỏ / Range Splitter) trên xe tải nặng dùng làm gì?",
    "options": [
      "A. Nhân đôi số lượng cấp số (ví dụ từ 4 số lên 8 số), giúp xe có sức kéo lớn ở số Rùa và chạy nhanh ở số Thỏ.",
      "B. Thay phanh xe.",
      "C. Tắt máy."
    ],
    "answer": 0,
    "explanation": "Tầng Rùa cho lực kéo cực lớn khi chở nặng leo dốc; tầng Thỏ cho tốc độ cao."
  },
  {
    "id": 22,
    "question": "Độ võng hành trình tự do bàn đạp phanh hơi xe tải nặng không đạt chuẩn sẽ ra sao?",
    "options": [
      "A. Làm chậm thời gian đáp ứng phanh hoặc làm phanh bị ăn lệch không đều.",
      "B. Làm xe chạy nhanh hơn.",
      "C. Không ảnh hưởng."
    ],
    "answer": 0,
    "explanation": "Hành trình bàn đạp phanh phải chuẩn để phản ứng phanh chính xác."
  },
  {
    "id": 23,
    "question": "Hệ thống van điều hòa lực phanh theo tải trọng (LSPV) trên xe tải nặng có tác dụng gì?",
    "options": [
      "A. Tự động điều chỉnh áp suất hơi phanh đến bánh sau tùy theo xe đang chở nặng hay chạy rỗng.",
      "B. Giúp xe chạy tốn ít dầu.",
      "C. Giảm tiếng ồn."
    ],
    "answer": 0,
    "explanation": "LSPV phân bổ lực phanh chuẩn theo tải trọng tránh lật xe khi rỗng tải."
  },
  {
    "id": 24,
    "question": "Giờ cấm xe tải nặng Hạng C đi vào khu vực nội thành đô thị thường là khung giờ nào?",
    "options": [
      "A. Giờ cao điểm sáng (6h00 - 9h00) và chiều (16h00 - 20h00) theo quy định từng thành phố.",
      "B. Đêm từ 1h - 4h sáng.",
      "C. Không cấm giờ nào."
    ],
    "answer": 0,
    "explanation": "Đô thị lớn cấm xe tải nặng vào nội đô giờ cao điểm chống tắc nghẽn."
  },
  {
    "id": 25,
    "question": "Tác dụng của mảng chèn bánh xe (cục chèn cao su/gỗ) khi đỗ xe tải nặng trên dốc là gì?",
    "options": [
      "A. Khóa cứng bánh xe chống hiện tượng tuột dốc khi phanh đỗ bị sự cố.",
      "B. Để kê chân lên nghỉ.",
      "C. Không tác dụng."
    ],
    "answer": 0,
    "explanation": "Cục chèn bánh chống trôi dốc an toàn tuyệt đối khi đỗ xe tải nặng."
  },
  {
    "id": 26,
    "question": "Biển báo P.106a 'Cấm xe ô tô tải' cấm những loại xe nào?",
    "options": [
      "A. Cấm tất cả các loại xe ô tô tải (bao gồm cả máy kéo và xe máy chuyên dùng).",
      "B. Chỉ cấm xe máy.",
      "C. Cấm xe buýt."
    ],
    "answer": 0,
    "explanation": "Biển P.106a cấm toàn bộ xe ô tô tải đi vào."
  },
  {
    "id": 27,
    "question": "Đèn cảnh báo báo nguy hiển màu vàng xoay tròn trên nóc xe tải nặng dùng khi nào?",
    "options": [
      "A. Khi xe chở hàng quá khổ quá tải hoặc đang làm nhiệm vụ sửa chữa đường bãi.",
      "B. Đèn trang trí ban đêm.",
      "C. Bật khi đi chở hàng thường."
    ],
    "answer": 0,
    "explanation": "Đèn xoay vàng cảnh báo xe chở hàng kích thước đặc biệt nguy hiểm."
  },
  {
    "id": 28,
    "question": "Khi bánh xe trước xe tải nặng Hạng C bị nổ ở tốc độ cao, thao tác chuẩn là gì?",
    "options": [
      "A. Nắm chặt vô-lăng giữ thẳng xe, nhả nhẹ ga từ từ, phanh êm ái tắp xe vào lề.",
      "B. Đạp mạnh phanh kịch sàn.",
      "C. Đánh ngoặt tay lái."
    ],
    "answer": 0,
    "explanation": "Nổ lốp bánh trước phải giữ chặt tay lái đi thẳng tránh lật xe."
  },
  {
    "id": 29,
    "question": "Trách nhiệm của người lái xe tải nặng khi xảy ra tai nạn giao thông trên đường là gì?",
    "options": [
      "A. Dừng xe ngay giữ nguyên hiện trường, cấp cứu người bị thương, báo cho công an giao thông.",
      "B. Bỏ chạy khỏi hiện trường trốn tránh.",
      "C. Dọn dẹp hiện trường bỏ đi."
    ],
    "answer": 0,
    "explanation": "Dừng xe cấp cứu nạn nhân và giữ nguyên hiện trường báo công an."
  },
  {
    "id": 30,
    "question": "Cơ quan nào có thẩm quyền cấp Giấy phép lưu hành xe chở hàng siêu trường siêu trọng?",
    "options": [
      "A. Cơ quan quản lý đường bộ có thẩm quyền (Cục Đường Bộ / Sở GTVT).",
      "B. Đội CSGT địa phương.",
      "C. Chủ hàng tự cấp."
    ],
    "answer": 0,
    "explanation": "Cơ quan quản lý đường bộ có thẩm quyền duyệt lộ trình và cấp phép."
  },
  {
    "id": 31,
    "question": "Hiện tượng động cơ Diesel bị 'Runaway' (tràn dầu chạy quá tốc độ) xử lý ra sao?",
    "options": [
      "A. Rút ống nạp khí hoặc bịt kín đường gió nạp động cơ để ngắt oxy tắt máy khẩn cấp.",
      "B. Đổ nước vào thùng dầu.",
      "C. Đứng nhìn."
    ],
    "answer": 0,
    "explanation": "Ngắt đường gió nạp khí oxy là cách duy nhất dập tắt động cơ Diesel bị runaway."
  },
  {
    "id": 32,
    "question": "Mức phạt đối với hành vi điều khiển xe tải nặng không dán tem kiểm định an toàn kỹ thuật là gì?",
    "options": [
      "A. Phạt tiền từ 4 đến 6 triệu đồng, tước GPLX 1-3 tháng.",
      "B. Không phạt.",
      "C. Nhắc nhở."
    ],
    "answer": 0,
    "explanation": "Xe quá hạn kiểm định bị phạt tiền nặng và tước bằng lái."
  },
  {
    "id": 33,
    "question": "Khi hệ thống phanh hơi xe tải nặng bị rò rỉ tụt áp suất khí nén dưới 4 bar, điều gì xảy ra?",
    "options": [
      "A. Phanh lốc-kê tự động nhảy khóa cứng các bánh xe sau dừng xe khẩn cấp.",
      "B. Xe chạy nhanh hơn.",
      "C. Không hiện tượng."
    ],
    "answer": 0,
    "explanation": "Tụt áp hơi phanh lốc-kê tự động nhảy bung phanh đỗ khóa bánh bảo vệ."
  },
  {
    "id": 34,
    "question": "Lái xe tải nặng Hạng C qua phà / cầu phao cần tuân thủ nguyên tắc gì?",
    "options": [
      "A. Cho xe bò chậm từng xe một theo đúng hướng dẫn của nhân viên bến phà, không thắng gấp.",
      "B. Tranh nhau lên phà.",
      "C. Chạy 60 km/h."
    ],
    "answer": 0,
    "explanation": "Tuân thủ tuyệt đối sự hướng dẫn của nhân viên bến phà cầu phao."
  },
  {
    "id": 35,
    "question": "Điện áp hệ thống điện trên xe tải nặng Hạng C thường là bao nhiêu Volt?",
    "options": [
      "A. 24 Volt (sử dụng 2 bình ắc quy 12V nối tiếp).",
      "B. 12 Volt.",
      "C. 220 Volt."
    ],
    "answer": 0,
    "explanation": "Xe tải nặng dùng hệ thống điện 24V cấp điện cho củ đề và đèn công suất lớn."
  },
  {
    "id": 36,
    "question": "Tem kiểm định an toàn kỹ thuật và bảo vệ môi trường dán ở đâu trên xe tải nặng?",
    "options": [
      "A. Góc trên bên phải mặt trong kính chắn gió phía trước.",
      "B. Dán sau thùng xe.",
      "C. Dán trên lốp xe."
    ],
    "answer": 0,
    "explanation": "Tem kiểm định dán góc trên phải kính chắn gió phía trước."
  },
  {
    "id": 37,
    "question": "Vệt bánh xe phía sau của xe tải nặng Hạng C khi rẽ ngoặt góc 90 độ có xu hướng gì?",
    "options": [
      "A. Siết quặt vào phía bên trong góc rẽ, đòi hỏi tài xế phải mở rộng bán kính rẽ đầu xe.",
      "B. Văng ra ngoài.",
      "C. Trùng bánh trước."
    ],
    "answer": 0,
    "explanation": "Bánh sau xe tải dài siết góc vào trong, tài xế phải mở rộng đầu xe."
  },
  {
    "id": 38,
    "question": "Khi đi xe tải nặng trên đường lầy lội mùa mưa, sử dụng dây xích quấn lốp nhằm mục đích gì?",
    "options": [
      "A. Tăng độ ma sát bám đường của bánh xe chống quay trơn.",
      "B. Bảo vệ lốp.",
      "C. Làm đẹp xe."
    ],
    "answer": 0,
    "explanation": "Quấn xích lốp tăng ma sát bám đường bùn lầy."
  },
  {
    "id": 39,
    "question": "Ý nghĩa vạch sơn màu vàng đứt nét trên đường 2 chiều?",
    "options": [
      "A. Phân chia 2 chiều ngược chiều, được phép lấn làn đè vạch khi an toàn.",
      "B. Vạch cấm vượt.",
      "C. Vạch dừng xe."
    ],
    "answer": 0,
    "explanation": "Vạch vàng đứt nét phân chia 2 chiều và cho phép lấn làn đè vạch."
  },
  {
    "id": 40,
    "question": "Sa hình giao lộ có xe tải nặng Hạng C và xe cứu thương đang phát tín hiệu?",
    "options": [
      "A. Xe tải nặng Hạng C phải dừng lại nhường đường cho xe cứu thương đi trước.",
      "B. Xe tải đi trước.",
      "C. Xe nào to đi trước."
    ],
    "answer": 0,
    "explanation": "Xe ưu tiên đang phát tín hiệu khẩn cấp luôn được quyền đi trước."
  }
]
  },

  d1: {
    title: "Thi Thử Lý Thuyết Ô Tô Hạng D1 (Xe 8 - 16 Chỗ)",
    subtitle: "Dành cho xe ô tô chở người từ 8 chỗ đến 16 chỗ (Ford Transit, Solati...) (45 câu / 26 phút - Đạt 41/45)",
    timeLimit: 26 * 60,
    passScore: 41,
    total: 45,
    questions: [
  {
    "id": 1,
    "question": "Giấy phép lái xe Hạng D1 được phép điều khiển xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 8 chỗ đến 16 chỗ (tính cả chỗ người lái) và các loại xe hạng B.",
      "B. Xe chở người trên 30 chỗ.",
      "C. Xe đầu kéo container."
    ],
    "answer": 0,
    "explanation": "Hạng D1 điều khiển xe chở người từ 8 đến 16 chỗ ngồi."
  },
  {
    "id": 2,
    "question": "Thao tác kiểm tra cửa lùa điện tự động xe 16 chỗ Hạng D1 trước khi khởi hành là gì?",
    "options": [
      "A. Kiểm tra cảm biến chống kẹt cửa lùa và đảm bảo cửa đã đóng kín hẳn.",
      "B. Để cửa mở chạy.",
      "C. Không cần kiểm tra."
    ],
    "answer": 0,
    "explanation": "Cửa lùa phải đóng kín chống rơi ngã hành khách ra ngoài."
  },
  {
    "id": 3,
    "question": "Trách nhiệm của tài xế xe D1 đối với việc thắt dây an toàn của hành khách là gì?",
    "options": [
      "A. Nhắc nhở và hướng dẫn tất cả hành khách thắt dây an toàn trước khi xe chạy.",
      "B. Mặc kệ hành khách.",
      "C. Tháo bỏ dây an toàn."
    ],
    "answer": 0,
    "explanation": "Tài xế có trách nhiệm nhắc nhở hành khách thắt dây an toàn."
  },
  {
    "id": 4,
    "question": "Thiết bị giám sát hành trình GPS và camera cabin trên xe D1 có nghĩa vụ gì?",
    "options": [
      "A. Bắt buộc lắp đặt và truyền dữ liệu giám sát liên tục về Cục Đường Bổ Việt Nam.",
      "B. Tùy chọn không bắt buộc.",
      "C. Chỉ bật khi đi tỉnh."
    ],
    "answer": 0,
    "explanation": "Xe kinh doanh vận tải bắt buộc phải truyền dữ liệu GPS và camera."
  },
  {
    "id": 5,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người Hạng D1 (xe 16 chỗ) là bao nhiêu năm?",
    "options": [
      "A. Không quá 20 năm.",
      "B. Không quá 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe ô tô chở người có niên hạn sử dụng tối đa là 20 năm."
  },
  {
    "id": 6,
    "question": "Đón trả hành khách xe Hạng D1 đúng quy định là ở đâu?",
    "options": [
      "A. Tại bến xe, điểm dừng đón trả khách được phép; không đón trả khách ngã tư đường cấm.",
      "B. Dừng giữa đường cao tốc.",
      "C. Đón khách nơi đường cấm dừng đỗ."
    ],
    "answer": 0,
    "explanation": "Đón trả khách đúng điểm dừng quy định đảm bảo an toàn giao thông."
  },
  {
    "id": 7,
    "question": "Trang bị bình chữa cháy trên xe ô tô chở người Hạng D1 vị trí nào?",
    "options": [
      "A. Đặt ở nơi dễ nhìn thấy và dễ lấy gần vị trí người lái xe.",
      "B. Giấu kín trong lốp dự phòng.",
      "C. Để dưới gầm xe."
    ],
    "answer": 0,
    "explanation": "Bình chữa cháy đặt vị trí dễ thấy dễ lấy xử lý sự cố."
  },
  {
    "id": 8,
    "question": "Số lượng búa thoát hiểm trang bị tối thiểu trên xe 16 chỗ Hạng D1 là bao nhiêu?",
    "options": [
      "A. Tối thiểu 2 búa phá kính thoát hiểm bố trí tại khoang khách.",
      "B. Không cần trang bị.",
      "C. 10 búa."
    ],
    "answer": 0,
    "explanation": "Trang bị búa phá kính khẩn cấp cứu nạn khi xe gặp sự cố."
  },
  {
    "id": 9,
    "question": "Tốc độ tối đa xe D1 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 90 km/h.",
      "B. 70 km/h.",
      "C. 120 km/h."
    ],
    "answer": 0,
    "explanation": "Xe chở người đến 30 chỗ chạy tối đa 90 km/h ngoài khu đông dân cư đường đôi."
  },
  {
    "id": 10,
    "question": "Quy định nồng độ cồn đối với tài xế xe kinh doanh vận tải Hạng D1 là gì?",
    "options": [
      "A. Tuyệt đối nghiêm cấm (Nồng độ cồn phải bằng 0).",
      "B. Dưới 0.25 mg/lít khí thở.",
      "C. Uống 1 lon bia."
    ],
    "answer": 0,
    "explanation": "Nồng độ cồn tuyệt đối bằng 0 đối với người lái xe."
  },
  {
    "id": 11,
    "question": "Giấy phép lái xe Hạng D1 được phép điều khiển xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 8 chỗ đến 16 chỗ (tính cả chỗ người lái) và các loại xe hạng B.",
      "B. Xe chở người trên 30 chỗ.",
      "C. Xe đầu kéo container."
    ],
    "answer": 0,
    "explanation": "Hạng D1 điều khiển xe chở người từ 8 đến 16 chỗ ngồi."
  },
  {
    "id": 12,
    "question": "Thao tác kiểm tra cửa lùa điện tự động xe 16 chỗ Hạng D1 trước khi khởi hành là gì?",
    "options": [
      "A. Kiểm tra cảm biến chống kẹt cửa lùa và đảm bảo cửa đã đóng kín hẳn.",
      "B. Để cửa mở chạy.",
      "C. Không cần kiểm tra."
    ],
    "answer": 0,
    "explanation": "Cửa lùa phải đóng kín chống rơi ngã hành khách ra ngoài."
  },
  {
    "id": 13,
    "question": "Trách nhiệm của tài xế xe D1 đối với việc thắt dây an toàn của hành khách là gì?",
    "options": [
      "A. Nhắc nhở và hướng dẫn tất cả hành khách thắt dây an toàn trước khi xe chạy.",
      "B. Mặc kệ hành khách.",
      "C. Tháo bỏ dây an toàn."
    ],
    "answer": 0,
    "explanation": "Tài xế có trách nhiệm nhắc nhở hành khách thắt dây an toàn."
  },
  {
    "id": 14,
    "question": "Thiết bị giám sát hành trình GPS và camera cabin trên xe D1 có nghĩa vụ gì?",
    "options": [
      "A. Bắt buộc lắp đặt và truyền dữ liệu giám sát liên tục về Cục Đường Bổ Việt Nam.",
      "B. Tùy chọn không bắt buộc.",
      "C. Chỉ bật khi đi tỉnh."
    ],
    "answer": 0,
    "explanation": "Xe kinh doanh vận tải bắt buộc phải truyền dữ liệu GPS và camera."
  },
  {
    "id": 15,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người Hạng D1 (xe 16 chỗ) là bao nhiêu năm?",
    "options": [
      "A. Không quá 20 năm.",
      "B. Không quá 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe ô tô chở người có niên hạn sử dụng tối đa là 20 năm."
  },
  {
    "id": 16,
    "question": "Đón trả hành khách xe Hạng D1 đúng quy định là ở đâu?",
    "options": [
      "A. Tại bến xe, điểm dừng đón trả khách được phép; không đón trả khách ngã tư đường cấm.",
      "B. Dừng giữa đường cao tốc.",
      "C. Đón khách nơi đường cấm dừng đỗ."
    ],
    "answer": 0,
    "explanation": "Đón trả khách đúng điểm dừng quy định đảm bảo an toàn giao thông."
  },
  {
    "id": 17,
    "question": "Trang bị bình chữa cháy trên xe ô tô chở người Hạng D1 vị trí nào?",
    "options": [
      "A. Đặt ở nơi dễ nhìn thấy và dễ lấy gần vị trí người lái xe.",
      "B. Giấu kín trong lốp dự phòng.",
      "C. Để dưới gầm xe."
    ],
    "answer": 0,
    "explanation": "Bình chữa cháy đặt vị trí dễ thấy dễ lấy xử lý sự cố."
  },
  {
    "id": 18,
    "question": "Số lượng búa thoát hiểm trang bị tối thiểu trên xe 16 chỗ Hạng D1 là bao nhiêu?",
    "options": [
      "A. Tối thiểu 2 búa phá kính thoát hiểm bố trí tại khoang khách.",
      "B. Không cần trang bị.",
      "C. 10 búa."
    ],
    "answer": 0,
    "explanation": "Trang bị búa phá kính khẩn cấp cứu nạn khi xe gặp sự cố."
  },
  {
    "id": 19,
    "question": "Tốc độ tối đa xe D1 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 90 km/h.",
      "B. 70 km/h.",
      "C. 120 km/h."
    ],
    "answer": 0,
    "explanation": "Xe chở người đến 30 chỗ chạy tối đa 90 km/h ngoài khu đông dân cư đường đôi."
  },
  {
    "id": 20,
    "question": "Quy định nồng độ cồn đối với tài xế xe kinh doanh vận tải Hạng D1 là gì?",
    "options": [
      "A. Tuyệt đối nghiêm cấm (Nồng độ cồn phải bằng 0).",
      "B. Dưới 0.25 mg/lít khí thở.",
      "C. Uống 1 lon bia."
    ],
    "answer": 0,
    "explanation": "Nồng độ cồn tuyệt đối bằng 0 đối với người lái xe."
  },
  {
    "id": 21,
    "question": "Giấy phép lái xe Hạng D1 được phép điều khiển xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 8 chỗ đến 16 chỗ (tính cả chỗ người lái) và các loại xe hạng B.",
      "B. Xe chở người trên 30 chỗ.",
      "C. Xe đầu kéo container."
    ],
    "answer": 0,
    "explanation": "Hạng D1 điều khiển xe chở người từ 8 đến 16 chỗ ngồi."
  },
  {
    "id": 22,
    "question": "Thao tác kiểm tra cửa lùa điện tự động xe 16 chỗ Hạng D1 trước khi khởi hành là gì?",
    "options": [
      "A. Kiểm tra cảm biến chống kẹt cửa lùa và đảm bảo cửa đã đóng kín hẳn.",
      "B. Để cửa mở chạy.",
      "C. Không cần kiểm tra."
    ],
    "answer": 0,
    "explanation": "Cửa lùa phải đóng kín chống rơi ngã hành khách ra ngoài."
  },
  {
    "id": 23,
    "question": "Trách nhiệm của tài xế xe D1 đối với việc thắt dây an toàn của hành khách là gì?",
    "options": [
      "A. Nhắc nhở và hướng dẫn tất cả hành khách thắt dây an toàn trước khi xe chạy.",
      "B. Mặc kệ hành khách.",
      "C. Tháo bỏ dây an toàn."
    ],
    "answer": 0,
    "explanation": "Tài xế có trách nhiệm nhắc nhở hành khách thắt dây an toàn."
  },
  {
    "id": 24,
    "question": "Thiết bị giám sát hành trình GPS và camera cabin trên xe D1 có nghĩa vụ gì?",
    "options": [
      "A. Bắt buộc lắp đặt và truyền dữ liệu giám sát liên tục về Cục Đường Bổ Việt Nam.",
      "B. Tùy chọn không bắt buộc.",
      "C. Chỉ bật khi đi tỉnh."
    ],
    "answer": 0,
    "explanation": "Xe kinh doanh vận tải bắt buộc phải truyền dữ liệu GPS và camera."
  },
  {
    "id": 25,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người Hạng D1 (xe 16 chỗ) là bao nhiêu năm?",
    "options": [
      "A. Không quá 20 năm.",
      "B. Không quá 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe ô tô chở người có niên hạn sử dụng tối đa là 20 năm."
  },
  {
    "id": 26,
    "question": "Đón trả hành khách xe Hạng D1 đúng quy định là ở đâu?",
    "options": [
      "A. Tại bến xe, điểm dừng đón trả khách được phép; không đón trả khách ngã tư đường cấm.",
      "B. Dừng giữa đường cao tốc.",
      "C. Đón khách nơi đường cấm dừng đỗ."
    ],
    "answer": 0,
    "explanation": "Đón trả khách đúng điểm dừng quy định đảm bảo an toàn giao thông."
  },
  {
    "id": 27,
    "question": "Trang bị bình chữa cháy trên xe ô tô chở người Hạng D1 vị trí nào?",
    "options": [
      "A. Đặt ở nơi dễ nhìn thấy và dễ lấy gần vị trí người lái xe.",
      "B. Giấu kín trong lốp dự phòng.",
      "C. Để dưới gầm xe."
    ],
    "answer": 0,
    "explanation": "Bình chữa cháy đặt vị trí dễ thấy dễ lấy xử lý sự cố."
  },
  {
    "id": 28,
    "question": "Số lượng búa thoát hiểm trang bị tối thiểu trên xe 16 chỗ Hạng D1 là bao nhiêu?",
    "options": [
      "A. Tối thiểu 2 búa phá kính thoát hiểm bố trí tại khoang khách.",
      "B. Không cần trang bị.",
      "C. 10 búa."
    ],
    "answer": 0,
    "explanation": "Trang bị búa phá kính khẩn cấp cứu nạn khi xe gặp sự cố."
  },
  {
    "id": 29,
    "question": "Tốc độ tối đa xe D1 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 90 km/h.",
      "B. 70 km/h.",
      "C. 120 km/h."
    ],
    "answer": 0,
    "explanation": "Xe chở người đến 30 chỗ chạy tối đa 90 km/h ngoài khu đông dân cư đường đôi."
  },
  {
    "id": 30,
    "question": "Quy định nồng độ cồn đối với tài xế xe kinh doanh vận tải Hạng D1 là gì?",
    "options": [
      "A. Tuyệt đối nghiêm cấm (Nồng độ cồn phải bằng 0).",
      "B. Dưới 0.25 mg/lít khí thở.",
      "C. Uống 1 lon bia."
    ],
    "answer": 0,
    "explanation": "Nồng độ cồn tuyệt đối bằng 0 đối với người lái xe."
  },
  {
    "id": 31,
    "question": "Giấy phép lái xe Hạng D1 được phép điều khiển xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 8 chỗ đến 16 chỗ (tính cả chỗ người lái) và các loại xe hạng B.",
      "B. Xe chở người trên 30 chỗ.",
      "C. Xe đầu kéo container."
    ],
    "answer": 0,
    "explanation": "Hạng D1 điều khiển xe chở người từ 8 đến 16 chỗ ngồi."
  },
  {
    "id": 32,
    "question": "Thao tác kiểm tra cửa lùa điện tự động xe 16 chỗ Hạng D1 trước khi khởi hành là gì?",
    "options": [
      "A. Kiểm tra cảm biến chống kẹt cửa lùa và đảm bảo cửa đã đóng kín hẳn.",
      "B. Để cửa mở chạy.",
      "C. Không cần kiểm tra."
    ],
    "answer": 0,
    "explanation": "Cửa lùa phải đóng kín chống rơi ngã hành khách ra ngoài."
  },
  {
    "id": 33,
    "question": "Trách nhiệm của tài xế xe D1 đối với việc thắt dây an toàn của hành khách là gì?",
    "options": [
      "A. Nhắc nhở và hướng dẫn tất cả hành khách thắt dây an toàn trước khi xe chạy.",
      "B. Mặc kệ hành khách.",
      "C. Tháo bỏ dây an toàn."
    ],
    "answer": 0,
    "explanation": "Tài xế có trách nhiệm nhắc nhở hành khách thắt dây an toàn."
  },
  {
    "id": 34,
    "question": "Thiết bị giám sát hành trình GPS và camera cabin trên xe D1 có nghĩa vụ gì?",
    "options": [
      "A. Bắt buộc lắp đặt và truyền dữ liệu giám sát liên tục về Cục Đường Bổ Việt Nam.",
      "B. Tùy chọn không bắt buộc.",
      "C. Chỉ bật khi đi tỉnh."
    ],
    "answer": 0,
    "explanation": "Xe kinh doanh vận tải bắt buộc phải truyền dữ liệu GPS và camera."
  },
  {
    "id": 35,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người Hạng D1 (xe 16 chỗ) là bao nhiêu năm?",
    "options": [
      "A. Không quá 20 năm.",
      "B. Không quá 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe ô tô chở người có niên hạn sử dụng tối đa là 20 năm."
  },
  {
    "id": 36,
    "question": "Đón trả hành khách xe Hạng D1 đúng quy định là ở đâu?",
    "options": [
      "A. Tại bến xe, điểm dừng đón trả khách được phép; không đón trả khách ngã tư đường cấm.",
      "B. Dừng giữa đường cao tốc.",
      "C. Đón khách nơi đường cấm dừng đỗ."
    ],
    "answer": 0,
    "explanation": "Đón trả khách đúng điểm dừng quy định đảm bảo an toàn giao thông."
  },
  {
    "id": 37,
    "question": "Trang bị bình chữa cháy trên xe ô tô chở người Hạng D1 vị trí nào?",
    "options": [
      "A. Đặt ở nơi dễ nhìn thấy và dễ lấy gần vị trí người lái xe.",
      "B. Giấu kín trong lốp dự phòng.",
      "C. Để dưới gầm xe."
    ],
    "answer": 0,
    "explanation": "Bình chữa cháy đặt vị trí dễ thấy dễ lấy xử lý sự cố."
  },
  {
    "id": 38,
    "question": "Số lượng búa thoát hiểm trang bị tối thiểu trên xe 16 chỗ Hạng D1 là bao nhiêu?",
    "options": [
      "A. Tối thiểu 2 búa phá kính thoát hiểm bố trí tại khoang khách.",
      "B. Không cần trang bị.",
      "C. 10 búa."
    ],
    "answer": 0,
    "explanation": "Trang bị búa phá kính khẩn cấp cứu nạn khi xe gặp sự cố."
  },
  {
    "id": 39,
    "question": "Tốc độ tối đa xe D1 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 90 km/h.",
      "B. 70 km/h.",
      "C. 120 km/h."
    ],
    "answer": 0,
    "explanation": "Xe chở người đến 30 chỗ chạy tối đa 90 km/h ngoài khu đông dân cư đường đôi."
  },
  {
    "id": 40,
    "question": "Quy định nồng độ cồn đối với tài xế xe kinh doanh vận tải Hạng D1 là gì?",
    "options": [
      "A. Tuyệt đối nghiêm cấm (Nồng độ cồn phải bằng 0).",
      "B. Dưới 0.25 mg/lít khí thở.",
      "C. Uống 1 lon bia."
    ],
    "answer": 0,
    "explanation": "Nồng độ cồn tuyệt đối bằng 0 đối với người lái xe."
  },
  {
    "id": 41,
    "question": "Giấy phép lái xe Hạng D1 được phép điều khiển xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 8 chỗ đến 16 chỗ (tính cả chỗ người lái) và các loại xe hạng B.",
      "B. Xe chở người trên 30 chỗ.",
      "C. Xe đầu kéo container."
    ],
    "answer": 0,
    "explanation": "Hạng D1 điều khiển xe chở người từ 8 đến 16 chỗ ngồi."
  },
  {
    "id": 42,
    "question": "Thao tác kiểm tra cửa lùa điện tự động xe 16 chỗ Hạng D1 trước khi khởi hành là gì?",
    "options": [
      "A. Kiểm tra cảm biến chống kẹt cửa lùa và đảm bảo cửa đã đóng kín hẳn.",
      "B. Để cửa mở chạy.",
      "C. Không cần kiểm tra."
    ],
    "answer": 0,
    "explanation": "Cửa lùa phải đóng kín chống rơi ngã hành khách ra ngoài."
  },
  {
    "id": 43,
    "question": "Trách nhiệm của tài xế xe D1 đối với việc thắt dây an toàn của hành khách là gì?",
    "options": [
      "A. Nhắc nhở và hướng dẫn tất cả hành khách thắt dây an toàn trước khi xe chạy.",
      "B. Mặc kệ hành khách.",
      "C. Tháo bỏ dây an toàn."
    ],
    "answer": 0,
    "explanation": "Tài xế có trách nhiệm nhắc nhở hành khách thắt dây an toàn."
  },
  {
    "id": 44,
    "question": "Thiết bị giám sát hành trình GPS và camera cabin trên xe D1 có nghĩa vụ gì?",
    "options": [
      "A. Bắt buộc lắp đặt và truyền dữ liệu giám sát liên tục về Cục Đường Bổ Việt Nam.",
      "B. Tùy chọn không bắt buộc.",
      "C. Chỉ bật khi đi tỉnh."
    ],
    "answer": 0,
    "explanation": "Xe kinh doanh vận tải bắt buộc phải truyền dữ liệu GPS và camera."
  },
  {
    "id": 45,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người Hạng D1 (xe 16 chỗ) là bao nhiêu năm?",
    "options": [
      "A. Không quá 20 năm.",
      "B. Không quá 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe ô tô chở người có niên hạn sử dụng tối đa là 20 năm."
  }
]
  },

  d2: {
    title: "Thi Thử Lý Thuyết Ô Tô Hạng D2 (Xe Khách 16 - 29 Chỗ)",
    subtitle: "Dành cho xe ô tô chở người từ 16 chỗ đến 29 chỗ (Thaco Town, Samco...) (45 câu / 26 phút - Đạt 41/45)",
    timeLimit: 26 * 60,
    passScore: 41,
    total: 45,
    questions: [
  {
    "id": 1,
    "question": "Giấy phép lái xe Hạng D2 được phép điều khiển loại xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 16 chỗ đến 29 chỗ (tính cả chỗ người lái) và các hạng B, C1, D1.",
      "B. Xe chở người 50 chỗ.",
      "C. Xe container."
    ],
    "answer": 0,
    "explanation": "Hạng D2 điều khiển xe chở người từ 16 đến 29 chỗ ngồi."
  },
  {
    "id": 2,
    "question": "Vệt bánh xe phía sau xe khách D2 khi rẽ ngoặt góc 90 độ có hiện tượng gì?",
    "options": [
      "A. Bánh sau siết quặt vào bên trong góc rẽ, tài xế phải mở rộng góc rẽ đầu xe.",
      "B. Bánh sau văng ra ngoài.",
      "C. Trùng bánh trước."
    ],
    "answer": 0,
    "explanation": "Bánh sau xe dài siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 3,
    "question": "Kiểm tra hệ thống phanh lốc-kê (Phanh đỗ khí nén) xe khách D2 trước khi di chuyển nhằm làm gì?",
    "options": [
      "A. Bảo đảm áp suất hơi đủ xả nhả phanh lốc-kê bánh sau, xe không bị bó phanh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Không cần thiết."
    ],
    "answer": 0,
    "explanation": "Áp suất hơi phải đủ xả phanh lốc-kê trước khi xe bánh chạy."
  },
  {
    "id": 4,
    "question": "Bố trí búa thoát hiểm trên xe khách 29 chỗ Hạng D2 như thế nào?",
    "options": [
      "A. Đặt tại các vị trí vách kính hông khoang khách, có ký hiệu hướng dẫn thoát hiểm rõ ràng.",
      "B. Cất trong cốp hành lý.",
      "C. Khóa trong tủ kính."
    ],
    "answer": 0,
    "explanation": "Búa thoát hiểm phải ở vị trí sẵn sàng sử dụng khi cháy nổ sự cố."
  },
  {
    "id": 5,
    "question": "Quản lý hành lý gửi dưới khoang cốp xe khách D2 đúng quy định là gì?",
    "options": [
      "A. Sắp xếp hành lý gọn gàng, khóa chốt nắp cốp an toàn, không chở hàng nguy hiểm cháy nổ.",
      "B. Nhồi nhét tràn ra ngoài.",
      "C. Mở nắp cốp chạy."
    ],
    "answer": 0,
    "explanation": "Cốp hành lý phải khóa chốt cẩn thận chống rơi vãi rò rỉ."
  },
  {
    "id": 6,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người 16 - 29 chỗ Hạng D2 là bao nhiêu năm?",
    "options": [
      "A. 20 năm.",
      "B. 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe chở người kinh doanh vận tải có niên hạn tối đa 20 năm."
  },
  {
    "id": 7,
    "question": "Đón trả khách trên đường cao tốc bị xử phạt như thế nào?",
    "options": [
      "A. Phạt tiền từ 10 đến 12 triệu đồng và tước GPLX từ 2 đến 4 tháng.",
      "B. Phạt 100 ngàn.",
      "C. Không phạt."
    ],
    "answer": 0,
    "explanation": "Đón trả khách trên đường cao tốc bị xử phạt cực kỳ nghiêm khắc."
  },
  {
    "id": 8,
    "question": "Kỹ thuật xuống dốc đèo dài bằng phanh cúp-pô khí xả xe D2 là gì?",
    "options": [
      "A. Bật công tắc phanh cúp-pô, về số thấp phù hợp để động cơ hãm tốc độ xe.",
      "B. Đạp hết côn thả trôi.",
      "C. Tắt chìa khóa xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô kết hợp số thấp hãm xe xuống dốc đèo an toàn."
  },
  {
    "id": 9,
    "question": "Tốc độ xe khách D2 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 80 km/h.",
      "B. 60 km/h.",
      "C. 100 km/h."
    ],
    "answer": 0,
    "explanation": "Xe khách D2 ngoài khu đông dân cư đường đôi chạy tối đa 80 km/h."
  },
  {
    "id": 10,
    "question": "Quy định khám sức khỏe định kỳ của tài xế xe khách Hạng D2 là bao nhiêu lâu?",
    "options": [
      "A. 1 năm một lần (12 tháng).",
      "B. 2 năm một lần.",
      "C. 5 năm một lần."
    ],
    "answer": 0,
    "explanation": "Tài xế lái xe kinh doanh vận tải bắt buộc khám sức khỏe hàng năm."
  },
  {
    "id": 11,
    "question": "Giấy phép lái xe Hạng D2 được phép điều khiển loại xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 16 chỗ đến 29 chỗ (tính cả chỗ người lái) và các hạng B, C1, D1.",
      "B. Xe chở người 50 chỗ.",
      "C. Xe container."
    ],
    "answer": 0,
    "explanation": "Hạng D2 điều khiển xe chở người từ 16 đến 29 chỗ ngồi."
  },
  {
    "id": 12,
    "question": "Vệt bánh xe phía sau xe khách D2 khi rẽ ngoặt góc 90 độ có hiện tượng gì?",
    "options": [
      "A. Bánh sau siết quặt vào bên trong góc rẽ, tài xế phải mở rộng góc rẽ đầu xe.",
      "B. Bánh sau văng ra ngoài.",
      "C. Trùng bánh trước."
    ],
    "answer": 0,
    "explanation": "Bánh sau xe dài siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 13,
    "question": "Kiểm tra hệ thống phanh lốc-kê (Phanh đỗ khí nén) xe khách D2 trước khi di chuyển nhằm làm gì?",
    "options": [
      "A. Bảo đảm áp suất hơi đủ xả nhả phanh lốc-kê bánh sau, xe không bị bó phanh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Không cần thiết."
    ],
    "answer": 0,
    "explanation": "Áp suất hơi phải đủ xả phanh lốc-kê trước khi xe bánh chạy."
  },
  {
    "id": 14,
    "question": "Bố trí búa thoát hiểm trên xe khách 29 chỗ Hạng D2 như thế nào?",
    "options": [
      "A. Đặt tại các vị trí vách kính hông khoang khách, có ký hiệu hướng dẫn thoát hiểm rõ ràng.",
      "B. Cất trong cốp hành lý.",
      "C. Khóa trong tủ kính."
    ],
    "answer": 0,
    "explanation": "Búa thoát hiểm phải ở vị trí sẵn sàng sử dụng khi cháy nổ sự cố."
  },
  {
    "id": 15,
    "question": "Quản lý hành lý gửi dưới khoang cốp xe khách D2 đúng quy định là gì?",
    "options": [
      "A. Sắp xếp hành lý gọn gàng, khóa chốt nắp cốp an toàn, không chở hàng nguy hiểm cháy nổ.",
      "B. Nhồi nhét tràn ra ngoài.",
      "C. Mở nắp cốp chạy."
    ],
    "answer": 0,
    "explanation": "Cốp hành lý phải khóa chốt cẩn thận chống rơi vãi rò rỉ."
  },
  {
    "id": 16,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người 16 - 29 chỗ Hạng D2 là bao nhiêu năm?",
    "options": [
      "A. 20 năm.",
      "B. 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe chở người kinh doanh vận tải có niên hạn tối đa 20 năm."
  },
  {
    "id": 17,
    "question": "Đón trả khách trên đường cao tốc bị xử phạt như thế nào?",
    "options": [
      "A. Phạt tiền từ 10 đến 12 triệu đồng và tước GPLX từ 2 đến 4 tháng.",
      "B. Phạt 100 ngàn.",
      "C. Không phạt."
    ],
    "answer": 0,
    "explanation": "Đón trả khách trên đường cao tốc bị xử phạt cực kỳ nghiêm khắc."
  },
  {
    "id": 18,
    "question": "Kỹ thuật xuống dốc đèo dài bằng phanh cúp-pô khí xả xe D2 là gì?",
    "options": [
      "A. Bật công tắc phanh cúp-pô, về số thấp phù hợp để động cơ hãm tốc độ xe.",
      "B. Đạp hết côn thả trôi.",
      "C. Tắt chìa khóa xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô kết hợp số thấp hãm xe xuống dốc đèo an toàn."
  },
  {
    "id": 19,
    "question": "Tốc độ xe khách D2 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 80 km/h.",
      "B. 60 km/h.",
      "C. 100 km/h."
    ],
    "answer": 0,
    "explanation": "Xe khách D2 ngoài khu đông dân cư đường đôi chạy tối đa 80 km/h."
  },
  {
    "id": 20,
    "question": "Quy định khám sức khỏe định kỳ của tài xế xe khách Hạng D2 là bao nhiêu lâu?",
    "options": [
      "A. 1 năm một lần (12 tháng).",
      "B. 2 năm một lần.",
      "C. 5 năm một lần."
    ],
    "answer": 0,
    "explanation": "Tài xế lái xe kinh doanh vận tải bắt buộc khám sức khỏe hàng năm."
  },
  {
    "id": 21,
    "question": "Giấy phép lái xe Hạng D2 được phép điều khiển loại xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 16 chỗ đến 29 chỗ (tính cả chỗ người lái) và các hạng B, C1, D1.",
      "B. Xe chở người 50 chỗ.",
      "C. Xe container."
    ],
    "answer": 0,
    "explanation": "Hạng D2 điều khiển xe chở người từ 16 đến 29 chỗ ngồi."
  },
  {
    "id": 22,
    "question": "Vệt bánh xe phía sau xe khách D2 khi rẽ ngoặt góc 90 độ có hiện tượng gì?",
    "options": [
      "A. Bánh sau siết quặt vào bên trong góc rẽ, tài xế phải mở rộng góc rẽ đầu xe.",
      "B. Bánh sau văng ra ngoài.",
      "C. Trùng bánh trước."
    ],
    "answer": 0,
    "explanation": "Bánh sau xe dài siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 23,
    "question": "Kiểm tra hệ thống phanh lốc-kê (Phanh đỗ khí nén) xe khách D2 trước khi di chuyển nhằm làm gì?",
    "options": [
      "A. Bảo đảm áp suất hơi đủ xả nhả phanh lốc-kê bánh sau, xe không bị bó phanh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Không cần thiết."
    ],
    "answer": 0,
    "explanation": "Áp suất hơi phải đủ xả phanh lốc-kê trước khi xe bánh chạy."
  },
  {
    "id": 24,
    "question": "Bố trí búa thoát hiểm trên xe khách 29 chỗ Hạng D2 như thế nào?",
    "options": [
      "A. Đặt tại các vị trí vách kính hông khoang khách, có ký hiệu hướng dẫn thoát hiểm rõ ràng.",
      "B. Cất trong cốp hành lý.",
      "C. Khóa trong tủ kính."
    ],
    "answer": 0,
    "explanation": "Búa thoát hiểm phải ở vị trí sẵn sàng sử dụng khi cháy nổ sự cố."
  },
  {
    "id": 25,
    "question": "Quản lý hành lý gửi dưới khoang cốp xe khách D2 đúng quy định là gì?",
    "options": [
      "A. Sắp xếp hành lý gọn gàng, khóa chốt nắp cốp an toàn, không chở hàng nguy hiểm cháy nổ.",
      "B. Nhồi nhét tràn ra ngoài.",
      "C. Mở nắp cốp chạy."
    ],
    "answer": 0,
    "explanation": "Cốp hành lý phải khóa chốt cẩn thận chống rơi vãi rò rỉ."
  },
  {
    "id": 26,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người 16 - 29 chỗ Hạng D2 là bao nhiêu năm?",
    "options": [
      "A. 20 năm.",
      "B. 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe chở người kinh doanh vận tải có niên hạn tối đa 20 năm."
  },
  {
    "id": 27,
    "question": "Đón trả khách trên đường cao tốc bị xử phạt như thế nào?",
    "options": [
      "A. Phạt tiền từ 10 đến 12 triệu đồng và tước GPLX từ 2 đến 4 tháng.",
      "B. Phạt 100 ngàn.",
      "C. Không phạt."
    ],
    "answer": 0,
    "explanation": "Đón trả khách trên đường cao tốc bị xử phạt cực kỳ nghiêm khắc."
  },
  {
    "id": 28,
    "question": "Kỹ thuật xuống dốc đèo dài bằng phanh cúp-pô khí xả xe D2 là gì?",
    "options": [
      "A. Bật công tắc phanh cúp-pô, về số thấp phù hợp để động cơ hãm tốc độ xe.",
      "B. Đạp hết côn thả trôi.",
      "C. Tắt chìa khóa xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô kết hợp số thấp hãm xe xuống dốc đèo an toàn."
  },
  {
    "id": 29,
    "question": "Tốc độ xe khách D2 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 80 km/h.",
      "B. 60 km/h.",
      "C. 100 km/h."
    ],
    "answer": 0,
    "explanation": "Xe khách D2 ngoài khu đông dân cư đường đôi chạy tối đa 80 km/h."
  },
  {
    "id": 30,
    "question": "Quy định khám sức khỏe định kỳ của tài xế xe khách Hạng D2 là bao nhiêu lâu?",
    "options": [
      "A. 1 năm một lần (12 tháng).",
      "B. 2 năm một lần.",
      "C. 5 năm một lần."
    ],
    "answer": 0,
    "explanation": "Tài xế lái xe kinh doanh vận tải bắt buộc khám sức khỏe hàng năm."
  },
  {
    "id": 31,
    "question": "Giấy phép lái xe Hạng D2 được phép điều khiển loại xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 16 chỗ đến 29 chỗ (tính cả chỗ người lái) và các hạng B, C1, D1.",
      "B. Xe chở người 50 chỗ.",
      "C. Xe container."
    ],
    "answer": 0,
    "explanation": "Hạng D2 điều khiển xe chở người từ 16 đến 29 chỗ ngồi."
  },
  {
    "id": 32,
    "question": "Vệt bánh xe phía sau xe khách D2 khi rẽ ngoặt góc 90 độ có hiện tượng gì?",
    "options": [
      "A. Bánh sau siết quặt vào bên trong góc rẽ, tài xế phải mở rộng góc rẽ đầu xe.",
      "B. Bánh sau văng ra ngoài.",
      "C. Trùng bánh trước."
    ],
    "answer": 0,
    "explanation": "Bánh sau xe dài siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 33,
    "question": "Kiểm tra hệ thống phanh lốc-kê (Phanh đỗ khí nén) xe khách D2 trước khi di chuyển nhằm làm gì?",
    "options": [
      "A. Bảo đảm áp suất hơi đủ xả nhả phanh lốc-kê bánh sau, xe không bị bó phanh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Không cần thiết."
    ],
    "answer": 0,
    "explanation": "Áp suất hơi phải đủ xả phanh lốc-kê trước khi xe bánh chạy."
  },
  {
    "id": 34,
    "question": "Bố trí búa thoát hiểm trên xe khách 29 chỗ Hạng D2 như thế nào?",
    "options": [
      "A. Đặt tại các vị trí vách kính hông khoang khách, có ký hiệu hướng dẫn thoát hiểm rõ ràng.",
      "B. Cất trong cốp hành lý.",
      "C. Khóa trong tủ kính."
    ],
    "answer": 0,
    "explanation": "Búa thoát hiểm phải ở vị trí sẵn sàng sử dụng khi cháy nổ sự cố."
  },
  {
    "id": 35,
    "question": "Quản lý hành lý gửi dưới khoang cốp xe khách D2 đúng quy định là gì?",
    "options": [
      "A. Sắp xếp hành lý gọn gàng, khóa chốt nắp cốp an toàn, không chở hàng nguy hiểm cháy nổ.",
      "B. Nhồi nhét tràn ra ngoài.",
      "C. Mở nắp cốp chạy."
    ],
    "answer": 0,
    "explanation": "Cốp hành lý phải khóa chốt cẩn thận chống rơi vãi rò rỉ."
  },
  {
    "id": 36,
    "question": "Niên hạn sử dụng đối với xe ô tô chở người 16 - 29 chỗ Hạng D2 là bao nhiêu năm?",
    "options": [
      "A. 20 năm.",
      "B. 25 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Xe chở người kinh doanh vận tải có niên hạn tối đa 20 năm."
  },
  {
    "id": 37,
    "question": "Đón trả khách trên đường cao tốc bị xử phạt như thế nào?",
    "options": [
      "A. Phạt tiền từ 10 đến 12 triệu đồng và tước GPLX từ 2 đến 4 tháng.",
      "B. Phạt 100 ngàn.",
      "C. Không phạt."
    ],
    "answer": 0,
    "explanation": "Đón trả khách trên đường cao tốc bị xử phạt cực kỳ nghiêm khắc."
  },
  {
    "id": 38,
    "question": "Kỹ thuật xuống dốc đèo dài bằng phanh cúp-pô khí xả xe D2 là gì?",
    "options": [
      "A. Bật công tắc phanh cúp-pô, về số thấp phù hợp để động cơ hãm tốc độ xe.",
      "B. Đạp hết côn thả trôi.",
      "C. Tắt chìa khóa xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô kết hợp số thấp hãm xe xuống dốc đèo an toàn."
  },
  {
    "id": 39,
    "question": "Tốc độ xe khách D2 chạy trên đường đôi ngoài khu đông dân cư là bao nhiêu?",
    "options": [
      "A. 80 km/h.",
      "B. 60 km/h.",
      "C. 100 km/h."
    ],
    "answer": 0,
    "explanation": "Xe khách D2 ngoài khu đông dân cư đường đôi chạy tối đa 80 km/h."
  },
  {
    "id": 40,
    "question": "Quy định khám sức khỏe định kỳ của tài xế xe khách Hạng D2 là bao nhiêu lâu?",
    "options": [
      "A. 1 năm một lần (12 tháng).",
      "B. 2 năm một lần.",
      "C. 5 năm một lần."
    ],
    "answer": 0,
    "explanation": "Tài xế lái xe kinh doanh vận tải bắt buộc khám sức khỏe hàng năm."
  },
  {
    "id": 41,
    "question": "Giấy phép lái xe Hạng D2 được phép điều khiển loại xe ô tô chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 16 chỗ đến 29 chỗ (tính cả chỗ người lái) và các hạng B, C1, D1.",
      "B. Xe chở người 50 chỗ.",
      "C. Xe container."
    ],
    "answer": 0,
    "explanation": "Hạng D2 điều khiển xe chở người từ 16 đến 29 chỗ ngồi."
  },
  {
    "id": 42,
    "question": "Vệt bánh xe phía sau xe khách D2 khi rẽ ngoặt góc 90 độ có hiện tượng gì?",
    "options": [
      "A. Bánh sau siết quặt vào bên trong góc rẽ, tài xế phải mở rộng góc rẽ đầu xe.",
      "B. Bánh sau văng ra ngoài.",
      "C. Trùng bánh trước."
    ],
    "answer": 0,
    "explanation": "Bánh sau xe dài siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 43,
    "question": "Kiểm tra hệ thống phanh lốc-kê (Phanh đỗ khí nén) xe khách D2 trước khi di chuyển nhằm làm gì?",
    "options": [
      "A. Bảo đảm áp suất hơi đủ xả nhả phanh lốc-kê bánh sau, xe không bị bó phanh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Không cần thiết."
    ],
    "answer": 0,
    "explanation": "Áp suất hơi phải đủ xả phanh lốc-kê trước khi xe bánh chạy."
  },
  {
    "id": 44,
    "question": "Bố trí búa thoát hiểm trên xe khách 29 chỗ Hạng D2 như thế nào?",
    "options": [
      "A. Đặt tại các vị trí vách kính hông khoang khách, có ký hiệu hướng dẫn thoát hiểm rõ ràng.",
      "B. Cất trong cốp hành lý.",
      "C. Khóa trong tủ kính."
    ],
    "answer": 0,
    "explanation": "Búa thoát hiểm phải ở vị trí sẵn sàng sử dụng khi cháy nổ sự cố."
  },
  {
    "id": 45,
    "question": "Quản lý hành lý gửi dưới khoang cốp xe khách D2 đúng quy định là gì?",
    "options": [
      "A. Sắp xếp hành lý gọn gàng, khóa chốt nắp cốp an toàn, không chở hàng nguy hiểm cháy nổ.",
      "B. Nhồi nhét tràn ra ngoài.",
      "C. Mở nắp cốp chạy."
    ],
    "answer": 0,
    "explanation": "Cốp hành lý phải khóa chốt cẩn thận chống rơi vãi rò rỉ."
  }
]
  },

  d: {
    title: "Thi Thử Lý Thuyết Ô Tô Hạng D (Xe Khách 9 - 30 Chỗ)",
    subtitle: "Dành cho xe ô tô chở người từ 9 chỗ đến 30 chỗ (45 câu / 26 phút - Đạt 41/45)",
    timeLimit: 26 * 60,
    passScore: 41,
    total: 45,
    questions: [
  {
    "id": 1,
    "question": "Giấy phép lái xe Hạng D được phép điều khiển loại xe chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 9 chỗ đến 30 chỗ ngồi (tính cả chỗ người lái) và các hạng B, C1.",
      "B. Xe chở người trên 50 chỗ.",
      "C. Xe máy A1."
    ],
    "answer": 0,
    "explanation": "Hạng D điều khiển xe ô tô chở người từ 9 đến 30 chỗ ngồi."
  },
  {
    "id": 2,
    "question": "Trách nhiệm người lái xe khách Hạng D trước khi xe xuất bến là gì?",
    "options": [
      "A. Kiểm tra an toàn kỹ thuật xe, nhắc nhở khách thắt dây an toàn, kiểm tra danh sách hành khách.",
      "B. Đón khách vượt số ghế.",
      "C. Cho khách đứng bậc cửa."
    ],
    "answer": 0,
    "explanation": "Đảm bảo an toàn kỹ thuật và nhắc khách thắt dây an toàn trước khi khởi hành."
  },
  {
    "id": 3,
    "question": "Kiểm tra hệ thống phanh hơi khí nén lốc-kê xe khách Hạng D trước khi vận hành?",
    "options": [
      "A. Áp suất khí nén đạt 6-8 bar, không bị rò rỉ khí phanh.",
      "B. Đạt 1 bar.",
      "C. Không cần phanh."
    ],
    "answer": 0,
    "explanation": "Phanh hơi phải đủ áp suất 6-8 bar bảo đảm an toàn phanh."
  },
  {
    "id": 4,
    "question": "Thời gian lái xe liên tục tối đa của tài xế xe khách Hạng D là bao nhiêu?",
    "options": [
      "A. Không quá 4 giờ liên tục.",
      "B. Không quá 8 giờ.",
      "C. Không quá 12 giờ."
    ],
    "answer": 0,
    "explanation": "Lái xe khách tối đa 4 giờ liên tục phải nghỉ ngơi."
  },
  {
    "id": 5,
    "question": "Sử dụng phanh cúp-pô động cơ Diesel xe khách Hạng D khi nào?",
    "options": [
      "A. Khi xe đổ dốc đèo dài để hỗ trợ hãm tốc độ, giảm tải cho phanh chính.",
      "B. Khi xe đang tăng tốc.",
      "C. Khi đỗ xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô hỗ trợ phanh động cơ hãm tốc đèo dốc."
  },
  {
    "id": 6,
    "question": "Tốc độ xe khách Hạng D chạy trên đường cao tốc tối đa là bao nhiêu?",
    "options": [
      "A. 100 - 120 km/h (theo biển báo tốc độ cao tốc).",
      "B. 150 km/h.",
      "C. 60 km/h."
    ],
    "answer": 0,
    "explanation": "Chạy đúng tốc độ biển báo trên đường cao tốc tối đa 120 km/h."
  },
  {
    "id": 7,
    "question": "Hành vi tự ý tăng giá vé xe khách trái quy định bị xử lý thế nào?",
    "options": [
      "A. Bị xử phạt tiền vi phạm hành chính và hoàn trả tiền cho khách.",
      "B. Không bị phạt.",
      "C. Khuyến khích."
    ],
    "answer": 0,
    "explanation": "Tăng giá vé chèn ép khách bị xử phạt nghiêm theo Luật."
  },
  {
    "id": 8,
    "question": "Nồng độ cồn quy định đối với tài xế xe khách Hạng D khi điều khiển xe là gì?",
    "options": [
      "A. Tuyệt đối bằng 0.",
      "B. Dưới 50mg/100ml máu.",
      "C. Dưới 0.25mg/1l khí thở."
    ],
    "answer": 0,
    "explanation": "Nồng độ cồn nghiêm cấm tuyệt đối bằng 0."
  },
  {
    "id": 9,
    "question": "Kiểm tra lốp kép phía sau xe khách Hạng D trước mỗi chuyến đi đường dài?",
    "options": [
      "A. Bảo đảm cả 2 lốp đủ áp suất, không dắt đá kẽ lốp, lốp không bị nứt rách.",
      "B. Chỉ nhìn lốp trước.",
      "C. Bỏ lốp dự phòng."
    ],
    "answer": 0,
    "explanation": "Kiểm tra lốp kép bánh sau tránh nổ lốp lật xe."
  },
  {
    "id": 10,
    "question": "Xử lý khi xe khách Hạng D bị hỏng phanh mất kiểm soát xuống dốc đèo?",
    "options": [
      "A. Bình tĩnh dùng phanh cúp-pô, về số thấp dứt khoát, hướng xe vào lề đường hoặc hốc cứu nạn khẩn cấp.",
      "B. Nhảy khỏi xe.",
      "C. Đạp ga."
    ],
    "answer": 0,
    "explanation": "Dùng hốc cứu nạn và phanh động cơ dừng xe khẩn cấp."
  },
  {
    "id": 11,
    "question": "Giấy phép lái xe Hạng D được phép điều khiển loại xe chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 9 chỗ đến 30 chỗ ngồi (tính cả chỗ người lái) và các hạng B, C1.",
      "B. Xe chở người trên 50 chỗ.",
      "C. Xe máy A1."
    ],
    "answer": 0,
    "explanation": "Hạng D điều khiển xe ô tô chở người từ 9 đến 30 chỗ ngồi."
  },
  {
    "id": 12,
    "question": "Trách nhiệm người lái xe khách Hạng D trước khi xe xuất bến là gì?",
    "options": [
      "A. Kiểm tra an toàn kỹ thuật xe, nhắc nhở khách thắt dây an toàn, kiểm tra danh sách hành khách.",
      "B. Đón khách vượt số ghế.",
      "C. Cho khách đứng bậc cửa."
    ],
    "answer": 0,
    "explanation": "Đảm bảo an toàn kỹ thuật và nhắc khách thắt dây an toàn trước khi khởi hành."
  },
  {
    "id": 13,
    "question": "Kiểm tra hệ thống phanh hơi khí nén lốc-kê xe khách Hạng D trước khi vận hành?",
    "options": [
      "A. Áp suất khí nén đạt 6-8 bar, không bị rò rỉ khí phanh.",
      "B. Đạt 1 bar.",
      "C. Không cần phanh."
    ],
    "answer": 0,
    "explanation": "Phanh hơi phải đủ áp suất 6-8 bar bảo đảm an toàn phanh."
  },
  {
    "id": 14,
    "question": "Thời gian lái xe liên tục tối đa của tài xế xe khách Hạng D là bao nhiêu?",
    "options": [
      "A. Không quá 4 giờ liên tục.",
      "B. Không quá 8 giờ.",
      "C. Không quá 12 giờ."
    ],
    "answer": 0,
    "explanation": "Lái xe khách tối đa 4 giờ liên tục phải nghỉ ngơi."
  },
  {
    "id": 15,
    "question": "Sử dụng phanh cúp-pô động cơ Diesel xe khách Hạng D khi nào?",
    "options": [
      "A. Khi xe đổ dốc đèo dài để hỗ trợ hãm tốc độ, giảm tải cho phanh chính.",
      "B. Khi xe đang tăng tốc.",
      "C. Khi đỗ xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô hỗ trợ phanh động cơ hãm tốc đèo dốc."
  },
  {
    "id": 16,
    "question": "Tốc độ xe khách Hạng D chạy trên đường cao tốc tối đa là bao nhiêu?",
    "options": [
      "A. 100 - 120 km/h (theo biển báo tốc độ cao tốc).",
      "B. 150 km/h.",
      "C. 60 km/h."
    ],
    "answer": 0,
    "explanation": "Chạy đúng tốc độ biển báo trên đường cao tốc tối đa 120 km/h."
  },
  {
    "id": 17,
    "question": "Hành vi tự ý tăng giá vé xe khách trái quy định bị xử lý thế nào?",
    "options": [
      "A. Bị xử phạt tiền vi phạm hành chính và hoàn trả tiền cho khách.",
      "B. Không bị phạt.",
      "C. Khuyến khích."
    ],
    "answer": 0,
    "explanation": "Tăng giá vé chèn ép khách bị xử phạt nghiêm theo Luật."
  },
  {
    "id": 18,
    "question": "Nồng độ cồn quy định đối với tài xế xe khách Hạng D khi điều khiển xe là gì?",
    "options": [
      "A. Tuyệt đối bằng 0.",
      "B. Dưới 50mg/100ml máu.",
      "C. Dưới 0.25mg/1l khí thở."
    ],
    "answer": 0,
    "explanation": "Nồng độ cồn nghiêm cấm tuyệt đối bằng 0."
  },
  {
    "id": 19,
    "question": "Kiểm tra lốp kép phía sau xe khách Hạng D trước mỗi chuyến đi đường dài?",
    "options": [
      "A. Bảo đảm cả 2 lốp đủ áp suất, không dắt đá kẽ lốp, lốp không bị nứt rách.",
      "B. Chỉ nhìn lốp trước.",
      "C. Bỏ lốp dự phòng."
    ],
    "answer": 0,
    "explanation": "Kiểm tra lốp kép bánh sau tránh nổ lốp lật xe."
  },
  {
    "id": 20,
    "question": "Xử lý khi xe khách Hạng D bị hỏng phanh mất kiểm soát xuống dốc đèo?",
    "options": [
      "A. Bình tĩnh dùng phanh cúp-pô, về số thấp dứt khoát, hướng xe vào lề đường hoặc hốc cứu nạn khẩn cấp.",
      "B. Nhảy khỏi xe.",
      "C. Đạp ga."
    ],
    "answer": 0,
    "explanation": "Dùng hốc cứu nạn và phanh động cơ dừng xe khẩn cấp."
  },
  {
    "id": 21,
    "question": "Giấy phép lái xe Hạng D được phép điều khiển loại xe chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 9 chỗ đến 30 chỗ ngồi (tính cả chỗ người lái) và các hạng B, C1.",
      "B. Xe chở người trên 50 chỗ.",
      "C. Xe máy A1."
    ],
    "answer": 0,
    "explanation": "Hạng D điều khiển xe ô tô chở người từ 9 đến 30 chỗ ngồi."
  },
  {
    "id": 22,
    "question": "Trách nhiệm người lái xe khách Hạng D trước khi xe xuất bến là gì?",
    "options": [
      "A. Kiểm tra an toàn kỹ thuật xe, nhắc nhở khách thắt dây an toàn, kiểm tra danh sách hành khách.",
      "B. Đón khách vượt số ghế.",
      "C. Cho khách đứng bậc cửa."
    ],
    "answer": 0,
    "explanation": "Đảm bảo an toàn kỹ thuật và nhắc khách thắt dây an toàn trước khi khởi hành."
  },
  {
    "id": 23,
    "question": "Kiểm tra hệ thống phanh hơi khí nén lốc-kê xe khách Hạng D trước khi vận hành?",
    "options": [
      "A. Áp suất khí nén đạt 6-8 bar, không bị rò rỉ khí phanh.",
      "B. Đạt 1 bar.",
      "C. Không cần phanh."
    ],
    "answer": 0,
    "explanation": "Phanh hơi phải đủ áp suất 6-8 bar bảo đảm an toàn phanh."
  },
  {
    "id": 24,
    "question": "Thời gian lái xe liên tục tối đa của tài xế xe khách Hạng D là bao nhiêu?",
    "options": [
      "A. Không quá 4 giờ liên tục.",
      "B. Không quá 8 giờ.",
      "C. Không quá 12 giờ."
    ],
    "answer": 0,
    "explanation": "Lái xe khách tối đa 4 giờ liên tục phải nghỉ ngơi."
  },
  {
    "id": 25,
    "question": "Sử dụng phanh cúp-pô động cơ Diesel xe khách Hạng D khi nào?",
    "options": [
      "A. Khi xe đổ dốc đèo dài để hỗ trợ hãm tốc độ, giảm tải cho phanh chính.",
      "B. Khi xe đang tăng tốc.",
      "C. Khi đỗ xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô hỗ trợ phanh động cơ hãm tốc đèo dốc."
  },
  {
    "id": 26,
    "question": "Tốc độ xe khách Hạng D chạy trên đường cao tốc tối đa là bao nhiêu?",
    "options": [
      "A. 100 - 120 km/h (theo biển báo tốc độ cao tốc).",
      "B. 150 km/h.",
      "C. 60 km/h."
    ],
    "answer": 0,
    "explanation": "Chạy đúng tốc độ biển báo trên đường cao tốc tối đa 120 km/h."
  },
  {
    "id": 27,
    "question": "Hành vi tự ý tăng giá vé xe khách trái quy định bị xử lý thế nào?",
    "options": [
      "A. Bị xử phạt tiền vi phạm hành chính và hoàn trả tiền cho khách.",
      "B. Không bị phạt.",
      "C. Khuyến khích."
    ],
    "answer": 0,
    "explanation": "Tăng giá vé chèn ép khách bị xử phạt nghiêm theo Luật."
  },
  {
    "id": 28,
    "question": "Nồng độ cồn quy định đối với tài xế xe khách Hạng D khi điều khiển xe là gì?",
    "options": [
      "A. Tuyệt đối bằng 0.",
      "B. Dưới 50mg/100ml máu.",
      "C. Dưới 0.25mg/1l khí thở."
    ],
    "answer": 0,
    "explanation": "Nồng độ cồn nghiêm cấm tuyệt đối bằng 0."
  },
  {
    "id": 29,
    "question": "Kiểm tra lốp kép phía sau xe khách Hạng D trước mỗi chuyến đi đường dài?",
    "options": [
      "A. Bảo đảm cả 2 lốp đủ áp suất, không dắt đá kẽ lốp, lốp không bị nứt rách.",
      "B. Chỉ nhìn lốp trước.",
      "C. Bỏ lốp dự phòng."
    ],
    "answer": 0,
    "explanation": "Kiểm tra lốp kép bánh sau tránh nổ lốp lật xe."
  },
  {
    "id": 30,
    "question": "Xử lý khi xe khách Hạng D bị hỏng phanh mất kiểm soát xuống dốc đèo?",
    "options": [
      "A. Bình tĩnh dùng phanh cúp-pô, về số thấp dứt khoát, hướng xe vào lề đường hoặc hốc cứu nạn khẩn cấp.",
      "B. Nhảy khỏi xe.",
      "C. Đạp ga."
    ],
    "answer": 0,
    "explanation": "Dùng hốc cứu nạn và phanh động cơ dừng xe khẩn cấp."
  },
  {
    "id": 31,
    "question": "Giấy phép lái xe Hạng D được phép điều khiển loại xe chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 9 chỗ đến 30 chỗ ngồi (tính cả chỗ người lái) và các hạng B, C1.",
      "B. Xe chở người trên 50 chỗ.",
      "C. Xe máy A1."
    ],
    "answer": 0,
    "explanation": "Hạng D điều khiển xe ô tô chở người từ 9 đến 30 chỗ ngồi."
  },
  {
    "id": 32,
    "question": "Trách nhiệm người lái xe khách Hạng D trước khi xe xuất bến là gì?",
    "options": [
      "A. Kiểm tra an toàn kỹ thuật xe, nhắc nhở khách thắt dây an toàn, kiểm tra danh sách hành khách.",
      "B. Đón khách vượt số ghế.",
      "C. Cho khách đứng bậc cửa."
    ],
    "answer": 0,
    "explanation": "Đảm bảo an toàn kỹ thuật và nhắc khách thắt dây an toàn trước khi khởi hành."
  },
  {
    "id": 33,
    "question": "Kiểm tra hệ thống phanh hơi khí nén lốc-kê xe khách Hạng D trước khi vận hành?",
    "options": [
      "A. Áp suất khí nén đạt 6-8 bar, không bị rò rỉ khí phanh.",
      "B. Đạt 1 bar.",
      "C. Không cần phanh."
    ],
    "answer": 0,
    "explanation": "Phanh hơi phải đủ áp suất 6-8 bar bảo đảm an toàn phanh."
  },
  {
    "id": 34,
    "question": "Thời gian lái xe liên tục tối đa của tài xế xe khách Hạng D là bao nhiêu?",
    "options": [
      "A. Không quá 4 giờ liên tục.",
      "B. Không quá 8 giờ.",
      "C. Không quá 12 giờ."
    ],
    "answer": 0,
    "explanation": "Lái xe khách tối đa 4 giờ liên tục phải nghỉ ngơi."
  },
  {
    "id": 35,
    "question": "Sử dụng phanh cúp-pô động cơ Diesel xe khách Hạng D khi nào?",
    "options": [
      "A. Khi xe đổ dốc đèo dài để hỗ trợ hãm tốc độ, giảm tải cho phanh chính.",
      "B. Khi xe đang tăng tốc.",
      "C. Khi đỗ xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô hỗ trợ phanh động cơ hãm tốc đèo dốc."
  },
  {
    "id": 36,
    "question": "Tốc độ xe khách Hạng D chạy trên đường cao tốc tối đa là bao nhiêu?",
    "options": [
      "A. 100 - 120 km/h (theo biển báo tốc độ cao tốc).",
      "B. 150 km/h.",
      "C. 60 km/h."
    ],
    "answer": 0,
    "explanation": "Chạy đúng tốc độ biển báo trên đường cao tốc tối đa 120 km/h."
  },
  {
    "id": 37,
    "question": "Hành vi tự ý tăng giá vé xe khách trái quy định bị xử lý thế nào?",
    "options": [
      "A. Bị xử phạt tiền vi phạm hành chính và hoàn trả tiền cho khách.",
      "B. Không bị phạt.",
      "C. Khuyến khích."
    ],
    "answer": 0,
    "explanation": "Tăng giá vé chèn ép khách bị xử phạt nghiêm theo Luật."
  },
  {
    "id": 38,
    "question": "Nồng độ cồn quy định đối với tài xế xe khách Hạng D khi điều khiển xe là gì?",
    "options": [
      "A. Tuyệt đối bằng 0.",
      "B. Dưới 50mg/100ml máu.",
      "C. Dưới 0.25mg/1l khí thở."
    ],
    "answer": 0,
    "explanation": "Nồng độ cồn nghiêm cấm tuyệt đối bằng 0."
  },
  {
    "id": 39,
    "question": "Kiểm tra lốp kép phía sau xe khách Hạng D trước mỗi chuyến đi đường dài?",
    "options": [
      "A. Bảo đảm cả 2 lốp đủ áp suất, không dắt đá kẽ lốp, lốp không bị nứt rách.",
      "B. Chỉ nhìn lốp trước.",
      "C. Bỏ lốp dự phòng."
    ],
    "answer": 0,
    "explanation": "Kiểm tra lốp kép bánh sau tránh nổ lốp lật xe."
  },
  {
    "id": 40,
    "question": "Xử lý khi xe khách Hạng D bị hỏng phanh mất kiểm soát xuống dốc đèo?",
    "options": [
      "A. Bình tĩnh dùng phanh cúp-pô, về số thấp dứt khoát, hướng xe vào lề đường hoặc hốc cứu nạn khẩn cấp.",
      "B. Nhảy khỏi xe.",
      "C. Đạp ga."
    ],
    "answer": 0,
    "explanation": "Dùng hốc cứu nạn và phanh động cơ dừng xe khẩn cấp."
  },
  {
    "id": 41,
    "question": "Giấy phép lái xe Hạng D được phép điều khiển loại xe chở người bao nhiêu chỗ?",
    "options": [
      "A. Xe ô tô chở người từ 9 chỗ đến 30 chỗ ngồi (tính cả chỗ người lái) và các hạng B, C1.",
      "B. Xe chở người trên 50 chỗ.",
      "C. Xe máy A1."
    ],
    "answer": 0,
    "explanation": "Hạng D điều khiển xe ô tô chở người từ 9 đến 30 chỗ ngồi."
  },
  {
    "id": 42,
    "question": "Trách nhiệm người lái xe khách Hạng D trước khi xe xuất bến là gì?",
    "options": [
      "A. Kiểm tra an toàn kỹ thuật xe, nhắc nhở khách thắt dây an toàn, kiểm tra danh sách hành khách.",
      "B. Đón khách vượt số ghế.",
      "C. Cho khách đứng bậc cửa."
    ],
    "answer": 0,
    "explanation": "Đảm bảo an toàn kỹ thuật và nhắc khách thắt dây an toàn trước khi khởi hành."
  },
  {
    "id": 43,
    "question": "Kiểm tra hệ thống phanh hơi khí nén lốc-kê xe khách Hạng D trước khi vận hành?",
    "options": [
      "A. Áp suất khí nén đạt 6-8 bar, không bị rò rỉ khí phanh.",
      "B. Đạt 1 bar.",
      "C. Không cần phanh."
    ],
    "answer": 0,
    "explanation": "Phanh hơi phải đủ áp suất 6-8 bar bảo đảm an toàn phanh."
  },
  {
    "id": 44,
    "question": "Thời gian lái xe liên tục tối đa của tài xế xe khách Hạng D là bao nhiêu?",
    "options": [
      "A. Không quá 4 giờ liên tục.",
      "B. Không quá 8 giờ.",
      "C. Không quá 12 giờ."
    ],
    "answer": 0,
    "explanation": "Lái xe khách tối đa 4 giờ liên tục phải nghỉ ngơi."
  },
  {
    "id": 45,
    "question": "Sử dụng phanh cúp-pô động cơ Diesel xe khách Hạng D khi nào?",
    "options": [
      "A. Khi xe đổ dốc đèo dài để hỗ trợ hãm tốc độ, giảm tải cho phanh chính.",
      "B. Khi xe đang tăng tốc.",
      "C. Khi đỗ xe."
    ],
    "answer": 0,
    "explanation": "Phanh cúp-pô hỗ trợ phanh động cơ hãm tốc đèo dốc."
  }
]
  },

  ce: {
    title: "Thi Thử Lý Thuyết Ô Tô Hạng CE (Xe Đầu Kéo Sơ-mi Rơ-moóc)",
    subtitle: "Dành cho lái xe ô tô tải hạng C kéo rơ-moóc, xe đầu kéo kéo sơ-mi rơ-moóc (45 câu / 26 phút - Đạt 41/45)",
    timeLimit: 26 * 60,
    passScore: 41,
    total: 45,
    questions: [
  {
    "id": 1,
    "question": "Giấy phép lái xe Hạng CE cấp cho người lái xe điều khiển loại phương tiện nào?",
    "options": [
      "A. Xe ô tô tải hạng C kéo rơ-moóc, xe đầu kéo kéo sơ-mi rơ-moóc (xe container).",
      "B. Xe máy A1.",
      "C. Xe ô tô chở người 45 chỗ."
    ],
    "answer": 0,
    "explanation": "Hạng CE là bằng lái xe đầu kéo container và xe tải kéo rơ-moóc chuyên nghiệp."
  },
  {
    "id": 2,
    "question": "Khi thực hiện nối đầu kéo với sơ-mi rơ-moóc, thao tác kiểm tra an toàn bắt buộc là gì?",
    "options": [
      "A. Kiểm tra mâm xoay (Fifth Wheel) đã gài chốt khóa an toàn, cắm đường ống hơi phanh và dây cắm điện đèn hiệu.",
      "B. Không cần gài chốt mâm xoay.",
      "C. Rút hết dây hơi phanh rơ-moóc."
    ],
    "answer": 0,
    "explanation": "Bắt buộc chốt khóa mâm xoay chắc chắn và nối ống phanh hơi rơ-moóc."
  },
  {
    "id": 3,
    "question": "Vệt bánh xe phía sau của sơ-mi rơ-moóc khi xe đầu kéo rẽ ngoặt góc 90 độ sẽ như thế nào?",
    "options": [
      "A. Vệt bánh xe rơ-moóc bị quặt vào phía bên trong góc rẽ sâu hơn nhiều so với bánh xe đầu kéo.",
      "B. Vệt bánh rơ-moóc văng ra phía ngoài.",
      "C. Trùng đè 100% vệt bánh trước."
    ],
    "answer": 0,
    "explanation": "Khi rẽ ngoặt, rơ-moóc phía sau bị siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 4,
    "question": "Hiện tượng 'Jackknife' (xe gập dao gấp) trên xe đầu kéo container xảy ra khi nào?",
    "options": [
      "A. Bánh sau xe đầu kéo bị khóa cứng khi phanh gấp trên đường trơn, khiến rơ-moóc ủi tới đẩy gập đuôi xe.",
      "B. Khi xe chạy trên đường thẳng khô ráo.",
      "C. Khi đỗ xe trong bãi."
    ],
    "answer": 0,
    "explanation": "Hiện tượng trượt gập mâm xoay Jackknife rất nguy hiểm khi phanh gấp xe container."
  },
  {
    "id": 5,
    "question": "Mở rộng góc rẽ đầu xe container Hạng CE khi ôm cua ngã tư nhằm mục đích gì?",
    "options": [
      "A. Tránh cho bánh xe sơ-mi rơ-moóc phía sau bị leo lên vỉa hè hoặc đè vào phương tiện bên cạnh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Đánh lái cho đẹp."
    ],
    "answer": 0,
    "explanation": "Mở rộng góc cua đầu xe giúp rơ-moóc lọt qua ngã tư an toàn."
  },
  {
    "id": 6,
    "question": "Kiểm tra chốt khóa gù container (Twist Locks) trên sàn sơ-mi rơ-moóc trước khi chạy?",
    "options": [
      "A. Đảm bảo tất cả 4 chốt gù xoay khóa chặt thùng container gắn liền sàn rơ-moóc.",
      "B. Để hở chốt khóa.",
      "C. Tháo bỏ chốt."
    ],
    "answer": 0,
    "explanation": "Khóa chặt 4 chốt gù container chống lật thùng ra khỏi sàn rơ-moóc."
  },
  {
    "id": 7,
    "question": "Niên hạn sử dụng tối đa của sơ-mi rơ-moóc là bao nhiêu năm?",
    "options": [
      "A. 25 năm.",
      "B. 20 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Sơ-mi rơ-moóc có niên hạn sử dụng tối đa 25 năm."
  },
  {
    "id": 8,
    "question": "Cút nối đường ống hơi phanh từ đầu kéo sang rơ-moóc bị rò rỉ sẽ gây ra điều gì?",
    "options": [
      "A. Làm tụt áp suất phanh khí nén, phanh lốc-kê rơ-moóc bị khóa cứng không cho xe chạy.",
      "B. Xe chạy nhanh hơn.",
      "C. Không ảnh hưởng."
    ],
    "answer": 0,
    "explanation": "Rò rỉ ống hơi phanh lốc-kê rơ-moóc sẽ tự nhảy phanh dừng xe."
  },
  {
    "id": 9,
    "question": "Thao tác nâng hạ chân chống sơ-mi rơ-moóc (Landing Gear) khi tách đầu kéo ra?",
    "options": [
      "A. Quay tay quay chân chống hạ sát mặt đường bằng phẳng cứng rồi mới tháo chốt mâm xoay.",
      "B. Tháo đầu kéo trước khi hạ chân chống.",
      "C. Hạ chân chống trên bãi đất lầy."
    ],
    "answer": 0,
    "explanation": "Hạ chân chống rơ-moóc chắc chắn trước khi tách đầu kéo."
  },
  {
    "id": 10,
    "question": "Tốc độ tối đa xe đầu kéo kéo sơ-mi rơ-moóc chạy ngoài khu đông dân cư đường đôi là bao nhiêu?",
    "options": [
      "A. 70 km/h.",
      "B. 90 km/h.",
      "C. 50 km/h."
    ],
    "answer": 0,
    "explanation": "Xe đầu kéo kéo rơ-moóc ngoài khu đông dân cư đường đôi chạy tối đa 70 km/h."
  },
  {
    "id": 11,
    "question": "Giấy phép lái xe Hạng CE cấp cho người lái xe điều khiển loại phương tiện nào?",
    "options": [
      "A. Xe ô tô tải hạng C kéo rơ-moóc, xe đầu kéo kéo sơ-mi rơ-moóc (xe container).",
      "B. Xe máy A1.",
      "C. Xe ô tô chở người 45 chỗ."
    ],
    "answer": 0,
    "explanation": "Hạng CE là bằng lái xe đầu kéo container và xe tải kéo rơ-moóc chuyên nghiệp."
  },
  {
    "id": 12,
    "question": "Khi thực hiện nối đầu kéo với sơ-mi rơ-moóc, thao tác kiểm tra an toàn bắt buộc là gì?",
    "options": [
      "A. Kiểm tra mâm xoay (Fifth Wheel) đã gài chốt khóa an toàn, cắm đường ống hơi phanh và dây cắm điện đèn hiệu.",
      "B. Không cần gài chốt mâm xoay.",
      "C. Rút hết dây hơi phanh rơ-moóc."
    ],
    "answer": 0,
    "explanation": "Bắt buộc chốt khóa mâm xoay chắc chắn và nối ống phanh hơi rơ-moóc."
  },
  {
    "id": 13,
    "question": "Vệt bánh xe phía sau của sơ-mi rơ-moóc khi xe đầu kéo rẽ ngoặt góc 90 độ sẽ như thế nào?",
    "options": [
      "A. Vệt bánh xe rơ-moóc bị quặt vào phía bên trong góc rẽ sâu hơn nhiều so với bánh xe đầu kéo.",
      "B. Vệt bánh rơ-moóc văng ra phía ngoài.",
      "C. Trùng đè 100% vệt bánh trước."
    ],
    "answer": 0,
    "explanation": "Khi rẽ ngoặt, rơ-moóc phía sau bị siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 14,
    "question": "Hiện tượng 'Jackknife' (xe gập dao gấp) trên xe đầu kéo container xảy ra khi nào?",
    "options": [
      "A. Bánh sau xe đầu kéo bị khóa cứng khi phanh gấp trên đường trơn, khiến rơ-moóc ủi tới đẩy gập đuôi xe.",
      "B. Khi xe chạy trên đường thẳng khô ráo.",
      "C. Khi đỗ xe trong bãi."
    ],
    "answer": 0,
    "explanation": "Hiện tượng trượt gập mâm xoay Jackknife rất nguy hiểm khi phanh gấp xe container."
  },
  {
    "id": 15,
    "question": "Mở rộng góc rẽ đầu xe container Hạng CE khi ôm cua ngã tư nhằm mục đích gì?",
    "options": [
      "A. Tránh cho bánh xe sơ-mi rơ-moóc phía sau bị leo lên vỉa hè hoặc đè vào phương tiện bên cạnh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Đánh lái cho đẹp."
    ],
    "answer": 0,
    "explanation": "Mở rộng góc cua đầu xe giúp rơ-moóc lọt qua ngã tư an toàn."
  },
  {
    "id": 16,
    "question": "Kiểm tra chốt khóa gù container (Twist Locks) trên sàn sơ-mi rơ-moóc trước khi chạy?",
    "options": [
      "A. Đảm bảo tất cả 4 chốt gù xoay khóa chặt thùng container gắn liền sàn rơ-moóc.",
      "B. Để hở chốt khóa.",
      "C. Tháo bỏ chốt."
    ],
    "answer": 0,
    "explanation": "Khóa chặt 4 chốt gù container chống lật thùng ra khỏi sàn rơ-moóc."
  },
  {
    "id": 17,
    "question": "Niên hạn sử dụng tối đa của sơ-mi rơ-moóc là bao nhiêu năm?",
    "options": [
      "A. 25 năm.",
      "B. 20 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Sơ-mi rơ-moóc có niên hạn sử dụng tối đa 25 năm."
  },
  {
    "id": 18,
    "question": "Cút nối đường ống hơi phanh từ đầu kéo sang rơ-moóc bị rò rỉ sẽ gây ra điều gì?",
    "options": [
      "A. Làm tụt áp suất phanh khí nén, phanh lốc-kê rơ-moóc bị khóa cứng không cho xe chạy.",
      "B. Xe chạy nhanh hơn.",
      "C. Không ảnh hưởng."
    ],
    "answer": 0,
    "explanation": "Rò rỉ ống hơi phanh lốc-kê rơ-moóc sẽ tự nhảy phanh dừng xe."
  },
  {
    "id": 19,
    "question": "Thao tác nâng hạ chân chống sơ-mi rơ-moóc (Landing Gear) khi tách đầu kéo ra?",
    "options": [
      "A. Quay tay quay chân chống hạ sát mặt đường bằng phẳng cứng rồi mới tháo chốt mâm xoay.",
      "B. Tháo đầu kéo trước khi hạ chân chống.",
      "C. Hạ chân chống trên bãi đất lầy."
    ],
    "answer": 0,
    "explanation": "Hạ chân chống rơ-moóc chắc chắn trước khi tách đầu kéo."
  },
  {
    "id": 20,
    "question": "Tốc độ tối đa xe đầu kéo kéo sơ-mi rơ-moóc chạy ngoài khu đông dân cư đường đôi là bao nhiêu?",
    "options": [
      "A. 70 km/h.",
      "B. 90 km/h.",
      "C. 50 km/h."
    ],
    "answer": 0,
    "explanation": "Xe đầu kéo kéo rơ-moóc ngoài khu đông dân cư đường đôi chạy tối đa 70 km/h."
  },
  {
    "id": 21,
    "question": "Giấy phép lái xe Hạng CE cấp cho người lái xe điều khiển loại phương tiện nào?",
    "options": [
      "A. Xe ô tô tải hạng C kéo rơ-moóc, xe đầu kéo kéo sơ-mi rơ-moóc (xe container).",
      "B. Xe máy A1.",
      "C. Xe ô tô chở người 45 chỗ."
    ],
    "answer": 0,
    "explanation": "Hạng CE là bằng lái xe đầu kéo container và xe tải kéo rơ-moóc chuyên nghiệp."
  },
  {
    "id": 22,
    "question": "Khi thực hiện nối đầu kéo với sơ-mi rơ-moóc, thao tác kiểm tra an toàn bắt buộc là gì?",
    "options": [
      "A. Kiểm tra mâm xoay (Fifth Wheel) đã gài chốt khóa an toàn, cắm đường ống hơi phanh và dây cắm điện đèn hiệu.",
      "B. Không cần gài chốt mâm xoay.",
      "C. Rút hết dây hơi phanh rơ-moóc."
    ],
    "answer": 0,
    "explanation": "Bắt buộc chốt khóa mâm xoay chắc chắn và nối ống phanh hơi rơ-moóc."
  },
  {
    "id": 23,
    "question": "Vệt bánh xe phía sau của sơ-mi rơ-moóc khi xe đầu kéo rẽ ngoặt góc 90 độ sẽ như thế nào?",
    "options": [
      "A. Vệt bánh xe rơ-moóc bị quặt vào phía bên trong góc rẽ sâu hơn nhiều so với bánh xe đầu kéo.",
      "B. Vệt bánh rơ-moóc văng ra phía ngoài.",
      "C. Trùng đè 100% vệt bánh trước."
    ],
    "answer": 0,
    "explanation": "Khi rẽ ngoặt, rơ-moóc phía sau bị siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 24,
    "question": "Hiện tượng 'Jackknife' (xe gập dao gấp) trên xe đầu kéo container xảy ra khi nào?",
    "options": [
      "A. Bánh sau xe đầu kéo bị khóa cứng khi phanh gấp trên đường trơn, khiến rơ-moóc ủi tới đẩy gập đuôi xe.",
      "B. Khi xe chạy trên đường thẳng khô ráo.",
      "C. Khi đỗ xe trong bãi."
    ],
    "answer": 0,
    "explanation": "Hiện tượng trượt gập mâm xoay Jackknife rất nguy hiểm khi phanh gấp xe container."
  },
  {
    "id": 25,
    "question": "Mở rộng góc rẽ đầu xe container Hạng CE khi ôm cua ngã tư nhằm mục đích gì?",
    "options": [
      "A. Tránh cho bánh xe sơ-mi rơ-moóc phía sau bị leo lên vỉa hè hoặc đè vào phương tiện bên cạnh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Đánh lái cho đẹp."
    ],
    "answer": 0,
    "explanation": "Mở rộng góc cua đầu xe giúp rơ-moóc lọt qua ngã tư an toàn."
  },
  {
    "id": 26,
    "question": "Kiểm tra chốt khóa gù container (Twist Locks) trên sàn sơ-mi rơ-moóc trước khi chạy?",
    "options": [
      "A. Đảm bảo tất cả 4 chốt gù xoay khóa chặt thùng container gắn liền sàn rơ-moóc.",
      "B. Để hở chốt khóa.",
      "C. Tháo bỏ chốt."
    ],
    "answer": 0,
    "explanation": "Khóa chặt 4 chốt gù container chống lật thùng ra khỏi sàn rơ-moóc."
  },
  {
    "id": 27,
    "question": "Niên hạn sử dụng tối đa của sơ-mi rơ-moóc là bao nhiêu năm?",
    "options": [
      "A. 25 năm.",
      "B. 20 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Sơ-mi rơ-moóc có niên hạn sử dụng tối đa 25 năm."
  },
  {
    "id": 28,
    "question": "Cút nối đường ống hơi phanh từ đầu kéo sang rơ-moóc bị rò rỉ sẽ gây ra điều gì?",
    "options": [
      "A. Làm tụt áp suất phanh khí nén, phanh lốc-kê rơ-moóc bị khóa cứng không cho xe chạy.",
      "B. Xe chạy nhanh hơn.",
      "C. Không ảnh hưởng."
    ],
    "answer": 0,
    "explanation": "Rò rỉ ống hơi phanh lốc-kê rơ-moóc sẽ tự nhảy phanh dừng xe."
  },
  {
    "id": 29,
    "question": "Thao tác nâng hạ chân chống sơ-mi rơ-moóc (Landing Gear) khi tách đầu kéo ra?",
    "options": [
      "A. Quay tay quay chân chống hạ sát mặt đường bằng phẳng cứng rồi mới tháo chốt mâm xoay.",
      "B. Tháo đầu kéo trước khi hạ chân chống.",
      "C. Hạ chân chống trên bãi đất lầy."
    ],
    "answer": 0,
    "explanation": "Hạ chân chống rơ-moóc chắc chắn trước khi tách đầu kéo."
  },
  {
    "id": 30,
    "question": "Tốc độ tối đa xe đầu kéo kéo sơ-mi rơ-moóc chạy ngoài khu đông dân cư đường đôi là bao nhiêu?",
    "options": [
      "A. 70 km/h.",
      "B. 90 km/h.",
      "C. 50 km/h."
    ],
    "answer": 0,
    "explanation": "Xe đầu kéo kéo rơ-moóc ngoài khu đông dân cư đường đôi chạy tối đa 70 km/h."
  },
  {
    "id": 31,
    "question": "Giấy phép lái xe Hạng CE cấp cho người lái xe điều khiển loại phương tiện nào?",
    "options": [
      "A. Xe ô tô tải hạng C kéo rơ-moóc, xe đầu kéo kéo sơ-mi rơ-moóc (xe container).",
      "B. Xe máy A1.",
      "C. Xe ô tô chở người 45 chỗ."
    ],
    "answer": 0,
    "explanation": "Hạng CE là bằng lái xe đầu kéo container và xe tải kéo rơ-moóc chuyên nghiệp."
  },
  {
    "id": 32,
    "question": "Khi thực hiện nối đầu kéo với sơ-mi rơ-moóc, thao tác kiểm tra an toàn bắt buộc là gì?",
    "options": [
      "A. Kiểm tra mâm xoay (Fifth Wheel) đã gài chốt khóa an toàn, cắm đường ống hơi phanh và dây cắm điện đèn hiệu.",
      "B. Không cần gài chốt mâm xoay.",
      "C. Rút hết dây hơi phanh rơ-moóc."
    ],
    "answer": 0,
    "explanation": "Bắt buộc chốt khóa mâm xoay chắc chắn và nối ống phanh hơi rơ-moóc."
  },
  {
    "id": 33,
    "question": "Vệt bánh xe phía sau của sơ-mi rơ-moóc khi xe đầu kéo rẽ ngoặt góc 90 độ sẽ như thế nào?",
    "options": [
      "A. Vệt bánh xe rơ-moóc bị quặt vào phía bên trong góc rẽ sâu hơn nhiều so với bánh xe đầu kéo.",
      "B. Vệt bánh rơ-moóc văng ra phía ngoài.",
      "C. Trùng đè 100% vệt bánh trước."
    ],
    "answer": 0,
    "explanation": "Khi rẽ ngoặt, rơ-moóc phía sau bị siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 34,
    "question": "Hiện tượng 'Jackknife' (xe gập dao gấp) trên xe đầu kéo container xảy ra khi nào?",
    "options": [
      "A. Bánh sau xe đầu kéo bị khóa cứng khi phanh gấp trên đường trơn, khiến rơ-moóc ủi tới đẩy gập đuôi xe.",
      "B. Khi xe chạy trên đường thẳng khô ráo.",
      "C. Khi đỗ xe trong bãi."
    ],
    "answer": 0,
    "explanation": "Hiện tượng trượt gập mâm xoay Jackknife rất nguy hiểm khi phanh gấp xe container."
  },
  {
    "id": 35,
    "question": "Mở rộng góc rẽ đầu xe container Hạng CE khi ôm cua ngã tư nhằm mục đích gì?",
    "options": [
      "A. Tránh cho bánh xe sơ-mi rơ-moóc phía sau bị leo lên vỉa hè hoặc đè vào phương tiện bên cạnh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Đánh lái cho đẹp."
    ],
    "answer": 0,
    "explanation": "Mở rộng góc cua đầu xe giúp rơ-moóc lọt qua ngã tư an toàn."
  },
  {
    "id": 36,
    "question": "Kiểm tra chốt khóa gù container (Twist Locks) trên sàn sơ-mi rơ-moóc trước khi chạy?",
    "options": [
      "A. Đảm bảo tất cả 4 chốt gù xoay khóa chặt thùng container gắn liền sàn rơ-moóc.",
      "B. Để hở chốt khóa.",
      "C. Tháo bỏ chốt."
    ],
    "answer": 0,
    "explanation": "Khóa chặt 4 chốt gù container chống lật thùng ra khỏi sàn rơ-moóc."
  },
  {
    "id": 37,
    "question": "Niên hạn sử dụng tối đa của sơ-mi rơ-moóc là bao nhiêu năm?",
    "options": [
      "A. 25 năm.",
      "B. 20 năm.",
      "C. Không niên hạn."
    ],
    "answer": 0,
    "explanation": "Sơ-mi rơ-moóc có niên hạn sử dụng tối đa 25 năm."
  },
  {
    "id": 38,
    "question": "Cút nối đường ống hơi phanh từ đầu kéo sang rơ-moóc bị rò rỉ sẽ gây ra điều gì?",
    "options": [
      "A. Làm tụt áp suất phanh khí nén, phanh lốc-kê rơ-moóc bị khóa cứng không cho xe chạy.",
      "B. Xe chạy nhanh hơn.",
      "C. Không ảnh hưởng."
    ],
    "answer": 0,
    "explanation": "Rò rỉ ống hơi phanh lốc-kê rơ-moóc sẽ tự nhảy phanh dừng xe."
  },
  {
    "id": 39,
    "question": "Thao tác nâng hạ chân chống sơ-mi rơ-moóc (Landing Gear) khi tách đầu kéo ra?",
    "options": [
      "A. Quay tay quay chân chống hạ sát mặt đường bằng phẳng cứng rồi mới tháo chốt mâm xoay.",
      "B. Tháo đầu kéo trước khi hạ chân chống.",
      "C. Hạ chân chống trên bãi đất lầy."
    ],
    "answer": 0,
    "explanation": "Hạ chân chống rơ-moóc chắc chắn trước khi tách đầu kéo."
  },
  {
    "id": 40,
    "question": "Tốc độ tối đa xe đầu kéo kéo sơ-mi rơ-moóc chạy ngoài khu đông dân cư đường đôi là bao nhiêu?",
    "options": [
      "A. 70 km/h.",
      "B. 90 km/h.",
      "C. 50 km/h."
    ],
    "answer": 0,
    "explanation": "Xe đầu kéo kéo rơ-moóc ngoài khu đông dân cư đường đôi chạy tối đa 70 km/h."
  },
  {
    "id": 41,
    "question": "Giấy phép lái xe Hạng CE cấp cho người lái xe điều khiển loại phương tiện nào?",
    "options": [
      "A. Xe ô tô tải hạng C kéo rơ-moóc, xe đầu kéo kéo sơ-mi rơ-moóc (xe container).",
      "B. Xe máy A1.",
      "C. Xe ô tô chở người 45 chỗ."
    ],
    "answer": 0,
    "explanation": "Hạng CE là bằng lái xe đầu kéo container và xe tải kéo rơ-moóc chuyên nghiệp."
  },
  {
    "id": 42,
    "question": "Khi thực hiện nối đầu kéo với sơ-mi rơ-moóc, thao tác kiểm tra an toàn bắt buộc là gì?",
    "options": [
      "A. Kiểm tra mâm xoay (Fifth Wheel) đã gài chốt khóa an toàn, cắm đường ống hơi phanh và dây cắm điện đèn hiệu.",
      "B. Không cần gài chốt mâm xoay.",
      "C. Rút hết dây hơi phanh rơ-moóc."
    ],
    "answer": 0,
    "explanation": "Bắt buộc chốt khóa mâm xoay chắc chắn và nối ống phanh hơi rơ-moóc."
  },
  {
    "id": 43,
    "question": "Vệt bánh xe phía sau của sơ-mi rơ-moóc khi xe đầu kéo rẽ ngoặt góc 90 độ sẽ như thế nào?",
    "options": [
      "A. Vệt bánh xe rơ-moóc bị quặt vào phía bên trong góc rẽ sâu hơn nhiều so với bánh xe đầu kéo.",
      "B. Vệt bánh rơ-moóc văng ra phía ngoài.",
      "C. Trùng đè 100% vệt bánh trước."
    ],
    "answer": 0,
    "explanation": "Khi rẽ ngoặt, rơ-moóc phía sau bị siết góc vào trong, tài xế phải mở rộng góc rẽ."
  },
  {
    "id": 44,
    "question": "Hiện tượng 'Jackknife' (xe gập dao gấp) trên xe đầu kéo container xảy ra khi nào?",
    "options": [
      "A. Bánh sau xe đầu kéo bị khóa cứng khi phanh gấp trên đường trơn, khiến rơ-moóc ủi tới đẩy gập đuôi xe.",
      "B. Khi xe chạy trên đường thẳng khô ráo.",
      "C. Khi đỗ xe trong bãi."
    ],
    "answer": 0,
    "explanation": "Hiện tượng trượt gập mâm xoay Jackknife rất nguy hiểm khi phanh gấp xe container."
  },
  {
    "id": 45,
    "question": "Mở rộng góc rẽ đầu xe container Hạng CE khi ôm cua ngã tư nhằm mục đích gì?",
    "options": [
      "A. Tránh cho bánh xe sơ-mi rơ-moóc phía sau bị leo lên vỉa hè hoặc đè vào phương tiện bên cạnh.",
      "B. Giúp xe chạy nhanh hơn.",
      "C. Đánh lái cho đẹp."
    ],
    "answer": 0,
    "explanation": "Mở rộng góc cua đầu xe giúp rơ-moóc lọt qua ngã tư an toàn."
  }
]
  }
};
