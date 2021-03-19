<template>
  <div id="app">

   <!-- 代码规范 -->
    <!-- <tab-bar>
      <tab-bar-item>
        <img src="" alt="">
        <div></div>
      </tab-bar-item>
    </tab-bar> -->

    <!-- <tab-bar>
       <tab-bar-item path="/home" activeColor="pink">
         <img slot="item-icon" src="./assets/img/tabbar/home-active.svg" alt="">
          <img slot="item-icon-active" src="./assets/img/tabbar/home.svg" alt="">
         <div slot="item-text">首页</div>
       </tab-bar-item>
      
       <tab-bar-item path="/category" activeColor="pink">
          <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="./assets/img/tabbar/catgory-active.svg" alt="">
         <div slot="item-text">分类</div>
       </tab-bar-item> 
    
       <tab-bar-item path="/cart" activeColor="pink">
           <img slot="item-icon" src="./assets/img/tabbar/profile-active.svg" alt="">
           <img slot="item-icon-active" src="./assets/img/tabbar/profile.svg" alt="">
         <div slot="item-text">购物车</div>
       </tab-bar-item>

       <tab-bar-item path="/profile" activeColor="pink">
          <img slot="item-icon" src="./assets/img/tabbar/shopcat-active.svg" alt="">
          <img slot="item-icon-active" src="./assets/img/tabbar/shopcat.svg" alt="">
         <div slot="item-text">我的</div>
       </tab-bar-item>
    </tab-bar> -->
    <router-view></router-view>
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
