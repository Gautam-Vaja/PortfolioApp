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

    const orangeLight = new THREE.PointLight(0xFF6B00, 4.0, 10);
    orangeLight.position.set(2, 2, 2);
    scene.add(orangeLight);

    const cyanLight = new THREE.PointLight(0x35D5FF, 2.0, 10);
    cyanLight.position.set(-2, -1, 1);
    scene.add(cyanLight);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Central Floating Dark Metallic & Glass Cube with Warm Orange Glow
    const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x07152B,
      metalness: 0.7,
      roughness: 0.15,
      transmission: 0.5,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);
    group.add(cube);

    // Glowing orange edges for cube (matches reference)
    const edgeGeo = new THREE.EdgesGeometry(cubeGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xFF7A00, transparent: true, opacity: 0.85 });
    const wireframe = new THREE.LineSegments(edgeGeo, edgeMat);
    cube.add(wireframe);

    // Inner glowing orange core sphere
    const sphereGeo = new THREE.SphereGeometry(0.38, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xFF6B00,
      emissive: 0xFF6B00,
      emissiveIntensity: 3.0,
    });
    const coreSphere = new THREE.Mesh(sphereGeo, sphereMat);
    cube.add(coreSphere);

    // Orbital Rings
    const createRing = (radius: number, rotX: number, rotY: number, color: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.7, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(80);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.55 });
      const ring = new THREE.Line(geo, mat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(2.0, Math.PI / 3, Math.PI / 5, 0xFF7A00);
    const ring2 = createRing(2.4, -Math.PI / 4, Math.PI / 3, 0x00A8FF);
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
      color: 0xFF9A45,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    let animId: number;
    let clock = new THREE.Clock();

    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouse.x;
      const deltaY = e.clientY - prevMouse.y;
      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!isDragging) {
        group.rotation.y = t * 0.25;
        group.rotation.x = Math.sin(t * 0.4) * 0.2;
      }

      cube.rotation.y = t * 0.15;
      cube.rotation.z = Math.sin(t * 0.5) * 0.1;

      ring1.rotation.z = t * 0.1;
      ring2.rotation.z = -t * 0.08;

      particles.rotation.y = -t * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="webgl-canvas-container flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="3D Interactive About Geometry"
    />
  );
}
