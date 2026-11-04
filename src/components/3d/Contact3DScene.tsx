import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Contact3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 240;
    let height = container.clientHeight || 200;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x07152B, 1.8);
    scene.add(ambientLight);

    // Warm orange point light for the central glowing core
    const orangeLight = new THREE.PointLight(0xFF6B00, 4.5, 10);
    orangeLight.position.set(0, 0, 1);
    scene.add(orangeLight);

    // Subtle blue rim light from top-left
    const blueLight = new THREE.PointLight(0x00A8FF, 2.5, 8);
    blueLight.position.set(-2, 2, 2);
    scene.add(blueLight);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Floating Dark Metallic Torus (Matches reference in Image 4)
    const torusGeo = new THREE.TorusGeometry(1.15, 0.38, 30, 80);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0x091426,
      metalness: 0.9,
      roughness: 0.14,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    group.add(torus);

    // Glowing wireframe rim
    const torusWireGeo = new THREE.WireframeGeometry(torusGeo);
    const torusWireMat = new THREE.LineBasicMaterial({
      color: 0xFF7A00,
      transparent: true,
      opacity: 0.35,
    });
    const torusWire = new THREE.LineSegments(torusWireGeo, torusWireMat);
    torus.add(torusWire);

    // 2. Central Glowing Orange Orb (Sun-like core inside torus)
    const sphereGeo = new THREE.SphereGeometry(0.42, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xFF6B00,
      emissive: 0xFF6B00,
      emissiveIntensity: 3.5,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    // 3. Subtle Orbiting Satellite
    const satGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x00A8FF,
      emissive: 0x00A8FF,
      emissiveIntensity: 2.5,
    });
    const satellite = new THREE.Mesh(satGeo, satMat);
    group.add(satellite);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      torus.rotation.x = Math.PI / 3 + Math.sin(t * 0.8) * 0.15;
      torus.rotation.y = t * 0.4;
      torus.rotation.z = Math.cos(t * 0.6) * 0.15;

      const satAngle = t * 1.5;
      satellite.position.set(Math.cos(satAngle) * 1.6, Math.sin(satAngle * 0.8) * 0.5, Math.sin(satAngle) * 1.6);

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
      className="webgl-canvas-container h-[180px] sm:h-[210px] w-full flex items-center justify-center pointer-events-none"
      aria-label="3D Torus Scene"
    />
  );
}
