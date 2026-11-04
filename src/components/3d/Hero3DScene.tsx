import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030B1B, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 7.5);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Electric Blue, Cyan & Warm Orange Horizon Glow)
    const ambientLight = new THREE.AmbientLight(0x07152B, 1.6);
    scene.add(ambientLight);

    // Cool blue keylight from top-right
    const blueLight = new THREE.DirectionalLight(0x00A8FF, 3.0);
    blueLight.position.set(5, 6, 4);
    scene.add(blueLight);

    // Warm orange light from bottom-left / horizon plane (Creates the distinctive warm bottom glow on cubes)
    const orangeHorizonLight = new THREE.DirectionalLight(0xFF6B00, 3.8);
    orangeHorizonLight.position.set(-3, -4, 2);
    scene.add(orangeHorizonLight);

    // Second orange warm light from rear-right
    const warmSunLight = new THREE.DirectionalLight(0xFFAA45, 2.5);
    warmSunLight.position.set(4, 5, -2);
    scene.add(warmSunLight);

    // Glowing Blue PointLight
    const bluePointLight = new THREE.PointLight(0x00A8FF, 3.5, 12);
    bluePointLight.position.set(1.5, 0.8, 1.0);
    scene.add(bluePointLight);

    // Subtle Orange Accent PointLight
    const orangePointLight = new THREE.PointLight(0xFF7A00, 4.0, 10);
    orangePointLight.position.set(-2.2, 1.2, -1.0);
    scene.add(orangePointLight);

    // 4. Materials
    // Metallic Dark Navy Material with Warm Orange & Blue Reflections
    const metallicCubeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x091426,
      metalness: 0.9,
      roughness: 0.18,
      clearcoat: 0.85,
      clearcoatRoughness: 0.15,
      reflectivity: 0.95,
    });

    const orangeWireMaterial = new THREE.LineBasicMaterial({
      color: 0xFF7A00,
      transparent: true,
      opacity: 0.5,
    });

    const cyanWireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x35D5FF,
      transparent: true,
      opacity: 0.45,
    });

    // 5. Three Primary Floating 3D Cubes (As Requested & Shown in Reference)
    const cubesGroup = new THREE.Group();
    scene.add(cubesGroup);

    // Cube 1: Central Hero Cube
    const cube1Geo = new THREE.BoxGeometry(2.0, 2.0, 2.0);
    const cube1 = new THREE.Mesh(cube1Geo, metallicCubeMaterial);
    cube1.position.set(0.6, 0.2, 0);
    cube1.rotation.set(0.4, 0.5, 0.2);

    const cube1WireGeo = new THREE.EdgesGeometry(cube1Geo);
    const cube1Wire = new THREE.LineSegments(cube1WireGeo, orangeWireMaterial);
    cube1.add(cube1Wire);
    cubesGroup.add(cube1);

    // Cube 2: Upper-Right Floating Cube
    const cube2Geo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const cube2 = new THREE.Mesh(cube2Geo, metallicCubeMaterial);
    cube2.position.set(2.4, 1.8, -1.2);
    cube2.rotation.set(-0.3, 0.7, 0.4);

    const cube2WireGeo = new THREE.EdgesGeometry(cube2Geo);
    const cube2Wire = new THREE.LineSegments(cube2WireGeo, cyanWireframeMaterial);
    cube2.add(cube2Wire);
    cubesGroup.add(cube2);

    // Cube 3: Lower-Left/Foreground Floating Cube
    const cube3Geo = new THREE.BoxGeometry(1.0, 1.0, 1.0);
    const cube3 = new THREE.Mesh(cube3Geo, metallicCubeMaterial);
    cube3.position.set(-1.4, -1.0, 0.8);
    cube3.rotation.set(0.6, -0.4, 0.3);

    const cube3WireGeo = new THREE.EdgesGeometry(cube3Geo);
    const cube3Wire = new THREE.LineSegments(cube3WireGeo, orangeWireMaterial);
    cube3.add(cube3Wire);
    cubesGroup.add(cube3);

    // 6. Multiple Smaller Geometric Objects
    const smallObjects: THREE.Mesh[] = [];
    const smallGeo1 = new THREE.OctahedronGeometry(0.35);
    const smallGeo2 = new THREE.TetrahedronGeometry(0.3);
    const smallGeo3 = new THREE.BoxGeometry(0.25, 0.25, 0.25);

    const smallPositions = [
      new THREE.Vector3(-2.0, 1.6, -0.8),
      new THREE.Vector3(1.2, -1.6, 1.2),
      new THREE.Vector3(3.2, -0.4, -0.5),
      new THREE.Vector3(-0.8, 2.2, -1.5),
      new THREE.Vector3(0.2, -1.8, -1.0),
    ];

    smallPositions.forEach((pos, i) => {
      const geo = i % 3 === 0 ? smallGeo1 : i % 3 === 1 ? smallGeo2 : smallGeo3;
      const mesh = new THREE.Mesh(geo, metallicCubeMaterial);
      mesh.position.copy(pos);
      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        i % 2 === 0 ? orangeWireMaterial : cyanWireframeMaterial
      );
      mesh.add(wire);
      cubesGroup.add(mesh);
      smallObjects.push(mesh);
    });

    // 7. Glowing Blue Sphere
    const blueSphereGeo = new THREE.SphereGeometry(0.45, 32, 32);
    const blueSphereMat = new THREE.MeshStandardMaterial({
      color: 0x00A8FF,
      emissive: 0x00A8FF,
      emissiveIntensity: 2.2,
      roughness: 0.1,
      metalness: 0.2,
    });
    const blueSphere = new THREE.Mesh(blueSphereGeo, blueSphereMat);
    scene.add(blueSphere);

    // 8. Glowing Orange Sun Sphere (Matches Reference in Upper Right)
    const orangeSphereGeo = new THREE.SphereGeometry(0.38, 32, 32);
    const orangeSphereMat = new THREE.MeshStandardMaterial({
      color: 0xFF7A00,
      emissive: 0xFF6B00,
      emissiveIntensity: 3.0,
      roughness: 0.1,
      metalness: 0.1,
    });
    const orangeSphere = new THREE.Mesh(orangeSphereGeo, orangeSphereMat);
    scene.add(orangeSphere);

    // 9. Circular Orbital Rings Surrounding the Cubes
    const createOrbitRing = (
      radiusX: number,
      radiusY: number,
      rotationX: number,
      rotationY: number,
      color: number
    ) => {
      const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(120);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5,
        linewidth: 1.5,
      });
      const ring = new THREE.Line(geometry, material);
      ring.rotation.x = rotationX;
      ring.rotation.y = rotationY;
      return ring;
    };

    const orbitRing1 = createOrbitRing(2.8, 2.2, Math.PI / 3, Math.PI / 6, 0x00A8FF);
    orbitRing1.position.set(0.6, 0.2, 0);
    scene.add(orbitRing1);

    const orbitRing2 = createOrbitRing(3.4, 2.7, -Math.PI / 4, Math.PI / 4, 0x35D5FF);
    orbitRing2.position.set(0.6, 0.2, 0);
    scene.add(orbitRing2);

    const orbitRing3 = createOrbitRing(2.2, 1.8, Math.PI / 2.2, -Math.PI / 8, 0xFF7A00);
    orbitRing3.position.set(0.6, 0.2, 0);
    scene.add(orbitRing3);

    // 10. Floating Particle Cloud
    const particleCount = 380;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00A8FF);
    const color2 = new THREE.Color(0x35D5FF);
    const color3 = new THREE.Color(0xFF7A00);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 16;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Color variation: Orange and Blue mix
      const c = Math.random() > 0.6 ? color3 : Math.random() > 0.3 ? color1 : color2;
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 11. Reflective Floor Plane with Warm Orange Glow
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x050F22,
      metalness: 0.85,
      roughness: 0.25,
      transparent: true,
      opacity: 0.65,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.6;
    scene.add(floor);

    const gridHelper = new THREE.GridHelper(26, 26, 0xFF6B00, 0x0A2045);
    gridHelper.position.y = -2.58;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.28;
    scene.add(gridHelper);

    // 12. Mouse & Scroll Interaction Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 13. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (LERP)
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      // Camera parallax
      camera.position.x = mouse.x * 0.85;
      camera.position.y = 1.2 + mouse.y * 0.5 - scrollY * 0.001;
      camera.lookAt(0.3, 0.1, 0);

      // Cube 1 Rotation & Floating
      cube1.rotation.x = 0.4 + elapsedTime * 0.18;
      cube1.rotation.y = 0.5 + elapsedTime * 0.24;
      cube1.position.y = 0.2 + Math.sin(elapsedTime * 1.2) * 0.18;

      // Cube 2 Rotation & Floating
      cube2.rotation.x = -0.3 + elapsedTime * 0.28;
      cube2.rotation.z = 0.4 + elapsedTime * 0.2;
      cube2.position.y = 1.8 + Math.cos(elapsedTime * 1.5) * 0.14;

      // Cube 3 Rotation & Floating
      cube3.rotation.y = -0.4 + elapsedTime * 0.22;
      cube3.rotation.z = 0.3 - elapsedTime * 0.16;
      cube3.position.y = -1.0 + Math.sin(elapsedTime * 1.4 + 1) * 0.15;

      // Small floating fragments
      smallObjects.forEach((obj, idx) => {
        obj.rotation.x += 0.01 * (idx + 1);
        obj.rotation.y += 0.012 * (idx + 1);
        obj.position.y += Math.sin(elapsedTime * 2 + idx) * 0.002;
      });

      // Blue Sphere Orbital Motion
      const blueAngle = elapsedTime * 0.85;
      const blueRadius = 2.4;
      blueSphere.position.x = 0.6 + Math.cos(blueAngle) * blueRadius;
      blueSphere.position.z = Math.sin(blueAngle) * (blueRadius * 0.8);
      blueSphere.position.y = 0.2 + Math.sin(blueAngle * 1.5) * 0.5;
      bluePointLight.position.copy(blueSphere.position);

      // Orange Sphere Orbital Motion (Upper orbit as seen in reference image)
      const orangeAngle = -elapsedTime * 0.55 + Math.PI * 0.75;
      const orangeRadius = 3.2;
      orangeSphere.position.x = 0.6 + Math.cos(orangeAngle) * orangeRadius;
      orangeSphere.position.z = Math.sin(orangeAngle) * (orangeRadius * 0.6);
      orangeSphere.position.y = 1.4 + Math.sin(orangeAngle * 1.2) * 0.35;
      orangePointLight.position.copy(orangeSphere.position);

      // Orbital Rings Rotation
      orbitRing1.rotation.z = elapsedTime * 0.08;
      orbitRing2.rotation.z = -elapsedTime * 0.06;
      orbitRing3.rotation.z = elapsedTime * 0.1;

      // Particle Drift
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // 14. Responsive Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
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
      aria-label="Interactive 3D Geometric Scene"
    />
  );
}
