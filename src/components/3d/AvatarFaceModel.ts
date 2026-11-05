import * as THREE from 'three';

/**
 * Creates the high-resolution interactive 3D Avatar Head model
 * using the user's custom 3D cartoon avatar, sculpted with real 3D depth curvature,
 * multi-layer parallax neon halo, and dynamic orbital dust motes.
 */
export function createAvatarFace(): THREE.Group {
  const root = new THREE.Group();
  const headPivot = new THREE.Group();
  root.add(headPivot);

  // ---------------------------------------------------------
  // 1. Texture Loader for the Cutout 3D Avatar
  // ---------------------------------------------------------
  const loader = new THREE.TextureLoader();
  const avatarTexture = loader.load('/assets/avatar_3d_cutout.png');
  avatarTexture.colorSpace = THREE.SRGBColorSpace;
  avatarTexture.generateMipmaps = true;
  avatarTexture.minFilter = THREE.LinearMipmapLinearFilter;
  avatarTexture.magFilter = THREE.LinearFilter;

  // ---------------------------------------------------------
  // 2. Sculpted 3D Curved Facial Mesh
  // ---------------------------------------------------------
  // By sculpting the plane with smooth anatomical 3D dome curvature,
  // the face gains real volumetric depth when tilting in 3D perspective.
  const geom = new THREE.PlaneGeometry(3.35, 3.35, 48, 48);
  const pos = geom.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);

    // Normalized coordinates from center (-1 to 1)
    const nx = x / 1.6;
    const ny = y / 1.6;
    const distSq = nx * nx + ny * ny;

    if (distSq < 1.0) {
      // Smooth spherical falloff bulging nose & face center forward
      const bulge = Math.pow(1.0 - distSq, 1.2) * 0.36;
      pos.setZ(i, bulge);
    } else {
      // Ears and edges curve back into 3D space
      pos.setZ(i, -0.06);
    }
  }
  geom.computeVertexNormals();

  // Material with soft cartoon lighting and subtle environment sheen
  const faceMat = new THREE.MeshStandardMaterial({
    map: avatarTexture,
    transparent: true,
    alphaTest: 0.02,
    roughness: 0.38,
    metalness: 0.1,
    envMapIntensity: 1.15,
    side: THREE.DoubleSide,
  });

  const faceMesh = new THREE.Mesh(geom, faceMat);
  headPivot.add(faceMesh);

  // ---------------------------------------------------------
  // 3. Multi-Layer Parallax Glowing Neon Halo Ring
  // ---------------------------------------------------------
  // Glowing cyber gradient ring behind the head
  const ringGeom = new THREE.TorusGeometry(1.65, 0.038, 16, 72);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0x8b5cff,
    emissive: 0xff3d9a,
    emissiveIntensity: 0.7,
    roughness: 0.2,
    metalness: 0.6,
  });
  const halo = new THREE.Mesh(ringGeom, ringMat);
  halo.position.set(0, 0, -0.22);
  headPivot.add(halo);

  // Secondary outer thin accent ring
  const outerRingGeom = new THREE.TorusGeometry(1.78, 0.016, 12, 64);
  const outerRingMat = new THREE.MeshStandardMaterial({
    color: 0x35d5ff,
    emissive: 0x35d5ff,
    emissiveIntensity: 0.5,
    roughness: 0.1,
    metalness: 0.8,
  });
  const outerHalo = new THREE.Mesh(outerRingGeom, outerRingMat);
  outerHalo.position.set(0, 0, -0.26);
  headPivot.add(outerHalo);

  // ---------------------------------------------------------
  // 4. Floating 3D Ambient Dust Embers (Cyan & Gold)
  // ---------------------------------------------------------
  const particleCount = 28;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.35 + Math.random() * 0.9;
    particlePositions[i * 3] = Math.cos(angle) * radius;
    particlePositions[i * 3 + 1] = Math.sin(angle) * radius * 0.95;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
  }

  const particleGeom = new THREE.BufferGeometry();
  particleGeom.setAttribute(
    'position',
    new THREE.BufferAttribute(particlePositions, 3)
  );

  const particleMat = new THREE.PointsMaterial({
    color: 0xffa045,
    size: 0.055,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
  });

  const particles = new THREE.Points(particleGeom, particleMat);
  headPivot.add(particles);

  // ---------------------------------------------------------
  // 5. Rig Metadata for the Animation Render Loop
  // ---------------------------------------------------------
  root.userData = {
    h: 3.35,
    isAvatar: true,
    headPivot,
    faceMesh,
    halo,
    outerHalo,
    particles,
  };

  return root;
}
