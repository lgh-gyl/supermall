<template>
  <div id="app" class="wrapper">
   <!-- 代码规范 -->
    <!-- <tab-bar>
      <tab-bar-item>
        <img src="" alt="">
        <div></div>
      </tab-bar-item>
    </tab-bar> -->
    <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
 import MainTabBar from './components/content/MainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
     MainTabBar
   
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
