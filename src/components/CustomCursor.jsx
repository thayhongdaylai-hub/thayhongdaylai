import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailsRef = useRef([]);
  const posRef = useRef({ x: -100, y: -100 });
  const prevPosRef = useRef({ x: -100, y: -100 });
  const rotationRef = useRef(0);
  const rafRef = useRef(null);
  const [trails, setTrails] = useState([]);
  const trailIdRef = useRef(0);

  const handleMouseMove = useCallback((e) => {
    posRef.current = { x: e.clientX, y: e.clientY };

    // Calculate rotation based on horizontal movement direction
    const dx = e.clientX - prevPosRef.current.x;
    const dy = e.clientY - prevPosRef.current.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    if (speed > 2) {
      // Rotate steering wheel based on horizontal movement
      const targetRotation = Math.max(-35, Math.min(35, dx * 2.5));
      rotationRef.current += (targetRotation - rotationRef.current) * 0.3;

      // Add trail particle
      trailIdRef.current += 1;
      const newTrail = {
        id: trailIdRef.current,
        x: e.clientX,
        y: e.clientY,
        opacity: Math.min(0.5, speed * 0.02),
        size: Math.min(8, 3 + speed * 0.1),
        createdAt: Date.now()
      };

      setTrails(prev => [...prev.slice(-12), newTrail]);
    } else {
      rotationRef.current *= 0.85; // Return to center when slow
    }

    prevPosRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  // Animate cursor position smoothly
  useEffect(() => {
    let smoothX = -100, smoothY = -100;

    const animate = () => {
      smoothX += (posRef.current.x - smoothX) * 0.2;
      smoothY += (posRef.current.y - smoothY) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${smoothX - 20}px, ${smoothY - 20}px) rotate(${rotationRef.current}deg)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => prev.filter(t => Date.now() - t.createdAt < 500));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      {/* Trail particles */}
      {trails.map(trail => (
        <div
          key={trail.id}
          style={{
            position: 'fixed',
            left: trail.x - trail.size / 2,
            top: trail.y - trail.size / 2,
            width: trail.size,
            height: trail.size,
            borderRadius: '50%',
            background: 'var(--accent-emerald)',
            opacity: trail.opacity,
            pointerEvents: 'none',
            zIndex: 9998,
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            animation: 'trailFade 0.5s ease-out forwards'
          }}
        />
      ))}

      {/* Steering wheel cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))'
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width="40"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring */}
          <circle cx="32" cy="32" r="28" stroke="var(--accent-emerald)" strokeWidth="4" fill="none" />
          {/* Inner hub */}
          <circle cx="32" cy="32" r="8" fill="var(--accent-emerald)" />
          {/* Spokes */}
          <line x1="32" y1="24" x2="32" y2="4" stroke="var(--accent-emerald)" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="25" y1="36" x2="8" y2="46" stroke="var(--accent-emerald)" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="39" y1="36" x2="56" y2="46" stroke="var(--accent-emerald)" strokeWidth="3.5" strokeLinecap="round" />
          {/* Center dot */}
          <circle cx="32" cy="32" r="3" fill="white" />
        </svg>
      </div>

      <style>{`
        @keyframes trailFade {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.2); }
        }
      `}</style>
    </>
  );
}
