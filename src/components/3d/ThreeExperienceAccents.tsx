import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeExperienceAccents() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      console.warn('WebGL failed in ThreeExperienceAccents', e);
      return;
    }

    const width = container.clientWidth || 240;
    const height = container.clientHeight || 200;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0.8, 5.5);

    const group = new THREE.Group();
    scene.add(group);

    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x091428,
      metalness: 0.9,
      roughness: 0.2,
    });
    materialsToDispose.push(darkMat);

    const cyanEdgeMat = new THREE.LineBasicMaterial({
      color: 0x35d5ff,
      transparent: true,
      opacity: 0.75,
    });
    materialsToDispose.push(cyanEdgeMat);

    const blueEdgeMat = new THREE.LineBasicMaterial({
      color: 0x00a8ff,
      transparent: true,
      opacity: 0.65,
    });
    materialsToDispose.push(blueEdgeMat);

    const makeCube = (size: number, x: number, y: number, z: number, rx: number, ry: number, edgeMat: THREE.Material) => {
      const g = new THREE.Group();
      const geom = new THREE.BoxGeometry(size, size, size);
      const mesh = new THREE.Mesh(geom, darkMat);
      g.add(mesh);

      const edgeGeom = new THREE.EdgesGeometry(geom);
      const line = new THREE.LineSegments(edgeGeom, edgeMat);
      g.add(line);

      g.position.set(x, y, z);
      g.rotation.set(rx, ry, 0);
      group.add(g);

      geometriesToDispose.push(geom);
      geometriesToDispose.push(edgeGeom);
      return g;
    };

    const cube1 = makeCube(1.5, 0.2, 0.2, 0, 0.5, 0.7, cyanEdgeMat);
    const cube2 = makeCube(0.9, -1.1, -0.6, 0.5, 0.3, 0.4, blueEdgeMat);
    const cube3 = makeCube(0.6, 1.4, 1.1, -0.4, 0.8, -0.3, cyanEdgeMat);

    // Glowing cyan orb
    const orbGeom = new THREE.SphereGeometry(0.2, 16, 16);
    const orbMat = new THREE.MeshBasicMaterial({ color: 0x35d5ff });
    const orbMesh = new THREE.Mesh(orbGeom, orbMat);
    orbMesh.position.set(0.9, 0.8, 0.6);
    group.add(orbMesh);
    geometriesToDispose.push(orbGeom);
    materialsToDispose.push(orbMat);

    // Subtle orange accent orb
    const orangeOrbGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const orangeOrbMat = new THREE.MeshBasicMaterial({ color: 0xff9a45 });
    const orangeOrb = new THREE.Mesh(orangeOrbGeom, orangeOrbMat);
    orangeOrb.position.set(-0.9, 0.2, -0.3);
    group.add(orangeOrb);
    geometriesToDispose.push(orangeOrbGeom);
    materialsToDispose.push(orangeOrbMat);

    // Lighting
    const ambient = new THREE.AmbientLight(0x07152b, 1.3);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xeef4ff, 2.0);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const pointLight = new THREE.PointLight(0x00a8ff, 4.0, 8);
    pointLight.position.copy(orbMesh.position);
    scene.add(pointLight);

    const orangeLight = new THREE.PointLight(0xff9a45, 1.5, 6);
    orangeLight.position.copy(orangeOrb.position);
    scene.add(orangeLight);

    let mouseX = 0;
    let mouseY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('pointermove', onPointerMove);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      group.rotation.y += (mouseX * 0.3 + elapsed * 0.1 - group.rotation.y) * 0.05;
      group.rotation.x += (mouseY * 0.2 + Math.sin(elapsed * 0.4) * 0.08 - group.rotation.x) * 0.05;

      cube1.position.y = 0.2 + Math.sin(elapsed * 1.2) * 0.05;
      cube2.position.y = -0.6 + Math.sin(elapsed * 1.5 + 1) * 0.04;
      cube3.position.y = 1.1 + Math.sin(elapsed * 1.1 + 2) * 0.06;

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

      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());

      renderer.dispose();
      if (renderer.domElement?.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[190px] sm:h-[230px] flex items-center justify-center select-none pointer-events-none">
      <div className="pointer-events-none absolute bottom-0 right-0 w-44 h-44 rounded-full bg-[#00A8FF]/20 blur-2xl" />
      <div
        ref={containerRef}
        className="w-full h-full relative z-10 flex items-center justify-center"
      />
    </div>
  );
}
