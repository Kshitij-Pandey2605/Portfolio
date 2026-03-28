import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({ theme = 'dark' }) => {
    const containerRef = useRef();

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = window.innerWidth < 768 ? 9 : 6;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        const isMobile = window.innerWidth < 768;

        // --- 1. Particles ---
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = isMobile ? 1200 : 3000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15; // Spread wider
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: isMobile ? 0.012 : 0.008,
            color: new THREE.Color(theme === 'light' ? '#8b5cf6' : '#00f3ff'),
            transparent: true,
            opacity: theme === 'light' ? 0.6 : 0.9,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // --- 2. Fluid Glowing Orbs ---
        const orbGeometry = new THREE.SphereGeometry(isMobile ? 1.5 : 2.5, 32, 32);
        
        const orb1Mat = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color(0x00f3ff), transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending 
        });
        const orb1 = new THREE.Mesh(orbGeometry, orb1Mat);
        scene.add(orb1);

        const orb2Mat = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color(0x9d00ff), transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending 
        });
        const orb2 = new THREE.Mesh(orbGeometry, orb2Mat);
        scene.add(orb2);

        const orb3Mat = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color(0xff0080), transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending 
        });
        const orb3 = new THREE.Mesh(orbGeometry, orb3Mat);
        scene.add(orb3);

        // --- 3. Floor Plane ---
        const planeGeometry = new THREE.PlaneGeometry(30, 30, 32, 32);
        const planeMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(theme === 'light' ? '#ffffff' : '#0a0a0a'),
            side: THREE.DoubleSide,
            wireframe: true,
            transparent: true,
            opacity: theme === 'light' ? 0.05 : 0.1,
            blending: THREE.AdditiveBlending
        });

        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
        planeMesh.rotation.x = -Math.PI / 2;
        planeMesh.position.y = -3;
        scene.add(planeMesh);

        // Resize Hook
        const onWindowResize = () => {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.position.z = window.innerWidth < 768 ? 9 : 6;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        
        window.addEventListener('resize', onWindowResize);

        const onDocumentMouseMove = (event) => {
            if (window.innerWidth >= 768) {
              mouseX = event.clientX - windowHalfX;
              mouseY = event.clientY - windowHalfY;
            }
        };
        document.addEventListener('mousemove', onDocumentMouseMove);

        // Animation Loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const time = Date.now() * 0.0005;

            if (particlesMesh) {
              particlesMesh.rotation.y += 0.0005;
              particlesMesh.rotation.x += 0.0002;

              particlesMesh.position.x += (mouseX * 0.0005 - particlesMesh.position.x) * 0.05;
              particlesMesh.position.y += (-mouseY * 0.0005 - particlesMesh.position.y) * 0.05;
            }

            // Animate Orbs inside a fluid 3D pattern
            orb1.position.x = Math.sin(time * 0.7) * 4;
            orb1.position.y = Math.cos(time * 0.5) * 3;
            orb1.position.z = Math.sin(time * 0.3) * 2;

            orb2.position.x = Math.cos(time * 0.3) * 5;
            orb2.position.y = Math.sin(time * 0.5) * 4;
            orb2.position.z = Math.cos(time * 0.4) * 2;

            orb3.position.x = Math.sin(time * 0.5) * 4;
            orb3.position.y = Math.sin(time * 0.7) * 4;
            orb3.position.z = Math.sin(time * 0.6) * 3;
            
            // Slow Plane rotation
            planeMesh.rotation.z = time * 0.1;

            camera.position.x += (mouseX * 0.0002 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 0.0002 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            scene.clear();
            renderer.dispose();
        };
    }, [theme]); 

    return (
        <div 
            ref={containerRef} 
            className={`fixed inset-0 pointer-events-none -z-20 ${theme === 'light' ? 'opacity-40' : 'mix-blend-screen opacity-100'}`}
            style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
        />
    );
};

export default ThreeBackground;
