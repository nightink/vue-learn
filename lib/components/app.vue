<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header"></div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style></style>
