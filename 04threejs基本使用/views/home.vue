<template>
  <div id="container" />
  <!-- <canvas></canvas> -->
</template>

<script  setup>
import * as THREE from "three";
import { onMounted } from "vue";
onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const container = document.getElementById("container");
  console.log("container", container);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
});
</script>

<style scoped>
#three {
  height: 400px;
  /* width: 1000px;
  height: 1000px; */
  /* background: red; */
  /* position: fixed;
  left: 0;
  top: 0; */
}
</style>
