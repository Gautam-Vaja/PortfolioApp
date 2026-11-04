import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL not supported or context creation failed', e);
      return;
    }

    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 100);
    camera.position.set(0, 1.3, 10.0);

    // Main group to hold the entire cluster
    const cluster = new THREE.Group();
    scene.add(cluster);

    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];

    // ==========================================
    // 1. Materials: Obsidian, Electric Blue, Cyan, Warm Amber
    // ==========================================
    const darkObsidianMat = new THREE.MeshStandardMaterial({
      color: 0x081324,
      metalness: 0.95,
      roughness: 0.12,
    });
    materialsToDispose.push(darkObsidianMat);

    const brushedMidnightMat = new THREE.MeshStandardMaterial({
      color: 0x0b1d38,
      metalness: 0.88,
      roughness: 0.22,
    });
    materialsToDispose.push(brushedMidnightMat);

    // Glowing cyan & electric blue wireframe edge highlights
    const cyanEdgeMat = new THREE.LineBasicMaterial({
      color: 0x35d5ff,
      transparent: true,
      opacity: 0.8,
      linewidth: 1,
    });
    materialsToDispose.push(cyanEdgeMat);

    const blueEdgeMat = new THREE.LineBasicMaterial({
      color: 0x00a8ff,
      transparent: true,
      opacity: 0.7,
      linewidth: 1,
    });
    materialsToDispose.push(blueEdgeMat);

    // Subtle warm amber rim edge
    const amberEdgeMat = new THREE.LineBasicMaterial({
      color: 0xff9a45,
      transparent: true,
      opacity: 0.85,
      linewidth: 1,
    });
    materialsToDispose.push(amberEdgeMat);

    // Glowing Blue Sphere material
    const glowingBlueMat = new THREE.MeshBasicMaterial({
      color: 0x35d5ff,
    });
    materialsToDispose.push(glowingBlueMat);

    // Glowing Amber Sphere material (Warm accent matching reference mockup)
    const glowingAmberMat = new THREE.MeshBasicMaterial({
      color: 0xff9a45,
    });
    materialsToDispose.push(glowingAmberMat);

    // Reflective floor material catching real-time light bounces
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x030b1b,
      metalness: 0.9,
      roughness: 0.2,
    });
    materialsToDispose.push(floorMat);

    // Reflective floor plane below cubes
    const floorGeom = new THREE.PlaneGeometry(20, 20);
    const floor = new THREE.Mesh(floorGeom, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -3.2;
    scene.add(floor);
    geometriesToDispose.push(floorGeom);

    // ==========================================
    // 2. 3 Large Floating Cubes + Geometric Objects (Exact Mockup Match)
    // ==========================================
    const createCube = (size: number, material: THREE.Material, edgeMaterial: THREE.Material) => {
      const group = new THREE.Group();
      const geom = new THREE.BoxGeometry(size, size, size);
      const mesh = new THREE.Mesh(geom, material);
      group.add(mesh);

      const edgeGeom = new THREE.EdgesGeometry(geom);
      const line = new THREE.LineSegments(edgeGeom, edgeMaterial);
      group.add(line);

      geometriesToDispose.push(geom);
      geometriesToDispose.push(edgeGeom);
      return { group, mesh };
    };

    // 1st Large Cube (Center-Right front)
    const cube1 = createCube(2.45, darkObsidianMat, amberEdgeMat);
    cube1.group.position.set(0.15, 0.25, 0.2);
    cube1.group.rotation.set(0.42, 0.65, 0.22);
    cluster.add(cube1.group);

    // 2nd Large Cube (Upper-Back)
    const cube2 = createCube(1.75, brushedMidnightMat, cyanEdgeMat);
    cube2.group.position.set(1.55, 1.95, -1.3);
    cube2.group.rotation.set(-0.35, 0.85, 0.45);
    cluster.add(cube2.group);

    // 3rd Large Cube (Lower-Left)
    const cube3 = createCube(1.45, darkObsidianMat, blueEdgeMat);
    cube3.group.position.set(-1.7, -1.35, 0.7);
    cube3.group.rotation.set(0.55, -0.4, 0.32);
    cluster.add(cube3.group);

    // Smaller geometric objects (floating micro-cubes & shards)
    const satelliteConfigs = [
      { size: 0.45, pos: [2.6, -0.7, 1.5], rot: [0.2, 0.8, 0.1] },
      { size: 0.38, pos: [-2.5, 1.7, -0.9], rot: [0.7, 0.3, 0.5] },
      { size: 0.52, pos: [0.3, 2.9, 0.9], rot: [-0.5, 0.4, 0.8] },
      { size: 0.32, pos: [-1.3, -2.3, -1.2], rot: [0.3, 1.1, -0.2] },
      { size: 0.28, pos: [2.1, 2.2, 0.3], rot: [0.4, -0.6, 0.5] },
    ];

    const satellites: THREE.Group[] = [];
    satelliteConfigs.forEach((cfg, i) => {
      const sat = createCube(cfg.size, darkObsidianMat, i % 2 === 0 ? amberEdgeMat : cyanEdgeMat);
      sat.group.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      sat.group.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
      cluster.add(sat.group);
      satellites.push(sat.group);
    });

    // ==========================================
    // 3. Glowing Spheres & Orbital Rings
    // ==========================================
    // Electric Blue Glowing Sphere
    const blueOrbGeom = new THREE.SphereGeometry(0.35, 32, 32);
    const blueOrb = new THREE.Mesh(blueOrbGeom, glowingBlueMat);
    blueOrb.position.set(-1.8, 1.2, 1.4);
    cluster.add(blueOrb);
    geometriesToDispose.push(blueOrbGeom);

    // Warm Amber Glowing Sphere (Top-Right Accent)
    const amberOrbGeom = new THREE.SphereGeometry(0.28, 32, 32);
    const amberOrb = new THREE.Mesh(amberOrbGeom, glowingAmberMat);
    amberOrb.position.set(2.0, 1.8, 1.2);
    cluster.add(amberOrb);
    geometriesToDispose.push(amberOrbGeom);

    // Circular Orbital Paths around cubes
    const ringGeom1 = new THREE.TorusGeometry(3.9, 0.016, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x35d5ff,
      transparent: true,
      opacity: 0.65,
    });
    const orbitalRing1 = new THREE.Mesh(ringGeom1, ringMat1);
    orbitalRing1.rotation.set(1.25, 0.35, 0.6);
    cluster.add(orbitalRing1);
    geometriesToDispose.push(ringGeom1);
    materialsToDispose.push(ringMat1);

    const ringGeom2 = new THREE.TorusGeometry(4.6, 0.012, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00a8ff,
      transparent: true,
      opacity: 0.45,
    });
    const orbitalRing2 = new THREE.Mesh(ringGeom2, ringMat2);
    orbitalRing2.rotation.set(-0.75, -0.55, 0.3);
    cluster.add(orbitalRing2);
    geometriesToDispose.push(ringGeom2);
    materialsToDispose.push(ringMat2);

    // Warm Amber accent orbital ring
    const ringGeom3 = new THREE.TorusGeometry(2.9, 0.01, 16, 100);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xff9a45,
      transparent: true,
      opacity: 0.5,
    });
    const orbitalRing3 = new THREE.Mesh(ringGeom3, ringMat3);
    orbitalRing3.rotation.set(0.4, 1.1, -0.5);
    cluster.add(orbitalRing3);
    geometriesToDispose.push(ringGeom3);
    materialsToDispose.push(ringMat3);

    // ==========================================
    // 4. Floating 3D Dust Particles (Cyan & Amber)
    // ==========================================
    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x35d5ff,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);
    geometriesToDispose.push(particleGeom);
    materialsToDispose.push(particleMat);

    // ==========================================
    // 5. Lighting Setup: Cyan, Electric Blue & Warm Amber
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0x07152b, 1.5);
    scene.add(ambientLight);

    // Key directional light (cool crisp cyan-white)
    const dirLight = new THREE.DirectionalLight(0xe2f4ff, 2.6);
    dirLight.position.set(6, 8, 7);
    scene.add(dirLight);

    // Electric Blue dynamic point light from the blue orb
    const bluePointLight = new THREE.PointLight(0x00a8ff, 6.5, 18);
    bluePointLight.position.copy(blueOrb.position);
    scene.add(bluePointLight);

    // Intense warm amber dynamic point light from the amber orb (creating the signature rim glow from reference)
    const amberPointLight = new THREE.PointLight(0xff9a45, 5.0, 15);
    amberPointLight.position.copy(amberOrb.position);
    scene.add(amberPointLight);

    // Soft rim back-light
    const rimLight = new THREE.DirectionalLight(0x087bff, 1.6);
    rimLight.position.set(-6, -4, -6);
    scene.add(rimLight);

    // ==========================================
    // 6. Interactive Mouse & Drag & Parallax
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let dragRotationX = 0;
    let dragRotationY = 0;
    let scrollProgress = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = x;
      mouseY = y;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        dragRotationY += deltaX * 0.008;
        dragRotationX += deltaY * 0.008;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // GSAP ScrollTrigger to smoothly scrub the 3D scene when scrolling down
    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        scrollProgress = self.progress;
      },
    });

    // ==========================================
    // 7. Animation Loop
    // ==========================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuous floating and rotation + scroll-driven trajectory
      const idleRotY = elapsedTime * 0.18 + scrollProgress * 1.2;
      const idleRotX = Math.sin(elapsedTime * 0.4) * 0.08 + scrollProgress * 0.4;

      // Smooth lerp to mouse position
      targetRotationY = mouseX * 0.45 + dragRotationY + idleRotY;
      targetRotationX = mouseY * 0.35 + dragRotationX + idleRotX;

      cluster.rotation.y += (targetRotationY - cluster.rotation.y) * 0.06;
      cluster.rotation.x += (targetRotationX - cluster.rotation.x) * 0.06;

      // Camera parallax dolly based on scroll
      camera.position.y = 1.3 - scrollProgress * 1.5;
      camera.position.z = 10.0 + scrollProgress * 2.0;

      // Subtle float on individual cubes
      cube1.group.position.y = 0.25 + Math.sin(elapsedTime * 1.2) * 0.07;
      cube2.group.position.y = 1.95 + Math.sin(elapsedTime * 1.4 + 1.2) * 0.09;
      cube3.group.position.y = -1.35 + Math.sin(elapsedTime * 1.1 + 2.5) * 0.08;

      // Counter-rotation on orbital rings
      orbitalRing1.rotation.z += 0.005;
      orbitalRing2.rotation.z -= 0.004;
      orbitalRing3.rotation.z += 0.006;

      // Bobbing floating motion for satellites
      satellites.forEach((sat, idx) => {
        sat.position.y += Math.sin(elapsedTime * 1.5 + idx) * 0.002;
        sat.rotation.x += 0.005 * (idx % 2 === 0 ? 1 : -1);
        sat.rotation.y += 0.004;
      });

      // Electric Blue Orb pulsation & orbit drift
      const bluePulse = 1 + Math.sin(elapsedTime * 3) * 0.12;
      blueOrb.scale.set(bluePulse, bluePulse, bluePulse);
      blueOrb.position.y = 1.2 + Math.sin(elapsedTime * 1.8) * 0.15;
      bluePointLight.position.copy(blueOrb.position);
      bluePointLight.intensity = 6.0 + Math.sin(elapsedTime * 3) * 1.5;

      // Warm Amber Orb pulsation & intense glow
      const amberPulse = 1 + Math.sin(elapsedTime * 2.5 + 1) * 0.12;
      amberOrb.scale.set(amberPulse, amberPulse, amberPulse);
      amberOrb.position.y = 1.8 + Math.sin(elapsedTime * 1.5 + 1.5) * 0.15;
      amberPointLight.position.copy(amberOrb.position);
      amberPointLight.intensity = 4.8 + Math.sin(elapsedTime * 2.5) * 1.2;

      // Drift particles gently
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // ==========================================
    // 8. Resize Handling
    // ==========================================
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // ==========================================
    // 9. Cleanup & Resource Disposal
    // ==========================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      st.kill();
      window.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);

      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      data-cursor-drag="true"
      className="relative w-full h-[400px] sm:h-[460px] lg:h-[520px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#00A8FF]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-44 h-44 rounded-full bg-[#FF9A45]/20 blur-2xl pointer-events-none" />

      {/* Interactive 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full relative z-10 touch-none flex items-center justify-center"
      />

      {/* Subtle Interactive 3D Hint Badge */}
      <div className="absolute bottom-2 right-4 z-20 pointer-events-none flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#35D5FF]/20 bg-[#07152B]/80 backdrop-blur-md text-[10px] font-mono text-[#A8B8D0]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9A45] animate-pulse" />
        <span>{isInteracting ? 'Orbiting 3D' : 'Interactive 3D • Drag to rotate'}</span>
      </div>
    </div>
  );
}
