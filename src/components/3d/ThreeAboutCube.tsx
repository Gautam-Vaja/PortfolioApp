import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeAboutCube() {
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
      console.warn('WebGL failed in ThreeAboutCube', e);
      return;
    }

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0.6, 6.2);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];

    // ==========================================
    // Materials
    // ==========================================
    // Translucent obsidian glass outer shell
    const outerGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x091b36,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.72,
      thickness: 1.4,
      transparent: true,
      opacity: 0.88,
    });
    materialsToDispose.push(outerGlassMat);

    // Glowing electric blue inner core
    const blueCoreMat = new THREE.MeshStandardMaterial({
      color: 0x00a8ff,
      emissive: 0x087bff,
      emissiveIntensity: 3.5,
      roughness: 0.2,
      metalness: 0.5,
    });
    materialsToDispose.push(blueCoreMat);

    // Cyan glowing edge wireframe
    const cyanEdgeMat = new THREE.LineBasicMaterial({
      color: 0x35d5ff,
      transparent: true,
      opacity: 0.85,
    });
    materialsToDispose.push(cyanEdgeMat);

    // Satellite obsidian micro shards
    const shardMat = new THREE.MeshStandardMaterial({
      color: 0x07152b,
      metalness: 0.9,
      roughness: 0.25,
    });
    materialsToDispose.push(shardMat);

    // Glowing orbiting blue sphere material
    const orbMat = new THREE.MeshBasicMaterial({
      color: 0x35d5ff,
    });
    materialsToDispose.push(orbMat);

    // ==========================================
    // Geometries & Objects
    // ==========================================
    // 1. Central Outer Obsidian/Glass Cube
    const cubeGeom = new THREE.BoxGeometry(1.9, 1.9, 1.9);
    const outerCube = new THREE.Mesh(cubeGeom, outerGlassMat);
    mainGroup.add(outerCube);
    geometriesToDispose.push(cubeGeom);

    // Glowing edges for outer cube
    const edgesGeom = new THREE.EdgesGeometry(cubeGeom);
    const edgesLine = new THREE.LineSegments(edgesGeom, cyanEdgeMat);
    mainGroup.add(edgesLine);
    geometriesToDispose.push(edgesGeom);

    // 2. Inner Glowing Core Cube (counter-rotates)
    const innerGeom = new THREE.BoxGeometry(0.95, 0.95, 0.95);
    const innerCube = new THREE.Mesh(innerGeom, blueCoreMat);
    mainGroup.add(innerCube);
    geometriesToDispose.push(innerGeom);

    // Inner core wireframe
    const innerEdgesGeom = new THREE.EdgesGeometry(innerGeom);
    const innerEdgesLine = new THREE.LineSegments(
      innerEdgesGeom,
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 })
    );
    innerCube.add(innerEdgesLine);
    geometriesToDispose.push(innerEdgesGeom);

    // 3. Glowing Blue Sphere orbiting the cube
    const orbGeom = new THREE.SphereGeometry(0.24, 20, 20);
    const orbMesh = new THREE.Mesh(orbGeom, orbMat);
    orbMesh.position.set(1.6, 1.1, 0.8);
    mainGroup.add(orbMesh);
    geometriesToDispose.push(orbGeom);

    // 4. Subtle Orange satellite micro-sphere
    const orangeOrbGeom = new THREE.SphereGeometry(0.14, 16, 16);
    const orangeOrbMat = new THREE.MeshBasicMaterial({ color: 0xff9a45 });
    const orangeOrb = new THREE.Mesh(orangeOrbGeom, orangeOrbMat);
    orangeOrb.position.set(-1.5, -1.0, 1.0);
    mainGroup.add(orangeOrb);
    geometriesToDispose.push(orangeOrbGeom);
    materialsToDispose.push(orangeOrbMat);

    // 5. Floating satellite transparent micro-cubes & fragments
    const satellites: THREE.Mesh[] = [];
    const satPositions = [
      [1.7, 1.2, -0.8, 0.35],
      [-1.8, -0.9, 0.7, 0.28],
      [1.4, -1.3, 0.9, 0.3],
      [-1.4, 1.4, -0.5, 0.25],
      [0.2, 1.9, 1.1, 0.22],
    ];

    satPositions.forEach(([x, y, z, s]) => {
      const satGeom = new THREE.BoxGeometry(s, s, s);
      const satMesh = new THREE.Mesh(satGeom, shardMat);
      satMesh.position.set(x, y, z);
      satMesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
      mainGroup.add(satMesh);
      satellites.push(satMesh);
      geometriesToDispose.push(satGeom);

      const satEdgeGeom = new THREE.EdgesGeometry(satGeom);
      const satLine = new THREE.LineSegments(satEdgeGeom, cyanEdgeMat);
      satMesh.add(satLine);
      geometriesToDispose.push(satEdgeGeom);
    });

    // 6. Circular Orbital Rings (Electric Blue & Cyan)
    const orbitGeom1 = new THREE.TorusGeometry(2.4, 0.012, 16, 80);
    const orbitMat1 = new THREE.MeshBasicMaterial({
      color: 0x35d5ff,
      transparent: true,
      opacity: 0.55,
    });
    const orbitRing1 = new THREE.Mesh(orbitGeom1, orbitMat1);
    orbitRing1.rotation.set(1.1, 0.3, 0.5);
    mainGroup.add(orbitRing1);
    geometriesToDispose.push(orbitGeom1);
    materialsToDispose.push(orbitMat1);

    const orbitGeom2 = new THREE.TorusGeometry(2.8, 0.008, 16, 80);
    const orbitMat2 = new THREE.MeshBasicMaterial({
      color: 0x00a8ff,
      transparent: true,
      opacity: 0.35,
    });
    const orbitRing2 = new THREE.Mesh(orbitGeom2, orbitMat2);
    orbitRing2.rotation.set(-0.7, 0.6, 0.2);
    mainGroup.add(orbitRing2);
    geometriesToDispose.push(orbitGeom2);
    materialsToDispose.push(orbitMat2);

    // 7. Ambient glowing cyan & blue particles (dust / trails)
    const particleCount = 50;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 6;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 6;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x35d5ff,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const embers = new THREE.Points(particleGeom, particleMat);
    scene.add(embers);
    geometriesToDispose.push(particleGeom);
    materialsToDispose.push(particleMat);

    // ==========================================
    // Lighting
    // ==========================================
    const ambient = new THREE.AmbientLight(0x07152b, 1.4);
    scene.add(ambient);

    // Core point light radiating from inside the cube
    const corePointLight = new THREE.PointLight(0x00a8ff, 4.5, 10);
    corePointLight.position.set(0, 0, 0);
    mainGroup.add(corePointLight);

    // Blue orb point light
    const orbLight = new THREE.PointLight(0x35d5ff, 3.5, 8);
    orbLight.position.copy(orbMesh.position);
    mainGroup.add(orbLight);

    // Key directional light
    const keyLight = new THREE.DirectionalLight(0xeef4ff, 2.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Underside bounce
    const bounceLight = new THREE.PointLight(0x087bff, 2.0, 8);
    bounceLight.position.set(0, -2.5, 0);
    scene.add(bounceLight);

    // Subtle orange accent light
    const orangePointLight = new THREE.PointLight(0xff9a45, 1.5, 6);
    orangePointLight.position.copy(orangeOrb.position);
    mainGroup.add(orangePointLight);

    // ==========================================
    // Interaction & Controls
    // ==========================================
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
        dragRotY += dx * 0.01;
        dragRotX += dy * 0.01;
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

    // ==========================================
    // Animation Loop
    // ==========================================
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Continuous subtle levitation & idle rotation
      const idleRotY = elapsed * 0.22;
      const idleRotX = Math.sin(elapsed * 0.5) * 0.12;

      // Smooth lerp to mouse & drag
      const targetY = mouseX * 0.5 + dragRotY + idleRotY;
      const targetX = mouseY * 0.4 + dragRotX + idleRotX;

      mainGroup.rotation.y += (targetY - mainGroup.rotation.y) * 0.06;
      mainGroup.rotation.x += (targetX - mainGroup.rotation.x) * 0.06;

      // Inner core counter-rotation
      innerCube.rotation.y = -elapsed * 0.38;
      innerCube.rotation.z = Math.sin(elapsed * 0.3) * 0.2;

      // Pulse inner light
      blueCoreMat.emissiveIntensity = 3.0 + Math.sin(elapsed * 2.5) * 1.4;
      corePointLight.intensity = 3.8 + Math.sin(elapsed * 2.5) * 1.2;

      // Orb orbit animation
      orbMesh.position.x = Math.cos(elapsed * 1.2) * 1.8;
      orbMesh.position.z = Math.sin(elapsed * 1.2) * 1.8;
      orbMesh.position.y = Math.sin(elapsed * 1.8) * 0.5;
      orbLight.position.copy(orbMesh.position);

      // Satellites floating
      satellites.forEach((sat, i) => {
        sat.position.y += Math.sin(elapsed * 1.8 + i) * 0.003;
        sat.rotation.x += 0.008;
        sat.rotation.y += 0.006;
      });

      // Orbit rings rotation
      orbitRing1.rotation.z += 0.005;
      orbitRing2.rotation.z -= 0.004;

      // Embers drift
      embers.rotation.y = elapsed * 0.035;

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
      cancelAnimationFrame(animationId);
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
    <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[370px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
      {/* Background Electric Blue Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-[#00A8FF]/20 blur-3xl pointer-events-none" />

      {/* Real 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full relative z-10 touch-none flex items-center justify-center"
      />

      {/* Interactive indicator badge */}
      <div className="absolute bottom-2 left-4 z-20 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#35D5FF]/20 bg-[#07152B]/80 backdrop-blur-md text-[10px] font-mono text-[#A8B8D0]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] animate-pulse" />
        <span>{isInteracting ? 'Inspecting 3D Cube' : 'Live 3D • Drag to inspect'}</span>
      </div>
    </div>
  );
}
