<template>
  <div id="wrapper">
    <!-- header -->
    <div class="header"></div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, "Microsoft YaHei", "微软雅黑", sans-serif;
  font-size: 13px;
}

.header {
  position: fixed;
  width: 100%;
  height: 45px;
  background-color: #a1393c;
  background-image: url("../assets/logo.png");
  background-position: center center;
  background-size: 100px;
  background-repeat: no-repeat;
  box-shadow: 0 1px 3px #ccc;
}

.view {
  padding-top: 45px;
}
</style>
