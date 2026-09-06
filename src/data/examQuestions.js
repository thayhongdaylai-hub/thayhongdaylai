// Bộ đề thi thử lý thuyết GPLX chính thức Cục Cảnh sát giao thông & 250 câu xe máy A1 - A
// Tự động phân tách: Hạng xe máy A1, A dùng bộ 250 câu xe máy; Ô tô dùng bộ 600 câu sát hạch.

import OFFICIAL_600_QUESTIONS from './official600Questions.json';
import MOTORCYCLE_250_QUESTIONS from './motorcycle250Questions.json';

export { OFFICIAL_600_QUESTIONS, MOTORCYCLE_250_QUESTIONS };

export const EXAM_DATA = {
  "a1": {
    "title": "Thi Thử Lý Thuyết Xe Máy Hạng A1",
    "subtitle": "Bộ 250 câu xe máy A1 chuẩn (25 câu / 19 phút - Đạt 21/25)",
    "timeLimit": 1140,
    "passScore": 21,
    "total": 25,
    "questions": [
      {
        "id": 217,
        "pdfNum": 217,
        "official600Id": 534,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Xe khách và xe tải, xe con.",
          "2. Xe tải, xe khách, xe con.",
          "3. Xe con, xe khách, xe tải."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-217.jpeg",
        "page": 89,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe khách và xe tải, xe con.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe khách và xe tải, xe con.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe khách và xe tải, xe con.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe khách và xe tải, xe con."
      },
      {
        "id": 222,
        "pdfNum": 222,
        "official600Id": 500,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo tín hiệu đèn, xe nào đi là đúng quy tắc giao thông?",
        "options": [
          "1. Xe khách, xe mô tô.",
          "2. Xe con, xe tải.",
          "3. Xe tải, xe mô tô."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-222.jpeg",
        "page": 92,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe con, xe tải.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con, xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con, xe tải.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe con, xe tải."
      },
      {
        "id": 125,
        "pdfNum": 125,
        "official600Id": 261,
        "chapter": "Kỹ thuật lái xe",
        "question": "Để tránh đổ, ngã khi điều khiển xe mô tô hai bánh ở nơi đường xấu, nhỏ và hẹp, người lái xe cần xử lý như thế nào?",
        "options": [
          "1. Đi ở tốc độ thấp, quan sát liên tục khoảng cách từ 05 m đến 10 m phía trước để điều chỉnh sớm hướng di chuyển.",
          "2. Trong quá trình di chuyển không nên dùng phanh trước tránh làm khóa bánh dẫn hướng.",
          "3. Không được lắc người sang trái hoặc phải nhiều, trọng tâm cơ thể cần trùng với trọng tâm của xe.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 43,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 12,
        "pdfNum": 12,
        "official600Id": 12,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
        "options": [
          "1. Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
          "2. Người điều khiển xe máy chuyên dùng.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 6,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 174,
        "pdfNum": 174,
        "official600Id": 391,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào chỉ dẫn \"Được ưu tiên qua đường hẹp\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Biển 2 và biển 3."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-174.jpeg",
        "page": 67,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 47,
        "pdfNum": 47,
        "official600Id": 57,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi chuyển làn đường, người lái xe phải bật đèn tín hiệu báo rẽ như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Khi bắt đầu chuyển làn đường.",
          "2. Trước khi thay đổi làn đường.",
          "3. Sau khi thay đổi làn đường."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 17,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Trước khi thay đổi làn đường.\"\n• Vì sao đúng: Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.\n• Vì sao phương án khác sai: Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "whyCorrect": "Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.",
        "whyWrong": "Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "correctAnswerText": "Trước khi thay đổi làn đường."
      },
      {
        "id": 153,
        "pdfNum": 153,
        "official600Id": 362,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển? 1 2",
        "options": [
          "1. Biển 1.",
          "2. Biển 2."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-153.png",
        "page": 57,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 138,
        "pdfNum": 138,
        "official600Id": 324,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-138.jpeg",
        "page": 50,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 216,
        "pdfNum": 216,
        "official600Id": 486,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
        "options": [
          "1. Xe khách, xe tải, xe mô tô.",
          "2. Xe tải, xe mô tô.",
          "3. Chỉ xe con."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-216.jpeg",
        "page": 89,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Chỉ xe con.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Chỉ xe con.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Chỉ xe con.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Chỉ xe con."
      },
      {
        "id": 91,
        "pdfNum": 91,
        "official600Id": 140,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có giấy phép lái xe chưa bị trừ hết 12 điểm, được phục hồi điểm giấy phép lái xe trong trường hợp nào sau đây?",
        "options": [
          "1. Không được phục hồi.",
          "2. Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 31,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất."
      },
      {
        "id": 235,
        "pdfNum": 236,
        "official600Id": 539,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
        "options": [
          "1. Cả ba hướng.",
          "2. Hướng 1 và 2.",
          "3. Hướng 1 và 3.",
          "4. Hướng 2 và 3."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-235.jpeg",
        "page": 98,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Hướng 1 và 3.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 1 và 3.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 1 và 3.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Hướng 1 và 3."
      },
      {
        "id": 6,
        "pdfNum": 6,
        "official600Id": 6,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông đường bộ được hiểu như thế nào là đúng?",
        "options": [
          "1. Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.",
          "2. Là người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 4,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng."
      },
      {
        "id": 107,
        "pdfNum": 107,
        "official600Id": 193,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Khi tham gia giao thông việc sử dụng còi xe nên dùng như thế nào để thể hiện là người có văn hóa giao thông?",
        "options": [
          "1. Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.",
          "2. Bấm còi liên tục để các xe khác nhường đường.",
          "3. Bấm còi to khi đi qua khu vực đông dân cư.",
          "4. Không cần dùng còi, tránh gây tiếng ồn là văn minh."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 37,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.\"\n• Vì sao đúng: Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.\n• Vì sao phương án khác sai: Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "whyCorrect": "Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.",
        "whyWrong": "Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "correctAnswerText": "Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định."
      },
      {
        "id": 240,
        "pdfNum": 241,
        "official600Id": 556,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn có được phép vượt xe mô tô phía trước không?",
        "options": [
          "1. Cho phép.",
          "2. Không được vượt."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-240.jpeg",
        "page": 101,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Không được vượt.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Không được vượt."
      },
      {
        "id": 36,
        "pdfNum": 36,
        "official600Id": 44,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?",
        "options": [
          "1. Đi trên làn đường bên phải trong cùng.",
          "2. Đi trên làn đường bên trái.",
          "3. Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 14,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Đi trên làn đường bên trái.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đi trên làn đường bên trái.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đi trên làn đường bên trái.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Đi trên làn đường bên trái."
      },
      {
        "id": 155,
        "pdfNum": 155,
        "official600Id": 460,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo dưới đây có ý nghĩa như thế nào?",
        "options": [
          "1. Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
          "2. Báo hiệu đường cụt phía trước.",
          "3. Báo hiệu nút giao gần nhất phía trước.",
          "4. Báo hiệu trạm dừng nghỉ phía trước."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-155.jpeg",
        "page": 58,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp)."
      },
      {
        "id": 177,
        "pdfNum": 177,
        "official600Id": 397,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-177.jpeg",
        "page": 69,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 134,
        "pdfNum": 134,
        "official600Id": 317,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm các phương tiện rẽ phải?",
        "options": [
          "1. Biển 1 và biển 2.",
          "2. Biển 1 và biển 3.",
          "3. Biển 2 và biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-134.jpeg",
        "page": 48,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 1 và biển 2."
      },
      {
        "id": 1,
        "pdfNum": 1,
        "official600Id": 1,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Phần của đường bộ được sử dụng cho phương tiện giao thông đường bộ đi lại là gì?",
        "options": [
          "1. Phần mặt đường và lề đường.",
          "2. Phần đường xe chạy.",
          "3. Phần đường xe cơ giới."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 3,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Phần đường xe chạy.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phần đường xe chạy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phần đường xe chạy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Phần đường xe chạy."
      },
      {
        "id": 78,
        "pdfNum": 78,
        "official600Id": 102,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người tham gia giao thông đường bộ phải dừng lại về bên phải đường của mình trước vạch dừng xe tại đường ngang, cầu chung đường sắt khi có báo hiệu nào dưới đây?",
        "options": [
          "1. Hiệu lệnh của nhân viên gác chắn.",
          "2. Đèn đỏ sáng nhấp nháy, chuông kêu.",
          "3. Chắn đường bộ đang dịch chuyển hoặc đã đóng.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": true,
        "image": null,
        "page": 27,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 242,
        "pdfNum": 243,
        "official600Id": 563,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe khách, xe tải.",
          "2. Xe khách, xe con.",
          "3. Xe con, xe tải.",
          "4. Xe khách, xe tải, xe con."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-242.jpeg",
        "page": 102,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe khách, xe tải.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe khách, xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe khách, xe tải.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe khách, xe tải."
      },
      {
        "id": 61,
        "pdfNum": 61,
        "official600Id": 75,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trường hợp người được chở trên xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô và các loại xe tương tự xe gắn máy không đội \"mũ bảo hiểm cho người đi mô tô, xe máy\" hoặc không cài quai đúng quy cách (trừ trường hợp chở người bệnh đi cấp cứu, trẻ em dưới 06 tuổi, áp giải người có hành vi vi phạm pháp luật) thì việc xử phạt vi phạm hành chính được quy định như thế nào?",
        "options": [
          "1. Không bị xử phạt chỉ bị nhắc nhở.",
          "2. Người được chở không bị xử phạt, chỉ xử phạt người điều khiển xe mô tô, xe gắn máy.",
          "3. Người được chở bị xử phạt, không xử phạt người điều khiển xe mô tô, xe gắn máy.",
          "4. Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 21,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy."
      },
      {
        "id": 77,
        "pdfNum": 77,
        "official600Id": 100,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Tại đường ngang, cầu chung đường sắt, khi có hiệu lệnh của nhân viên gác chắn, đèn đỏ sáng nhấp nháy, chuông kêu, chắn đường bộ đang dịch chuyển hoặc đã đóng, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
        "options": [
          "1. Dừng lại về bên trái đường của mình, trước vạch dừng xe.",
          "2. Dừng lại giữa đường của mình, trước vạch dừng xe.",
          "3. Dừng lại về bên phải đường của mình, trước vạch dừng xe."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 27,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Dừng lại về bên phải đường của mình, trước vạch dừng xe.\"\n• Vì sao đúng: Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.\n• Vì sao phương án khác sai: Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "whyCorrect": "Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.",
        "whyWrong": "Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "correctAnswerText": "Dừng lại về bên phải đường của mình, trước vạch dừng xe."
      },
      {
        "id": 131,
        "pdfNum": 131,
        "official600Id": 313,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm quay đầu xe?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Không biển nào.",
          "4. Cả hai biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-131.jpeg",
        "page": 46,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 141,
        "pdfNum": 141,
        "official600Id": 329,
        "chapter": "Báo hiệu đường bộ",
        "question": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả ba biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-141.jpeg",
        "page": 51,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      }
    ]
  },
  "a": {
    "title": "Thi Thử Lý Thuyết Mô Tô Hạng A (Phân Khối Lớn)",
    "subtitle": "Bộ 250 câu mô tô PKL Hạng A chuẩn (25 câu / 19 phút - Đạt 23/25)",
    "timeLimit": 1140,
    "passScore": 23,
    "total": 25,
    "questions": [
      {
        "id": 64,
        "pdfNum": 64,
        "official600Id": 80,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi lái xe trong đô thị và khu đông dân cư trong thời gian từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau, nếu cần vượt một xe khác, người lái xe phải báo hiệu như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Chỉ được báo hiệu bằng còi.",
          "2. Phải báo hiệu bằng cả còi và đèn.",
          "3. Chỉ được báo hiệu bằng đèn."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 22,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Chỉ được báo hiệu bằng đèn.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Chỉ được báo hiệu bằng đèn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Chỉ được báo hiệu bằng đèn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Chỉ được báo hiệu bằng đèn."
      },
      {
        "id": 86,
        "pdfNum": 86,
        "official600Id": 124,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Xe mô tô hai bánh có dung tích xi-lanh 125 cm 3 hoặc có công suất động cơ điện đến 11 kW.",
          "2. Xe mô tô ba bánh.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 30,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe mô tô ba bánh.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe mô tô ba bánh.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe mô tô ba bánh.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Xe mô tô ba bánh."
      },
      {
        "id": 90,
        "pdfNum": 90,
        "official600Id": 138,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi tham gia giao thông đường bộ, người lái xe phải mang theo các giấy tờ gì?",
        "options": [
          "1. Chứng nhận đăng ký xe hoặc bản sao Chứng nhận đăng ký xe có chứng thực kèm bản gốc giấy tờ xác nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài còn hiệu lực trong trường hợp xe đang được thế chấp tại tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.",
          "2. Giấy phép lái xe phù hợp với loại xe đang điều khiển; chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường đối với xe cơ giới theo quy định của pháp luật; chứng nhận bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
          "3. Trường hợp các giấy tờ nêu trên đã được tích hợp vào tài khoản định danh điện tử thì việc xuất trình, kiểm tra có thể thực hiện thông qua tài khoản định danh điện tử.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 31,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 65,
        "pdfNum": 65,
        "official600Id": 81,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
        "options": [
          "1. Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt.",
          "2. Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
          "3. Cho xe đi sát về bên trái của phần đường xe chạy và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 23,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt."
      },
      {
        "id": 177,
        "pdfNum": 177,
        "official600Id": 397,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-177.jpeg",
        "page": 69,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 231,
        "pdfNum": 232,
        "official600Id": 527,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe khách.",
          "2. Xe mô tô.",
          "3. Xe con.",
          "4. Xe con và xe mô tô."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-231.jpeg",
        "page": 96,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe con.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe con.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe con.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe con."
      },
      {
        "id": 198,
        "pdfNum": 198,
        "official600Id": 440,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Không biển nào."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-198.jpeg",
        "page": 79,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 19,
        "pdfNum": 19,
        "official600Id": 26,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Theo Luật Phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
        "options": [
          "1. Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
          "2. Người được chở trên xe cơ giới.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": true,
        "image": null,
        "page": 8,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy."
      },
      {
        "id": 233,
        "pdfNum": 234,
        "official600Id": 529,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, xe nào được phép đi?",
        "options": [
          "1. Xe mô tô, xe con.",
          "2. Xe con, xe tải.",
          "3. Xe mô tô, xe tải.",
          "4. Cả ba xe."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-233.jpeg",
        "page": 97,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe mô tô, xe tải.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe mô tô, xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe mô tô, xe tải.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe mô tô, xe tải."
      },
      {
        "id": 181,
        "pdfNum": 181,
        "official600Id": 401,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào dưới đây là biển \"Cầu hẹp\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-181.jpeg",
        "page": 71,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 194,
        "pdfNum": 194,
        "official600Id": 435,
        "chapter": "Báo hiệu đường bộ",
        "question": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối đa cho phép\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-194.jpeg",
        "page": 77,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 237,
        "pdfNum": 238,
        "official600Id": 566,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe con (A), xe con (B), xe tải (D).",
          "2. Xe tải (D), xe con (E), xe buýt (G).",
          "3. Xe tải ( D), xe con (B).",
          "4. Xe con (B), xe con (C)."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-237.jpeg",
        "page": 99,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe tải ( D), xe con (B).\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải ( D), xe con (B).\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải ( D), xe con (B).\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe tải ( D), xe con (B)."
      },
      {
        "id": 214,
        "pdfNum": 214,
        "official600Id": 476,
        "chapter": "Báo hiệu đường bộ",
        "question": "Vạch mũi tên chỉ hướng trên mặt đường nào dưới đây cho phép xe chỉ được đi thẳng và rẽ phải?",
        "options": [
          "1. Vạch 1.",
          "2. Vạch 2 và vạch 3.",
          "3. Vạch 3.",
          "4. Vạch 1 và vạch 2."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-214.png",
        "page": 87,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Vạch 3.\"\n• Vì sao đúng: Quy chuẩn vạch kẻ đường: Vạch màu vàng phân chia hai chiều xe chạy ngược chiều; vạch màu trắng phân chia các làn xe cùng chiều. Vạch nét đứt được phép đè vạch, vạch nét liền cấm đè vạch.\n• Vì sao phương án khác sai: Các phương án khác nhầm lẫn màu sắc hoặc hiệu lực cho phép đè vạch của vạch liền và vạch đứt.",
        "whyCorrect": "Quy chuẩn vạch kẻ đường: Vạch màu vàng phân chia hai chiều xe chạy ngược chiều; vạch màu trắng phân chia các làn xe cùng chiều. Vạch nét đứt được phép đè vạch, vạch nét liền cấm đè vạch.",
        "whyWrong": "Các phương án khác nhầm lẫn màu sắc hoặc hiệu lực cho phép đè vạch của vạch liền và vạch đứt.",
        "correctAnswerText": "Vạch 3."
      },
      {
        "id": 184,
        "pdfNum": 184,
        "official600Id": 413,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào dưới đây báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-184.jpeg",
        "page": 72,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 223,
        "pdfNum": 223,
        "official600Id": 561,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Các xe đi theo hướng mũi tên, những xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe tải, xe con.",
          "2. Xe khách, xe con.",
          "3. Xe khách, xe tải."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-223.jpeg",
        "page": 92,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe khách, xe tải.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe khách, xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe khách, xe tải.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe khách, xe tải."
      },
      {
        "id": 30,
        "pdfNum": 30,
        "official600Id": 37,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Người tham gia giao thông đường bộ ở phía sau Cảnh sát giao thông được đi, các hướng khác phải dừng lại.",
          "2. Người tham gia giao thông đường bộ được rẽ phải theo chiều mũi tên màu xanh ở bục Cảnh sát giao thông.",
          "3. Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.",
          "4. Người tham gia giao thông đường bộ ở phía trước Cảnh sát giao thông phải dừng lại, các hướng khác được đi."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-30.jpeg",
        "page": 12,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau."
      },
      {
        "id": 46,
        "pdfNum": 46,
        "official600Id": 56,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trước khi cho xe chuyển hướng, người lái xe phải làm gì để bảo đảm an toàn giao thông?",
        "options": [
          "1. Phải quan sát, bảo đảm khoảng cách an toàn với xe phía sau.",
          "2. Giảm tốc độ và có tín hiệu báo hướng rẽ.",
          "3. Chuyển dần sang làn gần nhất với hướng rẽ. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 17,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 183,
        "pdfNum": 183,
        "official600Id": 412,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-183.jpeg",
        "page": 72,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 227,
        "pdfNum": 227,
        "official600Id": 509,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
        "options": [
          "1. Chỉ xe mô tô.",
          "2. Chỉ xe tải.",
          "3. Cả ba xe.",
          "4. Chỉ xe mô tô và xe tải."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-227.jpeg",
        "page": 94,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả ba xe.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Cả ba xe.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Cả ba xe.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Cả ba xe."
      },
      {
        "id": 123,
        "pdfNum": 123,
        "official600Id": 259,
        "chapter": "Kỹ thuật lái xe",
        "question": "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?",
        "options": [
          "1. Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
          "2. Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
          "3. Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
          "4. Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 43,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng."
      },
      {
        "id": 12,
        "pdfNum": 12,
        "official600Id": 12,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
        "options": [
          "1. Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
          "2. Người điều khiển xe máy chuyên dùng.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 6,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 45,
        "pdfNum": 45,
        "official600Id": 54,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Nơi nào cấm quay đầu xe?",
        "options": [
          "1. Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm.",
          "2. Tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất, trên đường cao tốc, trong hầm đường bộ, trên đường một chiều.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 16,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 106,
        "pdfNum": 106,
        "official600Id": 192,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Trong các hành vi dưới đây, người lái xe có văn hóa giao thông phải ứng xử như thế nào?",
        "options": [
          "1. Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
          "2. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
          "3. Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng ít rượu, bia thì có thể lái xe."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 36,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe."
      },
      {
        "id": 217,
        "pdfNum": 217,
        "official600Id": 534,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Xe khách và xe tải, xe con.",
          "2. Xe tải, xe khách, xe con.",
          "3. Xe con, xe khách, xe tải."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-217.jpeg",
        "page": 89,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe khách và xe tải, xe con.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe khách và xe tải, xe con.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe khách và xe tải, xe con.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe khách và xe tải, xe con."
      },
      {
        "id": 135,
        "pdfNum": 135,
        "official600Id": 318,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm các phương tiện rẽ trái?",
        "options": [
          "1. Biển 1 và biển 2.",
          "2. Biển 1 và biển 3.",
          "3. Biển 2 và biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/motorcycle/cau-moto-135.jpeg",
        "page": 48,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 1 và biển 2."
      }
    ]
  },
  "b": {
    "title": "Thi Thử Lý Thuyết Ô Tô Hạng B (Số Tự Động & Số Sàn)",
    "subtitle": "Ô tô chở người đến 8 chỗ & tải dưới 3.500kg (30 câu / 20 phút - Đạt 27/30)",
    "timeLimit": 1200,
    "passScore": 27,
    "total": 30,
    "questions": [
      {
        "id": 447,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Đường phía trước có làn đường dành cho ô tô khách\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-447.png",
        "page": 118,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 367,
        "chapter": "Báo hiệu đường bộ",
        "question": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-367.jpeg",
        "page": 92,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 132,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm; các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "2. Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe).",
          "3. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
          "4. Ý 1 và ý 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 31,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Ý 1 và ý 2.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Ý 1 và ý 2.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Ý 1 và ý 2.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Ý 1 và ý 2."
      },
      {
        "id": 516,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào phải nhường đường trong trường hợp này?",
        "options": [
          "1. Xe khách.",
          "2. Xe tải."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-516.jpeg",
        "page": 146,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe khách.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe khách.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe khách.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe khách."
      },
      {
        "id": 303,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm máy kéo?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2 và biển 3.",
          "3. Biển 1 và biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-303.jpeg",
        "page": 71,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2 và biển 3.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2 và biển 3.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2 và biển 3.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 2 và biển 3."
      },
      {
        "id": 325,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào là biển \"Cấm đi ngược chiều\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả ba biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-325.jpeg",
        "page": 79,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 234,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
        "options": [
          "1. Quan sát tình hình giao thông phía trước, phía sau và phía bên mở cửa xe, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
          "2. Mở cánh cửa và quan sát tình hình giao thông phía trước, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
          "3. Mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": true,
        "image": null,
        "page": 55,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Quan sát tình hình giao thông phía trước, phía sau và phía bên mở cửa xe, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Quan sát tình hình giao thông phía trước, phía sau và phía bên mở cửa xe, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô."
      },
      {
        "id": 107,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
        "options": [
          "1. Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
          "2. Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
          "3. Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 25,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Cả ba ý trên.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Cả ba ý trên.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 9,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe thô sơ?",
        "options": [
          "1. Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.",
          "2. Xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
          "3. Xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 6,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự."
      },
      {
        "id": 187,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Người lái xe không điều khiển xe đi đúng làn đường quy định, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm được coi là hành vi nào trong các hành vi dưới đây?",
        "options": [
          "1. Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ.",
          "2. Là thiếu văn hóa giao thông."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 44,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ.\"\n• Vì sao đúng: Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.\n• Vì sao phương án khác sai: Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "whyCorrect": "Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.",
        "whyWrong": "Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "correctAnswerText": "Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ."
      },
      {
        "id": 341,
        "chapter": "Báo hiệu đường bộ",
        "question": "Khi gặp biển số 1, xe ô tô tải có được đi vào không?",
        "options": [
          "1. Được đi vào.",
          "2. Không được đi vào."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-341.jpeg",
        "page": 84,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Được đi vào.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Được đi vào.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Được đi vào.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Được đi vào."
      },
      {
        "id": 573,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn xử lý như thế nào trong trường hợp này?",
        "options": [
          "1. Tăng tốc độ, rẽ phải trước xe con màu xanh phía trước và người đi bộ.",
          "2. Giảm tốc độ, để người đi bộ qua đường và rẽ phải trước xe con màu xanh.",
          "3. Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-573.jpeg",
        "page": 174,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh."
      },
      {
        "id": 511,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, hướng nào xe không được phép đi?",
        "options": [
          "1. Hướng 2 và 5.",
          "2. Chỉ hướng 1."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-511.jpeg",
        "page": 143,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Chỉ hướng 1.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Chỉ hướng 1.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Chỉ hướng 1.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Chỉ hướng 1."
      },
      {
        "id": 177,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Việc lưu hành xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải tham gia giao thông tại Việt Nam, xe cơ giới nước ngoài do người nước ngoài đưa vào Việt Nam du lịch được quy định như như thế nào?",
        "options": [
          "1. Phải chấp hành quy định của pháp luật về trật tự, an toàn giao thông đường bộ của Việt Nam. Trường hợp điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên có quy định khác thì áp dụng theo điều ước quốc tế đó.",
          "2. Tham gia giao thông đúng trong phạm vi, tuyến đường, thời gian đã được cơ quan có thẩm quyền của Việt Nam cấp phép.",
          "3. Xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải phải đi theo đoàn và có người, phương tiện hỗ trợ, hướng dẫn giao thông.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 41,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 399,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào chỉ dẫn cho người tham gia giao thông biết vị trí và khoảng cách có làn đường cứu nạn hay làn thoát xe khẩn cấp?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-399.jpeg",
        "page": 102,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 504,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Xe khách, xe tải, xe mô tô, xe con.",
          "2. Xe con, xe khách, xe tải, xe mô tô.",
          "3. Xe mô tô, xe tải, xe khách, xe con.",
          "4. Xe mô tô, xe tải, xe con, xe khách."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-504.jpeg",
        "page": 140,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe mô tô, xe tải, xe khách, xe con.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe mô tô, xe tải, xe khách, xe con.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe mô tô, xe tải, xe khách, xe con.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe mô tô, xe tải, xe khách, xe con."
      },
      {
        "id": 595,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Khi gặp xe ngược chiều bật đèn pha trong tình huống dưới dây, bạn xử lý như thế nào?",
        "options": [
          "1. Bật đèn chiếu xa, tăng tốc độ vượt xe cùng chiều.",
          "2. Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.",
          "3. Giữ nguyên đèn chiếu gần, tăng tốc độ vượt xe cùng chiều."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-595.jpeg",
        "page": 185,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước."
      },
      {
        "id": 431,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển này có ý nghĩa như thế nào?",
        "options": [
          "1. Chỉ hướng đi phải theo.",
          "2. Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.",
          "3. Chỉ hướng đường phải theo."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-431.png",
        "page": 113,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo."
      },
      {
        "id": 179,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Xe vận chuyển hàng siêu trường, siêu trọng phải thực hiện các quy định nào dưới đây để bảo đảm an toàn giao thông?",
        "options": [
          "1. Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.",
          "2. Phải chạy với tốc độ quy định trong giấy phép; phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường dành cho giao thông công cộng."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 41,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ."
      },
      {
        "id": 7,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người lái xe được hiểu như thế nào là đúng?",
        "options": [
          "1. Là người điều khiển xe cơ giới.",
          "2. Là người điều khiển xe thô sơ.",
          "3. Là người điều khiển xe máy chuyên dùng."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 6,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Là người điều khiển xe cơ giới.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là người điều khiển xe cơ giới.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là người điều khiển xe cơ giới.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là người điều khiển xe cơ giới."
      },
      {
        "id": 339,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển số 3 có ý nghĩa như thế nào?",
        "options": [
          "1. Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.",
          "2. Hạn chế khối lượng hàng hóa chở trên xe.",
          "3. Hạn chế tải trọng trên trục xe."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-339.jpeg",
        "page": 83,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua."
      },
      {
        "id": 450,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển.",
          "4. Không biển nào."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-450.png",
        "page": 119,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 149,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 90 km/h?",
        "options": [
          "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
          "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
          "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 34,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn."
      },
      {
        "id": 292,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Máy phát điện được trang bị trên xe ô tô có tác dụng gì dưới đây?",
        "options": [
          "1. Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
          "2. Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
          "3. Hỗ trợ người lái xe khởi hành ngang dốc.",
          "4. Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 67,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy."
      },
      {
        "id": 123,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?",
        "options": [
          "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm 3 .",
          "2. Xe gắn máy.",
          "3. Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 29,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe gắn máy.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe gắn máy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe gắn máy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Xe gắn máy."
      },
      {
        "id": 217,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi điều khiển xe ô tô rẽ trái, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "options": [
          "1. Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái; giảm tốc độ, quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái và điều khiển xe từ từ rẽ trái.",
          "2. Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 51,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái; giảm tốc độ, quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái và điều khiển xe từ từ rẽ trái.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái; giảm tốc độ, quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái và điều khiển xe từ từ rẽ trái.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái; giảm tốc độ, quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái và điều khiển xe từ từ rẽ trái.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái; giảm tốc độ, quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái và điều khiển xe từ từ rẽ trái."
      },
      {
        "id": 196,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Khi sơ cứu ban đầu cho người bị tai nạn giao thông đường bộ không còn hô hấp, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
        "options": [
          "1. Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân; thực hiện các biện pháp hô hấp nhân tạo.",
          "2. Thực hiện các biện pháp hô hấp nhân tạo."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 46,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân; thực hiện các biện pháp hô hấp nhân tạo.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân; thực hiện các biện pháp hô hấp nhân tạo."
      },
      {
        "id": 221,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để bảo đảm an toàn?",
        "options": [
          "1. Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
          "2. Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 52,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác."
      },
      {
        "id": 412,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-412.jpeg",
        "page": 107,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 508,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
        "options": [
          "1. Cả hai xe.",
          "2. Không xe nào vi phạm.",
          "3. Chỉ xe mô tô vi phạm.",
          "4. Chỉ xe tải vi phạm."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-508.jpeg",
        "page": 142,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Cả hai xe.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Cả hai xe.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Cả hai xe.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Cả hai xe."
      }
    ]
  },
  "c1": {
    "title": "Thi Thử Lý Thuyết Ô Tô Hạng C1 (Xe Tải 3.5t - 7.5t)",
    "subtitle": "Xe ô tô tải 3.500kg - 7.500kg (35 câu / 22 phút - Đạt 32/35)",
    "timeLimit": 1320,
    "passScore": 32,
    "total": 35,
    "questions": [
      {
        "id": 479,
        "chapter": "Báo hiệu đường bộ",
        "question": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
        "options": [
          "1. Vạch 1.",
          "2. Vạch 2.",
          "3. Vạch 3.",
          "4. Vạch 1 và vạch 3."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-479.png",
        "page": 129,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Vạch 1 và vạch 3.\"\n• Vì sao đúng: Quy chuẩn vạch kẻ đường: Vạch màu vàng phân chia hai chiều xe chạy ngược chiều; vạch màu trắng phân chia các làn xe cùng chiều. Vạch nét đứt được phép đè vạch, vạch nét liền cấm đè vạch.\n• Vì sao phương án khác sai: Các phương án khác nhầm lẫn màu sắc hoặc hiệu lực cho phép đè vạch của vạch liền và vạch đứt.",
        "whyCorrect": "Quy chuẩn vạch kẻ đường: Vạch màu vàng phân chia hai chiều xe chạy ngược chiều; vạch màu trắng phân chia các làn xe cùng chiều. Vạch nét đứt được phép đè vạch, vạch nét liền cấm đè vạch.",
        "whyWrong": "Các phương án khác nhầm lẫn màu sắc hoặc hiệu lực cho phép đè vạch của vạch liền và vạch đứt.",
        "correctAnswerText": "Vạch 1 và vạch 3."
      },
      {
        "id": 519,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, những hướng nào xe ô tô con được phép đi?",
        "options": [
          "1. Hướng 1.",
          "2. Hướng 1, 3 và 4.",
          "3. Hướng 2, 3 và 4.",
          "4. Cả bốn hướng."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-519.jpeg",
        "page": 147,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Hướng 1, 3 và 4.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 1, 3 và 4.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 1, 3 và 4.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Hướng 1, 3 và 4."
      },
      {
        "id": 18,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Theo chức năng phục vụ thì đường bộ được phân loại như thế nào?",
        "options": [
          "1. Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
          "2. Đường chính, đường nhánh, đường gom, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
          "3. Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 8,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác."
      },
      {
        "id": 273,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Ống xả lắp trên xe ô tô phải bảo đảm yêu cầu an toàn kỹ thuật nào dưới đây?",
        "options": [
          "1. Ống xả không được đặt ở vị trí có thể gây cháy xe hoặc ảnh hưởng đến người ngồi trên xe và gây cản trở hoạt động của hệ thống khác.",
          "2. Miệng thoát khí thải của ống xả không được hướng về phía trước và không được hướng về bên phải theo chiều tiến của xe.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 63,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 330,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-330.jpeg",
        "page": 80,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 499,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo tín hiệu đèn, xe nào được phép đi?",
        "options": [
          "1. Xe con và xe khách.",
          "2. Xe mô tô."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-499.jpeg",
        "page": 137,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe con và xe khách.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con và xe khách.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con và xe khách.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe con và xe khách."
      },
      {
        "id": 566,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe con (A), xe con (B), xe tải (D).",
          "2. Xe tải (D), xe con (E), xe buýt (G).",
          "3. Xe tải ( D), xe con (B).",
          "4. Xe con (B), xe con (C)."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-566.jpeg",
        "page": 171,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe tải ( D), xe con (B).\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải ( D), xe con (B).\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải ( D), xe con (B).\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe tải ( D), xe con (B)."
      },
      {
        "id": 347,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa như thế nào?",
        "options": [
          "1. Báo khoảng cách đến nơi cấm bóp còi.",
          "2. Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
          "3. Báo cấm dùng còi có độ vang xa 500m."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-347.jpeg",
        "page": 86,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển."
      },
      {
        "id": 177,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Việc lưu hành xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải tham gia giao thông tại Việt Nam, xe cơ giới nước ngoài do người nước ngoài đưa vào Việt Nam du lịch được quy định như như thế nào?",
        "options": [
          "1. Phải chấp hành quy định của pháp luật về trật tự, an toàn giao thông đường bộ của Việt Nam. Trường hợp điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên có quy định khác thì áp dụng theo điều ước quốc tế đó.",
          "2. Tham gia giao thông đúng trong phạm vi, tuyến đường, thời gian đã được cơ quan có thẩm quyền của Việt Nam cấp phép.",
          "3. Xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải phải đi theo đoàn và có người, phương tiện hỗ trợ, hướng dẫn giao thông.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 41,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 46,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Vượt xe là gì?",
        "options": [
          "1. Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.",
          "2. Là tình huống giao thông trên đường có từ hai làn đường dành cho xe cơ giới cùng chiều trở lên được phân biệt bằng vạch kẻ đường, xe đi phía sau di chuyển lên trước xe phía trước theo quy tắc sử dụng làn đường."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 13,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước."
      },
      {
        "id": 214,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "options": [
          "1. Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ.",
          "2. Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
          "3. Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, sử dụng phanh đỗ."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 50,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ.\"\n• Vì sao đúng: Xe xuống dốc phải nhường đường cho xe đang lên dốc vì xe lên dốc cần đà và khó xử lý hơn khi phải dừng lại giữa dốc.\n• Vì sao phương án khác sai: Bắt xe lên dốc phải dừng lại nhường đường là sai nguyên tắc an toàn, dễ gây trôi dốc và chết máy.",
        "whyCorrect": "Xe xuống dốc phải nhường đường cho xe đang lên dốc vì xe lên dốc cần đà và khó xử lý hơn khi phải dừng lại giữa dốc.",
        "whyWrong": "Bắt xe lên dốc phải dừng lại nhường đường là sai nguyên tắc an toàn, dễ gây trôi dốc và chết máy.",
        "correctAnswerText": "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ."
      },
      {
        "id": 366,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo dưới đây có ý nghĩa như thế nào?",
        "options": [
          "1. Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
          "2. Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-366.png",
        "page": 91,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
      },
      {
        "id": 530,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe con vượt xe tải như trường hợp này có đúng không?",
        "options": [
          "1. Đúng.",
          "2. Không đúng."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-530.jpeg",
        "page": 153,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đúng.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Đúng.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Đúng.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Đúng."
      },
      {
        "id": 123,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?",
        "options": [
          "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm 3 .",
          "2. Xe gắn máy.",
          "3. Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 29,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe gắn máy.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe gắn máy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe gắn máy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Xe gắn máy."
      },
      {
        "id": 59,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông không được dừng xe, đỗ xe ở những vị trí nào sau đây?",
        "options": [
          "1. Trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước.",
          "2. Trong phạm vi an toàn của đường sắt.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 16,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 191,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Người lái xe mô tô có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
        "options": [
          "1. Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.",
          "2. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
          "3. Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 45,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách."
      },
      {
        "id": 495,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào được quyền đi trước trong trường hợp này?",
        "options": [
          "1. Xe mô tô.",
          "2. Xe cứu thương đi làm nhiệm vụ cấp cứu."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-495.jpeg",
        "page": 135,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe cứu thương đi làm nhiệm vụ cấp cứu.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe cứu thương đi làm nhiệm vụ cấp cứu.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe cứu thương đi làm nhiệm vụ cấp cứu.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe cứu thương đi làm nhiệm vụ cấp cứu."
      },
      {
        "id": 129,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng C được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "2. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 30,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 279,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Hãy nêu công dụng của động cơ xe ô tô?",
        "options": [
          "1. Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
          "2. Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 64,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô."
      },
      {
        "id": 360,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào là biển \"Tốc độ tối đa cho phép về ban đêm\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-360.jpeg",
        "page": 90,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 386,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Giao nhau với đường ưu tiên\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-386.jpeg",
        "page": 98,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 256,
        "chapter": "Kỹ thuật lái xe",
        "question": "Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào dưới đây để xuống xe để bảo đảm an toàn?",
        "options": [
          "1. Quan sát phía trước, phía sau và bên phía mở cửa để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
          "2. Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 59,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Quan sát phía trước, phía sau và bên phía mở cửa để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Quan sát phía trước, phía sau và bên phía mở cửa để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Quan sát phía trước, phía sau và bên phía mở cửa để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Quan sát phía trước, phía sau và bên phía mở cửa để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, mở hé cửa, sau đó mở ở mức cần thiết để xuống xe."
      },
      {
        "id": 551,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Xe con và xe tải, xe của bạn.",
          "2. Xe của bạn, xe tải, xe con.",
          "3. Xe của bạn và xe con, xe tải.",
          "4. Xe của bạn, xe tải + xe con."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-551.jpeg",
        "page": 163,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe của bạn và xe con, xe tải.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe của bạn và xe con, xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe của bạn và xe con, xe tải.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe của bạn và xe con, xe tải."
      },
      {
        "id": 110,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?",
        "options": [
          "1. Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
          "2. Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
          "3. Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 26,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt."
      },
      {
        "id": 427,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-427.jpeg",
        "page": 111,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai biển.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cả hai biển.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cả hai biển.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Cả hai biển."
      },
      {
        "id": 161,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi tham gia giao thông trên đoạn đường không có biển báo \"cự ly tối thiểu giữa hai xe\", trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ 60 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        "options": [
          "1. 35 m.",
          "2. 55 m.",
          "3. 70 m."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 37,
        "explanation": "• Đáp án đúng: Phương án 1 - \"35 m.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"35 m.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"35 m.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "35 m."
      },
      {
        "id": 509,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
        "options": [
          "1. Chỉ xe mô tô.",
          "2. Chỉ xe tải.",
          "3. Cả ba xe.",
          "4. Chỉ xe mô tô và xe tải."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-509.jpeg",
        "page": 142,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả ba xe.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Cả ba xe.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Cả ba xe.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Cả ba xe."
      },
      {
        "id": 517,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào được quyền đi trước trong trường hợp này?",
        "options": [
          "1. Xe con.",
          "2. Xe mô tô."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-517.jpeg",
        "page": 146,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe mô tô.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe mô tô.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe mô tô.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe mô tô."
      },
      {
        "id": 151,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
        "options": [
          "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
          "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
          "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
          "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 35,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
      },
      {
        "id": 490,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Xe tải, xe con, xe mô tô.",
          "2. Xe con, xe tải, xe mô tô.",
          "3. Xe mô tô, xe con, xe tải.",
          "4. Xe con, xe mô tô, xe tải."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-490.jpeg",
        "page": 133,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe mô tô, xe con, xe tải.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe mô tô, xe con, xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe mô tô, xe con, xe tải.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe mô tô, xe con, xe tải."
      },
      {
        "id": 395,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-395.jpeg",
        "page": 101,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 338,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển số 2 có ý nghĩa như thế nào?",
        "options": [
          "1. Cho phép xe ô tô có tải trọng trục lớn hơn 7 tấn đi qua.",
          "2. Cho phép xe ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-338.jpeg",
        "page": 83,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Cho phép xe ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cho phép xe ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cho phép xe ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Cho phép xe ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua."
      },
      {
        "id": 467,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển này có ý nghĩa như thế nào?",
        "options": [
          "1. Bắt đầu đường cao tốc.",
          "2. Chỉ dẫn địa giới đường cao tốc, chiều dài đường cao tốc.",
          "3. Tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tối thiểu.",
          "4. Ý 1 và ý 3."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-467.jpeg",
        "page": 125,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Ý 1 và ý 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Ý 1 và ý 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Ý 1 và ý 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Ý 1 và ý 3."
      },
      {
        "id": 154,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
        "options": [
          "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
          "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
          "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
          "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 35,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc)."
      },
      {
        "id": 63,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
        "options": [
          "1. Được phép.",
          "2. Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
          "3. Tùy trường hợp.",
          "4. Không được phép."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": true,
        "image": null,
        "page": 16,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Không được phép.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Không được phép."
      }
    ]
  },
  "c": {
    "title": "Thi Thử Lý Thuyết Ô Tô Hạng C (Xe Tải Nặng trên 7.5t)",
    "subtitle": "Xe ô tô tải trọng lớn trên 7.500kg (40 câu / 24 phút - Đạt 36/40)",
    "timeLimit": 1440,
    "passScore": 36,
    "total": 40,
    "questions": [
      {
        "id": 297,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây, dùng để làm gì?",
        "options": [
          "1. Thay lốp xe.",
          "2. Chữa cháy.",
          "3. Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
          "4. Vặn ốc để tháo lắp bánh xe."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-297.jpeg",
        "page": 69,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp."
      },
      {
        "id": 147,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
        "options": [
          "1. Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.",
          "2. Xe gắn máy, xe máy chuyên dùng.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 34,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe."
      },
      {
        "id": 308,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cho phép xe ô tô con được vượt?",
        "options": [
          "1. Biển 1 và biển 2.",
          "2. Biển 2.",
          "3. Biển 1 và biển 3.",
          "4. Biển 2 và biển 3."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-308.jpeg",
        "page": 73,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 1 và biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1 và biển 3."
      },
      {
        "id": 486,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
        "options": [
          "1. Xe khách, xe tải, xe mô tô.",
          "2. Xe tải, xe mô tô.",
          "3. Chỉ xe con."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-486.jpeg",
        "page": 131,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Chỉ xe con.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Chỉ xe con.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Chỉ xe con.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Chỉ xe con."
      },
      {
        "id": 418,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo này có ý nghĩa như thế nào?",
        "options": [
          "1. Báo trước đoạn đường có gió ngang.",
          "2. Báo trước đoạn đường trơn trượt.",
          "3. Báo trước sắp đến bến phà."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-418.png",
        "page": 108,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Báo trước sắp đến bến phà.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo trước sắp đến bến phà.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo trước sắp đến bến phà.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Báo trước sắp đến bến phà."
      },
      {
        "id": 214,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "options": [
          "1. Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ.",
          "2. Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
          "3. Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, sử dụng phanh đỗ."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 50,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ.\"\n• Vì sao đúng: Xe xuống dốc phải nhường đường cho xe đang lên dốc vì xe lên dốc cần đà và khó xử lý hơn khi phải dừng lại giữa dốc.\n• Vì sao phương án khác sai: Bắt xe lên dốc phải dừng lại nhường đường là sai nguyên tắc an toàn, dễ gây trôi dốc và chết máy.",
        "whyCorrect": "Xe xuống dốc phải nhường đường cho xe đang lên dốc vì xe lên dốc cần đà và khó xử lý hơn khi phải dừng lại giữa dốc.",
        "whyWrong": "Bắt xe lên dốc phải dừng lại nhường đường là sai nguyên tắc an toàn, dễ gây trôi dốc và chết máy.",
        "correctAnswerText": "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ."
      },
      {
        "id": 572,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn xử lý như thế nào trong trường hợp này?",
        "options": [
          "1. Tăng tốc độ, rẽ phải trước xe tải và xe đạp.",
          "2. Giảm tốc độ, rẽ phải sau xe tải và xe đạp.",
          "3. Tăng tốc độ, rẽ phải trước xe đạp."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-572.jpeg",
        "page": 174,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Giảm tốc độ, rẽ phải sau xe tải và xe đạp.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giảm tốc độ, rẽ phải sau xe tải và xe đạp.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giảm tốc độ, rẽ phải sau xe tải và xe đạp.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Giảm tốc độ, rẽ phải sau xe tải và xe đạp."
      },
      {
        "id": 565,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
        "options": [
          "1. Xe tải, xe mô tô.",
          "2. Xe khách, xe mô tô.",
          "3. Xe tải, xe con.",
          "4. Xe mô tô, xe con."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-565.jpeg",
        "page": 170,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe khách, xe mô tô.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe khách, xe mô tô.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe khách, xe mô tô.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe khách, xe mô tô."
      },
      {
        "id": 224,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi điều khiển ô tô qua đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "options": [
          "1. Tăng lên số cao, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
          "2. Đạp ly hợp (côn) hết hành trình, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
          "3. Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 53,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước."
      },
      {
        "id": 582,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn xử lý như thế nào trong trường hợp này?",
        "options": [
          "1. Tăng tốc độ và đi thẳng qua ngã tư.",
          "2. Dừng xe trước vạch dừng.",
          "3. Giảm tốc độ và đi thẳng qua ngã tư."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-582.jpeg",
        "page": 179,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Giảm tốc độ và đi thẳng qua ngã tư.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giảm tốc độ và đi thẳng qua ngã tư.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giảm tốc độ và đi thẳng qua ngã tư.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Giảm tốc độ và đi thẳng qua ngã tư."
      },
      {
        "id": 389,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Đường hai chiều\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-389.jpeg",
        "page": 99,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 287,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "options": [
          "1. Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
          "2. Áp suất lốp không đủ.",
          "3. Đang hãm phanh tay.",
          "4. Cần kiểm tra động cơ."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-287.jpeg",
        "page": 66,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cần kiểm tra động cơ.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cần kiểm tra động cơ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cần kiểm tra động cơ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cần kiểm tra động cơ."
      },
      {
        "id": 40,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác.",
          "2. Tăng tốc độ nhanh chóng vượt qua nút giao.",
          "3. Quan sát, giảm tốc độ, từ từ vượt qua nút giao."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 12,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác.\"\n• Vì sao đúng: Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.\n• Vì sao phương án khác sai: Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "whyCorrect": "Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.",
        "whyWrong": "Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "correctAnswerText": "Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác."
      },
      {
        "id": 183,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
        "options": [
          "1. Quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
          "2. Nắm vững và tự giác chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ, lái xe an toàn; thực hiện đầy đủ trách nhiệm với khách hàng; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hợp tác, tương trợ, giúp đỡ đồng nghiệp.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 43,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 154,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
        "options": [
          "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
          "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
          "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
          "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 35,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc)."
      },
      {
        "id": 578,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Phía trước có một xe đang lùi vào nơi đỗ, xe con phía trước đang chuyển sang làn đường bên trái, bạn xử lý như thế nào trong trường hợp này?",
        "options": [
          "1. Nếu phía sau không có xe xin vượt, chuyển sang làn đường bên trái.",
          "2. Nếu phía sau có xe xin vượt, thì giảm tốc độ, ở lại làn đường, dừng lại khi cần thiết.",
          "3. Tăng tốc độ trên làn đường của mình và vượt xe con.",
          "4. Ý 1 và ý 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-578.jpeg",
        "page": 177,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Ý 1 và ý 2.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Ý 1 và ý 2.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Ý 1 và ý 2.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Ý 1 và ý 2."
      },
      {
        "id": 13,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?",
        "options": [
          "1. Là người điều khiển phương tiện tham gia giao thông đường bộ.",
          "2. Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
          "3. Là người tham gia giao thông đường bộ."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 7,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ."
      },
      {
        "id": 151,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
        "options": [
          "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
          "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
          "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
          "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 35,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
      },
      {
        "id": 329,
        "chapter": "Báo hiệu đường bộ",
        "question": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả ba biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-329.jpeg",
        "page": 80,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 332,
        "chapter": "Báo hiệu đường bộ",
        "question": "Gặp biển nào xe xích lô được phép đi vào?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Biển 1 và biển 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-332.jpeg",
        "page": 81,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1 và biển 2."
      },
      {
        "id": 230,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
        "options": [
          "1. Thiếu dầu phanh, phanh tay đang hãm.",
          "2. Hệ thống túi khí an toàn gặp sự cố.",
          "3. Lái xe và người ngồi ghế trước chưa cài dây đai an toàn.",
          "4. Cửa đóng chưa chặt, có cửa chưa đóng."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-230.jpeg",
        "page": 54,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Lái xe và người ngồi ghế trước chưa cài dây đai an toàn.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Lái xe và người ngồi ghế trước chưa cài dây đai an toàn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Lái xe và người ngồi ghế trước chưa cài dây đai an toàn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Lái xe và người ngồi ghế trước chưa cài dây đai an toàn."
      },
      {
        "id": 190,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Người lái xe có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
        "options": [
          "1. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
          "2. Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 44,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật."
      },
      {
        "id": 118,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg?",
        "options": [
          "1. 18 tuổi.",
          "2. 17 tuổi.",
          "3. 16 tuổi."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 28,
        "explanation": "• Đáp án đúng: Phương án 1 - \"18 tuổi.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"18 tuổi.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"18 tuổi.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "18 tuổi."
      },
      {
        "id": 37,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Người tham gia giao thông đường bộ ở phía sau Cảnh sát giao thông được đi, các hướng khác phải dừng lại.",
          "2. Người tham gia giao thông đường bộ được rẽ phải theo chiều mũi tên màu xanh ở bục Cảnh sát giao thông.",
          "3. Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.",
          "4. Người tham gia giao thông đường bộ ở phía trước Cảnh sát giao thông phải dừng lại, các hướng khác được đi."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-37.jpeg",
        "page": 11,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau."
      },
      {
        "id": 548,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe con (B), xe mô tô (C).",
          "2. Xe con (A), xe mô tô (C).",
          "3. Xe con (E), xe mô tô (D).",
          "4. Tất cả các loại xe trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-548.jpeg",
        "page": 162,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe con (E), xe mô tô (D).\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe con (E), xe mô tô (D).\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe con (E), xe mô tô (D).\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe con (E), xe mô tô (D)."
      },
      {
        "id": 366,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo dưới đây có ý nghĩa như thế nào?",
        "options": [
          "1. Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
          "2. Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-366.png",
        "page": 91,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
      },
      {
        "id": 526,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
        "options": [
          "1. Không vi phạm.",
          "2. Vi phạm."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-526.jpeg",
        "page": 151,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Vi phạm.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Vi phạm.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Vi phạm.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Vi phạm."
      },
      {
        "id": 134,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng CE được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
          "2. Các loại xe ô tô quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 31,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc."
      },
      {
        "id": 440,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Không biển nào."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-440.jpeg",
        "page": 116,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 139,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Giấy phép lái xe bị thu hồi trong các trường hợp nào sau đây?",
        "options": [
          "1. Người được cấp giấy phép lái xe không đủ điều kiện sức khỏe theo kết luận của cơ sở khám bệnh, chữa bệnh đối với từng hạng giấy phép lái xe.",
          "2. Giấy phép lái xe được cấp sai quy định.",
          "3. Giấy phép lái xe đã quá thời hạn tạm giữ hoặc hết thời hiệu thi hành quyết định xử phạt vi phạm hành chính theo quy định của pháp luật về xử lý vi phạm hành chính nếu người vi phạm không đến nhận mà không có lý do chính đáng.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 32,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 524,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Những hướng nào xe ô tô tải được phép đi?",
        "options": [
          "1. Cả bốn hướng.",
          "2. Trừ hướng 2.",
          "3. Hướng 2, 3 và 4.",
          "4. Trừ hướng 4."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-524.jpeg",
        "page": 150,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Trừ hướng 2.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Trừ hướng 2.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Trừ hướng 2.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Trừ hướng 2."
      },
      {
        "id": 479,
        "chapter": "Báo hiệu đường bộ",
        "question": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
        "options": [
          "1. Vạch 1.",
          "2. Vạch 2.",
          "3. Vạch 3.",
          "4. Vạch 1 và vạch 3."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-479.png",
        "page": 129,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Vạch 1 và vạch 3.\"\n• Vì sao đúng: Quy chuẩn vạch kẻ đường: Vạch màu vàng phân chia hai chiều xe chạy ngược chiều; vạch màu trắng phân chia các làn xe cùng chiều. Vạch nét đứt được phép đè vạch, vạch nét liền cấm đè vạch.\n• Vì sao phương án khác sai: Các phương án khác nhầm lẫn màu sắc hoặc hiệu lực cho phép đè vạch của vạch liền và vạch đứt.",
        "whyCorrect": "Quy chuẩn vạch kẻ đường: Vạch màu vàng phân chia hai chiều xe chạy ngược chiều; vạch màu trắng phân chia các làn xe cùng chiều. Vạch nét đứt được phép đè vạch, vạch nét liền cấm đè vạch.",
        "whyWrong": "Các phương án khác nhầm lẫn màu sắc hoặc hiệu lực cho phép đè vạch của vạch liền và vạch đứt.",
        "correctAnswerText": "Vạch 1 và vạch 3."
      },
      {
        "id": 379,
        "chapter": "Báo hiệu đường bộ",
        "question": "Các biển này có ý nghĩa như thế nào?",
        "options": [
          "1. Nơi đường sắt giao nhau với đường bộ.",
          "2. Nơi đường sắt giao vuông góc với đường bộ.",
          "3. Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-379.jpeg",
        "page": 96,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn."
      },
      {
        "id": 173,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trước khi xe khởi hành, người lái xe, nhân viên phục vụ trên xe ô tô vận chuyển hành khách có trách nhiệm nào sau đây?",
        "options": [
          "1. Kiểm tra các điều kiện bảo đảm an toàn của xe.",
          "2. Hướng dẫn cho hành khách về an toàn giao thông đường bộ và thoát hiểm khi gặp sự cố.",
          "3. Kiểm tra nhân thân và hành lý của hành khách đi xe.",
          "4. Ý 1 và ý 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 40,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Ý 1 và ý 2.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Ý 1 và ý 2.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Ý 1 và ý 2.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Ý 1 và ý 2."
      },
      {
        "id": 145,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ, trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
        "options": [
          "1. 60 km/h.",
          "2. 50 km/h.",
          "3. 40 km/h."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 33,
        "explanation": "• Đáp án đúng: Phương án 1 - \"60 km/h.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"60 km/h.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"60 km/h.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "60 km/h."
      },
      {
        "id": 367,
        "chapter": "Báo hiệu đường bộ",
        "question": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-367.jpeg",
        "page": 92,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 419,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo này có ý nghĩa như thế nào?",
        "options": [
          "1. Báo hiệu đường có ổ gà, lồi lõm.",
          "2. Báo hiệu đường có gồ giảm tốc phía trước."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-419.png",
        "page": 109,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Báo hiệu đường có ổ gà, lồi lõm.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo hiệu đường có ổ gà, lồi lõm.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo hiệu đường có ổ gà, lồi lõm.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Báo hiệu đường có ổ gà, lồi lõm."
      },
      {
        "id": 334,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo này có ý nghĩa như thế nào?",
        "options": [
          "1. Đường cấm súc vật vận tải hàng hóa.",
          "2. Đường cấm súc vật vận tải hành khách.",
          "3. Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-334.png",
        "page": 82,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua."
      },
      {
        "id": 41,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người lái xe trên đường cần chấp hành quy định về tốc độ tối đa như thế nào?",
        "options": [
          "1. Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
          "2. Chỉ lớn hơn tốc độ tối đa cho phép khi vào ban đêm.",
          "3. Không vượt quá tốc độ tối đa cho phép."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 13,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Không vượt quá tốc độ tối đa cho phép.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Không vượt quá tốc độ tối đa cho phép.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Không vượt quá tốc độ tối đa cho phép.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Không vượt quá tốc độ tối đa cho phép."
      },
      {
        "id": 163,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
        "options": [
          "1. Gặp biển báo nguy hiểm và cảnh báo trên đường.",
          "2. Gặp biển chỉ dẫn trên đường.",
          "3. Gặp biển báo hết mọi lệnh cấm.",
          "4. Gặp biển báo hết hạn chế tốc độ tối đa cho phép."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": true,
        "image": null,
        "page": 38,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Gặp biển báo nguy hiểm và cảnh báo trên đường.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Gặp biển báo nguy hiểm và cảnh báo trên đường."
      }
    ]
  },
  "d1": {
    "title": "Thi Thử Lý Thuyết Ô Tô Hạng D1 (Xe 8 - 16 Chỗ)",
    "subtitle": "Xe ô tô chở người 8 - 16 chỗ (45 câu / 26 phút - Đạt 41/45)",
    "timeLimit": 1560,
    "passScore": 41,
    "total": 45,
    "questions": [
      {
        "id": 333,
        "chapter": "Báo hiệu đường bộ",
        "question": "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-333.jpeg",
        "page": 81,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 336,
        "chapter": "Báo hiệu đường bộ",
        "question": "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
        "options": [
          "1. Được phép.",
          "2. Không được phép."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-336.jpeg",
        "page": 82,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Không được phép.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Không được phép."
      },
      {
        "id": 107,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
        "options": [
          "1. Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
          "2. Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
          "3. Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 25,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Cả ba ý trên.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Cả ba ý trên.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 304,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu cấm xe mô tô ba bánh chở hàng đi qua?",
        "options": [
          "1. Biển 1 và biển 2.",
          "2. Biển 1 và biển 3.",
          "3. Biển 2 và biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-304.jpeg",
        "page": 72,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 1 và biển 2."
      },
      {
        "id": 340,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm máy kéo kéo theo rơ moóc?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-340.jpeg",
        "page": 84,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai biển.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Cả hai biển.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Cả hai biển.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Cả hai biển."
      },
      {
        "id": 355,
        "chapter": "Báo hiệu đường bộ",
        "question": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
        "options": [
          "1. Không được phép.",
          "2. Được phép."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-355.jpeg",
        "page": 89,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Không được phép.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Không được phép."
      },
      {
        "id": 173,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trước khi xe khởi hành, người lái xe, nhân viên phục vụ trên xe ô tô vận chuyển hành khách có trách nhiệm nào sau đây?",
        "options": [
          "1. Kiểm tra các điều kiện bảo đảm an toàn của xe.",
          "2. Hướng dẫn cho hành khách về an toàn giao thông đường bộ và thoát hiểm khi gặp sự cố.",
          "3. Kiểm tra nhân thân và hành lý của hành khách đi xe.",
          "4. Ý 1 và ý 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 40,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Ý 1 và ý 2.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Ý 1 và ý 2.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Ý 1 và ý 2.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Ý 1 và ý 2."
      },
      {
        "id": 374,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu đường bộ giao nhau với đường sắt không có rào chắn?",
        "options": [
          "1. Biển 1 và biển 2.",
          "2. Biển 1 và biển 3.",
          "3. Biển 2 và biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-374.jpeg",
        "page": 94,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 2 và biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2 và biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2 và biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2 và biển 3."
      },
      {
        "id": 94,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người lái xe phải nhanh chóng giảm tốc độ , đi sát lề đường bên phải hoặc dừng lại để nhường đường cho các loại xe nào dưới đây?",
        "options": [
          "1. Xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác; xe của lực lượng quân sự, công an và kiểm sát; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương; xe hộ đê không có tín hiệu ưu tiên theo quy định.",
          "2. Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.",
          "3. Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 23,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang."
      },
      {
        "id": 231,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
        "options": [
          "1. Báo hiệu thiếu dầu phanh.",
          "2. Áp suất lốp không đủ.",
          "3. Đang sử dụng phanh đỗ.",
          "4. Sắp hết nhiên liệu."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-231.jpeg",
        "page": 55,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Sắp hết nhiên liệu.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Sắp hết nhiên liệu.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Sắp hết nhiên liệu.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Sắp hết nhiên liệu."
      },
      {
        "id": 425,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo này có ý nghĩa như thế nào?",
        "options": [
          "1. Báo hiệu khu vực nguy hiểm thường xuyên có sét đánh.",
          "2. Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-425.png",
        "page": 111,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường."
      },
      {
        "id": 67,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được bám, kéo hoặc đẩy các phương tiện khác không?",
        "options": [
          "1. Được phép.",
          "2. Được bám trong trường hợp phương tiện của mình bị hỏng.",
          "3. Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
          "4. Không được phép."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": true,
        "image": null,
        "page": 17,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Không được phép.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Không được phép."
      },
      {
        "id": 505,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe tải.",
          "2. Xe con và mô tô.",
          "3. Cả ba xe.",
          "4. Xe con và xe tải."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-505.jpeg",
        "page": 140,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe tải.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe tải."
      },
      {
        "id": 492,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Trường hợp này xe nào được quyền đi trước?",
        "options": [
          "1. Xe mô tô.",
          "2. Xe con."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-492.jpeg",
        "page": 134,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe con.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe con.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe con.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe con."
      },
      {
        "id": 582,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn xử lý như thế nào trong trường hợp này?",
        "options": [
          "1. Tăng tốc độ và đi thẳng qua ngã tư.",
          "2. Dừng xe trước vạch dừng.",
          "3. Giảm tốc độ và đi thẳng qua ngã tư."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-582.jpeg",
        "page": 179,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Giảm tốc độ và đi thẳng qua ngã tư.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giảm tốc độ và đi thẳng qua ngã tư.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Giảm tốc độ và đi thẳng qua ngã tư.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Giảm tốc độ và đi thẳng qua ngã tư."
      },
      {
        "id": 12,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
        "options": [
          "1. Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
          "2. Người điều khiển xe máy chuyên dùng.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 7,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 179,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Xe vận chuyển hàng siêu trường, siêu trọng phải thực hiện các quy định nào dưới đây để bảo đảm an toàn giao thông?",
        "options": [
          "1. Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.",
          "2. Phải chạy với tốc độ quy định trong giấy phép; phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường dành cho giao thông công cộng."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 41,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ."
      },
      {
        "id": 432,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Không biển nào."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-432.jpeg",
        "page": 113,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Không biển nào.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không biển nào.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không biển nào.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Không biển nào."
      },
      {
        "id": 96,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi có tín hiệu của xe ưu tiên, người và phương tiện tham gia giao thông đường bộ phải tuân thủ quy định nào dưới đây?",
        "options": [
          "1. Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.",
          "2. Tăng tốc độ và đi sát lề đường bên phải để nhường đường.",
          "3. Giảm tốc độ, đi sát lề đường bên trái để nhường đường."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 23,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường."
      },
      {
        "id": 56,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trước khi cho xe chuyển hướng, người lái xe phải làm gì để bảo đảm an toàn giao thông?",
        "options": [
          "1. Phải quan sát, bảo đảm khoảng cách an toàn với xe phía sau.",
          "2. Giảm tốc độ và có tín hiệu báo hướng rẽ.",
          "3. Chuyển dần sang làn gần nhất với hướng rẽ. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 15,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 14,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Dừng xe được hiểu như thế nào là đúng?",
        "options": [
          "1. Là trạng thái đứng yên của xe không giới hạn thời gian để cho người lên, xuống xe, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
          "2. Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác. Khi dừng xe không được tắt máy và không được rời khỏi vị trí lái, trừ trường hợp rời khỏi vị trí lái để đóng, mở cửa xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe nhưng phải sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác.",
          "3. Là trạng thái đứng yên của xe không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 7,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác. Khi dừng xe không được tắt máy và không được rời khỏi vị trí lái, trừ trường hợp rời khỏi vị trí lái để đóng, mở cửa xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe nhưng phải sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác. Khi dừng xe không được tắt máy và không được rời khỏi vị trí lái, trừ trường hợp rời khỏi vị trí lái để đóng, mở cửa xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe nhưng phải sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác. Khi dừng xe không được tắt máy và không được rời khỏi vị trí lái, trừ trường hợp rời khỏi vị trí lái để đóng, mở cửa xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe nhưng phải sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác. Khi dừng xe không được tắt máy và không được rời khỏi vị trí lái, trừ trường hợp rời khỏi vị trí lái để đóng, mở cửa xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe nhưng phải sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác."
      },
      {
        "id": 570,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
        "options": [
          "1. Đi thẳng, rẽ trái.",
          "2. Đi thẳng, rẽ phải.",
          "3. Rẽ trái.",
          "4. Đi thẳng, rẽ phải, rẽ trái."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-570.jpeg",
        "page": 173,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đi thẳng, rẽ trái.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Đi thẳng, rẽ trái.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Đi thẳng, rẽ trái.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Đi thẳng, rẽ trái."
      },
      {
        "id": 281,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Hãy nêu công dụng ly hợp (côn) của xe ô tô?",
        "options": [
          "1. Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe ô tô chuyển động.",
          "2. Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.",
          "3. Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 65,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô."
      },
      {
        "id": 46,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Vượt xe là gì?",
        "options": [
          "1. Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.",
          "2. Là tình huống giao thông trên đường có từ hai làn đường dành cho xe cơ giới cùng chiều trở lên được phân biệt bằng vạch kẻ đường, xe đi phía sau di chuyển lên trước xe phía trước theo quy tắc sử dụng làn đường."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 13,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước."
      },
      {
        "id": 498,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào được quyền đi trước trong trường hợp này?",
        "options": [
          "1. Xe công an đi làm nhiệm vụ khẩn cấp.",
          "2. Xe chữa cháy đi làm nhiệm vụ chữa cháy."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-498.jpeg",
        "page": 137,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe chữa cháy đi làm nhiệm vụ chữa cháy.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe chữa cháy đi làm nhiệm vụ chữa cháy.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe chữa cháy đi làm nhiệm vụ chữa cháy.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe chữa cháy đi làm nhiệm vụ chữa cháy."
      },
      {
        "id": 477,
        "chapter": "Báo hiệu đường bộ",
        "question": "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
        "options": [
          "1. Vạch 1.",
          "2. Vạch 2.",
          "3. Vạch 3.",
          "4. Vạch 1 và vạch 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-477.png",
        "page": 128,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Vạch 1 và vạch 2.\"\n• Vì sao đúng: Quy chuẩn vạch kẻ đường: Vạch màu vàng phân chia hai chiều xe chạy ngược chiều; vạch màu trắng phân chia các làn xe cùng chiều. Vạch nét đứt được phép đè vạch, vạch nét liền cấm đè vạch.\n• Vì sao phương án khác sai: Các phương án khác nhầm lẫn màu sắc hoặc hiệu lực cho phép đè vạch của vạch liền và vạch đứt.",
        "whyCorrect": "Quy chuẩn vạch kẻ đường: Vạch màu vàng phân chia hai chiều xe chạy ngược chiều; vạch màu trắng phân chia các làn xe cùng chiều. Vạch nét đứt được phép đè vạch, vạch nét liền cấm đè vạch.",
        "whyWrong": "Các phương án khác nhầm lẫn màu sắc hoặc hiệu lực cho phép đè vạch của vạch liền và vạch đứt.",
        "correctAnswerText": "Vạch 1 và vạch 2."
      },
      {
        "id": 556,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn có được phép vượt xe mô tô phía trước không?",
        "options": [
          "1. Cho phép.",
          "2. Không được vượt."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-556.jpeg",
        "page": 166,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Không được vượt.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Không được vượt."
      },
      {
        "id": 459,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Tuyến đường cầu vượt cắt qua\"?",
        "options": [
          "1. Biển 1 và biển 2.",
          "2. Biển 1 và biển 3.",
          "3. Biển 2 và biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-459.jpeg",
        "page": 122,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1 và biển 2."
      },
      {
        "id": 127,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe ô tô hạng B được phép điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe).",
          "2. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 30,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 273,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Ống xả lắp trên xe ô tô phải bảo đảm yêu cầu an toàn kỹ thuật nào dưới đây?",
        "options": [
          "1. Ống xả không được đặt ở vị trí có thể gây cháy xe hoặc ảnh hưởng đến người ngồi trên xe và gây cản trở hoạt động của hệ thống khác.",
          "2. Miệng thoát khí thải của ống xả không được hướng về phía trước và không được hướng về bên phải theo chiều tiến của xe.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 63,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 145,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ, trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
        "options": [
          "1. 60 km/h.",
          "2. 50 km/h.",
          "3. 40 km/h."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 33,
        "explanation": "• Đáp án đúng: Phương án 1 - \"60 km/h.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"60 km/h.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"60 km/h.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "60 km/h."
      },
      {
        "id": 208,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi nhả phanh đỗ cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
        "options": [
          "1. Dùng lực tay phải kéo cần phanh tay về phía sau hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
          "2. Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.",
          "3. Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 49,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm."
      },
      {
        "id": 121,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Tuổi tối đa của người lái xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe), xe ô tô chở người giường nằm là bao nhiêu tuổi?",
        "options": [
          "1. Đủ 55 tuổi đối với nam và đủ 50 tuổi đối với nữ.",
          "2. Đủ 55 tuổi đối với nam và nữ.",
          "3. Đủ 57 tuổi đối với nam và đủ 55 tuổi đối với nữ."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 28,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Đủ 57 tuổi đối với nam và đủ 55 tuổi đối với nữ.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đủ 57 tuổi đối với nam và đủ 55 tuổi đối với nữ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đủ 57 tuổi đối với nam và đủ 55 tuổi đối với nữ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Đủ 57 tuổi đối với nam và đủ 55 tuổi đối với nữ."
      },
      {
        "id": 557,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
        "options": [
          "1. Vị trí A và B.",
          "2. Vị trí A và C.",
          "3. Vị trí B và C.",
          "4. Cả ba vị trí A, B, C."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-557.jpeg",
        "page": 166,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Vị trí B và C.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Vị trí B và C.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Vị trí B và C.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Vị trí B và C."
      },
      {
        "id": 2,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Làn đường là gì?",
        "options": [
          "1. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
          "2. Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.",
          "3. Là đường cho xe ô tô chạy, dừng, đỗ an toàn."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 5,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn."
      },
      {
        "id": 221,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để bảo đảm an toàn?",
        "options": [
          "1. Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
          "2. Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 52,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác."
      },
      {
        "id": 560,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe con.",
          "2. Xe tải.",
          "3. Xe con, xe tải."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-560.jpeg",
        "page": 168,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe tải.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe tải."
      },
      {
        "id": 303,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm máy kéo?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2 và biển 3.",
          "3. Biển 1 và biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-303.jpeg",
        "page": 71,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2 và biển 3.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2 và biển 3.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2 và biển 3.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 2 và biển 3."
      },
      {
        "id": 512,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, những hướng nào xe ô tô không được phép đi?",
        "options": [
          "1. Hướng 1 và 2.",
          "2. Hướng 3.",
          "3. Hướng 1 và 4.",
          "4. Hướng 2 và 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-512.jpeg",
        "page": 144,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Hướng 3.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 3.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 3.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Hướng 3."
      },
      {
        "id": 488,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
          "2. Xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con, xe tải.",
          "3. Xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách, xe con.",
          "4. Xe con, xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-488.jpeg",
        "page": 132,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách."
      },
      {
        "id": 119,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe mô tô hai bánh có dung tích xi lanh đến 125 cm3 và xe ô tô chở người đến 8 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg?",
        "options": [
          "1. 16 tuổi.",
          "2. 17 tuổi",
          "3. 18 tuổi."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 28,
        "explanation": "• Đáp án đúng: Phương án 3 - \"18 tuổi.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"18 tuổi.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"18 tuổi.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "18 tuổi."
      },
      {
        "id": 319,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào dưới đây chỉ cấm xe ô tô quay đầu?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Biển 1 và biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-319.jpeg",
        "page": 77,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 132,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm; các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "2. Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe).",
          "3. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
          "4. Ý 1 và ý 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 31,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Ý 1 và ý 2.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Ý 1 và ý 2.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Ý 1 và ý 2.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Ý 1 và ý 2."
      },
      {
        "id": 185,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
        "options": [
          "1. Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông, là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
          "2. Là sự tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa giữa những người tham gia giao thông với nhau.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 43,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 462,
        "chapter": "Báo hiệu đường bộ",
        "question": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        "options": [
          "1. Có.",
          "2. Không."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-462.png",
        "page": 123,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Có.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Có.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Có.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Có."
      }
    ]
  },
  "d2": {
    "title": "Thi Thử Lý Thuyết Ô Tô Hạng D2 (Xe Khách 16 - 29 Chỗ)",
    "subtitle": "Xe ô tô chở người 16 - 29 chỗ (45 câu / 26 phút - Đạt 41/45)",
    "timeLimit": 1560,
    "passScore": 41,
    "total": 45,
    "questions": [
      {
        "id": 437,
        "chapter": "Báo hiệu đường bộ",
        "question": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối thiểu\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-437.jpeg",
        "page": 115,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 433,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Hướng đi thẳng phải theo\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-433.png",
        "page": 113,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 68,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người lái xe, người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải thực hiện quy định nào dưới đây?",
        "options": [
          "1. Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.",
          "2. Người lái xe phải đội mũ bảo hiểm, người được chở trên xe không nhất thiết phải đội mũ bảo hiểm.",
          "3. Phải đội mũ bảo hiểm nhưng không nhất thiết phải cài quai."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": true,
        "image": null,
        "page": 17,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách."
      },
      {
        "id": 131,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng D2 được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "2. Xe ô tô chở người trên 08 chỗ (không kể chỗ của người lái xe) đến 16 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 30,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 263,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi lái xe ô tô điện qua khu vực ngập nước, người lái xe cần phải chú ý những vấn đề gì?",
        "options": [
          "1. Người lái xe phải tìm hiểu khả năng chìm trong nước của xe để xác định cung đường di chuyển.",
          "2. Giữ vững tay lái, đi đều ga, tránh không để xe chết máy giữa dòng, không nên dừng xe trên đường ngập nước.",
          "3. Lái xe tốc độ chậm, không tạo sóng và giữ khoảng cách an toàn với các phương tiện xung quanh, nhất là người đi bộ.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 61,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 387,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Đường giao nhau\" của các tuyến đường cùng cấp?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-387.jpeg",
        "page": 98,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 259,
        "chapter": "Kỹ thuật lái xe",
        "question": "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?",
        "options": [
          "1. Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
          "2. Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
          "3. Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
          "4. Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 60,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng."
      },
      {
        "id": 5,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Vạch kẻ đường là gì?",
        "options": [
          "1. Là báo hiệu đường bộ để hỗ trợ cảnh báo nguy hiểm cho người tham gia giao thông đường bộ.",
          "2. Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
          "3. Là báo hiệu cho người tham gia giao thông đường bộ về các thông tin của đường bộ.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 5,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại."
      },
      {
        "id": 556,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn có được phép vượt xe mô tô phía trước không?",
        "options": [
          "1. Cho phép.",
          "2. Không được vượt."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-556.jpeg",
        "page": 166,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Không được vượt.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Không được vượt."
      },
      {
        "id": 577,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
        "options": [
          "1. Tăng tốc độ, chuyển sang làn đường bên trái để vượt.",
          "2. Không được vượt những người đi xe đạp."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-577.jpeg",
        "page": 176,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Không được vượt những người đi xe đạp.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt những người đi xe đạp.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt những người đi xe đạp.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Không được vượt những người đi xe đạp."
      },
      {
        "id": 113,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi tham gia giao thông trên đường cao tốc, người lái xe không được thực hiện hành vi nào sau đây?",
        "options": [
          "1. Dừng, đỗ xe trên phần đường xe chạy, trừ trường hợp xe không thể di chuyển được vào làn đường khẩn cấp.",
          "2. Lùi xe, quay đầu xe.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 27,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Trên đường cao tốc, chỉ được cho xe chạy ở làn xe quy định, giữ khoảng cách an toàn, chỉ được dừng đỗ tại nơi quy định hoặc làn dừng khẩn cấp khi xe gặp sự cố.\n• Vì sao phương án khác sai: Hành vi quay đầu, lùi xe, chạy quá tốc độ tối đa hoặc dưới tốc độ tối thiểu trên cao tốc là cực kỳ nguy hiểm, bị phạt kịch khung.",
        "whyCorrect": "Trên đường cao tốc, chỉ được cho xe chạy ở làn xe quy định, giữ khoảng cách an toàn, chỉ được dừng đỗ tại nơi quy định hoặc làn dừng khẩn cấp khi xe gặp sự cố.",
        "whyWrong": "Hành vi quay đầu, lùi xe, chạy quá tốc độ tối đa hoặc dưới tốc độ tối thiểu trên cao tốc là cực kỳ nguy hiểm, bị phạt kịch khung.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 417,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo này có ý nghĩa như thế nào?",
        "options": [
          "1. Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
          "2. Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng sang phải."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-417.png",
        "page": 108,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái."
      },
      {
        "id": 599,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
        "options": [
          "1. Đúng.",
          "2. Không đúng."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-599.jpeg",
        "page": 187,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đúng.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Đúng.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Đúng.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Đúng."
      },
      {
        "id": 282,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Hãy nêu công dụng hộp số của xe ô tô?",
        "options": [
          "1. Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, bảo đảm cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau.",
          "2. Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển.",
          "3. Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, bảo đảm cho xe ô tô chuyển động lùi."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 65,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, bảo đảm cho xe ô tô chuyển động lùi.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, bảo đảm cho xe ô tô chuyển động lùi."
      },
      {
        "id": 160,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi tham gia giao thông trên đoạn đường không có biển báo \"cự ly tối thiểu giữa hai xe\", trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        "options": [
          "1. 55 m.",
          "2. 70 m.",
          "3. 100 m."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 37,
        "explanation": "• Đáp án đúng: Phương án 1 - \"55 m.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"55 m.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"55 m.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "55 m."
      },
      {
        "id": 355,
        "chapter": "Báo hiệu đường bộ",
        "question": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
        "options": [
          "1. Không được phép.",
          "2. Được phép."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-355.jpeg",
        "page": 89,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Không được phép.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Không được phép."
      },
      {
        "id": 45,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người lái xe phải giảm tốc độ, có tín hiệu rẽ phải và đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
        "options": [
          "1. Khi xe chạy phía trước có tín hiệu vượt xe khác.",
          "2. Khi phía trước có xe chạy ngược chiều.",
          "3. Khi xe sau xin vượt nếu đủ điều kiện an toàn.",
          "4. Khi xe sau có tín hiệu vượt bên phải."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 13,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Khi xe sau xin vượt nếu đủ điều kiện an toàn.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Khi xe sau xin vượt nếu đủ điều kiện an toàn.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Khi xe sau xin vượt nếu đủ điều kiện an toàn.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Khi xe sau xin vượt nếu đủ điều kiện an toàn."
      },
      {
        "id": 528,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Các xe đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
          "2. Cho phép các xe ở mọi hướng được phép rẽ phải.",
          "3. Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-528.jpeg",
        "page": 152,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi."
      },
      {
        "id": 570,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
        "options": [
          "1. Đi thẳng, rẽ trái.",
          "2. Đi thẳng, rẽ phải.",
          "3. Rẽ trái.",
          "4. Đi thẳng, rẽ phải, rẽ trái."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-570.jpeg",
        "page": 173,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đi thẳng, rẽ trái.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Đi thẳng, rẽ trái.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Đi thẳng, rẽ trái.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Đi thẳng, rẽ trái."
      },
      {
        "id": 127,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe ô tô hạng B được phép điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe).",
          "2. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 30,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 284,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Hãy nêu công dụng hệ thống phanh của xe ô tô?",
        "options": [
          "1. Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc.",
          "2. Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
          "3. Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của xe ô tô."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 65,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc."
      },
      {
        "id": 319,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào dưới đây chỉ cấm xe ô tô quay đầu?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Biển 1 và biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-319.jpeg",
        "page": 77,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 469,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển này có ý nghĩa như thế nào?",
        "options": [
          "1. Chỉ dẫn đến trạm kiểm tra tải trọng xe.",
          "2. Chỉ dẫn hướng rẽ vào nơi đặt trạm kiểm tra tải trọng xe.",
          "3. Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-469.jpeg",
        "page": 125,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m."
      },
      {
        "id": 155,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
        "options": [
          "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
          "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
          "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
          "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 36,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
      },
      {
        "id": 445,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển số 1 có ý nghĩa như thế nào?",
        "options": [
          "1. Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
          "2. Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
          "3. Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-445.jpeg",
        "page": 117,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực."
      },
      {
        "id": 566,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe con (A), xe con (B), xe tải (D).",
          "2. Xe tải (D), xe con (E), xe buýt (G).",
          "3. Xe tải ( D), xe con (B).",
          "4. Xe con (B), xe con (C)."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-566.jpeg",
        "page": 171,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe tải ( D), xe con (B).\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải ( D), xe con (B).\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe tải ( D), xe con (B).\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe tải ( D), xe con (B)."
      },
      {
        "id": 190,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Người lái xe có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
        "options": [
          "1. Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
          "2. Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 44,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật."
      },
      {
        "id": 228,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
        "options": [
          "1. Đang sử dụng phanh đỗ.",
          "2. Thiếu dầu phanh.",
          "3. Nhiệt độ nước làm mát tăng quá mức cho phép.",
          "4. Áp suất dầu ở mức thấp."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-228.jpeg",
        "page": 54,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Áp suất dầu ở mức thấp.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Áp suất dầu ở mức thấp.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Áp suất dầu ở mức thấp.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Áp suất dầu ở mức thấp."
      },
      {
        "id": 110,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?",
        "options": [
          "1. Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
          "2. Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
          "3. Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 26,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt."
      },
      {
        "id": 134,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng CE được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
          "2. Các loại xe ô tô quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 31,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc."
      },
      {
        "id": 454,
        "chapter": "Báo hiệu đường bộ",
        "question": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
        "options": [
          "1. Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
          "2. Tiếp tục lưu thông với tốc độ bình thường.",
          "3. Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-454.png",
        "page": 120,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này."
      },
      {
        "id": 311,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm xe tải vượt?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-311.jpeg",
        "page": 74,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai biển.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Cả hai biển.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Cả hai biển.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Cả hai biển."
      },
      {
        "id": 552,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
        "options": [
          "1. Tăng tốc cho xe chạy vượt qua.",
          "2. Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
          "3. Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-552.jpeg",
        "page": 164,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua."
      },
      {
        "id": 401,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào dưới đây là biển \"Cầu hẹp\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-401.jpeg",
        "page": 103,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 302,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm xe ô tô tải?",
        "options": [
          "1. Cả ba biển.",
          "2. Biển 2 và biển 3.",
          "3. Biển 1 và biển 3.",
          "4. Biển 1 và biển 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-302.jpeg",
        "page": 71,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 1 và biển 2."
      },
      {
        "id": 183,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
        "options": [
          "1. Quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
          "2. Nắm vững và tự giác chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ, lái xe an toàn; thực hiện đầy đủ trách nhiệm với khách hàng; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hợp tác, tương trợ, giúp đỡ đồng nghiệp.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 43,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 41,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người lái xe trên đường cần chấp hành quy định về tốc độ tối đa như thế nào?",
        "options": [
          "1. Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
          "2. Chỉ lớn hơn tốc độ tối đa cho phép khi vào ban đêm.",
          "3. Không vượt quá tốc độ tối đa cho phép."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 13,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Không vượt quá tốc độ tối đa cho phép.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Không vượt quá tốc độ tối đa cho phép.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Không vượt quá tốc độ tối đa cho phép.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Không vượt quá tốc độ tối đa cho phép."
      },
      {
        "id": 76,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trong các trường hợp dưới đây, để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
        "options": [
          "1. Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
          "2. Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải bảo đảm an toàn.",
          "3. Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 19,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính)."
      },
      {
        "id": 335,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo này có ý nghĩa như thế nào?",
        "options": [
          "1. Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
          "2. Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-335.png",
        "page": 82,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h."
      },
      {
        "id": 531,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào vượt đúng quy tắc giao thông?",
        "options": [
          "1. Xe tải.",
          "2. Cả hai xe.",
          "3. Xe con."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-531.jpeg",
        "page": 153,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe con.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe con."
      },
      {
        "id": 49,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi lái xe trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi trong thời gian nào?",
        "options": [
          "1. Từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau.",
          "2. Từ 05 giờ đến 22 giờ.",
          "3. Từ 23 giờ ngày hôm trước đến 05 giờ sáng hôm sau."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 14,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Từ 05 giờ đến 22 giờ.\"\n• Vì sao đúng: Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.\n• Vì sao phương án khác sai: Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "whyCorrect": "Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.",
        "whyWrong": "Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "correctAnswerText": "Từ 05 giờ đến 22 giờ."
      },
      {
        "id": 569,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào phải dừng lại trong trường hợp này?",
        "options": [
          "1. Xe con.",
          "2. Xe của bạn.",
          "3. Cả hai xe."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-569.jpeg",
        "page": 172,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe con.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe con."
      },
      {
        "id": 3,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khổ giới hạn của đường bộ được hiểu như thế nào là đúng?",
        "options": [
          "1. Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.",
          "2. Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường b ộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
          "3. Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 5,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ."
      },
      {
        "id": 468,
        "chapter": "Báo hiệu đường bộ",
        "question": "Ý nghĩa các biểu tượng ghi trên biển chỉ dẫn là như thế nào?",
        "options": [
          "1. Xăng dầu, ăn uống, thông tin, sửa chữa xe.",
          "2. Xăng dầu, ăn uống, nhà nghỉ, sửa chữa xe.",
          "3. Xăng dầu, ăn uống, cấp cứu, sửa chữa xe."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-468.jpeg",
        "page": 125,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xăng dầu, ăn uống, thông tin, sửa chữa xe.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Xăng dầu, ăn uống, thông tin, sửa chữa xe.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Xăng dầu, ăn uống, thông tin, sửa chữa xe.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Xăng dầu, ăn uống, thông tin, sửa chữa xe."
      },
      {
        "id": 44,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?",
        "options": [
          "1. Đi trên làn đường bên phải trong cùng.",
          "2. Đi trên làn đường bên trái.",
          "3. Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 13,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Đi trên làn đường bên trái.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đi trên làn đường bên trái.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đi trên làn đường bên trái.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Đi trên làn đường bên trái."
      }
    ]
  },
  "d": {
    "title": "Thi Thử Lý Thuyết Ô Tô Hạng D (Xe Khách 29 - 30 Chỗ)",
    "subtitle": "Xe ô tô chở người trên 29 chỗ, xe buýt (45 câu / 26 phút - Đạt 41/45)",
    "timeLimit": 1560,
    "passScore": 41,
    "total": 45,
    "questions": [
      {
        "id": 329,
        "chapter": "Báo hiệu đường bộ",
        "question": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả ba biển."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-329.jpeg",
        "page": 80,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 462,
        "chapter": "Báo hiệu đường bộ",
        "question": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
        "options": [
          "1. Có.",
          "2. Không."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-462.png",
        "page": 123,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Có.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Có.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Có.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Có."
      },
      {
        "id": 543,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe con (E), xe mô tô (C).",
          "2. Xe tải (B), xe mô tô (D).",
          "3. Xe khách (A), xe mô tô (C).",
          "4. Xe khách (A), xe mô tô (D)."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-543.jpeg",
        "page": 159,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe con (E), xe mô tô (C).\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe con (E), xe mô tô (C).\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe con (E), xe mô tô (C).\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe con (E), xe mô tô (C)."
      },
      {
        "id": 38,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi hiệu lệnh của người điều khiển giao thông trái với tín hiệu đèn giao thông hoặc biển báo hiệu đường bộ thì người tham gia giao thông đường bộ phải chấp hành báo hiệu đường bộ nào dưới đây?",
        "options": [
          "1. Theo hiệu lệnh của người điều khiển giao thông.",
          "2. Theo tín hiệu đèn giao thông.",
          "3. Theo biển báo hiệu đường bộ."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 12,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Theo hiệu lệnh của người điều khiển giao thông.\"\n• Vì sao đúng: Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.\n• Vì sao phương án khác sai: Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "whyCorrect": "Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.",
        "whyWrong": "Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "correctAnswerText": "Theo hiệu lệnh của người điều khiển giao thông."
      },
      {
        "id": 336,
        "chapter": "Báo hiệu đường bộ",
        "question": "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
        "options": [
          "1. Được phép.",
          "2. Không được phép."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-336.jpeg",
        "page": 82,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Không được phép.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Không được phép."
      },
      {
        "id": 281,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Hãy nêu công dụng ly hợp (côn) của xe ô tô?",
        "options": [
          "1. Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe ô tô chuyển động.",
          "2. Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.",
          "3. Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 65,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô."
      },
      {
        "id": 311,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cấm xe tải vượt?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-311.jpeg",
        "page": 74,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai biển.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Cả hai biển.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Cả hai biển.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Cả hai biển."
      },
      {
        "id": 134,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng CE được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
          "2. Các loại xe ô tô quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 31,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc."
      },
      {
        "id": 369,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Đường dành cho xe thô sơ\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-369.jpeg",
        "page": 92,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 378,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Nơi đường sắt giao vuông góc với đường bộ\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Biển 1 và biển 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-378.jpeg",
        "page": 95,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1 và biển 2."
      },
      {
        "id": 465,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển này có ý nghĩa như thế nào?",
        "options": [
          "1. Chỉ dẫn sắp đến vị trí nhập làn xe.",
          "2. Chỉ dẫn vị trí nhập làn xe cách 250 m.",
          "3. Chỉ dẫn vị trí nhập làn cách trạm thu phí 250 m."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-465.jpeg",
        "page": 124,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Chỉ dẫn vị trí nhập làn xe cách 250 m.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỉ dẫn vị trí nhập làn xe cách 250 m.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỉ dẫn vị trí nhập làn xe cách 250 m.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Chỉ dẫn vị trí nhập làn xe cách 250 m."
      },
      {
        "id": 225,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi điều khiển xe ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "options": [
          "1. Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
          "2. Chuyển từ đèn chiếu gần sang đèn chiếu xa; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
          "3. Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe bảo đảm an toàn."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 53,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.\"\n• Vì sao đúng: Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.\n• Vì sao phương án khác sai: Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "whyCorrect": "Trong khu đô thị, khu đông dân cư có đèn đường từ 22h đêm đến 5h sáng, người lái xe chỉ được bật đèn chiếu gần (đèn cốt) và không được bấm còi để bảo đảm an toàn, không gây chói mắt xe đối diện.",
        "whyWrong": "Bật đèn chiếu xa (pha) gây chói mắt làm mất tầm nhìn của phương tiện ngược chiều, rất dễ xảy ra tai nạn đối đầu nguy hiểm.",
        "correctAnswerText": "Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình."
      },
      {
        "id": 157,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi tham gia giao thông trên đường bộ (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
        "options": [
          "1. Xe máy chuyên dùng, xe gắn máy và các loại xe tương tự.",
          "2. Xe chở người bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động.",
          "3. Xe chở hàng bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 36,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe chở hàng bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe chở hàng bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe chở hàng bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe chở hàng bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động."
      },
      {
        "id": 586,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào phải nhường đường trong trường hợp này?",
        "options": [
          "1. Xe con.",
          "2. Xe của bạn."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-586.jpeg",
        "page": 181,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe của bạn.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe của bạn.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe của bạn.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe của bạn."
      },
      {
        "id": 61,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ ngược chiều khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để bảo đảm an toàn?",
        "options": [
          "1. 10 mét.",
          "2. 15 mét.",
          "3. 20 mét.",
          "4. 25 mét."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 16,
        "explanation": "• Đáp án đúng: Phương án 3 - \"20 mét.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"20 mét.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"20 mét.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "20 mét."
      },
      {
        "id": 158,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi tham gia giao thông trên đoạn đường không có biển báo \"Cự ly tối thiểu giữa hai xe\", trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
        "options": [
          "1. 35 m.",
          "2. 55 m.",
          "3. 70 m."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 37,
        "explanation": "• Đáp án đúng: Phương án 3 - \"70 m.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"70 m.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"70 m.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "70 m."
      },
      {
        "id": 377,
        "chapter": "Báo hiệu đường bộ",
        "question": "Hai biển này có ý nghĩa như thế nào?",
        "options": [
          "1. Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
          "2. Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
          "3. Nơi đường sắt giao nhau với đường bộ."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-377.jpeg",
        "page": 95,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn."
      },
      {
        "id": 15,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Đỗ xe được hiểu như thế nào là đúng?",
        "options": [
          "1. Là trạng thái đứng yên của xe có giới hạn thời gian trong một khoảng thời gian cần thiết đủ để cho người lên, xuống xe đó, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
          "2. Là trạng thái đứng yên của xe không giới hạn thời gian. Khi đỗ xe, người điều khiển phương tiện tham gia giao thông đường bộ chỉ được rời khỏi xe khi đã sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác. Xe đỗ trên đoạn đường dốc phải đánh lái về phía lề đường, chèn bánh."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 7,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Là trạng thái đứng yên của xe không giới hạn thời gian. Khi đỗ xe, người điều khiển phương tiện tham gia giao thông đường bộ chỉ được rời khỏi xe khi đã sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác. Xe đỗ trên đoạn đường dốc phải đánh lái về phía lề đường, chèn bánh.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là trạng thái đứng yên của xe không giới hạn thời gian. Khi đỗ xe, người điều khiển phương tiện tham gia giao thông đường bộ chỉ được rời khỏi xe khi đã sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác. Xe đỗ trên đoạn đường dốc phải đánh lái về phía lề đường, chèn bánh.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Là trạng thái đứng yên của xe không giới hạn thời gian. Khi đỗ xe, người điều khiển phương tiện tham gia giao thông đường bộ chỉ được rời khỏi xe khi đã sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác. Xe đỗ trên đoạn đường dốc phải đánh lái về phía lề đường, chèn bánh.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Là trạng thái đứng yên của xe không giới hạn thời gian. Khi đỗ xe, người điều khiển phương tiện tham gia giao thông đường bộ chỉ được rời khỏi xe khi đã sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác. Xe đỗ trên đoạn đường dốc phải đánh lái về phía lề đường, chèn bánh."
      },
      {
        "id": 123,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?",
        "options": [
          "1. Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm 3 .",
          "2. Xe gắn máy.",
          "3. Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 29,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe gắn máy.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe gắn máy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe gắn máy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Xe gắn máy."
      },
      {
        "id": 500,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo tín hiệu đèn, xe nào đi là đúng quy tắc giao thông?",
        "options": [
          "1. Xe khách, xe mô tô.",
          "2. Xe con, xe tải.",
          "3. Xe tải, xe mô tô."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-500.jpeg",
        "page": 138,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe con, xe tải.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con, xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con, xe tải.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe con, xe tải."
      },
      {
        "id": 204,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Khi phát hiện thấy có ngọn lửa, khói hoặc nhiệt độ cao bất thường từ phương tiện giao thông do mình điều khiển người lái xe phải làm gì trước tiên?",
        "options": [
          "1. Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.",
          "2. Hô hoán để mọi người đến trợ giúp chữa cháy, gọi Cảnh sát giao thông, Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ, lực lượng y tế để sẵn sàng hỗ trợ cứu người.",
          "3. Nếu nhiên liệu trào ra ngoài, ngọn lửa chưa cháy dữ dội thì tiếp tục sử dụng nước, hoặc bất kỳ chất, phương tiện chữa cháy có được để dập lửa.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 47,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy."
      },
      {
        "id": 136,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người tập lái xe ô tô khi tham gia giao thông đường bộ phải bảo đảm các điều kiện nào dưới đây?",
        "options": [
          "1. Phải thực hành trên xe tập lái, trên tuyến đường tập lái và có giáo viên dạy lái bảo trợ tay lái.",
          "2. Phải mang theo giấy phép xe tập lái.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 32,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Phải thực hành trên xe tập lái, trên tuyến đường tập lái và có giáo viên dạy lái bảo trợ tay lái.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải thực hành trên xe tập lái, trên tuyến đường tập lái và có giáo viên dạy lái bảo trợ tay lái.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải thực hành trên xe tập lái, trên tuyến đường tập lái và có giáo viên dạy lái bảo trợ tay lái.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Phải thực hành trên xe tập lái, trên tuyến đường tập lái và có giáo viên dạy lái bảo trợ tay lái."
      },
      {
        "id": 83,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi chuyển hướng, người lái xe, người điều khiển xe máy chuyên dùng phải làm gì để bảo đảm an toàn?",
        "options": [
          "1. Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉ chuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
          "2. Nhanh chóng chuyển hướng để không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
          "3. Ra tín hiệu chuyển hướng để yêu cầu các phương tiện khác dừng lại cho xe chuyển hướng di chuyển."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 20,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉ chuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉ chuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉ chuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉ chuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác."
      },
      {
        "id": 209,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
        "options": [
          "1. Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động.",
          "2. Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp côn và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 49,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp côn và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp côn và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp côn và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp côn và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động."
      },
      {
        "id": 53,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?",
        "options": [
          "1. Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên.",
          "2. Trên cầu có từ 02 làn xe trở lên.",
          "3. Trên đường có 02 làn đường được phân chia làn bằng vạch kẻ nét đứt."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": true,
        "image": null,
        "page": 15,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên."
      },
      {
        "id": 347,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa như thế nào?",
        "options": [
          "1. Báo khoảng cách đến nơi cấm bóp còi.",
          "2. Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
          "3. Báo cấm dùng còi có độ vang xa 500m."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-347.jpeg",
        "page": 86,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển."
      },
      {
        "id": 527,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe khách.",
          "2. Xe mô tô.",
          "3. Xe con.",
          "4. Xe con và xe mô tô."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-527.jpeg",
        "page": 151,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe con.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe con.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Xe con.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Xe con."
      },
      {
        "id": 309,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào không cho phép xe ô tô con vượt?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-309.jpeg",
        "page": 73,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 591,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào được đi trước trong trường hợp này?",
        "options": [
          "1. Xe tải.",
          "2. Xe của bạn."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-591.jpeg",
        "page": 183,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe tải.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe tải.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe tải."
      },
      {
        "id": 218,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
        "options": [
          "1. Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh.",
          "2. Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường.",
          "3. Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 51,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh."
      },
      {
        "id": 354,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển này có ý nghĩa như thế nào?",
        "options": [
          "1. Cấm dừng xe về hướng bên trái.",
          "2. Cấm dừng và đỗ xe theo hướng bên phải.",
          "3. Được phép đỗ xe và dừng xe theo hướng bên phải."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-354.jpeg",
        "page": 88,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Cấm dừng và đỗ xe theo hướng bên phải.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cấm dừng và đỗ xe theo hướng bên phải.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cấm dừng và đỗ xe theo hướng bên phải.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Cấm dừng và đỗ xe theo hướng bên phải."
      },
      {
        "id": 549,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào đi trước là đúng quy tắc giao thông?",
        "options": [
          "1. Xe của bạn.",
          "2. Xe tải."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-549.jpeg",
        "page": 162,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe tải.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe tải.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe tải."
      },
      {
        "id": 107,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
        "options": [
          "1. Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
          "2. Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
          "3. Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 25,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Cả ba ý trên.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Cả ba ý trên.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 407,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào sau đây là biển \"Lề đường nguy hiểm\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-407.jpeg",
        "page": 105,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Biển cảnh báo nguy hiểm có dạng hình tam giác đều, viền đỏ, nền vàng nhằm cảnh báo trước nguy cơ để người lái xe chủ động giảm tốc độ. Đáp án đúng là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án khác nhầm lẫn giữa các vị trí nguy hiểm (đường hẹp, đường trơn, khúc cua, giao cắt) hoặc nhầm sang nhóm biển hiệu lệnh/chỉ dẫn.",
        "whyCorrect": "Biển cảnh báo nguy hiểm có dạng hình tam giác đều, viền đỏ, nền vàng nhằm cảnh báo trước nguy cơ để người lái xe chủ động giảm tốc độ. Đáp án đúng là: \"Biển 2.\".",
        "whyWrong": "Các phương án khác nhầm lẫn giữa các vị trí nguy hiểm (đường hẹp, đường trơn, khúc cua, giao cắt) hoặc nhầm sang nhóm biển hiệu lệnh/chỉ dẫn.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 379,
        "chapter": "Báo hiệu đường bộ",
        "question": "Các biển này có ý nghĩa như thế nào?",
        "options": [
          "1. Nơi đường sắt giao nhau với đường bộ.",
          "2. Nơi đường sắt giao vuông góc với đường bộ.",
          "3. Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-379.jpeg",
        "page": 96,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn."
      },
      {
        "id": 280,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Hãy nêu công dụng hệ thống truyền lực của xe ô tô?",
        "options": [
          "1. Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô.",
          "2. Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
          "3. Dùng để làm giảm tốc độ, dừng chuyển động của xe ô tô."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 65,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô.\"\n• Vì sao đúng: Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.\n• Vì sao phương án khác sai: Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "whyCorrect": "Khi xuống dốc cao hoặc lái xe đường trơn trượt, phải về số thấp (kết hợp phanh động cơ và phanh chân), giữ đều ga, không được về số mo (N) hoặc đạp côn thả trôi.",
        "whyWrong": "Về số N (số mo) hoặc tắt máy thả trôi làm mất tác dụng phanh động cơ, xe lao nhanh dẫn đến nóng và cháy má phanh, mất hoàn toàn kiểm soát phanh gây tai nạn nghiêm trọng.",
        "correctAnswerText": "Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô."
      },
      {
        "id": 118,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg?",
        "options": [
          "1. 18 tuổi.",
          "2. 17 tuổi.",
          "3. 16 tuổi."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 28,
        "explanation": "• Đáp án đúng: Phương án 1 - \"18 tuổi.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"18 tuổi.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"18 tuổi.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "18 tuổi."
      },
      {
        "id": 584,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "options": [
          "1. Xe của bạn, xe tải, xe con.",
          "2. Xe con, xe tải, xe của bạn.",
          "3. Xe tải, xe của bạn, xe con.",
          "4. Xe của bạn, xe con, xe tải."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-584.jpeg",
        "page": 180,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Xe của bạn, xe con, xe tải.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe của bạn, xe con, xe tải.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe của bạn, xe con, xe tải.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe của bạn, xe con, xe tải."
      },
      {
        "id": 569,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào phải dừng lại trong trường hợp này?",
        "options": [
          "1. Xe con.",
          "2. Xe của bạn.",
          "3. Cả hai xe."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-569.jpeg",
        "page": 172,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe con.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe con."
      },
      {
        "id": 531,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào vượt đúng quy tắc giao thông?",
        "options": [
          "1. Xe tải.",
          "2. Cả hai xe.",
          "3. Xe con."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-531.jpeg",
        "page": 153,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe con.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe con.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe con."
      },
      {
        "id": 355,
        "chapter": "Báo hiệu đường bộ",
        "question": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
        "options": [
          "1. Không được phép.",
          "2. Được phép."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-355.jpeg",
        "page": 89,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Không được phép.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Không được phép.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Không được phép."
      },
      {
        "id": 264,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Phương pháp kiểm tra mức dầu bôi trơn động cơ nào dưới đây là đúng?",
        "options": [
          "1. Kiểm tra que thăm dầu trên các-te. Quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối đa được thể hiện trên que thăm.",
          "2. Rút que thăm dầu trên các-te. Quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối thiểu được thể hiện trên que thăm.",
          "3. Rút que thăm dầu trên các-te, lau sạch que thăm sau đó cắm vào các-te và rút ra quan sát vệt dầu trên que thăm, mức dầu phải nằm trong khoảng vạch mức tối thiểu và tối đa được thể hiện trên que thăm."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 62,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Rút que thăm dầu trên các-te, lau sạch que thăm sau đó cắm vào các-te và rút ra quan sát vệt dầu trên que thăm, mức dầu phải nằm trong khoảng vạch mức tối thiểu và tối đa được thể hiện trên que thăm.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Rút que thăm dầu trên các-te, lau sạch que thăm sau đó cắm vào các-te và rút ra quan sát vệt dầu trên que thăm, mức dầu phải nằm trong khoảng vạch mức tối thiểu và tối đa được thể hiện trên que thăm.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Rút que thăm dầu trên các-te, lau sạch que thăm sau đó cắm vào các-te và rút ra quan sát vệt dầu trên que thăm, mức dầu phải nằm trong khoảng vạch mức tối thiểu và tối đa được thể hiện trên que thăm.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Rút que thăm dầu trên các-te, lau sạch que thăm sau đó cắm vào các-te và rút ra quan sát vệt dầu trên que thăm, mức dầu phải nằm trong khoảng vạch mức tối thiểu và tối đa được thể hiện trên que thăm."
      },
      {
        "id": 103,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
        "options": [
          "1. Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.",
          "2. Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu xa; được dừng xe, đỗ xe khi cần thiết.",
          "3. Phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 24,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn."
      },
      {
        "id": 106,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Luật Trật tự, an toàn giao thông đường bộ quy định về xe kéo xe, xe kéo rơ moóc và xe ô tô đầu kéo kéo sơ mi rơ moóc như thế nào dưới đây?",
        "options": [
          "1. Một xe ô tô được kéo theo nhiều xe ô tô hoặc xe máy chuyên dùng khác khi xe được kéo không tự chạy được (trừ trường hợp xe vận chuyển hàng siêu trường, siêu trọng).",
          "2. Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng. Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu, có đèn cảnh báo nhấp nháy màu vàng.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 25,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng. Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu, có đèn cảnh báo nhấp nháy màu vàng.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng. Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu, có đèn cảnh báo nhấp nháy màu vàng.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng. Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu, có đèn cảnh báo nhấp nháy màu vàng.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng. Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu, có đèn cảnh báo nhấp nháy màu vàng."
      },
      {
        "id": 326,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào dưới đây các phương tiện không được phép đi vào?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 1 và biển 2."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-326.jpeg",
        "page": 79,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1 và biển 2."
      }
    ]
  },
  "ce": {
    "title": "Thi Thử Lý Thuyết Ô Tô Hạng CE (Xe Đầu Kéo Sơ-mi Rơ-moóc)",
    "subtitle": "Xe đầu kéo container, sơ-mi rơ-moóc (45 câu / 26 phút - Đạt 41/45)",
    "timeLimit": 1560,
    "passScore": 41,
    "total": 45,
    "questions": [
      {
        "id": 559,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
        "options": [
          "1. Xe mô tô.",
          "2. Xe ô tô con.",
          "3. Không xe nào vi phạm.",
          "4. Cả hai xe."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-559.jpeg",
        "page": 167,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả hai xe.\"\n• Vì sao đúng: Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Cả hai xe.\".\n• Vì sao phương án khác sai: Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "whyCorrect": "Phương tiện vi phạm vì không chấp hành biển báo hiệu, vạch kẻ đường hoặc đèn tín hiệu (như đỗ ngược chiều, đè vạch liền, đi sai làn đường quy định). Đáp án chính xác: \"Cả hai xe.\".",
        "whyWrong": "Các phương án khác xác định sai phương tiện vi phạm hoặc bỏ sót xe có hành vi không chấp hành quy tắc giao thông.",
        "correctAnswerText": "Cả hai xe."
      },
      {
        "id": 577,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
        "options": [
          "1. Tăng tốc độ, chuyển sang làn đường bên trái để vượt.",
          "2. Không được vượt những người đi xe đạp."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-577.jpeg",
        "page": 176,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Không được vượt những người đi xe đạp.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt những người đi xe đạp.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt những người đi xe đạp.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Không được vượt những người đi xe đạp."
      },
      {
        "id": 519,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, những hướng nào xe ô tô con được phép đi?",
        "options": [
          "1. Hướng 1.",
          "2. Hướng 1, 3 và 4.",
          "3. Hướng 2, 3 và 4.",
          "4. Cả bốn hướng."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-519.jpeg",
        "page": 147,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Hướng 1, 3 và 4.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 1, 3 và 4.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 1, 3 và 4.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Hướng 1, 3 và 4."
      },
      {
        "id": 552,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
        "options": [
          "1. Tăng tốc cho xe chạy vượt qua.",
          "2. Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
          "3. Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-552.jpeg",
        "page": 164,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua."
      },
      {
        "id": 417,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển báo này có ý nghĩa như thế nào?",
        "options": [
          "1. Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
          "2. Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng sang phải."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-417.png",
        "page": 108,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái."
      },
      {
        "id": 43,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
        "options": [
          "1. Đi về bên trái theo chiều đi của mình.",
          "2. Đi về bên phải theo chiều đi của mình.",
          "3. Đi ở bất cứ bên nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 13,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Đi về bên phải theo chiều đi của mình.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Đi về bên phải theo chiều đi của mình.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Đi về bên phải theo chiều đi của mình.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Đi về bên phải theo chiều đi của mình."
      },
      {
        "id": 204,
        "chapter": "Văn hóa giao thông, đạo đức người lái xe, kỹ năng phòng cháy, chữa cháy và cứu hộ, cứu nạn",
        "question": "Khi phát hiện thấy có ngọn lửa, khói hoặc nhiệt độ cao bất thường từ phương tiện giao thông do mình điều khiển người lái xe phải làm gì trước tiên?",
        "options": [
          "1. Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.",
          "2. Hô hoán để mọi người đến trợ giúp chữa cháy, gọi Cảnh sát giao thông, Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ, lực lượng y tế để sẵn sàng hỗ trợ cứu người.",
          "3. Nếu nhiên liệu trào ra ngoài, ngọn lửa chưa cháy dữ dội thì tiếp tục sử dụng nước, hoặc bất kỳ chất, phương tiện chữa cháy có được để dập lửa.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 47,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy."
      },
      {
        "id": 295,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
        "options": [
          "1. Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
          "2. Áp suất lốp không đủ.",
          "3. Đang hãm phanh tay.",
          "4. Hệ thống lái gặp sự cố."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-295.jpeg",
        "page": 68,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Hệ thống lái gặp sự cố.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Hệ thống lái gặp sự cố.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Hệ thống lái gặp sự cố.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Hệ thống lái gặp sự cố."
      },
      {
        "id": 583,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
        "options": [
          "1. Xe của bạn, xe mô tô, xe đạp.",
          "2. Xe mô tô, xe đạp, xe của bạn.",
          "3. Xe đạp, xe mô tô, xe của bạn."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-583.jpeg",
        "page": 179,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Xe đạp, xe mô tô, xe của bạn.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe đạp, xe mô tô, xe của bạn.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe đạp, xe mô tô, xe của bạn.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe đạp, xe mô tô, xe của bạn."
      },
      {
        "id": 406,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào sau đây là biển \"Đường trơn\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-406.jpeg",
        "page": 105,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 101,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi xe ô tô bị hư hỏng, bị tai nạn trên đường ngang, cầu chung đường sắt mà không thể di chuyển ngay khỏi phạm vi an toàn đường sắt, người lái xe và người có mặt xử lý như thế nào là đúng quy định?",
        "options": [
          "1. Người lái xe và người có mặt phải ngay lập tức báo hiệu để dừng tàu, thực hiện các biện pháp bảo đảm an toàn.",
          "2. Để xe lại, tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất.",
          "3. Không di chuyển phương tiện, tự khắc phục sửa chữa."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 24,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Người lái xe và người có mặt phải ngay lập tức báo hiệu để dừng tàu, thực hiện các biện pháp bảo đảm an toàn.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Người lái xe và người có mặt phải ngay lập tức báo hiệu để dừng tàu, thực hiện các biện pháp bảo đảm an toàn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Người lái xe và người có mặt phải ngay lập tức báo hiệu để dừng tàu, thực hiện các biện pháp bảo đảm an toàn.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Người lái xe và người có mặt phải ngay lập tức báo hiệu để dừng tàu, thực hiện các biện pháp bảo đảm an toàn."
      },
      {
        "id": 216,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi điều khiển xe ô tô rẽ phải, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
        "options": [
          "1. Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
          "2. Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; giảm tốc độ, quan sát an toàn phía trước, sau, bên phải và điều khiển xe từ từ rẽ phải.",
          "3. Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 51,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; giảm tốc độ, quan sát an toàn phía trước, sau, bên phải và điều khiển xe từ từ rẽ phải.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; giảm tốc độ, quan sát an toàn phía trước, sau, bên phải và điều khiển xe từ từ rẽ phải.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; giảm tốc độ, quan sát an toàn phía trước, sau, bên phải và điều khiển xe từ từ rẽ phải.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; giảm tốc độ, quan sát an toàn phía trước, sau, bên phải và điều khiển xe từ từ rẽ phải."
      },
      {
        "id": 396,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu \"Đường hai chiều\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-396.jpeg",
        "page": 101,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 166,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người lái xe phải thực hiện quy định nào dưới đây để bảo đảm an toàn?",
        "options": [
          "1. Được phép lái xe không hạn chế tốc độ và khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường.",
          "2. Được phép lái xe không hạn chế tốc độ và khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường khi tham gia giao thông trên đường nhánh.",
          "3. Chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 38,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường."
      },
      {
        "id": 350,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào xe mô tô hai bánh không được đi vào?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-350.jpeg",
        "page": 87,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 168,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Việc vận chuyển hành khách bằng xe ô tô phải tuân thủ các quy định nào dưới đây?",
        "options": [
          "1. Đón, trả hành khách đúng nơi quy định; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe.",
          "2. Đón, trả hành khách theo yêu cầu của hành khách trên xe; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 39,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đón, trả hành khách đúng nơi quy định; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đón, trả hành khách đúng nơi quy định; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đón, trả hành khách đúng nơi quy định; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Đón, trả hành khách đúng nơi quy định; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe."
      },
      {
        "id": 367,
        "chapter": "Báo hiệu đường bộ",
        "question": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-367.jpeg",
        "page": 92,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 235,
        "chapter": "Kỹ thuật lái xe",
        "question": "Khi điều khiển xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe phải xử lý như thế nào?",
        "options": [
          "1. Giảm tốc độ, dừng lại trước vạch dừng, quan sát cả hai phía, nếu không có tàu đi tới, tăng ga nhẹ vượt qua đường sắt.",
          "2. Nếu thấy có tàu đi tới thì dừng lại trước vạch dừng, chỉ khi tàu đi qua mới được đi.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 55,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 534,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Xe khách và xe tải, xe con.",
          "2. Xe tải, xe khách, xe con.",
          "3. Xe con, xe khách, xe tải."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-534.jpeg",
        "page": 155,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe khách và xe tải, xe con.\"\n• Vì sao đúng: Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe khách và xe tải, xe con.\".\n• Vì sao phương án khác sai: Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "whyCorrect": "Áp dụng 5 nguyên tắc giải sa hình chuẩn: 1. Xe đã chớm vào giao lộ; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Xe trên đường ưu tiên; 4. Xe có bên phải không vướng; 5. Hướng rẽ ưu tiên (Rẽ phải > Đi thẳng > Rẽ trái). Theo đó, phương án đúng là: \"Xe khách và xe tải, xe con.\".",
        "whyWrong": "Các phương án khác vi phạm thứ tự quyền ưu tiên hoặc không tuân thủ nguyên tắc nhường đường tại nơi giao nhau (như rẽ trái cắt mặt xe đi thẳng, hoặc tranh chấp đường với xe ưu tiên).",
        "correctAnswerText": "Xe khách và xe tải, xe con."
      },
      {
        "id": 556,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Bạn có được phép vượt xe mô tô phía trước không?",
        "options": [
          "1. Cho phép.",
          "2. Không được vượt."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-556.jpeg",
        "page": 166,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Không được vượt.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Không được vượt.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Không được vượt."
      },
      {
        "id": 272,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
        "options": [
          "1. Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.",
          "2. Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, không có tia lửa điện.",
          "3. Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí và nước, không có tia lửa điện."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 63,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất."
      },
      {
        "id": 110,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?",
        "options": [
          "1. Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
          "2. Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
          "3. Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 26,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt."
      },
      {
        "id": 223,
        "chapter": "Kỹ thuật lái xe",
        "question": "Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
        "options": [
          "1. Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ.",
          "2. Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
          "3. Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 53,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ."
      },
      {
        "id": 440,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Không biển nào."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-440.jpeg",
        "page": 116,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 169,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trong hoạt động vận tải đường bộ, các hành vi nào dưới đây bị nghiêm cấm?",
        "options": [
          "1. Vận chuyển hàng hóa cấm lưu hành.",
          "2. Vận chuyển trái phép hoặc không thực hiện đầy đủ các quy định của pháp luật về vận chuyển hàng hóa nguy hiểm.",
          "3. Vận chuyển động vật hoang dã.",
          "4. Cả ba ý trên."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": null,
        "page": 39,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Cả ba ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả ba ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả ba ý trên."
      },
      {
        "id": 289,
        "chapter": "Cấu tạo và sửa chữa",
        "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
        "options": [
          "1. Báo hiệu hệ thống chống bó cứng phanh bị lỗi.",
          "2. Áp suất lốp không đủ.",
          "3. Đang hãm phanh tay.",
          "4. Sắp hết nhiên liệu."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-289.jpeg",
        "page": 67,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Báo hiệu hệ thống chống bó cứng phanh bị lỗi.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Báo hiệu hệ thống chống bó cứng phanh bị lỗi.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Báo hiệu hệ thống chống bó cứng phanh bị lỗi.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Báo hiệu hệ thống chống bó cứng phanh bị lỗi."
      },
      {
        "id": 18,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Theo chức năng phục vụ thì đường bộ được phân loại như thế nào?",
        "options": [
          "1. Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
          "2. Đường chính, đường nhánh, đường gom, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
          "3. Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 8,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác."
      },
      {
        "id": 408,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào sau đây báo trước gần tới đoạn đường đang tiến hành thi công sửa chữa?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Không biển nào."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-408.jpeg",
        "page": 105,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 427,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-427.jpeg",
        "page": 111,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai biển.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cả hai biển.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Cả hai biển.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Cả hai biển."
      },
      {
        "id": 550,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
        "options": [
          "1. Quay đầu theo hướng A.",
          "2. Quay đầu theo hướng B.",
          "3. Cấm quay đầu."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-550.jpeg",
        "page": 163,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Quay đầu theo hướng A.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Quay đầu theo hướng A.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Quay đầu theo hướng A.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Quay đầu theo hướng A."
      },
      {
        "id": 162,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, để bảo đảm khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
        "options": [
          "1. Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình.",
          "2. Bảo đảm khoảng cách an toàn tùy thuộc vào mật độ phương tiện, tình hình giao thông thực tế.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 37,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Cả hai ý trên.\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Cả hai ý trên.\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 129,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng C được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "2. Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 30,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 537,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Những hướng nào ô tô tải được phép đi?",
        "options": [
          "1. Cả bốn hướng.",
          "2. Hướng 1, 2 và 3.",
          "3. Hướng 1 và 4.",
          "4. Hướng 1, 3 và 4."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-537.jpeg",
        "page": 156,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Hướng 1, 3 và 4.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 1, 3 và 4.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Hướng 1, 3 và 4.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Hướng 1, 3 và 4."
      },
      {
        "id": 154,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
        "options": [
          "1. Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
          "2. Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
          "3. Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
          "4. Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": null,
        "page": 35,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\"\n• Vì sao đúng: Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\".\n• Vì sao phương án khác sai: Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "whyCorrect": "Căn cứ Thông tư 31/2019/TT-BGTVT quy định về tốc độ và khoảng cách an toàn, mức quy định chuẩn xác đối với trường hợp này là: \"Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).\".",
        "whyWrong": "Các phương án khác đưa ra giới hạn tốc độ vượt quá mức cho phép hoặc cự ly không đủ an toàn để phanh dừng khi xảy ra tình huống bất ngờ.",
        "correctAnswerText": "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc)."
      },
      {
        "id": 22,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Hành vi đua xe trái phép bị xử lý như thế nào?",
        "options": [
          "1. Chỉ bị nhắc nhở.",
          "2. Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": true,
        "image": null,
        "page": 8,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự.\"\n• Vì sao đúng: Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.\n• Vì sao phương án khác sai: Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "whyCorrect": "Hành vi này là tình huống mất an toàn giao thông đặc biệt nghiêm trọng (CÂU ĐIỂM LIỆT). Luật Giao thông đường bộ nghiêm cấm tuyệt đối vì có thể trực tiếp dẫn đến tai nạn thảm khốc, gây nguy hiểm khôn lường cho xã hội.",
        "whyWrong": "Các phương án khác xem nhẹ mức độ nguy hiểm hoặc cho phép thực hiện hành vi vi phạm. Trong kỳ thi sát hạch thực tế, nếu chọn sai câu điểm liệt, học viên sẽ bị ĐÁNH TRƯỢT NGAY LẬP TỨC dù các câu khác làm đúng.",
        "correctAnswerText": "Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
      },
      {
        "id": 437,
        "chapter": "Báo hiệu đường bộ",
        "question": "Trong các biển dưới đây biển nào là biển \"Hết tốc độ tối thiểu\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Cả ba biển."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-437.jpeg",
        "page": 115,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 324,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Cả hai biển."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-324.jpeg",
        "page": 78,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1."
      },
      {
        "id": 12,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
        "options": [
          "1. Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
          "2. Người điều khiển xe máy chuyên dùng.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 7,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 449,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào đặt trên đường chính trước khi đến nơi đường giao nhau để rẽ vào đường cụt?",
        "options": [
          "1. Biển 1 và 2.",
          "2. Cả ba biển.",
          "3. Không biển nào."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-449.png",
        "page": 119,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Biển 1 và 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1 và 2."
      },
      {
        "id": 436,
        "chapter": "Báo hiệu đường bộ",
        "question": "Hiệu lực của biển \"Tốc độ tối đa cho phép\" hết tác dụng khi gặp biển nào dưới đây?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Biển 1 và biển 2."
        ],
        "correctIndex": 3,
        "answer": 3,
        "isCritical": false,
        "image": "/images/questions/cau-436.jpeg",
        "page": 114,
        "explanation": "• Đáp án đúng: Phương án 4 - \"Biển 1 và biển 2.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 1 và biển 2.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 1 và biển 2."
      },
      {
        "id": 134,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người có Giấy phép lái xe hạng CE được điều khiển loại xe nào dưới đây?",
        "options": [
          "1. Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
          "2. Các loại xe ô tô quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": null,
        "page": 31,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc."
      },
      {
        "id": 402,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào dưới đây là biển \"Cầu quay - cầu cất\"?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": "/images/questions/cau-402.jpeg",
        "page": 103,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Biển 3.\"\n• Vì sao đúng: Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".\n• Vì sao phương án khác sai: Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "whyCorrect": "Căn cứ Quy chuẩn kỹ thuật quốc gia về báo hiệu đường bộ (QCVN 41:2019/BGTVT), biển báo này có ý nghĩa chuẩn xác là: \"Biển 3.\".",
        "whyWrong": "Các phương án còn lại hiểu sai phạm vi tác dụng, đối tượng điều chỉnh hoặc chức năng của biển phụ bổ sung.",
        "correctAnswerText": "Biển 3."
      },
      {
        "id": 11,
        "chapter": "Quy định chung và quy tắc giao thông đường bộ",
        "question": "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
        "options": [
          "1. Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
          "2. Người điều khiển, dẫn dắt vật nuôi trên đường bộ; người đi bộ trên đường bộ.",
          "3. Cả hai ý trên."
        ],
        "correctIndex": 2,
        "answer": 2,
        "isCritical": false,
        "image": null,
        "page": 6,
        "explanation": "• Đáp án đúng: Phương án 3 - \"Cả hai ý trên.\"\n• Vì sao đúng: Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.\n• Vì sao phương án khác sai: Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "whyCorrect": "Căn cứ chuẩn xác quy định tại Luật Giao thông đường bộ, phương án \"Cả hai ý trên.\" bảo đảm đúng nguyên tắc kỹ thuật, đạo đức lái xe và pháp luật ATGT.",
        "whyWrong": "Các phương án khác chưa đầy đủ điều kiện an toàn, thiếu tính cẩn trọng hoặc vi phạm quy tắc chung của Luật Giao thông đường bộ.",
        "correctAnswerText": "Cả hai ý trên."
      },
      {
        "id": 320,
        "chapter": "Báo hiệu đường bộ",
        "question": "Biển nào dưới đây cấm xe ô tô rẽ trái và quay đầu?",
        "options": [
          "1. Biển 1.",
          "2. Biển 2.",
          "3. Biển 3.",
          "4. Biển 1 và biển 3."
        ],
        "correctIndex": 1,
        "answer": 1,
        "isCritical": false,
        "image": "/images/questions/cau-320.jpeg",
        "page": 77,
        "explanation": "• Đáp án đúng: Phương án 2 - \"Biển 2.\"\n• Vì sao đúng: Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2.\".\n• Vì sao phương án khác sai: Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "whyCorrect": "Căn cứ QCVN 41:2019/BGTVT, nhóm biển báo cấm có dạng hình tròn viền đỏ nền trắng. Áp dụng quy tắc cấm (cấm xe con cấm luôn xe tải; cấm xe tải cấm luôn máy kéo), đáp án đúng là: \"Biển 2.\".",
        "whyWrong": "Các phương án khác hiểu sai đối tượng bị cấm hoặc áp dụng sai nguyên tắc 'cấm nhỏ thì cấm lớn, cấm lớn không cấm nhỏ'.",
        "correctAnswerText": "Biển 2."
      },
      {
        "id": 516,
        "chapter": "Giải thế sa hình và kỹ năng xử lý tình huống giao thông",
        "question": "Xe nào phải nhường đường trong trường hợp này?",
        "options": [
          "1. Xe khách.",
          "2. Xe tải."
        ],
        "correctIndex": 0,
        "answer": 0,
        "isCritical": false,
        "image": "/images/questions/cau-516.jpeg",
        "page": 146,
        "explanation": "• Đáp án đúng: Phương án 1 - \"Xe khách.\"\n• Vì sao đúng: Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe khách.\".\n• Vì sao phương án khác sai: Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "whyCorrect": "Theo quy tắc điều khiển phương tiện tại nơi giao nhau và tín hiệu đèn giao thông, hành vi/hướng đi đúng quy tắc là: \"Xe khách.\".",
        "whyWrong": "Các phương án khác dẫn đến xung đột giao thông hoặc vi phạm hiệu lệnh của đèn/biển báo.",
        "correctAnswerText": "Xe khách."
      }
    ]
  }
};
