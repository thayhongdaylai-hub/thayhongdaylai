import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  LICENSE_CONFIGS,
  QUESTIONS_DATABASE,
  CRITICAL_60_QUESTIONS,
  generateRandomExam
} from '../data/theoryQuestions';
import {
  Timer,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Bookmark,
  Check,
  HelpCircle,
  Car,
  Bike,
  ShieldCheck,
  Send,
  RefreshCw,
  Clock
} from 'lucide-react';

export default function TheoryExam() {
  const [selectedLicense, setSelectedLicense] = useState('B'); // Default B2 Car
  const [examMode, setExamMode] = useState('mock'); // 'mock' | 'critical' | 'all'
  const [currentExam, setCurrentExam] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: optionIndex }
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState({}); // { [questionId]: true }
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  const [isExamActive, setIsExamActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [examResult, setExamResult] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all'); // for practice mode

  const timerRef = useRef(null);

  // Initialize or generate a new randomized exam
  const startNewExam = useCallback((licenseKey = selectedLicense, mode = examMode) => {
    let examData;
    if (mode === 'critical') {
      // Full 60 critical questions mode
      const config = LICENSE_CONFIGS[licenseKey];
      const critQuestions = CRITICAL_60_QUESTIONS;
      examData = {
        examId: `CRIT-${Date.now().toString(36).toUpperCase()}`,
        licenseType: licenseKey,
        config: {
          ...config,
          totalQuestions: critQuestions.length,
          durationMinutes: 30,
          passingScore: critQuestions.length,
          name: `Trọn Bộ 60 Câu Hỏi Điểm Liệt Bộ GTVT`
        },
        questions: critQuestions
      };
    } else {
      examData = generateRandomExam(licenseKey);
    }

    setCurrentExam(examData);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setBookmarkedQuestions({});
    setTimeLeft(examData.config.durationMinutes * 60);
    setIsExamActive(true);
    setIsSubmitted(false);
    setExamResult(null);
  }, [selectedLicense, examMode]);

  // Start initial exam on mount or license change
  useEffect(() => {
    startNewExam(selectedLicense, examMode);
  }, [selectedLicense, examMode, startNewExam]);

  // Timer countdown
  useEffect(() => {
    if (isExamActive && !isSubmitted && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isExamActive, isSubmitted, timeLeft]);

  // Handle select answer
  const handleSelectOption = (optionIndex) => {
    if (isSubmitted || !currentExam) return;
    const currentQ = currentExam.questions[currentQuestionIndex];
    if (!currentQ) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  // Toggle bookmark
  const toggleBookmark = () => {
    if (!currentExam) return;
    const currentQ = currentExam.questions[currentQuestionIndex];
    if (!currentQ) return;

    setBookmarkedQuestions(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  // Submit exam calculation
  const handleSubmitExam = useCallback(() => {
    if (!currentExam || isSubmitted) return;

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;
    let failedCritical = false;
    const details = [];

    currentExam.questions.forEach(q => {
      const selected = userAnswers[q.id];
      const isAnswered = selected !== undefined;
      const isCorrect = selected === q.correctIndex;

      if (!isAnswered) {
        unansweredCount += 1;
      } else if (isCorrect) {
        correctCount += 1;
      } else {
        wrongCount += 1;
        if (q.isCritical) {
          failedCritical = true;
        }
      }

      details.push({
        questionId: q.id,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        userAnswer: selected,
        isCorrect,
        isCritical: q.isCritical,
        explanation: q.explanation
      });
    });

    const isPassed = correctCount >= currentExam.config.passingScore && !failedCritical;

    const result = {
      total: currentExam.questions.length,
      correctCount,
      wrongCount,
      unansweredCount,
      passingScore: currentExam.config.passingScore,
      isPassed,
      failedCritical,
      percentage: Math.round((correctCount / currentExam.questions.length) * 100),
      timeSpentSeconds: currentExam.config.durationMinutes * 60 - timeLeft,
      details
    };

    setExamResult(result);
    setIsSubmitted(true);
    setIsExamActive(false);
  }, [currentExam, isSubmitted, userAnswers, timeLeft]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isSubmitted || !isExamActive) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentExam && currentQuestionIndex < currentExam.questions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(prev => prev - 1);
        }
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIndex = parseInt(e.key, 10) - 1;
        handleSelectOption(optionIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSubmitted, isExamActive, currentExam, currentQuestionIndex]);

  // Formatted timer
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = currentExam?.questions[currentQuestionIndex];
  const currentAnswer = currentQ ? userAnswers[currentQ.id] : undefined;

  return (
    <section id="theory-exam" style={{ padding: '6rem 0', background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        {/* Title Header */}
        <div className="section-title-wrapper" style={{ marginBottom: '2.5rem' }}>
          <div className="badge badge-blue" style={{ marginBottom: '0.8rem' }}>
            <Award size={15} />
            <span>Phần Mềm Sát Hạch Bộ GTVT Mới Nhất</span>
          </div>
          <h2 className="section-title">
            Thi Thử <span className="text-gradient">Lý Thuyết Lái Xe</span> Trực Tuyến
          </h2>
          <p className="section-subtitle">
            Bộ đề thi 250 câu xe máy (Hạng A, A1) & 600 câu ô tô (Hạng B, C-1, D) — Tự động tạo đề ngẫu nhiên không trùng lặp, chấm điểm tự động chuẩn Bộ GTVT.
          </p>
        </div>

        {/* Category & Exam Selector Tabs */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {/* Responsive License Selector (Always displays all license grades on mobile) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0.45rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-sm)',
              maxWidth: '100%',
              gap: '0.4rem'
            }}
          >
            {Object.entries(LICENSE_CONFIGS).map(([key, config]) => {
              const isSelected = selectedLicense === key;
              const isMotor = config.vehicleType === 'motorbike';
              return (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedLicense(key);
                  }}
                  className="btn"
                  style={{
                    padding: '0.55rem 0.85rem',
                    borderRadius: '10px',
                    fontSize: 'clamp(0.82rem, 3vw, 0.9rem)',
                    fontWeight: 700,
                    border: 'none',
                    background: isSelected ? 'var(--primary)' : 'transparent',
                    color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                    boxShadow: isSelected ? 'var(--shadow-primary)' : 'none',
                    transition: 'all 0.25s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer'
                  }}
                >
                  {isMotor ? <Bike size={15} /> : <Car size={15} />}
                  <span>{config.badgeName || key}</span>
                  <span style={{ opacity: 0.85, fontSize: '0.74rem' }}>
                    ({config.totalQuestions}c)
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mode Switcher */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '0.35rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-sm)',
            gap: '0.35rem',
            maxWidth: '100%'
          }}>
            <button
              onClick={() => setExamMode('mock')}
              className="btn"
              style={{
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: 700,
                border: 'none',
                background: examMode === 'mock' ? 'var(--primary-tint)' : 'transparent',
                color: examMode === 'mock' ? 'var(--primary)' : 'var(--text-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <Timer size={14} />
              <span>Đề Thi Sát Hạch</span>
            </button>

            <button
              onClick={() => setExamMode('critical')}
              className="btn"
              style={{
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                fontSize: '0.84rem',
                fontWeight: 700,
                border: 'none',
                background: examMode === 'critical' ? 'var(--accent-red-tint)' : 'transparent',
                color: examMode === 'critical' ? '#EF4444' : 'var(--text-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <AlertTriangle size={14} />
              <span>60 Câu Điểm Liệt</span>
            </button>
          </div>
        </div>

        {/* EXAM MAIN CONTAINER */}
        <div className="modern-card exam-main-card" style={{
          padding: 'clamp(0.65rem, 2.5vw, 1.75rem)',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-md)',
          background: 'var(--bg-card)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Top Info Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.85rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-color)',
            marginBottom: '1.25rem'
          }}>
            <div style={{ flex: 1, minWidth: 'min(100%, 250px)' }}>
              <div style={{
                fontSize: 'clamp(1.02rem, 2.6vw, 1.2rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                flexWrap: 'wrap'
              }}>
                <span>{LICENSE_CONFIGS[selectedLicense]?.name}</span>
                <span className="badge badge-emerald" style={{ fontSize: '0.72rem', whiteSpace: 'nowrap' }}>
                  {examMode === 'critical' ? 'Ôn Câu Điểm Liệt' : 'Đề Thi Ngẫu Nhiên'}
                </span>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Chuẩn đạt: {LICENSE_CONFIGS[selectedLicense]?.passingScore}/{currentExam?.questions.length} câu • Không sai câu điểm liệt
              </div>
            </div>

            {/* Controls & Timer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {/* Countdown Timer */}
              {!isSubmitted && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '10px',
                  background: timeLeft < 180 ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-input)',
                  border: timeLeft < 180 ? '1px solid #EF4444' : '1px solid var(--border-color)',
                  color: timeLeft < 180 ? '#EF4444' : 'var(--text-main)',
                  fontWeight: 800,
                  fontSize: '1.05rem'
                }}>
                  <Clock size={16} color={timeLeft < 180 ? '#EF4444' : 'var(--accent-emerald)'} />
                  <span>{formatTime(timeLeft)}</span>
                </div>
              )}

              {/* Random New Exam Button */}
              <button
                onClick={() => startNewExam(selectedLicense, examMode)}
                className="btn btn-secondary"
                style={{ padding: '0.45rem 0.8rem', fontSize: '0.82rem', borderRadius: '10px' }}
                title="Tự động bốc đề thi ngẫu nhiên khác không trùng lặp"
              >
                <RefreshCw size={14} />
                <span>Đề Mới</span>
              </button>

              {/* Submit Button */}
              {!isSubmitted ? (
                <button
                  onClick={handleSubmitExam}
                  className="btn btn-primary"
                  style={{ padding: '0.45rem 0.95rem', fontSize: '0.84rem', borderRadius: '10px' }}
                >
                  <Send size={14} />
                  <span>Nộp Bài</span>
                </button>
              ) : (
                <button
                  onClick={() => startNewExam(selectedLicense, examMode)}
                  className="btn btn-primary"
                  style={{ padding: '0.45rem 0.95rem', fontSize: '0.84rem', borderRadius: '10px' }}
                >
                  <RotateCcw size={14} />
                  <span>Thi Lại</span>
                </button>
              )}
            </div>
          </div>

          {/* RESULTS BANNER (IF SUBMITTED) */}
          {isSubmitted && examResult && (
            <div style={{
              padding: '1.75rem',
              borderRadius: '18px',
              background: examResult.isPassed ? 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(5,150,105,0.05) 100%)' : 'linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(220,38,38,0.05) 100%)',
              border: `2px solid ${examResult.isPassed ? 'var(--accent-emerald)' : '#EF4444'}`,
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: examResult.isPassed ? 'var(--gradient-emerald)' : '#EF4444', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                {examResult.isPassed ? <CheckCircle2 size={32} /> : <XCircle size={32} />}
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: examResult.isPassed ? 'var(--accent-emerald)' : '#EF4444', marginBottom: '0.3rem' }}>
                {examResult.isPassed ? 'CHÚC MỪNG! BẠN ĐÃ ĐẠT KỲ THI' : 'RẤT TIẾC! BẠN CHƯA ĐẠT'}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 1.25rem auto' }}>
                {examResult.failedCritical ? (
                  <span style={{ color: '#EF4444', fontWeight: 700 }}>
                    ⚠️ Bị truất quyền sát hạch trực tiếp do làm sai câu hỏi điểm liệt.
                  </span>
                ) : examResult.isPassed ? (
                  `Bạn đã trả lời đúng ${examResult.correctCount}/${examResult.total} câu (Đạt yêu cầu tối thiểu ${examResult.passingScore} câu). Bạn đã sẵn sàng cho kỳ thi sát hạch thực tế!`
                ) : (
                  `Bạn đạt ${examResult.correctCount}/${examResult.total} câu (Yêu cầu tối thiểu ${examResult.passingScore} câu). Hãy luyện tập thêm!`
                )}
              </p>

              {/* Stats row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Số câu đúng</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>{examResult.correctCount}</div>
                </div>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Số câu sai</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#EF4444' }}>{examResult.wrongCount}</div>
                </div>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Chưa trả lời</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-light)' }}>{examResult.unansweredCount}</div>
                </div>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Thời gian làm</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>{Math.floor(examResult.timeSpentSeconds / 60)}p {examResult.timeSpentSeconds % 60}s</div>
                </div>
              </div>
            </div>
          )}

          {/* QUESTION & MATRIX GRID LAYOUT */}
          {currentQ && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 300px',
              gap: '2rem',
              alignItems: 'start'
            }}
            className="exam-grid-responsive"
            >
              {/* LEFT: CURRENT QUESTION PANEL */}
              <div className="exam-question-card" style={{
                background: 'var(--bg-input)',
                borderRadius: '16px',
                padding: 'clamp(0.85rem, 2.5vw, 1.5rem)',
                border: '1px solid var(--border-color)',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                {/* Question Header with Quick Flip Arrows */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                  gap: '0.45rem',
                  width: '100%'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.28rem 0.75rem',
                      borderRadius: '8px',
                      background: 'var(--accent-emerald)',
                      color: '#FFFFFF',
                      fontSize: '0.86rem',
                      fontWeight: 800,
                      whiteSpace: 'nowrap'
                    }}>
                      Câu {currentQuestionIndex + 1}/{currentExam.questions.length}
                    </span>

                    {currentQ.isCritical && (
                      <span className="badge" style={{
                        background: 'rgba(239, 68, 68, 0.15)',
                        color: '#EF4444',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.55rem',
                        whiteSpace: 'nowrap'
                      }}>
                        <AlertTriangle size={13} />
                        ĐIỂM LIỆT
                      </span>
                    )}
                  </div>

                  {/* Bookmark & Quick Flip Arrows on Top */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
                    {!isSubmitted && (
                      <button
                        onClick={toggleBookmark}
                        className="btn"
                        style={{
                          padding: '0.35rem 0.6rem',
                          borderRadius: '8px',
                          background: bookmarkedQuestions[currentQ.id] ? 'rgba(245, 158, 11, 0.15)' : 'var(--bg-card)',
                          border: bookmarkedQuestions[currentQ.id] ? '1px solid #F59E0B' : '1px solid var(--border-color)',
                          color: bookmarkedQuestions[currentQ.id] ? '#D97706' : 'var(--text-muted)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          whiteSpace: 'nowrap'
                        }}
                        title="Đánh dấu xem lại câu này"
                      >
                        <Bookmark size={13} fill={bookmarkedQuestions[currentQ.id] ? '#F59E0B' : 'none'} />
                        <span>{bookmarkedQuestions[currentQ.id] ? 'Đã dấu' : 'Đánh dấu'}</span>
                      </button>
                    )}

                    <button
                      onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                      disabled={currentQuestionIndex === 0}
                      className="btn btn-secondary"
                      style={{ padding: '0.35rem 0.65rem', borderRadius: '8px', opacity: currentQuestionIndex === 0 ? 0.35 : 1 }}
                      title="Câu trước"
                    >
                      <ArrowLeft size={15} />
                    </button>

                    <button
                      onClick={() => setCurrentQuestionIndex(prev => Math.min(currentExam.questions.length - 1, prev + 1))}
                      disabled={currentQuestionIndex === currentExam.questions.length - 1}
                      className="btn btn-primary"
                      style={{ padding: '0.35rem 0.65rem', borderRadius: '8px', opacity: currentQuestionIndex === currentExam.questions.length - 1 ? 0.35 : 1 }}
                      title="Câu tiếp theo"
                    >
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>

                {/* Question Content */}
                <h4 style={{
                  fontSize: 'clamp(1.02rem, 2.7vw, 1.2rem)',
                  fontWeight: 700,
                  lineHeight: 1.48,
                  color: 'var(--text-main)',
                  marginBottom: '1.15rem',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}>
                  {currentQ.question}
                </h4>

                {/* Options List (Spacious & Touch-Friendly) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = currentAnswer === idx;
                    const isCorrect = currentQ.correctIndex === idx;

                    let bg = 'var(--bg-card)';
                    let border = '1.5px solid var(--border-color)';
                    let textColor = 'var(--text-main)';
                    let indicatorBg = 'var(--bg-input)';
                    let indicatorColor = 'var(--text-muted)';

                    if (isSubmitted) {
                      if (isCorrect) {
                        bg = 'rgba(16, 185, 129, 0.14)';
                        border = '2px solid var(--accent-emerald)';
                        textColor = 'var(--text-main)';
                        indicatorBg = 'var(--accent-emerald)';
                        indicatorColor = '#FFFFFF';
                      } else if (isSelected && !isCorrect) {
                        bg = 'rgba(239, 68, 68, 0.14)';
                        border = '2px solid #EF4444';
                        textColor = 'var(--text-main)';
                        indicatorBg = '#EF4444';
                        indicatorColor = '#FFFFFF';
                      }
                    } else if (isSelected) {
                      bg = 'rgba(16, 185, 129, 0.12)';
                      border = '2px solid var(--accent-emerald)';
                      indicatorBg = 'var(--accent-emerald)';
                      indicatorColor = '#FFFFFF';
                    }

                    return (
                      <div
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          padding: '0.8rem 1rem',
                          borderRadius: '12px',
                          background: bg,
                          border: border,
                          cursor: isSubmitted ? 'default' : 'pointer',
                          transition: 'all 0.2s ease',
                          color: textColor,
                          boxShadow: isSelected ? '0 2px 8px rgba(16, 185, 129, 0.2)' : 'none'
                        }}
                      >
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: indicatorBg,
                          color: indicatorColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '0.92rem',
                          flexShrink: 0
                        }}>
                          {idx + 1}
                        </div>
                        <div style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.02rem)', fontWeight: 600, lineHeight: 1.48, flex: 1 }}>
                          {opt}
                        </div>
                        {isSubmitted && isCorrect && (
                          <div style={{ color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                            <CheckCircle2 size={18} />
                            <span>Đúng</span>
                          </div>
                        )}
                        {isSubmitted && isSelected && !isCorrect && (
                          <div style={{ color: '#EF4444', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                            <XCircle size={18} />
                            <span>Đã chọn</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Box (When Submitted) */}
                {isSubmitted && (
                  <div style={{
                    padding: '1.1rem',
                    borderRadius: '12px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderLeft: '4px solid var(--accent-emerald)',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-emerald)', fontWeight: 800, fontSize: '0.88rem', marginBottom: '0.35rem' }}>
                      <HelpCircle size={16} />
                      <span>Giải Thích & Mẹo Thi Sát Hạch:</span>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      {currentQ.explanation}
                    </div>
                  </div>
                )}

                {/* Integrated Action Row Directly Under Options: Câu Trước | Nộp Bài / Kết Quả | Câu Sau */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.2fr 1fr',
                  gap: '0.5rem',
                  alignItems: 'center'
                }}>
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="btn btn-secondary"
                    style={{
                      padding: '0.75rem 0.5rem',
                      fontSize: '0.88rem',
                      borderRadius: '10px',
                      opacity: currentQuestionIndex === 0 ? 0.35 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <ArrowLeft size={16} />
                    <span>Câu Trước</span>
                  </button>

                  {!isSubmitted ? (
                    <button
                      onClick={handleSubmitExam}
                      className="btn btn-gold"
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <Send size={15} />
                      <span>Nộp Bài Thi</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const examEl = document.getElementById('theory-exam');
                        if (examEl) examEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn btn-gold"
                      style={{
                        padding: '0.75rem 0.5rem',
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <CheckCircle2 size={15} />
                      <span>Xem Kết Quả</span>
                    </button>
                  )}

                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.min(currentExam.questions.length - 1, prev + 1))}
                    disabled={currentQuestionIndex === currentExam.questions.length - 1}
                    className="btn btn-primary"
                    style={{
                      padding: '0.75rem 0.5rem',
                      fontSize: '0.88rem',
                      borderRadius: '10px',
                      opacity: currentQuestionIndex === currentExam.questions.length - 1 ? 0.35 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <span>Câu Sau</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* RIGHT: QUESTION MATRIX GRID */}
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: '18px',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Danh Sách Câu Hỏi</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Đã làm: {Object.keys(userAnswers).length}/{currentExam.questions.length}
                  </span>
                </div>

                {/* Matrix Grid of numbers */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '0.45rem',
                  marginBottom: '1.25rem',
                  maxHeight: '340px',
                  overflowY: 'auto',
                  paddingRight: '0.25rem'
                }}>
                  {currentExam.questions.map((q, idx) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isCurrent = currentQuestionIndex === idx;
                    const isBookmarked = bookmarkedQuestions[q.id];

                    let bg = 'var(--bg-input)';
                    let color = 'var(--text-muted)';
                    let border = '1px solid var(--border-color)';

                    if (isSubmitted) {
                      const isCorrect = userAnswers[q.id] === q.correctIndex;
                      if (isCorrect) {
                        bg = 'var(--gradient-emerald)';
                        color = '#FFFFFF';
                        border = 'none';
                      } else {
                        bg = '#EF4444';
                        color = '#FFFFFF';
                        border = 'none';
                      }
                    } else if (isCurrent) {
                      bg = 'var(--bg-card)';
                      border = '2px solid var(--accent-emerald)';
                      color = 'var(--accent-emerald)';
                    } else if (isAnswered) {
                      bg = 'var(--gradient-emerald)';
                      color = '#FFFFFF';
                      border = 'none';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        style={{
                          height: '38px',
                          borderRadius: '8px',
                          border: border,
                          background: bg,
                          color: color,
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {idx + 1}
                        {isBookmarked && !isSubmitted && (
                          <div style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#F59E0B'
                          }} />
                        )}
                        {q.isCritical && (
                          <div style={{
                            position: 'absolute',
                            bottom: '2px',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: isAnswered ? '#FFFFFF' : '#EF4444'
                          }} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend notes */}
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '0.4rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--gradient-emerald)' }} />
                    <span>Đã chọn đáp án</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--bg-input)', border: '1px solid var(--border-color)' }} />
                    <span>Chưa trả lời</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }} />
                    <span>Dấu chấm đỏ: Câu hỏi điểm liệt</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exam-grid-responsive {
            grid-template-columns: 100% !important;
            width: 100% !important;
            gap: 1.25rem !important;
          }
          .exam-main-card {
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
          }
          .exam-question-card {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            padding: 1.15rem 0.85rem !important;
            margin: 0 !important;
          }
        }
        @media (max-width: 600px) {
          .hide-mobile-sm { display: none !important; }
        }
      `}</style>
    </section>
  );
}
