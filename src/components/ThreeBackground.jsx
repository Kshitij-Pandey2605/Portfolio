import React, { useEffect, useRef } from 'react';

/**
 * Animated background:
 *  - CSS radial-gradient glowing blobs (guaranteed visible, GPU keyframes)
 *  - Three.js star-particle field on top
 */
const ThreeBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  /* ── Three.js particles only ─────────────────────────── */
  useEffect(() => {
    if (theme === 'light') return;
    let THREE, renderer, rafId;

    const run = async () => {
      THREE = await import('three');
      if (!canvasRef.current) return;

      const W = window.innerWidth, H = window.innerHeight;
      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
      camera.position.z = W < 768 ? 14 : 10;

      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      canvasRef.current.appendChild(renderer.domElement);

      // particles
      const pCount = W < 768 ? 1200 : 3500;
      const pos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i++) pos[i] = (Math.random() - 0.5) * 30;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(geo, new THREE.PointsMaterial({
        size: W < 768 ? 0.07 : 0.05, color: 0x00d4ff,
        transparent: true, opacity: 0.75,
      }));
      scene.add(pts);

      // grid
      const grid = new THREE.Mesh(
        new THREE.PlaneGeometry(60, 60, 28, 28),
        new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.05 })
      );
      grid.rotation.x = -Math.PI / 2.5;
      grid.position.y = -5;
      scene.add(grid);

      let mx = 0, my = 0;
      const onMouse = e => { mx = (e.clientX / innerWidth - 0.5) * 2; my = (e.clientY / innerHeight - 0.5) * 2; };
      const onResize = () => {
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
      };
      window.addEventListener('mousemove', onMouse);
      window.addEventListener('resize',    onResize);

      let last = performance.now();
      const tick = now => {
        rafId = requestAnimationFrame(tick);
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        pts.rotation.y += 0.003 * dt * 60;
        pts.rotation.x += 0.001 * dt * 60;
        pts.position.x += (mx * 0.5 - pts.position.x) * 0.05;
        pts.position.y += (-my * 0.5 - pts.position.y) * 0.05;
        grid.rotation.z += 0.0005 * dt * 60;
        camera.position.x += (mx * 1.5 - camera.position.x) * 0.04;
        camera.position.y += (-my * 1.5 - camera.position.y) * 0.04;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };
      rafId = requestAnimationFrame(tick);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('mousemove', onMouse);
        window.removeEventListener('resize',    onResize);
        try { if (canvasRef.current?.contains(renderer.domElement)) canvasRef.current.removeChild(renderer.domElement); } catch (_) {}
        renderer.dispose();
      };
    };

    let cleanup;
    run().then(fn => { cleanup = fn; });
    return () => { cleanup?.(); if (rafId) cancelAnimationFrame(rafId); };
  }, [theme]);

  if (theme === 'light') return null;

  return (
    <>
      {/* ── CSS glowing blobs – always visible ─ */}
      <style>{`
        @keyframes orbFloat1 {
          0%   { transform: translate(0,    0)    scale(1);   }
          33%  { transform: translate(120px,-80px) scale(1.1); }
          66%  { transform: translate(-60px, 100px) scale(0.9); }
          100% { transform: translate(0,    0)    scale(1);   }
        }
        @keyframes orbFloat2 {
          0%   { transform: translate(0,  0)     scale(1);   }
          40%  { transform: translate(-140px, 90px) scale(1.15); }
          75%  { transform: translate(80px, -110px) scale(0.88); }
          100% { transform: translate(0,  0)     scale(1);   }
        }
        @keyframes orbFloat3 {
          0%   { transform: translate(0, 0)       scale(1);   }
          50%  { transform: translate(100px, 130px) scale(1.2); }
          100% { transform: translate(0, 0)       scale(1);   }
        }
        .bg-orb { position:fixed; border-radius:50%; pointer-events:none; filter:blur(72px); }
      `}</style>

      {/* Cyan top-right */}
      <div className="bg-orb" style={{
        width: 380, height: 380, top: '-60px', right: '5%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.55) 0%, transparent 70%)',
        animation: 'orbFloat1 18s ease-in-out infinite', zIndex: 0,
      }} />
      {/* Purple bottom-left */}
      <div className="bg-orb" style={{
        width: 420, height: 420, bottom: '0', left: '-5%',
        background: 'radial-gradient(circle, rgba(139,0,255,0.50) 0%, transparent 70%)',
        animation: 'orbFloat2 22s ease-in-out infinite', zIndex: 0,
      }} />
      {/* Pink center-right */}
      <div className="bg-orb" style={{
        width: 300, height: 300, top: '40%', right: '20%',
        background: 'radial-gradient(circle, rgba(255,0,122,0.42) 0%, transparent 70%)',
        animation: 'orbFloat3 16s ease-in-out infinite', zIndex: 0,
      }} />

      {/* Three.js canvas for particles + grid */}
      <div
        ref={canvasRef}
        style={{
          position: 'fixed', inset: 0,
          width: '100vw', height: '100vh',
          zIndex: 0, pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default ThreeBackground;
