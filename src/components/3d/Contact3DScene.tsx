import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Contact3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 240;
    let height = container.clientHeight || 240;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x07152B, 1.8);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x00A8FF, 3.5, 8);
    blueLight.position.set(1.5, 1.5, 2);
    scene.add(blueLight);

    const orangeAccentLight = new THREE.PointLight(0xFF9A45, 2.0, 6);
    orangeAccentLight.position.set(-1.5, -1, 1);
    scene.add(orangeAccentLight);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Floating Dark Metallic Torus
    const torusGeo = new THREE.TorusGeometry(1.1, 0.32, 24, 64);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0x07152B,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 0.8,
      reflectivity: 0.9,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    group.add(torus);

    // Glowing wireframe rim
    const torusWireGeo = new THREE.WireframeGeometry(torusGeo);
    const torusWireMat = new THREE.LineBasicMaterial({ color: 0x00A8FF, transparent: true, opacity: 0.35 });
    const torusWire = new THREE.LineSegments(torusWireGeo, torusWireMat);
    torus.add(torusWire);

    // 2. Central Glowing Orb
    const sphereGeo = new THREE.SphereGeometry(0.38, 32, 32);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x00A8FF,
      emissive: 0x00A8FF,
      emissiveIntensity: 2.5,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    // 3. Subtle Orange Orbiting Satellite
    const satGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0xFF9A45,
      emissive: 0xFF9A45,
      emissiveIntensity: 2.0,
    });
    const satellite = new THREE.Mesh(satGeo, satMat);
    group.add(satellite);

    // Particles
    const pCount = 60;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 4;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x35D5FF,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      torus.rotation.x = Math.PI / 3 + Math.sin(time * 0.8) * 0.2;
      torus.rotation.y = time * 0.4;
      group.position.y = Math.sin(time * 1.6) * 0.1;

      // Satellite orbit
      const satAngle = time * 1.5;
      satellite.position.x = Math.cos(satAngle) * 1.6;
      satellite.position.y = Math.sin(satAngle) * 0.8;
      satellite.position.z = Math.sin(satAngle * 2) * 0.5;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 240;
      height = container.clientHeight || 240;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      torusWireGeo.dispose();
      torusWireMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      satGeo.dispose();
      satMat.dispose();
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
      className="webgl-canvas-container w-full h-[180px] sm:h-[220px] flex items-center justify-center select-none"
      aria-label="Real-time interactive 3D torus with glowing energy orb"
    />
  );
}
