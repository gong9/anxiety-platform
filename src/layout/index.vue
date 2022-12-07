<script setup lang='ts'>
import { } from 'vue'
import AppMain from './appMain/index.vue'
import Navbar from './navbar/index.vue'
import Sidebar from './sidebar/index.vue'
</script>

<template>
  <div class="root-container">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
