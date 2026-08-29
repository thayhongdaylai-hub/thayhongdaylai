import React, { useState, useEffect } from 'react';
import { X, Bike, Car, Truck, CheckCircle2, AlertCircle, Clock, ChevronLeft, ChevronRight, Award, RefreshCw, Layers, Eye, Check } from 'lucide-react';
import { EXAM_DATA } from '../data/examQuestions';

export default function TestModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null); // null | 'a1' | 'a' | 'b' | 'c1' | 'ce' | 'd'
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all' | 'wrong' | 'correct'

  // Vehicle category definitions
  const categories = [
    {
      group: 'xe_may',
      groupTitle: '🛵 Bằng Xe Máy & Phân Khối Lớn',
      items: [
        { id: 'a1', name: 'Hạng A1', desc: 'Xe máy dưới 175cm³ (25 câu / 19 phút - Đạt 21/25)', icon: Bike, badge: 'A1 - 25 Câu (19p)' },
        { id: 'a', name: 'Hạng A', desc: 'Xe mô tô PKL từ 175cm³ trở lên (25 câu / 19 phút - Đạt 23/25)', icon: Bike, badge: 'A - 25 Câu (19p)' },
      ]
    },
    {
      group: 'o_to',
      groupTitle: '🚗 Bằng Ô Tô & Vận Tải Chuyên Nghiệp',
      items: [
        { id: 'b', name: 'Hạng B', desc: 'Ô tô 4 - 9 chỗ (30 câu / 20 phút - Đạt 27/30)', icon: Car, badge: 'B - 30 Câu (20p)' },
        { id: 'c1', name: 'Hạng C1', desc: 'Xe ô tô tải 3.500kg - 7.500kg (35 câu / 22 phút - Đạt 32/35)', icon: Truck, badge: 'C1 Tải - 35 Câu (22p)' },
        { id: 'c', name: 'Hạng C', desc: 'Xe ô tô tải trọng lớn trên 7.500kg (40 câu / 24 phút - Đạt 36/40)', icon: Truck, badge: 'C Tải Nặng - 40 Câu (24p)' },
        { id: 'd1', name: 'Hạng D1', desc: 'Xe ô tô chở người 8 - 16 chỗ (45 câu / 26 phút - Đạt 41/45)', icon: Car, badge: 'D1 Xe 16 Chỗ - 45 Câu (26p)' },
        { id: 'd2', name: 'Hạng D2', desc: 'Xe ô tô chở người 16 - 29 chỗ (45 câu / 26 phút - Đạt 41/45)', icon: Car, badge: 'D2 Xe 29 Chỗ - 45 Câu (26p)' },
        { id: 'd', name: 'Hạng D', desc: 'Xe ô tô chở người 29 - 30 chỗ (45 câu / 26 phút - Đạt 41/45)', icon: Car, badge: 'D Xe Khách - 45 Câu (26p)' },
        { id: 'ce', name: 'Hạng CE', desc: 'Xe đầu kéo container, sơ-mi rơ-moóc (45 câu / 26 phút - Đạt 41/45)', icon: Truck, badge: 'CE Đầu Kéo - 45 Câu (26p)' },
      ]
    }
  ];

  // Timer Countdown Effect
  useEffect(() => {
    if (selectedCategory && !isSubmitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [selectedCategory, isSubmitted, timeLeft]);

  if (!isOpen) return null;

  const currentExam = selectedCategory ? EXAM_DATA[selectedCategory] : null;

  const handleStartExam = (catId) => {
    setSelectedCategory(catId);
    setCurrentQIndex(0);
    setUserAnswers({});
    setIsSubmitted(false);
    setIsReviewMode(false);
    setReviewFilter('all');
    setTimeLeft(EXAM_DATA[catId].timeLimit);
  };

  const handleSelectOption = (optIndex) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQIndex]: optIndex
    }));
  };

  const calculateScore = () => {
    if (!currentExam) return 0;
    let correct = 0;
    currentExam.questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) {
        correct++;
      }
    });
    return correct;
  };

  const handleResetExam = () => {
    setSelectedCategory(null);
    setCurrentQIndex(0);
    setUserAnswers({});
    setIsSubmitted(false);
    setIsReviewMode(false);
    setReviewFilter('all');
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 250,
      background: 'rgba(0, 0, 0, 0.82)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem',
      overflowY: 'auto'
    }}>
      <div className="glass-card test-modal-card" style={{
        width: '100%',
        maxWidth: '920px',
        maxHeight: '92vh',
        overflowY: 'auto',
        padding: '1.75rem 1.5rem',
        borderRadius: '1.5rem',
        background: 'var(--bg-card)',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'var(--bg-card-hover)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-muted)',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* STEP 1: Select License Category */}
        {!selectedCategory && (
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '0.75rem', fontSize: '0.78rem' }}>
              <Award size={14} />
              <span>Hệ Thống Thi Thử Lý Thuyết GPLX 2026 Chuẩn GTVT</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', marginBottom: '0.35rem' }}>
              Chọn Hạng Bằng Để Thi Thử Lý Thuyết
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Bộ đề thi sát hạch lý thuyết được cập nhật theo đúng chuẩn của Cục Đường Bộ Việt Nam.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {categories.map((catGroup, gIdx) => (
                <div key={gIdx}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--accent-emerald)', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {catGroup.groupTitle}
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                    gap: '1rem'
                  }}>
                    {catGroup.items.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleStartExam(item.id)}
                          className="glass-card"
                          style={{
                            padding: '1.25rem',
                            borderRadius: '1.15rem',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-card-hover)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent-emerald)';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                              <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: 'var(--accent-emerald-glow)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <IconComp size={22} color="var(--accent-emerald)" />
                              </div>
                              <span className="badge badge-blue" style={{ fontSize: '0.74rem' }}>{item.badge}</span>
                            </div>
                            <h4 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{item.name}</h4>
                            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item.desc}</p>
                          </div>
                          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.86rem' }}>
                            <span>Bắt đầu thi thử ({EXAM_DATA[item.id]?.questions.length || 30} câu / {Math.floor((EXAM_DATA[item.id]?.timeLimit || 1200) / 60)} phút)</span>
                            <ChevronRight size={15} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Exam Questions Screen */}
        {selectedCategory && !isSubmitted && (
          <div>
            {/* Exam Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-color)',
              marginBottom: '1.75rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <button
                  onClick={handleResetExam}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    marginBottom: '0.3rem'
                  }}
                >
                  <ChevronLeft size={16} /> Đổi hạng thi khác
                </button>
                <h3 style={{ fontSize: '1.35rem' }}>{currentExam.title}</h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Timer Pill */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  background: timeLeft < 180 ? 'rgba(239, 68, 68, 0.2)' : 'var(--bg-input)',
                  border: timeLeft < 180 ? '1px solid var(--accent-red)' : '1px solid var(--border-color)',
                  color: timeLeft < 180 ? 'var(--accent-red)' : 'var(--accent-emerald)',
                  fontWeight: 700,
                  fontSize: '1rem'
                }}>
                  <Clock size={18} />
                  <span>{formatTime(timeLeft)}</span>
                </div>

                <button
                  onClick={() => setIsSubmitted(true)}
                  className="btn btn-primary"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
                >
                  Nộp Bài Ngay
                </button>
              </div>
            </div>

            {/* Layout Grid: Left Question + Right Question Matrix */}
            <div className="test-modal-exam-grid" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '1.5rem', alignItems: 'start' }}>
              {/* Question Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span className="badge badge-emerald">Câu {currentQIndex + 1} / {currentExam.questions.length}</span>
                  {userAnswers[currentQIndex] !== undefined && (
                    <span className="badge badge-blue">Đã chọn đáp án</span>
                  )}
                </div>

                <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {currentExam.questions[currentQIndex].question}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
                  {currentExam.questions[currentQIndex].options.map((optText, oIdx) => {
                    const isSelected = userAnswers[currentQIndex] === oIdx;
                    return (
                      <div
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        style={{
                          padding: '1.1rem 1.25rem',
                          borderRadius: '1rem',
                          border: isSelected ? '2px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                          background: isSelected ? 'var(--accent-emerald-glow)' : 'var(--bg-input)',
                          color: isSelected ? 'var(--accent-emerald)' : 'var(--text-main)',
                          fontWeight: isSelected ? 600 : 400,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          lineHeight: 1.45,
                          fontSize: '0.95rem'
                        }}
                      >
                        {optText}
                      </div>
                    );
                  })}
                </div>

                {/* Prev / Next controls */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    disabled={currentQIndex === 0}
                    onClick={() => setCurrentQIndex(prev => prev - 1)}
                    className="btn btn-secondary"
                    style={{ padding: '0.65rem 1.25rem', opacity: currentQIndex === 0 ? 0.5 : 1, fontSize: '0.9rem' }}
                  >
                    <ChevronLeft size={16} /> Câu Trước
                  </button>

                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Đã làm: {Object.keys(userAnswers).length}/{currentExam.questions.length} câu
                  </span>

                  <button
                    disabled={currentQIndex === currentExam.questions.length - 1}
                    onClick={() => setCurrentQIndex(prev => prev + 1)}
                    className="btn btn-primary"
                    style={{ padding: '0.65rem 1.25rem', opacity: currentQIndex === currentExam.questions.length - 1 ? 0.5 : 1, fontSize: '0.9rem' }}
                  >
                    Câu Tiếp <ChevronRight size={16} color="#051A10" />
                  </button>
                </div>
              </div>

              {/* Right Side: 30-Question Grid Navigation Card */}
              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '1.25rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={18} color="var(--accent-emerald)" />
                  <span>Danh Sách {currentExam.questions.length} Câu Hỏi</span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '0.5rem'
                }}>
                  {currentExam.questions.map((_, qIdx) => {
                    const isCurrent = currentQIndex === qIdx;
                    const isAnswered = userAnswers[qIdx] !== undefined;
                    return (
                      <button
                        key={qIdx}
                        onClick={() => setCurrentQIndex(qIdx)}
                        style={{
                          width: '100%',
                          height: '38px',
                          borderRadius: '8px',
                          border: isCurrent ? '2px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                          background: isCurrent ? 'var(--accent-emerald-glow)' : isAnswered ? 'var(--accent-blue-glow)' : 'var(--bg-input)',
                          color: isCurrent ? 'var(--accent-emerald)' : isAnswered ? 'var(--accent-blue)' : 'var(--text-muted)',
                          fontWeight: isCurrent || isAnswered ? 700 : 500,
                          fontSize: '0.85rem',
                          cursor: 'pointer'
                        }}
                      >
                        {qIdx + 1}
                      </button>
                    );
                  })}
                </div>

                <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--accent-emerald-glow)', border: '1px solid var(--accent-emerald)' }}></span>
                    <span>Đang xem hiện tại</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--accent-blue-glow)', border: '1px solid var(--accent-blue)' }}></span>
                    <span>Đã chọn đáp án</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Exam Result Summary & Review Mode */}
        {selectedCategory && isSubmitted && !isReviewMode && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            {calculateScore() >= currentExam.passScore ? (
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--accent-emerald-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <CheckCircle2 size={48} color="var(--accent-emerald)" />
              </div>
            ) : (
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <AlertCircle size={48} color="var(--accent-red)" />
              </div>
            )}

            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {calculateScore() >= currentExam.passScore ? '🎉 CHÚC MỪNG: KẾT QUẢ ĐẠT!' : '⚠️ KẾT QUẢ: CHƯA ĐẠT!'}
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              {currentExam.title} • Điểm đạt chuẩn sát hạch GTVT: <strong>{currentExam.passScore}/{currentExam.total} câu</strong>
            </p>

            {/* Score Big Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              padding: '1.25rem 2.5rem',
              borderRadius: '1.5rem',
              background: 'var(--bg-card-hover)',
              border: '1px solid var(--border-color)',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Số câu trả lời đúng</div>
                <div style={{
                  fontSize: '2.5rem',
                  fontFamily: "'Google Sans', 'Quicksand', sans-serif",
                  fontWeight: 800,
                  color: calculateScore() >= currentExam.passScore ? 'var(--accent-emerald)' : 'var(--accent-red)'
                }}>
                  {calculateScore()} / {currentExam.total}
                </div>
              </div>
              <div style={{ height: '40px', width: '1px', background: 'var(--border-color)' }}></div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tỷ lệ chính xác</div>
                <div style={{ fontSize: '2.5rem', fontFamily: "'Google Sans', 'Quicksand', sans-serif", fontWeight: 800, color: 'var(--accent-blue)' }}>
                  {Math.round((calculateScore() / currentExam.total) * 100)}%
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsReviewMode(true)}
                className="btn btn-primary"
                style={{ padding: '0.9rem 1.75rem', background: 'var(--accent-emerald)', borderColor: 'var(--accent-emerald)' }}
              >
                <Eye size={18} />
                <span>Xem Chi Tiết Đáp Án & Giải Thích</span>
              </button>
              <button
                onClick={handleResetExam}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.75rem' }}
              >
                <RefreshCw size={18} />
                <span>Thi Lại Hạng Khác</span>
              </button>
              <button
                onClick={() => handleStartExam(selectedCategory)}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.75rem' }}
              >
                <span>Thi Lại Lần Nữa ({currentExam.total} Câu)</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Detailed Exam Result Review Screen */}
        {selectedCategory && isSubmitted && isReviewMode && (
          <div>
            {/* Review Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-color)',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <button
                  onClick={() => setIsReviewMode(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    marginBottom: '0.3rem'
                  }}
                >
                  <ChevronLeft size={16} /> Quay lại Bảng Kết Quả
                </button>
                <h3 style={{ fontSize: '1.35rem' }}>Xem Chi Tiết Bài Làm: {currentExam.title}</h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className={`badge ${calculateScore() >= currentExam.passScore ? 'badge-emerald' : 'badge-red'}`} style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}>
                  Kết quả: {calculateScore()}/{currentExam.total} câu ({calculateScore() >= currentExam.passScore ? 'ĐẠT' : 'CHƯA ĐẠT'})
                </span>
                <button
                  onClick={() => handleStartExam(selectedCategory)}
                  className="btn btn-primary"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <RefreshCw size={16} /> Thi Lại
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setReviewFilter('all')}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  border: reviewFilter === 'all' ? '2px solid var(--accent-blue)' : '1px solid var(--border-color)',
                  background: reviewFilter === 'all' ? 'var(--accent-blue-glow)' : 'var(--bg-input)',
                  color: reviewFilter === 'all' ? 'var(--accent-blue)' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Tất cả ({currentExam.questions.length})
              </button>
              <button
                onClick={() => setReviewFilter('wrong')}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  border: reviewFilter === 'wrong' ? '2px solid var(--accent-red)' : '1px solid var(--border-color)',
                  background: reviewFilter === 'wrong' ? 'rgba(239, 68, 68, 0.2)' : 'var(--bg-input)',
                  color: reviewFilter === 'wrong' ? 'var(--accent-red)' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                ❌ Câu Làm Sai ({currentExam.questions.filter((q, idx) => userAnswers[idx] !== undefined && userAnswers[idx] !== q.answer).length})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  border: reviewFilter === 'correct' ? '2px solid var(--accent-emerald)' : '1px solid var(--border-color)',
                  background: reviewFilter === 'correct' ? 'var(--accent-emerald-glow)' : 'var(--bg-input)',
                  color: reviewFilter === 'correct' ? 'var(--accent-emerald)' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                ✅ Câu Làm Đúng ({currentExam.questions.filter((q, idx) => userAnswers[idx] === q.answer).length})
              </button>
            </div>

            {/* Layout Grid: Left Question Detail + Right Color Matrix */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '2rem', alignItems: 'start' }}>
              {/* Question Review Details */}
              <div>
                {(() => {
                  const q = currentExam.questions[currentQIndex];
                  const userAns = userAnswers[currentQIndex];
                  const isCorrect = userAns === q.answer;
                  const isAnswered = userAns !== undefined;

                  return (
                    <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <span className="badge badge-blue">Câu {currentQIndex + 1} / {currentExam.questions.length}</span>
                        {isCorrect ? (
                          <span className="badge badge-emerald" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <Check size={14} /> BẠN ĐÃ TRẢ LỜI ĐÚNG (+1 điểm)
                          </span>
                        ) : isAnswered ? (
                          <span className="badge badge-red" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid #ef4444' }}>
                            <X size={14} /> BẠN ĐÃ TRẢ LỜI SAI
                          </span>
                        ) : (
                          <span className="badge badge-orange" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid #f59e0b' }}>
                            <AlertCircle size={14} /> CHƯA CHỌN ĐÁP ÁN
                          </span>
                        )}
                      </div>

                      <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                        {q.question}
                      </h4>

                      {/* Options List with Red/Green Color Highlights */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                        {q.options.map((optText, oIdx) => {
                          const isUserChoice = userAns === oIdx;
                          const isRightAnswer = q.answer === oIdx;

                          let borderStyle = '1px solid var(--border-color)';
                          let bgStyle = 'var(--bg-input)';
                          let textColor = 'var(--text-main)';
                          let labelTag = null;

                          if (isRightAnswer) {
                            borderStyle = '2px solid #10b981';
                            bgStyle = 'rgba(16, 185, 129, 0.15)';
                            textColor = '#10b981';
                            labelTag = <span style={{ fontSize: '0.78rem', background: '#10b981', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>✅ ĐÁP ÁN ĐÚNG CHUẨN</span>;
                          } else if (isUserChoice && !isRightAnswer) {
                            borderStyle = '2px solid #ef4444';
                            bgStyle = 'rgba(239, 68, 68, 0.15)';
                            textColor = '#ef4444';
                            labelTag = <span style={{ fontSize: '0.78rem', background: '#ef4444', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>❌ LỰA CHỌN CỦA BẠN (SAI)</span>;
                          }

                          return (
                            <div
                              key={oIdx}
                              style={{
                                padding: '1.1rem 1.25rem',
                                borderRadius: '1rem',
                                border: borderStyle,
                                background: bgStyle,
                                color: textColor,
                                fontWeight: (isRightAnswer || isUserChoice) ? 600 : 400,
                                lineHeight: 1.45,
                                fontSize: '0.95rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '0.75rem'
                              }}
                            >
                              <span>{optText}</span>
                              {labelTag}
                            </div>
                          );
                        })}
                      </div>

                      {/* Detailed Explanation Box */}
                      <div style={{
                        padding: '1.25rem',
                        borderRadius: '1rem',
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: 'var(--text-main)',
                        fontSize: '0.92rem',
                        lineHeight: 1.5
                      }}>
                        <div style={{ fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={18} />
                          <span>Giải Thích Đáp Án Chi Tiết (Luật GTVT 2026):</span>
                        </div>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>{q.explanation}</p>
                      </div>

                      {/* Prev / Next controls */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                        <button
                          disabled={currentQIndex === 0}
                          onClick={() => setCurrentQIndex(prev => prev - 1)}
                          className="btn btn-secondary"
                          style={{ padding: '0.65rem 1.25rem', opacity: currentQIndex === 0 ? 0.5 : 1, fontSize: '0.9rem' }}
                        >
                          <ChevronLeft size={16} /> Câu Trước
                        </button>

                        <button
                          disabled={currentQIndex === currentExam.questions.length - 1}
                          onClick={() => setCurrentQIndex(prev => prev + 1)}
                          className="btn btn-primary"
                          style={{ padding: '0.65rem 1.25rem', opacity: currentQIndex === currentExam.questions.length - 1 ? 0.5 : 1, fontSize: '0.9rem' }}
                        >
                          Câu Tiếp <ChevronRight size={16} color="#051A10" />
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Right Matrix: Color Coded (Green = Correct, Red = Wrong, Orange = Unanswered) */}
              <div className="glass-card" style={{ padding: '1.25rem', borderRadius: '1.25rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={18} color="var(--accent-emerald)" />
                  <span>Ma Trận {currentExam.questions.length} Câu Hỏi</span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '0.5rem',
                  maxHeight: '350px',
                  overflowY: 'auto',
                  paddingRight: '4px'
                }}>
                  {currentExam.questions.map((q, qIdx) => {
                    const isSelected = currentQIndex === qIdx;
                    const uAns = userAnswers[qIdx];
                    const isRight = uAns === q.answer;
                    const isAns = uAns !== undefined;

                    // Filter condition check
                    if (reviewFilter === 'wrong' && (isRight || !isAns)) return null;
                    if (reviewFilter === 'correct' && !isRight) return null;

                    let btnBg = 'var(--bg-input)';
                    let btnBorder = 'var(--border-color)';
                    let btnColor = 'var(--text-muted)';

                    if (isRight) {
                      btnBg = 'rgba(16, 185, 129, 0.25)';
                      btnBorder = '#10b981';
                      btnColor = '#10b981';
                    } else if (isAns && !isRight) {
                      btnBg = 'rgba(239, 68, 68, 0.25)';
                      btnBorder = '#ef4444';
                      btnColor = '#ef4444';
                    } else if (!isAns) {
                      btnBg = 'rgba(245, 158, 11, 0.25)';
                      btnBorder = '#f59e0b';
                      btnColor = '#f59e0b';
                    }

                    return (
                      <button
                        key={qIdx}
                        onClick={() => setCurrentQIndex(qIdx)}
                        style={{
                          width: '100%',
                          height: '38px',
                          borderRadius: '8px',
                          border: isSelected ? '2px solid #3b82f6' : `1px solid ${btnBorder}`,
                          background: btnBg,
                          color: btnColor,
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          boxShadow: isSelected ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none'
                        }}
                      >
                        {qIdx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.78rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(16, 185, 129, 0.3)', border: '1px solid #10b981' }}></span>
                    <span>Đúng (Xanh lá)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(239, 68, 68, 0.3)', border: '1px solid #ef4444' }}></span>
                    <span>Sai (Đỏ - chỉ rõ đáp án)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(245, 158, 11, 0.3)', border: '1px solid #f59e0b' }}></span>
                    <span>Chưa làm (Vàng cam)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .test-modal-exam-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .test-modal-card {
            padding: 1.25rem 1rem !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
