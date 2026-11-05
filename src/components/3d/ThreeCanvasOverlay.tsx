import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createAvatarFace } from './AvatarFaceModel';

export default function ThreeCanvasOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: cv,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.95;
    } catch (e) {
      console.warn('WebGL initialization failed', e);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, 1, 0, -1, -2000, 2000);

    // Dynamic equirectangular studio environment texture
    const ec = document.createElement('canvas');
    ec.width = 512;
    ec.height = 256;
    const ctx = ec.getContext('2d');
    if (ctx) {
      const gr = ctx.createLinearGradient(0, 0, 0, 256);
      gr.addColorStop(0, '#ffffff');
      gr.addColorStop(0.45, '#7c5cff');
      gr.addColorStop(0.7, '#ff4fa0');
      gr.addColorStop(1, '#1a1030');
      ctx.fillStyle = gr;
      ctx.fillRect(0, 0, 512, 256);

      ctx.fillStyle = '#ffd9a0';
      ctx.fillRect(60, 70, 90, 40);
      ctx.fillStyle = '#7fe0ff';
      ctx.fillRect(320, 50, 120, 50);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(200, 20, 60, 30);
    }

    const et = new THREE.CanvasTexture(ec);
    et.mapping = THREE.EquirectangularReflectionMapping;
    const pmremGen = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGen.fromEquirectangular(et).texture;

    // Balanced ambient light with natural warm white color
    scene.add(new THREE.AmbientLight(0xfff6ee, 0.75));

    // Soft key directional light (calibrated to prevent harsh white glare)
    const dl = new THREE.DirectionalLight(0xffeedd, 0.45);
    dl.position.set(300, -300, 800);
    scene.add(dl);

    // Subtle warm fill light for natural skin depth
    const warmFill = new THREE.DirectionalLight(0xffcaa8, 0.22);
    warmFill.position.set(-300, -200, 600);
    scene.add(warmFill);

    // Soft cyan rim light for hair contour
    const rimLight = new THREE.DirectionalLight(0x88e0ff, 0.28);
    rimLight.position.set(-300, 300, -400);
    scene.add(rimLight);

    const M = (c: number, m: number, r: number) =>
      new THREE.MeshStandardMaterial({
        color: c,
        metalness: m,
        roughness: r,
        envMapIntensity: 1.35,
      });

    const rs = (w: number, h: number, r: number) => {
      const s = new THREE.Shape();
      const x = -w / 2;
      const y = -h / 2;
      s.moveTo(x + r, y);
      s.lineTo(x + w - r, y);
      s.absarc(x + w - r, y + r, r, -Math.PI / 2, 0, false);
      s.lineTo(x + w, y + h - r);
      s.absarc(x + w - r, y + h - r, r, 0, Math.PI / 2, false);
      s.lineTo(x + r, y + h);
      s.absarc(x + r, y + h - r, r, Math.PI / 2, Math.PI, false);
      s.lineTo(x, y + r);
      s.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
      return s;
    };

    function createPhone() {
      const g = new THREE.Group();
      const bodyGeom = new THREE.ExtrudeGeometry(rs(1.7, 3.5, 0.3), {
        depth: 0.14,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 5,
        curveSegments: 20,
      });
      const b = new THREE.Mesh(bodyGeom, M(0x15162a, 0.9, 0.18));
      b.position.z = -0.07;
      g.add(b);

      const k = document.createElement('canvas');
      k.width = 316;
      k.height = 676;
      const c = k.getContext('2d');
      if (c) {
        c.fillStyle = '#07070c';
        c.fillRect(0, 0, 316, 676);
        const gg = c.createLinearGradient(0, 0, 316, 0);
        gg.addColorStop(0, '#ff3d9a');
        gg.addColorStop(0.55, '#8b5cff');
        gg.addColorStop(1, '#ff9a3d');

        const rb = (
          X: number,
          Y: number,
          W: number,
          H: number,
          rad: number,
          fillColor: string | CanvasGradient
        ) => {
          c.fillStyle = fillColor;
          c.beginPath();
          if (c.roundRect) {
            c.roundRect(X, Y, W, H, rad);
          } else {
            c.rect(X, Y, W, H);
          }
          c.fill();
        };

        rb(112, 16, 92, 18, 9, '#1c1c28');
        rb(26, 90, 180, 34, 17, '#ffffff');
        rb(26, 138, 120, 18, 9, '#555a70');
        rb(26, 190, 264, 170, 26, gg);
        rb(26, 376, 124, 110, 22, '#1d1e2c');
        rb(166, 376, 124, 110, 22, '#1d1e2c');
        rb(26, 506, 264, 56, 28, gg);
        rb(26, 582, 264, 40, 20, '#1d1e2c');
      }

      const t = new THREE.CanvasTexture(k);
      t.anisotropy = 8;
      const sg = new THREE.ShapeGeometry(rs(1.58, 3.38, 0.23), 20);
      const pos = sg.attributes.position;
      const uv = sg.attributes.uv;
      for (let i = 0; i < pos.count; i++) {
        uv.setXY(i, (pos.getX(i) + 0.79) / 1.58, (pos.getY(i) + 1.69) / 3.38);
      }
      const s = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ map: t }));
      s.position.z = 0.145;
      g.add(s);
      g.userData.h = 3.6;
      return g;
    }

    const createFlower = () => {
      const g = new THREE.Group();
      const pm = M(0xc77bff, 0.3, 0.2);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const m = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 24), pm);
        m.position.set(Math.cos(a) * 0.62, Math.sin(a) * 0.62, 0);
        g.add(m);
      }
      g.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(0.38, 32, 24),
          M(0xffd54a, 0.2, 0.25)
        )
      );
      g.userData.h = 2.1;
      return g;
    };

    const makers: Record<string, () => THREE.Object3D> = {
      face: createAvatarFace,
      avatar: createAvatarFace,
      phone: createAvatarFace,
      flower: createFlower,
      knot: () => {
        const m = new THREE.Mesh(
          new THREE.TorusKnotGeometry(0.7, 0.27, 180, 24),
          M(0xdfe6ff, 1, 0.12)
        );
        m.userData.h = 2.4;
        return m;
      },
      knot2: () => {
        const m = new THREE.Mesh(
          new THREE.TorusKnotGeometry(0.7, 0.27, 180, 24),
          M(0xffc247, 0.9, 0.18)
        );
        m.userData.h = 2.4;
        return m;
      },
      cube: () => {
        const m = new THREE.Mesh(
          new THREE.BoxGeometry(1.3, 1.3, 1.3),
          M(0x4a6bff, 0.6, 0.2)
        );
        m.userData.h = 1.9;
        return m;
      },
      ring: () => {
        const m = new THREE.Mesh(
          new THREE.TorusGeometry(0.7, 0.34, 28, 64),
          M(0xff3b4e, 0.4, 0.2)
        );
        m.userData.h = 2;
        return m;
      },
      blob: () => {
        const m = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.95, 3),
          M(0xb35cff, 0.5, 0.18)
        );
        m.userData.h = 1.9;
        return m;
      },
    };

    // Find all placeholder anchors with data-3d
    let items: Array<{
      el: HTMLElement;
      m: THREE.Object3D;
      ph: boolean;
      nx: Element | null;
      par: number;
    }> = [];

    const setupItems = () => {
      // Remove any previous meshes
      items.forEach((it) => scene.remove(it.m));
      items = [];

      const domEls = document.querySelectorAll<HTMLElement>('[data-3d]');
      const aboutSheet = document.getElementById('about');

      domEls.forEach((el) => {
        const key = el.dataset['3d'];
        if (key && makers[key]) {
          const m = makers[key]();
          scene.add(m);
          const s = el.closest('section, header');

          const isHeroTarget = key === 'phone' || key === 'face' || key === 'avatar';
          // For the hero 3D model, its occluding boundary is the first sheet (#about)
          const nextBoundary = isHeroTarget
            ? aboutSheet || document.querySelector('.sheet')
            : s
            ? s.nextElementSibling
            : null;

          items.push({
            el,
            m,
            ph: isHeroTarget,
            nx: nextBoundary,
            par: Number(el.dataset.par) || 0,
          });
        }
      });
    };

    // Initial setup with short delay to allow DOM to mount
    const timer = setTimeout(setupItems, 80);

    const fit = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      renderer.setSize(W, H, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      camera.left = 0;
      camera.right = W;
      camera.top = 0;
      camera.bottom = -H;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);
    fit();

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let lastInputTime = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth - 0.5;
      targetMouseY = e.clientY / window.innerHeight - 0.5;
      lastInputTime = performance.now();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        targetMouseX = touch.clientX / window.innerWidth - 0.5;
        targetMouseY = touch.clientY / window.innerHeight - 0.5;
        lastInputTime = performance.now();
      }
    };

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        // gamma: left-to-right tilt (-90 to 90)
        // beta: front-to-back tilt (-180 to 180, normal reading angle is ~45deg)
        const tiltX = Math.max(-0.8, Math.min(0.8, e.gamma / 35));
        const tiltY = Math.max(-0.8, Math.min(0.8, (e.beta - 45) / 35));
        targetMouseX = targetMouseX * 0.4 + tiltX * 0.5;
        targetMouseY = targetMouseY * 0.4 + tiltY * 0.5;
        lastInputTime = performance.now();
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', onOrientation, { passive: true });
    }

    const cl = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t0 = performance.now();
    let animId: number;

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      const H = window.innerHeight;
      const t = calm ? 9 : (performance.now() - t0) / 1000;

      // Autonomic life simulation for mobile and desktop when idle
      const timeSinceInput = (performance.now() - lastInputTime) / 1000;
      if (timeSinceInput > 2.0 && !calm) {
        const idleX = Math.sin(t * 0.75) * 0.18 + Math.sin(t * 1.5) * 0.06;
        const idleY = Math.cos(t * 0.55) * 0.12;
        targetMouseX += (idleX - targetMouseX) * 0.04;
        targetMouseY += (idleY - targetMouseY) * 0.04;
      }

      // Smooth lag dampening
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      items.forEach((o, i) => {
        const r = o.el.getBoundingClientRect();
        let f = 1;
        if (o.nx) {
          f = cl((o.nx.getBoundingClientRect().top - r.top) / r.height);
        }
        const vis = r.bottom > -300 && r.top < H + 300 && f > 0.02;
        o.m.visible = vis;
        if (!vis) return;

        const px = o.ph ? r.height : Math.max(r.width, r.height);
        const inT = o.ph ? 1 - Math.pow(1 - cl(t / 1.3), 3) : 1;
        const s = (px / (o.m.userData.h || 2)) * f * inT;

        o.m.position.set(
          r.left + r.width / 2,
          -(r.top + r.height / 2) + Math.sin(t * 1.3 + i) * 6,
          0
        );
        o.m.scale.setScalar(Math.max(s, 0.001));

        if (o.ph) {
          if (o.m.userData.isAvatar) {
            // Smooth 3D tilt following cursor / touch / gyroscope
            o.m.rotation.y = -0.08 + mouseX * 0.85 + Math.sin(t * 0.9) * 0.04;
            o.m.rotation.x = -mouseY * 0.45 + Math.cos(t * 0.7) * 0.03;
            o.m.rotation.z = mouseX * -0.1;
          } else {
            o.m.rotation.y = -0.35 + mouseX * 0.9 + Math.sin(t * 0.8) * 0.3;
            o.m.rotation.x = mouseY * 0.35;
            o.m.rotation.z = -0.08;
          }
        } else {
          o.m.rotation.y = t * 0.6 + i;
          o.m.rotation.x = t * 0.4 + mouseX;
        }
      });

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', fit);
      window.removeEventListener('orientationchange', fit);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
        window.removeEventListener('deviceorientation', onOrientation);
      }
      renderer.dispose();
      pmremGen.dispose();
      items.forEach((it) => {
        scene.remove(it.m);
      });
    };
  }, []);

  return <canvas id="gl" ref={canvasRef} aria-hidden="true" />;
}
