import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({ theme = 'dark' }) => {
    const containerRef = useRef(null);
    const themeRef = useRef(theme);

    // Keep themeRef in sync without recreating the scene
    useEffect(() => {
        themeRef.current = theme;
    }, [theme]);

    // Run the entire WebGL setup exactly ONCE
    useEffect(() => {
        if (!containerRef.current) return;

        let mouseX = 0;
        let mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = window.innerWidth < 768 ? 10 : 7;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        const isMobile = window.innerWidth < 768;

        // ── Particles ──────────────────────────────
        const particleCount = isMobile ? 1500 : 3500;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 20;
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const pMat = new THREE.PointsMaterial({
            size: isMobile ? 0.015 : 0.01,
            color: new THREE.Color('#00f3ff'),
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        // ── Glowing Orbs ───────────────────────────
        const makeOrb = (color, opacity) => {
            const geo = new THREE.SphereGeometry(isMobile ? 1.8 : 2.8, 32, 32);
            const mat = new THREE.MeshBasicMaterial({
                color: new THREE.Color(color),
                transparent: true,
                opacity,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });
            return new THREE.Mesh(geo, mat);
        };

        const orb1 = makeOrb(0x00f3ff, 0.18); // cyan
        const orb2 = makeOrb(0x9d00ff, 0.18); // purple
        const orb3 = makeOrb(0xff0080, 0.14); // pink
        scene.add(orb1, orb2, orb3);

        // ── Wireframe Floor ────────────────────────
        const floorGeo = new THREE.PlaneGeometry(40, 40, 20, 20);
        const floorMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0xffffff),
            wireframe: true,
            transparent: true,
            opacity: 0.06,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2.5;
        floor.position.y = -4;
        scene.add(floor);

        // ── Events ─────────────────────────────────
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.position.z = window.innerWidth < 768 ? 10 : 7;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        const onMouse = (e) => {
            if (window.innerWidth < 768) return;
            mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
            mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
        };
        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMouse);

        // ── Animation Loop ──────────────────────────
        let rafId;
        const animate = () => {
            rafId = requestAnimationFrame(animate);
            const t = Date.now() * 0.0003;

            // Rotate particles slowly
            particles.rotation.y += 0.0004;
            particles.rotation.x += 0.00015;

            // Orbs float in a 3-D figure-8 pattern
            orb1.position.set(
                Math.sin(t * 0.8) * 5,
                Math.cos(t * 0.6) * 3.5,
                Math.sin(t * 0.4) * 2.5
            );
            orb2.position.set(
                Math.cos(t * 0.5) * 6,
                Math.sin(t * 0.7) * 4,
                Math.cos(t * 0.3) * 3
            );
            orb3.position.set(
                Math.sin(t * 0.6 + 1) * 4.5,
                Math.cos(t * 0.4 + 2) * 3,
                Math.sin(t * 0.5 + 0.5) * 2
            );

            // Slowly rotate the wireframe
            floor.rotation.z = t * 0.05;

            // Mouse parallax on camera
            camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.03;
            camera.position.y += (-mouseY * 1.5 - camera.position.y) * 0.03;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouse);
            if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            pGeo.dispose();
            pMat.dispose();
            floorGeo.dispose();
            floorMat.dispose();
            renderer.dispose();
        };
    }, []); // ← runs only ONCE, never re-creates on theme toggle

    return (
        <div
            ref={containerRef}
            className={`fixed inset-0 pointer-events-none -z-20 transition-opacity duration-700 ${
                theme === 'light' ? 'opacity-0' : 'mix-blend-screen opacity-100'
            }`}
            style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
        />
    );
};

export default ThreeBackground;
