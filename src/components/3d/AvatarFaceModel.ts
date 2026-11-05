import * as THREE from 'three';

export interface AvatarRig {
  group: THREE.Group;
  leftPupil: THREE.Group;
  rightPupil: THREE.Group;
  leftEarring: THREE.Mesh;
  rightEarring: THREE.Mesh;
  headPivot: THREE.Group;
}

export function createAvatarFace(): THREE.Group {
  const root = new THREE.Group();
  const headPivot = new THREE.Group();
  root.add(headPivot);

  // ---------------------------------------------------------
  // Materials
  // ---------------------------------------------------------
  // Stylized warm peach skin with soft cartoon shading
  const skinMat = new THREE.MeshStandardMaterial({
    color: 0xf6be9d,
    roughness: 0.44,
    metalness: 0.04,
    envMapIntensity: 0.85,
  });

  const skinCheekMat = new THREE.MeshStandardMaterial({
    color: 0xf09a86,
    roughness: 0.5,
    metalness: 0.02,
    transparent: true,
    opacity: 0.75,
  });

  // Dark rich chestnut brown hair
  const hairMat = new THREE.MeshStandardMaterial({
    color: 0x241610,
    roughness: 0.42,
    metalness: 0.12,
    envMapIntensity: 1.25,
  });

  // Warm caramel hair highlights for strands & waves
  const hairHighlightMat = new THREE.MeshStandardMaterial({
    color: 0x482d20,
    roughness: 0.38,
    metalness: 0.18,
    envMapIntensity: 1.4,
  });

  // Eyes
  const eyeWhiteMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.15,
    metalness: 0.02,
  });

  const irisMat = new THREE.MeshStandardMaterial({
    color: 0x1c130d,
    roughness: 0.22,
    metalness: 0.08,
  });

  const pupilMat = new THREE.MeshBasicMaterial({
    color: 0x050403,
  });

  const sparkleMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });

  // Eyebrows
  const browMat = new THREE.MeshStandardMaterial({
    color: 0x1a110a,
    roughness: 0.55,
  });

  // Lips
  const lipMat = new THREE.MeshStandardMaterial({
    color: 0xb55a53,
    roughness: 0.38,
    metalness: 0.06,
  });

  // Silver hoop earrings
  const earringMat = new THREE.MeshStandardMaterial({
    color: 0xf0f4f8,
    metalness: 0.98,
    roughness: 0.1,
    envMapIntensity: 2.6,
  });

  // Collar / base
  const collarMat = new THREE.MeshStandardMaterial({
    color: 0x0c0d14,
    roughness: 0.8,
    metalness: 0.1,
  });

  // ---------------------------------------------------------
  // 1. Head / Face Structure
  // ---------------------------------------------------------
  // Cranium / Upper face
  const craniumGeom = new THREE.SphereGeometry(1.0, 36, 28);
  const cranium = new THREE.Mesh(craniumGeom, skinMat);
  cranium.scale.set(0.92, 1.04, 0.94);
  headPivot.add(cranium);

  // Jaw / Chin tapering smoothly down
  const jawGeom = new THREE.SphereGeometry(0.56, 28, 22);
  const jaw = new THREE.Mesh(jawGeom, skinMat);
  jaw.position.set(0, -0.56, 0.2);
  jaw.scale.set(0.95, 0.9, 0.86);
  headPivot.add(jaw);

  // Cute chin tip
  const chinGeom = new THREE.SphereGeometry(0.24, 20, 16);
  const chin = new THREE.Mesh(chinGeom, skinMat);
  chin.position.set(0, -0.86, 0.32);
  chin.scale.set(1.1, 0.75, 0.8);
  headPivot.add(chin);

  // Cheeks / soft blush
  const cheekGeom = new THREE.SphereGeometry(0.34, 20, 16);
  const leftCheek = new THREE.Mesh(cheekGeom, skinCheekMat);
  leftCheek.position.set(-0.48, -0.22, 0.62);
  leftCheek.scale.set(1.0, 0.65, 0.5);
  headPivot.add(leftCheek);

  const rightCheek = new THREE.Mesh(cheekGeom, skinCheekMat);
  rightCheek.position.set(0.48, -0.22, 0.62);
  rightCheek.scale.set(1.0, 0.65, 0.5);
  headPivot.add(rightCheek);

  // ---------------------------------------------------------
  // 2. Ears & Silver Hoop Earrings
  // ---------------------------------------------------------
  const earGeom = new THREE.SphereGeometry(0.36, 22, 18);

  // Left Ear
  const leftEar = new THREE.Mesh(earGeom, skinMat);
  leftEar.position.set(-0.93, -0.06, -0.04);
  leftEar.scale.set(0.26, 0.46, 0.28);
  leftEar.rotation.z = -0.15;
  leftEar.rotation.y = 0.22;
  headPivot.add(leftEar);

  // Right Ear
  const rightEar = new THREE.Mesh(earGeom, skinMat);
  rightEar.position.set(0.93, -0.06, -0.04);
  rightEar.scale.set(0.26, 0.46, 0.28);
  rightEar.rotation.z = 0.15;
  rightEar.rotation.y = -0.22;
  headPivot.add(rightEar);

  // Silver Hoop Earrings
  const earringGeom = new THREE.TorusGeometry(0.125, 0.024, 16, 32);

  const leftEarring = new THREE.Mesh(earringGeom, earringMat);
  leftEarring.position.set(-0.96, -0.28, -0.02);
  leftEarring.rotation.y = Math.PI / 2 + 0.15;
  headPivot.add(leftEarring);

  const rightEarring = new THREE.Mesh(earringGeom, earringMat);
  rightEarring.position.set(0.96, -0.28, -0.02);
  rightEarring.rotation.y = Math.PI / 2 - 0.15;
  headPivot.add(rightEarring);

  // ---------------------------------------------------------
  // 3. Eyes & Interactive Pupils
  // ---------------------------------------------------------
  const eyeScleraGeom = new THREE.SphereGeometry(0.27, 24, 20);

  // Left Eye Socket / Sclera
  const leftSclera = new THREE.Mesh(eyeScleraGeom, eyeWhiteMat);
  leftSclera.position.set(-0.35, 0.02, 0.78);
  leftSclera.scale.set(1.0, 1.1, 0.65);
  headPivot.add(leftSclera);

  // Right Eye Socket / Sclera
  const rightSclera = new THREE.Mesh(eyeScleraGeom, eyeWhiteMat);
  rightSclera.position.set(0.35, 0.02, 0.78);
  rightSclera.scale.set(1.0, 1.1, 0.65);
  headPivot.add(rightSclera);

  // Interactive Pupils (groups allow tracking cursor)
  const leftPupil = new THREE.Group();
  leftPupil.position.set(-0.35, 0.02, 0.88);
  headPivot.add(leftPupil);

  const rightPupil = new THREE.Group();
  rightPupil.position.set(0.35, 0.02, 0.88);
  headPivot.add(rightPupil);

  const buildEyePupil = (targetGroup: THREE.Group) => {
    // Iris
    const irisGeom = new THREE.SphereGeometry(0.145, 20, 16);
    const iris = new THREE.Mesh(irisGeom, irisMat);
    iris.scale.set(1, 1, 0.35);
    targetGroup.add(iris);

    // Deep center pupil
    const pupilGeom = new THREE.SphereGeometry(0.082, 16, 14);
    const pupil = new THREE.Mesh(pupilGeom, pupilMat);
    pupil.position.z = 0.035;
    pupil.scale.set(1, 1, 0.3);
    targetGroup.add(pupil);

    // Primary glossy glint
    const glint1Geom = new THREE.SphereGeometry(0.042, 12, 10);
    const glint1 = new THREE.Mesh(glint1Geom, sparkleMat);
    glint1.position.set(0.045, 0.045, 0.06);
    targetGroup.add(glint1);

    // Secondary mini glint
    const glint2Geom = new THREE.SphereGeometry(0.02, 10, 8);
    const glint2 = new THREE.Mesh(glint2Geom, sparkleMat);
    glint2.position.set(-0.035, -0.035, 0.055);
    targetGroup.add(glint2);
  };

  buildEyePupil(leftPupil);
  buildEyePupil(rightPupil);

  // Left Eyelid - slightly lowered for that cool smug / chill smirk expression
  const leftLidGeom = new THREE.SphereGeometry(0.29, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.42);
  const leftLid = new THREE.Mesh(leftLidGeom, skinMat);
  leftLid.position.set(-0.35, 0.11, 0.77);
  leftLid.rotation.x = 0.28;
  leftLid.scale.set(1.02, 0.8, 0.7);
  headPivot.add(leftLid);

  // Right Eyelid - sleek natural hooding
  const rightLidGeom = new THREE.SphereGeometry(0.29, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.32);
  const rightLid = new THREE.Mesh(rightLidGeom, skinMat);
  rightLid.position.set(0.35, 0.13, 0.77);
  rightLid.rotation.x = 0.18;
  rightLid.scale.set(1.02, 0.8, 0.7);
  headPivot.add(rightLid);

  // ---------------------------------------------------------
  // 4. Thick Expressive Eyebrows
  // ---------------------------------------------------------
  const createEyebrow = (archAngle: number, isRight: boolean) => {
    const browGroup = new THREE.Group();
    const count = 7;
    for (let i = 0; i < count; i++) {
      const segW = 0.06;
      const segH = 0.075 - Math.abs(i - 2.5) * 0.01;
      const segGeom = new THREE.BoxGeometry(segW, segH, 0.06);
      const segMesh = new THREE.Mesh(segGeom, browMat);
      const xOffset = (i - count / 2) * 0.045;
      const yOffset = Math.sin((i / count) * Math.PI) * 0.04;
      segMesh.position.set(xOffset, yOffset, 0);
      segMesh.rotation.z = ((i - count / 2) * 0.08) * (isRight ? -1 : 1);
      browGroup.add(segMesh);
    }
    browGroup.rotation.z = archAngle;
    return browGroup;
  };

  const leftBrow = createEyebrow(0.08, false);
  leftBrow.position.set(-0.36, 0.32, 0.86);
  headPivot.add(leftBrow);

  const rightBrow = createEyebrow(-0.04, true);
  rightBrow.position.set(0.36, 0.34, 0.86);
  headPivot.add(rightBrow);

  // ---------------------------------------------------------
  // 5. Stylized Cute Nose
  // ---------------------------------------------------------
  const noseTipGeom = new THREE.SphereGeometry(0.11, 18, 14);
  const noseTip = new THREE.Mesh(noseTipGeom, skinMat);
  noseTip.position.set(0, -0.17, 0.95);
  noseTip.scale.set(0.9, 0.75, 0.85);
  headPivot.add(noseTip);

  // Nose bridge
  const bridgeGeom = new THREE.CylinderGeometry(0.045, 0.065, 0.28, 14);
  const bridge = new THREE.Mesh(bridgeGeom, skinMat);
  bridge.position.set(0, -0.04, 0.91);
  bridge.rotation.x = -0.15;
  headPivot.add(bridge);

  // Nostril wings
  const wingGeom = new THREE.SphereGeometry(0.06, 12, 10);
  const leftWing = new THREE.Mesh(wingGeom, skinMat);
  leftWing.position.set(-0.09, -0.2, 0.91);
  leftWing.scale.set(0.8, 0.65, 0.6);
  headPivot.add(leftWing);

  const rightWing = new THREE.Mesh(wingGeom, skinMat);
  rightWing.position.set(0.09, -0.2, 0.91);
  rightWing.scale.set(0.8, 0.65, 0.6);
  headPivot.add(rightWing);

  // ---------------------------------------------------------
  // 6. Smug / Chill Mouth
  // ---------------------------------------------------------
  // Subtle asymmetric half-smile smirk
  const mouthCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.19, -0.47, 0.82),
    new THREE.Vector3(-0.06, -0.49, 0.85),
    new THREE.Vector3(0.08, -0.48, 0.85),
    new THREE.Vector3(0.21, -0.44, 0.82), // slight lift on right
  ]);
  const mouthGeom = new THREE.TubeGeometry(mouthCurve, 20, 0.028, 10, false);
  const mouth = new THREE.Mesh(mouthGeom, lipMat);
  headPivot.add(mouth);

  // Lower lip volume
  const lowerLipGeom = new THREE.SphereGeometry(0.08, 16, 12);
  const lowerLip = new THREE.Mesh(lowerLipGeom, lipMat);
  lowerLip.position.set(0.02, -0.53, 0.84);
  lowerLip.scale.set(1.4, 0.55, 0.5);
  headPivot.add(lowerLip);

  // ---------------------------------------------------------
  // 7. Voluminous Tousled 3D Hair
  // ---------------------------------------------------------
  // Base hair cap covering back, top and upper sides
  const hairCapGeom = new THREE.SphereGeometry(1.08, 36, 26);
  const hairCap = new THREE.Mesh(hairCapGeom, hairMat);
  hairCap.position.set(0, 0.22, -0.1);
  hairCap.scale.set(0.96, 1.08, 1.05);
  headPivot.add(hairCap);

  // Helper to build sculpted tapered hair locks
  const addHairLock = (
    pos: [number, number, number],
    rot: [number, number, number],
    scale: [number, number, number],
    isHighlight = false
  ) => {
    const lockGeom = new THREE.ConeGeometry(0.24, 0.85, 14);
    const lock = new THREE.Mesh(lockGeom, isHighlight ? hairHighlightMat : hairMat);
    lock.position.set(...pos);
    lock.rotation.set(...rot);
    lock.scale.set(...scale);
    headPivot.add(lock);
  };

  // Front fringe / bangs sweeping over forehead
  // Center bang swooping down-right over forehead
  addHairLock([0.08, 0.58, 0.88], [0.65, 0.1, -0.3], [1.1, 1.1, 0.6], true);
  addHairLock([-0.14, 0.52, 0.86], [0.55, -0.2, 0.25], [0.95, 0.95, 0.55], false);
  addHairLock([0.28, 0.52, 0.82], [0.55, 0.35, -0.55], [0.9, 0.9, 0.5], true);
  addHairLock([-0.36, 0.48, 0.78], [0.45, -0.4, 0.45], [0.85, 0.85, 0.5], false);

  // Top voluminous crown waves / tousles
  addHairLock([0.0, 1.16, 0.12], [-0.3, 0.0, 0.1], [1.35, 1.25, 0.9], true);
  addHairLock([-0.32, 1.12, 0.05], [-0.25, -0.3, 0.45], [1.2, 1.15, 0.85], false);
  addHairLock([0.34, 1.12, 0.05], [-0.25, 0.3, -0.45], [1.2, 1.15, 0.85], true);
  addHairLock([0.15, 1.22, -0.22], [-0.5, 0.15, -0.15], [1.4, 1.3, 0.9], false);
  addHairLock([-0.22, 1.18, -0.25], [-0.5, -0.2, 0.2], [1.3, 1.2, 0.85], true);

  // Side tufts & sideburns framing the face
  addHairLock([-0.84, 0.38, 0.32], [0.2, -0.5, 0.55], [0.9, 1.0, 0.6], false);
  addHairLock([0.84, 0.38, 0.32], [0.2, 0.5, -0.55], [0.9, 1.0, 0.6], false);
  addHairLock([-0.88, 0.02, 0.18], [0.1, -0.25, 0.2], [0.75, 0.85, 0.5], true);
  addHairLock([0.88, 0.02, 0.18], [0.1, 0.25, -0.2], [0.75, 0.85, 0.5], true);

  // Back fullness locks
  addHairLock([0.0, 0.42, -0.92], [-1.2, 0, 0], [1.3, 1.2, 0.9], false);
  addHairLock([-0.45, 0.25, -0.85], [-1.0, -0.4, 0.3], [1.1, 1.1, 0.8], false);
  addHairLock([0.45, 0.25, -0.85], [-1.0, 0.4, -0.3], [1.1, 1.1, 0.8], false);

  // ---------------------------------------------------------
  // 8. Neck & Stylized Dark Turtleneck / Collar
  // ---------------------------------------------------------
  const neckGeom = new THREE.CylinderGeometry(0.38, 0.46, 0.7, 24);
  const neck = new THREE.Mesh(neckGeom, skinMat);
  neck.position.set(0, -1.02, 0.04);
  headPivot.add(neck);

  const collarGeom = new THREE.TorusGeometry(0.48, 0.13, 16, 32);
  const collar = new THREE.Mesh(collarGeom, collarMat);
  collar.position.set(0, -1.34, 0.05);
  collar.rotation.x = Math.PI / 2;
  headPivot.add(collar);

  // Store references for dynamic interactive animation in render loop
  root.userData = {
    h: 3.2,
    isAvatar: true,
    headPivot,
    leftPupil,
    rightPupil,
    leftEarring,
    rightEarring,
  };

  return root;
}

