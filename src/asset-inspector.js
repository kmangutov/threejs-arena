import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  PROCEDURAL_ASSETS,
  createProceduralAsset,
} from './procedural-structures.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9fc7cf);
scene.fog = new THREE.Fog(0x9fc7cf, 34, 82);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 240);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.maxPolarAngle = Math.PI * 0.49;

scene.add(new THREE.HemisphereLight(0xd6f1ff, 0x5d4a2f, 2.3));
const sun = new THREE.DirectionalLight(0xffe6b0, 3.2);
sun.position.set(13, 22, 12);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -24;
sun.shadow.camera.right = 24;
sun.shadow.camera.top = 24;
sun.shadow.camera.bottom = -24;
scene.add(sun);

const ground = new THREE.Mesh(
  new THREE.CircleGeometry(48, 64),
  new THREE.MeshStandardMaterial({ color: 0x557b31, roughness: 1 }),
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const select = document.querySelector('#asset-select');
const category = document.querySelector('#asset-category');
const size = document.querySelector('#asset-size');
const meshes = document.querySelector('#asset-meshes');
const triangles = document.querySelector('#asset-triangles');
let subject;

for (const asset of PROCEDURAL_ASSETS) {
  let group = [...select.children].find(option => option.label === asset.category);
  if (!group) {
    group = document.createElement('optgroup');
    group.label = asset.category;
    select.appendChild(group);
  }
  const option = document.createElement('option');
  option.value = asset.id;
  option.textContent = asset.label;
  group.appendChild(option);
}

function inspectAsset(id) {
  if (subject) {
    scene.remove(subject);
    disposeDeep(subject);
  }
  subject = createProceduralAsset(id, { seed: 73 });
  scene.add(subject);
  scene.updateMatrixWorld(true);

  const bounds = new THREE.Box3().setFromObject(subject);
  const center = bounds.getCenter(new THREE.Vector3());
  subject.position.x -= center.x;
  subject.position.z -= center.z;
  subject.position.y -= bounds.min.y;
  scene.updateMatrixWorld(true);
  bounds.setFromObject(subject);

  const dimensions = bounds.getSize(new THREE.Vector3());
  const radius = Math.max(dimensions.x, dimensions.y, dimensions.z);
  controls.target.set(0, Math.max(dimensions.y * 0.36, 0.65), 0);
  camera.position.set(radius * 1.12, Math.max(radius * 0.86, dimensions.y * 0.82), radius * 1.32);
  controls.minDistance = Math.max(1.2, radius * 0.36);
  controls.maxDistance = Math.max(12, radius * 4.5);
  controls.update();

  let meshCount = 0;
  let triangleCount = 0;
  subject.traverse(object => {
    if (!object.isMesh) return;
    meshCount++;
    const geometry = object.geometry;
    triangleCount += geometry.index ? geometry.index.count / 3 : geometry.attributes.position.count / 3;
  });

  const asset = PROCEDURAL_ASSETS.find(item => item.id === id);
  category.textContent = asset.category;
  size.textContent = [dimensions.x, dimensions.y, dimensions.z].map(value => value.toFixed(1)).join(' x ');
  meshes.textContent = String(meshCount);
  triangles.textContent = Math.round(triangleCount).toLocaleString();
  select.value = id;
  history.replaceState(null, '', `?asset=${id}`);
}

function disposeDeep(root) {
  root.traverse(object => {
    if (!object.isMesh) return;
    object.geometry?.dispose();
    if (Array.isArray(object.material)) object.material.forEach(material => material.dispose());
    else object.material?.dispose();
  });
}

select.addEventListener('change', () => inspectAsset(select.value));
const initialAsset = new URLSearchParams(location.search).get('asset');
inspectAsset(PROCEDURAL_ASSETS.some(asset => asset.id === initialAsset) ? initialAsset : 'castle-keep');

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
