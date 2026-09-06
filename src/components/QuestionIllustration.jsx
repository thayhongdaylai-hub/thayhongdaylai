import React from 'react';

export default function QuestionIllustration({ src, alt = "Hình ảnh minh họa câu hỏi" }) {
  if (!src) return null;

  const cleanPath = src.trim();

  return (
    <div
      className="question-illustration-wrapper"
      style={{
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
        maxWidth: '560px',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <img
        src={cleanPath}
        alt={alt}
        loading="eager"
        style={{
          maxHeight: '280px',
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: '8px',
          display: 'block'
        }}
      />
      <div style={{
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        marginTop: '0.55rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem'
      }}>
        <span>🔍 Hình ảnh minh họa chuẩn Bộ 600 câu sát hạch lái xe</span>
      </div>
    </div>
  );
}
