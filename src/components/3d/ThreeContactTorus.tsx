import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeContactTorus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL failed in ThreeContactTorus', e);
      return;
    }

    const width = container.clientWidth || 130;
    const height = container.clientHeight || 130;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0.5, 4.2);

    const torusGroup = new THREE.Group();
    scene.add(torusGroup);

    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];

    // Dark metallic obsidian torus material
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x091428,
      metalness: 0.9,
      roughness: 0.16,
    });
    materialsToDispose.push(torusMat);

    // Glowing cyan/electric blue orb
    const glowingBlueMat = new THREE.MeshBasicMaterial({
      color: 0x35d5ff,
    });
    materialsToDispose.push(glowingBlueMat);

    // Subtle orange accent orb
    const glowingOrangeMat = new THREE.MeshBasicMaterial({
      color: 0xff9a45,
    });
    materialsToDispose.push(glowingOrangeMat);

    // 1. Torus Mesh
    const torusGeom = new THREE.TorusGeometry(1.0, 0.32, 24, 64);
    const torusMesh = new THREE.Mesh(torusGeom, torusMat);
    torusGroup.add(torusMesh);
    geometriesToDispose.push(torusGeom);

    // Torus wireframe accent (Cyan)
    const torusWireGeom = new THREE.TorusGeometry(1.0, 0.322, 12, 32);
    const torusWireMat = new THREE.MeshBasicMaterial({
      color: 0x35d5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const torusWire = new THREE.Mesh(torusWireGeom, torusWireMat);
    torusGroup.add(torusWire);
    geometriesToDispose.push(torusWireGeom);
    materialsToDispose.push(torusWireMat);

    // 2. Glowing Cyan Orb in orbit
    const orbGeom = new THREE.SphereGeometry(0.24, 20, 20);
    const orbMesh = new THREE.Mesh(orbGeom, glowingBlueMat);
    orbMesh.position.set(0.65, 0.45, 0.5);
    torusGroup.add(orbMesh);
    geometriesToDispose.push(orbGeom);

    // 3. Small Orbiting Subtle Orange Orb
    const orangeOrbGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const orangeOrbMesh = new THREE.Mesh(orangeOrbGeom, glowingOrangeMat);
    orangeOrbMesh.position.set(-0.7, -0.5, 0.3);
    torusGroup.add(orangeOrbMesh);
    geometriesToDispose.push(orangeOrbGeom);

    // 4. Orbiting Ring
    const orbitGeom = new THREE.TorusGeometry(1.48, 0.01, 16, 64);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0x00a8ff,
      transparent: true,
      opacity: 0.5,
    });
    const orbitRing = new THREE.Mesh(orbitGeom, orbitMat);
    orbitRing.rotation.set(1.4, 0.3, 0.4);
    torusGroup.add(orbitRing);
    geometriesToDispose.push(orbitGeom);
    materialsToDispose.push(orbitMat);

    // Lighting
    const ambient = new THREE.AmbientLight(0x07152b, 1.4);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xeef4ff, 2.4);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x00a8ff, 4.5, 8);
    pointLight.position.copy(orbMesh.position);
    torusGroup.add(pointLight);

    const orangeLight = new THREE.PointLight(0xff9a45, 1.8, 6);
    orangeLight.position.copy(orangeOrbMesh.position);
    torusGroup.add(orangeLight);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let dragRotX = 0;
    let dragRotY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        dragRotY += dx * 0.012;
        dragRotX += dy * 0.012;
        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    window.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gyroscopic rotation
      const idleRotY = elapsed * 0.38;
      const idleRotX = Math.sin(elapsed * 0.5) * 0.3 + 0.35;

      const targetY = mouseX * 0.5 + dragRotY + idleRotY;
      const targetX = mouseY * 0.4 + dragRotX + idleRotX;

      torusGroup.rotation.y += (targetY - torusGroup.rotation.y) * 0.08;
      torusGroup.rotation.x += (targetX - torusGroup.rotation.x) * 0.08;

      // Orb orbital float
      orbMesh.position.x = Math.cos(elapsed * 1.5) * 0.85;
      orbMesh.position.y = Math.sin(elapsed * 1.5) * 0.4 + 0.2;
      orbMesh.position.z = Math.sin(elapsed * 1.5) * 0.65;
      pointLight.position.copy(orbMesh.position);

      orangeOrbMesh.position.x = Math.cos(-elapsed * 1.2) * 0.9;
      orangeOrbMesh.position.z = Math.sin(-elapsed * 1.2) * 0.9;
      orangeLight.position.copy(orangeOrbMesh.position);

      orbitRing.rotation.z += 0.008;

      renderer.render(scene, camera);
    };

    animate();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: nw, height: nh } = entry.contentRect;
        if (nw > 0 && nh > 0) {
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      }
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);

      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());

      renderer.dispose();
      if (renderer.domElement?.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
      <div className="pointer-events-none absolute -inset-2 rounded-full bg-[#00A8FF]/25 blur-xl" />
      <div
        ref={containerRef}
        className="w-full h-full relative z-10 touch-none flex items-center justify-center"
      />
    </div>
  );
}
