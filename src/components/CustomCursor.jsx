import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const prevPosRef = useRef({ x: -100, y: -100 });
  const rotationRef = useRef(0);
  const isVisibleRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Instant position tracking + natural steering wheel rotation
  const handleMouseMove = useCallback((e) => {
    posRef.current = { x: e.clientX, y: e.clientY };

    if (!isVisibleRef.current) {
      isVisibleRef.current = true;
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
    }

    const dx = e.clientX - prevPosRef.current.x;
    const speed = Math.abs(dx);

    if (speed > 1) {
      // Dynamic steering angle (turn wheel left/right based on movement)
      const targetRotation = Math.max(-35, Math.min(35, dx * 2.2));
      rotationRef.current += (targetRotation - rotationRef.current) * 0.35;
    } else {
      rotationRef.current *= 0.82; // Snap back to center smoothly
    }

    prevPosRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsMouseDown(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isVisibleRef.current = false;
    if (cursorRef.current) cursorRef.current.style.opacity = '0';
  }, []);

  const handleMouseEnter = useCallback(() => {
    isVisibleRef.current = true;
    if (cursorRef.current) cursorRef.current.style.opacity = '1';
  }, []);

  // Hover detection over interactive elements
  useEffect(() => {
    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.btn') ||
        target.closest('.nav-link-card') ||
        target.closest('.glass-card') ||
        target.closest('.interactive') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleOver);
    return () => window.removeEventListener('mouseover', handleOver);
  }, []);

  // Render loop - Zero lag position tracking
  useEffect(() => {
    let rafId;

    const render = () => {
      if (cursorRef.current && isVisibleRef.current) {
        const x = posRef.current.x;
        const y = posRef.current.y;
        // Center the 30px wheel perfectly on the mouse point
        cursorRef.current.style.transform = `translate3d(${x - 15}px, ${y - 15}px, 0) rotate(${rotationRef.current}deg)`;
      }
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Event listeners
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

  return (
    <>
      {/* Clean Steering Wheel Cursor without frame or navigation arrow */}
      <div
        ref={cursorRef}
        className={`clean-wheel-cursor ${isHovering ? 'is-hovering' : ''} ${isMouseDown ? 'is-down' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '30px',
          height: '30px',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: 999999,
          willChange: 'transform'
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))',
            display: 'block'
          }}
        >
          {/* Outer steering rim */}
          <circle
            cx="16"
            cy="16"
            r="13"
            stroke="var(--accent-emerald, #10B981)"
            strokeWidth="3.2"
            fill="none"
          />
          {/* Inner fine ring detail */}
          <circle
            cx="16"
            cy="16"
            r="11.2"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="0.8"
            fill="none"
          />

          {/* 3 Steering Spokes */}
          {/* Left horizontal spoke */}
          <line
            x1="5"
            y1="16"
            x2="11.5"
            y2="16"
            stroke="var(--accent-emerald, #10B981)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <line
            x1="5.5"
            y1="16"
            x2="11.5"
            y2="16"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Right horizontal spoke */}
          <line
            x1="20.5"
            y1="16"
            x2="27"
            y2="16"
            stroke="var(--accent-emerald, #10B981)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <line
            x1="20.5"
            y1="16"
            x2="26.5"
            y2="16"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Bottom vertical spoke */}
          <line
            x1="16"
            y1="20.5"
            x2="16"
            y2="27"
            stroke="var(--accent-emerald, #10B981)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="20.5"
            x2="16"
            y2="26.5"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Center Horn Hub */}
          <circle
            cx="16"
            cy="16"
            r="4.5"
            fill="var(--accent-emerald, #10B981)"
            stroke="#FFFFFF"
            strokeWidth="1.2"
          />
          {/* Center pinpoint */}
          <circle
            cx="16"
            cy="16"
            r="1.6"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <style>{`
        .clean-wheel-cursor {
          transition: transform 0.15s ease-out, filter 0.2s ease;
        }

        .clean-wheel-cursor.is-hovering {
          filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.8)) brightness(1.15);
          transform: scale(1.22);
        }

        .clean-wheel-cursor.is-down {
          transform: scale(0.88);
        }

        @media (max-width: 768px), (hover: none) {
          .clean-wheel-cursor {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
