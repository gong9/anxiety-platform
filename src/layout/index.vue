<script setup lang='ts'>
import { ref } from 'vue'
import AppMain from './appMain/index.vue'
import Navbar from './navbar/index.vue'
import Sidebar from './sidebar/index.vue'

const sidebarBackgroundColor = ref('#2b2e31')
</script>

<template>
  <div class="root-container">
    <Sidebar class="sidebar-container" :sidebar-background-color="sidebarBackgroundColor" />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
