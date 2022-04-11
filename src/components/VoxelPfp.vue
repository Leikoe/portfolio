<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../lib/model";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const voxelpfp = ref(null);

var renderer = undefined;
var target = new THREE.Vector3(-0.5, 1.2, 0);
const initialCameraPosition = new THREE.Vector3(
  20 * Math.sin(0.2 * Math.PI),
  10,
  20 * Math.cos(0.2 * Math.PI)
);
var scene = new THREE.Scene();
var controls = undefined;
var camera = undefined;

onMounted(() => {
  // the DOM element will be assigned to the ref after initial render
  const container = voxelpfp.value;

  const scW = container.clientWidth;
  const scH = container.clientWidth;

  const _renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  _renderer.setPixelRatio(window.devicePixelRatio);
  _renderer.setSize(scW, scH);
  _renderer.outputEncoding = THREE.sRGBEncoding;

  console.log(_renderer.domElement);

  container.appendChild(_renderer.domElement);
  renderer = _renderer;

  const scale = scH * 0.001 + 4.8;
  const _camera = new THREE.OrthographicCamera(
    -scale,
    scale,
    scale,
    -scale,
    0.01,
    50000
  );
  _camera.position.copy(initialCameraPosition);
  _camera.lookAt(target);
  camera = _camera;

  const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
  scene.add(ambientLight);

  const _controls = new OrbitControls(_camera, _renderer.domElement);
  _controls.autoRotate = true;
  _controls.target = target;
  controls = _controls;

  loadGLTFModel(scene, "/pfp.glb", {
    receiveShadow: false,
    castShadow: false,
  }).then(() => {
    animate();
    // setLoading(false);
  });

  let req = null;
  let frame = 0;
  const animate = () => {
    req = requestAnimationFrame(animate);

    frame = frame <= 100 ? frame + 1 : frame;

    if (frame <= 100) {
      const p = initialCameraPosition;
      const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

      _camera.position.y = 10;
      _camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
      _camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
      _camera.lookAt(target);
    } else {
      controls.update();
    }

    _renderer.render(scene, _camera);
  };
});
</script>

<template>
  <div ref="voxelpfp">
    <p class="invisible">c</p>
  </div>
</template>
