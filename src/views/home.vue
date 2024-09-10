<template>
  <div class="content">
    <div class="a-text">1</div>
    <div class="a-img1">2</div>
    <div class="a-text">3</div>
    <div class="a-img2">4</div>
    <div class="a-text">5</div>
    <div class="a-img3">6</div>
    <div class="a-text">7</div>
  </div>
</template>

<script setup></script>
<style scoped lang="less">
div {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  line-height: 100vh;
  text-align: center;
  font-size: 20vh;
}

.a-img1 {
  background-image: url(https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.a-img2 {
  background-image: url(https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.a-img3 {
  background-image: url(https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
</style>
