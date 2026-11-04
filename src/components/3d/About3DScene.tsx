import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function About3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 320;
    let height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x07152B, 2.0);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x00A8FF, 3.5, 10);
    blueLight.position.set(2, 2, 2);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x35D5FF, 2.5, 10);
    cyanLight.position.set(-2, -1, 1);
    scene.add(cyanLight);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Central Floating Transparent Crystal Cube
    const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x07152B,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);
    group.add(cube);

    // Glowing edges for crystal cube
    const edgeGeo = new THREE.EdgesGeometry(cubeGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x00A8FF, transparent: true, opacity: 0.8 });
    const wireframe = new THREE.LineSegments(edgeGeo, edgeMat);
    cube.add(wireframe);

    // Inner glowing core sphere
    const sphereGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x00A8FF,
      emissive: 0x00A8FF,
      emissiveIntensity: 2.5,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    cube.add(coreSphere);

    // Orbital Rings
    const createRing = (radius: number, rotX: number, rotY: number, color: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.7, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(80);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5 });
      const ring = new THREE.Line(geo, mat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(2.0, Math.PI / 3, Math.PI / 5, 0x00A8FF);
    const ring2 = createRing(2.4, -Math.PI / 4, Math.PI / 3, 0x35D5FF);
    group.add(ring1);
    group.add(ring2);

    // Floating particles around About object
    const pCount = 120;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 5;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x35D5FF,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    // Mouse tracking for tilt
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      cube.rotation.x = 0.3 + time * 0.3 + mouse.y * 0.3;
      cube.rotation.y = 0.4 + time * 0.35 + mouse.x * 0.3;
      cube.position.y = Math.sin(time * 1.5) * 0.12;

      ring1.rotation.z = time * 0.15;
      ring2.rotation.z = -time * 0.12;

      particles.rotation.y = time * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 320;
      height = container.clientHeight || 320;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="webgl-canvas-container w-full h-[280px] sm:h-[340px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="Real-time interactive 3D crystal cube with glowing core and orbital rings"
    />
  );
}
